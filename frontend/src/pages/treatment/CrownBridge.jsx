import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';

const data = {
  name: "Dental Crown & Bridge",
  heroImage: "/images/premium/Crowns.gif",
  beforeImage: "",
  afterImage: "",
  tagline: "Restore damaged teeth or replace missing ones with durable, natural-looking crowns and bridges crafted to perfection.",
  stats: [
    { value: "2", label: "Sittings" },
    { value: "10+", label: "Yrs Lifespan" },
    { value: "Natural", label: "Appearance" },
    { value: "Strong", label: "Bite Restored" },
  ],
  beforeAfterComparison: {
    before: {
      title: "Before Crown & Bridge",
      points: [
        "Cracked, chipped, or severely worn-down tooth that's visually obvious",
        "Weakened tooth at risk of breaking further during chewing",
        "Visible gap from a missing tooth affecting your smile symmetry",
        "Difficulty chewing on one side due to damaged or missing teeth",
        "Old, discoloured crown that stands out from natural teeth",
        "Sensitivity in the broken tooth when exposed to air or food",
      ],
    },
    after: {
      title: "After Crown & Bridge",
      points: [
        "Tooth fully restored with a natural-looking, colour-matched crown",
        "Strengthened tooth structure — chew confidently on all foods",
        "Gap seamlessly filled with a bridge that looks like real teeth",
        "Full biting and chewing function restored on both sides",
        "Modern zirconia or porcelain crown indistinguishable from natural teeth",
        "No more sensitivity — the tooth is fully protected and sealed",
      ],
    },
  },
  overview:
    "A dental crown is a custom-made cap that fits over a damaged, weakened, or root canal-treated tooth, restoring its shape, strength, and appearance. A dental bridge uses one or more crowns on adjacent teeth as anchors to span the gap created by a missing tooth. Both are fabricated from high-quality materials like zirconia or porcelain-fused-to-metal and are colour-matched to blend seamlessly with your natural teeth.",
  whyClove: [
    "High-strength zirconia and porcelain-fused crowns for natural aesthetics",
    "Digital impressions for precise, comfortable fitting",
    "Experienced prosthodontists for complex restorations",
    "In-house dental labs at select clinics for faster turnaround",
    "Long-lasting results with proper care and maintenance",
  ],
  symptoms: [
    "A cracked, broken, or severely decayed tooth",
    "A tooth that has undergone root canal treatment",
    "A weak tooth at risk of fracturing",
    "A missing tooth creating a gap in your smile",
    "An existing crown that is old, chipped, or discoloured",
    "Difficulty chewing due to a compromised tooth",
  ],
  steps: [
    { title: "Examination & Planning", desc: "The dentist examines the affected tooth or gap and recommends the appropriate crown material or bridge design." },
    { title: "Tooth Preparation", desc: "The tooth receiving a crown is reshaped to create space. For a bridge, the two anchor teeth on either side of the gap are prepared." },
    { title: "Impressions", desc: "Precise impressions (digital or physical) of the prepared teeth are taken and sent to the dental lab for crown/bridge fabrication." },
    { title: "Temporary Crown", desc: "A temporary crown or bridge is placed to protect the prepared teeth while the permanent restoration is being made." },
    { title: "Crown/Bridge Fitting", desc: "The permanent crown or bridge is tried in, checked for fit, bite, and colour, and adjusted as needed before final cementation." },
    { title: "Final Cementation", desc: "Once approved, the crown or bridge is permanently cemented in place, restoring full function and aesthetics." },
  ],
  faqs: [
    { q: "How long do dental crowns last?", a: "With good oral hygiene and regular dental visits, crowns typically last 10–15 years or longer. Zirconia crowns are among the most durable available." },
    { q: "Is getting a crown painful?", a: "The procedure is done under local anaesthesia so it is not painful. Some sensitivity in the prepared tooth for a few days after is normal." },
    { q: "What materials are used for crowns?", a: "Clove Dental offers full zirconia crowns, porcelain-fused-to-metal (PFM), and all-ceramic crowns. The best material depends on the tooth's location and function." },
    { q: "Can a bridge replace multiple missing teeth?", a: "Yes, a bridge can replace two or three consecutive missing teeth, provided the anchor teeth are strong enough to support the restoration." },
    { q: "Should I choose an implant or a bridge?", a: "Implants are generally the superior long-term option as they don't involve altering adjacent teeth and preserve jawbone. However, bridges are quicker and more affordable. Your dentist will advise based on your case." },
  ],
};

const CrownBridgePage = () => <TreatmentPage treatment={data} />;
export default CrownBridgePage;