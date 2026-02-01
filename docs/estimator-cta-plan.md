# Add Rehab Estimator CTA

## Summary
Add prominent CTAs for the new free rehab estimator tool (estimator.getflipai.com) to drive leads into the funnel.

## Changes

### 1. Hero Section (`src/components/Hero.astro`)
Restructure the CTA buttons:

- **Primary button**: "Get Free Rehab Estimate" → `https://estimator.getflipai.com`
  - Uses `btn-primary` styling (navy background)
  - Keeps the arrow icon

- **Secondary button**: "Start Free Trial" → `https://app.getflipai.com/register`
  - Uses `btn-secondary` styling (navy outline)
  - Keeps the arrow icon

- **Text link below buttons**: "See How It Works" → `#how-it-works`
  - Simple text link with subtle styling
  - Replaces the current secondary button functionality

### 2. Navigation (`src/components/Nav.astro`)
Add estimator button alongside existing trial button:

**Desktop nav (right side):**
- "Free Rehab Estimate" button (accent/orange) → `https://estimator.getflipai.com`
- "Start Free Trial" button (secondary/outline style) → `https://app.getflipai.com/register`

**Mobile menu:**
- Add "Free Rehab Estimate" button above "Start Free Trial"

## Files to Modify
- `src/components/Hero.astro` (lines 37-47)
- `src/components/Nav.astro` (lines 20-23 desktop, mobile menu section)

## Verification
1. Run `npm run dev` and check localhost:4321
2. Verify hero shows: primary estimator button, secondary trial button, "See How It Works" link
3. Verify nav shows both buttons on desktop
4. Test mobile menu shows both CTAs
5. Click all links to confirm correct destinations
6. Run `npm run build` to ensure no build errors
