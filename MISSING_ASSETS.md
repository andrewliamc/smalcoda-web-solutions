# Missing Image Assets - Action Required

This document lists all image assets that need to be created for the SmalCoda website.

---

## ⚠️ HIGH PRIORITY (Required for Launch)

### 1. **Professional Headshot**
**File:** `/public/images/andrew-cox-photo.jpg`
**Location in code:** `app/about/page.tsx:43-50`

**Specifications:**
- **Size:** 800x800px (1:1 aspect ratio)
- **Format:** JPG or PNG
- **Quality:** High resolution, web-optimized (aim for <200KB file size)
- **Style:** Professional headshot, good lighting, neutral background
- **Subject:** Andrew Cox

**Current state:** Placeholder div with text "[Photo of Andrew Cox]"

**How to use:**
1. Take or select professional photo
2. Crop to square (1:1 ratio)
3. Resize to 800x800px
4. Optimize for web (compress without losing quality)
5. Save to `/public/images/andrew-cox-photo.jpg`
6. Replace placeholder code in About page:

```tsx
// REPLACE THIS:
<div className="flex h-full items-center justify-center text-sm text-brand-sand/70">
  [Photo of Andrew Cox]
</div>

// WITH THIS:
<Image
  src="/images/andrew-cox-photo.jpg"
  alt="Andrew Cox, founder of SmalCoda Web Solutions, front-end developer and UI designer based in Hackensack, NJ"
  fill
  className="object-cover"
  priority
/>
```

**Tools to help:**
- Resize: [Squoosh.app](https://squoosh.app)
- Background removal (if needed): [Remove.bg](https://remove.bg)
- Compression: [TinyPNG](https://tinypng.com)

---

### 2. **Favicon Set**
**Files needed:**
- `/public/favicon.ico` (16x16 and 32x32 multi-size)
- `/public/apple-touch-icon.png` (180x180)
- `/public/favicon.png` (already exists, may need updating)

**Specifications:**
- **Design:** "S" lettermark or full SmalCoda logo mark
- **Colors:** Match brand (sage green, sand, night)
- **Style:** Simple, recognizable at small sizes

**Current state:**
- ✅ `favicon.png` exists but may need updating
- ❌ `favicon.ico` does NOT exist (needed for browsers)
- ❌ `apple-touch-icon.png` does NOT exist (needed for iOS/iPadOS)

**Easiest method:**
1. Go to [favicon.io](https://favicon.io/favicon-generator/)
2. Upload your logo or use text generator
3. Download the generated package
4. Extract files to `/public/` directory

**What the generator creates:**
- `favicon.ico` → Place in `/public/`
- `apple-touch-icon.png` → Place in `/public/`
- `favicon-16x16.png` → Optional
- `favicon-32x32.png` → Optional

**Already configured in code:**
`app/layout.tsx:141-144` references:
```tsx
icons: {
  icon: "/favicon.png",
  apple: "/favicon.png",
}
```

**Update to:**
```tsx
icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
}
```

---

### 3. **Verify OpenGraph Images**
**Files:** (Already exist, just verify they look good)
- ✅ `/public/og-image.png` (1200x630) - **EXISTS**
- ✅ `/public/og-image-square.png` (1200x1200) - **EXISTS**

**Action required:**
1. Share a link to your site on LinkedIn, Twitter, or Facebook
2. Verify the preview image looks correct
3. If not, update the images with correct branding

**Specs if you need to recreate:**
- **Size:** 1200x630px (horizontal) or 1200x1200px (square)
- **Format:** PNG or JPG
- **Content should include:**
  - "SmalCoda Web Solutions"
  - "Modern Web Design in Hackensack, NJ"
  - Clean background in brand colors
  - Logo (if available)

**Tools:**
- [Canva](https://canva.com) - Use "Social Media" → "Facebook Post" template (1200x630)
- [Figma](https://figma.com) - Create frame at 1200x630

---

## 📸 MEDIUM PRIORITY (For Case Studies)

These are optional but recommended for professional portfolio presentation.

### 4. **Case Study Screenshots - Houston's Restaurant**

**Live demo:** https://houstons-redesign.vercel.app/

**Images needed:**
- `/public/houstons-hero.png` - Homepage hero + menu overview
- `/public/houstons-mobile.png` - Mobile-first menu layout
- `/public/houstons-location.png` - Location & hours + reservations flow

**Specifications:**
- **Size:** 1920x1080px (16:9 aspect ratio)
- **Format:** PNG
- **Quality:** High quality, compressed

**How to create:**
1. Visit https://houstons-redesign.vercel.app/
2. Open browser dev tools (F12)
3. Use device toolbar to set viewport to 1920x1080
4. Take full-page screenshot:
   - **Chrome:** Cmd/Ctrl + Shift + P → "Capture full size screenshot"
   - **Firefox:** Right-click → "Take a Screenshot" → "Save full page"
5. Or use tools like:
   - [GoFullPage](https://gofullpage.com) (Chrome extension)
   - [Screely](https://screely.com) (add browser mockups)

**Current state:** Placeholder text used in case study

---

### 5. **Case Study Screenshots - Jacksonville Pottery**

**Live demo:** https://jax-pottery-studio.vercel.app

**Images needed:**
- `/public/jacksonville-hero.png` - Homepage hero + class and membership highlights
- `/public/jacksonville-grid.png` - Feature grid: classes, memberships, events, team
- `/public/jacksonville-responsive.png` - Responsive layouts + component map

**Specifications:** Same as Houston's above

**Current state:** Placeholder text used in case study

---

### 6. **Case Study Screenshots - HarvestHub**

**Live demo:** https://harvesthub.vercel.app

**Images needed:**
- `/public/harvesthub-hero.png` - Landing hero + dashboard mockup
- `/public/harvesthub-pricing.png` - Pricing table + testimonials layout
- `/public/harvesthub-architecture.png` - Component map / information architecture

**Specifications:** Same as Houston's above

**Current state:** Placeholder text used in case study

---

## ✅ ALREADY EXIST (No Action Needed)

These images are already in place:

- ✅ `/public/willow-and-pine-case-study-1.png` - Willow & Pine homepage
- ✅ `/public/willow-and-pine-case-study-2.png` - Willow & Pine mobile
- ✅ `/public/willow-and-pine-case-study-3.png` - Willow & Pine architecture
- ✅ `/public/og-image.png` - OpenGraph image
- ✅ `/public/og-image-square.png` - Square OpenGraph image

---

## 📦 OPTIONAL (Nice to Have)

### 7. **Service Tier Illustrations**
**Location:** `/public/images/services/`

**Files:**
- `starter-icon.svg` - Icon for Starter tier
- `professional-icon.svg` - Icon for Professional tier
- `custom-icon.svg` - Icon for Custom tier

**Specifications:**
- **Size:** 64x64px or scalable SVG
- **Style:** Simple, minimalist icons or abstract shapes
- **Colors:** Brand colors (sage, sand)

**Can use:**
- Icon libraries: [Lucide](https://lucide.dev), [Heroicons](https://heroicons.com)
- Create in Figma: Simple geometric shapes
- Or skip entirely (not critical)

---

## 🛠️ TOOLS & RESOURCES

### **Image Creation:**
- [Figma](https://figma.com) - Professional design tool (free tier available)
- [Canva](https://canva.com) - Easy drag-and-drop designs
- [Adobe Photoshop](https://adobe.com/photoshop) - If you have access

### **Image Optimization:**
- [Squoosh](https://squoosh.app) - Google's image compression tool
- [TinyPNG](https://tinypng.com) - PNG/JPG compression
- [ImageOptim](https://imageoptim.com) - Mac app for batch compression

### **Screenshot Tools:**
- [GoFullPage](https://gofullpage.com) - Chrome extension
- [Awesome Screenshot](https://www.awesomescreenshot.com) - Chrome/Firefox
- [Screely](https://screely.com) - Add browser mockups to screenshots

### **Favicon Generators:**
- [Favicon.io](https://favicon.io) - Easy favicon generation
- [RealFaviconGenerator](https://realfavicongenerator.net) - Advanced options

### **Background Removal:**
- [Remove.bg](https://remove.bg) - AI background removal
- [PhotoRoom](https://photoroom.com) - Background removal + editing

---

## 📋 CHECKLIST

Use this to track your progress:

### **High Priority:**
- [ ] Professional headshot created and added to About page
- [ ] Favicon.ico created
- [ ] Apple-touch-icon.png created
- [ ] Favicon code updated in layout.tsx
- [ ] OpenGraph images verified on social media

### **Medium Priority:**
- [ ] Houston's case study screenshots (3 images)
- [ ] Jacksonville case study screenshots (3 images)
- [ ] HarvestHub case study screenshots (3 images)

### **Optional:**
- [ ] Service tier illustrations
- [ ] Additional branded graphics

---

## ⏱️ ESTIMATED TIME

- **Professional photo:** 30 minutes - 2 hours (depending on photoshoot or selection)
- **Favicon set:** 15-30 minutes (using generator)
- **Case study screenshots:** 1-2 hours (all 9 screenshots)
- **Total:** 2-4 hours for all high and medium priority items

---

## 📞 NEED HELP?

If you have questions about any of these assets:

1. **Image dimensions unclear?** Use the specs listed above
2. **Don't have design tools?** Use the free tools listed in "Tools & Resources"
3. **Screenshots not working?** Try the browser dev tools method or GoFullPage extension
4. **Favicon confusing?** Just use [Favicon.io](https://favicon.io) - it's the easiest

---

**Document created:** December 14, 2025
**For:** Andrew Cox, SmalCoda Web Solutions
