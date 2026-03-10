import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';

const data = {
  name: "Veneers",
  heroImage: "/images/premium/teeth-whitening.png",
  beforeImage: "",
  afterImage: "",
  tagline: "Transform your smile with ultra-thin porcelain veneers that correct colour, shape, and size for a flawless, natural look.",
  stats: [
    { value: "0.5mm", label: "Ultra-Thin" },
    { value: "10+", label: "Yrs Lifespan" },
    { value: "Stain", label: "Resistant" },
    { value: "Custom", label: "Shade Match" },
  ],
  beforeAfterComparison: {
    before: {
      title: "Before Veneers",
      points: [
        "Chipped, cracked, or worn-down front teeth that are visibly damaged",
        "Permanent stains and discolouration that whitening cannot fix",
        "Uneven, irregularly shaped teeth creating an asymmetric smile",
        "Minor gaps between front teeth that bother you every time you smile",
        "Teeth worn down by grinding, looking shorter and flatter",
        "Feeling the need to hide your teeth when smiling or speaking",
      ],
    },
    after: {
      title: "After Veneers",
      points: [
        "Perfectly shaped, smooth teeth — all chips and cracks concealed",
        "Brilliant, uniform white colour that stays stain-resistant for years",
        "Symmetrical, magazine-worthy smile with perfectly proportioned teeth",
        "All gaps closed — teeth appear naturally seamless together",
        "Restored tooth length and shape for a youthful appearance",
        "A stunning Hollywood smile you'll confidently show in every photo",
      ],
    },
  },
  overview:
    "Dental veneers are wafer-thin shells of porcelain or composite resin bonded to the front surface of teeth to improve their colour, shape, size, or length. They are a popular cosmetic choice for patients looking to correct chipped, stained, slightly crooked, or uneven teeth without extensive dental work. At Clove Dental, veneers are custom-crafted to complement your facial features and desired smile aesthetic.",
  whyClove: [
    "Premium porcelain veneers with lifelike translucency and durability",
    "Minimal tooth preparation — enamel-conserving technique",
    "Digital smile design preview before treatment starts",
    "Experienced cosmetic dentists and prosthodontists",
    "Custom shade selection for a perfectly natural match",
  ],
  symptoms: [
    "Permanently stained or discoloured teeth that don't respond to whitening",
    "Chipped or slightly fractured front teeth",
    "Minor gaps between teeth that affect your smile",
    "Mildly crooked or unevenly shaped teeth",
    "Worn-down teeth due to grinding or acid erosion",
    "Desire for a comprehensive smile makeover",
  ],
  steps: [
    { title: "Smile Consultation", desc: "A cosmetic dentist evaluates your teeth and discusses your smile goals, preferences, and expectations for the final result." },
    { title: "Digital Smile Design", desc: "Using digital imaging, a preview of your potential smile with veneers is created so you can visualise the outcome before committing." },
    { title: "Tooth Preparation", desc: "A minimal amount of enamel (0.3–0.5mm) is removed from the front surface of the teeth to create space for the veneer." },
    { title: "Impressions", desc: "Precise impressions are taken and sent to the lab where your custom porcelain veneers are crafted to exact specifications." },
    { title: "Temporary Veneers", desc: "Temporary veneers are placed while your permanent ones are being made, so you can assess their look and feel." },
    { title: "Bonding & Final Placement", desc: "The permanent veneers are bonded to your teeth using high-strength dental adhesive, polished, and adjusted for a perfect fit and bite." },
  ],
  faqs: [
    { q: "Are veneers permanent?", a: "Veneers are considered a permanent treatment because a small amount of enamel is removed to place them. However, the veneers themselves can be replaced if they chip or wear over time." },
    { q: "Do veneers look natural?", a: "Yes. High-quality porcelain veneers mimic the light-reflecting properties of natural enamel and are indistinguishable from your real teeth." },
    { q: "Do veneers stain?", a: "Porcelain veneers are highly stain-resistant. Composite veneers are more susceptible to staining and may need polishing or replacement sooner." },
    { q: "Are veneers painful to get?", a: "The preparation is done under local anaesthesia. Some teeth may feel sensitive after enamel removal, but this typically resolves once the veneers are bonded." },
    { q: "Can I get veneers on all my teeth?", a: "Veneers are typically placed on the front 6–10 teeth visible in your smile. A full-mouth restoration plan can be designed by your cosmetic dentist." },
  ],
};

const VeneersPage = () => <TreatmentPage treatment={data} />;
export default VeneersPage;