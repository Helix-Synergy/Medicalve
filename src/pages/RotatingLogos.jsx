import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkle } from "lucide-react";

// import addiction_medicine from '../assets/tracks/addiction_medicine-copy.jpg'

import addiction_medicine from '../assets/tracks/addiction_medicine-copy.jpg'
import ai_healthcare from '../assets/tracks/ai_healthcare1.jpg'
import cardiology from '../assets/tracks/cardiology.jpg'
import mental_health from '../assets/tracks/mental-health.jpg'
import emergency_medicine from '../assets/tracks/emergency_medicine.jpg'
import endocrinology from '../assets/tracks/endocrinology.jpg'
import gastrology from '../assets/tracks/Gastroenterology.jpg'
import genetic_disorder from '../assets/tracks/genetic-disorders.jpg'
import geriatrics from '../assets/tracks/geriatrics.jpg'
import gynecology from '../assets/tracks/Gynecology.jpg'
import infectious_diseases from '../assets/tracks/Infectious-Diseases.jpg'
import nutrition_metabolism from '../assets/tracks/nutrition_metabolism.jpg'
import oncology from '../assets/tracks/oncology.jpg'
import pain_management from '../assets/tracks/pain_management.jpg'
import pediatrics from '../assets/tracks/pediatrics.jpg'
import public_health from '../assets/tracks/public_health.jpg'
import rheumatology from '../assets/tracks/rheumatology.jpg'
import telemedicine from '../assets/tracks/telemedicine_health.jpg'
import vaccine from '../assets/tracks/vaccines.jpg'
import womens_health from '../assets/tracks/womens_health.jpg'

const VISIBLE_ICONS = 5;
const CONTAINER_HEIGHT = 500;
const ICON_HEIGHT = CONTAINER_HEIGHT / VISIBLE_ICONS;
const PAUSE_DURATION = 4000;
const SCROLL_DELAY = 500;

const tracks = [
  {
    image: gynecology,
    title: "Gynecology",
    subtitle: "Advancements in Women's Reproductive Health",
    description:
      "Explore breakthroughs in Women's Health, Reproductive Medicine, and Minimally Invasive Surgery. Gain insights into Fertility Solutions, Gynecologic Oncology, Hormonal Therapies, and Robotic Techniques that enhance patient outcomes and advance Precision Medicine and Innovative Diagnostics in female healthcare, addressing policy challenges and aging-related reproductive health."
  },
  {
    image: pediatrics,
    title: "Pediatrics",
    subtitle: "Innovative Solutions in Child Health",
    description:
      "Focus on Child Development, Pediatric Oncology, Neonatal Care, and Immunization Strategies. Discover innovations in Chronic Disease Management, Pediatric Surgery, and Preventive Pediatrics. Learn about emerging Therapeutic Models and cutting-edge Pediatric Medicine aimed at improving outcomes for children from prenatal stages through adolescence."
  },
  {
    image: emergency_medicine,
    title: "Emergency Medicine",
    subtitle: "Delivering Critical Care in Acute Situations",
    description:
      "Address innovations in Trauma Care, Emergency Diagnostics, and Acute Intervention Protocols. Explore advancements in Triage Systems, AI-Driven Tools, Life-Saving Treatments, and Emergency Procedures. Learn how Technology enhances Acute Care delivery, improving survival rates and patient safety in high-pressure clinical environments."
  },
  {
    image: genetic_disorder,
    title: "Genetic Disorders",
    subtitle: "Revolutionizing the Future of Genetic Medicine",
    description:
      "Explore Genetic Testing, Gene Therapies, and CRISPR Technologies revolutionizing medicine. Focus on Rare Disease Diagnosis, Genomic Precision Medicine, and Ethical Issues in Genetic Modification. Learn how Innovative Diagnostics and Personalized Treatments transform outcomes in hereditary and complex Genetic Disorders."
  },
  {
    image: mental_health,
    title: "Mental Health",
    subtitle: "Innovative Approaches to Behavioral Healthcare",
    description:
      "Discover emerging Therapeutic Models for psychiatric disorders such as Depression, Anxiety, and Schizophrenia. Learn about Digital Mental Health Solutions, Behavioral Therapies, and strategies to reduce Mental Health Stigma. Explore Innovative Diagnostics and treatments that improve patient outcomes and promote psychological well-being."
  },
  {
    image: telemedicine,
    title: "Telemedicine & Digital Health",
    subtitle: "The Future of Healthcare Delivery",
    description:
      "Explore Telehealth Platforms, Wearable Health Technology, AI-Driven Diagnostics, and Mobile Health Apps. Understand Regulatory Frameworks, Reimbursement Strategies, and innovations in Digital Health that enhance Patient Access and transform Healthcare Delivery in an increasingly connected and technology-driven world."
  },
  {
  image: public_health,
  title: "Cosmetic Surgery",
  subtitle: "Advancing Aesthetics with Modern Medical Innovation",
  description:
    "Explore the field of Cosmetic Surgery, where science and artistry converge to enhance appearance and boost confidence. Learn about Minimally Invasive Procedures, Reconstructive Techniques, and Innovations in Aesthetic Medicine. Understand patient-centered approaches, safety standards, and the role of technology in shaping the future of personalized cosmetic treatments.",
  },

  {
    image: infectious_diseases,
    title: "Infectious Diseases",
    subtitle: "Tackling Emerging Pathogens and Global Pandemics",
    description:
      "Stay updated on Infectious Disease Prevention, Novel Vaccines, Antiviral Therapies, and Diagnostic Innovations. Explore Surveillance Strategies and Global Responses to Pandemics such as COVID-19 and Ebola, with emphasis on Public Health Preparedness and cutting-edge research in Emerging Pathogens."
  },
  {
    image: nutrition_metabolism,
    title: "Nutrition and Metabolism",
    subtitle: "Exploring the Link Between Diet, Health, and Disease",
    description:
      "Examine the role of Nutrition in Metabolism, Gut Microbiota, and Chronic Disease Management. Discover Personalized Nutrition, Emerging Metabolic Treatments, and Nutritional Therapies that impact health outcomes and disease prevention through innovative, evidence-based dietary strategies."
  },
  {
    image: rheumatology,
    title: "Rheumatology",
    subtitle: "Advances in the Treatment of Autoimmune and Inflammatory Diseases",
    description:
      "Learn about Biologics, Gene Therapies, and Diagnostic Innovations in Autoimmune and Inflammatory Disease Management. Focus on Chronic Pain Control, Quality of Life Improvement, and cutting-edge Rheumatology treatments that address complex patient needs with advanced Therapeutic Solutions."
  },
  {
    image: womens_health,
    title: "Women's Health & Midwifery",
    subtitle: "Comprehensive Approaches to Women's Well-being",
    description:
      "Discuss advances in Maternal Health, Obstetric Care, Midwifery, and Postnatal Support. Explore Sexual Health, Osteoporosis Treatments, Hormonal Therapies, and Integrative Approaches that improve Women's Health Outcomes using Precision Medicine and Patient-Centered Care frameworks."
  },
  {
    image: oncology,
    title: "Cancer",
    subtitle: "Innovative Therapies and Early Detection in Oncology",
    description:
      "Explore Immunotherapy, Precision Medicine, and Targeted Cancer Treatments. Learn about Early Detection Technologies, Personalized Oncology, and breakthrough Research enhancing patient survival. Discuss innovations in Cancer Care, including Biomarkers and Novel Therapeutics shaping the future of Oncology."
  },
  {
    image: addiction_medicine,
    title: "Addiction Medicine",
    subtitle: "Addressing Substance Use Disorders and Recovery",
    description:
      "Discuss advances in Pharmacotherapy, Behavioral Therapies, and Integrative Care for Substance Use Disorders. Focus on Opioid Crisis Solutions, Alcohol Dependency Treatments, and Behavioral Addiction Management using Evidence-Based Practices and Innovative Recovery Strategies in Addiction Medicine."
  },
  {
    image: telemedicine,
    title: "Remote Healthcare",
    subtitle: "Improving Access to Care in Rural and Underserved Communities",
    description:
      "Highlight Teleconsultations, Remote Diagnostics, and Mobile Health Units improving care access. Discuss Technology-driven Healthcare Delivery, Digital Health Equity, and strategies addressing Rural and Underserved Population needs through innovative Telemedicine Solutions and Health Informatics."
  },
  {
    image: pain_management,
    title: "Pain Management",
    subtitle: "Innovative Treatments for Acute and Chronic Pain",
    description:
      "Delve into Pharmacological Treatments, Interventional Techniques, and Holistic Therapies for Pain Control. Focus on Post-Operative, Cancer-Related, and Chronic Pain Management using Advanced Therapeutics, Multimodal Approaches, and Patient-Centered Care Models to improve Quality of Life."
  },
  {
    image: vaccine,
    title: "Vaccines",
    subtitle: "The Role of Immunization in Public Health",
    description:
      "Explore new Vaccine Technologies including mRNA and Universal Vaccines. Discuss Vaccine Accessibility, Hesitancy Reduction, and Immunization Strategies that bolster Public Health Preparedness and pandemic prevention using innovative research and Global Health Initiatives."
  },
  {
    image: emergency_medicine,
    title: "AI in Healthcare",
    subtitle: "Transforming Healthcare with Artificial Intelligence",
    description:
      "Examine AI applications in Radiology, Drug Discovery, and Predictive Analytics. Learn about Virtual Health Assistants, Robotic Surgery, and AI-Driven Diagnostics transforming Healthcare Delivery, enhancing accuracy, efficiency, and patient outcomes across medical disciplines."
  },
  {
    image: genetic_disorder,
    title: "Cardiovascular Diseases",
    subtitle: "Addressing the Global Burden of Heart Disease",
    description:
      "Focus on AI-Powered Risk Prediction, Precision Cardiology, and Innovative Treatments. Discuss advances in Cardiovascular Disease Prevention, Diagnosis, and Management aiming to reduce morbidity and mortality globally using cutting-edge technologies and personalized medicine."
  }
];


const ScrollingTracks = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [pausedTrack, setPausedTrack] = useState(tracks[0]);

  
  const scrollRef = useRef(null);

  const loopedTracks = [...tracks, ...tracks];
  const originalLength = tracks.length;
  const middleOffset = originalLength;

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTop = middleOffset * ICON_HEIGHT;
    }
  }, []);

    useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScroll = ICON_HEIGHT * originalLength * 2;
      if (container.scrollTop <= ICON_HEIGHT) {
        container.scrollTop += originalLength * ICON_HEIGHT;
      } else if (container.scrollTop >= maxScroll) {
        container.scrollTop -= originalLength * ICON_HEIGHT;
      }

      const newIndex =
        Math.round(container.scrollTop / ICON_HEIGHT) % originalLength;
      setIndex(newIndex);
      setPausedTrack(tracks[newIndex]);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [tracks]);

  useEffect(() => {
    if (isHovered) return; // skip if hovering

    const scrollTimeout = setTimeout(() => {
      const nextIndex = (index + 1) % tracks.length;
      setIndex(nextIndex);
      setPausedTrack(tracks[nextIndex]);
    }, SCROLL_DELAY + PAUSE_DURATION);

    return () => clearTimeout(scrollTimeout);
  }, [index, isHovered]);

  useEffect(() => {
    if (isHovered) return; // <-- Add this line

    const scrollTimeout = setTimeout(() => {
      const nextIndex = (index + 1) % tracks.length;
      setIndex(nextIndex);
      setPausedTrack(tracks[nextIndex]);
    }, SCROLL_DELAY + PAUSE_DURATION);

    return () => clearTimeout(scrollTimeout);
  }, [index, isHovered]); // <-- Also include isHovered in deps

  const scrollToIndex = (targetIndex) => {
    setIndex(targetIndex);
    setPausedTrack(tracks[targetIndex]);

    const container = scrollRef.current;
    if (container) {
      container.scrollTo({
        top: (middleOffset + targetIndex - 2) * ICON_HEIGHT,
        behavior: "smooth",
      });
    }
  };
  
  return (
   <>
      <style>
        {`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px #2cafad;
          }
          50% {
            box-shadow: 0 0 18px 6px #2cafad;
          }
        }
 
        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }
 
        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}
      </style>

      <div className="relative mt-14">
        {/* Fixed Top-Right Button (No Icon) */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollingTracks;
