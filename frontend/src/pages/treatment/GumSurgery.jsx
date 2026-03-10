import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';

const data = {
  name: "Gum Surgery",
  heroImage: "/images/premium/Gum-Treatment.gif",
  beforeImage: "",
  afterImage: "",
  tagline: "Treat advanced gum disease and restore healthy gums with precise periodontal surgery performed by specialist periodontists.",
  stats: [
    { value: "Expert", label: "Periodontists" },
    { value: "Safe", label: "Procedure" },
    { value: "Proven", label: "Results" },
    { value: "Long", label: "Lasting Health" },
  ],
  beforeAfterComparison: {
    before: {
      title: "Before Gum Surgery",
      points: [
        "Red, swollen gums that bleed easily when brushing or flossing",
        "Receding gum line making teeth appear unnaturally long",
        "Deep gum pockets (5mm+) harbouring bacteria and infection",
        "Persistent bad breath (halitosis) that won't go away",
        "Loose teeth from bone loss caused by untreated periodontitis",
        "Tender, painful gums that make eating uncomfortable",
      ],
    },
    after: {
      title: "After Gum Surgery",
      points: [
        "Healthy pink gums — no more bleeding during brushing",
        "Gum line restored to a natural, aesthetically pleasing position",
        "Shallow, healthy gum pockets that are easy to maintain",
        "Fresh breath restored with infection completely eliminated",
        "Teeth stabilised — bone loss halted and gums reattached",
        "Comfortable, pain-free gums that feel firm and healthy",
      ],
    },
  },
  overview:
    "Gum surgery (periodontal surgery) is recommended when non-surgical treatments like scaling and root planing cannot adequately address advanced gum disease. It involves accessing the roots of the teeth by folding back the gum tissue, removing diseased tissue and bacteria, and repositioning the gums for better healing and easier long-term maintenance. Clove Dental's periodontists use minimally invasive techniques to achieve excellent outcomes with faster recovery.",
  whyClove: [
    "Specialist periodontists with advanced training in gum treatment",
    "Minimally invasive surgical techniques for faster healing",
    "Laser-assisted gum surgery available at select clinics",
    "Comprehensive post-surgical care and follow-up programme",
    "Combined treatment planning with implants or prosthetics if needed",
  ],
  symptoms: [
    "Bleeding gums that persist despite regular brushing and cleaning",
    "Red, swollen, or tender gum tissue",
    "Gum recession causing teeth to appear longer",
    "Deep gum pockets (5mm+) that cannot be cleaned non-surgically",
    "Loose teeth due to bone loss from advanced periodontitis",
    "Persistent bad breath (halitosis) despite good oral hygiene",
  ],
  steps: [
    { title: "Periodontal Assessment", desc: "The periodontist measures gum pocket depths, takes X-rays to assess bone loss, and evaluates the extent of disease." },
    { title: "Initial Scaling", desc: "A thorough professional cleaning (scaling and root planing) is performed first to reduce infection before surgery." },
    { title: "Local Anaesthesia", desc: "The surgical area is numbed with local anaesthesia so you feel no pain during the procedure." },
    { title: "Flap Surgery", desc: "The gum tissue is carefully folded back to expose the roots and underlying bone for thorough cleaning and treatment." },
    { title: "Cleaning & Reshaping", desc: "Bacteria, tartar, and diseased tissue are removed. If needed, the bone is reshaped or regenerative materials are placed to encourage regrowth." },
    { title: "Suturing & Recovery", desc: "The gums are sutured back into position. Healing instructions are provided along with a scheduled follow-up to monitor progress." },
  ],
  faqs: [
    { q: "Is gum surgery painful?", a: "The procedure is done under local anaesthesia, so you won't feel pain during surgery. Some soreness and swelling for a few days after is normal and managed with medication." },
    { q: "How long does recovery take?", a: "Most patients recover within 1–2 weeks. Strenuous activity and certain foods should be avoided during the initial healing period." },
    { q: "Can gum disease come back after surgery?", a: "Surgery treats existing disease but does not guarantee immunity from recurrence. Regular professional cleanings every 3–4 months and excellent home care are essential after surgery." },
    { q: "Is laser gum surgery better than traditional surgery?", a: "Laser gum therapy offers less bleeding, less discomfort, and faster healing for suitable cases. Your periodontist will advise whether laser treatment is appropriate for you." },
    { q: "What happens if gum disease is left untreated?", a: "Untreated advanced gum disease leads to progressive bone loss, loosening of teeth, and ultimately tooth loss. Systemic links to heart disease and diabetes are also well-documented." },
  ],
};

const GumSurgeryPage = () => <TreatmentPage treatment={data} />;
export default GumSurgeryPage;