# Pricing Toggle Implementation Plan

## Overview
Add a Monthly/Annual billing toggle to the Pricing section, update product names, and display appropriate pricing based on selection.

## Pricing Data

### Monthly Pricing (current)
| Plan | Price |
|------|-------|
| Starter | $29/month |
| Active Flipper | $79/month |
| Flip Team | $199/month |

### Annual Pricing (new)
| Plan | Price | Effective Monthly |
|------|-------|-------------------|
| Starter | $249.99/year | ~$20.83/month |
| Active Flipper | $667.99/year | ~$55.67/month |
| Flip Team | $1,667.99/year | ~$138.99/month |

## Changes Required

### File: `src/components/Pricing.astro`

#### 1. Update Plan Names
- "Pro" → "Active Flipper"
- "Team" → "Flip Team"

#### 2. Add Dual Pricing Data
Modify the `plans` array to include both monthly and annual prices:
```typescript
const plans = [
  {
    name: "Starter",
    monthlyPrice: "$29",
    annualPrice: "$249.99",
    // ... rest of plan data
  },
  // ...
];
```

#### 3. Add Billing Toggle UI
Insert toggle component between the section heading and pricing cards:
- Centered toggle with "Monthly" and "Annual" options
- Use existing design system colors (primary navy, accent orange)
- Add "Save X%" badge on Annual option to highlight savings

#### 4. Add JavaScript for Toggle Interactivity
- Add vanilla JS in `<script>` block (per project conventions)
- Toggle updates displayed prices without page reload
- Update period text ("/month" vs "/year")

## Implementation Details

### Toggle Design
```
[ Monthly ]  [ Annual - Save ~30% ]
```
- Pill-style toggle matching site aesthetic
- Active state uses accent color (#c27c4e)
- Inactive state uses light gray background

### Price Display Updates
When Annual is selected:
- Show annual price (e.g., "$249.99")
- Change period to "/year"
- Optionally show effective monthly rate in smaller text

### JavaScript Approach
```javascript
// Toggle click handler
// - Add/remove active classes on toggle buttons
// - Show/hide monthly vs annual price elements
// - Use data attributes to store both prices in DOM
```

## Verification
1. Run `npm run dev` and navigate to http://localhost:4321/#pricing
2. Verify toggle switches between Monthly and Annual views
3. Confirm all three plans show correct prices for each mode
4. Test on mobile viewport for responsive behavior
5. Run `npm run build` to ensure no build errors
