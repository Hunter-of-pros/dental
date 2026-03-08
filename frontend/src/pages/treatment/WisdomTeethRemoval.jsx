import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';

const data = {
  name: "Wisdom Teeth Removal",
  heroImage: "/images/premium/dental-implant.png",
  beforeImage: "https://cdn.pixabay.com/photo/2017/07/22/16/05/dentist-2530990_1280.jpg",
  afterImage: "https://cdn.pixabay.com/photo/2017/05/25/09/49/smile-2342921_1280.jpg",
  tagline: "Painless, expert extraction of impacted or problematic wisdom teeth with fast healing and complete aftercare support.",
  stats: [
    { value: "30", label: "Min Procedure" },
    { value: "Expert", label: "Oral Surgeons" },
    { value: "Safe", label: "Anaesthesia" },
    { value: "Fast", label: "Recovery" },
  ],
  beforeAfterComparison: {
    before: {
      title: "Before Wisdom Teeth Removal",
      points: [
        "Intense pain and throbbing at the back of the jaw",
        "Swollen, inflamed gums around the impacted wisdom tooth",
        "Difficulty opening mouth fully or eating comfortably",
        "Recurring infections (pericoronitis) causing fever and discomfort",
        "Adjacent teeth getting crowded or pushed out of alignment",
        "Food constantly trapping behind the partially erupted tooth",
      ],
    },
    after: {
      title: "After Wisdom Teeth Removal",
      points: [
        "Complete pain relief — no more jaw aching or throbbing",
        "Gums heal cleanly within 1–2 weeks, swelling fully resolved",
        "Full jaw mobility restored — eat, talk, and yawn freely",
        "No more recurring infections or antibiotics needed",
        "Surrounding teeth stay properly aligned and healthy",
        "Easy-to-clean area with no more food trapping issues",
      ],
    },
  },
  overview:
    "Wisdom teeth, or third molars, typically emerge in the late teens or early twenties. When there isn't enough space in the jaw, they become impacted — stuck beneath the gum or growing at an angle — causing pain, infection, and damage to adjacent teeth. Clove Dental's oral surgeons perform wisdom tooth extractions with precision and care, using local anaesthesia for a pain-free experience and providing detailed aftercare instructions for a smooth recovery.",
  whyClove: [
    "Experienced oral surgeons with expertise in complex extractions",
    "Digital OPG X-rays for precise pre-surgical planning",
    "Comfortable, pain-free procedure under local anaesthesia",
    "Comprehensive post-operative care and follow-up",
    "700+ clinics across India for convenient access",
  ],
  symptoms: [
    "Pain or aching at the back of the jaw",
    "Swelling or tenderness around the gums near the last molar",
    "Difficulty opening the mouth fully",
    "Recurring infection (pericoronitis) around a partially erupted tooth",
    "Crowding or shifting of other teeth",
    "Food trapping and difficulty cleaning the area",
  ],
  steps: [
    { title: "Consultation & X-Ray", desc: "The dentist takes a digital OPG X-ray to understand the position, angle, and depth of the wisdom tooth before planning the extraction." },
    { title: "Local Anaesthesia", desc: "The area is numbed thoroughly so you feel no pain during the procedure. Sedation options are available for anxious patients." },
    { title: "Gum Incision (if needed)", desc: "For impacted teeth, a small incision is made in the gum tissue to access the tooth beneath the surface." },
    { title: "Tooth Sectioning", desc: "The tooth may be divided into smaller sections to make removal easier and minimise disruption to surrounding bone and tissue." },
    { title: "Extraction", desc: "The tooth is gently removed. The area is cleaned thoroughly to remove any debris or infected tissue." },
    { title: "Suturing & Aftercare", desc: "Dissolving stitches are placed if required, and detailed aftercare instructions are provided along with follow-up scheduling." },
  ],
  faqs: [
    { q: "Is wisdom tooth removal painful?", a: "The procedure itself is performed under local anaesthesia so you will not feel pain. Some soreness and swelling for 2–3 days post-extraction is normal and manageable with prescribed medication." },
    { q: "Do all wisdom teeth need to be removed?", a: "No. Wisdom teeth that are fully erupted, correctly positioned, and easy to clean do not need removal. Extraction is recommended only when they cause problems." },
    { q: "How long is the recovery time?", a: "Most patients recover within 3–5 days for simple extractions. Impacted wisdom tooth removal may require up to 1–2 weeks for full healing." },
    { q: "Can I eat after wisdom tooth removal?", a: "Stick to soft foods — yogurt, mashed potatoes, soups — for the first few days. Avoid hard, crunchy, or spicy foods until the area heals." },
    { q: "Can all four wisdom teeth be removed at once?", a: "Yes, it is possible to remove all four in one sitting under general or IV sedation. Your surgeon will advise the best approach based on your specific case." },
  ],
};

const WisdomTeethPage = () => <TreatmentPage treatment={data} />;
export default WisdomTeethPage;