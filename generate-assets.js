/**
 * Generate all required image assets as SVG files
 * Run: node generate-assets.js
 */
const fs = require('fs');

// ── 1. og-image.svg (1200x630) ──────────────────────────────────────────────
const ogImage = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#070714"/>
      <stop offset="100%" style="stop-color:#1a1a2e"/>
    </linearGradient>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="50%" style="stop-color:#8b5cf6"/>
      <stop offset="100%" style="stop-color:#d946ef"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <!-- Glow circles -->
  <circle cx="200" cy="150" r="300" fill="#6366f1" opacity="0.08"/>
  <circle cx="1000" cy="480" r="280" fill="#8b5cf6" opacity="0.08"/>
  <!-- Play icon circle -->
  <circle cx="600" cy="220" r="80" fill="url(#grad)" opacity="0.15" filter="url(#glow)"/>
  <circle cx="600" cy="220" r="60" fill="none" stroke="url(#grad)" stroke-width="3"/>
  <polygon points="585,195 585,245 630,220" fill="url(#grad)"/>
  <!-- Brand name -->
  <text x="600" y="340" font-family="Arial, sans-serif" font-size="72" font-weight="900"
        text-anchor="middle" fill="url(#grad)">밤포탈</text>
  <!-- Tagline -->
  <text x="600" y="400" font-family="Arial, sans-serif" font-size="28" font-weight="400"
        text-anchor="middle" fill="#a1a1aa">대한민국 1위 영상 스트리밍 플랫폼</text>
  <!-- Stats bar -->
  <rect x="250" y="450" width="700" height="1" fill="#ffffff" opacity="0.1"/>
  <text x="350" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="700"
        text-anchor="middle" fill="#6366f1">100만+</text>
  <text x="350" y="515" font-family="Arial, sans-serif" font-size="14"
        text-anchor="middle" fill="#71717a">월간 활성 사용자</text>
  <text x="600" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="700"
        text-anchor="middle" fill="#6366f1">50만+</text>
  <text x="600" y="515" font-family="Arial, sans-serif" font-size="14"
        text-anchor="middle" fill="#71717a">HD 영상 콘텐츠</text>
  <text x="850" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="700"
        text-anchor="middle" fill="#6366f1">24/7</text>
  <text x="850" y="515" font-family="Arial, sans-serif" font-size="14"
        text-anchor="middle" fill="#71717a">무중단 서비스</text>
  <!-- Domain -->
  <text x="600" y="580" font-family="Arial, sans-serif" font-size="18"
        text-anchor="middle" fill="#52525b">밤포탈.여기여.site</text>
</svg>`;

// ── 2. logo.svg (600x60) ────────────────────────────────────────────────────
const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="60" viewBox="0 0 600 60">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="50%" style="stop-color:#8b5cf6"/>
      <stop offset="100%" style="stop-color:#d946ef"/>
    </linearGradient>
  </defs>
  <rect width="600" height="60" fill="#070714"/>
  <!-- Play icon -->
  <circle cx="30" cy="30" r="22" fill="url(#grad)" opacity="0.2"/>
  <polygon points="22,18 22,42 46,30" fill="url(#grad)"/>
  <!-- Brand text -->
  <text x="62" y="42" font-family="Arial, sans-serif" font-size="36" font-weight="900"
        fill="url(#grad)">밤포탈</text>
  <!-- Tagline -->
  <text x="200" y="38" font-family="Arial, sans-serif" font-size="16" font-weight="400"
        fill="#71717a">대한민국 1위 영상 스트리밍 플랫폼</text>
</svg>`;

// ── 3. apple-touch-icon.svg (180x180) ───────────────────────────────────────
const touchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1"/>
      <stop offset="100%" style="stop-color:#d946ef"/>
    </linearGradient>
  </defs>
  <rect width="180" height="180" rx="40" fill="#070714"/>
  <rect width="180" height="180" rx="40" fill="url(#grad)" opacity="0.15"/>
  <circle cx="90" cy="80" r="45" fill="url(#grad)" opacity="0.2"/>
  <circle cx="90" cy="80" r="38" fill="none" stroke="url(#grad)" stroke-width="2.5"/>
  <polygon points="76,60 76,100 116,80" fill="url(#grad)"/>
  <text x="90" y="148" font-family="Arial, sans-serif" font-size="22" font-weight="900"
        text-anchor="middle" fill="url(#grad)">밤포탈</text>
</svg>`;

// ── Write files ──────────────────────────────────────────────────────────────
fs.writeFileSync('og-image.svg', ogImage, 'utf8');
fs.writeFileSync('logo.svg', logo, 'utf8');
fs.writeFileSync('apple-touch-icon.svg', touchIcon, 'utf8');

// Update HTML references to use SVG versions
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('href="https://밤포탈.여기여.site/og-image.jpg"', 'href="https://밤포탈.여기여.site/og-image.svg"');
html = html.replace('content="https://밤포탈.여기여.site/og-image.jpg"', 'content="https://밤포탈.여기여.site/og-image.svg"');
html = html.replace(/https:\/\/밤포탈\.여기여\.site\/og-image\.jpg/g, 'https://밤포탈.여기여.site/og-image.svg');
html = html.replace(/https:\/\/밤포탈\.여기여\.site\/logo\.png/g, 'https://밤포탈.여기여.site/logo.svg');
html = html.replace('href="/apple-touch-icon.png"', 'href="/apple-touch-icon.svg"');
fs.writeFileSync('index.html', html, 'utf8');

console.log('✅ og-image.svg created (1200x630)');
console.log('✅ logo.svg created (600x60)');
console.log('✅ apple-touch-icon.svg created (180x180)');
console.log('✅ index.html updated with SVG references');
console.log('');
console.log('NOTE: For production, convert SVGs to PNG/JPG using:');
console.log('  - https://cloudconvert.com/svg-to-jpg');
console.log('  - Or: npm install sharp && node convert.js');
