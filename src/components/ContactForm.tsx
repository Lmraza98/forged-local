"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Check, CircleAlert, LoaderCircle, X } from "lucide-react";
import { trackEvent } from "@/components/Analytics";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };
type FieldErrors = Record<string, string>;

const validationMessages: Record<string, string> = {
  name: "Please enter your name.",
  businessName: "Please enter your business name.",
  email: "Enter a valid email address.",
  phone: "Enter a phone number where we can reach you.",
  helpType: "Choose the kind of help you need.",
  contactMethod: "Choose how you would like us to respond.",
  message: "Tell us briefly what you need.",
};

const fieldLabels: Record<string, string> = {
  name: "Name",
  businessName: "Business name",
  email: "Email",
  phone: "Phone",
  helpType: "Type of help",
  contactMethod: "Preferred contact",
  message: "What is happening?",
};

function validateControl(control: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
  if (control.validity.valid) return "";
  return validationMessages[control.name] ?? "Please check this field.";
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const closeSuccess = useCallback(() => {
    setStatus({ type: "idle" });
    window.requestAnimationFrame(() => submitButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    if (status.type !== "success") return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSuccess();
      if (event.key !== "Tab") return;

      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeSuccess, status.type]);

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
      trackEvent("it_inquiry", { form_name: "contact" });
      setStatus({ type: "success" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    }
  }

  const fieldState = (name: string, helperId?: string) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : helperId,
  });

  return (
    <>
    <form className="contact-form" onSubmit={submit} noValidate data-spotlight>
      <div className="form-heading">
        <span>01</span>
        <div>
          <h2>What can we help with?</h2>
          <p>A few details are enough to start the conversation.</p>
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
            placeholder="Your phone number"
            {...fieldState("phone")}
            onBlur={(event) => validateField(event.currentTarget)}
            onChange={() => clearFieldError("phone")}
          />
          {errors.phone && <small className="field-error" id="phone-error"><CircleAlert />{errors.phone}</small>}
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
            <option>Computer or account issue</option>
            <option>Microsoft 365 or email</option>
            <option>Network or Wi-Fi</option>
            <option>Security or backups</option>
            <option>Software or workflow</option>
            <option>Ongoing IT support</option>
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
          <span className="field-label">What is happening? <b>*</b></span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="What is the problem, and how is it affecting your work?"
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
      <button ref={submitButtonRef} className="button submit-button" disabled={status.type === "loading"}>
        {status.type === "loading" ? (
          <><LoaderCircle className="spinner" /> Sending your request…</>
        ) : (
          <>Send IT request <ArrowRight size={18} /></>
        )}
      </button>
      {status.type === "error" && (
        <p className="form-status error" role="alert"><CircleAlert />{status.message}</p>
      )}
    </form>
    {status.type === "success" && (
      <div className="success-modal-backdrop">
        <div
          ref={modalRef}
          className="success-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
          aria-describedby="success-modal-description"
        >
          <button
            ref={closeButtonRef}
            className="success-modal-close"
            type="button"
            aria-label="Close confirmation"
            onClick={closeSuccess}
          >
            <X />
          </button>
          <span className="success-icon" aria-hidden="true"><Check /></span>
          <p className="eyebrow">Request received</p>
          <h2 id="success-modal-title">Form submitted successfully.</h2>
          <p id="success-modal-description">
            Thank you—your request has been received. We’ll follow up using your preferred contact method.
          </p>
          <button className="button" type="button" onClick={closeSuccess}>Got it</button>
        </div>
      </div>
    )}
    </>
  );
}
