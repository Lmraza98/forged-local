'use client'

import * as React from 'react'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      typeOfBusiness: '',
      estimatedMissedCalls: '',
      message: ''
    },
    onSubmit: async ({ value }) => {
      setError(null)
      try {
        const pageUri = window.location.href
        const pageName = document.title
        
        const getCookie = (name: string) => {
          const value = `; ${document.cookie}`
          const parts = value.split(`; ${name}=`)
          if (parts.length === 2) return parts.pop()?.split(';').shift()
        }
        const hutk = getCookie('hubspotutk')

        const response = await fetch('/api/hubspot-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...value,
            pageUri,
            pageName,
            hutk
          })
        })

        if (!response.ok) {
          throw new Error('Submission failed')
        }

        setIsSubmitted(true)
      } catch (err) {
        console.error(err)
        setError('Something went wrong. Please email us directly.')
      }
    }
  })

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500">
          <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">We got your message!</h3>
        <p className="text-slate-300">We&apos;ll be in touch within 24 hours to schedule your intro call.</p>
        <button 
          className="mt-6 text-sm font-medium text-amber-400 hover:text-amber-300 underline underline-offset-4"
          onClick={() => {
            setIsSubmitted(false)
            form.reset()
          }}
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClasses = "w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition"
  const labelClasses = "block text-sm font-medium text-slate-300 mb-1.5"

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <form.Field
          name="name"
          validators={{
            onChange: ({ value }) => {
              const result = z.string().min(1, 'Name is required').safeParse(value)
              if (!result.success) return result.error.errors[0].message
            }
          }}
        >
          {(field) => (
            <div>
              <label htmlFor={field.name} className={labelClasses}>Your name *</label>
              <input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={inputClasses}
                placeholder="Jane Smith"
              />
              {field.state.meta.errors ? (
                <p className="mt-1 text-xs text-red-400">
                  {field.state.meta.errors.join(', ')}
                </p>
              ) : null}
            </div>
          )}
        </form.Field>

        <form.Field
          name="phone"
          validators={{
            onChange: ({ value }) => {
              const result = z.string().min(1, 'Phone is required').safeParse(value)
              if (!result.success) return result.error.errors[0].message
            }
          }}
        >
          {(field) => (
            <div>
              <label htmlFor={field.name} className={labelClasses}>Phone number *</label>
              <input
                id={field.name}
                name={field.name}
                type="tel"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={inputClasses}
                placeholder="(555) 123-4567"
              />
              {field.state.meta.errors ? (
                <p className="mt-1 text-xs text-red-400">
                  {field.state.meta.errors.join(', ')}
                </p>
              ) : null}
            </div>
          )}
        </form.Field>
      </div>

      <form.Field
        name="email"
        validators={{
          onChange: ({ value }) => {
            const result = z.string().email('Invalid email address').safeParse(value)
            if (!result.success) return result.error.errors[0].message
          }
        }}
      >
        {(field) => (
          <div>
            <label htmlFor={field.name} className={labelClasses}>Work email *</label>
            <input
              id={field.name}
              name={field.name}
              type="email"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={inputClasses}
              placeholder="you@yourbusiness.com"
            />
            {field.state.meta.errors ? (
              <p className="mt-1 text-xs text-red-400">
                {field.state.meta.errors.join(', ')}
              </p>
            ) : null}
          </div>
        )}
      </form.Field>

      <form.Field
        name="company"
        validators={{
          onChange: ({ value }) => {
            const result = z.string().min(1, 'Business name is required').safeParse(value)
            if (!result.success) return result.error.errors[0].message
          }
        }}
      >
        {(field) => (
          <div>
            <label htmlFor={field.name} className={labelClasses}>Business name *</label>
            <input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={inputClasses}
              placeholder="Smith Plumbing & HVAC"
            />
            {field.state.meta.errors ? (
              <p className="mt-1 text-xs text-red-400">
                {field.state.meta.errors.join(', ')}
              </p>
            ) : null}
          </div>
        )}
      </form.Field>

      <form.Field name="typeOfBusiness">
        {(field) => (
          <div>
            <label htmlFor={field.name} className={labelClasses}>
              Type of business
            </label>
            <select
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={inputClasses}
            >
              <option value="">Select your trade...</option>
              <option value="hvac">HVAC</option>
              <option value="plumbing">Plumbing</option>
              <option value="roofing">Roofing</option>
              <option value="electrical">Electrical</option>
              <option value="landscaping">Landscaping</option>
              <option value="general-contractor">General Contractor</option>
              <option value="other">Other</option>
            </select>
          </div>
        )}
      </form.Field>

      <form.Field name="estimatedMissedCalls">
        {(field) => (
          <div>
            <label htmlFor={field.name} className={labelClasses}>
              How many calls do you miss per week?
            </label>
            <select
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={inputClasses}
            >
              <option value="">Select an estimate...</option>
              <option value="1-5">1-5 calls</option>
              <option value="5-10">5-10 calls</option>
              <option value="10-20">10-20 calls</option>
              <option value="20+">20+ calls</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>
        )}
      </form.Field>

      <form.Field name="message">
        {(field) => (
          <div>
            <label htmlFor={field.name} className={labelClasses}>
              Anything else we should know?
            </label>
            <textarea
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              rows={3}
              className={inputClasses}
              placeholder="Current phone setup, biggest frustrations, specific questions..."
            />
          </div>
        )}
      </form.Field>

      {error ? (
        <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-4 text-sm text-red-400">
          {error}
        </div>
      ) : null}

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <button 
            type="submit" 
            disabled={!canSubmit} 
            className="w-full rounded-xl bg-amber-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-amber-500/25 transition hover:bg-amber-400 hover:shadow-amber-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Get My Free Quote →'
            )}
          </button>
        )}
      </form.Subscribe>

      <p className="text-center text-xs text-slate-400">
        No spam. We&apos;ll reach out within 24 hours to schedule a quick call.
      </p>
    </form>
  )
}
