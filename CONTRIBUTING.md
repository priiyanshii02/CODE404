# Contributing to CASE 404: The Vanishing Prototype

Thank you for your interest in contributing to our project! We welcome contributions from the community.

## 🚀 How to Contribute

### 1. Fork the Repository
Click the "Fork" button at the top right of the repository page.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR_USERNAME/CODE404.git
cd CODE404
```

### 3. Create a Branch
```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/add-countdown-timer`
- `fix/mobile-responsiveness`
- `docs/update-readme`

### 4. Make Your Changes
- Write clean, readable code
- Follow the existing code style
- Test your changes locally
- Ensure responsive design works

### 5. Commit Your Changes
```bash
git add .
git commit -m "Add: Brief description of changes"
```

**Commit Message Guidelines:**
- `Add:` for new features
- `Fix:` for bug fixes
- `Update:` for changes to existing features
- `Docs:` for documentation changes
- `Style:` for formatting changes

### 6. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request
Go to the original repository and click "New Pull Request"

## 📝 Pull Request Guidelines

### PR Title Format
```
[Type] Brief description
```

Examples:
- `[Feature] Add countdown timer to hero section`
- `[Fix] Resolve mobile menu overflow issue`
- `[Docs] Update installation instructions`

### PR Description Should Include:
- 📋 Description of changes
- 🎯 Purpose/motivation
- 🧪 Testing performed
- 📸 Screenshots (for UI changes)
- 🔗 Related issues (if any)

## 🎨 Code Style Guidelines

### TypeScript/React
```typescript
// Use functional components
export default function ComponentName() {
  // Component logic
}

// Use meaningful variable names
const eventStartTime = "9:40 AM";

// Add types to props
interface HeroProps {
  title: string;
  subtitle?: string;
}
```

### Tailwind CSS
```tsx
// Use descriptive class names
<div className="flex items-center gap-4 px-6 py-3">

// Group related utilities
<button className="
  px-8 py-4 
  bg-gradient-to-r from-emerald-600 to-cyan-600 
  hover:from-emerald-500 hover:to-cyan-500
  text-white font-semibold rounded-lg
  transition-all duration-300
">
```

### File Structure
- Place components in appropriate directories
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use clear, descriptive file names

## 🧪 Testing

Before submitting a PR:

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Check for TypeScript errors
npm run lint
```

**Test on Multiple Devices:**
- ✅ Desktop (Chrome, Firefox, Safari)
- ✅ Tablet (iPad, Android)
- ✅ Mobile (iPhone, Android)

## 🐛 Reporting Bugs

### Before Reporting
1. Check existing issues
2. Ensure it's not a local environment issue
3. Try reproducing in a fresh install

### Bug Report Should Include
- 📝 Clear description
- 🔄 Steps to reproduce
- 💻 Expected vs actual behavior
- 🖼️ Screenshots/videos
- 🌐 Browser & OS info

## 💡 Feature Requests

We love new ideas! When requesting features:

1. Check if it already exists
2. Describe the use case
3. Explain why it benefits users
4. Suggest implementation approach (optional)

## 📞 Questions?

- Open a GitHub Discussion
- Email: victors@example.com
- Check existing documentation

## 🎯 Priority Areas

We especially welcome contributions in:

- 🎨 UI/UX improvements
- 📱 Mobile responsiveness
- ♿ Accessibility enhancements
- 📝 Documentation
- 🧪 Testing
- 🚀 Performance optimization

## ✅ Code Review Process

1. Maintainers will review within 2-3 days
2. Address requested changes
3. Once approved, your PR will be merged!

## 🏆 Recognition

Contributors will be:
- Listed in README acknowledgments
- Credited in release notes
- Appreciated in the community!

---

Thank you for contributing to CASE 404! 🎉🔍

**Good luck, investigator!**
