# Second Story: Code, Narrative, and Opportunity

A modern, professional landing page for Second Story - an innovative program that unlocks the potential of justice-impacted individuals through elite software engineering apprenticeships and narrative empowerment.

## 🎯 Project Overview

This project transforms data-driven insights into a compelling narrative-driven web experience that guides visitors from understanding the systemic problem to seeing the innovative solution and its projected impact.

## 📸 Screenshot

![Second Story Website](assets/screenshots/Main.png)

*The modern, professional Second Story website featuring the Hunter Green brand color palette, comprehensive brand integration, and interactive data visualizations.*

![Crisis](assets/screenshots/Crisis.png)

## ✨ Features

### Modern Web Standards

- **Semantic HTML5** with proper accessibility attributes and brand integration
- **Hunter Green Color Palette** with professional CSS custom properties
- **Comprehensive Brand Integration** featuring Second Story logos throughout
- **Progressive Enhancement** ensuring core functionality without JavaScript
- **Responsive Design** optimized for all device sizes with hero section
- **Performance Optimized** with efficient loading and animations

### Interactive Data Visualizations

- **Animated Statistics** that engage on scroll
- **Chart.js Integration** for compelling data presentation
- **Interactive Budget Charts** with year-over-year comparison
- **Tabbed Journey Interface** showcasing the apprentice experience

### Accessibility & UX

- **WCAG 2.1 AA Compliant** with proper ARIA labels
- **Keyboard Navigation** support throughout
- **Screen Reader Optimized** with semantic markup
- **Focus Management** for enhanced usability
- **Reduced Motion** respect for user preferences

### Professional Architecture

- **Separation of Concerns** with modular CSS and JavaScript
- **Mobile-First Design** with progressive enhancement
- **Error Handling** and graceful degradation
- **Performance Monitoring** built-in

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Node.js for development tools

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/StrayDogSyn/Second_Story_Splash.git
   cd Second_Story_Splash
   ```

2. For development with live reload:

   ```bash
   npm install
   npm run dev
   ```

3. Or simply open `index.html` in your browser for immediate viewing.

## 📁 Project Structure

```text
Second_Story_Splash/
├── index.html              # Main HTML file with comprehensive brand integration
├── css/
│   └── styles.css          # Hunter Green palette with brand-focused styling
├── js/
│   └── app.js              # Application logic with brand color chart integration
├── assets/
│   ├── brand/              # Second Story brand assets
│   │   ├── 2ndStory01.png        # Primary logo
│   │   ├── 2ndStoryBanner.png    # Banner logo
│   │   ├── 2ndStoryBanner2.png   # Secondary banner
│   │   └── 2ndStoryCircle.png    # Circular logo variant
│   └── screenshots/        # Documentation screenshots
│       └── Main.png              # Website homepage screenshot
├── package.json           # Project configuration and dependencies
├── README.md             # This documentation
└── LICENSE               # MIT license
```

## 🎨 Design System

### Hunter Green Brand Palette

The website features a comprehensive Hunter Green color scheme with strategic brand asset integration throughout all sections:

- **Hunter Green**: `#355E3B` (Primary - Logo, buttons, headlines, icons)
- **Jet Black**: `#0B0B0B` (Accent - Hero backgrounds, footers, navigation)
- **Charcoal**: `#1E1E1E` (Dark Gray - Text on dark backgrounds, secondary headers)
- **Soft White**: `#F5F5F5` (Light Contrast - Backgrounds, section dividers, cards)
- **Sage Gray-Green**: `#A3B9A4` (Secondary - Hover states, secondary buttons, highlights)
- **Graphite**: `#3F3F3F` (Utility - Body text, border lines, subdued content)
- **Metallic Silver**: `#C2C2C2` (Highlight - Icon outlines, UI separators, accent lines)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (Light) to 900 (Black)
- **Scale**: Modular scale from 0.75rem to 3.75rem

### Layout System

- **Container**: Max-width 1200px with responsive padding
- **Grid**: CSS Grid with 1-3 column responsive layouts
- **Spacing**: Consistent scale using CSS custom properties

## 🛠 Development

### CSS Architecture

The CSS follows a component-based architecture with:

- **CSS Custom Properties** for theming and consistency
- **Utility Classes** for common patterns
- **Component Classes** for reusable UI elements
- **Layout Classes** for structural elements

### JavaScript Modules

The JavaScript is organized as a single class with clear separation of concerns:

- **Navigation Management**: Mobile menu and smooth scrolling
- **Animation Controllers**: Scroll-triggered and counter animations
- **Chart Management**: Chart.js integration and data visualization
- **Interaction Handlers**: Tabs, buttons, and form interactions

### Performance Considerations

- **Lazy Loading**: Charts only initialize when needed
- **Throttled Scroll Events**: Optimized scroll listeners
- **Efficient Animations**: Using `requestAnimationFrame`
- **Resource Preloading**: Critical fonts and stylesheets

## 📊 Data Visualizations

### Employment & Recidivism Chart

- **Type**: Bar chart comparing unemployed vs employed recidivism rates
- **Data**: 52% vs 16% three-year recidivism rates
- **Purpose**: Demonstrates the power of employment in reducing recidivism

### Job Placement Chart

- **Type**: Doughnut chart showing placement goals
- **Data**: 90% placement target in tech roles
- **Purpose**: Illustrates program success metrics

### Salary Comparison Chart

- **Type**: Bar chart comparing average salaries
- **Data**: $56k average vs $85k Second Story graduates
- **Purpose**: Shows economic mobility potential

### Budget Allocation Chart

- **Type**: Interactive horizontal bar chart
- **Data**: Two-year budget breakdown by category
- **Purpose**: Transparent funding allocation demonstration

## 🔧 Configuration

### Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers with ES2018 support

### Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🚀 Deployment

### Static Hosting

This project is designed for static hosting on platforms like:

- **Netlify**: Drag and drop deployment
- **Vercel**: Git-connected deployments
- **GitHub Pages**: Direct repository hosting
- **AWS S3**: Static website hosting

### Build Process

For production deployment:

```bash
npm run build
```

This will:

- Minify CSS and JavaScript
- Optimize assets for production
- Generate compressed files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- **HTML**: Semantic, accessible markup
- **CSS**: BEM-inspired naming, mobile-first
- **JavaScript**: ES6+, functional approach
- **Comments**: Clear documentation for complex logic

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1200px+

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Comprehensive labeling for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Optimized announcements and descriptions
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Indicators**: Clear visual focus states

## 📈 Performance Optimizations

- **Critical CSS**: Inline critical styles for faster rendering
- **Font Loading**: Optimized Google Fonts loading
- **Image Optimization**: Responsive images with proper sizing
- **JavaScript Splitting**: Modular loading for better caching
- **Animation Performance**: Hardware-accelerated transforms

## 🔍 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: Schema.org markup for search engines
- **Semantic HTML**: Proper document structure for crawlers
- **Performance**: Fast loading times improve search ranking

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Chart.js**: Beautiful, responsive charts
- **Inter Font**: Modern, readable typography
- **CSS Grid**: Modern layout capabilities
- **Intersection Observer API**: Efficient scroll-based animations

## 📞 Contact

### Second Story

- Website: [https://secondstory.org](https://secondstory.org)
- Email: [contact@secondstory.org](mailto:contact@secondstory.org)

---

**Building pathways to economic mobility through technology and storytelling.**
