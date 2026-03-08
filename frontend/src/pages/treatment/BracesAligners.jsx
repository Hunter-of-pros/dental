import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';

const data = {
  name: "Braces & Aligners",
  heroImage: "/images/premium/braces.png",
  beforeImage: "https://cdn.pixabay.com/photo/2016/02/03/13/19/bad-teeth-1177038_1280.jpg",
  afterImage: "https://cdn.pixabay.com/photo/2016/01/20/19/25/girl-1152060_1280.jpg",
  tagline: "Straighten your teeth and achieve a perfect bite with modern braces and virtually invisible aligner solutions.",
  stats: [
    { value: "6–18", label: "Months Treatment" },
    { value: "Clear", label: "Aligner Options" },
    { value: "Expert", label: "Orthodontists" },
    { value: "All", label: "Ages Welcome" },
  ],
  beforeAfterComparison: {
    before: {
      title: "Before Braces & Aligners",
      points: [
        "Crooked, overlapping teeth that are hard to clean properly",
        "Visible gaps between teeth affecting your smile's appearance",
        "Overbite, underbite, or crossbite causing chewing difficulties",
        "Jaw pain and TMJ discomfort from misaligned bite",
        "Plaque buildup in hard-to-reach areas leading to cavities",
        "Avoiding smiling in photos due to self-consciousness",
      ],
    },
    after: {
      title: "After Braces & Aligners",
      points: [
        "Perfectly straight, evenly aligned teeth in a beautiful arch",
        "No gaps — teeth sit together naturally for a seamless smile",
        "Corrected bite — chewing is comfortable and efficient",
        "Jaw pain relieved with properly distributed bite forces",
        "Easy-to-clean teeth reducing risk of cavities and gum disease",
        "A confident, photogenic smile you'll love showing off",
      ],
    },
  },
  overview:
    "Orthodontic treatment at Clove Dental corrects crooked teeth, gaps, overcrowding, and bite problems using traditional metal braces, ceramic braces, or clear aligners. Our specialist orthodontists create personalised treatment plans with precise tooth movement tracked at every step. Whether you prefer discreet clear aligners like Clove Aligners or Invisalign, or traditional braces, we have the right solution for you.",
  whyClove: [
    "In-house Clove Aligners — affordable and tailored to your teeth",
    "Also offer Invisalign and ClearCorrect by Straumann",
    "Specialist orthodontists at every clinic",
    "Digital smile simulation to preview your results before starting",
    "Weekend and evening appointments available",
  ],
  symptoms: [
    "Crooked, rotated, or overlapping teeth",
    "Gaps between teeth affecting your smile",
    "Overcrowded teeth making cleaning difficult",
    "Overbite, underbite, crossbite, or open bite",
    "Jaw pain or discomfort related to misaligned teeth",
    "Self-consciousness about the appearance of your smile",
  ],
  steps: [
    { title: "Orthodontic Consultation", desc: "An orthodontist examines your teeth and bite, takes X-rays and impressions (or digital scans), and discusses your goals." },
    { title: "Custom Treatment Plan", desc: "A detailed plan is created mapping out each stage of tooth movement, estimated duration, and the type of appliance best suited for your case." },
    { title: "Fitting Braces or Aligners", desc: "Brackets and wires are bonded to your teeth for braces, or custom-fabricated aligner trays are handed over with detailed instructions." },
    { title: "Regular Adjustments", desc: "Every 4–8 weeks, your orthodontist adjusts your braces or provides the next set of aligner trays to keep treatment progressing." },
    { title: "Progress Monitoring", desc: "Periodic X-rays and photographs track your tooth movement and ensure you are on schedule for completion." },
    { title: "Retainers", desc: "After treatment is complete, custom retainers are provided to hold your teeth in their new positions and preserve your results." },
  ],
  faqs: [
    { q: "Are clear aligners as effective as braces?", a: "For most cases of mild to moderate crowding, spacing, and bite issues, clear aligners are as effective as traditional braces. Complex skeletal corrections may still require fixed appliances." },
    { q: "How long do I need to wear aligners each day?", a: "For effective treatment, aligners should be worn 20–22 hours per day. They are removed only for eating, drinking (other than water), and oral hygiene." },
    { q: "At what age can orthodontic treatment start?", a: "Orthodontic treatment can begin from age 7 for early intervention, and is most common between ages 11–18. Adults of any age can also benefit from orthodontic correction." },
    { q: "Do braces or aligners hurt?", a: "Some soreness for the first few days after fitting or adjustments is normal as teeth begin to move. This is temporary and manageable with over-the-counter pain relief." },
    { q: "How much do braces cost at Clove Dental?", a: "Costs vary based on the type of appliance and treatment complexity. Metal braces are the most affordable option; aligners are priced higher. Visit your nearest clinic for a personalised quote." },
  ],
};

const BracesAlignersPage = () => <TreatmentPage treatment={data} />;
export default BracesAlignersPage;