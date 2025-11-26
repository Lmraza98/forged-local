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
        // Gather context data
        const pageUri = window.location.href
        const pageName = document.title
        
        // Get HubSpot cookie if it exists
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
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-semibold text-amber-900">Thanks!</h3>
        <p className="text-amber-800">We&apos;ll be in touch shortly to schedule your intro call.</p>
        <button 
          className="mt-6 text-sm font-medium text-amber-700 hover:text-amber-900 underline"
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="mx-auto max-w-md space-y-4"
    >
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
          <div className="space-y-1">
            <label htmlFor={field.name} className="text-xs font-medium text-slate-700">Name</label>
            <input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              placeholder="Jane Contractor"
            />
            {field.state.meta.errors ? (
              <p className="text-[0.7rem] text-red-500">
                {field.state.meta.errors.join(', ')}
              </p>
            ) : null}
          </div>
        )}
      </form.Field>

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
          <div className="space-y-1">
            <label htmlFor={field.name} className="text-xs font-medium text-slate-700">Work email</label>
            <input
              id={field.name}
              name={field.name}
              type="email"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              placeholder="you@example.com"
            />
            {field.state.meta.errors ? (
              <p className="text-[0.7rem] text-red-500">
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
          <div className="space-y-1">
            <label htmlFor={field.name} className="text-xs font-medium text-slate-700">Business name</label>
            <input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              placeholder="Forged Plumbing & HVAC"
            />
            {field.state.meta.errors ? (
              <p className="text-[0.7rem] text-red-500">
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
             const result = z.string().min(1, 'Phone number is required').safeParse(value)
             if (!result.success) return result.error.errors[0].message
          }
        }}
      >
        {(field) => (
          <div className="space-y-1">
            <label htmlFor={field.name} className="text-xs font-medium text-slate-700">Best phone number</label>
            <input
              id={field.name}
              name={field.name}
              type="tel"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              placeholder="(555) 123-4567"
            />
            {field.state.meta.errors ? (
              <p className="text-[0.7rem] text-red-500">
                {field.state.meta.errors.join(', ')}
              </p>
            ) : null}
          </div>
        )}
      </form.Field>

      <form.Field
        name="typeOfBusiness"
      >
        {(field) => (
          <div className="space-y-1">
            <label htmlFor={field.name} className="text-xs font-medium text-slate-700">
              Type of business <span className="text-slate-400">(Optional)</span>
            </label>
            <input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              placeholder="HVAC, roofing, landscaping, plumbing, etc."
            />
          </div>
        )}
      </form.Field>

      <form.Field
        name="estimatedMissedCalls"
      >
        {(field) => (
          <div className="space-y-1">
            <label htmlFor={field.name} className="text-xs font-medium text-slate-700">
              Estimated missed calls/leads per month <span className="text-slate-400">Optional</span>
            </label>
            <input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              placeholder="Example: 5–15"
            />
          </div>
        )}
      </form.Field>

      <form.Field
        name="message"
      >
        {(field) => (
          <div className="space-y-1">
            <label htmlFor={field.name} className="text-xs font-medium text-slate-700">
              Anything else we should know? <span className="text-slate-400">Optional</span>
            </label>
            <textarea
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              rows={4}
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              placeholder="Current phone setup, missed leads, or what you would like to improve."
            />
          </div>
        )}
      </form.Field>

      {error ? (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      ) : null}

      <p className="text-[0.7rem] text-slate-400">
        We&apos;ll never share your info or spam you.
      </p>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <button 
            type="submit" 
            disabled={!canSubmit} 
            className="inline-flex w-full justify-center rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Booking...' : 'Book a quick intro call'}
          </button>
        )}
      </form.Subscribe>

      <p className="text-center text-[0.7rem] text-slate-400">
        This form starts a conversation. You decide after our first call whether ForgedLocal is a fit.
      </p>
    </form>
  )
}
