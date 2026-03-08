import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';

const data = {
  name: "Dentures",
  heroImage: "/images/premium/teeth-whitening.png",
  beforeImage: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=900&q=80",
  afterImage: "/images/premium/teeth-whitening.png",
  tagline: "Restore your smile and chewing ability with custom-fitted, comfortable dentures designed to look and feel natural.",
  stats: [
    { value: "Custom", label: "Fitted" },
    { value: "Natural", label: "Appearance" },
    { value: "Full/Partial", label: "Options" },
    { value: "Comfortable", label: "Fit" },
  ],
  overview:
    "Dentures are removable dental prosthetics that replace missing teeth and the surrounding tissue. Full dentures replace an entire arch (upper or lower), while partial dentures fill in gaps when some natural teeth remain. At Clove Dental, dentures are custom-fabricated to match your mouth's unique shape and your desired tooth colour, ensuring a secure, comfortable fit and a natural-looking smile.",
  whyClove: [
    "Custom-fabricated for your unique jaw structure and bite",
    "High-quality acrylic and flexible partial denture materials",
    "Experienced prosthodontists for precise fitting and adjustments",
    "Implant-supported denture options for superior stability",
    "Detailed aftercare guidance and follow-up support",
  ],
  symptoms: [
    "Multiple missing teeth across one or both arches",
    "Difficulty chewing or speaking due to tooth loss",
    "Existing dentures that are loose, worn, or uncomfortable",
    "Complete tooth loss in the upper or lower jaw",
    "Gaps left by several missing teeth in an otherwise intact arch",
    "Bone or gum recession due to long-term tooth loss",
  ],
  steps: [
    { title: "Consultation & Assessment", desc: "The dentist evaluates your remaining teeth, gums, and bone structure to determine the most suitable type of denture for your needs." },
    { title: "Impressions & Measurements", desc: "Precise impressions of your gums and remaining teeth are taken to create a model from which your custom denture will be made." },
    { title: "Wax Trial", desc: "A wax model of the denture is tried in your mouth to assess aesthetics, bite, and comfort before finalisation." },
    { title: "Fabrication", desc: "Your custom denture is fabricated in the dental lab using high-quality materials matched to your natural tooth colour and facial structure." },
    { title: "Fitting & Adjustments", desc: "The finished denture is fitted and checked for comfort, stability, and bite. Minor adjustments are made to ensure optimal fit." },
    { title: "Follow-Up Care", desc: "Regular follow-up visits ensure the denture continues to fit well as your gum tissue adapts over time." },
  ],
  faqs: [
    { q: "How long does it take to get used to dentures?", a: "Most people adjust to wearing dentures within 4–8 weeks. Minor soreness and increased saliva production are normal initially and settle with time." },
    { q: "Can I sleep with my dentures in?", a: "It is generally recommended to remove dentures at night to give your gums a rest and to clean the dentures properly." },
    { q: "How do I clean my dentures?", a: "Remove and rinse dentures after eating. Brush with a soft denture brush and mild soap daily. Soak overnight in a denture cleaning solution." },
    { q: "What are implant-supported dentures?", a: "Implant-supported dentures are anchored to dental implants placed in the jawbone, providing much greater stability and comfort compared to conventional dentures." },
    { q: "How often should dentures be replaced?", a: "Dentures typically last 5–8 years before needing replacement due to normal wear and changes in jaw structure. Annual check-ups help assess when replacement is needed." },
  ],
};

const DenturesPage = () => <TreatmentPage treatment={data} />;
export default DenturesPage;