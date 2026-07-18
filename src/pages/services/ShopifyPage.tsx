import { SEO } from "../../components/SEO";
import { ShoppingBag } from "lucide-react";
import { ServicePage } from "../../components/service-page";

export default function ShopifyPage() {
  return (
    <>
      <SEO title="Shopify Store Setup | Meet Usama Services" description="End-to-end Shopify launch — theme, products, payments, and shipping — built and configured for you." />
      <ServicePage data={{
      eyebrow: "Service · eCommerce",
      title: "Shopify Store",
      gold: "Setup.",
      subtitle: "A launch-ready Shopify store designed to convert — theme, products, payments, shipping, and pre-launch QA.",
      icon: ShoppingBag,
      timeline: "7–14 business days",
      price: "50,000 PKR",
      includes: [
        "Store creation & theme setup",
        "Up to 20 product listings",
        "Payment gateway integration",
        "Shipping profiles",
        "Essential apps installation",
        "Pre-launch QA checklist",
      ],
      bullets: [
        "A clean, conversion-focused storefront on day one.",
        "Integrated payments (Shopify Payments, Stripe or PayPal).",
        "Ready for ads, email, and organic traffic from launch.",
      ],
      requirements: [
        "Brand name and logo (or we'll guide)",
        "Product data and imagery",
        "Business entity for payment gateways",
      ],
    }} />
    </>
  );
}
