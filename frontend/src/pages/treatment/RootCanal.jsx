import React from 'react';
import TreatmentPage from '../../components/TreatmentPage';

const data = {
  name: "Root Canal Treatment",
  heroImage: "https://images.unsplash.com/photo-1590625946399-caed8de91ccb?w=1200&q=85",
  tagline: "Save your natural tooth and relieve pain with a safe, effective root canal procedure performed by expert endodontists.",
  stats: [
    { value: "95%", label: "Success Rate" },
    { value: "1-2", label: "Sittings" },
    { value: "700+", label: "Clinics" },
    { value: "0", label: "Tooth Loss" },
  ],
  overview:
    "Root Canal Treatment (RCT) is a dental procedure that removes infected or damaged pulp from inside the tooth, cleans and disinfects the root canals, and seals them to prevent re-infection. It is the most effective way to save a tooth that would otherwise need to be extracted. At Clove Dental, our endodontists use advanced rotary instruments and digital X-rays to ensure a comfortable, precise experience.",
  whyClove: [
    "Expert endodontists with advanced training in painless RCT",
    "State-of-the-art rotary endodontics for faster, accurate treatment",
    "Digital X-rays for precise diagnosis with minimal radiation",
    "4-step sterilization protocol for complete patient safety",
    "Affordable, transparent pricing with no hidden costs",
  ],
  symptoms: [
    "Severe, persistent toothache that doesn't go away",
    "Prolonged sensitivity to hot or cold temperatures",
    "Darkening or discolouration of the tooth",
    "Swelling or tenderness in nearby gums",
    "A persistent pimple-like bump on the gums",
    "Pain while chewing or biting",
  ],
  steps: [
    { title: "Diagnosis & X-Ray", desc: "The dentist examines the tooth and takes digital X-rays to determine the extent of infection and the shape of the root canals." },
    { title: "Local Anaesthesia", desc: "The area around the tooth is numbed with local anaesthesia to ensure you feel no pain throughout the procedure." },
    { title: "Pulp Removal", desc: "A small opening is made in the tooth crown, and the infected or dead pulp tissue is carefully removed using precise instruments." },
    { title: "Canal Cleaning & Shaping", desc: "The root canals are thoroughly cleaned, disinfected, and shaped using rotary files to prepare them for filling." },
    { title: "Filling & Sealing", desc: "The canals are filled with a biocompatible material called gutta-percha and sealed to prevent future infection." },
    { title: "Crown Placement", desc: "A dental crown is placed over the treated tooth to restore its strength, function, and natural appearance." },
  ],
  faqs: [
    { q: "Is root canal treatment painful?", a: "Modern RCT is virtually painless thanks to effective local anaesthesia and advanced techniques. Most patients report it is no more uncomfortable than getting a filling." },
    { q: "How many sittings does RCT take?", a: "Most root canal treatments at Clove Dental are completed in 1–2 sittings, depending on the severity of infection and the number of canals involved." },
    { q: "How long does a root canal treated tooth last?", a: "With proper care and a good quality crown, a root canal treated tooth can last a lifetime. Regular dental check-ups are recommended." },
    { q: "What is the cost of root canal treatment?", a: "The cost varies based on the tooth type (front, premolar, or molar) and severity of infection. Clove Dental offers transparent pricing — please visit your nearest clinic for an exact quote." },
    { q: "Can I eat normally after RCT?", a: "You should avoid chewing on the treated side until the permanent crown is placed. After crown placement, you can eat normally." },
  ],
};

const RootCanalPage = () => <TreatmentPage treatment={data} />;
export default RootCanalPage;