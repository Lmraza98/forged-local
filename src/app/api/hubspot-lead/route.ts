import { NextResponse } from 'next/server'
import { z } from 'zod'

// Schema requires phone and email (HubSpot needs email as contact identifier)
const schema = z.object({
  name: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  company: z.string().optional(),
  message: z.string().optional(),
  typeOfBusiness: z.string().optional(),
  estimatedMissedCalls: z.string().optional(),
  hutk: z.string().optional(),
  pageUri: z.string().optional(),
  pageName: z.string().optional()
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = schema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation error', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const {
      name,
      email,
      phone,
      company,
      message,
      typeOfBusiness,
      estimatedMissedCalls,
      hutk,
      pageUri,
      pageName
    } = result.data

    // Determine first and last name logic (handle optional name)
    let finalFirstName = ''
    let finalLastName = ''
    if (name && name.trim()) {
      const parts = name.trim().split(' ')
      finalFirstName = parts[0]
      finalLastName = parts.length > 1 ? parts.slice(1).join(' ') : ''
    }

    const portalId = process.env.HUBSPOT_PORTAL_ID
    const formGuid = process.env.HUBSPOT_FORM_GUID || process.env.FORM_GUID

    console.log('HubSpot Debug - Portal ID:', portalId)
    console.log('HubSpot Debug - Form GUID:', formGuid)

    if (!portalId || !formGuid) {
      console.error('Missing HubSpot configuration: HUBSPOT_PORTAL_ID or HUBSPOT_FORM_GUID')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Combine additional fields into message for HubSpot context
    let finalMessage = message || ''
    if (typeOfBusiness) {
      finalMessage = `Type of Business: ${typeOfBusiness}\n\n${finalMessage}`
    }
    if (estimatedMissedCalls) {
      finalMessage = `Estimated Missed Calls: ${estimatedMissedCalls}\n\n${finalMessage}`
    }
    finalMessage = finalMessage.trim()

    // Map fields to HubSpot format
    const hubspotFields = [
      { name: 'firstname', value: finalFirstName },
      { name: 'lastname', value: finalLastName },
      { name: 'email', value: email },
      { name: 'phone', value: phone },
      { name: 'company', value: company },
      { name: 'message', value: finalMessage }
    ].filter(field => field.value !== undefined && field.value !== null && field.value !== '')

    const payload = {
      fields: hubspotFields,
      context: {
        hutk,
        pageUri,
        pageName
      }
    }

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    )

    // Attempt to parse JSON; fallback to text if it fails (HubSpot sometimes sends HTML on certain errors)
    let responseData
    const responseText = await response.text()
    try {
      responseData = JSON.parse(responseText)
    } catch {
      responseData = responseText
    }

    if (!response.ok) {
      console.error('HubSpot submission failed:', responseData)
      return NextResponse.json(
        { error: 'Failed to submit to HubSpot', details: responseData },
        { status: response.status }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
