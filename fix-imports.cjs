const fs = require('fs');

const pages = [
  { path: 'src/pages/HomePage.tsx', depth: 1 },
  { path: 'src/pages/AboutPage.tsx', depth: 1 },
  { path: 'src/pages/ServicesPage.tsx', depth: 1 },
  { path: 'src/pages/services/UKLtdPage.tsx', depth: 2 },
  { path: 'src/pages/services/USLlcPage.tsx', depth: 2 },
  { path: 'src/pages/services/WisePage.tsx', depth: 2 },
  { path: 'src/pages/services/PayoneerPage.tsx', depth: 2 },
  { path: 'src/pages/services/PayPalPage.tsx', depth: 2 },
  { path: 'src/pages/services/StripePage.tsx', depth: 2 },
  { path: 'src/pages/services/ShopifyPage.tsx', depth: 2 },
  { path: 'src/pages/ContactPage.tsx', depth: 1 },
  { path: 'src/pages/BlogPage.tsx', depth: 1 },
  { path: 'src/pages/FAQPage.tsx', depth: 1 },
  { path: 'src/pages/PrivacyPage.tsx', depth: 1 },
  { path: 'src/pages/TermsPage.tsx', depth: 1 },
  { path: 'src/pages/RefundPolicyPage.tsx', depth: 1 },
  { path: 'src/pages/PaymentPage.tsx', depth: 1 },
  { path: 'src/pages/BlogPostPage.tsx', depth: 1 },
];

for (const p of pages) {
  let c = fs.readFileSync(p.path, 'utf8');
  let lines = c.split('\n');
  
  // Remove all instances of the SEO import
  let newLines = lines.filter(line => !line.includes('import { SEO } from'));
  
  // Add it back cleanly at the very top (line 0)
  const importPath = p.depth === 1 ? '../components/SEO' : '../../components/SEO';
  newLines.unshift(`import { SEO } from "${importPath}";`);
  
  let newContent = newLines.join('\n');
  
  if (c !== newContent) {
    fs.writeFileSync(p.path, newContent);
    console.log(`Fixed ${p.path}`);
  }
}
