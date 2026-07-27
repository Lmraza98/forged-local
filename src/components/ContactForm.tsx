"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, CircleAlert, LoaderCircle } from "lucide-react";
import { trackEvent } from "@/components/Analytics";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };
type FieldErrors = Record<string, string>;

const validationMessages: Record<string, string> = {
  name: "Please enter your name.",
  businessName: "Please enter your business name.",
  email: "Enter a valid email address.",
  phone: "Enter a phone number where we can reach you.",
  website: "Include the full address, such as https://example.com.",
  helpType: "Choose the kind of help you need.",
  contactMethod: "Choose how you would like us to respond.",
  message: "Tell us briefly what you need.",
};

const fieldLabels: Record<string, string> = {
  name: "Name",
  businessName: "Business name",
  email: "Email",
  phone: "Phone",
  website: "Current website",
  helpType: "Type of help",
  contactMethod: "Preferred contact",
  message: "Tell us about the project",
};

function validateControl(control: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
  if (control.name === "website" && !control.value) return "";
  if (control.validity.valid) return "";
  return validationMessages[control.name] ?? "Please check this field.";
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});

  function validateField(control: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
    const message = validateControl(control);
    setErrors((current) => {
      if (message) return { ...current, [control.name]: message };
      const next = { ...current };
      delete next[control.name];
      return next;
    });
  }

  function clearFieldError(name: string) {
    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
    setStatus((current) => current.type === "error" ? { type: "idle" } : current);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const controls = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        "input:not(.honeypot input), select, textarea",
      ),
    );
    const nextErrors = Object.fromEntries(
      controls.map((control) => [control.name, validateControl(control)]).filter(([, message]) => message),
    );

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      const firstInvalid = controls.find((control) => nextErrors[control.name]);
      const invalidNames = Object.keys(nextErrors);
      setStatus({
        type: "error",
        message: invalidNames.length === 1
          ? `Please check “${fieldLabels[invalidNames[0]] ?? "the highlighted field"}.”`
          : `Please check the ${invalidNames.length} highlighted fields.`,
      });
      firstInvalid?.focus();
      return;
    }

    setErrors({});
    setStatus({ type: "loading" });
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not send your request.");
      form.reset();
      trackEvent("website_review_request", { form_name: "free_website_review" });
      setStatus({ type: "success", message: "Thanks—your request was sent. We’ll be in touch soon." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    }
  }

  if (status.type === "success") {
    return (
      <div className="form-success" role="status" data-reveal>
        <span className="success-icon"><Check /></span>
        <p className="eyebrow">Request received</p>
        <h2>You’re on the list.</h2>
        <p>{status.message}</p>
        <button className="text-button" type="button" onClick={() => setStatus({ type: "idle" })}>
          Send another request <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  const fieldState = (name: string, helperId?: string) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : helperId,
  });

  return (
    <form className="contact-form" onSubmit={submit} noValidate data-spotlight>
      <div className="form-heading">
        <span>01</span>
        <div>
          <h2>Tell us what you’re working with.</h2>
          <p>Most people finish this in about two minutes.</p>
        </div>
      </div>
      <div className="form-grid">
        <label className="field-wrap">
          <span className="field-label">Name <b>*</b></span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            {...fieldState("name")}
            onBlur={(event) => validateField(event.currentTarget)}
            onChange={() => clearFieldError("name")}
          />
          {errors.name && <small className="field-error" id="name-error"><CircleAlert />{errors.name}</small>}
        </label>
        <label className="field-wrap">
          <span className="field-label">Business name <b>*</b></span>
          <input
            name="businessName"
            required
            autoComplete="organization"
            placeholder="Your business"
            {...fieldState("businessName")}
            onBlur={(event) => validateField(event.currentTarget)}
            onChange={() => clearFieldError("businessName")}
          />
          {errors.businessName && <small className="field-error" id="businessName-error"><CircleAlert />{errors.businessName}</small>}
        </label>
        <label className="field-wrap">
          <span className="field-label">Email <b>*</b></span>
          <input
            name="email"
            required
            type="email"
            autoComplete="email"
            placeholder="you@business.com"
            {...fieldState("email")}
            onBlur={(event) => validateField(event.currentTarget)}
            onChange={() => clearFieldError("email")}
          />
          {errors.email && <small className="field-error" id="email-error"><CircleAlert />{errors.email}</small>}
        </label>
        <label className="field-wrap">
          <span className="field-label">Phone <b>*</b></span>
          <input
            name="phone"
            required
            type="tel"
            minLength={7}
            autoComplete="tel"
            placeholder="(603) 555-0123"
            {...fieldState("phone")}
            onBlur={(event) => validateField(event.currentTarget)}
            onChange={() => clearFieldError("phone")}
          />
          {errors.phone && <small className="field-error" id="phone-error"><CircleAlert />{errors.phone}</small>}
        </label>
        <label className="field-wrap full">
          <span className="field-label">Current website <em>Optional</em></span>
          <input
            name="website"
            type="url"
            inputMode="url"
            placeholder="https://"
            {...fieldState("website")}
            onBlur={(event) => validateField(event.currentTarget)}
            onChange={() => clearFieldError("website")}
          />
          {errors.website && <small className="field-error" id="website-error"><CircleAlert />{errors.website}</small>}
        </label>
        <label className="field-wrap">
          <span className="field-label">Type of help <b>*</b></span>
          <select
            name="helpType"
            required
            defaultValue=""
            {...fieldState("helpType")}
            onBlur={(event) => validateField(event.currentTarget)}
            onChange={() => clearFieldError("helpType")}
          >
            <option value="" disabled>Select one</option>
            <option>New website</option>
            <option>Website redesign</option>
            <option>Local SEO help</option>
            <option>Website maintenance</option>
            <option>Not sure yet</option>
          </select>
          {errors.helpType && <small className="field-error" id="helpType-error"><CircleAlert />{errors.helpType}</small>}
        </label>
        <label className="field-wrap">
          <span className="field-label">Preferred contact <b>*</b></span>
          <select
            name="contactMethod"
            required
            defaultValue=""
            {...fieldState("contactMethod")}
            onBlur={(event) => validateField(event.currentTarget)}
            onChange={() => clearFieldError("contactMethod")}
          >
            <option value="" disabled>Select one</option>
            <option>Email</option>
            <option>Phone</option>
            <option>Text message</option>
          </select>
          {errors.contactMethod && <small className="field-error" id="contactMethod-error"><CircleAlert />{errors.contactMethod}</small>}
        </label>
        <label className="field-wrap full">
          <span className="field-label">Tell us about the project <b>*</b></span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="What do you do, and what would you like your website to improve?"
            {...fieldState("message", "message-help")}
            onBlur={(event) => validateField(event.currentTarget)}
            onChange={() => clearFieldError("message")}
          />
          {errors.message ? (
            <small className="field-error" id="message-error"><CircleAlert />{errors.message}</small>
          ) : (
            <small id="message-help">A few words is enough—you can keep this brief.</small>
          )}
        </label>
        <label className="honeypot" aria-hidden="true">
          Leave this field empty
          <input name="companyUrl" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="form-privacy">
        By submitting, you agree that ForgedLocal may contact you about your request. Your information will not be sold. See our <a href="/privacy">privacy policy</a>.
      </p>
      <button className="button submit-button" disabled={status.type === "loading"}>
        {status.type === "loading" ? (
          <><LoaderCircle className="spinner" /> Reviewing your details…</>
        ) : (
          <>Request my free website review <ArrowRight size={18} /></>
        )}
      </button>
      {status.type === "error" && (
        <p className="form-status error" role="alert"><CircleAlert />{status.message}</p>
      )}
    </form>
  );
}
