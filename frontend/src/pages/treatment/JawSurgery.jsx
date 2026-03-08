import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';

const data = {
  name: "Jaw Surgery",
  heroImage: "https://images.unsplash.com/photo-1598256989470-348630327f12?w=1200&q=80",
  beforeImage: "https://images.unsplash.com/photo-1598256989470-348630327f12?w=900&q=80",
  afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80",
  tagline: "Correct jaw alignment, bite problems, and facial imbalance with expert orthognathic surgery for lasting functional and aesthetic results.",
  stats: [
    { value: "Expert", label: "Oral Surgeons" },
    { value: "Precise", label: "3D Planning" },
    { value: "Lasting", label: "Results" },
    { value: "Team", label: "Approach" },
  ],
  overview:
    "Jaw surgery (orthognathic surgery) corrects irregularities of the jaw bones to improve the way the jaws and teeth fit together. It is recommended for patients with severe bite problems (malocclusion), facial asymmetry, obstructive sleep apnoea, or jaw joints issues that cannot be corrected with orthodontics alone. At Clove Dental, jaw surgery is carefully planned using 3D imaging and conducted in partnership with orthodontic treatment for comprehensive, lasting results.",
  whyClove: [
    "Experienced oral and maxillofacial surgeons",
    "Advanced 3D CBCT planning for precise surgical outcomes",
    "Coordinated orthodontic and surgical treatment planning",
    "Close post-operative monitoring for safe, smooth recovery",
    "Referral network for hospitalisation and anaesthesia when required",
  ],
  symptoms: [
    "Severe overbite, underbite, or crossbite not correctable with braces alone",
    "Difficulty chewing, biting, or swallowing",
    "Chronic jaw pain or TMJ (temporomandibular joint) problems",
    "Facial asymmetry affecting appearance and function",
    "Obstructive sleep apnoea related to jaw position",
    "Open bite with inability to bring front teeth together",
  ],
  steps: [
    { title: "Comprehensive Evaluation", desc: "A thorough clinical and radiographic assessment including 3D CBCT scans, dental models, and photographs is conducted to diagnose the jaw discrepancy." },
    { title: "Pre-Surgical Orthodontics", desc: "Braces are placed 12–18 months before surgery to align the teeth within each jaw so they will fit together correctly after surgical repositioning." },
    { title: "Surgical Planning", desc: "Using 3D imaging software, the oral surgeon precisely plans the repositioning of the jaw bones for optimal functional and aesthetic outcomes." },
    { title: "Orthognathic Surgery", desc: "Surgery is performed under general anaesthesia. The jaw bones are carefully cut, moved into the planned position, and secured with titanium plates and screws." },
    { title: "Hospital Recovery", desc: "A short hospital stay allows initial recovery. Swelling and limited jaw movement are expected for several weeks." },
    { title: "Post-Surgical Orthodontics", desc: "After healing (typically 6–8 weeks), braces fine-tune the bite to achieve the final, precise alignment before treatment is completed with retainers." },
  ],
  faqs: [
    { q: "How long does jaw surgery take?", a: "The surgical procedure itself typically takes 2–4 hours depending on complexity. It is performed under general anaesthesia in a hospital setting." },
    { q: "How long is the recovery period?", a: "Initial recovery takes 2–4 weeks, during which a soft or liquid diet is required. Full bone healing and final swelling resolution takes 3–6 months." },
    { q: "Is jaw surgery done for cosmetic reasons only?", a: "Jaw surgery is primarily functional — it corrects bite problems, breathing issues, and jaw pain. Aesthetic improvement is often a welcome additional benefit." },
    { q: "Is the surgery painful?", a: "The procedure is done under general anaesthesia. Post-operative discomfort, swelling, and jaw stiffness are managed with prescribed medications and typically improve significantly within the first two weeks." },
    { q: "What is the typical age for jaw surgery?", a: "Jaw surgery is usually performed in late teens or early adulthood (after jaw growth is complete — typically 17–21 years). It can also be performed in adults of any age." },
  ],
};

const JawSurgeryPage = () => <TreatmentPage treatment={data} />;
export default JawSurgeryPage;