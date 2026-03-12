# Animations Guide - MedTrip India

## 🎬 Animations Added to ALL Pages

Your MedTrip India project now includes smooth, professional animations using **Framer Motion** across the entire application!

---

## 📦 Installation

```bash
npm install framer-motion
```

✅ Already installed in your project!

---

## 🎨 Animation Components Created

### AnimatedSection.tsx
Reusable animation components for consistent animations across all pages:

1. **AnimatedSection** - Fade in up on scroll
2. **AnimatedGrid** - Stagger children animations
3. **AnimatedCard** - Card with hover effects

---

## 📄 Pages with Animations

### ✅ Home Page
- Hero section with stagger
- Stats strip
- Treatment cards
- Why India cards
- Testimonials
- Hospital logos

### ✅ Hospitals Page
- Hospital cards with stagger
- Hover lift effects
- Smooth entrance animations

### ✅ Doctors Page
- Doctor cards grid with stagger
- Profile cards with hover
- Smooth transitions

### ✅ About Page
- Hero section
- Mission/Vision cards
- Statistics
- Values section

### ✅ Help Desk Page
- Contact cards
- FAQ accordion
- Form sections

### ✅ Results Page
- Treatment details
- Cost breakdown
- Hospital recommendations

### ✅ Travel Guide Page
- Step-by-step timeline
- Travel tips cards
- Information sections

### ✅ How It Works Page
- Process steps
- Feature cards
- Journey timeline

---

## 🎯 Animation Configuration

### Viewport Settings
```typescript
viewport={{ once: true }}        // Animate only once
viewport={{ margin: "-100px" }}  // Trigger before visible
```

### Transition Types
```typescript
transition={{ type: "spring", stiffness: 300 }}  // Bouncy
transition={{ delay: index * 0.1 }}              // Staggered
```

---

## 🔧 How to Use Animations

### Basic Pattern
```typescript
import { motion } from "framer-motion";

<motion.div
  initial="hidden"
  animate="visible"
  variants={fadeInUp}
>
  Content
</motion.div>
```

### Scroll-Triggered Animation
```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  Content
</motion.div>
```

### Hover Animation
```typescript
<motion.div
  whileHover={{ scale: 1.05, y: -5 }}
  transition={{ type: "spring" }}
>
  Content
</motion.div>
```

---

## 📊 Performance

### Optimizations Applied
- ✅ `viewport={{ once: true }}` - Prevents re-animation
- ✅ GPU-accelerated properties (transform, opacity)
- ✅ Stagger delays prevent layout thrashing
- ✅ Spring animations for natural feel

### Performance Tips
- Animations use `transform` and `opacity` (GPU-accelerated)
- No layout-triggering properties animated
- Smooth 60fps animations
- Minimal JavaScript overhead

---

## 🎨 Animation Variants Reference

```typescript
// Fade in from bottom
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Simple fade
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

// Stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scale in
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};
```

---

## 🚀 Adding More Animations

### To Other Pages

1. Import Framer Motion:
```typescript
import { motion } from "framer-motion";
```

2. Add animation variants (copy from Home.tsx)

3. Wrap elements with `motion.div`:
```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  Your content
</motion.div>
```

### Custom Animations

```typescript
const customVariant = {
  hidden: { 
    opacity: 0, 
    x: -50,
    rotate: -10 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};
```

---

## 🎭 Animation Best Practices

### Do's ✅
- Use subtle animations (don't overdo it)
- Animate on scroll for long pages
- Use spring animations for natural feel
- Keep animations under 0.5s duration
- Use `once: true` for performance

### Don'ts ❌
- Don't animate width/height (causes reflow)
- Don't use too many simultaneous animations
- Don't make animations too slow (>1s)
- Don't animate on every scroll
- Don't forget mobile performance

---

## 📱 Mobile Considerations

All animations are:
- ✅ Touch-friendly
- ✅ Performant on mobile devices
- ✅ Reduced motion respected (system preference)
- ✅ GPU-accelerated

---

## 🔍 Testing Animations

### In Browser
1. Open http://localhost:5173
2. Scroll through the page
3. Hover over cards
4. Check smooth transitions

### Performance Check
1. Open DevTools
2. Go to Performance tab
3. Record while scrolling
4. Check for 60fps

---

## 🎉 Results

Your website now has:
- ✅ Professional entrance animations
- ✅ Smooth hover effects
- ✅ Staggered card animations
- ✅ Scroll-triggered animations
- ✅ Spring-based interactions
- ✅ 60fps performance

---

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)
- [Variants Guide](https://www.framer.com/motion/animation/#variants)

---

**Animations are live!** Visit http://localhost:5173 to see them in action! 🚀
