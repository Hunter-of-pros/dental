import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';

const data = {
  name: "Dental Implants",
  heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=85",
  tagline: "Replace missing teeth permanently with titanium implants that look, feel, and function exactly like natural teeth.",
  stats: [
    { value: "98%", label: "Success Rate" },
    { value: "Lifetime", label: "Durability" },
    { value: "Swiss", label: "Grade Implants" },
    { value: "1300+", label: "Expert Dentists" },
  ],
  overview:
    "A dental implant is a titanium post surgically placed into the jawbone to act as an artificial tooth root. Once it integrates with the bone, a custom crown is attached on top, creating a permanent, natural-looking replacement for a missing tooth. Unlike dentures or bridges, implants preserve jawbone density, prevent neighbouring teeth from shifting, and require no special maintenance. Clove Dental uses premium Swiss-made implants for long-lasting, high-quality outcomes.",
  whyClove: [
    "Premium Swiss-made titanium implants for maximum success rates",
    "Expert implantologists with specialised training",
    "3D CBCT scanning for precise implant placement planning",
    "Single-tooth to full-mouth implant solutions available",
    "EMI and flexible payment options to suit every budget",
  ],
  symptoms: [
    "One or more missing teeth affecting your smile or bite",
    "Loose or ill-fitting dentures causing discomfort",
    "Bone loss in the jaw due to missing teeth",
    "Difficulty chewing or speaking due to tooth loss",
    "Shifting of adjacent teeth into the gap",
    "Desire for a permanent, low-maintenance tooth replacement",
  ],
  steps: [
    { title: "Consultation & Imaging", desc: "A 3D CBCT scan and comprehensive examination assess bone density and determine the ideal implant position." },
    { title: "Treatment Planning", desc: "The implantologist designs a customised treatment plan including implant type, placement angle, and restoration timeline." },
    { title: "Implant Placement", desc: "The titanium implant post is surgically placed into the jawbone under local anaesthesia in a sterile environment." },
    { title: "Osseointegration (Healing)", desc: "Over 3–6 months, the implant fuses with the jawbone through a natural process called osseointegration, creating a strong foundation." },
    { title: "Abutment Fitting", desc: "Once healed, a small connector piece (abutment) is attached to the implant to support the final crown." },
    { title: "Crown Placement", desc: "A custom-fabricated porcelain crown is placed on the abutment, completing your new tooth — identical in look and function to a natural tooth." },
  ],
  faqs: [
    { q: "Are dental implants painful?", a: "The procedure is done under local anaesthesia, so you won't feel pain during surgery. Mild soreness for a few days after is normal and managed with prescribed medication." },
    { q: "How long do dental implants last?", a: "With proper oral hygiene and regular check-ups, dental implants can last a lifetime. The crown on top may need replacement after 10–15 years." },
    { q: "Am I a good candidate for implants?", a: "Most adults with sufficient jawbone density and good overall health are candidates. People with uncontrolled diabetes or who smoke heavily may need additional evaluation." },
    { q: "How is an implant different from a bridge?", a: "Unlike a bridge, an implant does not require grinding down adjacent healthy teeth. It also preserves jawbone and is a standalone, permanent solution." },
    { q: "What is the cost of dental implants at Clove?", a: "Implant costs depend on the type and number of implants. Clove Dental uses premium Swiss implants and offers EMI options. Contact your nearest clinic for pricing." },
  ],
};

const DentalImplantsPage = () => <TreatmentPage treatment={data} />;
export default DentalImplantsPage;