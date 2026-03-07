import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';

const data = {
  name: "Bone Grafting",
  tagline: "Rebuild lost jawbone with safe, proven bone grafting procedures that prepare your jaw for implants and restore facial structure.",
  stats: [
    { value: "High", label: "Success Rate" },
    { value: "Natural", label: "Bone Regrowth" },
    { value: "Implant", label: "Ready Result" },
    { value: "Expert", label: "Surgeons" },
  ],
  overview:
    "Dental bone grafting is a surgical procedure that replaces missing or resorbed jawbone with graft material to stimulate new bone growth. It is most commonly performed to build up the jawbone before dental implant placement, or after tooth extraction to preserve the ridge. At Clove Dental, bone grafting uses high-quality, safe graft materials — including synthetic bone substitutes and processed donor bone — to achieve predictable, long-lasting results.",
  whyClove: [
    "Experienced implantologists and oral surgeons performing bone grafts",
    "High-quality synthetic and allograft bone materials",
    "3D CBCT imaging for precise graft volume planning",
    "Seamless integration with dental implant treatment",
    "Comprehensive post-operative care and healing support",
  ],
  symptoms: [
    "Insufficient bone volume for dental implant placement",
    "Bone loss following tooth extraction",
    "Jawbone resorption due to long-term denture wear",
    "Bone loss from advanced periodontal (gum) disease",
    "Traumatic injury resulting in bone defects",
    "Need to preserve the socket after tooth removal",
  ],
  steps: [
    { title: "Evaluation & Imaging", desc: "A 3D CBCT scan precisely measures bone volume and density, identifying the exact area and amount of bone needed." },
    { title: "Graft Material Selection", desc: "The most appropriate graft material is selected — autograft (your own bone), allograft (donor), xenograft (bovine), or synthetic — based on your specific needs." },
    { title: "Local Anaesthesia", desc: "The surgical site is thoroughly numbed. Sedation options are available for anxious patients." },
    { title: "Graft Placement", desc: "The graft material is placed in the deficient bone area. A protective membrane is often placed over the graft to guide and protect new bone growth." },
    { title: "Suturing", desc: "The gum tissue is closed over the graft site with sutures to protect it and promote undisturbed healing." },
    { title: "Healing & Integration", desc: "Over 3–6 months, new bone cells grow into the graft material, gradually replacing it with your own solid bone, ready for implant placement." },
  ],
  faqs: [
    { q: "Is bone grafting painful?", a: "The procedure is performed under local anaesthesia and is not painful. Some swelling and discomfort for a few days after is normal and managed with prescribed medication." },
    { q: "How long does bone graft healing take?", a: "New bone integration typically takes 3–6 months, after which implant placement can proceed. Minor grafts for socket preservation heal faster, in 2–3 months." },
    { q: "Is the graft material safe?", a: "Yes. All graft materials used at Clove Dental — synthetic, allograft, or xenograft — are clinically tested, FDA/CE certified, and completely safe." },
    { q: "Can bone grafting always make me eligible for implants?", a: "In most cases, yes. However, some patients with very severe bone loss may require more extensive procedures. Your implantologist will determine the best approach after evaluation." },
    { q: "What is socket preservation and why is it done?", a: "Socket preservation is a bone graft placed immediately after tooth extraction to prevent the bone from collapsing. It maintains bone volume for easier, more predictable implant placement later." },
  ],
};

const BoneGraftingPage = () => <TreatmentPage treatment={data} />;
export default BoneGraftingPage;