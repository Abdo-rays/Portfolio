# 🚀 Ibrahim Ashraf - Portfolio

> A modern, fast, and SEO-optimized portfolio built with React, Motion, and Tailwind CSS

![Portfolio Preview](https://images.unsplash.com/photo-1737575655055-e3967cbefd03?w=1200&h=630&fit=crop)

---

## ✨ Features

### 🎨 Design
- ✅ Modern & Clean UI/UX
- ✅ Smooth Animations (Motion/Framer)
- ✅ Dark/Light Mode Toggle
- ✅ Fully Responsive Design
- ✅ Mobile-First Approach

### ⚡ Performance
- ✅ Lightning Fast Loading
- ✅ Optimized Animations
- ✅ Code Splitting Ready
- ✅ Minimal Bundle Size
- ✅ Core Web Vitals Optimized

### 🔍 SEO Excellence
- ✅ Complete Meta Tags
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Cards
- ✅ Structured Data (JSON-LD)
- ✅ robots.txt & sitemap.xml
- ✅ Google Search Console Ready
- ✅ Schema.org Markup

### 🎯 Sections
1. **Hero** - Animated role titles, CTA buttons, social links
2. **About** - Personal story, skills overview
3. **Tech Stack** - All technologies used
4. **Tools** - Infinite scroll animation
5. **Projects** - Portfolio showcase with live demos
6. **Contact** - Email, social media, contact form

---

## 🛠️ Tech Stack

### Frontend
- React 18.3.1
- TypeScript
- Tailwind CSS 4.1
- Motion (Framer Motion) 12.23
- React Helmet Async (SEO)

### Tools & Libraries
- Lucide React (Icons)
- React Hook Form
- Radix UI Components

### Build Tools
- Vite 6.3
- PostCSS
- ESLint

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ibrahimashraf/portfolio.git

# Navigate to project
cd portfolio

# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 🎨 Customization

### Update Personal Info
Edit `/src/app/components/HeroSection.tsx`:
```tsx
<h1>Your Name</h1>
```

### Change Colors
Edit `/src/styles/theme.css` for color scheme

### Update Meta Tags
Edit `/index.html` and `/src/app/components/SEO.tsx`

### Add Projects
Edit `/src/app/components/ProjectsSection.tsx`:
```tsx
const projects = [
  {
    title: "Your Project",
    description: "Description here",
    tags: ["React", "TypeScript"],
    image: "your-image-url"
  }
];
```

---

## 🔍 SEO Setup

### 1. Update Domain
في كل الملفات التالية، غير `ibrahimashraf.dev` للدومين بتاعك:
- `/index.html`
- `/src/app/components/SEO.tsx`
- `/public/sitemap.xml`
- `/public/robots.txt`

### 2. Google Search Console
اتبع الخطوات في: `/GOOGLE_SEARCH_CONSOLE_SETUP.md`

### 3. Social Media
حدث الـ links في:
- `/src/app/components/HeroSection.tsx`
- `/src/app/components/ContactSection.tsx`
- `/src/app/components/Footer.tsx`

---

## 📊 SEO Checklist

راجع الملف: `/SEO_CHECKLIST.md` للتأكد من كل حاجة ✅

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Push to GitHub
2. Connect repository in Netlify
3. Deploy automatically

### Manual Build
```bash
npm run build
# Upload /dist folder to your hosting
```

---

## 📱 Features Breakdown

### Dark/Light Mode
- ✅ Persistent theme (localStorage)
- ✅ Smooth transitions
- ✅ System preference detection

### Tools Infinite Scroll
- ✅ Smooth animation
- ✅ Pause on hover
- ✅ Gradient fade edges
- ✅ Touch-friendly
- ✅ Dark mode support

### Animations
- ✅ Scroll-triggered animations
- ✅ Hover effects
- ✅ Page transitions
- ✅ Performance optimized
- ✅ Reduced motion support

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── robots.txt          # SEO crawlers config
│   ├── sitemap.xml         # Sitemap for search engines
│   └── favicon.svg         # Site icon
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SEO.tsx    # Dynamic meta tags
│   │   ├── context/
│   │   │   └── ThemeContext.tsx
│   │   └── App.tsx
│   ├── styles/
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   └── index.tsx
├── index.html              # HTML with meta tags
├── vite.config.ts
├── package.json
├── SEO_CHECKLIST.md        # SEO guide
├── GOOGLE_SEARCH_CONSOLE_SETUP.md
└── README.md
```

---

## 🎯 Performance Scores

### Target Metrics (Lighthouse)
- Performance: 95+ ⚡
- Accessibility: 95+ ♿
- Best Practices: 95+ ✅
- SEO: 100 🔍

### Core Web Vitals
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

## 👨‍💻 Author

**Ibrahim Ashraf**
- Email: xxibrahimashrafxx@gmail.com
- Location: Alexandria, Egypt
- Role: Front-end Developer

### Connect with me:
- GitHub: [@ibrahimashraf](https://github.com/ibrahimashraf)
- LinkedIn: [Ibrahim Ashraf](https://linkedin.com/in/ibrahimashraf)
- YouTube: [@ibrahimashraf](https://youtube.com/@ibrahimashraf)

---

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)
- Built with [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Motion](https://motion.dev)

---

## 📝 Notes

### للتطوير:
```bash
npm run dev
```
الموقع هيفتح على: `http://localhost:5173`

### للبناء:
```bash
npm run build
```
الملفات الجاهزة في: `/dist`

---

## 🔥 Quick Tips

1. **استبدل الصور**: استخدم صورك الشخصية والمشاريع
2. **حدث المحتوى**: اكتب عن نفسك وخبراتك
3. **أضف مشاريع**: ضع أفضل أعمالك
4. **شارك الموقع**: على كل social media
5. **راقب الأداء**: استخدم Google Analytics

---

**🎉 Happy Coding!**

Built with ❤️ by Ibrahim Ashraf
