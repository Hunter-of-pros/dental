import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';
import extractionAfter from '../../assets/extractionafter.jpeg';
import extractionBefore from '../../assets/extractionbefore.jpeg';


const data = {
  name: "Tooth Extraction",
  heroImage: "/images/premium/Wisdom-Tooth-1.gif",
  beforeImage: extractionBefore,
  afterImage: extractionAfter,
  tagline: "Safe, painless tooth removal performed by expert dentists with comprehensive aftercare for a smooth, quick recovery.",
  stats: [
    { value: "20", label: "Min Procedure" },
    { value: "Painless", label: "Anaesthesia" },
    { value: "Fast", label: "Healing" },
    { value: "Expert", label: "Care" },
  ],
  beforeAfterComparison: {
    before: {
      title: "Before Tooth Extraction",
      points: [
        "Severely decayed or broken tooth causing constant pain",
        "Swollen, infected gums around the damaged tooth",
        "Difficulty eating — sharp pain when chewing on that side",
        "Bad taste or smell from the infected, decaying tooth",
        "Fever or facial swelling from spreading dental abscess",
        "Concern about the damaged tooth affecting neighbouring teeth",
      ],
    },
    after: {
      title: "After Tooth Extraction",
      points: [
        "Complete pain relief — the source of infection is removed",
        "Healthy, healing gum tissue where the tooth was removed",
        "Ability to eat comfortably on both sides again (after healing)",
        "Fresh, clean mouth with no more bad taste or odour",
        "Infection fully resolved — no more swelling or fever",
        "Space ready for implant or bridge to restore your complete smile",
      ],
    },
  },
  overview:
    "While preserving natural teeth is always the priority, there are situations where extraction is the best course of action — such as severe decay, advanced gum disease, dental crowding, or a cracked tooth beyond repair. Clove Dental's dentists perform simple and surgical extractions with the highest standards of care, ensuring a comfortable, dignified experience and providing detailed post-extraction instructions for fast, complication-free healing.",
  whyClove: [
    "Experienced dentists skilled in both simple and surgical extractions",
    "Painless extraction with effective local anaesthesia",
    "Strict 4-step sterilization protocol for complete safety",
    "Post-extraction guidance to prevent dry socket and infection",
    "Implant or bridge consultation available to replace the extracted tooth",
  ],
  symptoms: [
    "Severe tooth decay that has destroyed too much of the tooth structure",
    "Advanced gum disease that has loosened the tooth",
    "A cracked tooth with fracture lines extending below the gum line",
    "Overcrowding requiring extraction before orthodontic treatment",
    "A baby tooth that hasn't fallen out on time, blocking the permanent tooth",
    "Impacted wisdom teeth causing pain or infection",
  ],
  steps: [
    { title: "Examination & X-Ray", desc: "The dentist takes an X-ray to evaluate the tooth's root position and surrounding bone before deciding the appropriate extraction approach." },
    { title: "Local Anaesthesia", desc: "The area is thoroughly numbed so you won't feel pain during the extraction — only mild pressure as the tooth is loosened." },
    { title: "Tooth Loosening", desc: "The dentist uses a special instrument called an elevator to gently loosen the tooth from its socket and surrounding ligament." },
    { title: "Extraction", desc: "The tooth is carefully removed using forceps. Surgical extractions (for impacted or broken teeth) may involve a small incision in the gum." },
    { title: "Socket Care", desc: "The empty socket is cleaned and, if necessary, a dissolvable stitch is placed. Gauze is applied to control bleeding." },
    { title: "Aftercare Instructions", desc: "Detailed instructions on diet, oral hygiene, and activity restrictions are given to ensure safe and comfortable healing." },
  ],
  faqs: [
    { q: "Is tooth extraction painful?", a: "No. The area is completely numbed before the procedure. You may feel pressure and movement, but not pain. Post-extraction discomfort is manageable with prescribed pain relief." },
    { q: "How long does healing take after extraction?", a: "The gum tissue typically heals within 1–2 weeks. Complete bone healing in the socket takes about 3–6 months." },
    { q: "What is dry socket and how do I prevent it?", a: "Dry socket occurs when the blood clot in the extraction site dislodges, exposing bone. Avoid smoking, using a straw, or hard rinsing for the first 24–48 hours to prevent it." },
    { q: "What can I eat after a tooth extraction?", a: "Stick to soft foods — yogurt, soups, ice cream, mashed potatoes — for the first few days. Avoid hot, hard, crunchy, or spicy foods until healed." },
    { q: "Should I replace the extracted tooth?", a: "Yes, especially for permanent teeth. Leaving a gap can cause neighbouring teeth to shift, bone loss, and bite problems. Implants or bridges are excellent replacement options." },
  ],
};

const ToothExtractionPage = () => <TreatmentPage treatment={data} />;
export default ToothExtractionPage;