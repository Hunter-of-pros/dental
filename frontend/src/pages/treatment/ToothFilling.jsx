import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';

const data = {
  name: "Tooth Filling",
  heroImage: "/images/premium/Dental-Fillings-1-1.gif",
  beforeImage: "",
  afterImage: "",
  tagline: "Treat cavities quickly and effectively with tooth-coloured composite fillings that blend invisibly with your natural teeth.",
  stats: [
    { value: "30", label: "Min Procedure" },
    { value: "Invisible", label: "Tooth-Coloured" },
    { value: "Durable", label: "Long-Lasting" },
    { value: "1", label: "Sitting" },
  ],
  beforeAfterComparison: {
    before: {
      title: "Before Tooth Filling",
      points: [
        "Visible dark holes or black spots on the tooth surface",
        "Sharp pain when eating sweets, hot, or cold foods",
        "Rough, jagged edges that catch your tongue or cheek",
        "Food constantly getting stuck in the cavity",
        "Bad breath from bacteria accumulating in the decayed area",
        "Risk of infection spreading deeper into the tooth if left untreated",
      ],
    },
    after: {
      title: "After Tooth Filling",
      points: [
        "Smooth, flawless tooth surface — cavity completely invisible",
        "Eat and drink freely without any pain or sensitivity",
        "Natural-feeling tooth contour — no rough edges",
        "No more food trapping — the tooth is fully sealed",
        "Fresh, clean mouth with no bacterial buildup in the cavity",
        "Tooth structure strengthened, preventing further decay progression",
      ],
    },
  },
  overview:
    "A tooth filling is used to restore a tooth damaged by decay, returning it to its normal function and shape. At Clove Dental, we use composite resin (tooth-coloured) fillings that bond directly to your tooth, blending seamlessly with your natural enamel. The decayed material is removed, the area is cleaned, and the filling is placed and hardened with a curing light — all in a single, pain-free visit.",
  whyClove: [
    "Tooth-coloured composite fillings for invisible restorations",
    "Mercury-free materials — safe for all patients",
    "Completed in a single sitting with minimal tooth removal",
    "Precise bonding strengthens the remaining tooth structure",
    "Affordable preventive care to avoid more complex treatment later",
  ],
  symptoms: [
    "Toothache or pain when eating or drinking",
    "Visible holes, pits, or dark spots on teeth",
    "Sensitivity to sweet, hot, or cold foods and drinks",
    "Rough or jagged edges felt with the tongue",
    "A broken or chipped tooth that needs restoration",
    "Replacing old amalgam (silver) fillings with tooth-coloured ones",
  ],
  steps: [
    { title: "Examination & X-Ray", desc: "The dentist examines your teeth and takes X-rays to detect the extent of decay and determine whether a filling is sufficient." },
    { title: "Local Anaesthesia", desc: "A local anaesthetic is administered to numb the tooth and surrounding area so you don't feel discomfort during the procedure." },
    { title: "Decay Removal", desc: "The decayed portion of the tooth is carefully removed using a dental drill, leaving only healthy tooth structure." },
    { title: "Tooth Preparation", desc: "The cavity is cleaned and etched to create a surface that the composite resin will bond strongly to." },
    { title: "Filling Placement", desc: "The tooth-coloured composite resin is placed in layers and shaped to match the natural contour of your tooth." },
    { title: "Curing & Polishing", desc: "Each layer is hardened using a curing light, and the filling is polished to a smooth finish that feels natural in your mouth." },
  ],
  faqs: [
    { q: "How long do tooth fillings last?", a: "Composite fillings typically last 7–10 years with proper care. The longevity depends on the size of the filling and your oral hygiene habits." },
    { q: "Is the filling procedure painful?", a: "No. The area is numbed with local anaesthesia before the procedure. You may feel some pressure but should not experience pain." },
    { q: "Are composite fillings better than silver amalgam?", a: "Composite fillings are tooth-coloured, mercury-free, and bond to the tooth for added strength. Most patients and dentists today prefer them over traditional amalgam fillings." },
    { q: "Can a filling fall out?", a: "Fillings can crack or come loose over time, especially if exposed to excessive chewing forces. Visit your dentist promptly if you notice a loose or missing filling." },
    { q: "How many fillings can be done in one visit?", a: "Multiple fillings can be done in a single visit if they are in different areas of the mouth. Your dentist will advise based on the number and complexity of cavities." },
  ],
};

const ToothFillingPage = () => <TreatmentPage treatment={data} />;
export default ToothFillingPage;