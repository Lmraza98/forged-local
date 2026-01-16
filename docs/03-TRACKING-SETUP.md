# ForgedLocal Tracking Setup Guide

## Overview
Set up GA4 + GTM to track the full funnel before spending on acquisition.

---

## Step 1: Create Google Analytics 4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Admin" → "Create Property"
3. Property name: "ForgedLocal Website"
4. Select your timezone and currency
5. Choose "Web" as platform
6. Enter: `forgedlocal.com`
7. Copy your **Measurement ID** (G-XXXXXXXXXX)

### Update in Code:
Edit `src/components/Analytics.tsx`:
```javascript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Your actual ID
```

---

## Step 2: Create Google Tag Manager Container

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Create new container
3. Container name: "ForgedLocal"
4. Target platform: "Web"
5. Copy your **Container ID** (GTM-XXXXXXX)

### Update in Code:
Edit `src/components/Analytics.tsx`:
```javascript
const GTM_ID = 'GTM-XXXXXXX' // Your actual ID
```

---

## Step 3: Configure GTM Tags

### Tag 1: GA4 Configuration
- Tag Type: Google Analytics: GA4 Configuration
- Measurement ID: Your G-XXXXXXXXXX
- Trigger: All Pages

### Tag 2: Form Submit Event
- Tag Type: Google Analytics: GA4 Event
- Event Name: `form_submit`
- Configuration Tag: Your GA4 config
- Trigger: Custom Event → `form_submit`

### Tag 3: CTA Click Events
- Tag Type: Google Analytics: GA4 Event
- Event Name: `cta_click`
- Event Parameters:
  - cta_text: {{Click Text}}
  - cta_location: {{Click URL}}
- Trigger: Click - All Elements
  - Filter: Click URL contains "calendly.com" OR Click Classes contains "cta"

### Tag 4: Calendly Booking
- Tag Type: Google Analytics: GA4 Event
- Event Name: `calendly_scheduled`
- Trigger: Custom Event → `calendly.event_scheduled`

---

## Step 4: Calendly Event Tracking

Add to thank-you page or anywhere Calendly widget loads:

```javascript
// Calendly tracking
window.addEventListener('message', function(e) {
  if (e.data.event && e.data.event.indexOf('calendly') === 0) {
    if (e.data.event === 'calendly.event_scheduled') {
      // Push to dataLayer for GTM
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'calendly_scheduled',
        calendly_event_type: e.data.payload?.event_type?.name,
        calendly_invitee_email: e.data.payload?.invitee?.email
      });
    }
  }
});
```

---

## Step 5: ForgedLocal Call Tracking

### For your own marketing:
1. Get a separate tracking number (not client numbers)
2. Use services like:
   - CallRail
   - CallTrackingMetrics
   - WhatConverts
3. Track calls from:
   - Website
   - Ads
   - Referral sources

### Number to use:
- Website header: Tracking number
- Ads: Different tracking number per campaign
- Keep personal/client numbers separate

---

## Step 6: Conversion Goals in GA4

### Set up these conversions:
1. `form_submit` - Quote request submitted
2. `calendly_scheduled` - Call booked
3. `cta_click` (with calendly.com) - Calendly opened

### How to set up:
1. GA4 → Admin → Events
2. Find your event
3. Toggle "Mark as conversion"

---

## Step 7: Weekly Dashboard (Google Sheets)

Create a simple sheet to track weekly:

| Week | Visitors | CTA Clicks | Form Submits | Calls Booked | Deals Won | Revenue | CAC |
|------|----------|------------|--------------|--------------|-----------|---------|-----|
| W1   |          |            |              |              |           |         |     |
| W2   |          |            |              |              |           |         |     |

### Data sources:
- **Visitors:** GA4 → Reports → Acquisition
- **CTA Clicks:** GA4 → Events → cta_click
- **Form Submits:** GA4 → Conversions or HubSpot
- **Calls Booked:** Calendly dashboard
- **Deals Won:** CRM
- **Revenue:** Stripe/payment processor
- **CAC:** (Time spent + Ad spend) / Deals Won

---

## Step 8: UTM Parameters

Use UTM tags for all marketing:

### Format:
```
https://forgedlocal.com/?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN
```

### Examples:
```
# Facebook Ad
?utm_source=facebook&utm_medium=paid&utm_campaign=hvac-q1

# Google Search Ad  
?utm_source=google&utm_medium=cpc&utm_campaign=plumber-nh

# LinkedIn Post
?utm_source=linkedin&utm_medium=organic&utm_campaign=launch

# Email Newsletter
?utm_source=email&utm_medium=newsletter&utm_campaign=jan-update

# Referral Partner
?utm_source=referral&utm_medium=partner&utm_campaign=contractor-mike
```

---

## Key Metrics to Watch

### Leading indicators (weekly):
- Website visitors
- Time on page
- CTA click rate
- Form completion rate
- Calendly booking rate

### Lagging indicators (monthly):
- Cost per lead
- Lead → Demo rate
- Demo → Pilot rate
- Pilot → Paid rate
- Customer acquisition cost (CAC)
- Lifetime value (LTV)
- LTV:CAC ratio (target: 3:1+)

---

## Testing Checklist

Before launching any campaign:

- [ ] GA4 is receiving pageviews
- [ ] Form submit events are firing
- [ ] Calendly events are tracked
- [ ] Conversion goals are set
- [ ] UTM parameters work
- [ ] Dashboard is connected
- [ ] Call tracking number is live

---

## Quick Debug

### Check GA4:
1. GA4 → Reports → Realtime
2. Open website in new tab
3. Should see yourself as active user

### Check GTM:
1. GTM → Preview mode
2. Open website
3. Debug panel shows tags firing

### Check form tracking:
1. Submit test form
2. GA4 → Realtime → Events
3. Should see `form_submit` event

