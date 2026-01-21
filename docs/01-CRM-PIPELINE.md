# ForgedLocal CRM Pipeline

## Overview
5-stage pipeline for tracking leads from first contact to paying customer.

---

## Pipeline Stages

### 1. 🆕 NEW LEAD
**Trigger:** Form submission, phone call, or Calendly booking

**Fields to capture:**
- [ ] Name
- [ ] Email
- [ ] Phone
- [ ] Business name
- [ ] Trade type (HVAC, Plumbing, Roofing, Electrical, Landscaping, Other)
- [ ] Service area / town
- [ ] Estimated call volume (1-5, 5-10, 10-20, 20+/week)
- [ ] Lead source (website, referral, ad)
- [ ] Date/time of inquiry

**SLA:** Contact within 5 minutes during business hours, 2 hours outside

---

### 2. 📞 CONTACTED
**Trigger:** First conversation completed

**Fields to update:**
- [ ] Current phone setup (cell, office line, VoIP provider)
- [ ] Decision maker confirmed (Y/N)
- [ ] Best contact method (call, text, email)
- [ ] Estimated missed calls/week
- [ ] Average job value
- [ ] Pain points (notes)
- [ ] Competitor solutions they've tried

**Next step:** Schedule demo/setup call

---

### 3. 📅 DEMO SCHEDULED
**Trigger:** Calendly booking confirmed for setup call

**Pre-call checklist:**
- [ ] Review their website/Google listing
- [ ] Note their current phone number
- [ ] Prepare ROI calculation based on their numbers
- [ ] Have pilot offer ready

**Call agenda:**
1. Confirm pain points (2 min)
2. Explain how ForgedLocal works (3 min)
3. Walk through their specific setup (3 min)
4. Present pilot offer (2 min)

---

### 4. 🔧 TRIAL/PILOT LIVE
**Trigger:** Call forwarding activated, system live

**Pilot tracking:**
- [ ] Pilot start date
- [ ] Pilot end date (14 days later)
- [ ] Calls received
- [ ] Texts sent
- [ ] Leads captured
- [ ] Jobs booked (self-reported)

**Week 1 check-in:**
- How's the system working?
- Any issues with text wording?
- Have they seen recovered leads?

**End of pilot:**
- Review metrics together
- Present tier recommendation
- Close or extend

---

### 5. 💰 PAYING
**Trigger:** First payment received

**Ongoing tracking:**
- [ ] Monthly plan tier (Starter/Growth/Scale)
- [ ] Monthly revenue
- [ ] Calls/month
- [ ] Churn risk (Low/Medium/High)
- [ ] Renewal date
- [ ] Upsell opportunity notes

**Monthly touchpoint:**
- Send performance report
- Check satisfaction
- Look for referral opportunity

---

## CRM Tool Recommendations

### Free/Low-cost options:
1. **HubSpot Free CRM** - Best if already using HubSpot for forms
2. **Notion** - Great for small operation, very flexible
3. **Airtable** - Spreadsheet-like, easy reporting
4. **Google Sheets** - Simplest, good for <50 leads

### Fields to create:
```
- Lead ID (auto)
- Name
- Email
- Phone
- Business Name
- Trade Type (dropdown)
- Service Area
- Call Volume Estimate (dropdown)
- Current Phone Setup
- Average Job Value
- Lead Source
- Stage (dropdown)
- Stage Changed Date
- Notes
- Next Action
- Next Action Date
- Owner
```

---

## Lead Scoring (Optional)

**Hot Lead indicators (+10 points each):**
- Booked Calendly within 24 hours
- Call volume 10+/week
- Average job value >$500
- Asked about pricing
- Currently using competitor

**Cold Lead indicators (-5 points each):**
- No response after 3 attempts
- <5 calls/week
- "Just researching"
- No decision-making authority

---

## Reporting Dashboard

### Weekly metrics to track:
| Metric | Target |
|--------|--------|
| New leads | 10+ |
| Contacted rate | >90% same day |
| Demos booked | 5+ |
| Pilots started | 3+ |
| Conversions | 2+ |
| CAC | <$100 |

### Monthly metrics:
- Total MRR
- Churn rate
- Average pilot→paid conversion rate
- Referral rate
- NPS (quarterly)




