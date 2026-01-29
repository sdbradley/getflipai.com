# Marketing Site - Stripe Subscriptions Implementation Plan

## Context
This is part of a larger Stripe subscriptions integration. The marketing site changes are minimal:
- Update CTA buttons to link to web app registration
- Keep existing Kit email signup for lead nurturing

**Related Plans:**
- `plan-flipai-api.md` - Backend subscription/webhook handling
- `plan-flipai-web.md` - Frontend upgrade page and trial UI

**Tech Stack:** Astro 5, Tailwind CSS
**Deployment:** GitHub Pages at `getflipai.com`

---

## Changes Overview

The marketing site stays fully static. We're simply updating button links to point to the web app instead of scrolling to the email form.

**App Registration URL:** `https://app.getflipai.com/register`

**Query Parameters for Plan Tracking:**
| Source | URL |
|--------|-----|
| Starter plan CTA | `https://app.getflipai.com/register?plan=starter` |
| Active Flipper plan CTA | `https://app.getflipai.com/register?plan=active` |
| Hero CTA | `https://app.getflipai.com/register` (no plan param) |
| Nav CTA | `https://app.getflipai.com/register` (no plan param) |
| Flip Team CTA | `mailto:sales@getflipai.com` |

---

## Implementation Tasks

### 1. Update Pricing CTAs
**File:** `src/components/Pricing.astro`

Change the `href` for Starter and Pro plan buttons:

**Before:**
```astro
<a href="#cta" class="...">
  {plan.cta}
</a>
```

**After:**
```astro
<a
  href={plan.name === 'Team' ? '#contact' : 'https://app.getflipai.com/register'}
  class="..."
>
  {plan.cta}
</a>
```

Or update the plans data to include the href:
```astro
const plans = [
  {
    name: 'Starter',
    price: '$29',
    // ...
    cta: 'Start Free Trial',
    href: 'https://app.getflipai.com/register',
  },
  {
    name: 'Pro',
    price: '$79',
    // ...
    cta: 'Start Free Trial',
    href: 'https://app.getflipai.com/register',
  },
  {
    name: 'Team',
    price: '$199',
    // ...
    cta: 'Contact Sales',
    href: 'mailto:sales@getflipai.com', // or '#cta' to scroll to contact form
  },
];
```

---

### 2. Update Hero CTA
**File:** `src/components/Hero.astro`

Find the main CTA button and update:

**Before:**
```astro
<a href="#cta" class="...">
  Start Analyzing Deals
</a>
```

**After:**
```astro
<a href="https://app.getflipai.com/register" class="...">
  Start Free Trial
</a>
```

Consider updating the button text to be clearer about the action.

---

### 3. Update Navigation CTA
**File:** `src/components/Nav.astro`

Find the "Get Started" button:

**Before:**
```astro
<a href="#cta" class="...">
  Get Started
</a>
```

**After:**
```astro
<a href="https://app.getflipai.com/register" class="...">
  Start Free Trial
</a>
```

---

### 4. Keep Kit Email Signup (No Changes)
**File:** `src/components/CTA.astro`

Keep the existing email capture form as-is. This serves as:
- Lead capture for users not ready to sign up
- Newsletter signups
- Contact form alternative

The Kit integration is separate from the trial signup flow.

---

### 5. Optional: Update Messaging
**File:** Various components

Consider updating copy to be consistent:
- "14-day free trial" → "7-day free trial" (to match actual trial length)
- Ensure all messaging reflects the self-serve signup flow

Files to check:
- `src/components/Pricing.astro` - trial messaging
- `src/components/Hero.astro` - value prop
- `src/components/CTA.astro` - form messaging

---

## Files Summary

| File | Action |
|------|--------|
| `src/components/Pricing.astro` | Modify - update CTA links |
| `src/components/Hero.astro` | Modify - update CTA link |
| `src/components/Nav.astro` | Modify - update CTA link |
| `src/components/CTA.astro` | No changes (keep Kit form) |

---

## Testing Checklist

- [x] Pricing "Start Free Trial" buttons link to `app.getflipai.com/register?plan=starter` and `?plan=active`
- [x] Pricing "Contact Sales" button has appropriate action (mailto:sales@getflipai.com)
- [x] Hero CTA links to registration
- [x] Nav "Start Free Trial" links to registration
- [ ] Kit email form still works
- [ ] All links open in same tab (no target="_blank" needed for same-domain feel)
- [x] Trial length messaging is consistent (7 days)

---

## Deployment

After changes:
```bash
npm run build
# Commit and push to trigger GitHub Pages deploy
```

No environment variables needed - all links are hardcoded public URLs.
