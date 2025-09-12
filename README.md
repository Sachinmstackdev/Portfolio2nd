# Sachin Kumar - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, optimized for Android and mobile devices.

## 🚀 Features

### Mobile & Android Optimizations
- **Touch-Friendly Design**: All interactive elements have minimum 44px touch targets
- **Android PWA Support**: Web manifest with proper icons and theme colors
- **Responsive Layout**: Optimized for all screen sizes from mobile to desktop
- **Performance Optimized**: Fast loading with optimized images and animations
- **Accessibility**: ARIA labels, proper focus states, and keyboard navigation
- **Safe Area Support**: Proper handling of notched devices and status bars

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags, structured data, and sitemap

## 📱 Mobile Optimizations

### Touch Interactions
- Minimum 44px touch targets for all buttons and links
- Touch-action manipulation for better scrolling
- Removed tap highlights for cleaner interaction
- Optimized button sizes for mobile devices

### Performance
- Lazy loading for images
- Optimized animations for mobile devices
- Reduced motion support for accessibility
- Efficient CSS with mobile-first approach

### Layout & Design
- Mobile-first responsive design
- Safe area insets for notched devices
- Proper viewport meta tags
- Optimized typography for mobile reading

## 🛠️ Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolionew/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with mobile optimizations
│   ├── layout.tsx         # Root layout with meta tags
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── Navbar.tsx         # Mobile-optimized navigation
│   ├── Footer.tsx         # Mobile-optimized footer
│   └── StructuredData.tsx # SEO structured data
├── public/               # Static assets
│   ├── site.webmanifest  # PWA manifest
│   └── robots.txt        # SEO robots file
└── tailwind.config.js    # Tailwind configuration
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  }
}
```

### Mobile Breakpoints
Custom breakpoints are defined for better mobile experience:

```javascript
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

## 📱 PWA Features

The website includes Progressive Web App features:
- Web manifest for app-like experience
- Theme colors for Android status bar
- App shortcuts for quick navigation
- Responsive icons for different sizes

## 🔧 Mobile-Specific Utilities

### CSS Classes
- `.mobile-button`: Touch-friendly button styling
- `.mobile-card`: Mobile-optimized card layout
- `.touch-manipulation`: Improved touch response
- `.safe-area-*`: Safe area insets for notched devices

### Responsive Utilities
- `.mobile-grid`: Single column grid on mobile
- `.mobile-grid-2`: Two column grid on mobile
- `.text-mobile-*`: Mobile-optimized text sizes
- `.space-mobile-*`: Mobile-optimized spacing

## 🚀 Deployment

The website is optimized for deployment on Vercel, Netlify, or any static hosting service.

### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please ensure all changes maintain mobile responsiveness and accessibility standards.

## 📞 Contact

- **Email**: sachinkumarmail7@gmail.com
- **Phone**: +91 9877034726
- **Website**: www.devsachinkumar.com 