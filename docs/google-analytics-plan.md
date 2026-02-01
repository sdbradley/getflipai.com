# Google Analytics 4 Implementation Plan

## Overview

Add GA4 to the FlipAI marketing site with enhanced event tracking for CTAs, navigation, and user interactions.

## Prerequisites (User Action Required)

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Provide the ID before implementation

## Implementation

### 1. Add GA4 Script to Layout

**File:** `src/layouts/Layout.astro`

Add GA4 gtag.js snippet in `<head>` section:
- Async script load for gtag.js
- Initialize with Measurement ID
- Configure for enhanced measurement (auto-tracks pageviews, scrolls, outbound clicks)

### 2. Add Event Tracking to Components

**High Priority Events:**

| Event | Component | Files |
|-------|-----------|-------|
| `click_cta_free_estimate` | Free Estimate buttons | `Hero.astro`, `Nav.astro`, `CTA.astro` |
| `click_cta_start_trial` | Start Trial buttons | `Hero.astro`, `Nav.astro`, `Pricing.astro`, `CTA.astro` |

**Medium Priority Events:**

| Event | Component | Files |
|-------|-----------|-------|
| `navigate_section` | Anchor links (#features, etc.) | `Nav.astro`, `Hero.astro` |
| `toggle_billing_period` | Monthly/Annual toggle | `Pricing.astro` |
| `click_footer_link` | Footer links | `Footer.astro` |

### 3. Implementation Approach

**Option A: Data Attributes + Central Script (Recommended)**
- Add `data-ga-event` attributes to trackable elements
- Single script in Layout.astro handles all event listeners
- Cleaner, more maintainable

**Option B: Inline gtag() Calls**
- Add onclick handlers directly to buttons
- More explicit but scattered across components

## Files to Modify

1. `src/layouts/Layout.astro` - Add GA4 script + event listener script
2. `src/components/Hero.astro` - Add data attributes to CTAs
3. `src/components/Nav.astro` - Add data attributes to CTAs and nav links
4. `src/components/CTA.astro` - Add data attributes to buttons
5. `src/components/Pricing.astro` - Add data attributes + modify toggle script
6. `src/components/Footer.astro` - Add data attributes to links

## Verification

1. Run `npm run dev` and open localhost:4321
2. Open browser DevTools > Network tab, filter by "google-analytics"
3. Click various CTAs and verify network requests fire
4. Use GA4 DebugView (Realtime reports) to confirm events arrive
5. Test on mobile viewport for mobile menu tracking
