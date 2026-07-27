# Launch configuration

All public business details and editable starting prices live in `src/config/site.ts`.

Before launch, replace the placeholder phone number, founder name, founder biography,
and founder photo placeholder. Confirm the email address and canonical domain.

## Contact form

The form validates on the client and server, includes a honeypot field, and submits
to HubSpot. The preferred production path uses an authenticated HubSpot private app:

```text
HUBSPOT_PERSONAL_ACCESS_KEY=
```

The private app requires permission to read and write CRM contacts. The endpoint
upserts contacts by email so repeat inquiries update the existing contact. The
website URL and project details are saved with the inquiry.

The anonymous Forms API remains available as a fallback when both variables below
are configured and the HubSpot portal permits public form submissions:

```text
HUBSPOT_PORTAL_ID=
HUBSPOT_FORM_GUID=
CONTACT_FORM_RECIPIENT=hello@forgedlocal.com
```

Without the HubSpot variables, the API intentionally returns a visible setup message
and directs the visitor to email ForgedLocal. The form never reports a false success.

The HubSpot form should have fields for `firstname`, `company`, `email`, `phone`,
`website`, and `message`.

## Analytics and search

Set either or both analytics variables as needed:

```text
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
```

Create phone-link, email-link, and form-success events in the selected analytics
platform after an account and measurement plan are approved. Verify the domain in
Google Search Console and submit `https://forgedlocal.com/sitemap.xml`.
