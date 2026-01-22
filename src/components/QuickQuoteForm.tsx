'use client'

import * as React from 'react'
import { useForm } from '@tanstack/react-form'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

interface QuickQuoteFormProps {
  variant?: 'light' | 'dark'
}

export function QuickQuoteForm({ variant = 'dark' }: QuickQuoteFormProps) {
  const [error, setError] = React.useState<string | null>(null)
  const router = useRouter()

  const form = useForm({
    defaultValues: {
      phone: '',
      email: '',
      typeOfBusiness: '',
      company: ''
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
            phone: value.phone,
            email: value.email,
            typeOfBusiness: value.typeOfBusiness,
            company: value.company,
            pageUri,
            pageName,
            hutk
          })
        })

        if (!response.ok) {
          throw new Error('Submission failed')
        }

        // Track conversion in GTM/GA4
        if (typeof window !== 'undefined' && (window as Window & { dataLayer?: unknown[] }).dataLayer) {
          (window as Window & { dataLayer?: unknown[] }).dataLayer?.push({
            event: 'form_submit',
            form_name: 'quick_quote_form',
            form_destination: 'hubspot'
          })
        }

        router.push('/thank-you')
      } catch (err) {
        console.error(err)
        setError('Something went wrong. Please try again.')
      }
    }
  })

  const isDark = variant === 'dark'
  const inputClasses = isDark 
    ? "w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3.5 text-sm text-white placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition"
    : "w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
  
  const labelClasses = isDark 
    ? "block text-sm font-medium text-slate-300 mb-1.5"
    : "block text-sm font-medium text-slate-700 mb-1.5"

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="space-y-4"
    >
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

      <form.Field
        name="email"
        validators={{
          onChange: ({ value }) => {
            const result = z.string().email('Valid email required').safeParse(value)
            if (!result.success) return result.error.errors[0].message
          }
        }}
      >
        {(field) => (
          <div>
            <label htmlFor={field.name} className={labelClasses}>Email *</label>
            <input
              id={field.name}
              name={field.name}
              type="email"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={inputClasses}
              placeholder="you@company.com"
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
        name="typeOfBusiness"
        validators={{
          onChange: ({ value }) => {
            const result = z.string().min(1, 'Trade is required').safeParse(value)
            if (!result.success) return result.error.errors[0].message
          }
        }}
      >
        {(field) => (
          <div>
            <label htmlFor={field.name} className={labelClasses}>Trade *</label>
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
            {field.state.meta.errors ? (
              <p className="mt-1 text-xs text-red-400">
                {field.state.meta.errors.join(', ')}
              </p>
            ) : null}
          </div>
        )}
      </form.Field>

      <form.Field name="company">
        {(field) => (
          <div>
            <label htmlFor={field.name} className={labelClasses}>Business name (optional)</label>
            <input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className={inputClasses}
              placeholder="Your Business Name"
            />
          </div>
        )}
      </form.Field>

      {error ? (
        <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-sm text-red-400">
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
            className="w-full rounded-xl bg-amber-500 px-6 py-4 text-base font-bold text-slate-900 shadow-lg shadow-amber-500/25 transition hover:bg-amber-400 hover:shadow-amber-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
              'Get Free Quote'
            )}
          </button>
        )}
      </form.Subscribe>

      <p className={`text-center text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        No spam. We&apos;ll text or call within 1 business day.
      </p>
    </form>
  )
}

