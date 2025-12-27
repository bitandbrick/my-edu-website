# 🚀 QUICK START GUIDE

## Step 1: Extract the Files
Extract the `edu-platform` folder to your desired location.

## Step 2: Open in Your Code Editor

### Option A: Using Cursor.ai (Recommended)
1. Download and install Cursor from https://cursor.com
2. Open Cursor
3. Click "File" → "Open Folder"
4. Select the `edu-platform` folder
5. Cursor will automatically detect it's a Next.js project

### Option B: Using VS Code
1. Open VS Code
2. Click "File" → "Open Folder"
3. Select the `edu-platform` folder

## Step 3: Install Dependencies

Open the terminal in your code editor (Ctrl/Cmd + `) and run:

```bash
npm install
```

This will install all required packages (~2-3 minutes).

## Step 4: Start Development Server

```bash
npm run dev
```

You should see:
```
✓ Ready in 2.5s
○ Local:   http://localhost:3000
```

## Step 5: View Your Website

Open your browser and go to:
**http://localhost:3000**

You should see your education platform website! 🎉

## Next Steps

### Customize Content
1. **Hero Section:** Edit `components/Hero.tsx`
   - Change headline, description, stats
   
2. **Features:** Edit `components/Features.tsx`
   - Update product names, descriptions, icons

3. **Solutions:** Edit `components/Solutions.tsx`
   - Modify institution types and features

4. **Footer:** Edit `components/Footer.tsx`
   - Update contact info, links

### Customize Design
1. **Colors:** Edit `tailwind.config.js`
   - Change `primary` and `accent` colors

2. **Fonts:** Edit `app/globals.css`
   - Import different Google Fonts

### Deploy Online (Free)

**Vercel (Easiest - 5 minutes):**
1. Create account at https://vercel.com
2. Click "New Project"
3. Import from GitHub (or upload folder)
4. Click "Deploy"
5. Get your live URL! 🌐

**Netlify:**
1. Create account at https://netlify.com
2. Drag and drop your folder
3. Wait for deployment
4. Get your live URL!

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Check code quality
```

## Troubleshooting

### Port 3000 already in use?
```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Module not found errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
```bash
# Check TypeScript
npm run lint
```

## Need Help?

1. Check the main README.md for detailed documentation
2. All components are in `components/` folder
3. Main page is in `app/page.tsx`
4. Styles are in `app/globals.css`

## Project Structure
```
edu-platform/
├── app/
│   ├── layout.tsx       # Site layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Top navigation
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features grid
│   ├── Solutions.tsx    # Solutions section
│   ├── CTA.tsx          # Call-to-action
│   └── Footer.tsx       # Footer
└── public/              # Images, fonts, etc.
```

---

**You're all set! Start customizing and make it your own! 🎨**
