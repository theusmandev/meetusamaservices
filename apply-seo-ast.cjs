const babel = require('@babel/core');
const fs = require('fs');

const pages = [
  { path: 'src/pages/HomePage.tsx', depth: 1, title: 'Meet Usama Services — Global Business & Payment Consultancy', desc: 'Register UK LTD & US LLC companies, open Wise, Payoneer, PayPal & Stripe accounts, and launch Shopify stores worldwide — done for you by experienced consultants.' },
  { path: 'src/pages/AboutPage.tsx', depth: 1, title: 'About Us | Meet Usama Services', desc: 'Learn about Meet Usama Services — a global business consultancy helping entrepreneurs register companies and open international payment accounts.' },
  { path: 'src/pages/ServicesPage.tsx', depth: 1, title: 'Our Services | Company Registration & Payment Accounts — Meet Usama Services', desc: 'From UK LTD and US LLC formation to Wise, Stripe, PayPal, and Shopify setup — explore our full range of global business consultancy services.' },
  { path: 'src/pages/services/UKLtdPage.tsx', depth: 2, title: 'UK LTD Registration for Non-Residents | Meet Usama Services', desc: 'Full UK Limited company formation, HMRC compliance, and registered address — done for you by experienced consultants.' },
  { path: 'src/pages/services/USLlcPage.tsx', depth: 2, title: 'US LLC Formation (Wyoming, Delaware, New Mexico) | Meet Usama Services', desc: 'US LLC formation for non-residents with a matching EIN — fast, compliant, and built for global founders.' },
  { path: 'src/pages/services/WisePage.tsx', depth: 2, title: 'Wise Business Account Setup | Meet Usama Services', desc: 'Multi-currency Wise Business accounts with clean, reliable approval — set up end-to-end by our consultancy team.' },
  { path: 'src/pages/services/PayoneerPage.tsx', depth: 2, title: 'Payoneer Business | Meet Usama Services', desc: 'Payoneer account setup for freelancers and marketplace sellers, handled from application to approval.' },
  { path: 'src/pages/services/PayPalPage.tsx', depth: 2, title: 'PayPal Business Account Setup | Meet Usama Services', desc: 'Verified PayPal Business accounts that hold and withdraw reliably — set up by our experienced team.' },
  { path: 'src/pages/services/StripePage.tsx', depth: 2, title: 'Stripe Approval for Non-US Founders | Meet Usama Services', desc: 'Stripe activation for SaaS founders, agencies, and global operators — we handle the structuring and documentation.' },
  { path: 'src/pages/services/ShopifyPage.tsx', depth: 2, title: 'Shopify Store Setup | Meet Usama Services', desc: 'End-to-end Shopify launch — theme, products, payments, and shipping — built and configured for you.' },
  { path: 'src/pages/ContactPage.tsx', depth: 1, title: 'Contact Us | Meet Usama Services', desc: 'Get in touch with Meet Usama Services for a free consultation on company registration and international payment accounts.' },
  { path: 'src/pages/BlogPage.tsx', depth: 1, title: 'Blog | Meet Usama Services', desc: 'Practical guides and insights on company formation, Stripe, PayPal, and Wise approval for global founders.' },
  { path: 'src/pages/FAQPage.tsx', depth: 1, title: 'Frequently Asked Questions | Meet Usama Services', desc: 'Answers to common questions about company registration, payment account setup, pricing, and our process.' },
  { path: 'src/pages/PrivacyPage.tsx', depth: 1, title: 'Privacy Policy | Meet Usama Services', desc: 'How Meet Usama Services collects, uses, and protects your personal information.' },
  { path: 'src/pages/TermsPage.tsx', depth: 1, title: 'Terms & Conditions | Meet Usama Services', desc: 'The terms and conditions governing use of Meet Usama Services and our consultancy services.' },
  { path: 'src/pages/RefundPolicyPage.tsx', depth: 1, title: 'Refund Policy | Meet Usama Services', desc: 'Read our refund policy before making a payment for any Meet Usama Services consultancy service.' },
  { path: 'src/pages/PaymentPage.tsx', depth: 1, title: 'Complete Your Payment | Meet Usama Services', desc: 'Secure payment page for Meet Usama Services clients.', props: ' noindex={true}' },
];

for (const p of pages) {
  let code = fs.readFileSync(p.path, 'utf8');
  
  // Use Babel to parse the AST to find the return statement of the default export function
  let ast;
  try {
    ast = babel.parseSync(code, {
      presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
      filename: p.path
    });
  } catch (e) {
    console.error(`Failed to parse ${p.path}:`, e.message);
    continue;
  }

  let returnStart = -1;
  let returnEnd = -1;
  
  babel.traverse(ast, {
    ExportDefaultDeclaration(path) {
      if (path.node.declaration.type === 'FunctionDeclaration') {
        let returnStatements = [];
        path.traverse({
          ReturnStatement(retPath) {
            // Find the outermost return statements (ignore those inside mapped arrays/closures)
            if (retPath.getFunctionParent().node === path.node.declaration) {
               returnStatements.push(retPath);
            }
          }
        });
        
        // Use the last return statement (the main one)
        if (returnStatements.length > 0) {
           let mainRet = returnStatements[returnStatements.length - 1];
           returnStart = mainRet.node.argument.start;
           returnEnd = mainRet.node.argument.end;
        }
      }
    }
  });

  if (returnStart !== -1) {
    let originalReturn = code.substring(returnStart, returnEnd);
    let seoTag = `<SEO title="${p.title}" description="${p.desc}"${p.props || ''} />`;
    let importStmt = `import { SEO } from "${p.depth === 1 ? '../components/SEO' : '../../components/SEO'}";\n`;
    
    // Wrap original return argument in a fragment alongside the SEO tag
    let newArgument = `<>\n      ${seoTag}\n      ${originalReturn}\n    </>`;
    
    let newCode = code.substring(0, returnStart) + newArgument + code.substring(returnEnd);
    
    // Prevent duplicate imports if run multiple times
    if (!newCode.includes('import { SEO }')) {
      newCode = importStmt + newCode;
    }
    
    fs.writeFileSync(p.path, newCode);
    console.log('Fixed', p.path);
  } else {
    console.log('Could not find main return in', p.path);
  }
}
