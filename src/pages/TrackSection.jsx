// import React, { useEffect, useState, useRef } from 'react';
// // import { trackImages } from '../assets';
// import { banner_style } from '../assets/styles';
// import { useAnimation, motion } from 'framer-motion';

// import addiction_medicine from '../assets/tracks/addiction_medicine'
// import ai_healthcare from '../assets/tracks/ai_healthcare1.jpg'
// import cardiology from '../assets/tracks/cardiology.jpg'
// import emergency_medicine from '../assets/tracks/emergency_medicine.jpg'
// import endocrinology from '../assets/tracks/endocrinology.jpg'
// import gastrology from '../assets/tracks/Gastroenterology.jpg'
// import genetic_disorder from '../assets/tracks/genetic_disorders.jpg'
// import geriatrics from '../assets/tracks/geriatrics.jpg'
// import gynecology from '../assets/tracks/Gynecology.jpg'
// import infectious_diseases from '../assets/tracks/Infectious_Diseases.jpg'
// import mental_health from '../assets/tracks/mental_health.jpg'
// import nutrition_metabolism from '../assets/tracks/nutrition_metabolism.jpg'
// import oncology from '../assets/tracks/oncology.jpg'
// import pain_management from '../assets/tracks/pain_management.jpg'
// import pediatrics from '../assets/tracks/pediatrics.jpg'
// import public_health from '../assets/tracks/public_health.jpg'
// import rheumatology from '../assets/tracks/rheumatology.jpg'
// import telemedicine from '../assets/tracks/telemedicine_health.jpg'
// import vaccine from '../assets/tracks/vaccines.jpg'
// import womens_health from '../assets/tracks/womens_health.jpg'



// const tracks = [
//   {
//     image: gynecology,
//     title: "Gynecology",
//     subtitle: "Advancements in Women's Reproductive Health",
//     description:
//       "This track will focus on the latest breakthroughs in gynecological care, addressing critical issues such as reproductive health, infertility treatments, menstrual disorders, and gynecologic cancers. With a growing emphasis on minimally invasive surgeries and robotic techniques, this session will explore how innovations in diagnostics and treatments are transforming patient outcomes. Experts will also discuss challenges in reproductive health policy and the intersection of gynecology and aging."
//   },
//   {
//     image: pediatrics,
//     title: "Pediatrics",
//     subtitle: "Innovative Solutions in Child Health",
//     description:
//       "Pediatrics covers the full spectrum of child health, from prenatal care through adolescence. This track will highlight cutting-edge research on child development, pediatric diseases, and pediatric surgery. Topics will include advancements in pediatric oncology, neonatal care, immunization strategies, and chronic disease management in children."
//   },
//   {
//     image: emergency_medicine,
//     title: "Emergency Medicine",
//     subtitle: "Delivering Critical Care in Acute Situations",
//     description:
//       "Emergency medicine remains at the forefront of healthcare innovation, with a focus on triage, trauma management, and acute care interventions. This track will discuss advancements in emergency procedures, the role of technology in diagnostics, and new treatment protocols for life-threatening injuries and conditions."
//   },
//   {
//     image: genetic_disorder,
//     title: "Genetic Disorders",
//     subtitle: "Revolutionizing the Future of Genetic Medicine",
//     description:
//       "This session will focus on the latest developments in genetic testing, gene therapies, and CRISPR technology. Key discussions will include breakthroughs in diagnosing rare genetic disorders, the role of genomics in precision medicine, and ethical considerations in genetic modification and testing."
//   },
//   {
//     image: mental_health,
//     title: "Mental Health",
//     subtitle: "Innovative Approaches to Behavioral Healthcare",
//     description:
//       "This track will explore topics such as emerging therapeutic models, psychiatric disorders, and mental health stigma. Attendees will hear about novel treatments for depression, anxiety, and schizophrenia, as well as advances in digital mental health solutions."
//   },
//   {
//     image: telemedicine,
//     title: "Telemedicine & Digital Health",
//     subtitle: "The Future of Healthcare Delivery",
//     description:
//       "This session will explore the intersection of technology and patient care, with discussions on telehealth platforms, wearable health technology, AI-driven diagnostics, and mobile health apps. Attendees will gain insights into the regulatory landscape, reimbursement strategies, and the future of telemedicine in an increasingly digital world."
//   },
//   {
//     image: public_health,
//     title: "Public Health",
//     subtitle: "Global Health Strategies for the 21st Century",
//     description:
//       "Public health is the foundation of disease prevention and health promotion. This track will cover emerging trends in global health, addressing the social determinants of health, healthcare systems strengthening, and the fight against global pandemics."
//   },
//   {
//     image: infectious_diseases,  
//     title: "Infectious Diseases",
//     subtitle: "Tackling Emerging Pathogens and Global Pandemics",
//     description:
//       "This session will provide updates on the latest research in infectious disease prevention, diagnostics, and treatment. Experts will address the development of novel vaccines, antiviral drugs, and surveillance strategies, as well as the global response to pandemics such as COVID-19, Ebola, and others."
//   },
//   {
//     image: nutrition_metabolism,
//     title: "Nutrition and Metabolism",
//     subtitle: "Exploring the Link Between Diet, Health, and Disease",
//     description:
//       "This track will explore cutting-edge research on the role of nutrition in metabolism, as well as emerging treatments for metabolic disorders. Topics will include personalized nutrition, gut microbiota, and the impact of diet on chronic conditions."
//   },
//   {
//     image: rheumatology,
//     title: "Rheumatology",
//     subtitle: "Advances in the Treatment of Autoimmune and Inflammatory Diseases",
//     description:
//       "This session will highlight new treatment options, including biologics and gene therapy, as well as innovations in diagnostic tools. Experts will discuss the challenges of managing chronic pain and improving quality of life for patients with complex rheumatological conditions."
//   },
//   {
//     image: womens_health,
//     title: "Women's Health & Midwifery",
//     subtitle: "Comprehensive Approaches to Women's Well-being",
//     description:
//       "This track will discuss the latest advances in maternal health, including obstetric care, midwifery, and postnatal care. Attendees will also explore topics such as sexual health, osteoporosis, and hormonal treatments."
//   },
//   {
//     image: oncology,
//     title: "Cancer",
//     subtitle: "Innovative Therapies and Early Detection in Oncology",
//     description:
//       "This session will explore the latest advancements in cancer treatment, including immunotherapy, precision medicine, and targeted therapies. Experts will also discuss breakthroughs in early detection technologies and personalized cancer treatments."
//   },
//   {
//     image: addiction_medicine,
//     title: "Addiction Medicine",
//     subtitle: "Addressing Substance Use Disorders and Recovery",
//     description:
//       "This track will discuss the science behind addiction, advances in pharmacotherapy, behavioral therapies, and integrative care strategies for supporting recovery. Special focus will be on addressing the opioid crisis, alcohol dependency, and behavioral addictions."
//   },
//   {
//     image: telemedicine,
//     title: "Remote Healthcare",
//     subtitle: "Improving Access to Care in Rural and Underserved Communities",
//     description:
//       "This session will discuss technological advancements, such as teleconsultations, remote diagnostics, and mobile health units, that are improving healthcare delivery in underserved communities."
//   },
//   {
//     image: pain_management,
//     title: "Pain Management",
//     subtitle: "Innovative Treatments for Acute and Chronic Pain",
//     description:
//       "This session will delve into the latest advancements in pain management, including pharmacological treatments, interventional techniques, and holistic therapies. Focus will also be placed on post-operative and cancer-related pain."
//   },
//   {
//     image: vaccine,
//     title: "Vaccines",
//     subtitle: "The Role of Immunization in Public Health",
//     description:
//       "This track will explore new vaccine technologies, including mRNA and universal vaccines. Experts will discuss strategies for increasing vaccine accessibility, addressing vaccine hesitancy, and preparing for future pandemics."
//   },
//   {
//     image: emergency_medicine,
//     title: "AI in Healthcare",
//     subtitle: "Transforming Healthcare with Artificial Intelligence",
//     description:
//       "From machine learning in radiology to AI-driven drug discovery, AI is streamlining diagnostics, treatment, and care. This session will explore predictive analytics, virtual health assistants, and robotic surgery powered by AI."
//   },
//   {
//     image: genetic_disorder,
//     title: "Cardiovascular Diseases",
//     subtitle: "Addressing the Global Burden of Heart Disease",
//     description:
//       "This track focuses on the latest advancements in the prevention, diagnosis, and treatment of cardiovascular diseases, including the role of AI in predicting risk and improving cardiovascular outcomes."
//   },
//     {
//     image: ai_healthcare,
//     title: "AI in Medical Diagnostics",
//     subtitle: "Revolutionizing Clinical Decision Making",
//     description:
//       "Explore the groundbreaking role of artificial intelligence in diagnostics, including machine learning for imaging, predictive analytics for early disease detection, and AI-assisted decision support systems that enhance diagnostic accuracy."
//   },
//   {
//     image: cardiology,
//     title: "Cardiology",
//     subtitle: "Next-Generation Approaches to Heart Health",
//     description:
//       "This track covers cutting-edge advancements in cardiovascular care, including minimally invasive procedures, wearable heart monitoring devices, and the integration of AI for real-time risk assessment and treatment planning."
//   },
//   {
//     image: endocrinology,
//     title: "Endocrinology",
//     subtitle: "Emerging Therapies for Hormonal Disorders",
//     description:
//       "Dive into the latest research and treatment protocols in endocrinology, including innovations in managing diabetes, thyroid dysfunction, adrenal disorders, and hormone replacement therapies. The session will also explore precision medicine approaches."
//   },
//   {
//     image: gastrology,
//     title: "Gastroenterology",
//     subtitle: "Innovations in Digestive Health",
//     description:
//       "This session will highlight new diagnostic tools and treatments for gastrointestinal disorders such as IBS, Crohn’s disease, and liver diseases. Discover how gut microbiome research and endoscopic advancements are shaping modern gastroenterology."
//   },
//   {
//     image: geriatrics,
//     title: "Geriatrics",
//     subtitle: "Aging with Dignity and Advanced Care",
//     description:
//       "Focused on elderly healthcare, this track addresses age-related diseases, palliative care, geriatric syndromes, and innovations in elder-friendly care models to enhance quality of life for aging populations."
//   }
// ];

// const TrackCard = ({ title, subtitle, description, image, reverse }) => {
//   const imageControls = useAnimation();
//   const textControls = useAnimation();

//   const cardRef = useRef(null);
//   const [isImagePaused, setIsImagePaused] = useState(false);
//   const [isTextPaused, setIsTextPaused] = useState(false);

//   // Animate image
//   useEffect(() => {
//     if (isImagePaused) {
//       imageControls.stop();
//     } else {
//       imageControls.start({
//         y: [0, -10, 0],
//         transition: { duration: 4, repeat: Infinity }
//       });
//     }
//   }, [isImagePaused]);

//   // Animate text
//   useEffect(() => {
//     if (isTextPaused) {
//       textControls.stop();
//     } else {
//       textControls.start({
//         y: [0, -10, 0],
//         transition: { duration: 4, repeat: Infinity }
//       });
//     }
//   }, [isTextPaused]);

//   // Click to scroll card into center
//   const handleCardClick = () => {
//     cardRef.current?.scrollIntoView({
//       behavior: 'smooth',
//       block: 'center'
//     });
//   };

//   return (
//     <div
//       ref={cardRef}
//       className={`flex flex-col md:flex-row ${
//         reverse ? 'md:flex-row-reverse' : ''
//       } items-center gap-8 mb-12 cursor-pointer`}
//       onClick={handleCardClick}
//     >
//       {/* Image Container */}
//       <motion.div
//         className="w-full md:w-1/2 cursor-pointer"
//         animate={imageControls}
//         onMouseEnter={() => setIsImagePaused(true)}
//         onMouseLeave={() => setIsImagePaused(false)}
//       >
//         <img
//           src={image}
//           alt={title}
//           loading="lazy"
//           className="w-full h-72 object-cover rounded shadow-md cursor-pointer"
//         />
//       </motion.div>

//       {/* Text Container */}
//       <motion.div
//         className="w-full md:w-1/2"
//         animate={textControls}
//         onMouseEnter={() => setIsTextPaused(true)}
//         onMouseLeave={() => setIsTextPaused(false)}
//       >
//         <h2 className="text-3xl md:text-5xl font-bold text-one mb-2">
//           {title}
//         </h2>
//         <h3 className="text-lg font-semibold text-gray-600 mb-2">
//           {subtitle}
//         </h3>
//         <p className="text-gray-700 text-lg leading-relaxed">
//           {description}
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// const TracksSection = () => {
//   return (
//     <section className="container max-w-7xl mx-auto">
//        <div className={`${banner_style} banner`}>
//         <div className="absolute inset-0 bg-slate-950 bg-opacity-50 z-0 max-w-7xl h-[72.5vh] md:h-[74.5vh] lg:h-[74.5vh]"></div>
//                 <h1 className="text-slate-50 rounded-xl p-2 text-3xl sm:text-5xl md:text-6xl font-bold px-4 z-10">
//           Conference Tracks
//         </h1>
//       </div>
//       <div className="flex flex-col gap-8">
//         {tracks.map((track, index) => (
//           <TrackCard key={index} {...track} reverse={index % 2 !== 0} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TracksSection;