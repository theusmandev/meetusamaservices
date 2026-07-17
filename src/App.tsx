import { Routes, Route, Link } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollProgress } from "./components/ScrollProgress";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { FloatingActions } from "./components/floating-actions";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import PaymentPage from "./pages/PaymentPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";

import UKLtdPage from "./pages/services/UKLtdPage";
import USLlcPage from "./pages/services/USLlcPage";
import WisePage from "./pages/services/WisePage";
import PayoneerPage from "./pages/services/PayoneerPage";
import PayPalPage from "./pages/services/PayPalPage";
import StripePage from "./pages/services/StripePage";
import ShopifyPage from "./pages/services/ShopifyPage";

function NotFoundPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-black text-gradient-gold">404</h1>
        <h2 className="mt-4 font-display text-2xl font-bold">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-[color:var(--gold-hover)] hover:shadow-lg hover:shadow-[color:var(--gold)]/20"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Yahan ScrollToTop lagaya gaya hai jo background mein kaam karega  */}
      <ScrollToTop />
      <ScrollProgress />
      <SiteHeader />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/uk-ltd" element={<UKLtdPage />} />
          <Route path="/services/us-llc" element={<USLlcPage />} />
          <Route path="/services/wise" element={<WisePage />} />
          <Route path="/services/payoneer" element={<PayoneerPage />} />
          <Route path="/services/paypal" element={<PayPalPage />} />
          <Route path="/services/stripe" element={<StripePage />} />
          <Route path="/services/shopify" element={<ShopifyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}