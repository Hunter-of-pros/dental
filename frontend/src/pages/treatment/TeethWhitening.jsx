import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';

const data = {
  name: "Teeth Whitening",
  heroImage: "https://images.unsplash.com/photo-1445583934509-4ce6cf7510cb?w=1200&q=85",
  beforeImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80&sat=-100",
  afterImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=100",
  tagline: "Brighten your smile by several shades with safe, clinically proven professional teeth whitening at Clove Dental.",
  stats: [
    { value: "8+", label: "Shades Brighter" },
    { value: "1", label: "Sitting" },
    { value: "Safe", label: "Enamel-Friendly" },
    { value: "Long", label: "Lasting Results" },
  ],
  overview:
    "Professional teeth whitening at Clove Dental uses clinically approved bleaching agents activated by advanced light technology to safely break down stains on your enamel. Unlike over-the-counter products, our in-clinic whitening is supervised by trained dentists, ensuring even results without sensitivity or enamel damage. Walk in with stained teeth and leave with a noticeably brighter, more confident smile.",
  whyClove: [
    "Clinically approved whitening agents — safe for enamel and gums",
    "Supervised by trained dental professionals for even results",
    "Up to 8 shades improvement in a single session",
    "Customised take-home trays also available",
    "Minimal to no post-treatment sensitivity",
  ],
  symptoms: [
    "Yellow or brown staining from tea, coffee, or tobacco",
    "Surface stains from wine, curries, or coloured foods",
    "Age-related yellowing or darkening of teeth",
    "Uneven tooth colour affecting your smile confidence",
    "Stains from certain medications like tetracycline",
    "Fluorosis-related discolouration",
  ],
  steps: [
    { title: "Dental Consultation", desc: "A dentist examines your teeth and gums to check suitability for whitening and to rule out cavities or gum disease that need treatment first." },
    { title: "Shade Assessment", desc: "Your current tooth shade is recorded using a shade guide so you can see the before-and-after difference clearly." },
    { title: "Gum Protection", desc: "A protective barrier is applied to your gums and soft tissues to prevent the whitening gel from causing irritation." },
    { title: "Whitening Gel Application", desc: "A professional-grade hydrogen peroxide gel is carefully applied to the tooth surfaces." },
    { title: "Light Activation", desc: "A special curing light or laser activates the gel, accelerating the whitening process for faster, more dramatic results." },
    { title: "Final Shade Comparison", desc: "The gel is removed, your teeth are rinsed, and your new shade is compared against the original to reveal your results." },
  ],
  faqs: [
    { q: "Is teeth whitening safe?", a: "Yes, professional teeth whitening at Clove Dental is completely safe when performed by trained dentists using clinically approved materials. It does not damage enamel." },
    { q: "How long do the results last?", a: "Results typically last 6 months to 2 years depending on your diet and oral hygiene habits. Avoiding staining foods and drinks helps maintain your results longer." },
    { q: "Will whitening cause sensitivity?", a: "Some patients experience mild, temporary sensitivity for 24–48 hours after whitening. Our dentists may recommend a desensitising toothpaste to manage this." },
    { q: "Can whitening fix all types of stains?", a: "In-clinic whitening works best on external stains from food and beverages. Intrinsic stains (from medication or fluorosis) may require alternative treatments like veneers." },
    { q: "How many sessions do I need?", a: "Most patients achieve their desired results in a single in-clinic session. Severely stained teeth may benefit from follow-up sessions or custom take-home trays." },
  ],
};

const TeethWhiteningPage = () => <TreatmentPage treatment={data} />;
export default TeethWhiteningPage;