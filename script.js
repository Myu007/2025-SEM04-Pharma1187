const questions = [
  {
    question: "Which route of drug administration is most likely to lead to the first-pass effect?",
    answers: [
      { text: "Sublingual", correct: false },
      { text: "Oral", correct: true },
      { text: "Intravenous", correct: false },
      { text: "Intramascular", correct: false },
      { text: "Subcutaneous", correct: false },
    ],
  },
  {
    question: "Rectal suppositories intended for adult use usually weigh approximately",
    answers: [
      { text: "1 g", correct: false },
      { text: "2 g", correct: true },
      { text: "3 g", correct: false },
      { text: "4 g", correct: false },
      { text: "5 g", correct: false },
    ],
  },
  {
    question: "The route of drug administration that gives the most rapid onset of the phar- macological effect is",
    answers: [
      { text: "Intramuscular injection", correct: false },
      { text: "Intravenouse injection", correct: true },
      { text: "Intradermal injection", correct: false },
      { text: "Peroral administration", correct: false },
      { text: "Subcutaneous injection", correct: false },
    ],
  },
  {
    question: "After peroral administration, drugs generally are absorbed best from the",
    answers: [
      { text: "Buccal cavity", correct: false },
      { text: "Stomach", correct: false },
      { text: "Duodenum", correct: true },
      { text: "Ileum", correct: false },
      { text: "Rectum", correct: false },
    ],
  },
  {
    question: "Volatile drug may be best administered by:",
    answers: [
      { text: "Oral route", correct: false },
      { text: "Inhalation", correct: true },
      { text: "Sublingual route", correct: false },
      { text: "Intrathecal route", correct: false },
      { text: "Rectal route", correct: false },
    ],
  },
  {
    question: "Which of the following routes have the highest bioavailability?",
    answers: [
      { text: "Oral", correct: false },
      { text: "I/M", correct: false },
      { text: "I/V", correct: true },
      { text: "S/C", correct: false },
      { text: "Buccal", correct: false },
    ],
  },
  {
    question: "Which of the following are parenteral methods of administration (the others being enteral)?",
    answers: [
      { text: "Oral", correct: false },
      { text: "Rectal", correct: false },
      { text: "Sublingual", correct: false },
      { text: "Buccal", correct: false },
      { text: "Intravenous", correct: true },
    ],
  },
  {
    question: "Vanishing cream is an ointment that may be classified as",
    answers: [
      { text: "A water –soluble base", correct: false },
      { text: "An oleaginous base", correct: false },
      { text: "An absorption base", correct: false },
      { text: "An emulsion base", correct: true },
      { text: "An oleic base", correct: false },
    ],
  },
  {
    question: "Specify the enteral route of administration of drugs.",
    answers: [
      { text: "intramuscular", correct: false },
      { text: "subcutaneous", correct: false },
      { text: "inhalation", correct: false },
      { text: "oral", correct: true },
      { text: "subarachnoid", correct: false },
    ],
  },
  {
    question: "Indicate the parenteral route of administration of drugs:",
    answers: [
      { text: "sublingual", correct: false },
      { text: "rectal", correct: false },
      { text: "Oral", correct: false },
      { text: "duodenal", correct: false },
      { text: "subarachnoid", correct: true },
    ],
  },
  {
    question: "Which is the advantage of sublingual route of administration of drugs?",
    answers: [
      { text: "Prevents first pass effect", correct: true },
      { text: "Easy to administer", correct: false },
      { text: "Lipid soluble", correct: false },
      { text: "Can be spitted out with signs of toxicity", correct: false },
      { text: "Convenient to use", correct: false },
    ],
  },
  {
    question: "The study of absorption, distribution, metabolism and excretion of drug is known as:",
    answers: [
      { text: "Pharmacy", correct: false },
      { text: "Pharmacokinetics", correct: true },
      { text: "Pharmacodynamics", correct: false },
      { text: "Pharmacopoeia", correct: false },
      { text: "Toxicology", correct: false },
    ],
  },
  {
    question: "Nitroglycerine is administered by which route?",
    answers: [
      { text: "By sublingual", correct: true },
      { text: "By inhalation", correct: false },
      { text: "By subcutaneouse", correct: false },
      { text: "By intramuscular", correct: false },
      { text: "By insertion", correct: false },
    ],
  },
  {
    question: "The substances produced by or derived from living organisms that are used to kill bacteria or prevent their multiplication is called:",
    answers: [
      { text: "Antibiotics", correct: true },
      { text: "Antidotes", correct: false },
      { text: "Hormones", correct: false },
      { text: "Enzymes", correct: false },
      { text: "Antigens", correct: false },
    ],
  },
  {
    question: "For a drug given orally, the principle site of drug absorption is:",
    answers: [
      { text: "Stomach", correct: false },
      { text: "Small intestine", correct: true },
      { text: "Oesophagus", correct: false },
      { text: "Large intestine", correct: false },
      { text: "Mouth", correct: false },
    ],
  },
  {
    question: "Specify from which dosage form, when taken orally the drug is absorbed and enters the bloodstream faster?",
    answers: [
      { text: "Solution", correct: true },
      { text: "Suspension", correct: false },
      { text: "Tablets", correct: false },
      { text: "Capsules", correct: false },
      { text: "Dragees", correct: false },
    ],
  },
  {
    question: "Your patients blood pressure remains high so the doctor has ordered Propranolol 0.5mg/kg.The patient weighs 60kg.The available tablets are 10 mg. How many tablets should the patient take?",
    answers: [
      { text: "1.5 tablet", correct: false },
      { text: "3 tablet", correct: true },
      { text: "5 tablet", correct: false },
      { text: "6 tablet", correct: false },
      { text: "1 tablet", correct: false },
    ],
  },
  {
    question: "The patient was prescribed intramuscular injection of a 2% solution papaverine hydrochloride 1 ml 2 times a day. What is equal with this the daily dose of papaverine hydrochloride?",
    answers: [
      { text: "20 mg", correct: false },
      { text: "40 mg", correct: true },
      { text: "60 mg", correct: false },
      { text: "80 mg", correct: false },
      { text: "100 mg", correct: false },
    ],
  },
  {
    question: "Which of the following is a phase II drug- metabolizing reaction ?",
    answers: [
      { text: "Acetylation", correct: true },
      { text: "Deamination", correct: false },
      { text: "Hydrolysis", correct: false },
      { text: "Oxidation", correct: false },
      { text: "Reduction", correct: false },
    ],
  },
  {
    question: "What is the pharmacokinetics?",
    answers: [
      { text: "The study of biological and therapeutic effects of drugs", correct: false },
      { text: "The study of absorption, distribution, metabolism and excretion of drugs", correct: true },
      { text: "The study of mechanisms of drug action", correct: false },
      { text: "The study of methods of new drug development", correct: false },
      { text: "The study of toxic effects on body", correct: false },
    ],
  },
  {
    question: "The passage of drug molecules from a region of high drug concentration to a region of low drug concentration is known as",
    answers: [
      { text: "Active transport", correct: false },
      { text: "Bioavailability", correct: false },
      { text: "Biopharmaceutics", correct: false },
      { text: "Simple diffusion", correct: true },
      { text: "Pinocytosis", correct: false },
    ],
  },
  {
    question: "Which tissue has the greatest capacity to bio-transform drugs?",
    answers: [
      { text: "Brain", correct: false },
      { text: "Kidney", correct: true },
      { text: "Liver", correct: false },
      { text: "lung", correct: false },
      { text: "skin", correct: false },
    ],
  },
  {
    question: "Which of the following functional groups is most susceptible to hydrolysis ?",
    answers: [
      { text: "R – CO – R", correct: false },
      { text: "R - COOR", correct: true },
      { text: "R – O - R", correct: false },
      { text: "R – NH- CH3", correct: false },
      { text: "R – COOH", correct: false },
    ],
  },
  {
    question: "What is the entry of drugs into the plasma?",
    answers: [
      { text: "Absorption", correct: true },
      { text: "Distribution", correct: false },
      { text: "Elimination", correct: false },
      { text: "Metabolism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Pharmacokinetic is the study of…",
    answers: [
      { text: "The mechanism of drug action", correct: false },
      { text: "The absorption of drug", correct: true },
      { text: "The effects of drugs", correct: false },
      { text: "The interaction of drugs", correct: false },
      { text: "The side effects of drugs", correct: false },
    ],
  },
  {
    question: "With what method of administration is the bioavailability of the drug 100%?",
    answers: [
      { text: "rectal", correct: false },
      { text: "oral", correct: false },
      { text: "sublingual", correct: false },
      { text: "intravenous", correct: true },
      { text: "transcutaneous", correct: false },
    ],
  },
  {
    question: "What characterizes such an indicator of pharmacokinetics as clearance?",
    answers: [
      { text: "suction rate", correct: false },
      { text: "completeness of absorption", correct: false },
      { text: "the nature of the distribution", correct: false },
      { text: "the content of the active form of the drug in the blood", correct: false },
      { text: "the rate of elimination of the drug from the body", correct: true },
    ],
  },
  {
    question: "What does “pharmacokinetics” include?",
    answers: [
      { text: "Complications of drug therapy", correct: false },
      { text: "Drug biotransformation in the organism", correct: true },
      { text: "Influence of drugs on metabolism processes", correct: false },
      { text: "Influence of drugs on genes", correct: false },
      { text: "Unwanted effects of drugs", correct: false },
    ],
  },
  {
    question: "A physical process by which a weak acid becomes less water-soluble and more lipid-soluble at low pH is",
    answers: [
      { text: "Distribution", correct: false },
      { text: "Elimination", correct: false },
      { text: "First-pass effect", correct: false },
      { text: "Permeation", correct: false },
      { text: "Protonation", correct: true },
    ],
  },
  {
    question: "Distribution of drugs to specific tissues",
    answers: [
      { text: "Is independent of blood flow to the organ", correct: false },
      { text: "Is independent of the solubility of the drug in that tissue", correct: false },
      { text: "Depends on the unbound drug concentration gradient between blood and tissues", correct: true },
      { text: "Is increased for drugs that are strongly bound to plasma proteins", correct: false },
      { text: "Has no effect on the half-life of the drug", correct: false },
    ],
  },
  {
    question: "What will indicate the termination of the drug?",
    answers: [
      { text: "Drug must be exerted from the body to terminate their action", correct: false },
      { text: "Metabolism of drugs always increases their water solubility", correct: false },
      { text: "Metabolism of drugs always abolishes their pharmacologic activity", correct: false },
      { text: "Hepatic metabolism and renal excretion are the two most important mechanisms involved", correct: true },
      { text: "Used to determine the statistical variation (standard deviation) of the maximal response to the drug.", correct: false },
    ],
  },
  {
    question: "The initial distribution of a drug into tissue is determined chiefly by the",
    answers: [
      { text: "Rate of blood flow to tissue", correct: true },
      { text: "Glomerular filtration rate", correct: false },
      { text: "Stomach emptying time", correct: false },
      { text: "Affinity of the drug to tissue", correct: false },
      { text: "Plasma protein binding of the drug", correct: false },
    ],
  },
  {
    question: "Creatinine clearance is used as a mea- surement of",
    answers: [
      { text: "Renal excretion rate", correct: false },
      { text: "Glomerular filtration rate", correct: true },
      { text: "Active renal secretion", correct: false },
      { text: "Passive renal absorption", correct: false },
      { text: "Drug metabolism rate", correct: false },
    ],
  },
  {
    question: "The addition of glucuronic acid to a drug",
    answers: [
      { text: "Decreases its water solubility", correct: false },
      { text: "Usually leads to inactivation of the drug", correct: true },
      { text: "Is an example of a phase 1 reaction", correct: false },
      { text: "Occurs at the same rate in adults and the newborn", correct: false },
      { text: "Envolves cytochrome P-450", correct: false },
    ],
  },
  {
    question: "The main mechanism of most drugs absorption in GI tract is",
    answers: [
      { text: "Active transport", correct: false },
      { text: "Filtration", correct: false },
      { text: "Endocytosis", correct: false },
      { text: "Exocytosis", correct: false },
      { text: "Passive diffusion", correct: true },
    ],
  },
  {
    question: "What does pharmacokinetics include?",
    answers: [
      { text: "Localization of drug action", correct: false },
      { text: "Mechanisms of drug action", correct: false },
      { text: "Excretion of substances", correct: true },
      { text: "Interaction of substances", correct: false },
      { text: "Chemical structure of drugs", correct: false },
    ],
  },
  {
    question: "What does pharmacokinetics include?",
    answers: [
      { text: "Complications of drug therapy", correct: false },
      { text: "Drug biotransformation in the organism", correct: true },
      { text: "Influence of drugs on metabolism processes", correct: false },
      { text: "Influence of drugs on genes", correct: false },
      { text: "Chemical structure of drugs", correct: false },
    ],
  },
  {
    question: "The volume of distribution (Vd) relates:",
    answers: [
      { text: "Single to a daily dose of an administrated drug", correct: false },
      { text: "An administrated dose to a body weight", correct: false },
      { text: "An uncharged drug reaching the systemic circulation", correct: false },
      { text: "The amount of a drug in the body to the concentration of a drug in plasma", correct: true },
      { text: "Concentration of substance in urine", correct: false },
    ],
  },
  {
    question: "Which of the following is true about blood brain barrier?",
    answers: [
      { text: "Endothelial cells of the blood-brain barrier have slit junctions", correct: false },
      { text: "Ionized or polar drugs can cross the blood-brain barrier easily", correct: false },
      { text: "Drugs cannot cross the blood-brain barrier through specific transporters", correct: false },
      { text: "Lipid-soluble drugs readily cross the blood-brain barrier", correct: true },
      { text: "The capillary structure of the blood-brain barrier is similar to that of the liver and spleen", correct: false },
    ],
  },
  {
    question: "Which of the following phase II metabolic reactions makes phase I metabolites readily excretable in urine?",
    answers: [
      { text: "Oxidation", correct: false },
      { text: "Reduction", correct: false },
      { text: "Glucuronidation", correct: true },
      { text: "Hydrolysis", correct: false },
      { text: "Alcohol dehydrogenation", correct: false },
    ],
  },
  {
    question: "A drug with a half-life of 10 hours is administered by continuous intravenous infections. Which of the following best approximates the time for the drug to reach steady state?",
    answers: [
      { text: "10 hours", correct: false },
      { text: "20 hours", correct: false },
      { text: "33 hours", correct: false },
      { text: "40 hours", correct: true },
      { text: "60 hours", correct: false },
    ],
  },
  {
    question: "Indicate the main mechanism of absorption of drugs in the gastrointestinal tract.",
    answers: [
      { text: "facilitated diffusion", correct: false },
      { text: "passive diffusion", correct: true },
      { text: "active transport", correct: false },
      { text: "pinocytosis", correct: false },
      { text: "filtration.", correct: false },
    ],
  },
  {
    question: "Which mechanism is most often responsible for chemical degradation?",
    answers: [
      { text: "Racemization", correct: false },
      { text: "Photolysis", correct: false },
      { text: "Hydrolysis", correct: true },
      { text: "Decarboxylation", correct: false },
      { text: "Oxidation", correct: false },
    ],
  },
  {
    question: "What characterizes such an indicator of pharmacokinetics as bioavailability?",
    answers: [
      { text: "The fraction of the administered dose reaching the systemic circulation", correct: true },
      { text: "The nature of the distribution", correct: false },
      { text: "Intensity of metabolism", correct: false },
      { text: "Elimination rate", correct: false },
      { text: "The degree of binding by blood proteins", correct: false },
    ],
  },
  {
    question: "The reasons determing bioavailability are:",
    answers: [
      { text: "Rheological parameters of blood", correct: false },
      { text: "Amount of a substance obtained orally and quantity of intakes", correct: false },
      { text: "Extent of absorption and hepatic first-pass effect", correct: true },
      { text: "Glomerular filtration rate", correct: false },
      { text: "Permeability through the brain-blood barrier", correct: false },
    ],
  },
  {
    question: "Stimulation of liver microsomal enzymes can:",
    answers: [
      { text: "Require the dose increase of some drugs", correct: true },
      { text: "Require the dose decrease of some drugs", correct: false },
      { text: "Prolong the duration of the action of a drug", correct: false },
      { text: "Intensify the unwanted reaction of a drug", correct: false },
      { text: "An increase in the toxicity of the drug", correct: false },
    ],
  },
  {
    question: "If a drug has a constant bioavailability and first order elimination, its maintenance dose rate will be directly proportional to its:",
    answers: [
      { text: "Volume of distribution", correct: false },
      { text: "Plasma protein binding", correct: false },
      { text: "Lipid solubility", correct: false },
      { text: "Total body clearance", correct: true },
      { text: "Degree of ionization", correct: false },
    ],
  },
  {
    question: "When the same dose of a drug is repeated at half life intervals, the steady-state (plateau) plasma drug concentration is reached after:",
    answers: [
      { text: "2–3 half lives", correct: false },
      { text: "4-5  half lives", correct: true },
      { text: "6-7  half lives", correct: false },
      { text: "8-9  half lives", correct: false },
      { text: "10-11 half lives", correct: false },
    ],
  },
  {
    question: "Dose-response curves are used for drug evaluation in the animal laboratory and in the clinic, Quantal dose-response curves are often",
    answers: [
      { text: "Uses for determining the therapeutic index of a drug", correct: true },
      { text: "Used for determining the maximal efficacy of a drug", correct: false },
      { text: "Invalid in the presence of inhibitors of the drug being studied", correct: false },
      { text: "Obtained from the study of intact subject but not from isolated tissue preparations", correct: false },
      { text: "Used to determine the statistical variation (standard deviation) of the maximal response to the drug.", correct: false },
    ],
  },
  {
    question: "The renal clearance of insulin is used as a measurement of",
    answers: [
      { text: "Effective renal blood flow", correct: false },
      { text: "Rate of renal drug excretion", correct: false },
      { text: "Intrinsic enzyme activity", correct: false },
      { text: "Active renal secretion", correct: false },
      { text: "Glomerular filtration rate", correct: true },
    ],
  },
  {
    question: "A drug with a half-life of 12 hours is administered by continuous intravenous infusion. How long will it take for the drug to reach 90% of its final steady-state level?",
    answers: [
      { text: "18 hours", correct: false },
      { text: "24 hours", correct: false },
      { text: "30 hours", correct: false },
      { text: "40 hours", correct: true },
      { text: "90 hours", correct: false },
    ],
  },
  {
    question: "A drug , given as a 100 mg single dose,results in a peak plasma concentration of 20 mg/ml. The apparent volume of distribution is:",
    answers: [
      { text: "0,5 L", correct: false },
      { text: "1 L", correct: false },
      { text: "2 L", correct: false },
      { text: "5 L", correct: true },
      { text: "10 L", correct: false },
    ],
  },
  {
    question: "An 18-year-old female patient is brought to the emergency department due to drug overdose. Which of the following routes of administration is the most desirable for administering the antidote for the drug overdose?",
    answers: [
      { text: "Intramuscular", correct: false },
      { text: "Subcutaneous", correct: false },
      { text: "Transdermal", correct: false },
      { text: "Oral", correct: false },
      { text: "Intravenous", correct: true },
    ],
  },
  {
    question: "Which of the following types of drugs will have maximum oral bioavailability?",
    answers: [
      { text: "Drugs with high first-pass metabolism", correct: false },
      { text: "Highly hydrophilic drugs", correct: false },
      { text: "Largely hydrophobic, yet soluble in aqueous solutions", correct: true },
      { text: "Chemically unstable drugs", correct: false },
      { text: "Drugs that are P-glycoprotein substrates", correct: false },
    ],
  },
  {
    question: "The patient was prescribed intramuscular administration of a 2% solution of papaverine hydrochloride 2 ml 2 times a day. What is the daily dose of papaverine hydrochloride with this mode of administration?",
    answers: [
      { text: "0.02", correct: false },
      { text: "0.04", correct: false },
      { text: "0.06", correct: false },
      { text: "0.08", correct: true },
      { text: "0.1", correct: false },
    ],
  },
  {
    question: "A patient with an injury was prescribed intramuscular administration of a 1% solution of morphine hydrochloride 1 ml 3 times a day. What is the daily dose of morphine hydrochloride with this mode of administration?",
    answers: [
      { text: "30 mg", correct: true },
      { text: "40 mg", correct: false },
      { text: "50 mg", correct: false },
      { text: "60 mg", correct: false },
      { text: "80 mg", correct: false },
    ],
  },
  {
    question: "If the total amount of a drug present in the body at a given moment is 2.0 g and its plasma concentration is 25 μg/ml, its volume of distribution is:",
    answers: [
      { text: "100 L", correct: false },
      { text: "80L", correct: true },
      { text: "60 L", correct: false },
      { text: "50 L", correct: false },
      { text: "40 L", correct: false },
    ],
  },
  {
    question: "If a drug is excreted in urine at the rate of 10 mg/hr at a steady-state plasma concentration of 5 mg/L, then its renal clearance is:",
    answers: [
      { text: "0.5 L/hr", correct: false },
      { text: "2.0 L/hr", correct: true },
      { text: "5.0 L/hr", correct: false },
      { text: "20 L/hr", correct: false },
      { text: "0.2  L/hr", correct: false },
    ],
  },
  {
    question: "What is the main route of eliminationof drugs from the body?",
    answers: [
      { text: "Kidneys with urine", correct: true },
      { text: "Liver with bile", correct: false },
      { text: "Lungs with exhaled air", correct: false },
      { text: "Sweat glands with sweat", correct: false },
      { text: "With milk", correct: false },
    ],
  },
  {
    question: "What characterizes such an indicator of pharmacokinetics as clearance?",
    answers: [
      { text: "The rate of absorption", correct: false },
      { text: "The completeness of absorption", correct: false },
      { text: "The nature of the distribution", correct: false },
      { text: "The content of the active form of the drug in the blood", correct: false },
      { text: "The rate of elimination of the drug from the body", correct: true },
    ],
  },
  {
    question: "For drugs with first order kinetics the time required to achieve steady state levels can be predicted form:",
    answers: [
      { text: "Volume of distribution", correct: false },
      { text: "Half life", correct: true },
      { text: "Clearance", correct: false },
      { text: "Loading dose", correct: false },
      { text: "Bioavailability", correct: false },
    ],
  },
  {
    question: "Most drugs cross cell membranes by which means of transport?",
    answers: [
      { text: "Pinocytosis", correct: false },
      { text: "Filtration through pores", correct: false },
      { text: "Ionized passive diffusion", correct: false },
      { text: "Non-ionized passive diffusion", correct: true },
      { text: "Ionized active diffusion", correct: false },
    ],
  },
  {
    question: "A patient with an edema would have an increased volume of distribution (Vd) if?",
    answers: [
      { text: "The patient was taking an anionic drug", correct: false },
      { text: "The patient was taking a hydrophobic drug", correct: false },
      { text: "The patient was taking a hydrophilic drug", correct: true },
      { text: "An edema always causes an increase in Vd", correct: false },
      { text: "An edema always causes an decrease in Vd", correct: false },
    ],
  },
  {
    question: "What characterizes such an indicator of pharmacokinetics as bioavailability?",
    answers: [
      { text: "Completeness and rate of drug intake into the total BF", correct: true },
      { text: "The nature of the distribution", correct: false },
      { text: "Metabolic rate", correct: false },
      { text: "The rate of administration", correct: false },
      { text: "The degree of binding by blood proteins", correct: false },
    ],
  },
  {
    question: "What is the volume of distribution of a drug if the amount administered intravenously is 100 mg and the initial plasma concentration is 10 mg/L?",
    answers: [
      { text: "10 L", correct: true },
      { text: "15 L", correct: false },
      { text: "20 L", correct: false },
      { text: "30 L", correct: false },
      { text: "40 L", correct: false },
    ],
  },
  {
    question: "The pharmacokinetics of theophilline includes the following average parameters: Vd=35L, CL=48ml/min ,half-life=8 hours. If an intravenous infusion of theophilline is started ,how long will it take to approach a steady-state plasma level , i.e.,93,75% of final steady state?",
    answers: [
      { text: "32 hrs", correct: true },
      { text: "12 hrs", correct: false },
      { text: "16 hrs", correct: false },
      { text: "36 hrs", correct: false },
      { text: "38 hrs", correct: false },
    ],
  },
  {
    question: "What is the loading dose of digoxin for an adult if it has a volume of distribution  of 7,3 L/kg,the plasma concentration needed is 1,5 mg/L,F=0,62?",
    answers: [
      { text: "1200 mg", correct: false },
      { text: "1320 mg", correct: false },
      { text: "1236 mg", correct: true },
      { text: "1246 mg", correct: false },
      { text: "1250 mg", correct: false },
    ],
  },
  {
    question: "A partial agonist can antagonize the effects of a full agonist because it has",
    answers: [
      { text: "High affinity but low intrinsic activity", correct: true },
      { text: "Low affinity but high intrinsic activity", correct: false },
      { text: "No affinity and low intrinsic activity", correct: false },
      { text: "High affinity but no intrinsic activity", correct: false },
      { text: "No affinity and high intrinsic activity", correct: false },
    ],
  },
  {
    question: "Pharmacodynamic is the study of…",
    answers: [
      { text: "The action of the drug on the body", correct: true },
      { text: "The action of the body on the drug", correct: false },
      { text: "Absorption of drug", correct: false },
      { text: "Distribution of drug", correct: false },
      { text: "Metabolism od drug", correct: false },
    ],
  },
  {
    question: "The therapeutic window is an indication of the:",
    answers: [
      { text: "Length of time a drug should be administered to achieve optimal effects", correct: false },
      { text: "Time of day when a drug should be administered or optimal effects", correct: false },
      { text: "Range of concentrations over which a drug is safe and efficacious for most patients", correct: true },
      { text: "Age range of patients that is optimal for a given drug", correct: false },
      { text: "Range of concentrations over which a drug is maximally effective for all patients", correct: false },
    ],
  },
  {
    question: "The action of the drug on the body is known as ……………………….",
    answers: [
      { text: "Pharmacokinetic", correct: false },
      { text: "Pharmacodynamic", correct: true },
      { text: "Pharmacology", correct: false },
      { text: "Pharmacotherapeutics", correct: false },
      { text: "Pharmacocognosy", correct: false },
    ],
  },
  {
    question: "The response is most rapid following the binding of a ligand to:",
    answers: [
      { text: "Intracellular receptors", correct: false },
      { text: "Ligand-gated ion channels", correct: true },
      { text: "G protein-coupled receptors", correct: false },
      { text: "Enzyme-linked receptors", correct: false },
      { text: "Spare receptors", correct: false },
    ],
  },
  {
    question: "The term \"blood-brain barrier\" (BBB) refers to a:",
    answers: [
      { text: "Device that is used to prevent blood-borne drugs from entering the brain", correct: false },
      { text: "Physical barrier that prevents blood from entering the brain.", correct: false },
      { text: "Noncellular barrier that prevents drugs from entering the CNS unless transported by specific carriers.", correct: false },
      { text: "Virtual or conceptual barrier that can explain the behavior of some drug effects on the CNS.", correct: false },
      { text: "Cellular barrier that includes brain capillary endothelial cells that limits drug entry into the brain.", correct: true },
    ],
  },
  {
    question: "What phenomenon can occur with the combined use of drugs?",
    answers: [
      { text: "idiosyncrasy", correct: false },
      { text: "functional cumulation", correct: false },
      { text: "addiction", correct: false },
      { text: "material cumulation", correct: false },
      { text: "synergy", correct: true },
    ],
  },
  {
    question: "What is the name of the accumulation of a drug substance in the body with its repeated injections?",
    answers: [
      { text: "idiosyncrasy", correct: false },
      { text: "sensitization", correct: false },
      { text: "summation", correct: false },
      { text: "material  cumulation", correct: true },
      { text: "functional cumulation", correct: false },
    ],
  },
  {
    question: "What phenomenon can occur with repeated injections of drugs?",
    answers: [
      { text: "addictive", correct: true },
      { text: "idiosyncrasy", correct: false },
      { text: "summation", correct: false },
      { text: "potentiation", correct: false },
      { text: "synergy", correct: false },
    ],
  },
  {
    question: "Which of the following is a G protein coupled receptor",
    answers: [
      { text: "Muscarinic cholinergic receptor", correct: true },
      { text: "Nicotinic cholinergic receptor", correct: false },
      { text: "Glucocorticoid receptor", correct: false },
      { text: "Insulin receptor", correct: false },
      { text: "Tyrosine protein kinase receptor", correct: false },
    ],
  },
  {
    question: "Which of the following terms best describes an antagonist that interacts directly with the agonist and not at all or only incidentally, with the receptor ?",
    answers: [
      { text: "Pharmacological antagonist", correct: false },
      { text: "Partial agonist", correct: false },
      { text: "Physiological antagonist", correct: false },
      { text: "Chemical antagonist", correct: true },
      { text: "Noncompetitive antagonist", correct: false },
    ],
  },
  {
    question: "Which of the following terms best describes a drug that blocks the action of epinephrine at its receptors by occupying those receptors without activating them ?",
    answers: [
      { text: "Pharmacological antagonist", correct: true },
      { text: "Partial agonist", correct: false },
      { text: "Physiological antagonist", correct: false },
      { text: "Chemical antagonist", correct: false },
      { text: "Noncompetitive antagonist", correct: false },
    ],
  },
  {
    question: "Isoproterenol produce maximal contraction of cardiac muscle in a manner similar to epinephrine. Which of the following best describes Isoproterenol?",
    answers: [
      { text: "Full agonist", correct: true },
      { text: "Partial agonist", correct: false },
      { text: "Competitive antagonist", correct: false },
      { text: "Irreversible antagonist", correct: false },
      { text: "Inverse agonist", correct: false },
    ],
  },
  {
    question: "Which of the following statements concerning a drug receptor is true?",
    answers: [
      { text: "It mediates the nonspecific action of volatile anesthetics", correct: false },
      { text: "Its expression is induced only by exogenously added drugs", correct: false },
      { text: "It can bind endogenous ligand to produce physiological activity", correct: true },
      { text: "It mediates the cathartic activity of magnesium citrate", correct: false },
      { text: "Down-regulation of receptor level can lead to sensitization of the target cell to the receptor agonist.", correct: false },
    ],
  },
  {
    question: "Which of the following receptor types has 7 helical membrane, spanning amino acid segments with 3 extracellular and 3 intracellular loops",
    answers: [
      { text: "Tyrosine protein kinase receptor", correct: false },
      { text: "Gene expression regulating receptor", correct: false },
      { text: "Intrinsic ion channel containing receptor", correct: false },
      { text: "G protein coupled receptors", correct: true },
      { text: "Glucocorticoid receptor", correct: false },
    ],
  },
  {
    question: "A drug ‘R’ producing no response by itself causes the log dose-response curve of another drug ‘S’ to shift to the right in a parallel manner without decreasing the maximal response: Drug ‘R’ is a:",
    answers: [
      { text: "Partial agonist", correct: false },
      { text: "Inverse agonist", correct: false },
      { text: "Competitive antagonist", correct: true },
      { text: "Noncompetitive antagonist", correct: false },
      { text: "Physiological antagonist", correct: false },
    ],
  },
  {
    question: "A drug which does not produce any action by itself but decreases the slope of the log dose-response curve and suppresses the maximal response to another drug is a:",
    answers: [
      { text: "Physiological antagonist", correct: false },
      { text: "Competitive antagonist", correct: false },
      { text: "Noncompetitive antagonist", correct: true },
      { text: "Partial agonist", correct: false },
      { text: "Inverse agonist", correct: false },
    ],
  },
  {
    question: "Pindolol and some other β adrenergic receptor antagonists have an additional property that is referred to as intrinsic sympathomimetic activity (ISA). This additional property indicates these agents are:",
    answers: [
      { text: "Full agonists", correct: false },
      { text: "Partial agonists", correct: true },
      { text: "Inverse agonist", correct: false },
      { text: "Noncompetitive antagonists", correct: false },
      { text: "Neutral antagonists", correct: false },
    ],
  },
  {
    question: "Preclinical characterization of a new drug indicates that it is an inverse agonist for adenosine receptors. It interacts syntopically with adenosine. In the presence of adenosine, this drug will behave like a(n):",
    answers: [
      { text: "Inert compound with no additive or inhibitory effects to adenosine at high concentrations", correct: false },
      { text: "Partial agonist with additive effects to adenosine at high concentrations", correct: false },
      { text: "Partial agonist with inhibitory effects to adenosine at high concentrations", correct: false },
      { text: "Competitive antagonist with inhibitory effects on receptor activation", correct: true },
      { text: "Full agonist with additive effects to adenosine at high concentrations", correct: false },
    ],
  },
  {
    question: "Pindolol and some other β adrenergic receptor antagonists have an additional property that is referred to as intrinsic sympathomimetic activity (ISA). This additional property indicates these agents are:",
    answers: [
      { text: "Neutral antagonists", correct: false },
      { text: "Partial agonists", correct: true },
      { text: "Full agonists", correct: false },
      { text: "Inverse agonist", correct: false },
      { text: "Noncompetitive antagonists", correct: false },
    ],
  },
  {
    question: "Which of the following transport mechanism is used to deliver material into the extracellular space?",
    answers: [
      { text: "Phagocytosis", correct: false },
      { text: "Pinocytosis", correct: false },
      { text: "Exocytosis", correct: true },
      { text: "Endocytosis", correct: false },
      { text: "Receptor mediated cytosis", correct: false },
    ],
  },
  {
    question: "Biological membranes, as the main structural elements of the cell, serve not just as physical boundaries, but as dynamic functional surfaces. Which of the following is the role of cell membrane proteins?",
    answers: [
      { text: "participate in the recognition of environmental factors", correct: true },
      { text: "deposited in the cytoplasm as droplets", correct: false },
      { text: "form different types of structures - micelles", correct: false },
      { text: "participate in the construction of the spindle", correct: false },
      { text: "act as specific ligands", correct: false },
    ],
  },
  {
    question: "Which of the following transport mechanism use gases such as oxygen and carbon dioxide when cross the plasma membrane?",
    answers: [
      { text: "secondary active transport", correct: false },
      { text: "primary active transport", correct: false },
      { text: "a specific gas transport proteins", correct: false },
      { text: "receptor mediated endocytosis", correct: true },
      { text: "passive diffusion through the lipid bilayer", correct: false },
    ],
  },
  {
    question: "With repeated use of ephedrine 20 minutes after the first administration, the blood pressure level increased slightly.  An example of what is this situation?",
    answers: [
      { text: "idiosyncrasy", correct: false },
      { text: "tolerance", correct: false },
      { text: "cumulation", correct: false },
      { text: "tachyphylaxis", correct: true },
      { text: "pre-systemic elimination", correct: false },
    ],
  },
  {
    question: "A 47-year-old man has consumed approximately 1 bottle of whiskey daily for the past 5 years. He is brought to the emergency room one evening because he is belligerent. In the emergency room he does not appear sedated despite a blood alcohol concentration of 275 mg/dL. Within minutes of his blood being drawn he develops a respiratory arrest and is intubated successfully. Because of tolerance to alcohol's sedative effect the therapeutic index of alcohol in this patient is",
    answers: [
      { text: "Decreased", correct: true },
      { text: "Increased.", correct: false },
      { text: "Unchanged", correct: false },
      { text: "Irrelevant", correct: false },
      { text: "Negative reinforcement.", correct: false },
    ],
  },
  {
    question: "A study was carried out in isolated intestinal smooth muscle preparations to determine the action of a new drug \"novamine,\" which in separate studies bound to the same receptors as acetylcholine. In the absence of other drugs, acetylcholine caused contraction of the muscle. Novamine alone caused relaxation of the preparation. In the presence of a low concentration of novamine, the EC50 of acetylcholine was unchanged, but the Emax was reduced. In the presence of a high concentration of novamine, extremely high concentrations of acetylcholine had no effect. Which of the following expressions best describes novamine?",
    answers: [
      { text: "An irreversible antagonist", correct: true },
      { text: "A spare receptor agonist", correct: false },
      { text: "A partial agonist", correct: false },
      { text: "A chemical antagonist", correct: false },
      { text: "A physiologic antagonist", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman is brought to the emergency department after overdosing on oxycodone, an opiate analgesic. She is unconscious and barely breathing when she arrives at the hospital, but revives and is breathing normally within 2 minutes after receiving an injection of naloxone. After about an hour, she requires another dose of naloxone as the symptoms of opiate overdose begin to redevelop. Naloxone is likely acting as a:",
    answers: [
      { text: "Diuretic that increases renal excretion of the opiate.", correct: false },
      { text: "Strong stimulant that counteracts the CNS-depressant effects of the opiate.", correct: false },
      { text: "Drug that stimulates respiratory centers in the brain.", correct: false },
      { text: "Competitive antagonist of opioid receptors.", correct: true },
      { text: "Noncompetitive antagonist of opioid receptors.", correct: false },
    ],
  },
  {
    question: "A 50-year-old woman with back pain is administered an opiate agonist. After 2 weeks of therapy, she notices that she needs to increase the dose to get the same analgesic effect. She is experiencing",
    answers: [
      { text: "Withdrawal.", correct: false },
      { text: "Tolerance.", correct: true },
      { text: "Physical dependence.", correct: false },
      { text: "Drug-seeking behavior.", correct: false },
      { text: "Addiction.", correct: false },
    ],
  },
  {
    question: "Sugammadex is a new drug that reverses the action of rocuronium and certain other skeletal muscle-relaxing agents (nondepolarizing neuromuscular blocking agents). It appears to interact directly with the rocuronium molecule and not at all with the rocuronium receptor. Which of the following terms best describes sugammadex?",
    answers: [
      { text: "Physiologic antagonist", correct: false },
      { text: "Chemical antagonist", correct: true },
      { text: "Noncompetitive antagonist", correct: false },
      { text: "Pharmacologic antagonist", correct: false },
      { text: "Partial agonist", correct: false },
    ],
  },
  {
    question: "A 48-year-old man with a duodenal ulcer disease is treated with cimetidine. After 6 weeks of treatment, he complains that his stomach pain is returning and wonders if the dose of cimetidine should be increased. The most likely reason for the decreased effectiveness of cimetidine in this patient is",
    answers: [
      { text: "Enhanced plasma protein binding", correct: false },
      { text: "Tolerance", correct: true },
      { text: "Increased hepatic metabolism", correct: false },
      { text: "Poor patient compliance", correct: false },
      { text: "Diminished GI absorption", correct: false },
    ],
  },
  {
    question: "Insulin acts at the extracellular domain of membrane-spanning tyrosine kinase and causes its phosphorylation. afterward, tyrosine kinase activated intracellular enzymes responsible for glucose catabolism. to which family of receptors does tyrosine kinase belong?",
    answers: [
      { text: "Ligand-gated ion channels", correct: false },
      { text: "Intracellular receptors", correct: false },
      { text: "Enzyme linked receptors", correct: true },
      { text: "G protein-coupled receptors", correct: false },
      { text: "Spare receptors", correct: false },
    ],
  },
  {
    question: "Gastric acid secretion is stimulated by acetylcholine, histamine, and gastrin, the membrane receptor-mediated binding of acetylcholine, histamine, or gastrin results in activation of adenylyl cyclase…",
    answers: [
      { text: "Gs", correct: true },
      { text: "Gq", correct: false },
      { text: "Gi", correct: false },
      { text: "Intracellular", correct: false },
      { text: "Enzyme-linked", correct: false },
    ],
  },
  {
    question: "Changes in gene expression occur following binding of a ligand to",
    answers: [
      { text: "G protein-coupled receptors", correct: false },
      { text: "Intracellular receptors", correct: true },
      { text: "Ligand-gated ion channels", correct: false },
      { text: "Enzyme- linked receptors", correct: false },
      { text: "Spare receptors", correct: false },
    ],
  },
  {
    question: "THEY PHYSICIAN HAS ORDERED 500 mg. OF A MEDICATION THE AMOUNT ON HAND IS 250mg PER TABLET. HOW MANY TABLETS WILL BE GIVEN?",
    answers: [
      { text: "0.5 tab", correct: false },
      { text: "1 tab", correct: false },
      { text: "2 tab", correct: true },
      { text: "2.5 tab", correct: false },
      { text: "3 tab", correct: false },
    ],
  },
  {
    question: "17-year-old boy drank increasing amount of alcohol when attending parties. He noticed that he was able to better tolerate alcohol effects and asked his physician the reason for this. The physician said that most likely pharmacodynamic tolerance occurred. Which of the following actions most likely mediated this tolerance?",
    answers: [
      { text: "Decreased concentration of the drug at the site of action", correct: false },
      { text: "Homeostatic adaptive changes that counteract the drug effect", correct: true },
      { text: "Increased number of drug receptors", correct: false },
      { text: "Decreased bioavailability of the drug", correct: false },
      { text: "Increased biotransformation of the drug", correct: false },
    ],
  },
  {
    question: "A 63-year-old patient with a terminal cancer has been suffering from continuous pain and started a treatment with morphine. After few days of treatment the initial dose was no longer effective and the physician gradually increased the dose, knowing that pharmacodynamic tolerance most likely occurred. Which of the following statements best explains the mechanism of tolerance in this patient?",
    answers: [
      { text: "Accelerated morphine metabolism", correct: false },
      { text: "Decreased binding of morphine to plasma proteins", correct: false },
      { text: "Decreased concentration of morphine in the brain", correct: false },
      { text: "Increased affinity of receptors to morphine", correct: false },
      { text: "Decreased morphine receptor density", correct: true },
    ],
  },
  {
    question: "65 year-old woman took 500 mg of acetaminophen to relieve an annoying headache. This dose is therapeutically effective for about 4 hours, and the half-life of acetaminophen is about 2 hours. How many hours would the medication be effective if the woman doubled the dose?",
    answers: [
      { text: "4", correct: false },
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "12", correct: false },
      { text: "14", correct: false },
    ],
  },
  {
    question: "A 16-year-old girl suffering from seasonal rhinitis started a therapy with loratadine, a drug that binds to H1 histamine receptors. Which of the following terms best defines the intrinsic ability of a drug to bind to a receptor?",
    answers: [
      { text: "Intrinsic activity", correct: false },
      { text: "Potency", correct: false },
      { text: "Efficacy", correct: false },
      { text: "Affinity", correct: true },
      { text: "Receptor activation", correct: false },
    ],
  },
  {
    question: "Two new drugs, A and B, are tested in an in vitro system. The drugs turn out to have the same slope of the log dose-response curves and the same maximal efficacy. Which of the following pairs of statements best describes drugs A and B?",
    answers: [
      { text: "A full agonist , B full agonist", correct: true },
      { text: "A full agonist , B competitive antagonist", correct: false },
      { text: "A partial agonist, B functional antagonist", correct: false },
      { text: "A full agonist , B partial agonist", correct: false },
      { text: "A partial agonist, B noncompetitive antagonist", correct: false },
    ],
  },
  {
    question: "Two drugs, tested in an in vitro system, turn out to have equal affinity for the same receptor and intrinsic activities of 1.0 and 0.25 respectively. Which of the following would be the correct percent of the maximal response, when both drugs are present at the same time in maximally effective concentrations?",
    answers: [
      { text: "12.5%", correct: false },
      { text: "62.5%", correct: true },
      { text: "1", correct: false },
      { text: "0.25", correct: false },
      { text: "0.75", correct: false },
    ],
  },
  {
    question: "Pharmacodynamics involves the study of following?",
    answers: [
      { text: "Mechanism of drug action", correct: true },
      { text: "Biotransformation of drugs in the organism", correct: false },
      { text: "Distribution of drugs in the organism", correct: false },
      { text: "Absorption of drugs from GIT", correct: false },
      { text: "Excretion of drug from the organism", correct: false },
    ],
  },
  {
    question: "Which of the following the second messenger of G-protein-coupled receptor?",
    answers: [
      { text: "Adenylyl cyclase", correct: false },
      { text: "Sodium ions", correct: false },
      { text: "Phospholipase C", correct: false },
      { text: "cAMP", correct: true },
      { text: "Calcium ions", correct: false },
    ],
  },
  {
    question: "What term is used to describe a more gradual decrease in responsiveness to a drug, taking days or weeks to develop?",
    answers: [
      { text: "Refractoriness", correct: false },
      { text: "Cumulative effect", correct: false },
      { text: "Tolerance", correct: true },
      { text: "Tachyphylaxis", correct: false },
      { text: "Therapeutic window", correct: false },
    ],
  },
  {
    question: "Which of the following terms best defines a drug with intrinsic activity higher than 0% and lower than 100%?",
    answers: [
      { text: "Full agonist", correct: false },
      { text: "Partial agonist", correct: true },
      { text: "Chemical antagonist", correct: false },
      { text: "Functional antagonist", correct: false },
      { text: "Pharmacological antagonist", correct: false },
    ],
  },
  {
    question: "A new beta-blocker was tested in voluntary subjects. The cumulative frequency distribution of subjects showing a decrease of 10 bpm in the heart rate, was plotted against the log dose.Which of the following drug parameters can be determined from this cumulative frequency distribution?",
    answers: [
      { text: "Affinity", correct: false },
      { text: "Therapeutic index", correct: false },
      { text: "Median effective dose", correct: true },
      { text: "Therapeutic window", correct: false },
      { text: "Maximal efficacy", correct: false },
    ],
  },
  {
    question: "Drugs can bind to receptors via different types of chemical bonds. Which of the following is the least common drug-receptor bond?",
    answers: [
      { text: "Ionic", correct: false },
      { text: "Hydrogenic", correct: false },
      { text: "Covalent", correct: true },
      { text: "Hydrophobic", correct: false },
      { text: "Van der Waals", correct: false },
    ],
  },
  {
    question: "A new drug was tested in an in vitro system. It was found that only one enantiomer of the racemic pair bound substantially to a specific receptor, whereas the other enantiomer showed a negligible binding. Which of the following terms best defines this property?",
    answers: [
      { text: "Intrinsic activity", correct: false },
      { text: "Stereo-selectivity", correct: true },
      { text: "Maximal efficacy", correct: false },
      { text: "Variability", correct: false },
      { text: "Potency", correct: false },
    ],
  },
  {
    question: "Two new drugs ,A and B ,are tested in an in vitro system. The drugs turn out to have the same slope of the log dose-response curves and the same maximal efficacy.Which of the following pairs of statements best describes A and B?",
    answers: [
      { text: "A full agonist,B full agonist", correct: true },
      { text: "A full agonist,B partial agonist", correct: false },
      { text: "A full agonist ,B competitive antagonist", correct: false },
      { text: "A partial agonist,B noncompetitive antagonist", correct: false },
      { text: "A partial agonist, B functional antagonist", correct: false },
    ],
  },
  {
    question: "When two drugs with the same effect produce an effect greater than the sum of the effects of individual drugs [1 + 1>2]; such an effect is called",
    answers: [
      { text: "Additive effect", correct: false },
      { text: "Synergism", correct: true },
      { text: "Potentiation", correct: false },
      { text: "Physical Antagonism", correct: false },
      { text: "Chemical antagonism", correct: false },
    ],
  },
  {
    question: "When a drug lacking effect of its own increases the effects of the second active drug [0 +1= >1]; such an effect is called",
    answers: [
      { text: "Additive effect", correct: false },
      { text: "Synergism", correct: false },
      { text: "Potentiation", correct: true },
      { text: "Physical antagonism", correct: false },
      { text: "Chemical antagonism", correct: false },
    ],
  },
  {
    question: "Acetylcholine and atropine action on the muscarinic receptors is a classical exam- ple of",
    answers: [
      { text: "Competitive antagonism", correct: true },
      { text: "Non-competitive antagonism", correct: false },
      { text: "Non-equilibrium antagonism", correct: false },
      { text: "Physiological antagonism", correct: false },
      { text: "Chemical antagonism", correct: false },
    ],
  },
  {
    question: "What is the term for the action of drugs during pregnancy , which leads to congenital malformations?",
    answers: [
      { text: "mutagenic", correct: false },
      { text: "carcinogenic", correct: false },
      { text: "teratogenic", correct: true },
      { text: "embryotoxic", correct: false },
      { text: "fetotoxic", correct: false },
    ],
  },
  {
    question: "A 33-year-old Japanese man becomes flushed and light-headed after one glass of wine. T is reaction is likely due to",
    answers: [
      { text: "Increased absorption of the alcohol.", correct: false },
      { text: "A variant in aldehyde dehydrogenase.", correct: true },
      { text: "Inhibition of monoamine oxidase.", correct: false },
      { text: "The rate he drank the glass of wine.", correct: false },
      { text: "Decreased renal excretion of alcohol", correct: false },
    ],
  },
  {
    question: "Which of the following statements about new drug development is most correct?",
    answers: [
      { text: "All new drugs must be studied in at least 1 primate species before NDA submission", correct: false },
      { text: "Phase 4 (surveillance) is the most rigidly regulated phase of clinical drug trials", correct: false },
      { text: "Food supplements and herbal (botanical) remedies are subject to the same FDA regulation as ordinary drugs", correct: false },
      { text: "Orphan drugs are drugs that are no longer produced by the original manufacturer", correct: false },
      { text: "Drugs that test positive for teratogenicity, mutagenicity, or carcinogenicity can be tested in humans", correct: true },
    ],
  },
  {
    question: "What is the type of drug-to-drug interaction which is connected withprocesses of absorption, biotransformation, distribution and excretion?",
    answers: [
      { text: "Pharmacodynamic interaction", correct: false },
      { text: "Physical interaction", correct: false },
      { text: "Pharmaceutical interaction", correct: false },
      { text: "Pharmacokinetic interaction", correct: true },
      { text: "chemical interaction", correct: false },
    ],
  },
  {
    question: "What is the type of drug-to-drug interaction which is the result ofinteraction at receptor, cell, enzyme or organ level?",
    answers: [
      { text: "Pharmacodynamic interaction", correct: true },
      { text: "Physical interaction", correct: false },
      { text: "Pharmaceutical interaction", correct: false },
      { text: "Pharmacokinetic interaction", correct: false },
      { text: "chemical interaction", correct: false },
    ],
  },
  {
    question: "What phenomenon can occur in case of using a combination of drugs?",
    answers: [
      { text: "Tolerance", correct: false },
      { text: "Tachyphylaxis", correct: false },
      { text: "Accumulation", correct: false },
      { text: "Synergism", correct: true },
      { text: "Mutagenic", correct: false },
    ],
  },
  {
    question: "An anaphylactic reaction is considered which type of Hypersensitivity?",
    answers: [
      { text: "Hypersensitivity I", correct: true },
      { text: "Hypersensitivity III", correct: false },
      { text: "Hypersensitivity II", correct: false },
      { text: "Hypersensitivity IV", correct: false },
      { text: "Hypersensitivity V", correct: false },
    ],
  },
  {
    question: "A 45-year-old woman recently diagnosed with urinary tract infection, started a therapy with Bactrim (a trimethoprim-sulfamethoxazole combination). Both trimethoprim and sulfamethoxazole are bacteriostatic drugs, when given alone. However a bactericidal effect is obtained when the two drugs are given in combination. Which of the following terms best defines this drug interaction?",
    answers: [
      { text: "Additive effect", correct: false },
      { text: "Synergism", correct: true },
      { text: "Sensitization", correct: false },
      { text: "Potentiation", correct: false },
      { text: "Reverse tolerance", correct: false },
    ],
  },
  {
    question: "What is the name of the phenomenon when drug withdrawal causes serious mental and somatic disorders associated with dysfunction of many body systems up to death?",
    answers: [
      { text: "recoil syndrome", correct: false },
      { text: "sensitization", correct: false },
      { text: "abstinence", correct: true },
      { text: "idiosyncrasy", correct: false },
      { text: "withdrawal syndrome", correct: false },
    ],
  },
  {
    question: "What does the concept of \"addiction\" (tolerance) include?",
    answers: [
      { text: "an increase in the effect of the substance upon repeated administration", correct: false },
      { text: "decrease in the effect of the substance upon repeated administration", correct: true },
      { text: "abstinence", correct: false },
      { text: "hypersensitivity to this substance", correct: false },
      { text: "tachyphylaxis", correct: false },
    ],
  },
  {
    question: "What is the name of the decrease in the effectiveness of the action of a substance when reapplication?",
    answers: [
      { text: "idiosyncratic", correct: false },
      { text: "passion", correct: false },
      { text: "cumulation", correct: false },
      { text: "tolerance", correct: true },
      { text: "tachyphylaxis", correct: false },
    ],
  },
  {
    question: "What is the name of the accumulation of a medicinal substance in the body with repeated injections?",
    answers: [
      { text: "functional cumulation", correct: false },
      { text: "material cumulation", correct: true },
      { text: "sensitization", correct: false },
      { text: "tachyphylaxis", correct: false },
      { text: "idiosyncrasy", correct: false },
    ],
  },
  {
    question: "Which of the following refers to side effects of drugs?",
    answers: [
      { text: "mutagenic", correct: true },
      { text: "reflex action", correct: false },
      { text: "local action", correct: false },
      { text: "central action", correct: false },
      { text: "resorptive action", correct: false },
    ],
  },
  {
    question: "What does the term \"potentiation\" mean?",
    answers: [
      { text: "the ability of the drug to accumulate", correct: false },
      { text: "hypersensitivity to the drug", correct: false },
      { text: "rapid addiction to the drug", correct: false },
      { text: "a sharp increase in the effects of drugs when used together", correct: true },
      { text: "a sharp decrease in the effects of drugs when used together", correct: false },
    ],
  },
  {
    question: "The pharmacodynamic interaction of drugs is understood as:",
    answers: [
      { text: "interaction at various stages of the movement of the drug in the body", correct: false },
      { text: "interaction at the stage of interaction of the drug with receptors", correct: true },
      { text: "any interaction of drugs", correct: false },
      { text: "interaction of drugs before administration into the body", correct: false },
      { text: "interaction of drugs after excretion from the body", correct: false },
    ],
  },
  {
    question: "What phenomenon can occur with combined drug use?",
    answers: [
      { text: "idiosyncrasy", correct: false },
      { text: "functional cumulation;", correct: false },
      { text: "addiction;", correct: false },
      { text: "material cumulation", correct: false },
      { text: "synergy.", correct: true },
    ],
  },
  {
    question: "A 65-year-old woman, admitted to the hospital with a myocardial infarction, developed a ventricular tachicardia and received an IV injection of lidocaine. The cardiologist knew that the dose given must be within the range of doses that have a high probability of therapeutic success. Which of the following terms best defines this range?",
    answers: [
      { text: "Intrinsic activity", correct: false },
      { text: "Potency", correct: false },
      { text: "Therapeutic window", correct: true },
      { text: "Efficacy", correct: false },
      { text: "Therapeutic index", correct: false },
    ],
  },
  {
    question: "56-year-old woman complained to her physician that the sedative effect of the drug she was taking had increased substantially. The woman was used to take a diazepam tablet daily to allay her nervousness and anxiety. Few day ago she started taking cimetidine because of an annoying heartburn. Cimetidine is an inhibitor of the cytochrome p450 system in the liver. Which of the following terms best defines this cimetidine diazepam interaction?",
    answers: [
      { text: "Additive effect", correct: false },
      { text: "Potentiation", correct: true },
      { text: "Synergism", correct: false },
      { text: "Sensitization", correct: false },
      { text: "Reverse tolerance", correct: false },
    ],
  },
  {
    question: "A 55-year-old man has been recently diagnosed with a gastric ulcer and an appropriate therapy has been prescribed. The therapy includes antacids 'as needed', in order to antagonize the effects of the hydrochloric acid secreted by gastric parietal cells. Which of the following terms best defines this acid-antacid antagonism?",
    answers: [
      { text: "Competitive", correct: false },
      { text: "Functional", correct: false },
      { text: "Pharmacokinetic", correct: false },
      { text: "Irreversible", correct: false },
      { text: "Chemical", correct: true },
    ],
  },
  {
    question: "A 3-year-old boy was admitted to the emergency room after e generalized tonic colonic seizure. His mother reported that the boy apparently ingested several tablets of propranolol (a beta-blocking drug) found in his father drawer. The boy received an IM injection of glucagon, a hormone that can bind to glucagon receptors in the heart, so causing a significant increase in heart contractility. In this way It can counteract the decrease in heart contractility brought about by a toxic dose of a beta-blocker. Which of the following terms best defines the antagonism between glucagon and beta-blockers?",
    answers: [
      { text: "Chemical", correct: false },
      { text: "Competitive", correct: false },
      { text: "Functional", correct: true },
      { text: "Pharmacokinetic", correct: false },
      { text: "Pharmacological", correct: false },
    ],
  },
  {
    question: ". Mark an example of pharmacodynamic incompatibility drugs in their combined use:",
    answers: [
      { text: "papaverine hydrochloride, when mixed in one syringe with digitalis preparations, forms a precipitate;", correct: false },
      { text: "furosemide shortens and weakens the action of many drugs, contributing to their excretion;", correct: false },
      { text: "iron sulfate forms insoluble complexes with tetracyclines, which makes their absorption difficult;", correct: false },
      { text: "phenobarbital weakens the action of neodicoumarin by inducing microsomal liver enzymes;", correct: false },
      { text: "atropine weakens the effect of M-cholinomimetic pilocarpine on smooth muscles by blocking M-cholinergic receptors.", correct: true },
    ],
  },
  {
    question: "What is the term for the action of drugs during pregnancy, which leads to congenital malformations?",
    answers: [
      { text: "mutagenic;", correct: false },
      { text: "carcinogenic", correct: false },
      { text: "teratogenic", correct: true },
      { text: "embryotoxic", correct: false },
      { text: "fetotoxic.", correct: false },
    ],
  },
  {
    question: "What does the term substitution pharmacotherapy mean?",
    answers: [
      { text: "pharmacotherapy aimed at eliminating the symptoms of the disease;", correct: false },
      { text: "pharmacotherapy aimed at preventing the disease", correct: false },
      { text: "pharmacotherapy aimed at eliminating the cause of the disease;", correct: false },
      { text: "pharmacotherapy aimed at the mechanisms of development (pathogenesis) diseases;", correct: false },
      { text: "pharmacotherapy aimed at compensating for the deficiency of biologically active substances in the body", correct: true },
    ],
  },
  {
    question: "With repeated use of ephedrine 20 minutes after the first injection, the level of blood pressure increased slightly. What is this situation an example of?",
    answers: [
      { text: "idiosyncrasy", correct: false },
      { text: "tolerance", correct: false },
      { text: "cumulation", correct: false },
      { text: "tachyphylaxis", correct: true },
      { text: "presystemic elimination.", correct: false },
    ],
  },
  {
    question: "What phenomenon can occur with repeated injections drugs?",
    answers: [
      { text: "habituation", correct: true },
      { text: "idiosyncrasy", correct: false },
      { text: "summation", correct: false },
      { text: "potentiation", correct: false },
      { text: "synergy.", correct: false },
    ],
  },
  {
    question: "What type of action of medicines belongs to, almost completely stopping the functioning of the body?",
    answers: [
      { text: "tonic;", correct: false },
      { text: "stimulating;", correct: false },
      { text: "sedative;", correct: false },
      { text: "oppressive", correct: false },
      { text: "paralyzing.", correct: true },
    ],
  },
  {
    question: "What type of action of medicines belongs to, activating mental and muscular activity both in normal and and in pathology?",
    answers: [
      { text: "tonic", correct: false },
      { text: "stimulating;", correct: true },
      { text: "sedative", correct: false },
      { text: "oppressive;", correct: false },
      { text: "paralyzing.", correct: false },
    ],
  },
  {
    question: ". What type of action of medicines belongs to, restoring the activity of the central nervous system in diseases accompanied by mental and motor excitation?",
    answers: [
      { text: "tonic;", correct: false },
      { text: "stimulating", correct: false },
      { text: "sedative;", correct: true },
      { text: "oppressive;", correct: false },
      { text: "paralyzing", correct: false },
    ],
  },
  {
    question: "In what cases is additive synergy observed?",
    answers: [
      { text: "the total effect is greater than the sum of the effects of each components", correct: false },
      { text: "simple addition of the effects of each of the components", correct: true },
      { text: "the total effect is less than the sum of the effects of each of the components", correct: false },
      { text: "the overall effect is equal to the effect of one of the substances", correct: false },
      { text: "inhibition of the effect of the second drug due to the use of the first drug", correct: false },
    ],
  },
  {
    question: "With the simultaneous use of alcohol during isoniazid therapy:",
    answers: [
      { text: "hepatotoxicity increases", correct: true },
      { text: "hepatotoxicity decreases", correct: false },
      { text: "the clinical efficacy of isoniazid decreases", correct: false },
      { text: "the effect of alcohol decreases", correct: false },
      { text: "the cardiotoxic effect of alcohol increases", correct: false },
    ],
  },
  {
    question: "Why should care be taken when prescribing warfarin and amiodarone in combination?",
    answers: [
      { text: "Amiodarone and warfarin both have an anticoagulant effect", correct: false },
      { text: "Amiodarone may reverse the anticoagulant effect of warfarin", correct: false },
      { text: "Amiodarone may increase the anticoagulant effect of warfarin", correct: true },
      { text: "Warfarin may reverse the antiarrhythmic effect of amiodarone", correct: false },
      { text: "Warfarin may increase the antiarrythmic effect of amiodarone", correct: false },
    ],
  },
  {
    question: "Which of the following combination of drugs may  increased bronchial resistance?",
    answers: [
      { text: "Dyphylline/Nadolol", correct: true },
      { text: "Aminophylline/ Thiabendazole", correct: false },
      { text: "Oral hypoglycemics/ Phenytoin", correct: false },
      { text: "Dyphylline/ Thiabendazole", correct: false },
      { text: "Tolbutamide/ Diazoxide", correct: false },
    ],
  },
  {
    question: "Which of the following combination of drugs may cause nausea, lethargy, general malaise?",
    answers: [
      { text: "Dyphylline/Nadolol", correct: false },
      { text: "Aminophylline/ Thiabendazole", correct: true },
      { text: "Oral hypoglycemics/ Phenytoin", correct: false },
      { text: "Dyphylline/ Thiabendazole", correct: false },
      { text: "Tolbutamide/ Diazoxide", correct: false },
    ],
  },
  {
    question: "Which one of the following action may happen in combination of the drugs tobramycin and penicillin-G?",
    answers: [
      { text: "Induction of metabolism", correct: false },
      { text: "Added nephrotoxicity", correct: false },
      { text: "Inhibition of tubular secretion.", correct: false },
      { text: "Accumulation of acetaldehyde", correct: false },
      { text: "Formation of amide linkage", correct: true },
    ],
  },
  {
    question: "Which one of the following action may happen in combination of the drugs Acyclovir and Sulfenpyrazone?",
    answers: [
      { text: "Induction of metabolism", correct: false },
      { text: "Added nephrotoxicity", correct: false },
      { text: "Inhibition of tubular secretion.", correct: true },
      { text: "Accumulation of acetaldehyde", correct: false },
      { text: "Formation of amide linkage", correct: false },
    ],
  },
  {
    question: "Which one of the following action may happen in combination of the drugs Cefamandol and Ethyl alcohol?",
    answers: [
      { text: "Induction of metabolism", correct: false },
      { text: "Added nephrotoxicity", correct: false },
      { text: "Inhibition of tubular secretion.", correct: false },
      { text: "Accumulation of acetaldehyde", correct: true },
      { text: "Formation of amide linkage", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs combination may cause blood dyscrasias and sedation?",
    answers: [
      { text: "Rifampin/Oral contraceptives", correct: false },
      { text: "Vidarabine/ Allopurinol", correct: false },
      { text: "Chloramphenicol/ Hexobarbital", correct: true },
      { text: "Moxalactam/ Ethyl alcohol", correct: false },
      { text: "Acyclovir/ Probenicid", correct: false },
    ],
  },
  {
    question: "If the effect of combination of two drugs is equal to the sum of their individual effects, the two drugs are exhibiting:",
    answers: [
      { text: "Potentiation", correct: false },
      { text: "Synergism", correct: true },
      { text: "Cross tolerance", correct: false },
      { text: "Antagonism", correct: false },
      { text: "Tolerance", correct: false },
    ],
  },
  {
    question: "The most vulnerable period of pregnancy for the causation of foetal malformations due to drug is:",
    answers: [
      { text: "18-55 days of gestation", correct: true },
      { text: "56-84 days of gestation", correct: false },
      { text: "Second trimester", correct: false },
      { text: "36 weeks onwards", correct: false },
      { text: "Third trimester", correct: false },
    ],
  },
  {
    question: "Indiosyncrasy is:",
    answers: [
      { text: "A genetically determined abnormal reaction drugs", correct: true },
      { text: "A characteristic toxic effects at therapeutic doses", correct: false },
      { text: "An altered physiological state produced by repeated drugs use", correct: false },
      { text: "An immunologic ally mediated reaction", correct: false },
      { text: "Hypersensitivity reactions", correct: false },
    ],
  },
  {
    question: "Which of the following is an absorption interaction?",
    answers: [
      { text: "Alteration of protein drug binding", correct: false },
      { text: "Enzyme inhibitors", correct: false },
      { text: "Alteration in GI microflora", correct: true },
      { text: "Forced dieresis", correct: false },
      { text: "Becomes either ineffective or toxic", correct: false },
    ],
  },
  {
    question: "Alcohol enhances the analgesic activity of aspirin on account of",
    answers: [
      { text: "Absorption", correct: false },
      { text: "Distribution", correct: false },
      { text: "Summation", correct: false },
      { text: "Synergism", correct: true },
      { text: "Antagonism", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of pharmacodynamics drug interaction?",
    answers: [
      { text: "Insulin/Cortison", correct: true },
      { text: "Gentamicin/Ticarcillin", correct: false },
      { text: "Streptomycin/Cephalothin", correct: false },
      { text: "Oxtriphylline/Propranolol", correct: false },
      { text: "Chlorpropamide/Cimetidin", correct: false },
    ],
  },
  {
    question: "Which one of the following action may happen in combination of the drugs Amikacin and cephalosporines?",
    answers: [
      { text: "Formation of amide linkage", correct: false },
      { text: "Accumulation of acetaldehyde", correct: false },
      { text: "Inhibition of tubular secretion", correct: false },
      { text: "Induction of metabolism", correct: false },
      { text: "Added nephrotoxicity", correct: true },
    ],
  },
  {
    question: "Which one of the following action may happen in combination of the drugs Isoniazid and Rifampin?",
    answers: [
      { text: "Added nephrotoxicity", correct: false },
      { text: "Induction of metabolism", correct: true },
      { text: "Inhibition of tubular secretion", correct: false },
      { text: "Accumulation of acetaldehyde", correct: false },
      { text: "Formation of amide linkage", correct: false },
    ],
  },
  {
    question: "What receptors are located in the sympathetic nervous system?",
    answers: [
      { text: "A1", correct: false },
      { text: "A2", correct: false },
      { text: "B1", correct: false },
      { text: "B2", correct: false },
      { text: "M", correct: true },
    ],
  },
  {
    question: "Which of the following is correct regarding the autonomic nervous system?",
    answers: [
      { text: "Afferent neurons carry signals from the CNS to the effector organs", correct: false },
      { text: "The neurotransmitter at the parasympathetic ganglion is norepinephrine", correct: false },
      { text: "The neurotransmitter at the sympathetic ganglion is acetylcholine", correct: true },
      { text: "Sympathetic neurons release acetylcholine in the effector organs", correct: false },
      { text: "Parasympathetic neurons release norepinephrine in the effector organs", correct: false },
    ],
  },
  {
    question: "In Alzheimer’s disease, there is a deficiency of cholinergic neuronal function in the brain. Theoretically, which of the following strategies will be useful in treating the symptoms of Alzheimer’s disease?",
    answers: [
      { text: "Inhibiting cholinergic receptors in the brain", correct: false },
      { text: "Inhibiting the release of acetylcholine in the brain", correct: false },
      { text: "Inhibiting the acetylcholinesterase enzyme in the brain", correct: true },
      { text: "Activating the acetylcholinesterase enzyme in the brain", correct: false },
      { text: "Reduce an acetylcholine", correct: false },
    ],
  },
  {
    question: "Which of the following drugs or classes of drugs will be useful in treating the symptoms of myasthenia gravis?",
    answers: [
      { text: "Nicotinic antagonist", correct: false },
      { text: "Muscarinic agonist", correct: false },
      { text: "Muscarinic antagonist", correct: false },
      { text: "Anticholinesterase agents", correct: true },
      { text: "Adrenergic agonist", correct: false },
    ],
  },
  {
    question: "A human who lives in village was brought to the hospital. She ate plant Atropa Belladonna. It is a plant that contains atropine. Which of the following drugs or classes of drugs will be useful to treating poisoning with belladonna?",
    answers: [
      { text: "Malathion", correct: false },
      { text: "Physostigmine", correct: true },
      { text: "Muscarinic antagonist", correct: false },
      { text: "Nicotinic antagonist", correct: false },
      { text: "Atenolol", correct: false },
    ],
  },
  {
    question: "Which of the following statements is correct regarding the sympathetic and parasympathetic systems?",
    answers: [
      { text: "Acetylcholine activates muscarinic receptors", correct: true },
      { text: "Acetylcholine activates adrenergic receptors", correct: false },
      { text: "Norepinephrine activates muscarinic receptors", correct: false },
      { text: "Activation of the sympathetic system causes a drop in blood pressure", correct: false },
      { text: "Acetylcholine block adrenergic receptors", correct: false },
    ],
  },
  {
    question: "Which of the following is a systemic effect of a muscarinic agonist?",
    answers: [
      { text: "Reduced heart rate", correct: true },
      { text: "Increased blood pressure", correct: false },
      { text: "Mydriasis", correct: false },
      { text: "Reduced urinary frequency", correct: false },
      { text: "Constipation", correct: false },
    ],
  },
  {
    question: "In humans, the release  of acetylcholine is responsible for which of the following postganglionic sympathetic responses?",
    answers: [
      { text: "Activation of sweat glands", correct: true },
      { text: "Constriction of cutaneous blood vessels", correct: false },
      { text: "Contraction of piloerector muscles", correct: false },
      { text: "Decreased gastrointestinal motility", correct: false },
      { text: "Increased ventricular contractility", correct: false },
    ],
  },
  {
    question: "Acetylcholine (Ach) is…",
    answers: [
      { text: "neurotransmitter", correct: true },
      { text: "enzyme", correct: false },
      { text: "protein", correct: false },
      { text: "receptor", correct: false },
      { text: "ion", correct: false },
    ],
  },
  {
    question: "Modest improvement in the memory of patients with Alzheimer’s disease may occur with drugs that increase transmission at which of the following receptors?",
    answers: [
      { text: "Adrenergic", correct: false },
      { text: "Cholinergic", correct: true },
      { text: "Dopaminergic", correct: false },
      { text: "Gabaergic", correct: false },
      { text: "Serotonergic", correct: false },
    ],
  },
  {
    question: "Which one 0f the following is characteristic of parasympathetic stimulation?",
    answers: [
      { text: "Decrease in intestinal motility", correct: false },
      { text: "Inhibition of bronchial secretion", correct: false },
      { text: "Contraction of sphincter muscle in the iris of the eye", correct: true },
      { text: "Contraction of sphincter of urinary bladder", correct: false },
      { text: "increase in heart rate", correct: false },
    ],
  },
  {
    question: "A 65-year-old man with the diagnosis of Alzheimer's disease is being treated with donepezil. This drug acts by",
    answers: [
      { text: "Blocking the release of ACh.", correct: false },
      { text: "Inhibiting AChE.", correct: true },
      { text: "Blocking the reuptake of norepinephrine.", correct: false },
      { text: "Stimulating the release of ACh.", correct: false },
      { text: "Inhibiting monamine oxidase.", correct: false },
    ],
  },
  {
    question: "Which one of the following is characteristic of parasympathetic stimulation?",
    answers: [
      { text: "Decrease in intestinal motility", correct: false },
      { text: "Inhibition of bronchial secretion", correct: false },
      { text: "Cause miosis of the eye", correct: true },
      { text: "Contraction of sphincter of urinary bladder", correct: false },
      { text: "Increase in heart rate", correct: false },
    ],
  },
  {
    question: "Which of the following is characteristic of pilocarpine?",
    answers: [
      { text: "Is used to lower intraocular pressure in glaucoma", correct: true },
      { text: "Is cleaved by acetylcholinesterase", correct: false },
      { text: "Selectively binds to nicotinic receptors", correct: false },
      { text: "Inhibits secretions such as sweat, tears", correct: false },
      { text: "Cannot enter the brain", correct: false },
    ],
  },
  {
    question: "Which of the following is characteristic of neostigmine?",
    answers: [
      { text: "Is contraindicated in glaucoma", correct: false },
      { text: "Has a short duration of action", correct: false },
      { text: "Decrease the acetylcholine concentration", correct: false },
      { text: "May result in bowel hypermotility, salivation", correct: true },
      { text: "Exacerbates tubocurarine poisoning", correct: false },
    ],
  },
  {
    question: "Diagnosis of Myasthenia Gravis is by using:",
    answers: [
      { text: "Edrophonium", correct: true },
      { text: "Neostigmine", correct: false },
      { text: "Succinylcholine", correct: false },
      { text: "Atropine", correct: false },
      { text: "Pyridostigmine", correct: false },
    ],
  },
  {
    question: "The patient mentions bethanechol when asked about his medication history. The nurse recognizes that this drug is used for the treatment of which condition?",
    answers: [
      { text: "Bladder spasms", correct: false },
      { text: "Diarrhea", correct: false },
      { text: "Glaucoma", correct: false },
      { text: "Urinary retention", correct: true },
      { text: "Urinary incontinence", correct: false },
    ],
  },
  {
    question: "When caring for a patient with a diagnosis of myasthenia gravis, the nurse can expect to see which drug ordered for the symptomatic treatment?",
    answers: [
      { text: "Pyridostigmine", correct: true },
      { text: "Donepezil", correct: false },
      { text: "Bethanechol", correct: false },
      { text: "Carbachol", correct: false },
      { text: "Tacrine", correct: false },
    ],
  },
  {
    question: "The patient took an accidental overdose of a cholinergic drugs while at home.He comes to the emergency department with severe abdominal cramping and bloody diarrhea.The nurse expects that which drug will be used to treat this patients?",
    answers: [
      { text: "Atropine", correct: true },
      { text: "Phentolamine", correct: false },
      { text: "Physostigmine", correct: false },
      { text: "Bethanechol", correct: false },
      { text: "Carbachol", correct: false },
    ],
  },
  {
    question: "Which drugs is a selective M1 blocker?",
    answers: [
      { text: "Atropine", correct: false },
      { text: "Scopolamine", correct: false },
      { text: "Pirenzepine", correct: true },
      { text: "Homatropine", correct: false },
      { text: "Epinephrine", correct: false },
    ],
  },
  {
    question: "Indicate the skeletal muscle relaxants, which is a depolarizing agent:",
    answers: [
      { text: "Vecuronium", correct: false },
      { text: "Scopolamine", correct: false },
      { text: "Succinylcholine", correct: true },
      { text: "Hexamethonium", correct: false },
      { text: "Atropine", correct: false },
    ],
  },
  {
    question: "Atropine and  scopolamine work by blocking what receptor(s) in the parasympathetic nervous system?",
    answers: [
      { text: "Nicotinic receptors only", correct: false },
      { text: "Muscarinic and nicotinic receptors", correct: false },
      { text: "Muscarinic receptors only", correct: true },
      { text: "Adrenergic receptors to allow cholinergic receptors to dominate", correct: false },
      { text: "Cholinergic receptors", correct: false },
    ],
  },
  {
    question: "Direct cardiac effects of dobutamine would be blocked by which of the following agents?",
    answers: [
      { text: "Atropine", correct: true },
      { text: "Metoprolol", correct: false },
      { text: "Clonidine", correct: false },
      { text: "Isoproterenol", correct: false },
      { text: "Furosemide", correct: false },
    ],
  },
  {
    question: "The skeletal muscles that are most sensitive to the action of tubocurarine are ?",
    answers: [
      { text: "Muscles of the trunk", correct: false },
      { text: "Muscles of the arms and legs", correct: false },
      { text: "Respiratory muscles", correct: false },
      { text: "Muscles of the head, neck, and face", correct: true },
      { text: "Abdominal muscles", correct: false },
    ],
  },
  {
    question: "Depolarizing drug…",
    answers: [
      { text: "Rocuronium", correct: false },
      { text: "Succinylcholine", correct: true },
      { text: "Diazepam", correct: false },
      { text: "Atropine", correct: false },
      { text: "benzodiazepine", correct: false },
    ],
  },
  {
    question: "Nondepolarizing drug…",
    answers: [
      { text: "Succinylcholine", correct: false },
      { text: "Atropine", correct: false },
      { text: "Neostigmine", correct: true },
      { text: "Pancuronium", correct: false },
      { text: "epinephrine", correct: false },
    ],
  },
  {
    question: "Classification of nmbs…",
    answers: [
      { text: "Selective – nonselective", correct: false },
      { text: "Depolarizing-nondepolarizing", correct: true },
      { text: "Directly-indirectly", correct: false },
      { text: "Nicotinic-muscorinic receptor drugs", correct: false },
      { text: "agonist-antogonist", correct: false },
    ],
  },
  {
    question: "Adverse effect of Succinylcholine…",
    answers: [
      { text: "hyperthermia", correct: true },
      { text: "headache", correct: false },
      { text: "dryness", correct: false },
      { text: "insomnia", correct: false },
      { text: "stomachache", correct: false },
    ],
  },
  {
    question: "Indicate the mechanism of action of atropine.",
    answers: [
      { text: "inhibits monoamine oxidase (MAO)", correct: false },
      { text: "inhibits cholinesterase", correct: false },
      { text: "blocks the reverse neuronal uptake of the mediator", correct: false },
      { text: "blocks M-cholinergic receptors", correct: true },
      { text: "initiates α-adrenergic receptors", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs would be useful in the long term treatment of myasthenia gravis?",
    answers: [
      { text: "Edrophonium", correct: false },
      { text: "Atropine", correct: false },
      { text: "Neostigmine", correct: true },
      { text: "Scopolamine", correct: false },
      { text: "Bethanechol", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs most closely resembles atropine in its pharmacologic actions?",
    answers: [
      { text: "Scopolamine", correct: true },
      { text: "Trimethaphan", correct: false },
      { text: "Physostigmine", correct: false },
      { text: "Acetylcholine", correct: false },
      { text: "Carbachol", correct: false },
    ],
  },
  {
    question: "Which one of the following drug depolarizes neuromuscular end-plate?",
    answers: [
      { text: "Scopolamine", correct: false },
      { text: "Ipratropium", correct: false },
      { text: "Succinylcholine", correct: true },
      { text: "Tubocurarine", correct: false },
      { text: "Neostigmine", correct: false },
    ],
  },
  {
    question: "Which of the following effect may cause drug Ipratropium?",
    answers: [
      { text: "Depolarizing neuromuscular end plate", correct: false },
      { text: "May cause the release of histamine", correct: false },
      { text: "Used as adjunctive therapy in treating asthma", correct: true },
      { text: "Degraded spontaneously in the plasma", correct: false },
      { text: "Acts at peripheral and central muscarinic cholinergic receptors", correct: false },
    ],
  },
  {
    question: "Which of the following drug may causes the longest dilation of the pupils?",
    answers: [
      { text: "scopolamine", correct: false },
      { text: "ephedrine", correct: false },
      { text: "platyfillin", correct: false },
      { text: "atropine", correct: true },
      { text: "adrenaline", correct: false },
    ],
  },
  {
    question: "Which of the following is mechanism of action of tubocurarine?",
    answers: [
      { text: "excites M-cholinergic receptors", correct: false },
      { text: "blocks M-cholinergic receptors", correct: false },
      { text: "initiates N-cholinergic receptors", correct: false },
      { text: "blocks N-cholinergic receptors of skeletal muscles", correct: true },
      { text: "blocks α-adrenergic receptors", correct: false },
    ],
  },
  {
    question: "Indicate the antagonist of tubacurarina by the effect on neuromuscular transmission.",
    answers: [
      { text: "anaprilin", correct: false },
      { text: "atropine", correct: false },
      { text: "phentolamine", correct: false },
      { text: "neostigmine", correct: true },
      { text: "ditilin", correct: false },
    ],
  },
  {
    question: "Ganglion blockers block:",
    answers: [
      { text: "α-adrenergic receptors", correct: false },
      { text: "β-adrenergic receptors", correct: false },
      { text: "N-cholinergic receptors", correct: true },
      { text: "μ-opioid receptors", correct: false },
      { text: "H2-histamine receptors", correct: false },
    ],
  },
  {
    question: "What is the symptom of an overdose of M-anticholinergic blocker?",
    answers: [
      { text: "bradycardia", correct: false },
      { text: "bronchospasm", correct: false },
      { text: "constriction of the pupil", correct: false },
      { text: "difficulty in arbitrary urination", correct: true },
      { text: "involuntary defecation", correct: false },
    ],
  },
  {
    question: "Which is the most important drug in the treatment of organophosphate poisoning:",
    answers: [
      { text: "Atropine sulfate", correct: true },
      { text: "Pralidoxime", correct: false },
      { text: "Diazepam", correct: false },
      { text: "Adrenaline", correct: false },
      { text: "Scopolamine", correct: false },
    ],
  },
  {
    question: "Which of the following effect may cause drug Scopolamine?",
    answers: [
      { text: "Depolarizing neuromuscular end plate", correct: false },
      { text: "May cause the release of histamine", correct: false },
      { text: "Used as adjunctive therapy in treating asthma", correct: false },
      { text: "Degraded spontaneously in the plasma", correct: false },
      { text: "Acts at peripheral and central muscarinic cholinergic receptors", correct: true },
    ],
  },
  {
    question: "Which of the following effect may cause drug tubocurarine?",
    answers: [
      { text: "Depolarizing neuromuscular end plate", correct: false },
      { text: "May cause the release of histamine", correct: true },
      { text: "Used as adjunctive therapy in treating asthma", correct: false },
      { text: "Degraded spontaneously in the plasma", correct: false },
      { text: "Acts at peripheral and central muscarinic cholinergic receptors", correct: false },
    ],
  },
  {
    question: "Which of the following drug degraded spontaneously in the plasma?",
    answers: [
      { text: "Atracurium", correct: true },
      { text: "Succinylcholine", correct: false },
      { text: "Scopolamine", correct: false },
      { text: "Tubocurarine", correct: false },
      { text: "Ipratropium", correct: false },
    ],
  },
  {
    question: "Which of the following drug used as adjunctive therapy in treating asthma?",
    answers: [
      { text: "Neostigmine", correct: false },
      { text: "Atropine", correct: false },
      { text: "Atracurium", correct: false },
      { text: "Ipratropium", correct: true },
      { text: "Scopolamine", correct: false },
    ],
  },
  {
    question: "Which of the following drug acts at peripheral and central muscarinic cholinergic receptors?",
    answers: [
      { text: "Ipratropium", correct: false },
      { text: "Neostigmine", correct: false },
      { text: "Atracurium", correct: false },
      { text: "Tubocurarine", correct: false },
      { text: "Scopolamine", correct: true },
    ],
  },
  {
    question: "Which of the following drug may cause the release of histamine?",
    answers: [
      { text: "Neostigmine", correct: false },
      { text: "Tubocurarine", correct: true },
      { text: "Scopolamine", correct: false },
      { text: "Ipratropium", correct: false },
      { text: "Atracurium", correct: false },
    ],
  },
  {
    question: "Which of the following drug reverses the effects of nondepolarizing blockers,such as tubocurarine?",
    answers: [
      { text: "Succinylcholine", correct: false },
      { text: "Neostigmine", correct: true },
      { text: "Scopolamine", correct: false },
      { text: "Ipratropium", correct: false },
      { text: "Atracurium", correct: false },
    ],
  },
  {
    question: "Which of the following is correct regarding malignant hyperthermia?",
    answers: [
      { text: "It is triggered by dantrolene", correct: false },
      { text: "It is triggered by local anesthetics", correct: false },
      { text: "It is generally mild and clinically insignificant", correct: false },
      { text: "It has no familial component", correct: false },
      { text: "It involves increased skeletal muscle oxidative metabolism", correct: true },
    ],
  },
  {
    question: "Botulinum toxin blocks the release of acetylcholine from cholinergic nerve terminals. Which of the following is a possible effect of botulinum toxin?",
    answers: [
      { text: "Skeletal muscle paralysis", correct: true },
      { text: "Improvement of myasthenia gravis symptoms", correct: false },
      { text: "Increased salivation", correct: false },
      { text: "Reduced heart rate", correct: false },
      { text: "Reduce blood pressure", correct: false },
    ],
  },
  {
    question: "Which of the following changes could theoretically happen in a person when the parasympathetic system is inhibited using a pharmacological agent?",
    answers: [
      { text: "Reduction in heart rate", correct: false },
      { text: "Constriction of the pupil (miosis)", correct: false },
      { text: "Increase in gastric motility", correct: false },
      { text: "Dry mouth (xerostomia)", correct: true },
      { text: "Contraction of detrusor muscle in the bladder", correct: false },
    ],
  },
  {
    question: "A dentist would like to reduce salivation in a patient in preparation for an oral surgical procedure. Which of the following strategies will be useful in reducing salivation?",
    answers: [
      { text: "Activate nicotinic receptors in the salivary glands", correct: false },
      { text: "Block nicotinic receptors in the salivary glands", correct: false },
      { text: "Activate muscarinic receptors in the salivary glands", correct: false },
      { text: "Block muscarinic receptors in the salivary glands", correct: true },
      { text: "Activate nicotinic receptors in the salivary glands", correct: false },
    ],
  },
  {
    question: "If an ophthalmologist wants to dilate the pupils for an eye examination, which of the following classes of drugs could be theoretically useful?",
    answers: [
      { text: "Muscarinic receptor activator", correct: false },
      { text: "Muscarinic receptor inhibitor", correct: true },
      { text: "Adrenergic agonist", correct: false },
      { text: "Adrenergic antagonist", correct: false },
      { text: "Ganglion-blocking drugs", correct: false },
    ],
  },
  {
    question: "Head and neck irradiation in cancer patients can decrease salivary secretion and cause dry mouth. All of the following drugs or classes of drugs are theoretically useful in improving secretion of saliva in these patients except:",
    answers: [
      { text: "Muscarinic antagonist", correct: true },
      { text: "Muscarinic agonist", correct: false },
      { text: "Anticholinesterase agents", correct: false },
      { text: "Pilocarpine", correct: false },
      { text: "Neostigmine", correct: false },
    ],
  },
  {
    question: "During an ophthalmic surgical procedure, the surgeon wanted to constrict the pupil of the patient using a miotic drug. However, he accidentally used another drug that caused dilation of the pupil instead. Most likely, which of the following drugs did he use?",
    answers: [
      { text: "Acetylcholine", correct: false },
      { text: "Pilocarpine", correct: false },
      { text: "Tropicamide", correct: true },
      { text: "Phentolamine", correct: false },
      { text: "Bethanechol", correct: false },
    ],
  },
  {
    question: "A patient with chronic obstructive pulmonary disease was prescribed a b2 agonist for the relief of bronchospasm. However, the patient did not respond to this treatment. Which of the following drugs or classes of drugs would you suggest for this patient as the next option?",
    answers: [
      { text: "B1 agonist", correct: false },
      { text: "Muscarinic agonist", correct: false },
      { text: "Physostigmine", correct: false },
      { text: "Ipratropium", correct: true },
      { text: "Phentolamine", correct: false },
    ],
  },
  {
    question: "A patient was administered a neuromuscular blocker prior to a surgical procedure to produce skeletal muscle paralysis. This NMB drug effected small, rapidly contracting muscles of the face and eyes first and diaphragm muscle last. The effect of this drug was easily reversed with neostigmine. Which of the following NMB was most likely administered to this patient?",
    answers: [
      { text: "Rocuronium", correct: true },
      { text: "Succinylcholine", correct: false },
      { text: "Diazepam", correct: false },
      { text: "Tubocurarine", correct: false },
      { text: "Ephedrine", correct: false },
    ],
  },
  {
    question: "A patient was administered a NMB prior to a surgical procedure to produce skeletal muscles paralysis.  This NMB drug caused initial skeletal muscle fasciculations before the onset of paralysis. The effect of this drug could not be reversed with neostigmine. Which of the following NMB was most likely administered to this patient?",
    answers: [
      { text: "Cisatracurium", correct: false },
      { text: "Succinylcholine", correct: true },
      { text: "Diazepam", correct: false },
      { text: "Tubocurarine", correct: false },
      { text: "Norepinephrine", correct: false },
    ],
  },
  {
    question: "A 50-year old male farm worker is brought to the emergency room. He was found confused in the orchard and since then has lost consciousness. His heart rate is 45 and his BP is 80/40 mm Hg.He is sweating and salivating profusely.Which of the following treatment is indicated?",
    answers: [
      { text: "Physostigmine", correct: false },
      { text: "Norepinephrine", correct: false },
      { text: "Trimethaphan", correct: false },
      { text: "Atropine", correct: true },
      { text: "Edrophonium", correct: false },
    ],
  },
  {
    question: "A 35-year-old man has ingested Amanita muscaria mushrooms. He is experiencing a heart rate of 40 beats per minute. This bradycardia is most likely due to an interaction of the chemical(s) in the mushrooms with which receptors at the sinoatrial node?",
    answers: [
      { text: "β2 Adrenergic", correct: false },
      { text: "α1 Adrenergic", correct: false },
      { text: "Nicotinic", correct: false },
      { text: "M2 muscarinic", correct: true },
      { text: "β1 Adrenergic", correct: false },
    ],
  },
  {
    question: "A 54-year-old woman is receiving Botox injections to remove facial wrinkles. Botox (botulinum toxin) acts by",
    answers: [
      { text: "Stimulating the release of norepinephrine.", correct: false },
      { text: "Blocking the release of ACh.", correct: true },
      { text: "Blocking muscarinic receptors.", correct: false },
      { text: "Blocking the release of norepinephrine.", correct: false },
      { text: "Stimulating the release of ACh.", correct: false },
    ],
  },
  {
    question: "The skeletal muscle relaxant with the longest duration of action is:",
    answers: [
      { text: "Suxamethonium", correct: false },
      { text: "Mivacurium", correct: false },
      { text: "Pancuronium", correct: true },
      { text: "Rocuronium", correct: false },
      { text: "Vecuronium", correct: false },
    ],
  },
  {
    question: "Which of the following may cause drug atropine?",
    answers: [
      { text: "Decreased cardiac output", correct: true },
      { text: "Heart block", correct: false },
      { text: "Hypertension", correct: false },
      { text: "Miosis", correct: false },
      { text: "Sweating", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs most closely resembles atropine in its pharmacologic actions?",
    answers: [
      { text: "Scopolamine", correct: true },
      { text: "Trimethaphan", correct: false },
      { text: "Physostigmine", correct: false },
      { text: "Acetylcholine", correct: false },
      { text: "Carbachol", correct: false },
    ],
  },
  {
    question: "Which one of the following muscle relaxant has the maximum duration of action?",
    answers: [
      { text: "Atracurium", correct: false },
      { text: "Vecuronium", correct: false },
      { text: "Rocuronium", correct: false },
      { text: "Doxacurium", correct: true },
      { text: "succinylcholine", correct: false },
    ],
  },
  {
    question: "A 3 year old child has been admitted to emergency with suspicious of atropine overdose as there are:",
    answers: [
      { text: "Abdominal cramps", correct: false },
      { text: "Increased gastric secretion", correct: false },
      { text: "Increased cardiac rate", correct: true },
      { text: "Papillary constriction", correct: false },
      { text: "Increased urinary frequency", correct: false },
    ],
  },
  {
    question: "Characteristics of non-depolarizing neuromuscular blockade include which of the following?",
    answers: [
      { text: "Block of post-tetanic potentiation", correct: false },
      { text: "Histamine blocking action", correct: false },
      { text: "Poorly sustained tetanic tension", correct: true },
      { text: "Significant muscle fasciculations during onset of block", correct: false },
      { text: "Stimulation of autonomic ganglia", correct: false },
    ],
  },
  {
    question: "Which of the following drugs given preoperatively is used to prevent postoperative pain caused by succinylcholine?",
    answers: [
      { text: "Dantrolene", correct: false },
      { text: "Tubocurarine", correct: true },
      { text: "Diazepam", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "Baclofen", correct: false },
    ],
  },
  {
    question: "A patient presents with symptomatic bradycardia. The nurse prepares to administer which dose of atropine intravenously?",
    answers: [
      { text: "0.3 mg", correct: false },
      { text: "0.5 mg", correct: true },
      { text: "1.25 mg", correct: false },
      { text: "2 mg", correct: false },
      { text: "2.5 mg", correct: false },
    ],
  },
  {
    question: "Which neurotransmitters stimulate A1 receptors?",
    answers: [
      { text: "Dopamine", correct: false },
      { text: "Epinephrine", correct: false },
      { text: "Norepinephrine", correct: true },
      { text: "Serotonin", correct: false },
      { text: "Atropine", correct: false },
    ],
  },
  {
    question: "What is the target organ for the b2 receptors?",
    answers: [
      { text: "Bronchi", correct: true },
      { text: "Uterus", correct: false },
      { text: "Smooth muscle of GIT", correct: false },
      { text: "Liver", correct: false },
      { text: "Bladder", correct: false },
    ],
  },
  {
    question: "First drug to be used in anaphylactic shock is:",
    answers: [
      { text: "Subcutaneous adrenaline", correct: true },
      { text: "Corticosteroids", correct: false },
      { text: "Theophylline", correct: false },
      { text: "Atropine", correct: false },
      { text: "Furosemide", correct: false },
    ],
  },
  {
    question: "The sympathomimetic found in many OTC cold products",
    answers: [
      { text: "salmeterol", correct: false },
      { text: "phenylephrine", correct: true },
      { text: "terbutaline", correct: false },
      { text: "albuterol", correct: false },
      { text: "salbutamol", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs would decrease release of norepinephrine from noradrenergic nerves?",
    answers: [
      { text: "Prazosin", correct: false },
      { text: "Atropine", correct: false },
      { text: "Phenylephrine", correct: false },
      { text: "Clonidine", correct: true },
      { text: "Norepinephrine", correct: false },
    ],
  },
  {
    question: "Which of the following agents would be most likely to induce bronchial dilation?",
    answers: [
      { text: "Norepinephrine", correct: false },
      { text: "Phenylephrine", correct: false },
      { text: "Clonidine", correct: false },
      { text: "Metaproterenol", correct: true },
      { text: "Epinephrine", correct: false },
    ],
  },
  {
    question: "Which of the following acts indirectly?",
    answers: [
      { text: "Epinephrine", correct: false },
      { text: "Norepinephrine", correct: false },
      { text: "Ephedrine", correct: true },
      { text: "Adrenaline", correct: false },
      { text: "Noradrenaline", correct: false },
    ],
  },
  {
    question: "Which of the following is common adverse effect of amphetamines?",
    answers: [
      { text: "Bradycardia", correct: false },
      { text: "Somnolence", correct: false },
      { text: "Constipation", correct: false },
      { text: "Hypertension", correct: true },
      { text: "Fatigue", correct: false },
    ],
  },
  {
    question: "Specify the main indication for the appointment of a-adrenomimetics?",
    answers: [
      { text: "Bronchial asthma", correct: false },
      { text: "Vascular collapse", correct: false },
      { text: "Arterial hypertension", correct: true },
      { text: "Intestinal hypertension", correct: false },
      { text: "Myasthenia gravis", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of adrenaline?",
    answers: [
      { text: "excites α-adrenergic receptors", correct: false },
      { text: "excites β-adrenergic receptors", correct: false },
      { text: "excites α- and β-adrenergic receptors", correct: true },
      { text: "increases the release of the mediator from the depot", correct: false },
      { text: "blocks adrenergic receptors", correct: false },
    ],
  },
  {
    question: "Which of the following is correct regarding responses mediated by adrenergic receptors?",
    answers: [
      { text: "Stimulation of a1 receptors increases blood pressure", correct: true },
      { text: "Stimulation of a1 receptors reduce blood pressure", correct: false },
      { text: "Stimulation of sympathetic presynaptic a2 receptors increases norepinephrine release", correct: false },
      { text: "Stimulation of b2 receptors increases heart rate", correct: false },
      { text: "Stimulation of b2 receptors causes bronchoconstriction", correct: false },
    ],
  },
  {
    question: "Which of the following adrenergic agonists is most likely to cause CNS side effects when administered systemically?",
    answers: [
      { text: "Epinephrine", correct: false },
      { text: "Norepinephrine", correct: false },
      { text: "Isoproterenol", correct: false },
      { text: "Dopamine", correct: false },
      { text: "Ephedrine", correct: true },
    ],
  },
  {
    question: "Which of the following adrenergic agonists is commonly present in nasal sprays available over-the-counter to treat nasal congestion?",
    answers: [
      { text: "Clonidine", correct: false },
      { text: "Albuterol", correct: false },
      { text: "Oxymetazoline", correct: true },
      { text: "Dobutamine", correct: false },
      { text: "Norepinephrine", correct: false },
    ],
  },
  {
    question: "Ritodrine hydrochloride is used in the treatment of?",
    answers: [
      { text: "Parkinson's disease", correct: false },
      { text: "Bronchial asthma", correct: false },
      { text: "Depression", correct: false },
      { text: "Hypertension", correct: false },
      { text: "Premature labor", correct: true },
    ],
  },
  {
    question: "Which of the following CNS stimulants occurs naturally and can be found in certain candies?",
    answers: [
      { text: "Amphetamine", correct: false },
      { text: "Clonidine", correct: false },
      { text: "Modafinil", correct: false },
      { text: "Caffeine", correct: true },
      { text: "Atomoxetine", correct: false },
    ],
  },
  {
    question: "Diastolic pressure is increased after the administration of which one of the following drugs?",
    answers: [
      { text: "Norepinephrine", correct: true },
      { text: "Epinephrine", correct: false },
      { text: "Isoproterenol", correct: false },
      { text: "albuterol", correct: false },
      { text: "Terbutaline", correct: false },
    ],
  },
  {
    question: "Dopamine causes all but which one of the following actions?",
    answers: [
      { text: "Increases cardiac", correct: false },
      { text: "Dilates renal vasculature", correct: false },
      { text: "Dilates bronchi", correct: true },
      { text: "Increases blood pressure", correct: false },
      { text: "Increases production of urine", correct: false },
    ],
  },
  {
    question: "Indicate the group of drugs. Increase blood pressure. The tone of the bronchial muscles is practically not effected. Used for hypotension, collapse.",
    answers: [
      { text: "M-cholinomimetics", correct: false },
      { text: "M,N-cholinomimetics", correct: false },
      { text: "α-adrenomimetics", correct: true },
      { text: "B-adrenomimetics", correct: false },
      { text: "Ganglion blockers", correct: false },
    ],
  },
  {
    question: "Which of the following drug :Increases blood pressure. Reduces the tone of the muscles of the bronchi, intestines. Increases the release of the mediator from the endings of adrenergic fibers. Applied in the treatment of bronchial asthma, rhinitis?",
    answers: [
      { text: "adrenaline", correct: false },
      { text: "norepinephrine", correct: false },
      { text: "ephedrine", correct: true },
      { text: "octadine", correct: false },
      { text: "prazosin", correct: false },
    ],
  },
  {
    question: "One of the main indications for the appointment of α1-adrenomimetics is:",
    answers: [
      { text: "coronary insufficiency", correct: false },
      { text: "heart failure", correct: false },
      { text: "vascular collapse", correct: true },
      { text: "blockade of the conduction system of the heart", correct: false },
      { text: "hypertensive crisis", correct: false },
    ],
  },
  {
    question: "An elderly man was brought to the emergency room after he ingested a large quantity of carvedilol tablets, a drug that blocks a1,b1 and b2 adrenergic receptors, which mainly mediate the cardiovascular effects of epinephrine and norepinephrine in the body. Which of the following symptoms would you expect in this patient?",
    answers: [
      { text: "Increase heart rate", correct: false },
      { text: "Reduce heart rate", correct: true },
      { text: "Dilation of the pupil", correct: false },
      { text: "Increase blood pressure", correct: false },
      { text: "Vasoconstriction", correct: false },
    ],
  },
  {
    question: "A hypertensive patient was accidently given an a2 agonist instead of an a1 blocker. Which of the following is correct in this situation?",
    answers: [
      { text: "A2 agonists can increase the release of norepinephrine from sympathetic nerve terminalis", correct: false },
      { text: "A2 agonists can reduce blood pressure in this patient", correct: true },
      { text: "A2 agonists can increase blood pressure in this patient", correct: false },
      { text: "A2 agonists will not effect blood pressure in this patient", correct: false },
      { text: "A1 blocker can increase blood pressure in this patient", correct: false },
    ],
  },
  {
    question: "An asthma patient was given a nonselective b agonist to relieve bronchoconstriction. Which of the following adverse effects would you expect to see in this patient?",
    answers: [
      { text: "Bradycardia", correct: false },
      { text: "Tachycardia", correct: true },
      { text: "Hypotension", correct: false },
      { text: "Worsening bronchoconstriction", correct: false },
      { text: "Decrease blood pressure", correct: false },
    ],
  },
  {
    question: "A 12-yeare-old boy who is allergic to peanuts was brought to the emergency room after accidently consuming peanuts contained in fast food. Which of the following drugs would be most appropriate to treat this patient?",
    answers: [
      { text: "Norepinephrine", correct: false },
      { text: "Phenylephrine", correct: false },
      { text: "Dobutamine", correct: false },
      { text: "Epinephrine", correct: true },
      { text: "Dopamine", correct: false },
    ],
  },
  {
    question: "A 70-year-old patient was brought to the emergency room with blood pressure of 70/60 mmhg, tachycardia, and low cardiac output. He was diagnosed with acute heart failure. Which of the following drugs would be the most appropriate to improve his cardiac function?",
    answers: [
      { text: "Epinephrine", correct: false },
      { text: "Fenoldopam", correct: false },
      { text: "Dobutamine", correct: true },
      { text: "Isoproterenol", correct: false },
      { text: "Norepinephrine", correct: false },
    ],
  },
  {
    question: "One of your patients who is hypertensive and gets mild asthma attacks occasionally bought an herbal remedy online to help with his asthma. He is not on any  asthma medication currently but is receiving a b1-selective blocker for his hypertension. The herbal remedy seems to relieve his asthma attacks, but his blood pressure seems to increase despite the b-blocker therapy. Which of the following drugs is most likely present in the herbal remedy he is taking?",
    answers: [
      { text: "Phenylephrine", correct: false },
      { text: "Norepinephrine", correct: false },
      { text: "Dobutamine", correct: false },
      { text: "Ephedrine", correct: true },
      { text: "Salmeterol", correct: false },
    ],
  },
  {
    question: "A 30-year-old patient was brought to the emergency room with amphetamine overdose. He presented with high blood pressure and arrythmia. Which of the following is correct regarding this patient?",
    answers: [
      { text: "Amphetamine can activate all types of adrenergic receptors", correct: true },
      { text: "B-blockers are the ideal antidotes for amphetamine poisoning", correct: false },
      { text: "A-blockers can normalize the blood pressure in this patient", correct: false },
      { text: "Miosis could be a possible symptom of amphetamine poisoning", correct: false },
      { text: "A-agonists are the ideal antidotes for amphetamine poisoning", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is considered to be the agent of choice for anaphylactic reactions?",
    answers: [
      { text: "Edrophonium", correct: false },
      { text: "Ipratropium", correct: true },
      { text: "Ambenonium", correct: false },
      { text: "Propantheline", correct: false },
      { text: "Homatropine", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is considred to be the agent of choice for anaphylactic reactions?",
    answers: [
      { text: "Clonidine", correct: false },
      { text: "Isoproterenol", correct: false },
      { text: "Epinephrine", correct: true },
      { text: "Phenylephrine", correct: false },
      { text: "Terbutaline", correct: false },
    ],
  },
  {
    question: "A 44-year-old man is undergoing surgery on the fifth finger of his right hand. A local anesthetic without epinephrine is used because epinephrine in this setting may cause",
    answers: [
      { text: "Methemoglobinemia.", correct: false },
      { text: "Liver injury.", correct: false },
      { text: "Gangrene.", correct: true },
      { text: "Necrosis of the optic nerve.", correct: false },
      { text: "Renal impairment.", correct: false },
    ],
  },
  {
    question: "A 56-year-old woman goes to an ophthalmologist for an eye examination. The ophthalmologist administers an eye drop to dilate her pupils prior to the eye examination. The medication in the eye drop is most likely acting on",
    answers: [
      { text: "Acetylcholinesterase.", correct: false },
      { text: "Serotonin receptors.", correct: false },
      { text: "α1 adrenergic receptors.", correct: true },
      { text: "β2 adrenergic receptors.", correct: false },
      { text: "Nicotinic receptors.", correct: false },
    ],
  },
  {
    question: "A 23-year-old man is accosted by 3 men late at night. Immediately his heart rate increases due to an increase in epinephrine in his circulation. This release of epinephrine from the adrenal medulla is the result of the action of acetylcholine on",
    answers: [
      { text: "Muscarinic receptors.", correct: false },
      { text: "β adrenergic receptors.", correct: false },
      { text: "α adrenergic receptors.", correct: false },
      { text: "Nicotinic receptors.", correct: true },
      { text: "Glutamate receptors.", correct: false },
    ],
  },
  {
    question: "A 44-year-old man is undergoing surgery on the fifth finger of his right hand. A local anesthetic without epinephrine is used because epinephrine in this setting may cause",
    answers: [
      { text: "Renal impairment.", correct: false },
      { text: "Liver injury.", correct: false },
      { text: "Necrosis of the optic nerve.", correct: false },
      { text: "Gangrene.", correct: true },
      { text: "Methemoglobinemia.", correct: false },
    ],
  },
  {
    question: "A 34-year-old woman has been frequently using a nasal spray containing the α adrenergic receptor agonist oxymetazoline for nasal decongestion. She has recently noticed that it is less effective and her symptoms are worse. T is loss of efficacy is most likely due to",
    answers: [
      { text: "A manufacturing defect in the nasal spray container.", correct: false },
      { text: "A loss of innervation to her nasal mucosa.", correct: false },
      { text: "Rebound hyperemia of her nasal mucosa", correct: true },
      { text: "Degradation of the oxymetazoline.", correct: false },
      { text: "The act that her spray container is empty.", correct: false },
    ],
  },
  {
    question: "You are volunteering in a hospital in a very poor part of the world. Their drug selection is limited. A patient presents with acute cardiac failure, for which you preferred drug is dobutamine, given intravenously. However, there is none available. Which other drug, or combination of drugs, would be a suitable alternative? (All these drugs are available in parenteral formulations.)",
    answers: [
      { text: "Dopamine (at a very high dose)", correct: false },
      { text: "Ephedrine", correct: false },
      { text: "Ephedrine plus propranolol", correct: false },
      { text: "Norepinephrine plus phentolamine", correct: true },
      { text: "Phenylephrine plus atropine", correct: false },
    ],
  },
  {
    question: "We administer an “effective” dose of a drug and observe the following responses: stimulates the heart; dilates some blood vessels but constricts none; dilates the bronchi; raises blood glucose levels; neither dilates nor constricts the pupil of the eye. Which drug caused these responses?",
    answers: [
      { text: "Isoproterenol", correct: true },
      { text: "Atropine", correct: false },
      { text: "Tubocurarine", correct: false },
      { text: "Terbutaline", correct: false },
      { text: "Phenylephrine", correct: false },
    ],
  },
  {
    question: "In which of the following tissues both alfa and beta1 adrenergic stimulation produces the same effect?",
    answers: [
      { text: "Blood vessels", correct: false },
      { text: "Intestine", correct: true },
      { text: "Uterus", correct: false },
      { text: "Bronchial muscles", correct: false },
      { text: "Prostate", correct: false },
    ],
  },
  {
    question: "Which of the following drugs causes bronchodilation without significant cardiac stimulation?",
    answers: [
      { text: "Isoprenaline", correct: false },
      { text: "Terbutaline", correct: true },
      { text: "Xylometazoline", correct: false },
      { text: "Methoxamine", correct: false },
      { text: "Phenylephrine", correct: false },
    ],
  },
  {
    question: "Which of the following direct-acting drugs is a relatively pure alfa agonist, an effective mydriatic and decongestant and can be used to raise blood pressure?",
    answers: [
      { text: "Epinephrine", correct: false },
      { text: "Norepinephrine", correct: false },
      { text: "Phenylephrine", correct: true },
      { text: "Ephedrine", correct: false },
      { text: "Terbutaline", correct: false },
    ],
  },
  {
    question: "Which of the following sympathomimetics is preferable for the treatment of chronic orthostatic hypotension?",
    answers: [
      { text: "Epinephrine", correct: false },
      { text: "Norepinephrine", correct: false },
      { text: "Ephedrine", correct: true },
      { text: "Salmeterol", correct: false },
      { text: "Terbutaline", correct: false },
    ],
  },
  {
    question: "Beta-1 selective agonist is:",
    answers: [
      { text: "Terbutaline", correct: false },
      { text: "Albuterol", correct: false },
      { text: "Dobutamine", correct: true },
      { text: "Clonidine", correct: false },
      { text: "Salbutamol", correct: false },
    ],
  },
  {
    question: "Clonidine is a:",
    answers: [
      { text: "Alfa-1 selective agonist", correct: false },
      { text: "Alfa-2 selective agonist", correct: true },
      { text: "Alfa-1 selective antagonist", correct: false },
      { text: "Alfa-2 selective antagonist", correct: false },
      { text: "Beta-2 selective agonist", correct: false },
    ],
  },
  {
    question: "Long acting beta agonist?",
    answers: [
      { text: "Terbutaline", correct: false },
      { text: "Salmeterol", correct: true },
      { text: "Ciclesonide", correct: false },
      { text: "Ipratropium", correct: false },
      { text: "Ritodrine", correct: false },
    ],
  },
  {
    question: "Which of the following statements about dopamine is correct:",
    answers: [
      { text: "Used in congestive cardiac failure", correct: true },
      { text: "Its plasma half-life is 6 hours", correct: false },
      { text: "Therapeutically useful in parkinsonism", correct: false },
      { text: "Acts only on dopaminergic receptors", correct: false },
      { text: "It is given orally only", correct: false },
    ],
  },
  {
    question: "A 52 year old woman,recently diagnosed with severe bronchial asthma,complained to her physician of tremors,muscle cramping,palpitatlons and anxiety. She had started an appropriate therapy two weeks previously. Which of the following drugs most likely caused the patients symptoms?",
    answers: [
      { text: "Isoproterenol", correct: false },
      { text: "Salmeterol", correct: true },
      { text: "Propranolol", correct: false },
      { text: "Dobutamine", correct: false },
      { text: "Prazosin", correct: false },
    ],
  },
  {
    question: "Diastolic pressure is increased after the administration of which one of the following drugs?",
    answers: [
      { text: "Norepinephrine", correct: true },
      { text: "Epinephrine", correct: false },
      { text: "Isoproterenol", correct: false },
      { text: "Albuterol", correct: false },
      { text: "Terbutaline", correct: false },
    ],
  },
  {
    question: "A patient in cardiogenic shock is given a beta-1 selective agonist to increase stroke volume. What drug was given?",
    answers: [
      { text: "Dopamine", correct: false },
      { text: "Dobutamine", correct: true },
      { text: "Epinephrine", correct: false },
      { text: "Isoproterenol", correct: false },
      { text: "Norepinephrine", correct: false },
    ],
  },
  {
    question: "Which of the following drug is used for diagnosis of pheochromocytoma?",
    answers: [
      { text: "Amiodarone", correct: false },
      { text: "Phentolamine", correct: true },
      { text: "Tamsulosin", correct: false },
      { text: "Acebutolol", correct: false },
      { text: "Atropine", correct: false },
    ],
  },
  {
    question: "Which of the following is correct regarding a-adrenergic blockers?",
    answers: [
      { text: "A-adrenergic blockers are used in the treatment of hypotension in anaphylactic shock", correct: false },
      { text: "A-adrenergic blockers are used in the treatment of benign prostatic hyperplasia", correct: true },
      { text: "A-adrenergic blockers may cause bradycardia", correct: false },
      { text: "A-adrenergic blockers are used in the treatment of asthma", correct: false },
      { text: "A-adrenergic blockers reduce the frequency of urination", correct: false },
    ],
  },
  {
    question: "Which of the following is correct regarding b-blockers?",
    answers: [
      { text: "Treatment with b-blockers should not be stopped abruptly", correct: true },
      { text: "Propranolol is cardio selective b-blocker", correct: false },
      { text: "B-blockers may cause orthostatic hypotension", correct: false },
      { text: "Cardio selective b-blockers worsen asthma", correct: false },
      { text: "B-blockers decrease peripheral resistance by causing vasorelaxation", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is commonly used topically in the treatment of glaucoma?",
    answers: [
      { text: "Atropine", correct: false },
      { text: "Timolol", correct: true },
      { text: "Tropicamide", correct: false },
      { text: "Scopolamine", correct: false },
      { text: "Metoprolo", correct: false },
    ],
  },
  {
    question: "Which of the following is correct regarding carvedilol?",
    answers: [
      { text: "Is a cardio selective b-blocker", correct: false },
      { text: "Is safe for use in asthma patients", correct: false },
      { text: "Has a1-blocker activity", correct: true },
      { text: "Is contraindicated in the treatment of stable chronic heart failure", correct: false },
      { text: "Is a-receptors agonist", correct: false },
    ],
  },
  {
    question: "Impotence is caused by which drugs:",
    answers: [
      { text: "Angiotensin antagonist", correct: false },
      { text: "B-Blockers", correct: true },
      { text: "ACE inhibitors", correct: false },
      { text: "B-agonist", correct: false },
      { text: "A-blockers", correct: false },
    ],
  },
  {
    question: "Indicate the b1  selective antagonist?",
    answers: [
      { text: "Propranolol", correct: false },
      { text: "Metoprolol", correct: true },
      { text: "Carvedilol", correct: false },
      { text: "Sotalol", correct: false },
      { text: "Salbutamol", correct: false },
    ],
  },
  {
    question: "Indicate the indirect acting adrenoreceptor blocking drug:",
    answers: [
      { text: "Reserpine", correct: true },
      { text: "Norepinephrine", correct: false },
      { text: "Atropine", correct: false },
      { text: "Atenolol", correct: false },
      { text: "Metoprolol", correct: false },
    ],
  },
  {
    question: "Systolic pressure is decreased after the injection of which of the following drugs?",
    answers: [
      { text: "Phenylephrine", correct: false },
      { text: "dopamine", correct: false },
      { text: "Ephedrine", correct: false },
      { text: "Reserpine", correct: true },
      { text: "Norepinephrine", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs is useful in treating tachycardia?",
    answers: [
      { text: "Phenoxybenzamine", correct: false },
      { text: "Isoproterenol", correct: false },
      { text: "Phentolamine", correct: false },
      { text: "Propranolol", correct: true },
      { text: "Prazosin", correct: false },
    ],
  },
  {
    question: "Indicate the main indication for the appointment of selective β1adrenergic blockers.",
    answers: [
      { text: "gastric ulcer and 12 duodenal ulcer", correct: false },
      { text: "bronchial asthma", correct: false },
      { text: "angina pectoris", correct: true },
      { text: "pheochromocytoma", correct: false },
      { text: "intestinal atony", correct: false },
    ],
  },
  {
    question: "Indicate group of drugs: They act on the endings of adrenergic fibers: they cause depletion of the neurotransmitter norepinephrine. It is used to treat hypertension",
    answers: [
      { text: "α-blockers", correct: false },
      { text: "β-blockers", correct: false },
      { text: "sympatholytics", correct: true },
      { text: "ganglion blockers", correct: false },
      { text: "myotropic vasodilators", correct: false },
    ],
  },
  {
    question: "Which of the following drugs used to prevent angina attacks is a β-blocker?",
    answers: [
      { text: "isosorbide dinitrate", correct: false },
      { text: "nitrong", correct: false },
      { text: "metoprolol", correct: true },
      { text: "dipyridamole", correct: false },
      { text: "nifedipine", correct: false },
    ],
  },
  {
    question: "Which of the following drug is from  the group of βadrenergic blockers used to treat hypertension?",
    answers: [
      { text: "clonidine", correct: false },
      { text: "benzohexonium", correct: false },
      { text: "octadine", correct: false },
      { text: "anaprilin", correct: true },
      { text: "prazosin", correct: false },
    ],
  },
  {
    question: "Pindolol and some other β adrenergic receptor antagonists have an additional property that is referred to as intrinsic sympathomimetic activity (ISA). This additional property indicates these agents are:",
    answers: [
      { text: "Neutral antagonists", correct: false },
      { text: "Partial agonists", correct: true },
      { text: "Full agonists", correct: false },
      { text: "Inverse agonist", correct: false },
      { text: "Noncompetitive antagonists", correct: false },
    ],
  },
  {
    question: "Propranolol  is used to treat ___________.",
    answers: [
      { text: "Benign prostate hyperplasia", correct: false },
      { text: "Stuff nose", correct: false },
      { text: "COPD", correct: false },
      { text: "Hypertension", correct: true },
      { text: "Peptic ulcer", correct: false },
    ],
  },
  {
    question: "Non-selective beta-antagonists, such as ________ are used to treat __________.",
    answers: [
      { text: "Apraclonidine [Iopidine] and Clonidine [Catapres]; intraocular pressure", correct: false },
      { text: "Nadolol [Corgard] and Pindolol [Visken]; bradycardia", correct: false },
      { text: "Acebutolol [Sectral], Atenolol [Tenormin]; ADHD", correct: false },
      { text: "Isoproterenol [Isuprel] and Dobutamine [Dobutrex]; hypertension", correct: false },
      { text: "Timolol [Timoptic] and Levobunolol [Betagan]; glaucoma", correct: true },
    ],
  },
  {
    question: "B1-antagonists are most selective for receptors located  ________________.",
    answers: [
      { text: "In the respiratory system", correct: false },
      { text: "On cardiac muscle", correct: true },
      { text: "On lipid cells", correct: false },
      { text: "In the liver", correct: false },
      { text: "On muscle tissue", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is a reversible nonselective alfa, beta antagonist?",
    answers: [
      { text: "Labetalol", correct: true },
      { text: "Phentolamine", correct: false },
      { text: "Metoprolol", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Timolol", correct: false },
    ],
  },
  {
    question: "Clinical studies have shown that adrenoceptor blockers have many useful effects in patients. However, a number of drug toxicities have been documented. Adverse effects that limit the use of adrenoceptor blockers include which one of the following?",
    answers: [
      { text: "Bronchoconstriction from α-blocking agents", correct: false },
      { text: "Acute heart failure exacerbation from β blockers", correct: true },
      { text: "Increased intraocular pressure with β blockers", correct: false },
      { text: "Impaired blood sugar response with α blockers", correct: false },
      { text: "Sleep disturbances from α-blocking drug", correct: false },
    ],
  },
  {
    question: "A 60-year-old female started on a new antihypertensive medication recently. Her blood pressure seems to be under control, but she complains of fatigue, drowsiness, and fainting when she gets up from the bed. Which of the following drugs is she most likely taking?",
    answers: [
      { text: "Metoprolol", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Prazosin", correct: true },
      { text: "Clonidine", correct: false },
      { text: "Atenolol", correct: false },
    ],
  },
  {
    question: "A new antihypertensive drug was tasted in an animal model of hypertension. The drug when given alone reduces blood pressure in the animal. Norepinephrine when given in the presence of this drug did not cause any significant change in blood pressure or heart rate in the animal. The new drug is similar to which of the following drugs in terms of its pharmacological mechanism of action?",
    answers: [
      { text: "Prazosin", correct: false },
      { text: "Clonidine", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Metoprolol", correct: false },
      { text: "Carvedilolol", correct: true },
    ],
  },
  {
    question: "A b-blocker was prescribed for hypertension in a female asthma patient. After about a week of treatment, the asthma attacks got worse, and the patient was asked to stop taking the b-blocker. Which of the following b-blockers would you suggest as an alternative in this patient that is less likely to worsen her asthma?",
    answers: [
      { text: "Propranolol", correct: false },
      { text: "Metoprolol", correct: true },
      { text: "Labetalol", correct: false },
      { text: "Carvedilol", correct: false },
      { text: "Atropine", correct: false },
    ],
  },
  {
    question: "A 70-year-old male needs to be treated with an a-blocker for overflow incontinence due to his enlarged prostate. Which of the following drugs would you suggest in this patient that will not affect his blood pressure significantly?",
    answers: [
      { text: "Prazosin", correct: false },
      { text: "Doxazosin", correct: false },
      { text: "Phentolamine", correct: false },
      { text: "Tamsulosin", correct: true },
      { text: "Terazosin", correct: false },
    ],
  },
  {
    question: "A 50-year-old male was brought to the emergency room after being stung by a hornet. The patient was found to be in anaphylactic shock, and the medical team tried to reverse the bronchoconstriction and hypertension using epinephrine. However, the patient did not fully respond to the epinephrine treatment. The patient’s wife mentioned that he is taking prescription medication for his blood pressure, the name of which she does not remember. Which of the following medication is he most likely taking that could have prevented the effects of epinephrine?",
    answers: [
      { text: "Doxazosin", correct: false },
      { text: "Propranolol", correct: true },
      { text: "Metoprolol", correct: false },
      { text: "Acebutolol", correct: false },
      { text: "e) Atenolol", correct: false },
    ],
  },
  {
    question: "A 60-year-old asthmatic man comes in for a check up and complains that he is having some difficulty in starting to urinate.Physical examination indicates that the man has a blood pressure of 160/100mm Hg and a slightly enlarged prostate.Which of the following medications would be useful in treating both of these conditions?",
    answers: [
      { text: "Doxazosin", correct: true },
      { text: "Labetalol", correct: false },
      { text: "Phentolamine", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Isoproterenol", correct: false },
    ],
  },
  {
    question: "A 32-year-old woman with the diagnosis of a pheochromocytoma is scheduled for surgery to remove her adrenal tumor. The best drug to control her episodes of severe hypertension prior to surgery would be",
    answers: [
      { text: "A selective α1 adrenergic receptor antagonist such as terazosin.", correct: false },
      { text: "A selective β2 adrenergic receptor agonist such as terbutaline.", correct: false },
      { text: "A nonselective β adrenergic receptor antagonist such as propranolol.", correct: false },
      { text: "A nonselective α adrenergic antagonist such as phenoxybenzamine.", correct: true },
      { text: "A selective α2 adrenergic receptor agonist such as clonidine.", correct: false },
    ],
  },
  {
    question: "A 65-year-old man complains of losing his vision. Retinal examination reveals optic nerve cupping. Peripheral vision loss is observed on visual field tests, and his intraocular pressure is increased. Following treatment with the drug, he has improved visual acuity and decreased intraocular pressure. What drug was given to the patient?",
    answers: [
      { text: "Timolol", correct: true },
      { text: "Prazosin", correct: false },
      { text: "Phentolamine", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Atenolol", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is an imidazoline derivative and a potent competitive antagonist at both alfa1 and alfa2 receptors?",
    answers: [
      { text: "Prazosin", correct: false },
      { text: "Labetalol", correct: false },
      { text: "Phenoxybenzamine", correct: false },
      { text: "Phentolamine", correct: true },
      { text: "Timolol", correct: false },
    ],
  },
  {
    question: ". Indicate an alfa-receptor antagonist, which binds covalently to alfa receptors, causing irreversible blockade of long duration (14-48 hours or longer):",
    answers: [
      { text: "Phentolamine", correct: false },
      { text: "Phenoxybenzamine", correct: true },
      { text: "Ergotamine", correct: false },
      { text: "Prazosin", correct: false },
      { text: "Timolol", correct: false },
    ],
  },
  {
    question: "Epinephrine reversal could occur if epinephrine is administered in the presence of:",
    answers: [
      { text: "Cocaine", correct: false },
      { text: "Imipramine", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Phentolamine", correct: true },
      { text: "Dopamine", correct: false },
    ],
  },
  {
    question: "Substantial Bradycardia observed in the presence of inhaled anesthetics with this beta adrenergic receptor antagonist?",
    answers: [
      { text: "Propranolol", correct: false },
      { text: "Esmolol", correct: false },
      { text: "Labetalol", correct: false },
      { text: "Timolol", correct: true },
      { text: "Metoprolol", correct: false },
    ],
  },
  {
    question: "A 30 year old asthmatic patient is having mild to moderate hypertension, he may be best managed by a good beta-blocker, like:",
    answers: [
      { text: "Atenolol", correct: false },
      { text: "Nadolol", correct: false },
      { text: "Pindolol", correct: true },
      { text: "Propranolol", correct: false },
      { text: "Timolol", correct: false },
    ],
  },
  {
    question: "A 60 year old male patient with a history of postural hypotensive attacks is in need of an alfa-1 adrenergic blocker for his benign prostatic hyperplasma like:",
    answers: [
      { text: "Prazosin", correct: false },
      { text: "Terazosin", correct: false },
      { text: "Doxazosin", correct: false },
      { text: "Tamsulosin", correct: true },
      { text: "Alfuzosin", correct: false },
    ],
  },
  {
    question: "A 57 year old man who has benign prostatit hypertrophy comes in for a checkup and complains that he is having some difficulty in urination. Physical examination indicates that the man has a blood pressure of 130/85mmHg which is normal according to his age. What is the drug of choice in this case?",
    answers: [
      { text: "Tamsulosin", correct: true },
      { text: "Timolol", correct: false },
      { text: "Nadolol", correct: false },
      { text: "Yohimbine", correct: false },
      { text: "Phentolamine", correct: false },
    ],
  },
  {
    question: "A 40 year old patient, came in due to acute hypertensive episode. Her chart says she is asthmatic. Which of the following drugs would be safest to give?",
    answers: [
      { text: "Nebivolol", correct: false },
      { text: "Timolol", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Atenolol", correct: true },
      { text: "Terazosin", correct: false },
    ],
  },
  {
    question: "A 32 year old M complained to his Dr. of fatigue, insomnia, loss of libido and depression. The man diagnosed with chronic classic migraine three week previously, started prophylactic treatment with a drug which reduced the frequency of the attacks.Which of the following drugs was he most likely taking?",
    answers: [
      { text: "Esmolol", correct: false },
      { text: "Sotalol", correct: false },
      { text: "Propranolol", correct: true },
      { text: "Timolol", correct: false },
      { text: "Acebutolol", correct: false },
    ],
  },
  {
    question: "A 25 y.o man is undergoing laparoscopic surgery for pheochromocytoma under general anesthesia.After resection of tumor, he suddenly develops a heart rate 140bpm.he has a history developing cardiac arrhythmias on 3 previous occasions.Which of the following short acting beta blockers would be suitable at this poin?",
    answers: [
      { text: "Propranolol", correct: false },
      { text: "Sotalol", correct: false },
      { text: "Pindolol", correct: false },
      { text: "Esmolol", correct: true },
      { text: "Metoprolol", correct: false },
    ],
  },
  {
    question: "A 40 y.o. female visits the internal medicine clinic with complaints of occasional palpitations and fainting.History reveals she is hypertensive and is currently on an anti-hypertensive regimen including an adrenergic blocker, a diuretic and an ACE inhibitor.On investigation her ECG reveals a prolonged QT interval.Which of the following drugs was she most likely taking?",
    answers: [
      { text: "Carvedilol", correct: false },
      { text: "Prazosin", correct: false },
      { text: "Labetalol", correct: false },
      { text: "Sotalol", correct: true },
      { text: "Doxazosin", correct: false },
    ],
  },
  {
    question: "A 52 y.o. man comes to his physician with a chief complaint of difficulty of urination.Physical examination shows a blood pressure of 132/80 mmHg,heart rate is 68 bpm and a slightly enlarged prostrate.Which of the following is the most appropriate agent to treat his condition?",
    answers: [
      { text: "Labetalol", correct: false },
      { text: "Atenolol", correct: false },
      { text: "Phentolamine", correct: false },
      { text: "Metoprolol", correct: false },
      { text: "Doxazosin", correct: true },
    ],
  },
  {
    question: "Selective alfa-2 adrenergic blocker is:",
    answers: [
      { text: "Prazosin", correct: false },
      { text: "Terazosin", correct: false },
      { text: "Tamsulosin", correct: false },
      { text: "Indoramine", correct: false },
      { text: "Yohimbine", correct: true },
    ],
  },
  {
    question: "Beta-blockers with intrinsic sympathomimetic properties are:",
    answers: [
      { text: "Propranolol", correct: false },
      { text: "Oxprenolol", correct: true },
      { text: "Practolol", correct: false },
      { text: "Esmolol", correct: false },
      { text: "Butoxamine", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is nonselective alpha receptor blocker?",
    answers: [
      { text: "Prazosin", correct: false },
      { text: "Phentolamine", correct: true },
      { text: "Metoprolol", correct: false },
      { text: "Reserpine", correct: false },
      { text: "Yohimbine", correct: false },
    ],
  },
  {
    question: "Which of the following beta-blockers would cause maximum hypoglycemia?",
    answers: [
      { text: "Timolol", correct: false },
      { text: "Metoprolol", correct: false },
      { text: "Atenolol", correct: false },
      { text: "Labetalol", correct: true },
      { text: "Propranolol", correct: false },
    ],
  },
  {
    question: "A 56 y.o. man ,recently diagnosed with exertional angina,started a therapy with propranolol.Which of the following cardiovascular parameters was most likely decreased in this patient?",
    answers: [
      { text: "End systolic volume", correct: false },
      { text: "Ventricular ejection time", correct: false },
      { text: "Cardiac ejection fraction", correct: true },
      { text: "End diastolic volume", correct: false },
      { text: "Venous tone", correct: false },
    ],
  },
  {
    question: "Which of the following adrenergic drugs given by IV infusion car decrease total peripheral resistance at lower doses and increase it at higher doses?",
    answers: [
      { text: "Norepinephrine", correct: false },
      { text: "Albuterol", correct: false },
      { text: "Isoproterenol", correct: false },
      { text: "Dopamine", correct: true },
      { text: "Dobutamine", correct: false },
    ],
  },
  {
    question: "A 15-year-old girl was treated topically with eye drops during a routine ophthalmoscopic examination. After fifteen minutes the ophthalmologist registered a moderate increase in pupillary diameter, with negligible changes in lens curvature and intraocular pressure. Which of the following drugs was most likely administered to the patient?",
    answers: [
      { text: "Phenylephrine", correct: true },
      { text: "Timolol", correct: false },
      { text: "Acetylcholine", correct: false },
      { text: "Apraclonidine", correct: false },
      { text: "Epinephrine", correct: false },
    ],
  },
  {
    question: "If 10 mg of naproxen produces the same analgesic response as 100 mg of ibuprofen, which of the following statements is correct?",
    answers: [
      { text: "Naproxen is more efficacious than is ibuprofen", correct: false },
      { text: "Naproxen is more potent than ibuprofen", correct: true },
      { text: "Naproxen is a full agonist, and ibuprofen is partial agonist", correct: false },
      { text: "Naproxen is a competitive antagonist", correct: false },
      { text: "Naproxen is a better drug to take for pain relief than is ibuprofen", correct: false },
    ],
  },
  {
    question: "If 10  mg of morphine produce a greater analgesic response than can be achieved by ibuprofen at any dose, which of the following statements is correct?",
    answers: [
      { text: "Morphine is less efficacious than is ibuprofen", correct: false },
      { text: "Morphine is less potent than ibuprofen", correct: false },
      { text: "Morphine is full agonist, and ibuprofen is partial agonist", correct: false },
      { text: "Ibuprofen is competitive antagonist", correct: false },
      { text: "Morphine is better drug to take for pain relief than ibuprofen", correct: true },
    ],
  },
  {
    question: "In the presence of naloxone, a higher concentration of morphine is required to elicit full pain relief. Naloxone by itself has no effect. Which of the following is correct regarding these medications?",
    answers: [
      { text: "Naloxone is a competitive antagonist", correct: true },
      { text: "Morphine is a full agonist, and naloxone is a partial agonist", correct: false },
      { text: "Morphine is less efficacious than is naloxone", correct: false },
      { text: "Morphine is less potent than is naloxone", correct: false },
      { text: "Naloxone is a noncompetitive antagonist", correct: false },
    ],
  },
  {
    question: "Indicate the anesthetic, which is used intravenously:",
    answers: [
      { text: "Propotol", correct: true },
      { text: "Halothane", correct: false },
      { text: "Amiodarone", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Atenolol", correct: false },
    ],
  },
  {
    question: "Which of the following is a potent analgesic but a weak anesthetic?",
    answers: [
      { text: "Etomidate", correct: false },
      { text: "Halothane", correct: false },
      { text: "Midazolam", correct: false },
      { text: "Nitrous oxide", correct: true },
      { text: "Thiopental", correct: false },
    ],
  },
  {
    question: "The potency of inhaled anesthetics is defined quantitatively as:",
    answers: [
      { text: "Blood/gas partition coefficients", correct: false },
      { text: "Cerebrovascular resistance", correct: false },
      { text: "Minimum alveolar concentration", correct: true },
      { text: "Diffusion hypoxia", correct: false },
      { text: "Maximum alveolar concentration", correct: false },
    ],
  },
  {
    question: "Which of the following is a potent intravenous anesthetic but a week analgesic?",
    answers: [
      { text: "Propofol", correct: true },
      { text: "Benzodiazepines", correct: false },
      { text: "Ketamine", correct: false },
      { text: "Fentanyl", correct: false },
      { text: "Isoflurane", correct: false },
    ],
  },
  {
    question: "Which of the following determines the speed of recovery from intravenous anesthetics used for induction?",
    answers: [
      { text: "Liver metabolism of the drug", correct: false },
      { text: "Protein binding of the drug", correct: false },
      { text: "Ionization of the drug", correct: false },
      { text: "Redistribution of the drug from sites in the CNS", correct: true },
      { text: "Plasma clearance of the drug", correct: false },
    ],
  },
  {
    question: "Which of the following is correct regarding local anesthetics?",
    answers: [
      { text: "They affect only small, unmyelinated nerve fibers", correct: false },
      { text: "They have either a lipophilic and hydrophilic group", correct: false },
      { text: "They have either an amide or an ester linkage", correct: true },
      { text: "They are unaffected by ph of the tissue and pka of the drug", correct: false },
      { text: "In their ionized form, they interact with the protein receptor of calcium channels", correct: false },
    ],
  },
  {
    question: "Which of the following statement about fentanyl is correct?",
    answers: [
      { text: "Fentanyl is 100 tames mere potent than morphine", correct: true },
      { text: "Its withdrawal symptoms can be relieved by naloxone", correct: false },
      { text: "The active metabolites of fentanyl can cause seizures", correct: false },
      { text: "Its most effect by oral administration", correct: false },
      { text: "Its most effect by peroral", correct: false },
    ],
  },
  {
    question: "An 80-year-old patient with asthma and low blood pressure requires anesthesia for an emergency surgical procedure. Which of the following agents would be most appropriate for inducing anesthesia in this patient?",
    answers: [
      { text: "Desflurane", correct: false },
      { text: "Ketamine", correct: true },
      { text: "Propofol", correct: false },
      { text: "Thiopental", correct: false },
      { text: "Valproic acid", correct: false },
    ],
  },
  {
    question: "A 52-year-old woman will be undergoing sedation with propofol for a brief diagnostic procedure. Which of the following as an advantage of propofol for this patient?",
    answers: [
      { text: "Rapid analgesia", correct: false },
      { text: "Sustained duration", correct: false },
      { text: "Decreased incidence of nausea and vomiting", correct: true },
      { text: "Less pain at the injection site", correct: false },
      { text: "Decrease incidence of anaphylactic shock", correct: false },
    ],
  },
  {
    question: "A 32-year-old woman requests an epidural to ease labor pains. She reports that she had an allergic reaching to Novocain at the dentist office. Which of the following local anesthetic would be appropriate for use in an epidural for this patient?",
    answers: [
      { text: "Chloroprocaine", correct: false },
      { text: "Mepivacaine", correct: false },
      { text: "Ropivacaine", correct: true },
      { text: "Tetracaine", correct: false },
      { text: "Succinylcholine", correct: false },
    ],
  },
  {
    question: "A young woman is brought to the emergency room. She is unconscious, and she has pupillary constriction and depressed respiration. Based on reports, an opioid overdose is almost certain. Which of the listed phenanthrene opioids will exhibit a full and immediate response to treatment with naloxone?",
    answers: [
      { text: "Meperidine", correct: false },
      { text: "Morphine", correct: true },
      { text: "Buprenorphine", correct: false },
      { text: "Fentanyl", correct: false },
      { text: "Cocaine", correct: false },
    ],
  },
  {
    question: "A 76-year-old female with renal insufficiency presents to the clinic with sever pain secondary to a compression fracture in the lumbar spine. She reports that the pain has been uncontrolled with tramadol., and it is decided to start treatment with an opioid. Which of the following is the best opioid for this patient?",
    answers: [
      { text: "Meperidine", correct: false },
      { text: "Fentanyl transdermal patch", correct: false },
      { text: "Hydrocodone", correct: true },
      { text: "Morphine", correct: false },
      { text: "Buprenorphine", correct: false },
    ],
  },
  {
    question: "A 56-year-old patient who has suffered with sever chronic pain with radiculopathy secondary to spinal stenosis for years presents to the clinic for pain management. Over the years, this patient has failed to receive relief from the neuropathic pain from the radiculopathy with traditional agents such as tricylics or anticonvulsants. Based on the mechanism of action, which opioid might be beneficial in this patient to treat both nociceptive and neuropathic pain.?",
    answers: [
      { text: "Meperidine", correct: false },
      { text: "Oxymorphone", correct: false },
      { text: "Morphine", correct: false },
      { text: "Methadone", correct: true },
      { text: "Procaine", correct: false },
    ],
  },
  {
    question: "Which of the following opioids is the best chose for treating pain associated with diabetic peripheral neuropathy?",
    answers: [
      { text: "Morphine", correct: false },
      { text: "Tapentadol", correct: true },
      { text: "Codeine", correct: false },
      { text: "Buprenorphine", correct: false },
      { text: "Fentanyl", correct: false },
    ],
  },
  {
    question: "KM is a 64-year-old male who has been hospitalized following a car accident in which he sustained a broken leg and broken arm. He has been converted to oral morphine in anticipation of his discharge. What other medication should he receive with his morphine upon discharge?",
    answers: [
      { text: "Diphenhydramine", correct: false },
      { text: "Methylphenidate", correct: false },
      { text: "Docusate sodium with senna", correct: true },
      { text: "Docusate sodium", correct: false },
      { text: "Codeine", correct: false },
    ],
  },
  {
    question: "AN is a 57-year-old male who has been treated with oxycodone for chronic nonmalignant pain for over 2 years. He is now reporting increased pain in the afternoon while at work. Which of the following opioids is a short-acting opioid and is the best choice for this patients breakthrough pain?",
    answers: [
      { text: "Methadone", correct: false },
      { text: "Pentazocine", correct: false },
      { text: "Hydrocodone", correct: true },
      { text: "Nalbuphine", correct: false },
      { text: "Morphine", correct: false },
    ],
  },
  {
    question: "36 To reduce the absorption of local anesthetics into the general bloodstream, the following are added to their solutions during infiltration anesthesia:",
    answers: [
      { text: "atropine", correct: false },
      { text: "isadrine", correct: false },
      { text: "adrenaline", correct: true },
      { text: "glucose", correct: false },
      { text: "sodium chloride", correct: false },
    ],
  },
  {
    question: "A 44-year-old man is undergoing surgery on the fifth finger of his right hand. A local anesthetic without epinephrine is used because epinephrine in this setting may cause",
    answers: [
      { text: "Methemoglobinemia.", correct: false },
      { text: "Liver injury.", correct: false },
      { text: "Gangrene.", correct: true },
      { text: "Necrosis of the optic nerve.", correct: false },
      { text: "Renal impairment.", correct: false },
    ],
  },
  {
    question: "A 19-year-old woman is undergoing dental surgery. Immediately upon infiltration of the local anesthetic, tetracaine with epinephrine, she begins to wheeze and have an allergic reaction. The cause of her allergic reaction is likely",
    answers: [
      { text: "Penicillin.", correct: false },
      { text: "Epinephrine.", correct: false },
      { text: "Sulfate", correct: true },
      { text: "Nickel.", correct: false },
      { text: "Tetracaine.", correct: false },
    ],
  },
  {
    question: "A 55-year-old woman is having a colonoscopy. Aside from other medications for sedation, it is likely she will receive which of the following analgesics?",
    answers: [
      { text: "Methadone", correct: false },
      { text: "Fentanyl", correct: true },
      { text: "Meperidine", correct: false },
      { text: "Pentazocine", correct: false },
      { text: "Buprenorphin", correct: false },
    ],
  },
  {
    question: "A 42-year-old man with chronic pain is brought to the emergency room because of over-sedation and respiratory depression while using fentanyl patches. He is given intravenous naloxone.Why it is given by this rout?",
    answers: [
      { text: "Undergoes first-pass metabolism in the liver.", correct: true },
      { text: "Is destroyed by stomach acid.", correct: false },
      { text: "Is not absorbed from the GI tract.", correct: false },
      { text: "Is excreted unchanged in the urine.", correct: false },
      { text: "Is metabolized to an inactive metabolite in the GI lining.", correct: false },
    ],
  },
  {
    question: "A 50-year-old woman with back pain is administered an opiate agonist. After 2 weeks of therapy, she notices that she needs to increase the dose to get the same analgesic effect. She is experiencing",
    answers: [
      { text: "Drug-seeking behavior.", correct: false },
      { text: "Addiction.", correct: false },
      { text: "Tolerance.", correct: true },
      { text: "Physical dependence.", correct: false },
      { text: "Withdrawal.", correct: false },
    ],
  },
  {
    question: "A 24-year-old woman has increased her dosage of hydrocodone to achieve the same analgesic effect. This is a demonstration of",
    answers: [
      { text: "Addiction", correct: false },
      { text: "Physical dependence.", correct: false },
      { text: "First-pass metabolism.", correct: false },
      { text: "An adverse effect.", correct: false },
      { text: "Tolerance", correct: true },
    ],
  },
  {
    question: "Termination of anesthesia after a single bolus of a parenteral anesthetic primarily reflects",
    answers: [
      { text: "Hydrolysis by plasma esterases.", correct: false },
      { text: "Enhanced protein plasma protein binding.", correct: false },
      { text: "Redistribution out of the CNS.", correct: true },
      { text: "Excretion by the kidney.", correct: false },
      { text: "Metabolism by the liver.", correct: false },
    ],
  },
  {
    question: "A 43-year-old man with postsurgical pain is placed on an intravenous patient-controlled analgesia pump with morphine as the analgesic. This form of analgesic administration is preferred to oral administration because morphine",
    answers: [
      { text: "Administered orally causes more severe constipation", correct: false },
      { text: "Administered orally does not penetrate the brain.", correct: false },
      { text: "Is not absorbed orally.", correct: false },
      { text: "Administered parenterally bypasses first-pass metabolism", correct: true },
      { text: "Administered orally is rapidly eliminated in the urine.", correct: false },
    ],
  },
  {
    question: "A 28-year-old man has been taking the same dose of oxycodone for several weeks as the result of a knee injury. He has not needed to increase his dose of oxycodone to achieve analgesia. He develops irritability and muscle aches upon abruptly stopping his oxycodone. This is a demonstration of",
    answers: [
      { text: "Physical dependence.", correct: true },
      { text: "Addiction", correct: false },
      { text: "An adverse effect.", correct: false },
      { text: "First-pass metabolism", correct: false },
      { text: "Tolerance", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman is brought to the emergency department after overdosing on oxycodone, an opiate analgesic. She is unconscious and barely breathing when she arrives at the hospital, but revives and is breathing normally within 2 minutes after receiving an injection of naloxone. After about an hour, she requires another dose of naloxone as the symptoms of opiate overdose begin to redevelop. Naloxone is likely acting as a:",
    answers: [
      { text: "Drug that stimulates respiratory centers in the brain.", correct: false },
      { text: "Competitive antagonist of opioid receptors.", correct: true },
      { text: "Strong stimulant that counteracts the CNS-depressant effects of the opiate.", correct: false },
      { text: "Diuretic that increases renal excretion of the opiate.", correct: false },
      { text: "Noncompetitive antagonist of opioid receptors.", correct: false },
    ],
  },
  {
    question: "Which one of the following local anaesthetics belongs to the ester group?",
    answers: [
      { text: "Procaine", correct: true },
      { text: "Bupivacaine", correct: false },
      { text: "Lignocaine", correct: false },
      { text: "Mepivacaine", correct: false },
      { text: "Etidocaine", correct: false },
    ],
  },
  {
    question: "Which of the following local anesthetics is used exclusively for its good surface activity and low toxic potential:",
    answers: [
      { text: "Cocaine", correct: false },
      { text: "Benzocaine", correct: true },
      { text: "Bupivacaine", correct: false },
      { text: "Procaine", correct: false },
      { text: "Lidocaine", correct: false },
    ],
  },
  {
    question: "The most dangerous adverse effect by using Fentanyl patches is:",
    answers: [
      { text: "Diarrhea", correct: false },
      { text: "Relaxation of respiratory muscles", correct: false },
      { text: "Hypertension", correct: false },
      { text: "Respiratory depression", correct: true },
      { text: "Skin reactions", correct: false },
    ],
  },
  {
    question: "Which of the following drugs can cause methemoglobinemia when used in larger doses for regional anesthesia?",
    answers: [
      { text: "Cocaine", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "Bupivacaine", correct: false },
      { text: "Procaine", correct: false },
      { text: "Prilocaine", correct: true },
    ],
  },
  {
    question: "With prolonged use in seizure states, which of the following drugs can cause coarsening of facial features, hirsutism, gingival hyperplasia and osteomalacia?",
    answers: [
      { text: "Valproic acid", correct: false },
      { text: "Carbamazepine", correct: false },
      { text: "Ethosuximide", correct: false },
      { text: "Phenytoin", correct: true },
      { text: "Gabapentin", correct: false },
    ],
  },
  {
    question: "A 60 year old lady who was undergoing a cardiac surgery got an agent which provided full analgesia without any cardiac effect, but the patient was having full awareness during surgery with recall after it . Most probably she got:",
    answers: [
      { text: "Ketamine", correct: true },
      { text: "Enflurane", correct: false },
      { text: "Fentanyl", correct: false },
      { text: "Thiopental", correct: false },
      { text: "Midazolam", correct: false },
    ],
  },
  {
    question: "Epinephrine added to a solution of lidocaine for local anesthesia will?",
    answers: [
      { text: "Cause cyanosis locally", correct: false },
      { text: "Increase the risk of convulsions", correct: false },
      { text: "Increase the duration of local anesthesia", correct: true },
      { text: "Increase the absorption of lidocaine", correct: false },
      { text: "Decrease the heart rate when absorbed", correct: false },
    ],
  },
  {
    question: "Which one of the following is a short-acting hypnotic ?",
    answers: [
      { text: "Phenobarbital", correct: false },
      { text: "Diazepam", correct: false },
      { text: "Chlordiazepoxide", correct: false },
      { text: "Thiopental", correct: true },
      { text: "Flurazepam", correct: false },
    ],
  },
  {
    question: "Which of the following drug belongs to the group of hypnotic drugs?",
    answers: [
      { text: "nitrazepam", correct: true },
      { text: "morphine", correct: false },
      { text: "valerian tincture", correct: false },
      { text: "cyclodol", correct: false },
      { text: "aminazine", correct: false },
    ],
  },
  {
    question: "Specify a hypnotic drug that has little effect on sleep patterns.",
    answers: [
      { text: "phenobarbital", correct: false },
      { text: "barbital-sodium", correct: false },
      { text: "Barbamil", correct: false },
      { text: "etaminal", correct: false },
      { text: "nitrazepam", correct: true },
    ],
  },
  {
    question: "The group of sedatives includes:",
    answers: [
      { text: "potassium iodide", correct: false },
      { text: "potassium chloride;", correct: false },
      { text: "potassium bromide;", correct: true },
      { text: "potassium perchlorate;", correct: false },
      { text: "potassium hydroxide.", correct: false },
    ],
  },
  {
    question: "A DRUG THAT PRODUCES SLEEP IS CALLED A(N)?",
    answers: [
      { text: "PLACEBO", correct: false },
      { text: "HYPNOTIC", correct: true },
      { text: "ANTISPASMODIC", correct: false },
      { text: "DIAPHORETIC", correct: false },
      { text: "MYOTIC", correct: false },
    ],
  },
  {
    question: "Which of the following drug is A partial agonist at 5-HT1A receptors?",
    answers: [
      { text: "Alprazolam", correct: false },
      { text: "Buspirone", correct: true },
      { text: "Flumazenil", correct: false },
      { text: "Phenobarbital", correct: false },
      { text: "Zolpidem", correct: false },
    ],
  },
  {
    question: "Which of the following is A competitive antagonist at benzodiazepine receptors",
    answers: [
      { text: "Flumazenil", correct: true },
      { text: "Midazolam", correct: false },
      { text: "Clonazepam", correct: false },
      { text: "Flunitrazepam", correct: false },
      { text: "Lorazepam", correct: false },
    ],
  },
  {
    question: "Which of the following drug is A hypnotic drug with negligible effects on sleep architecture and stages",
    answers: [
      { text: "Midazolam", correct: false },
      { text: "Thiopental", correct: false },
      { text: "Zolpidem", correct: true },
      { text: "Lorazepam", correct: false },
      { text: "Phenobarbital", correct: false },
    ],
  },
  {
    question: "Benzodiazepines have many different effects on the CNS. However they are devoid of which of the following effects?",
    answers: [
      { text: "Sedative", correct: false },
      { text: "Muscle relaxant", correct: false },
      { text: "Anticonvulsant", correct: false },
      { text: "Hypnotic", correct: false },
      { text: "Antipsychotic", correct: true },
    ],
  },
  {
    question: "A benzodiazepine with a very short half life (.2 hours)",
    answers: [
      { text: "Midazolam", correct: true },
      { text: "Lorazepam", correct: false },
      { text: "Phenobarbital", correct: false },
      { text: "Zolpidem", correct: false },
      { text: "Alprazolam", correct: false },
    ],
  },
  {
    question: "Which one of the following is a short-acting hypnotic and better for sleep induction compared to sleep maintenance?",
    answers: [
      { text: "Temazepam", correct: false },
      { text: "Flurazepam", correct: false },
      { text: "Zaleplon", correct: true },
      { text: "Buspirone", correct: false },
      { text: "Escitalopram", correct: false },
    ],
  },
  {
    question: "Which of the following agents has a rapid anxiolytic effect  and would be best for the acute management of anxiety?",
    answers: [
      { text: "Buspirone", correct: false },
      { text: "Venlafaxine", correct: false },
      { text: "Lorazepam", correct: true },
      { text: "Escitalopram", correct: false },
      { text: "Duloxetine", correct: false },
    ],
  },
  {
    question: "Which of the following sedative-hypnotic agents utilizes melatonin receptor agonism as the mechanism of action to induce sleep?",
    answers: [
      { text: "Zolpidem", correct: false },
      { text: "Eszopiclone", correct: false },
      { text: "Estazolam", correct: false },
      { text: "Ramelteon", correct: true },
      { text: "Diphenhydramine", correct: false },
    ],
  },
  {
    question: "Which agent is best used in the emergency room setting for patients who are believed to have received too much of a benzodiazepine drug or taken an overdose of benzodiazepines?",
    answers: [
      { text: "Diazepam", correct: false },
      { text: "Ramelteon", correct: false },
      { text: "Flumazenil", correct: true },
      { text: "Doxepin", correct: false },
      { text: "Naloxone", correct: false },
    ],
  },
  {
    question: "Which antipsychotic has the most sedative potential and is sometimes questionably used as a hypnotic agent in certain clinical settings?",
    answers: [
      { text: "Fluphenazine", correct: false },
      { text: "Thiothixene", correct: false },
      { text: "Quetiapine", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Iloperidone", correct: false },
    ],
  },
  {
    question: "Which of the following antipsychotic agents is available in a LAI formulation that may be useful for patients with difficulty adhering to therapy?",
    answers: [
      { text: "Asenapine", correct: false },
      { text: "Chlorpromazine", correct: false },
      { text: "Clozapine", correct: false },
      { text: "Quetiapine", correct: false },
      { text: "Risperidone", correct: true },
    ],
  },
  {
    question: "Which of the following antipsychotic agents is most associated with the possibility of a hematological dyscrasia such as agranulocytosis in a patient being treated for schizophrenia?",
    answers: [
      { text: "Chlorpromazine", correct: false },
      { text: "Buspirone", correct: false },
      { text: "Lithium", correct: true },
      { text: "Clozapine", correct: false },
      { text: "Asenapine", correct: false },
    ],
  },
  {
    question: "What effect does phenobarbital cause?",
    answers: [
      { text: "increases mental and physical performance", correct: false },
      { text: "promotes the onset of sleep", correct: true },
      { text: "improves mood", correct: false },
      { text: "stimulates breathing", correct: false },
      { text: "suppresses delusions, hallucinations", correct: false },
    ],
  },
  {
    question: "In case of respiratory depression caused by an overdose of hypnotic drugs - derivatives of barbituric acid - it is advisable to use:",
    answers: [
      { text: "cytiton", correct: false },
      { text: "lobelin", correct: false },
      { text: "nalorphine", correct: false },
      { text: "naloxone", correct: false },
      { text: "bemegrid", correct: true },
    ],
  },
  {
    question: "A 75-year-old man with obsessive compulsive disorder is treated with risperidone. After 3 weeks of therapy, he develops bradykinesia, masked facies, and reduced arm movements when walking. These symptoms are due to",
    answers: [
      { text: "D2 receptor antagonism.", correct: true },
      { text: "β-adrenergic receptor antagonism.", correct: false },
      { text: "Blockade of norepinephrine uptake into presynaptic terminals.", correct: false },
      { text: "α1-adrenergic receptor antagonism.", correct: false },
      { text: "5-HT receptor stimulation.", correct: false },
    ],
  },
  {
    question: "An 80-year-old woman is administered a CNS depressant drug for anxiety. When she abruptly stops the drug, after taking it for many years, she is likely to experience",
    answers: [
      { text: "Hyperexcitability.", correct: true },
      { text: "Increased sedation.", correct: false },
      { text: "Blurred vision", correct: false },
      { text: "Nausea.", correct: false },
      { text: "A depressed mood.", correct: false },
    ],
  },
  {
    question: "A 19-year-old college student has overdosed on phenobarbital. After standard supportive care, the physician in the ER should do which of the following to hasten the elimination of phenobarbital?",
    answers: [
      { text: "Use a drug to stimulate hepatic CYP 2C19", correct: false },
      { text: "Alkalinize the urine", correct: true },
      { text: "Acidify the urine", correct: false },
      { text: "Acidify the blood", correct: false },
      { text: "Alkalinize the blood", correct: false },
    ],
  },
  {
    question: "A 75-year-old man with obsessive compulsive disorder is treated with risperidone. After 3 weeks of therapy, he develops bradykinesia, masked facies, and reduced arm movements when walking. These symptoms are due to",
    answers: [
      { text: "D2 receptor antagonism.", correct: true },
      { text: "β-adrenergic receptor antagonism.", correct: false },
      { text: "Blockade of norepinephrine uptake into presynaptic terminals.", correct: false },
      { text: "α1-adrenergic receptor antagonism.", correct: false },
      { text: "5-HT receptor stimulation.", correct: false },
    ],
  },
  {
    question: "A 32-year-old woman is taking ramelteon for chronic insomnia. Ramelteon binds to",
    answers: [
      { text: "Nicotinic receptors.", correct: false },
      { text: "α1-adrenergic receptors.", correct: false },
      { text: "Muscarinic receptors M3.", correct: false },
      { text: "D2 dopaminergic receptors.", correct: false },
      { text: "Melatonin receptors M1 and M2.", correct: true },
    ],
  },
  {
    question: "A 29-year-old man uses secobarbital to satisfy his addiction to barbiturates. During the past week, he is imprisoned and is not able to obtain the drug. He is brought to the prison medical ward because of the onset of severe anxiety, increased sensitivity to light, dizziness, and generalized tremors. On physical examination, he is hyperreflexic. What agent should he be given to diminish his withdrawal symptoms?",
    answers: [
      { text: "Diazepam", correct: true },
      { text: "Doxepine", correct: false },
      { text: "Naloxane", correct: false },
      { text: "Flumazenil", correct: false },
      { text: "Clozapine", correct: false },
    ],
  },
  {
    question: "A 72-year-old woman with a history of anxiety that is treated with diazepam decides to triple her daily dose because of increasing fearfulness about “environmental noises”. Two days after her attempt at self-prescribing, she is found extremely lethargic and nonresponsive. On examination, she is found to be stuporous and have diminished reaction to pain and decreased reflexes. Respirations are 8/min and shallow. What drug should we give specifically to reverse these signs and symptoms?",
    answers: [
      { text: "Flumazenil", correct: true },
      { text: "Diazepam", correct: false },
      { text: "Naloxane", correct: false },
      { text: "Doxepin", correct: false },
      { text: "Clozapine", correct: false },
    ],
  },
  {
    question: "A 54-year-old man was admitted to the hospital for a laparoscopic hernia repair under general anesthesia. A suitable dose of diazepam was given IV and the patient lost consciousness in two minutes. He regained consciousness about 45 minutes later. Knowing that the half-life of diazepam is about 40 hours, which of the following phrases best explains the short action of the drug?",
    answers: [
      { text: "Rapid metabolism of the drug within the CNS", correct: false },
      { text: "Rapid excretion of the drug by the kidney", correct: false },
      { text: "Redistribution of the drug from CNS to other tissues", correct: true },
      { text: "Biotransformation of the drug to active metabolites by the liver", correct: false },
      { text: "Development of a rapid tolerance to drug effects", correct: false },
    ],
  },
  {
    question: "A 35-year-old man complained to his physician of attacks of intense terror during sleep, such as feeling crushed, and often wakes up with scream, but cannot remember any specific dream. He also felt anxious and restless from time to time during the day. Which of the following drugs would show good short-term decrease of patient's symptoms?",
    answers: [
      { text: "Lithium", correct: false },
      { text: "Temazepam", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Imipramine", correct: false },
      { text: "Phenobarbital", correct: false },
    ],
  },
  {
    question: "A 62-year-old woman recently diagnosed with generalized anxiety disorder had been on a treatment with venlafaxine but the therapy was stopped because of a persistent headache that the psychiatrist thought drug related. A treatment with buspirone was started. Which of the following brain regions was most likely involved in the therapeutic effect of the drug?",
    answers: [
      { text: "Auditory cortex", correct: false },
      { text: "Amygdala", correct: true },
      { text: "Putamen", correct: false },
      { text: "Nucleus accumbens", correct: false },
      { text: "Area postrema", correct: false },
    ],
  },
  {
    question: "A 66-year-old female who recently lost her husband told her physician that she was not sleeping at night. Further questioning indicated that she did not have depression or substance abuse. The physician decided to start a short treatment with a drug that acts by increasing the inhibitory action of short interneurons in several brain areas. Which of the following drug was most likely prescribed?",
    answers: [
      { text: "Oxazepam", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Clomipramine", correct: false },
      { text: "Paroxetine", correct: false },
      { text: "Diazepam", correct: false },
    ],
  },
  {
    question: "A 47-year-old woman complained to her physician that she could get to sleep when she went to bed but woke up several times during the night an never felt refreshed in the morning. The woman had no medical problems and took no medications. Which of the following drugs would be appropriate for this patient?",
    answers: [
      { text: "Flunitrazepam", correct: false },
      { text: "Buspirone", correct: false },
      { text: "Eszopiclone", correct: true },
      { text: "Haloperidol", correct: false },
      { text: "Imipramine", correct: false },
    ],
  },
  {
    question: "A 66-year-old man, who had been an heavy smoker for 30 years, was undergoing bronchoscopy for a suspected bronchogenic carcinoma. Before starting the intervention the anesthesiologist administered a drug in order to prevent the situational anxiety and to provide anterograde amnesia of the procedure. Which of the following drugs was most likely given?",
    answers: [
      { text: "Buspirone", correct: false },
      { text: "Zolpidem", correct: false },
      { text: "Chlorpromazine", correct: false },
      { text: "Triazolam", correct: true },
      { text: "Haloperidol", correct: false },
    ],
  },
  {
    question: "A 34-year-old woman rushed to the emergency room complaining that, 'out of the blue', she had been seized by overwhelming symptoms. She felt light-headed, dizzy and feared of losing control or going crazy. She also felt nausea, a lump in her throat, shortness of breath and palpitations. The woman had never had similar symptoms in the past and denied past or present use of any illicit drugs or alcohol. A preliminary diagnosis   was made and a drug was given IV to offset the patient's symptoms. Which of the following drugs was most likely given?",
    answers: [
      { text: "Venlafaxine", correct: false },
      { text: "Thiopental", correct: false },
      { text: "Buspirone", correct: false },
      { text: "Eszopiclone", correct: false },
      { text: "Midazolam", correct: true },
    ],
  },
  {
    question: "A 66-year-old man was brought to the hospital by his daughter who referred that he has been confused and lethargic during the last two days. Past history of the patient was significant for a transient ischemic attack three years ago, and for a long-lasting habit of  drinking large quantities of grapefruit juice. Recently the patient became anxious and fearful of imminent death, and the physician prescribed alprazolam, two tablets daily. Which of the following phrases best explains the most likely cause of the patient's symptoms?",
    answers: [
      { text: "Grapefruit juice induced inhibition of alprazolam metabolism", correct: true },
      { text: "Increased brain sensitivity to alprazolam due to previous ischemic attack", correct: false },
      { text: "Grapefruit juice induced decrease of alprazolam elimination by the kidney", correct: false },
      { text: "Increased brain sensitivity to alprazolam due to old age", correct: false },
      { text: "Grapefruit juice induced increase of alprazolam intestinal absorption", correct: false },
    ],
  },
  {
    question: "A 25-year-old man was brought into the emergency room in an unconscious state by his roommate. The roommate stated that the man was very depressed during the last few days and that he had been drinking whisky all day. The roommate also said he found an empty, not labeled drug bottle next to him on the bed. Which of the following drug most likely caused the patient's intoxication?",
    answers: [
      { text: "Ramelteon", correct: false },
      { text: "Diazepam", correct: true },
      { text: "Amphetamine", correct: false },
      { text: "Lithium", correct: false },
      { text: "Amitriptyline", correct: false },
    ],
  },
  {
    question: "A 61-year-old obese man complained of difficulty in falling asleep and asked his physician for a sleeping pill. The man had been recently diagnosed with obstructive sleep apnea, most likely due to obesity. Which of the following drugs would be contraindicated for this patient?",
    answers: [
      { text: "Temazepam", correct: true },
      { text: "Imipramine", correct: false },
      { text: "Protriptyline", correct: false },
      { text: "Acetazolamide", correct: false },
      { text: "Medroxyprogesterone", correct: false },
    ],
  },
  {
    question: "A 45-year-old man recently diagnosed with a panic disorder, had started a treatment which sertraline but the drug caused some sexual dysfunction and the physician decided to switch to alprazolam, two tablet daily. Which of the following molecular actions on neuron membranes most likely mediated the therapeutic effect of the drug in the patient's disorder?",
    answers: [
      { text: "Decreased outward Na+ current", correct: false },
      { text: "Increased inward Cl- current", correct: true },
      { text: "Decreased outward K+ current", correct: false },
      { text: "Increased inward Ca++ current", correct: false },
      { text: "Increased inward H+ current", correct: false },
    ],
  },
  {
    question: "A 42-year-old man, suffering from rectal bleeding, was admitted to the hospital for a colonoscopy. An IV injection of diazepam was given before the procedure to induce a conscious sedation. Which of the following symptoms did the patient most likely experience upon recovery from sedation?",
    answers: [
      { text: "Nausea and vomiting", correct: false },
      { text: "Increased respiratory rate", correct: false },
      { text: "Anterograde amnesia", correct: true },
      { text: "Limb muscle spasms", correct: false },
      { text: "Delusional thoughts", correct: false },
    ],
  },
  {
    question: "This,drug,used,in,the,management,of,insomnia,facilitates,the,inhibitory,actions,of,GABA,,but,it,lacks,anticonvulsant,or,muscle-relaxing,properties,and,has,minimal,effect,on,sleep,architecture.,Its,actions,are,antagonized,by,flumazenil.",
    answers: [
      { text: "Buspirone-", correct: false },
      { text: "Chlordiazepoxide", correct: false },
      { text: "Zolpidem", correct: true },
      { text: "Ramelteon-", correct: false },
      { text: "Phenobarbital", correct: false },
    ],
  },
  {
    question: "Benzodiazepine antagonist :",
    answers: [
      { text: "Diazepam", correct: false },
      { text: "Naltrexone", correct: false },
      { text: "Flumazenil", correct: true },
      { text: "Propranolol", correct: false },
      { text: "Pralidoxime", correct: false },
    ],
  },
  {
    question: "Effective in managing acute ethanol withdrawal:",
    answers: [
      { text: "buspirone", correct: false },
      { text: "chlorpromazine", correct: false },
      { text: "amantidine", correct: false },
      { text: "diazepam", correct: true },
      { text: "tranylcypromine", correct: false },
    ],
  },
  {
    question: "Which of the following benzodiazepine especially effective in managing panic disorder?",
    answers: [
      { text: "Triazolam", correct: false },
      { text: "Flurazepam", correct: false },
      { text: "Flumazenil", correct: false },
      { text: "Alprazolam", correct: true },
      { text: "Thiopental", correct: false },
    ],
  },
  {
    question: "Benzodiazepine action is associated with this neurotransmitter:",
    answers: [
      { text: "cholinergic", correct: false },
      { text: "adrenergic", correct: false },
      { text: "glycine", correct: false },
      { text: "glutamate", correct: false },
      { text: "GABA", correct: true },
    ],
  },
  {
    question: "Probably acts by binding to a component of the GABA receptor-coupled chloride channel, prolonging the duration of channel open state when the receptor is exposed to GABA:",
    answers: [
      { text: "chlordiazepoxide", correct: false },
      { text: "pentobarbital", correct: true },
      { text: "fentanyl", correct: false },
      { text: "imipramine", correct: false },
      { text: "doxepin", correct: false },
    ],
  },
  {
    question: "An accidental overdosage of Chlordiazepoxide was observed in a 6 year old child, he may be best treated by giving him an antagonist like:",
    answers: [
      { text: "Flumazenil", correct: true },
      { text: "Naloxone", correct: false },
      { text: "Fomepizole", correct: false },
      { text: "Nalorphine", correct: false },
      { text: "Naltrexone", correct: false },
    ],
  },
  {
    question: "A young man of 24 years is suffering from Generalized Anxiety Disorder.Which drug may be preferred for his problem?",
    answers: [
      { text: "Zolpidem", correct: false },
      { text: "Buspiron", correct: true },
      { text: "Midazolam", correct: false },
      { text: "Triazolam", correct: false },
      { text: "Phenobarbital", correct: false },
    ],
  },
  {
    question: "Indicate a selective inhibitor of MAO :",
    answers: [
      { text: "Levodopa", correct: false },
      { text: "Amantadine", correct: false },
      { text: "Tolcapone", correct: false },
      { text: "Selegiline", correct: true },
      { text: "Metoprolol", correct: false },
    ],
  },
  {
    question: "Which one of following is an appropriate therapeutic use for imipramine?",
    answers: [
      { text: "Insomnia", correct: false },
      { text: "Epilepsy", correct: false },
      { text: "Bed-wetting in children", correct: true },
      { text: "Glaucoma", correct: false },
      { text: "Mania", correct: false },
    ],
  },
  {
    question: "Which of the following drug the antipsychotic drug?",
    answers: [
      { text: "nitrazepam", correct: false },
      { text: "phenobarbital", correct: false },
      { text: "cyclodol", correct: false },
      { text: "aminazine", correct: true },
      { text: "caffeine", correct: false },
    ],
  },
  {
    question: "Indicate the main effect of aminazine.",
    answers: [
      { text: "suppression of manifestations of depression", correct: false },
      { text: "suppression of delusions, hallucinations", correct: true },
      { text: "stimulation of the centers of the medulla oblongata", correct: false },
      { text: "increases motor activity", correct: false },
      { text: "increases the tone of skeletal muscles", correct: false },
    ],
  },
  {
    question: "Indicate the main indication for the appointment of neuroleptics.",
    answers: [
      { text: "intense pain of traumatic origin", correct: false },
      { text: "parkinsonism", correct: false },
      { text: "psychosis", correct: true },
      { text: "neurosis", correct: false },
      { text: "depression", correct: false },
    ],
  },
  {
    question: "Specify the drug used to create neuroleptanalgesia.",
    answers: [
      { text: "diazepam", correct: false },
      { text: "phenazepam", correct: false },
      { text: "droperidol", correct: true },
      { text: "phenobarbital", correct: false },
      { text: "diphenhydramine.", correct: false },
    ],
  },
  {
    question: "Specify antidepressant:",
    answers: [
      { text: "thiopental sodium", correct: false },
      { text: "phenobarbital", correct: false },
      { text: "levodopa", correct: false },
      { text: "carbidopa", correct: false },
      { text: "amitriptyline", correct: true },
    ],
  },
  {
    question: "With the use of what drug substance is the occurrence of insomnia? Po",
    answers: [
      { text: "phenobarbital", correct: false },
      { text: "phenazepam", correct: false },
      { text: "aminazine", correct: false },
      { text: "nialamide", correct: true },
      { text: "lithium carbonate", correct: false },
    ],
  },
  {
    question: "Specify a drug from the group of antidepressants:",
    answers: [
      { text: "aminazine", correct: false },
      { text: "phenazepam", correct: false },
      { text: "fluoxetine", correct: true },
      { text: "piracetam", correct: false },
      { text: "ciprofloxacin", correct: false },
    ],
  },
  {
    question: "Specify the main indication for the appointment of lithium salts.",
    answers: [
      { text: "intense pain of traumatic origin", correct: false },
      { text: "parkinsonism", correct: false },
      { text: "neuroses", correct: false },
      { text: "manic states", correct: true },
      { text: "depression", correct: false },
    ],
  },
  {
    question: "Which of the following statements concerning tricyclic antidepressants is correct?",
    answers: [
      { text: "All of the tricyclic antidepressants show similar therapeutic efficacy", correct: true },
      { text: "Hypertension is a common adverse effect", correct: false },
      { text: "The tricyclic antidepressants selectively inhibit uptake of NE into the neuron", correct: false },
      { text: "These drugs show an immediate therapeutic effect", correct: false },
      { text: "These drugs must be administered intramuscularly", correct: false },
    ],
  },
  {
    question: "Which of the following is common to the tricyclic antidepressants and MAO inhibitors?",
    answers: [
      { text: "They can produce sedation", correct: false },
      { text: "They produce physical dependence", correct: false },
      { text: "They show strong interaction with certain foods", correct: false },
      { text: "They can produce postural hypotension", correct: true },
      { text: "They decreaseavailability of epinephrine and serotonin in the synaptic cleft", correct: false },
    ],
  },
  {
    question: "Which of the following antidepressant agents exhibits an amphetamine-like CNS stimulation?",
    answers: [
      { text: "imipramine", correct: false },
      { text: "Doxepine", correct: false },
      { text: "Tranylcypromine", correct: true },
      { text: "Trazodone", correct: false },
      { text: "Lithium salts", correct: false },
    ],
  },
  {
    question: "Indicate group of grugs: They have an antipsychotic effect and a tranquilizing effect. It is used to treat psychosis. Side effect: extrapyramidal disorders.",
    answers: [
      { text: "narcotic analgesics", correct: false },
      { text: "antidepressants", correct: false },
      { text: "lithium salts", correct: false },
      { text: "tranquilizers", correct: false },
      { text: "neuroleptics", correct: true },
    ],
  },
  {
    question: "Indicate the mechanism of action of aminazine:",
    answers: [
      { text: "excites α-adrenergic receptors", correct: false },
      { text: "initiates M-cholinergic receptors", correct: false },
      { text: "excites dopamine receptors", correct: false },
      { text: "blocks dopamine receptors", correct: true },
      { text: "blocks monoamine oxidase", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is used to treat mental illness accompanied by delusions and hallucinations?",
    answers: [
      { text: "levodopa", correct: false },
      { text: "cyclodol", correct: false },
      { text: "nialamide", correct: false },
      { text: "fluorophenazine", correct: true },
      { text: "Meridyl", correct: false },
    ],
  },
  {
    question: "Which of the following drugs cause the development of drug parkinsonism?",
    answers: [
      { text: "Hypnotic drugs", correct: false },
      { text: "tranquilizers", correct: false },
      { text: "neuroleptics", correct: true },
      { text: "lithium salts", correct: false },
      { text: "β-adrenergic blockers.", correct: false },
    ],
  },
  {
    question: "A 32-year-old woman is taking sertraline for mild depression. This drug increases the availability of serotonin (5-HT) at the postsynaptic membrane because it",
    answers: [
      { text: "Blocks MAO which degrades 5-HT.", correct: false },
      { text: "Inhibits the presynaptic uptake of 5-HT.", correct: true },
      { text: "Stimulates 5-HT receptors.", correct: false },
      { text: "Enhances the release of 5-HT from presynaptic nerve endings.", correct: false },
      { text: "Enhances the synthesis of 5-HT.", correct: false },
    ],
  },
  {
    question: "SSRIs are much less effective than tricyclic antidepressants in the management of",
    answers: [
      { text: "Bulimia", correct: false },
      { text: "Chronic pain of neuropathic origin", correct: true },
      { text: "Generalized anxiety disorder", correct: false },
      { text: "Obsessive-compulsive disorder", correct: false },
      { text: "Premenstrual dysphoric disorder", correct: false },
    ],
  },
  {
    question: "A 22-year-old woman is being treated with amitriptyline or depression. She, and her family, should be cautioned about not seeing a therapeutic effect for",
    answers: [
      { text: "24 hours.", correct: false },
      { text: "3 to 4 weeks.", correct: true },
      { text: "1 week.", correct: false },
      { text: "3 days.", correct: false },
      { text: "12 hours", correct: false },
    ],
  },
  {
    question: "A 56-year-old man who has a 30-year history of smoking cigarettes is being treated for schizophrenia with clozapine. He is hospitalized for an acute exacerbation of his psychoses; his clozapine therapy is continued. During the third week of his hospital stay, he has a seizure that is thought to be due to clozapine toxicity. The clozapine toxicity in this patient is likely due to",
    answers: [
      { text: "A decrease in his blood-brain barrier function.", correct: false },
      { text: "Decreased renal excretion of clozapine.", correct: false },
      { text: "Increased GI absorption of clozapine", correct: false },
      { text: "A pharmacy mistake.", correct: false },
      { text: "Decreased metabolism of clozapine.", correct: true },
    ],
  },
  {
    question: "The neuroleptic drugs:",
    answers: [
      { text: "are equally effective against the positive and negative symptoms of schizophrenia", correct: false },
      { text: "can cause blurred vision, urinary retention and other signs of muscarinic blockade", correct: true },
      { text: "bind selectively to D2-dopaminergic receptors", correct: false },
      { text: "have antiparkinsonism effects similar to levodopa", correct: false },
      { text: "have a rapid onset of antipsychotic action", correct: false },
    ],
  },
  {
    question: "Which of the following antipsychotic agents is considered to be the most potent and, thus, have the highest risk of extrapyramidal symptoms?",
    answers: [
      { text: "Thioridazine", correct: false },
      { text: "Fluphenazine", correct: true },
      { text: "Quetiapine", correct: false },
      { text: "Chlorpromazine", correct: false },
      { text: "Clozapine", correct: false },
    ],
  },
  {
    question: "Which one of the following antipsychotics has been shown to be a partial agonist at the dopamine D2 receptor?",
    answers: [
      { text: "Aripiprazole", correct: true },
      { text: "Clozapine", correct: false },
      { text: "Haloperidol", correct: false },
      { text: "Risperidone", correct: false },
      { text: "Thioridazine", correct: false },
    ],
  },
  {
    question: "Which agent is best known to have the side effect of decreasing the thyroid function of the patient being chronically treated with this agent?",
    answers: [
      { text: "Carbamazepine", correct: false },
      { text: "Lithium", correct: true },
      { text: "Valproic acid", correct: false },
      { text: "Chlorpromazine", correct: false },
      { text: "Lurasidone", correct: false },
    ],
  },
  {
    question: "Which antidepressants has, as its two principle mechanisms of action, 5-HT2a receptor antagonism and a2 receptor antagonism?",
    answers: [
      { text: "Fluoxetine", correct: false },
      { text: "Doxepin", correct: false },
      { text: "Maprotiline", correct: false },
      { text: "Mirtazapine", correct: true },
      { text: "Selegiline", correct: false },
    ],
  },
  {
    question: "Which mood stabilizer is completely renally eliminated and may be beneficial for patients with hepatic impairment?",
    answers: [
      { text: "Valproic acid", correct: false },
      { text: "Carbamazepine", correct: false },
      { text: "Lithium", correct: true },
      { text: "Risperidone", correct: false },
      { text: "Aripiprazole", correct: false },
    ],
  },
  {
    question: "Which of the antidepressants is the most sedating?",
    answers: [
      { text: "Fluoxetine", correct: false },
      { text: "Duloxetine", correct: false },
      { text: "Nortriptyline", correct: true },
      { text: "Citalopram", correct: false },
      { text: "Venlafaxine", correct: false },
    ],
  },
  {
    question: "Which antidepressant has, as its two proposed principle mechanisms of action, 5-HT1a receptor partial agonism and 5-HT reuptake inhibition?",
    answers: [
      { text: "Fluoxetine", correct: false },
      { text: "Aripiprazole", correct: false },
      { text: "Maprotiline", correct: false },
      { text: "Vilazodone", correct: true },
      { text: "Mirtazapine", correct: false },
    ],
  },
  {
    question: "Which of the following agents exert its therapeutic effect in multiple sclerosis via potassium channel blockade?",
    answers: [
      { text: "Dalfampridine", correct: true },
      { text: "Donepezil", correct: false },
      { text: "Riluzole", correct: false },
      { text: "Bromocriptine", correct: false },
      { text: "Rotigotine", correct: false },
    ],
  },
  {
    question: "A 55-year-old teacher began to experience changes in mood. He was losing interest in his work and lacked the desire to play his daily tennis match. He was preoccupied with feelings of guilt, worthlessness, and hopelessness. In addition to the psychiatric symptoms, the patient complained of muscle aches throughout his body. Physical and laboratory tests were unremarkable. After 6 weeks of therapy with fluoxetine, his symptoms resolved. However, the patient complains of sexual dysfunction. Which of the following drugs might be useful in this patient?",
    answers: [
      { text: "Fluvoxamine", correct: false },
      { text: "Sertraline", correct: false },
      { text: "Citalopram", correct: false },
      { text: "Mirtazapine", correct: true },
      { text: "Lithium", correct: false },
    ],
  },
  {
    question: "A 25-year-old woman has a long history of depressive symptoms accompanied by body aches and pain secondary to a car accident 2 years earlier. Physical and laboratory tests are unremarkable. Which of the following drugs might be useful in this patient?",
    answers: [
      { text: "Fluoxetine", correct: false },
      { text: "Sertraline", correct: false },
      { text: "Phenelzine", correct: false },
      { text: "Mirtazapine", correct: false },
      { text: "Duloxetine", correct: true },
    ],
  },
  {
    question: "A 51-year-old woman with symptoms of major depression also has angle-closure glaucoma. Which of the following antidepressants should be avoided in this patient?",
    answers: [
      { text: "Amitriptyline", correct: true },
      { text: "Sertraline", correct: false },
      { text: "Bupropion", correct: false },
      { text: "Mirtazapine", correct: false },
      { text: "Fluvoxamine", correct: false },
    ],
  },
  {
    question: "A 36-year-old man presents with symptoms of compulsive behavior. If anything is out of order, he feels that ‘work will not be accomplished effectively or efficiently’. He realizes that his behavior is interfering with his ability to accomplish his daily tasks but cannot seem to stop himself. Which of the following drugs would be most helpful to this patient?",
    answers: [
      { text: "Imipramine", correct: false },
      { text: "Fluvoxamine", correct: true },
      { text: "Amitriptyline", correct: false },
      { text: "Tranylcypromine", correct: false },
      { text: "Lithium", correct: false },
    ],
  },
  {
    question: "Which agent would be a poor choice in a 70-year-old elderly female with depressive symptoms due to the drug having significant a1 receptor antagonism and thus a higher risk for falls due to orthostatic hypotension?",
    answers: [
      { text: "Lithium", correct: false },
      { text: "Bupropion", correct: false },
      { text: "Escitalopram", correct: false },
      { text: "Imipramine", correct: true },
      { text: "Sertraline", correct: false },
    ],
  },
  {
    question: "An adolescence male is newly diagnosed with schizophrenia. Which of the following antipsychotic agents may have the best chance to improve his apathy and blunted effect?",
    answers: [
      { text: "Chlorpromazine", correct: false },
      { text: "Fluphenazine", correct: false },
      { text: "Haloperidol", correct: false },
      { text: "Risperidone", correct: true },
      { text: "Thioridazine", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman with schizoaffective disorder (combination of mood and psychotic symptoms) reports difficulty falling asleep. Which of the following would be most beneficial in this patient?",
    answers: [
      { text: "Lithium", correct: false },
      { text: "Chlorpromazine", correct: false },
      { text: "Haloperidol", correct: false },
      { text: "Paliperidone", correct: true },
      { text: "Ziprasidone", correct: false },
    ],
  },
  {
    question: "A 30-year-old male patient who is treated with haloperidol for his diagnosis of schizophrenia is considered to be well-managed symptomatically for his psychotic symptoms. However, he is reporting restlessness, the inability to sit still at the dinner table, and his family notices that he is pacing up and down the hallway frequently. Of the following, which is the best medication to treat this antipsychotic-induced akathisia?",
    answers: [
      { text: "Benztropine", correct: false },
      { text: "Dantrolene", correct: false },
      { text: "Amoxapine", correct: false },
      { text: "Bromocriptine", correct: false },
      { text: "Propranolol", correct: true },
    ],
  },
  {
    question: "A very upset mother brings in her 10 year old son to ask help in dealing with his bed-wetting. Which of the following drugs might alleviate this problem?",
    answers: [
      { text: "Fluoxetine", correct: false },
      { text: "Imipramine", correct: true },
      { text: "Tranylcypromine", correct: false },
      { text: "Trazodone", correct: false },
      { text: "Benztropine", correct: false },
    ],
  },
  {
    question: "A 45-year-old woman presented to the psychiatric hospital complaining of depression, hopelessness about her condition, sleep disturbances, and poor appetite. She had had seven previous hospitalizations for manic or depressive episodes and had experienced five mood swings in the past year, including episodes of depression and hypomania. Despite adequate plasma levels, she had not responded to lithium. Which of the following drugs would be appropriate for this patient?",
    answers: [
      { text: "Haloperidol", correct: false },
      { text: "Thioridazine", correct: false },
      { text: "Valproate", correct: true },
      { text: "Fluoxetine", correct: false },
      { text: "Amitriptyline", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is potentially dangerous in a single drug overdose?",
    answers: [
      { text: "Moclobemide", correct: false },
      { text: "Paroxetine", correct: false },
      { text: "Sertraline", correct: false },
      { text: "Trazodone", correct: false },
      { text: "Amoxapine", correct: true },
    ],
  },
  {
    question: "Which of the below side effects is common with antipsychotics?",
    answers: [
      { text: "Blurred vision", correct: false },
      { text: "Dry mouth", correct: false },
      { text: "Drowsiness", correct: false },
      { text: "Muscle spasms", correct: false },
      { text: "Weight loss", correct: true },
    ],
  },
  {
    question: "Which of the following is an SSRI antidepressant?",
    answers: [
      { text: "Mianserin", correct: false },
      { text: "Venlafaxine", correct: false },
      { text: "Amoxapine", correct: false },
      { text: "Fluvoxamine", correct: true },
      { text: "Amitryptylline", correct: false },
    ],
  },
  {
    question: "Which of the following drug is safest in patients with cardiac conduction disorder and depression:",
    answers: [
      { text: "Dotheipin", correct: false },
      { text: "Mianserin", correct: false },
      { text: "Doxepine", correct: false },
      { text: "Phenelzine", correct: true },
      { text: "Amitryptylline", correct: false },
    ],
  },
  {
    question: "Therapeutic effects of typical antipsyhotics are predominantly due to blockade of?",
    answers: [
      { text: "Dopaminergic receptors", correct: true },
      { text: "GABA receptors", correct: false },
      { text: "Serotoninergic receptors", correct: false },
      { text: "Norepinephrine receptors", correct: false },
      { text: "Cholinergic receptors", correct: false },
    ],
  },
  {
    question: "The long term side effect , tardive dyskinesia,occurs in which percentage of patients taking typical antipsychotics?",
    answers: [
      { text: "5% to 10%", correct: false },
      { text: "15% to 20%", correct: true },
      { text: "25% to 30%", correct: false },
      { text: "35% to 40%", correct: false },
      { text: "45% to 50%", correct: false },
    ],
  },
  {
    question: "What drug is used to relieve status epilepticus?",
    answers: [
      { text: "phenobarbital", correct: false },
      { text: "diphenin", correct: false },
      { text: "diazepam", correct: true },
      { text: "ethosuximide", correct: false },
      { text: "clonazepam", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of levodopa?",
    answers: [
      { text: "increases the content of gamma-aminobutyric acid (GABA) in the CNS", correct: false },
      { text: "increases the content of enkephalins in the CNS", correct: false },
      { text: "increases the content of dopamine in the CNS", correct: true },
      { text: "increases the content of serotonin in the CNS", correct: false },
      { text: "increases the content of acetylcholine in the CNS", correct: false },
    ],
  },
  {
    question: "Specify an antiparkinsonian agent.",
    answers: [
      { text: "aminazine", correct: false },
      { text: "chlorprothixene", correct: false },
      { text: "droperidol", correct: false },
      { text: "cyclodol", correct: true },
      { text: "tubocurarine", correct: false },
    ],
  },
  {
    question: "Specify an antiparkinsonian agent that affects dopaminergic processes in the central nervous system.",
    answers: [
      { text: "atropine", correct: false },
      { text: "cyclodol", correct: false },
      { text: "scopolamine", correct: false },
      { text: "Levodopa", correct: true },
      { text: "aminazine", correct: false },
    ],
  },
  {
    question: "Indicate the drug from the group of antiparkinsonian drugs:",
    answers: [
      { text: "acetylsalicylic acid", correct: false },
      { text: "aminocaproic acid", correct: false },
      { text: "levodopa", correct: true },
      { text: "atenolol", correct: false },
      { text: "falimint", correct: false },
    ],
  },
  {
    question: "This drug can both stimulate the release and potentiate the action of ADH:",
    answers: [
      { text: "Aripiprazole", correct: false },
      { text: "Carbamazepine", correct: true },
      { text: "Lithium", correct: false },
      { text: "Risperidone", correct: false },
      { text: "Valproate", correct: false },
    ],
  },
  {
    question: "This drug can increase the risk of spina bifida in the newborn when given during pregnancy.",
    answers: [
      { text: "Aripiprazole", correct: false },
      { text: "Lithium", correct: false },
      { text: "Valproate", correct: true },
      { text: "Carbamazepine", correct: false },
      { text: "Risperidone", correct: false },
    ],
  },
  {
    question: "This drug is effective for the treatment of acute mania, tonic-clonic seizure, and absence seizure.",
    answers: [
      { text: "Aripiprazole", correct: false },
      { text: "Lithium", correct: false },
      { text: "Carbamazepine", correct: false },
      { text: "Quietapine", correct: false },
      { text: "Valproate", correct: true },
    ],
  },
  {
    question: "The hepatic clearance of this drug is zero.",
    answers: [
      { text: "Lithium", correct: true },
      { text: "Risperidone", correct: false },
      { text: "Carbamazepine", correct: false },
      { text: "Quietapine", correct: false },
      { text: "Valproate", correct: false },
    ],
  },
  {
    question: "Which of the following is a first-line medication for generalized tonic-clonic seizures?",
    answers: [
      { text: "Ethosuximide", correct: false },
      { text: "Felbamate", correct: false },
      { text: "Vigabatrin", correct: false },
      { text: "Ezogabine", correct: false },
      { text: "Topiramate", correct: true },
    ],
  },
  {
    question: "Which of the following combination of antiparkinsonian drugs is an appropriate treatment plan?",
    answers: [
      { text: "Amantadine, carbidopa, entacapone", correct: false },
      { text: "Levodopa, carbidopa, entacapone", correct: true },
      { text: "Ropinirole, selegiline, entacapone", correct: false },
      { text: "Pramipexole, carbidopa, entacapone", correct: false },
      { text: "Ropinirole, carbidopa, selegiline", correct: false },
    ],
  },
  {
    question: "Peripheral adverse effects of levodopa, including nausea, hypotension, and cardiac arrhythmias, can be diminished by including which of the following drugs in the therapy?",
    answers: [
      { text: "Amantadine", correct: false },
      { text: "Ropinirole", correct: false },
      { text: "Carbidopa", correct: true },
      { text: "Tolcapone", correct: false },
      { text: "Pramipexol", correct: false },
    ],
  },
  {
    question: "Which of the following antiparkinsonian drugs may cause vasospasm?",
    answers: [
      { text: "Amantadine", correct: false },
      { text: "Bromocriptine", correct: true },
      { text: "Carbidopa", correct: false },
      { text: "Entacapone", correct: false },
      { text: "Ropinirole", correct: false },
    ],
  },
  {
    question: "Which of the following agents may cause tremors as a side effect and, thus, should be used with caution in patients with Parkinson’s diseases, even though it is also indicated for the treatment of dementia associated with Parkinson’s disease?",
    answers: [
      { text: "Benztropine", correct: false },
      { text: "Rotigotine", correct: false },
      { text: "Rivastigmine", correct: true },
      { text: "Dimethyl fumarate", correct: false },
      { text: "Atropine", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is most useful for the treatment of absence seizures?",
    answers: [
      { text: "Topiramate", correct: false },
      { text: "Tiagabine", correct: false },
      { text: "Levetiracetam", correct: false },
      { text: "Lamotrigine", correct: true },
      { text: "Zonisamide", correct: false },
    ],
  },
  {
    question: "Which one of the following statements is correct?",
    answers: [
      { text: "Chlorpromazine is indicated in treating the nausea of levodopa treatment", correct: false },
      { text: "Vitamin B6 increases the effectiveness of levodopa", correct: false },
      { text: "Administration of dopamine is an effective treatment of Parkinsons disease", correct: false },
      { text: "Levodopa-induced nausea is reduced by carbidopa", correct: true },
      { text: "Nonspecific MAO-inhibitors, such as phenelzine, are a useful adjunct to levodopa therapy", correct: false },
    ],
  },
  {
    question: "Which of the following drug with antiviral properties can be used as an antiparkinsonian agent?",
    answers: [
      { text: "Zidovudine", correct: false },
      { text: "Amantadine", correct: true },
      { text: "Arbidol", correct: false },
      { text: "Cycloferon", correct: false },
      { text: "Acyclovir", correct: false },
    ],
  },
  {
    question: "A 29-year-old woman is being treated with valproic acid for simple partial seizures. She is at risk for developing a rise in her plasma",
    answers: [
      { text: "Calcium.", correct: false },
      { text: "Blood urea nitrogen (BUN).", correct: false },
      { text: "Potassium.", correct: false },
      { text: "Glucose", correct: false },
      { text: "Hepatic transaminases.", correct: true },
    ],
  },
  {
    question: "A 44-year-old man has levetiracetam added to his therapy because he is refractory to his current antiseizure regimen. Levetiracetam acts by",
    answers: [
      { text: "Antagonizing D2 dopaminergic receptors.", correct: false },
      { text: "An unknown mechanism.", correct: true },
      { text: "Inactivation of voltage-gated Na+ channels.", correct: false },
      { text: "Enhanced GABA synaptic transmission.", correct: false },
      { text: "Reducing current through -type Ca2+ channels.", correct: false },
    ],
  },
  {
    question: "A 45-year-old man with a long history of bipolar disorder had been stable on a maintenance lithium treatment for the past year. Which of the following statements best describes a current working hypothesis about the molecular mechanism of action of lithium?",
    answers: [
      { text: "Increased synthesis of adenylyl cyclase", correct: false },
      { text: "Increased serotonin reuptake into serotonergic terminals", correct: false },
      { text: "Decreased synthesis of IP3 and DAG", correct: true },
      { text: "Increased synthesis of inositol monophosphatase", correct: false },
      { text: "Up-regulation of beta adrenergic receptors", correct: false },
    ],
  },
  {
    question: "A 55-year-old man suffering from bipolar disorder started a therapy which included lithium, two tablets daily. Which of the following adverse effects might most likely occur during the first days of therapy?",
    answers: [
      { text: "Constipation", correct: false },
      { text: "Insomnia", correct: false },
      { text: "Edema", correct: true },
      { text: "Weight loss", correct: false },
      { text: "Hypertension", correct: false },
    ],
  },
  {
    question: "A 9-year-old boy is sent for neurologic evaluation because of episodes of apparent inattention. Over the past year, the child has experienced episodes during which he develops a blank look on his face and his eyes blink for 15 seconds. He immediately resumes his previous activity. Which of the following best describes this patient’s seizures?",
    answers: [
      { text: "Simple partial", correct: false },
      { text: "Complex partial", correct: false },
      { text: "Tonic-clonic", correct: false },
      { text: "Absence", correct: true },
      { text: "Myoclonic", correct: false },
    ],
  },
  {
    question: "A 24-year-old female was diagnosed with a partial seizure 6 weeks ago. Since then, she has been on an anti-seizure med monotherapy and was instructed to use caution with activities that lead to increased core temperature, such as strenuous exercise or exposure to extreme heat. She has been compliant but comes to your office today complaining of fatigue and weight loss. Additionally, she complains of severe pain on her right side and back, below the ribs. The pain has spread to her groin area and has trouble urinating. Which drug is likely to cause her symptoms?",
    answers: [
      { text: "Felbamate", correct: false },
      { text: "Topiramate", correct: true },
      { text: "Ethosuximide", correct: false },
      { text: "Phenytoin", correct: false },
      { text: "Carbamazepine", correct: false },
    ],
  },
  {
    question: "A 33-year-old man is taking valproic acid for tonic-clonic seizures. Lamotrigine is added to improve seizure control. The plasma concentrations of lamotrigine may be increased because valproate inhibits",
    answers: [
      { text: "Acetylation.", correct: false },
      { text: "Hydroxylation.", correct: false },
      { text: "Biliary excretion.", correct: false },
      { text: "Glucuronidation.", correct: true },
      { text: "Urinary excretion.", correct: false },
    ],
  },
  {
    question: "A 19-year-old woman is being treated with ethosuximide, most likely for which type of seizure?",
    answers: [
      { text: "Tonic-clonic", correct: false },
      { text: "Simple partial", correct: false },
      { text: "Absence", correct: true },
      { text: "Status epilepticus", correct: false },
      { text: "Complex partial", correct: false },
    ],
  },
  {
    question: "A 32-year-old woman is being treated with vigabatrin because her complex seizures have been refractory to all other therapies. Vigabatrin is reserved for use in patients such as this although its availability is restricted due to",
    answers: [
      { text: "Vision loss", correct: true },
      { text: "Hearing loss", correct: false },
      { text: "Liver failure.", correct: false },
      { text: "Heart failure.", correct: false },
      { text: "Renal failure.", correct: false },
    ],
  },
  {
    question: "A 33-year-old man is taking valproic acid for tonic-clonic seizures. Lamotrigine is added to improve seizure control. The plasma concentrations of lamotrigine may be increased because valproate inhibits",
    answers: [
      { text: "Acetylation.", correct: false },
      { text: "Hydroxylation.", correct: false },
      { text: "Urinary excretion.", correct: false },
      { text: "Biliary excretion.", correct: false },
      { text: "Glucuronidation.", correct: true },
    ],
  },
  {
    question: "A 75-year-old woman with Parkinson's disease is being treated with the combination of levodopa/carbidopa. Entacapone is added. This patient is treated with this combination of drugs to increase the amount of which of the following substance to reach the CNS?",
    answers: [
      { text: "Entacapone", correct: false },
      { text: "Carbidopa", correct: false },
      { text: "Dopamine", correct: false },
      { text: "Acetylcholine", correct: false },
      { text: "Levodopa", correct: true },
    ],
  },
  {
    question: "A 28-year-old man is being treated with phenytoin for tonic-clonic seizures. His drug plasma concentration is in the low therapeutic range and he is still having foccasional seizures. His dose is increased slightly. Within 2 weeks he is ataxic, lethargic, and has nystagmus. A repeat of his plasma concentration shows that he is now slightly above the upper limit of the therapeutic range. The reason for the dramatic rise in his plasma concentration following a modest increase in his dose is most likely because of",
    answers: [
      { text: "Renal failure.", correct: false },
      { text: "Nonlinear elimination.", correct: true },
      { text: "Liver failure.", correct: false },
      { text: "Metabolic acidosis.", correct: false },
      { text: "Poor GI absorption of Ca2+.", correct: false },
    ],
  },
  {
    question: "A 44-year-old man has levetiracetam added to his therapy because he is refractory to his current antiseizure regimen. Levetiracetam acts by",
    answers: [
      { text: "Enhanced GABA synaptic transmission.", correct: false },
      { text: "Inactivation of voltage-gated Na+ channels.", correct: false },
      { text: "Antagonizing D2 dopaminergic receptors.", correct: false },
      { text: "Reducing current through -type Ca2+ channels.", correct: false },
      { text: "An unknown mechanism.", correct: true },
    ],
  },
  {
    question: "A 21-year-old male has recently begun pimozide therapy for Tourette disorder. His parents bring him to the emergency department. They describe that he has been having “different-appearing pics” than before, such as prolonged contraction of the fascial muscles. While being examined, he experiences opisthotonos (type of extrapyramidal spasm of the body in which the head and heels are bent backward and the body is bowed forward). Which of the following drugs would be beneficial in reducing these symptoms?",
    answers: [
      { text: "Benztropine", correct: true },
      { text: "Bromocriptine", correct: false },
      { text: "Lithium", correct: false },
      { text: "Prochlorperazine", correct: false },
      { text: "Risperidone", correct: false },
    ],
  },
  {
    question: "A 54-year-old man, diagnosed with a bipolar disorder at the age of 34, had had e three manic episodes and two depressive episodes since then. The patient had been suffering from exertional angina for five years and from hypertension for 2 years. The present medication of the patient included lithium, atenolol, lovastatin, losartan, and aspirin. Plasma levels of which of the following psychotropic drugs were most likely determined periodically to assess the effective dosage and to avoid toxicity?",
    answers: [
      { text: "Atenolol", correct: false },
      { text: "Lovastatin", correct: false },
      { text: "Lithium", correct: true },
      { text: "Aspirin", correct: false },
      { text: "Losartan", correct: false },
    ],
  },
  {
    question: "A child is experiencing absence seizures that interrupt his ability to pay attention during school and activities. Which of the following therapies would be most appropriate for this patient?",
    answers: [
      { text: "Ethosuximide", correct: true },
      { text: "Carbamazepine", correct: false },
      { text: "Diazepam", correct: false },
      { text: "Carbamazepine plus primidone", correct: false },
      { text: "Watchful waiting", correct: false },
    ],
  },
  {
    question: "A woman with myoclonic seizures is well controlled with lamotrigine. She becomes pregnant and begins to have breakthrough seizures. What is most likely happening?",
    answers: [
      { text: "Her epilepsy is getting worse", correct: false },
      { text: "Lamotrigine concentrations re increasing", correct: false },
      { text: "Lamotrigine concentrations are decreasing", correct: true },
      { text: "Lamotrigine is no longer efficacious for this patient", correct: false },
      { text: "Lamotrigine concentrations are little bit increased", correct: false },
    ],
  },
  {
    question: "A 42-year-old man undergoes a neurologic evaluation because of episodes of apparent confusion. Over the past year, the man has experienced episodes during which he develops a blank look on his face and fails to respond to questions. Moreover, it appears to take several minutes before the man recovers from the episodes. Which of the following best describes this type of seizure?",
    answers: [
      { text: "Focal (simple partial)", correct: false },
      { text: "Focal (complex partial)", correct: true },
      { text: "Tonic-clonic", correct: false },
      { text: "Absence", correct: false },
      { text: "Myoclonic", correct: false },
    ],
  },
  {
    question: "A 52-year-old man has had several focal complex partial seizures over the last year. Which of the following therapies would be most appreciate initial therapy for this patient?",
    answers: [
      { text: "Ethosuximide", correct: false },
      { text: "Levetiracetam", correct: true },
      { text: "Diazepam", correct: false },
      { text: "Carbamazepine plus primidone", correct: false },
      { text: "Watchful waiting", correct: false },
    ],
  },
  {
    question: "A patient with focal complex partial seizures has been treated for 6 month with carbamazepine but, recently, has been experiencing breakthrough seizures on a more frequent basis. You are considering adding a second drug to the antiseizure regimen. Which of the following drugs is least likely to have a pharmacokinetic interaction with carbamazepine?",
    answers: [
      { text: "Topiramate", correct: false },
      { text: "Tiagabine", correct: false },
      { text: "Levetiracetam", correct: true },
      { text: "Lamotrigine", correct: false },
      { text: "Zonisamide", correct: false },
    ],
  },
  {
    question: "A 75-year-old woman had a stroke approximately 1 month ago. She is continuing to have small focal seizures where she fails to respond appropriately while talking. Which of the following is the most appropriate treatment for this individual?",
    answers: [
      { text: "Phenytoin", correct: false },
      { text: "Oxcarbazepine", correct: false },
      { text: "Levetiracetam", correct: true },
      { text: "Phenobarbital", correct: false },
      { text: "Selegiline", correct: false },
    ],
  },
  {
    question: "A 20-year-old woman is taking topiramate as monotherapy for refractory generalized tonic-clonic seizures. She should be warned to increase her dose of",
    answers: [
      { text: "Levothyroxine.", correct: false },
      { text: "Botox", correct: false },
      { text: "Oral contraceptive.", correct: true },
      { text: "Metoprolol.", correct: false },
      { text: "Insulin", correct: false },
    ],
  },
  {
    question: "A 72-year-old man with Parkinson's disease is being treated with selegiline. Over the past 2 weeks he has noticed an increase in insomnia and anxiety. It is likely these symptoms are due to",
    answers: [
      { text: "Caffeine.", correct: false },
      { text: "Dopamine.", correct: false },
      { text: "Amphetamine", correct: true },
      { text: "Serotonin.", correct: false },
      { text: "Ephedrine.", correct: false },
    ],
  },
  {
    question: "A major problem that must be faced when administering anticonvulsants with many other medications (including other antiepileptic drugs) involves drug interactions due to altered metabolism. Which of the following drugs is likely to cause excessive or toxic effects from certain other drugs by inhibiting their metabolism?",
    answers: [
      { text: "Carbamazepine", correct: false },
      { text: "Ethosuximide", correct: false },
      { text: "Phenobarbital", correct: false },
      { text: "Phenytoin", correct: false },
      { text: "Valproic acid", correct: true },
    ],
  },
  {
    question: "The main side effect of benztropine is:",
    answers: [
      { text: "Miosis", correct: false },
      { text: "confusion", correct: true },
      { text: "Diarrhoea", correct: false },
      { text: "GIT haemorrhage", correct: false },
      { text: "Bronchorrhoea", correct: false },
    ],
  },
  {
    question: "Probably the singular most effective drug for treating Parkinson's disease is:",
    answers: [
      { text: "L-dopa", correct: true },
      { text: "Benztropine", correct: false },
      { text: "Bromocriptine", correct: false },
      { text: "Haloperidol", correct: false },
      { text: "Amantadine", correct: false },
    ],
  },
  {
    question: "Which of the following agent was first introduced for treatment of epilepsy",
    answers: [
      { text: ". Phenytoin", correct: false },
      { text: "Phenobarbital", correct: true },
      { text: "Carbamazepine", correct: false },
      { text: "Valproic acid", correct: false },
      { text: "Acetozolamide", correct: false },
    ],
  },
  {
    question: "Antiviral drug found to have anti-Parkinsons properties:",
    answers: [
      { text: "Procyclidine", correct: false },
      { text: "Pergolide", correct: false },
      { text: "Amantadine", correct: true },
      { text: "Levodopa", correct: false },
      { text: "Reserpine", correct: false },
    ],
  },
  {
    question: "First line anti Parkinson drug, also used to treat hyperprolactinemia at lower doses?",
    answers: [
      { text: "Amantadine", correct: false },
      { text: "Levodopa", correct: false },
      { text: "Bromocriptine", correct: true },
      { text: "Selegiline", correct: false },
      { text: "Benzotropine", correct: false },
    ],
  },
  {
    question: "Carbidopa is useful in the management of parkinsons disease because it is an:",
    answers: [
      { text: "Effective D2 agonist", correct: false },
      { text: "Effective D2 antagonist", correct: false },
      { text: "Effective peripheral decarboxylase inhibitor", correct: true },
      { text: "Effective central decarboxylase inhibitor", correct: false },
      { text: "Effective competitor at the GABA receptor", correct: false },
    ],
  },
  {
    question: "Dominantly inherited disease: associated with progressive chorea and dementia; related to neurotransmitter imbalance",
    answers: [
      { text: "Wilson's disease", correct: false },
      { text: "tardive dyskinesia", correct: false },
      { text: "Tourette's syndrome", correct: false },
      { text: "Huntington's disease", correct: true },
      { text: "Shy-Drager syndrome", correct: false },
    ],
  },
  {
    question: "The opiate associated with seizures when given in high doses to patients with renal failure is:",
    answers: [
      { text: "Morphine", correct: false },
      { text: "Pethidine", correct: true },
      { text: "Methadone", correct: false },
      { text: "Fentanyl", correct: false },
      { text: "Codeine", correct: false },
    ],
  },
  {
    question: "Which of the following of drugs against Helicobacter pylori?",
    answers: [
      { text: "Emetine", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Metronidazole", correct: true },
      { text: "Ciprofloxacin", correct: false },
      { text: "Paromomycin", correct: false },
    ],
  },
  {
    question: "Which drug is an analog of Pg E1?",
    answers: [
      { text: "Misoprostole", correct: true },
      { text: "Omeprazole", correct: false },
      { text: "Ranitidine", correct: false },
      { text: "Sucralfate", correct: false },
      { text: "Propofol", correct: false },
    ],
  },
  {
    question: "Which of the following of is the most important approach in healing peptic ulcers?",
    answers: [
      { text: "Coating the ulcer crater", correct: false },
      { text: "Eradicating infection with H.pylori", correct: true },
      { text: "Inhibiting secretion of gastric acid at the proton pump", correct: false },
      { text: "Blocking receptor activation of gastric acid secretion", correct: false },
      { text: "Neutralizing secreted gastric acid", correct: false },
    ],
  },
  {
    question: "Which of the following drug is given in combination regimens to enhance antiemetic potency?",
    answers: [
      { text: "Granisetron", correct: false },
      { text: "Ondansetron", correct: false },
      { text: "Dexamethasone", correct: true },
      { text: "Meclizine", correct: false },
      { text: "Lorazepam", correct: false },
    ],
  },
  {
    question: "Which drug is highly effective against cisplatin-induced emesis?",
    answers: [
      { text: "Granisetron", correct: true },
      { text: "Ondansetron", correct: false },
      { text: "Dexamethasone", correct: false },
      { text: "Meclizine", correct: false },
      { text: "Lorazepam", correct: false },
    ],
  },
  {
    question: "Which of the following drug can cause extrapyramidal side effects?",
    answers: [
      { text: "Granisetron", correct: false },
      { text: "Ondansetron", correct: false },
      { text: "Dexamethasone", correct: false },
      { text: "Metoclopramide", correct: true },
      { text: "Lorazepam", correct: false },
    ],
  },
  {
    question: "Which of the following drug approved for managing postoperative nausea and/or vomiting?",
    answers: [
      { text: "Granisetron", correct: false },
      { text: "Ondansetron", correct: true },
      { text: "Meclizine", correct: false },
      { text: "Lorazepam", correct: false },
      { text: "Metoclopramide", correct: false },
    ],
  },
  {
    question: "Which drug useful in managing nausea and vomiting due to motion sickness?",
    answers: [
      { text: "Granisetron", correct: false },
      { text: "Ondansetron", correct: false },
      { text: "Dexamethasone", correct: false },
      { text: "Meclizine", correct: true },
      { text: "Lorazepam", correct: false },
    ],
  },
  {
    question: "Which of the following drug is low atiemetic potency?",
    answers: [
      { text: "Granisetron", correct: false },
      { text: "Ondansetron", correct: false },
      { text: "Dexamethasone", correct: false },
      { text: "Meclizine", correct: false },
      { text: "Lorazepam", correct: true },
    ],
  },
  {
    question: "Which of the following drug may cause metabolic alkalosis?",
    answers: [
      { text: "Sodium bicarbonate", correct: false },
      { text: "Cimetidine", correct: true },
      { text: "Dronabinol", correct: false },
      { text: "Diphenoxylate", correct: false },
      { text: "Bismuth compounds", correct: false },
    ],
  },
  {
    question: "A 23-year-old woman with a history of type 1 diabetes since age 6 presents with nausea and vomiting associated with gastroparesis and delayed gastric emptying. Which of the following medications would be the most suitable treatment of the nausea and vomiting in this patient?",
    answers: [
      { text: "Ondansetron", correct: false },
      { text: "Metocloramide", correct: true },
      { text: "Diphenoxylate", correct: false },
      { text: "Dronabinol", correct: false },
      { text: "Loperamide.", correct: false },
    ],
  },
  {
    question: "Which drug is the primary treatment for acid-related disease in pregnancy?",
    answers: [
      { text: "Sucralfate", correct: true },
      { text: "Prostaglandins", correct: false },
      { text: "Calcium carbonate", correct: false },
      { text: "Aluminum hydroxide", correct: false },
      { text: "Omeoprazole", correct: false },
    ],
  },
  {
    question: "Which H2 receptor antihistamine produces antiandrogenic adverse effect?",
    answers: [
      { text: "Ranitidine", correct: false },
      { text: "Nizatidine", correct: false },
      { text: "Cimetidine", correct: true },
      { text: "Famotidine", correct: false },
      { text: "Roxatidine", correct: false },
    ],
  },
  {
    question: "For healing duodenal ulcer the usual duration of H2 blocker therapy is:",
    answers: [
      { text: "4 weeks", correct: false },
      { text: "6 weeks", correct: false },
      { text: "8 weeks", correct: true },
      { text: "10 weeks", correct: false },
      { text: "12 weeks", correct: false },
    ],
  },
  {
    question: "Eradication of H. pylori effectiveness for bismuth compounds when using combination with antibiotics:",
    answers: [
      { text: "0.05", correct: false },
      { text: "0.2", correct: false },
      { text: "0.5", correct: false },
      { text: "0.8", correct: false },
      { text: "0.95", correct: true },
    ],
  },
  {
    question: "Most widely used antacid in trating ulcer disease:",
    answers: [
      { text: "Sodium bicarbonate", correct: false },
      { text: "Caicium carbonate", correct: false },
      { text: "Magnesium hydroxide", correct: false },
      { text: "Aluminum hydroxide", correct: false },
      { text: "Combination of aluminum and magnesium hydroxide", correct: true },
    ],
  },
  {
    question: "Mechanism of action : cytoprotection, binds to the ulcer base , antibacterial effect:",
    answers: [
      { text: "Metronidazole", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Bismuth compounds", correct: true },
      { text: "Ranitidine", correct: false },
      { text: "Omeoprazole", correct: false },
    ],
  },
  {
    question: "While prescribing a treatment to a young female patient suffering from peptic ulcer associated with H.pylori the gastroenterologist will neglect:",
    answers: [
      { text: "Tetracycline", correct: false },
      { text: "Vancomycin", correct: true },
      { text: "Amoxicillin", correct: false },
      { text: "Metronidazole", correct: false },
      { text: "Clarithromycin", correct: false },
    ],
  },
  {
    question: "Respiratory stimulants include:",
    answers: [
      { text: "cordiamine", correct: true },
      { text: "levodopa", correct: false },
      { text: "libexin;", correct: false },
      { text: "potassium iodide;", correct: false },
      { text: "salbutamol.", correct: false },
    ],
  },
  {
    question: "Which of the following means is a central respiratory stimulant?",
    answers: [
      { text: "cytiton", correct: false },
      { text: "lobelin", correct: false },
      { text: "bemegrid", correct: true },
      { text: "naloxone;", correct: false },
      { text: "nalorphine.", correct: false },
    ],
  },
  {
    question: "Which of the following drugs refers to antitussives?",
    answers: [
      { text: "infusion of thermopsis herb", correct: false },
      { text: "codeine", correct: true },
      { text: "cytiton", correct: false },
      { text: "trypsin", correct: false },
      { text: "salbutamol.", correct: false },
    ],
  },
  {
    question: "Indicate the main effect of codeine.",
    answers: [
      { text: "stimulates breathing", correct: false },
      { text: "suppresses cough", correct: true },
      { text: "promotes sputum discharge", correct: false },
      { text: "inhibits the formation of foam in the alveoli", correct: false },
      { text: "causes liquefaction of sputum.", correct: false },
    ],
  },
  {
    question: "Which drug can improve surfactant synthesis?",
    answers: [
      { text: "acetylcysteine", correct: false },
      { text: "trypsin", correct: false },
      { text: "bromhexine", correct: true },
      { text: "infusion of thermopsis", correct: false },
      { text: "potassium iodide", correct: false },
    ],
  },
  {
    question: "A DRUG USED TO RELIEVE A COUGH IS CALLED A(N)?",
    answers: [
      { text: "ANTITUSSIVE", correct: true },
      { text: "ANTISEPTIC", correct: false },
      { text: "BRONCHODILATOR", correct: false },
      { text: "ANTITOXIN", correct: false },
      { text: "EMETIC", correct: false },
    ],
  },
  {
    question: "What is the generic name of Ventolin?",
    answers: [
      { text: "Fluticasone", correct: false },
      { text: "Salbutamol", correct: true },
      { text: "Zafirlukast", correct: false },
      { text: "Epinephrine", correct: false },
      { text: "Salmeterol", correct: false },
    ],
  },
  {
    question: "What is the brand name for acetylcysteine?",
    answers: [
      { text: "Alupent", correct: false },
      { text: "Etibi", correct: false },
      { text: "Tussionex", correct: false },
      { text: "Sudafed", correct: false },
      { text: "Mucomyst", correct: true },
    ],
  },
  {
    question: "How much mucus is produced each day, on average?",
    answers: [
      { text: "125ml", correct: true },
      { text: "500ml", correct: false },
      { text: "275ml", correct: false },
      { text: "250ml", correct: false },
      { text: "175ml", correct: false },
    ],
  },
  {
    question: "What class is Rafadin (rifampin) in?",
    answers: [
      { text: "Decongestant", correct: false },
      { text: "Expectorant", correct: false },
      { text: "Mucolytic", correct: false },
      { text: "Xanthines", correct: false },
      { text: "Antituberculosis", correct: true },
    ],
  },
  {
    question: "In case of an overdose of which antitussive drug, depression of the respiratory center is possible?",
    answers: [
      { text: "libexin", correct: false },
      { text: "falimimint", correct: false },
      { text: "codeine", correct: true },
      { text: "bronholitin", correct: false },
      { text: "glaucine", correct: false },
    ],
  },
  {
    question: "Which of the following drugs used in the treatment of bronchial asthma is a β-adrenomimetic?",
    answers: [
      { text: "salbutamol", correct: true },
      { text: "aminophylline", correct: false },
      { text: "intal (disodium chromoglycate)", correct: false },
      { text: "atropine", correct: false },
      { text: "prednisolone", correct: false },
    ],
  },
  {
    question: "Which of the drugs used to treat bronchial asthma is a myotropic bronchodilator?",
    answers: [
      { text: "isadrine", correct: false },
      { text: "salbutamol", correct: false },
      { text: "ephedrine", correct: false },
      { text: "aminophylline", correct: true },
      { text: "atropine.", correct: false },
    ],
  },
  {
    question: "Which of the following drugs used in the treatment of cardiogenic pulmonary edema is a dehydrating agent? P",
    answers: [
      { text: "benzohexonium", correct: false },
      { text: "furosemide", correct: true },
      { text: "morphine", correct: false },
      { text: "ethyl alcohol", correct: false },
      { text: "mannitol", correct: false },
    ],
  },
  {
    question: "The mechanistic rationale for using inhaled ipratropium to treat COPD is that it",
    answers: [
      { text: "Blocks binding of acetylcholine to muscarinic cholinergic receptors in bronchial smooth muscle.", correct: true },
      { text: "Blocks ET-1 binding to ET-A and ET-B receptors in bronchial smooth muscle.", correct: false },
      { text: "Activates β2 adrenergic receptor bronchial smooth muscle.", correct: false },
      { text: "Binds glucocorticoid receptors in inflammatory cells of the airways.", correct: false },
      { text: "Inhibits the hydrolysis of cyclic nucleotides in bronchial smooth muscle.", correct: false },
    ],
  },
  {
    question: "A 53-year-old woman with COPD is using an albuterol inhaler for symptomatic relief of bronchospasm. What may cause this drug?",
    answers: [
      { text: "Numbness in her fingers and toes.", correct: false },
      { text: "Her heart to beat faster.", correct: true },
      { text: "Her lips to turn black.", correct: false },
      { text: "Transient blindness.", correct: false },
      { text: "Transient diminished hearing", correct: false },
    ],
  },
  {
    question: "An asthma patient with persistent asthma is prescribed a combination inhaler, budesonide/ formoterol (SYMBICOR ). The mechanisms of action of the 2 drugs in this formulation are",
    answers: [
      { text: "A long-acting β2 adrenergic agonist and an anticholinergic.", correct: false },
      { text: "A long-acting β2 adrenergic agonist and a corticosteroid.", correct: true },
      { text: "An endothelin receptor antagonist and a prostacyclin receptor agonist.", correct: false },
      { text: "A corticosteroid and an anticholinergic.", correct: false },
      { text: "A corticosteroid and a phosphodiesterase inhibitor.", correct: false },
    ],
  },
  {
    question: "While eating mussels, a 36-year-old woman develops numbness and tingling of her lips and tongue. She begins to have difficulty breathing and rapidly becomes unconscious. Her apparent respiratory paralysis is the result of",
    answers: [
      { text: "Serotonin syndrome.", correct: false },
      { text: "Inhibition of monoamine oxidase (MAO).", correct: false },
      { text: "The block of Na+ channels.", correct: true },
      { text: "Malignant hyperthermia.", correct: false },
      { text: "Depletion of norepinephrine.", correct: false },
    ],
  },
  {
    question: "A 48-year-old woman with a chronic pulmonary disease is being treated with an inhaled glucocorticoid product. She is likely to experience which of the following side effects?",
    answers: [
      { text: "Buffalo hump", correct: false },
      { text: "Hyperglycemia", correct: false },
      { text: "Oral candidiasis", correct: true },
      { text: "Hepatitis", correct: false },
      { text: "Acute adrenal insufficiency", correct: false },
    ],
  },
  {
    question: "A client is receiving isoetharine hydrochloride (Bronkosol) via a nebulizer. The nurse monitors the client for which side effect of this medication?",
    answers: [
      { text: "Constipation", correct: false },
      { text: "Diarrhea", correct: false },
      { text: "Bradycardia", correct: false },
      { text: "Tachycardia", correct: true },
      { text: "Hypotension", correct: false },
    ],
  },
  {
    question: "Pseudoephedrine (Sudafed) has been ordered as a nasal decongestant. Which of the following is a possible side effect of this drug?",
    answers: [
      { text: "Constipation", correct: false },
      { text: "Diarrhea", correct: false },
      { text: "Bradycardia", correct: false },
      { text: "Diplopia", correct: false },
      { text: "Restlessness", correct: true },
    ],
  },
  {
    question: "A patient with acute asthma is prescribed short-term corticosteroid therapy. What is the rationale for the use of steroids in clients with asthma?",
    answers: [
      { text: "Corticosteroids promote bronchodilation.", correct: false },
      { text: "Corticosteroids act as an expectorant.", correct: false },
      { text: "Corticosteroids have an anti-inflammatory effect.", correct: true },
      { text: "Corticosteroids prevent development of respiratory infections.", correct: false },
      { text: "Corticosteroids decrease cough reflex", correct: false },
    ],
  },
  {
    question: "Ephedrine causes:",
    answers: [
      { text: "Miosis", correct: false },
      { text: "Bronchodilation", correct: true },
      { text: "Hypotension", correct: false },
      { text: "Bradycardia", correct: false },
      { text: "Bronchospasm", correct: false },
    ],
  },
  {
    question: "Indicate the long-acting topical decongestant agents:",
    answers: [
      { text: "Epinephrine", correct: false },
      { text: "Norepinephrine", correct: false },
      { text: "Phenylephrine", correct: false },
      { text: "Xylometazoline", correct: true },
      { text: "Norepinephrine", correct: false },
    ],
  },
  {
    question: "Which drug works by vasoconstricting swollen mucous membranes of nasal airway passages?",
    answers: [
      { text: "Decongestants", correct: true },
      { text: "Antitussives", correct: false },
      { text: "Leukotrienes", correct: false },
      { text: "Corticosteroids", correct: false },
      { text: "Xanthines", correct: false },
    ],
  },
  {
    question: "Which drug works enhances reflex outflow of respiratory tract fluids by irritating gastric mucosa?",
    answers: [
      { text: "Leukotrienes", correct: false },
      { text: "Beta2-adrenergic agonist", correct: false },
      { text: "Decongestants", correct: false },
      { text: "Expectorants & mucolytics", correct: true },
      { text: "Mass cell stablizers", correct: false },
    ],
  },
  {
    question: "Which drug works by lowering viscosity and facilitating removal of mucous secretion?",
    answers: [
      { text: "Beta2-adrenergic agonist", correct: false },
      { text: "Mass cell stabilizers", correct: false },
      { text: "Expectorants & mucolytics", correct: true },
      { text: "Antitussives", correct: false },
      { text: "Decongestants", correct: false },
    ],
  },
  {
    question: "Which drug inhibts the release of bronchoconstrictors like histamine from pulmonary mast cells?",
    answers: [
      { text: "Leukotrienes", correct: true },
      { text: "Beta2-adrenergic agonist", correct: false },
      { text: "Mast cell stablizers", correct: false },
      { text: "Decongestants", correct: false },
      { text: "Antitussives", correct: false },
    ],
  },
  {
    question: "Which drug is used during prophylaxis and symptomatic relief of bronchial asthma and bronchospasm associated with chronic bronchitis & emphysema",
    answers: [
      { text: "Xanthines", correct: true },
      { text: "Albuterol", correct: false },
      { text: "Dexamethasone", correct: false },
      { text: "Theophylline", correct: false },
      { text: "Isoproterenol", correct: false },
    ],
  },
  {
    question: "Which drug is chemically related to caffeine that dilates bronchioles by relaxing smooth muscle & inhibt phosphodiesterase",
    answers: [
      { text: "Isoproterenol", correct: false },
      { text: "Theophylline", correct: false },
      { text: "Dexamethasone", correct: false },
      { text: "Xanthines", correct: true },
      { text: "Albuterol", correct: false },
    ],
  },
  {
    question: "A 20-year-old woman has occasional asthma symptoms during the winter when she goes snowshoeing. The medication of choice to relieve her asthma symptoms is inhaled",
    answers: [
      { text: "Iloprost.", correct: false },
      { text: "Albuterol.", correct: true },
      { text: "Budesonide", correct: false },
      { text: "Tiotropium bromide.", correct: false },
      { text: "Salmeterol.", correct: false },
    ],
  },
  {
    question: "A 54-year-old man who had occupational exposure to tobacco has developed COPD and emphysema. The medication of choice to improve his breathing is inhaled",
    answers: [
      { text: "Salmeterol.", correct: false },
      { text: "Budesonide.", correct: false },
      { text: "Tiotropium bromide.", correct: true },
      { text: "Albuterol.", correct: false },
      { text: "Iloprost.", correct: false },
    ],
  },
  {
    question: "Which drug diminishes the activation of inflammatory cells by increasing production of anti-inflammatoy mediators, reduciing production of mucus and decreased edema. Can treat rhinitis & asthma, congestion and allergic conditions",
    answers: [
      { text: "Corticosteroids", correct: true },
      { text: "Leukotrienes", correct: false },
      { text: "Antitussives", correct: false },
      { text: "Decongestants", correct: false },
      { text: "Xanthines", correct: false },
    ],
  },
  {
    question: "Assists in the pathophysiology of asthma, causing or poteniating following symptoms : airflow obstruction, increased secretion of mucus, mucosal accumulation, bronchoconstriction infiltration of inflammatory cells in airway wall",
    answers: [
      { text: "Corticosteroids", correct: false },
      { text: "Leukotrienes", correct: true },
      { text: "Antitussives", correct: false },
      { text: "Decongestants", correct: false },
      { text: "Mast cell stabilizers", correct: false },
    ],
  },
  {
    question: "Which of the following sympathomimetics is used in the therapy of bronchial asthma?",
    answers: [
      { text: "Formoterol", correct: true },
      { text: "Norepinephrine", correct: false },
      { text: "Methoxamine", correct: false },
      { text: "Dobutamine", correct: false },
      { text: "Phenylephrine", correct: false },
    ],
  },
  {
    question: "Which of the following agents is an alfa2-selective agonist with ability to promote constriction of the nasal mucosa?",
    answers: [
      { text: "Xylometazoline", correct: true },
      { text: "Phenylephrine", correct: false },
      { text: "Methoxamine", correct: false },
      { text: "Epinephrine", correct: false },
      { text: "Norepinephrine", correct: false },
    ],
  },
  {
    question: "A 36 year old man with asthma also needs antihypertensive therapy. Which of the following products should you avoid prescribing?",
    answers: [
      { text: "hydrochlorothiazide", correct: false },
      { text: "propranolol", correct: true },
      { text: "amlodipine", correct: false },
      { text: "enalipril", correct: false },
      { text: "Captopril", correct: false },
    ],
  },
  {
    question: "A 59-year-old man complained to his physician of increasing dyspnea over the last few days. The man had a 3-year history of chronic obstructive pulmonary disease and had been suffering from gastric ulcers for the last six months. Inhalational therapy with albuterol had to be suspended for the appearance of tremors. Which of the following drug treatments would be appropriate for this patient?",
    answers: [
      { text: "Oral theophylline", correct: false },
      { text: "Inhaled salmeterol", correct: false },
      { text: "Inhaled ipratropium", correct: true },
      { text: "Inhaled cromolyn", correct: false },
      { text: "Oral zafirlukast", correct: false },
    ],
  },
  {
    question: "A 32-year-old female with mild intermittent asthma was successfully maintained on an inhaled antiasthmatic drug \"as needed\". Which of the following molecular actions most likely mediated the therapeutic effectiveness of that drug in the patient's disease?",
    answers: [
      { text: "Blockade of histamine release from bronchial epithelium", correct: false },
      { text: "Release of nitric oxide from bronchial epithelium", correct: false },
      { text: "Activation of beta-2 receptors in bronchial vessels", correct: false },
      { text: "Blockade of leukotriene receptors in bronchial muscle", correct: false },
      { text: "Increased cAMP in bronchial muscle", correct: true },
    ],
  },
  {
    question: "A premature newborn baby of 29 weeks gestational age developed five episodes of apnea on the second day of life. The apnea episodes lasted for 20 to 30 seconds and required the administration of oxygen. Three prolonged episodes required to bag and mask ventilation. He was given an intravenous drug to manage apnea. Which of the following drugs was most likely administered to him?",
    answers: [
      { text: "Epinephrine", correct: false },
      { text: "Albuterol", correct: false },
      { text: "Theophylline", correct: true },
      { text: "Atropine", correct: false },
      { text: "Zafirlukast", correct: false },
    ],
  },
  {
    question: "Which of the following can be administered arally and by inhalation?",
    answers: [
      { text: "Epinephrine", correct: false },
      { text: "Albuterol", correct: false },
      { text: "Pirbuterol", correct: false },
      { text: "Terbutaline", correct: true },
      { text: "Isoproterenol", correct: false },
    ],
  },
  {
    question: "Which of the following corticosteroids is used for quick relief from asthma?",
    answers: [
      { text: "Triamcinolone", correct: false },
      { text: "Dexamethasone", correct: true },
      { text: "Budesonide", correct: false },
      { text: "Beclomethasone", correct: false },
      { text: "Fluticasone", correct: false },
    ],
  },
  {
    question: "Which of the following asthma severity categories has a treatment including inhaled low-dose steroid , cromolyn, nedocromil, zafirlukast or zileuton?",
    answers: [
      { text: "Mild intermittent asthma", correct: false },
      { text: "Mild persistent asthma", correct: true },
      { text: "Moderated persistent asthma", correct: false },
      { text: "Severe persistent asthma", correct: false },
      { text: "Exercise induced asthma", correct: false },
    ],
  },
  {
    question: "Which of the following is a prophylactic antiasthmetic agent that stabilizes masr cells?",
    answers: [
      { text: "Ipratropium", correct: false },
      { text: "Prednisone", correct: false },
      { text: "Terbutaline", correct: false },
      { text: "Cromolyn", correct: true },
      { text: "Aminophyllin", correct: false },
    ],
  },
  {
    question: "A premature newborn baby of 29 weeks gestational age developed five episodes of apnea on the second day of life. The apnea episodes lasted for 20 to 30 seconds and required the administration of oxygen. Three prolonged episodes required to bag and mask ventilation. He was given an intravenous drug to manage apnea. Which of the following drugs was most likely administered to him?",
    answers: [
      { text: "Epinephrine", correct: false },
      { text: "Albuterol", correct: false },
      { text: "Theophylline", correct: true },
      { text: "Atropine", correct: false },
      { text: "Zafirlukast", correct: false },
    ],
  },
  {
    question: "A 32-year-old female with mild intermittent asthma was successfully maintained on an inhaled antiasthmatic drug \"as needed\". Which of the following molecular actions most likely mediated the therapeutic effectiveness of that drug in the patient's disease?",
    answers: [
      { text: "Blockade of histamine release from bronchial epithelium", correct: false },
      { text: "Release of nitric oxide from bronchial epithelium", correct: false },
      { text: "Activation of beta-2 receptors in bronchial vessels", correct: false },
      { text: "Blockade of leukotriene receptors in bronchial muscle", correct: false },
      { text: "Increased cAMP in bronchial muscle", correct: true },
    ],
  },
  {
    question: "A 59-year-old man complained to his physician of increasing dyspnea over the last few days. The man had a 3-year history of chronic obstructive pulmonary disease and had been suffering from gastric ulcers for the last six months. Inhalational therapy with albuterol had to be suspended for the appearance of tremors. Which of the following drug treatments would be appropriate for this patient?",
    answers: [
      { text: "Oral theophylline", correct: false },
      { text: "Inhaled salmeterol", correct: false },
      { text: "Inhaled ipratropium", correct: true },
      { text: "Inhaled cromolyn", correct: false },
      { text: "Oral zafirlukast", correct: false },
    ],
  },
  {
    question: "Means that promote blood clotting include:",
    answers: [
      { text: "heparin", correct: false },
      { text: "neodikumarin", correct: false },
      { text: "Vikasol", correct: true },
      { text: "fibrinolysin", correct: false },
      { text: "acetylsalicylic acid", correct: false },
    ],
  },
  {
    question: "Specify the main effect of vikasol.",
    answers: [
      { text: "increased permeability of the vascular wall;", correct: false },
      { text: "a decrease in the permeability of the vascular wall;", correct: false },
      { text: "increased blood clotting;", correct: true },
      { text: "lowering blood clotting", correct: false },
      { text: "enhancement of fibrinolysis.", correct: false },
    ],
  },
  {
    question: "What is the main effect of aminocaproic acid?",
    answers: [
      { text: "lowering blood clotting", correct: false },
      { text: "increased fibrinolysis", correct: false },
      { text: "inhibition of fibrinolysis", correct: true },
      { text: "increased diuresis", correct: false },
      { text: "increased erythropoiesis.", correct: false },
    ],
  },
  {
    question: "Specify the drug from the group of fibrinolysis inhibitors:",
    answers: [
      { text: "ethacrynic acid", correct: false },
      { text: "lipoic acid", correct: false },
      { text: "gamma-aminobutyric acid;", correct: false },
      { text: "aminocaproic acid", correct: true },
      { text: "ursodeoxycholic acid.", correct: false },
    ],
  },
  {
    question: "Specify the remedy that prevents blood clotting:",
    answers: [
      { text: "Vikasol", correct: false },
      { text: "thrombin", correct: false },
      { text: "fibrinogen", correct: false },
      { text: "neodikumarin", correct: true },
      { text: "aminocaproic acid", correct: false },
    ],
  },
  {
    question: "What is the main effect of neodicumarin?",
    answers: [
      { text: "stimulation of erythropoiesis", correct: false },
      { text: "stimulation of leukopoiesis", correct: false },
      { text: "stimulation of blood clotting", correct: false },
      { text: "stimulation of fibrinolysis", correct: false },
      { text: "lowering blood clotting.", correct: true },
    ],
  },
  {
    question: "Specify the drug from the group of low molecular weight heparins:",
    answers: [
      { text: "phenylin", correct: false },
      { text: "neodikumarin", correct: false },
      { text: "heparin", correct: false },
      { text: "protamine sulfate", correct: false },
      { text: "fraxiparin", correct: true },
    ],
  },
  {
    question: "Which of the following drugs refers to direct-acting anticoagulants?",
    answers: [
      { text: "acetylsalicylic acid", correct: false },
      { text: "neodikumarin", correct: false },
      { text: "heparin", correct: true },
      { text: "amnocaproic acid", correct: false },
      { text: "fibrinolysin", correct: false },
    ],
  },
  {
    question: "Which of the following tools is used to dissolve fresh blood clots?",
    answers: [
      { text: "streptokinase", correct: true },
      { text: "thrombin", correct: false },
      { text: "fibrinogen", correct: false },
      { text: "heparin", correct: false },
      { text: "acetylsalicylic acid.", correct: false },
    ],
  },
  {
    question: "Specify the drug from the group of indirect thrombolytics:",
    answers: [
      { text: "fibrinolysin", correct: false },
      { text: "phenylin", correct: false },
      { text: "acetylsalicylic acid", correct: false },
      { text: "streptokinase", correct: true },
      { text: "heparin", correct: false },
    ],
  },
  {
    question: "Which of the following drugs prevents platelet aggregation?",
    answers: [
      { text: "vikasol", correct: false },
      { text: "fibrinogen", correct: false },
      { text: "thrombin", correct: false },
      { text: "aminocaproic acid", correct: false },
      { text: "acetylsalicylic acid", correct: true },
    ],
  },
  {
    question: "Identify the drug. Delays blood clotting in vitro and in vivo. The antagonist is protamine sulfate.",
    answers: [
      { text: "fibrinolysin", correct: false },
      { text: "streptoliasis", correct: false },
      { text: "neodikumarin", correct: false },
      { text: "heparin", correct: true },
      { text: "acetylsalicylic acid", correct: false },
    ],
  },
  {
    question: "In case of an overdose of indirect anticoagulants, the following should be prescribed:",
    answers: [
      { text: "protamine sulfate", correct: false },
      { text: "sodium citrate", correct: false },
      { text: "sodium thiosulfate", correct: false },
      { text: "Vikasol", correct: true },
      { text: "cholinesterase reactivators", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is used to treat hypochromic anemia?",
    answers: [
      { text: "iron lactate", correct: true },
      { text: "folic acid", correct: false },
      { text: "aminocaproic acid", correct: false },
      { text: "ethacric acid", correct: false },
      { text: "cyanocobalamin", correct: false },
    ],
  },
  {
    question: "Specify the drug used to treat hyperchromic anemia.",
    answers: [
      { text: "ferkoven", correct: false },
      { text: "cyanocobalamin", correct: true },
      { text: "pentoxyl", correct: false },
      { text: "iron lactate", correct: false },
      { text: "ascorbic acid", correct: false },
    ],
  },
  {
    question: "Specify the drug for the treatment of B12-deficient anemia:",
    answers: [
      { text: "ergocalciferol", correct: false },
      { text: "cyanocobalamin", correct: true },
      { text: "Ferkoven", correct: false },
      { text: "pentoxyl", correct: false },
      { text: "Hematogen", correct: false },
    ],
  },
  {
    question: "What drug is used to diagnose latent iron deficiency and iron poisoning?",
    answers: [
      { text: "desferal", correct: true },
      { text: "unitiol", correct: false },
      { text: "sodium citrate", correct: false },
      { text: "EDTA", correct: false },
      { text: "protamine sulfate", correct: false },
    ],
  },
  {
    question: "Erythropoiesis simulators include:",
    answers: [
      { text: "Ferkoven", correct: true },
      { text: "dehydrocholic acid", correct: false },
      { text: "ethacric acid", correct: false },
      { text: "methotrexate", correct: false },
      { text: "mercaptopurine", correct: false },
    ],
  },
  {
    question: "Leukopoiesis stimulants include:",
    answers: [
      { text: "ferkoven", correct: false },
      { text: "pentoxyl", correct: true },
      { text: "methotrexate", correct: false },
      { text: "mercaptopurine", correct: false },
      { text: "chloramphenicol", correct: false },
    ],
  },
  {
    question: "Following a trans-Pacific flight from Australia, a 57-year-old man develops deep vein thrombosis in his right leg. He receives heparin to treat the DVT but after 6 days of heparin therapy he develops heparin-induced thrombocytopenia (HIT). What drug is he likely to receive instead of heparin?",
    answers: [
      { text: "Rivaroxaban", correct: false },
      { text: "Argatroban", correct: true },
      { text: "Warfarin", correct: false },
      { text: "Activated protein C (drotrecogin alpha)", correct: false },
      { text: "Dabigatran", correct: false },
    ],
  },
  {
    question: "A 23-year-old pregnant woman is referred by her obstetrician for evaluation of anemia. She is in her fourth month of pregnancy and has no history of anemia; her grandfather had pernicious anemia. Her hemoglobin is 10 g/dL (normal, 12–16 g/dL). The laboratory data for your pregnant patient indicate that she does not have macrocytic anemia but rather microcytic anemia. Optimal treatment of normocytic or mild microcytic anemia associated with pregnancy uses which of the following?",
    answers: [
      { text: "Folic acid supplements", correct: false },
      { text: "A high-fiber diet", correct: false },
      { text: "Hydroxocobalamin injections", correct: false },
      { text: "Erythropoietin injections", correct: false },
      { text: "Ferrous sulfate tablets", correct: true },
    ],
  },
  {
    question: "A 32-year-old man is seen because of megaloblastic anemia of unknown origin. After considerable workup, he is discovered to have an intestinal fish tapeworm, Diphyllobothrium latum. Treatment with praziquantel eliminates the worm and cures his anemia. The cause of the anemia in patients with Diphyllobothrium latum infection is",
    answers: [
      { text: "Folic acid deficiency.", correct: false },
      { text: "Intestinal blood loss.", correct: false },
      { text: "Iron deficiency.", correct: false },
      { text: "Vitamin B12 deficiency.", correct: true },
      { text: "Vitamin E deficiency.", correct: false },
    ],
  },
  {
    question: "A 23-year-old pregnant woman is referred by her obstetrician for evaluation of anemia. She is in her fourth month of pregnancy and has no history of anemia; her grandfather had pernicious anemia. Her hemoglobin is 10 g/dL (normal, 12–16 g/dL). If this woman has macrocytic anemia, an increased serum concentration of transferrin, and a normal serum concentration of vitamin B12, the most likely cause of her anemia is deficiency of which of the following?",
    answers: [
      { text: "Intrinsic factor", correct: false },
      { text: "Folic acid", correct: true },
      { text: "Iron", correct: false },
      { text: "Erythropoietin", correct: false },
      { text: "Cobalamin", correct: false },
    ],
  },
  {
    question: "Therapy with folinic acid is used to treat anemia associated with the",
    answers: [
      { text: "Anticancer agent carboplatin", correct: false },
      { text: "Antiparkinson drug levodopa.", correct: false },
      { text: "Antibiotic chloramphenicol.", correct: false },
      { text: "Antituberculosis drugs isoniazid and pyrazinamide.", correct: false },
      { text: "Anticancer agent methotrexate.", correct: true },
    ],
  },
  {
    question: "Haemostatic and antifibrinolytic drugs are useful in the treatment of:",
    answers: [
      { text: "Stroke", correct: false },
      { text: "Haemophilia", correct: true },
      { text: "Thromboembolism", correct: false },
      { text: "Anaemia", correct: false },
      { text: "Chronic malnutrition", correct: false },
    ],
  },
  {
    question: "The use of iron, folic acid and vitamin B12 is indicated in:",
    answers: [
      { text: "Anaemia", correct: true },
      { text: "Haemophilia", correct: false },
      { text: "Haemodynamic shock", correct: false },
      { text: "Chronic malnutrition", correct: false },
      { text: "Stroke", correct: false },
    ],
  },
  {
    question: "Which of the following drugs, when prescribed concurrently with heparin, could lead to an increased chance of haemorrhage?",
    answers: [
      { text: "Vitamin K", correct: false },
      { text: "Aspirin", correct: true },
      { text: "Iron", correct: false },
      { text: "Protamine sulfate", correct: false },
      { text: "Folic acid", correct: false },
    ],
  },
  {
    question: "What drug is considered the first choice in the prevention of thromboembolism in pregnancy?",
    answers: [
      { text: "Aspirin", correct: false },
      { text: "Streptokinasa", correct: false },
      { text: "Dalteparin", correct: true },
      { text: "Warfarin", correct: false },
      { text: "Heparin", correct: false },
    ],
  },
  {
    question: "Which drug is given in the case of overdose with heparin?",
    answers: [
      { text: "Epoetin alfa", correct: false },
      { text: "Tranexamic acid", correct: false },
      { text: "Protamine", correct: true },
      { text: "Vitamin K", correct: false },
      { text: "Aspirin", correct: false },
    ],
  },
  {
    question: "To prevent severe hemorrhage following warfarin therapy, the drug should be discontinued and this patient should be treated immediately with:",
    answers: [
      { text: "Reteplase", correct: false },
      { text: "Vitamin K", correct: true },
      { text: "Protamine", correct: false },
      { text: "aminocaproic acid", correct: false },
      { text: "Folic acid", correct: false },
    ],
  },
  {
    question: "A reversible, sometimes painful, blue-tinged discoloration of the planter surfaces and sides of the toes that blanches with pressure and fades with elevation of the legs is called purple toe syndrome. This is known to be the side effect of:",
    answers: [
      { text: "Urokinase", correct: false },
      { text: "Heparin", correct: false },
      { text: "Warfarin", correct: true },
      { text: "Dalteparin", correct: false },
      { text: "protamine", correct: false },
    ],
  },
  {
    question: "In a patient with a history of heparin sensitivitu, he would probably need a drug with no cross-sensitivity to heparin,which would be:",
    answers: [
      { text: "Danaparoid", correct: true },
      { text: "Enoxaparin", correct: false },
      { text: "Fondaparinux", correct: false },
      { text: "Warfarin", correct: false },
      { text: "Dalteparin", correct: false },
    ],
  },
  {
    question: "Which of the following drug delays blood clotting in vitro and in vivo,the antagonist is protamine sulfate?",
    answers: [
      { text: "fibrinolysin", correct: false },
      { text: "Streptolyase", correct: false },
      { text: "Neodicoumarin", correct: false },
      { text: "heparin", correct: true },
      { text: "acetylsalicylic acid.", correct: false },
    ],
  },
  {
    question: "A 45 y.o.patient developed severe thrombocytopenia due to unfractionated heparin so the best alternative anticoagulant will be:",
    answers: [
      { text: "Lepirudin", correct: true },
      { text: "Abciximab", correct: false },
      { text: "Urokinase", correct: false },
      { text: "Plasminogen", correct: false },
      { text: "Vitamin K", correct: false },
    ],
  },
  {
    question: "Which of the following drug used for pernicious anemia?",
    answers: [
      { text: "Ferrous lactate", correct: false },
      { text: "Cyanocobalamin", correct: true },
      { text: "Iron dextrane", correct: false },
      { text: "Ferrous gluconate", correct: false },
      { text: "Vitamin K", correct: false },
    ],
  },
  {
    question: "Pernicious anemia is developed due to deficiency of:",
    answers: [
      { text: "Erythropoietin", correct: false },
      { text: "Vitamin B12", correct: true },
      { text: "Iron", correct: false },
      { text: "Vitamin B6", correct: false },
      { text: "Vitamin B1", correct: false },
    ],
  },
  {
    question: "Which dietary component is needed for the synthesis of DNA and influences the production of RBCs?",
    answers: [
      { text: "Calcium", correct: false },
      { text: "Iron", correct: false },
      { text: "Vitamin K", correct: false },
      { text: "Folic acid", correct: true },
      { text: "Vitamin B", correct: false },
    ],
  },
  {
    question: "Indicate the drug which increases absorption of iron from intestine",
    answers: [
      { text: "Cyanocobalamin", correct: false },
      { text: "Folic acid", correct: false },
      { text: "Ascorbic acid", correct: true },
      { text: "Erythropoietin", correct: false },
      { text: "Calcium", correct: false },
    ],
  },
  {
    question: "Which of the following drugs, when prescribed concurrently with heparin, could lead to an increased chance of hemorrhage?",
    answers: [
      { text: "Vitamin K", correct: false },
      { text: "Aspirin", correct: true },
      { text: "Iron", correct: false },
      { text: "Protamine sulfate", correct: false },
      { text: "Folic acid", correct: false },
    ],
  },
  {
    question: "The use of Iron, folic  acid and Vitamin B12 is indicated in:",
    answers: [
      { text: "Anaemia", correct: true },
      { text: "Haemophilia", correct: false },
      { text: "Haemodynamic shock", correct: false },
      { text: "Chronic malnutrition", correct: false },
      { text: "Thromboembolism", correct: false },
    ],
  },
  {
    question: "Which of the following best describes the effect of propylthiouracil on thyroid hormone production?",
    answers: [
      { text: "It blocks the release of thyrotropin-releasing hormone", correct: false },
      { text: "It inhibits uptake of iodide by thyroid cells", correct: false },
      { text: "It prevents the release of thyroid hormone from thyroglobulin", correct: false },
      { text: "It blocks iodination and coupling of tyrosines in thyroglobulin to form thyroid hormones", correct: true },
      { text: "It blocks the release of hormones from the thyroid gland", correct: false },
    ],
  },
  {
    question: "Hyperthyroidism can be treated by all but which one of the following?",
    answers: [
      { text: "Triiodothyronine", correct: true },
      { text: "Surgical removal of the thyroid gland", correct: false },
      { text: "Iodide", correct: false },
      { text: "Propylthiouracil", correct: false },
      { text: "Methimazole", correct: false },
    ],
  },
  {
    question: "Which   one of the following statement is correct?",
    answers: [
      { text: "Sulfonylureas decrease the secretion of insulin", correct: false },
      { text: "Tolbutamide is effective in type 1 diabetics", correct: false },
      { text: "Sylfonylureas increase both the release of insuline and the insulin-sensitivity of target tissue", correct: true },
      { text: "Glipizide increases glucagon secretion", correct: false },
      { text: "Chlorpropamide blocks insulin receptors", correct: false },
    ],
  },
  {
    question: "Which one of the following statement is correct?",
    answers: [
      { text: "Insulin can be administered orally", correct: false },
      { text: "Insulin is always required therapy in Type 2 diabetics", correct: false },
      { text: "Protamine is added to insulin to decrease the rate of absorption of the hormone", correct: true },
      { text: "Sylfonylureas are useful in the treatment of ketoacidosis", correct: false },
      { text: "Insulin acts by binding to receptors in the nucleus of target tissue", correct: false },
    ],
  },
  {
    question: "Which one of the following statement is correct?",
    answers: [
      { text: "Diethylstibestrol enhances fertility by blocking the inhibitory effect of estrogen on the pituitary", correct: false },
      { text: "Tamoxifen is an estrogen antagonist", correct: true },
      { text: "Dexamethasone has weak anti-inflammatory properties", correct: false },
      { text: "Estrogens are mainly excreted unchanged in the urine", correct: false },
      { text: "Tamoxifen is used to treat infertility", correct: false },
    ],
  },
  {
    question: "Estrogen replacement therapy in menopausal women",
    answers: [
      { text: "restores bone loss accompanying osteoporosis", correct: false },
      { text: "may induce \"hot flashes\"", correct: false },
      { text: "may cause atrophic vaginitis", correct: false },
      { text: "is most effective if instituted at the first signs of menopause", correct: true },
      { text: "requires higher doses of estrogen than are required with oral contraceptive therapy", correct: false },
    ],
  },
  {
    question: "Which one of the following is a synthetic estrogen used in oral contraceptives?",
    answers: [
      { text: "Mestranol", correct: true },
      { text: "Norgestrel", correct: false },
      { text: "Clomiphene", correct: false },
      { text: "Estradiol", correct: false },
      { text: "Norethindrone", correct: false },
    ],
  },
  {
    question: "Specify a drug that increases the tone of the uterus.",
    answers: [
      { text: "dichlorothiazide", correct: false },
      { text: "neodikumarin", correct: false },
      { text: "pentoxyl", correct: false },
      { text: "ergometrine", correct: true },
      { text: "furosemide", correct: false },
    ],
  },
  {
    question: "What is the main effect of oxytocin?",
    answers: [
      { text: "decrease in blood sugar", correct: false },
      { text: "increased diuresis", correct: false },
      { text: "increasing the contractile function of the uterus", correct: true },
      { text: "decrease in the contractile function of the uterus", correct: false },
      { text: "lowering blood sugar.", correct: false },
    ],
  },
  {
    question: "Which drug increases the predominantly contractile activity of the uterus?",
    answers: [
      { text: "fenoterol", correct: false },
      { text: "oxytocin", correct: true },
      { text: "ergotamine", correct: false },
      { text: "cotarnin", correct: false },
      { text: "magnesium sulfate", correct: false },
    ],
  },
  {
    question: "Identify the drug. It has a hypoglycemic effect. Promotes the penetration of glucose into cells and its utilization.  When ingested ineffective.",
    answers: [
      { text: "butamide", correct: false },
      { text: "glibutide", correct: false },
      { text: "glucagon", correct: false },
      { text: "adrenaline", correct: false },
      { text: "insulin", correct: true },
    ],
  },
  {
    question: "What drug is used for hypoglycemic coma?",
    answers: [
      { text: "insulin", correct: false },
      { text: "adiurecrin", correct: false },
      { text: "adrenaline", correct: true },
      { text: "glibutide", correct: false },
      { text: "butamide", correct: false },
    ],
  },
  {
    question: "Calcitonin is a hormone produced and secreted from the thyroid parafollicular C cells and is regulated by the serum concentration of",
    answers: [
      { text: "Potassium.", correct: false },
      { text: "Calcium", correct: true },
      { text: "Iron", correct: false },
      { text: "Zinc", correct: false },
      { text: "Sodium", correct: false },
    ],
  },
  {
    question: "Which of the following insulines is rapid and long acting Insulin?",
    answers: [
      { text: "Insulin lispro", correct: false },
      { text: "Insulin exubera", correct: false },
      { text: "Insulin soluble (regular).", correct: false },
      { text: "Insulin aspart", correct: false },
      { text: "Insulin glargine.", correct: true },
    ],
  },
  {
    question: "Beef Insulin differs from human insulin by",
    answers: [
      { text: "3 amino acids", correct: true },
      { text: "1 amino acids", correct: false },
      { text: "2 amino acids", correct: false },
      { text: "4 amino acids", correct: false },
      { text: "5 amino acids", correct: false },
    ],
  },
  {
    question: "A 48-year-old man with type 2 diabetes is treated with glargine insulin once daily and lispro insulin with each meal. The main clinical difference in these 2 types of insulin is in their",
    answers: [
      { text: "The way they are administered.", correct: false },
      { text: "Storage", correct: false },
      { text: "Effective duration of action.", correct: true },
      { text: "Penetration into the central nervous system.", correct: false },
      { text: "Metabolism by the liver.", correct: false },
    ],
  },
  {
    question: "A 45-year-old woman with type 2 diabetes is noticing an increase in her basal insulin dose needed to achieve the same effect. This is likely because of",
    answers: [
      { text: "Increased glucagon secretion.", correct: false },
      { text: "Insulin resistance in target tissues.", correct: true },
      { text: "Increased insulin secretion.", correct: false },
      { text: "increased consumption of carbohydrates.", correct: false },
      { text: "Improper formulation of her insulin.", correct: false },
    ],
  },
  {
    question: "A 53-year-old woman with the diagnosis of Graves disease is being treated with radioactive iodine. She should be warned of the high likelihood of",
    answers: [
      { text: "Iodism", correct: false },
      { text: "Hypothyroidism", correct: true },
      { text: "Hyperthyroidism.", correct: false },
      { text: "Thyroid cancer", correct: false },
      { text: "Thyroid nodules.", correct: false },
    ],
  },
  {
    question: "Calcitonin is a hormone produced and secreted from the thyroid parafollicular C cells and is regulated by the serum concentration of",
    answers: [
      { text: "Zinc", correct: false },
      { text: "Calcium", correct: true },
      { text: "Iron", correct: false },
      { text: "Sodium", correct: false },
      { text: "Potassium", correct: false },
    ],
  },
  {
    question: "A 56-year-old woman with type 2 diabetes is being treated with metformin and glimepiride. These two drugs act synergistically because glimepiride",
    answers: [
      { text: "Acts to increase glycogen stores in the liver.", correct: false },
      { text: "Decreases the clearance of metformin.", correct: false },
      { text: "Stimulates insulin release by binding to a specific site on β cells.", correct: true },
      { text: "Decreases glucose reabsorption in the kidney.", correct: false },
      { text: "Increases the activity of AMP-dependent protein kinase (AMPK).", correct: false },
    ],
  },
  {
    question: "A 25-year-old woman has been treated with thyroxine for hypothyroidism. She has become pregnant. She complains now of being constantly fatigued. The proper course of action would be to",
    answers: [
      { text: "Double her dose of thyroxine.", correct: false },
      { text: "Increase the iodine in her diet.", correct: false },
      { text: "Measure her serum TSH during the first trimester and adjust her thyroxine dose based on the result", correct: true },
      { text: "decrease the dose of thyroxine as the need for thyroid replacement therapy decreases during pregnancy", correct: false },
      { text: "Do nothing, fatigue is normal during pregnancy.", correct: false },
    ],
  },
  {
    question: "A 22-year-old woman has signs of hyperthyroidism. Her doctor orders blood tests to determine the pituitary regulation of thyroid function. Which of the following tests will be most helpful?",
    answers: [
      { text: "T4—thyroxine", correct: false },
      { text: "Iodine", correct: false },
      { text: "T3—triiodothyronine", correct: false },
      { text: "TRH—thyroid-releasing hormone.", correct: false },
      { text: "TSH—thyroid-stimulating hormone", correct: true },
    ],
  },
  {
    question: "A 34-year-old woman is being prepared for thyroidectomy. As part of the preparation, she is given a solution containing high iodide concentration. She wonders why she is being treated with something that is added to food (salt). The explanation is that",
    answers: [
      { text: "Low concentrations of iodide are required for thyroxine synthesis, but high concentrations inhibit thyroxine synthesis and release.", correct: true },
      { text: "Iodide in food is not utilized by the thyroid gland.", correct: false },
      { text: "Iodide in food is rapidly taken up by skeletal muscle.", correct: false },
      { text: "High concentrations of iodide block the TRH receptor on the pituitary gland.", correct: false },
      { text: "Iodide in food is poorly absorbed", correct: false },
    ],
  },
  {
    question: "A 51-year-old woman is beginning menopause. Hormone replacement therapy should be considered for therapy of her hot flashes as well as to decrease the risk of",
    answers: [
      { text: "Bone fractures", correct: true },
      { text: "Dementia.", correct: false },
      { text: "Liver impairment.", correct: false },
      { text: "Coronary heart disease.", correct: false },
      { text: "Thromboembolic disease.", correct: false },
    ],
  },
  {
    question: "A 69-year-old man with type 2 diabetes is hospitalized because of a knee replacement. His blood sugar post-surgery is 215 mg/dL. His hyperglycemia is best managed in the hospital by",
    answers: [
      { text: "Adding a GLP-1 agent.", correct: false },
      { text: "Subcutaneous or intravenous insulin.", correct: true },
      { text: "Decreasing his food intake.", correct: false },
      { text: "Increasing his sulfonylurea dose", correct: false },
      { text: "Increasing his metformin dose.", correct: false },
    ],
  },
  {
    question: "A 3-year-old is brought to the emergency department having just ingested a large overdose of tolbutamide, an oral antidiabetic drug. Tolbutamide is a weak acid with a pKa of 5.3. It is capable of entering most tissues, including the brain. On physical examination, the heart rate is 100/min, blood pressure 90/50 mm Hg, and respiratory rate 20/min. Which of the following statements about this case of tolbutamide overdose is most correct?",
    answers: [
      { text: "Hemodialysis is the only effective therapy", correct: false },
      { text: "Less of the drug would be ionized at blood pH than at stomach pH", correct: false },
      { text: "Urinary excretion would be accelerated by administration of NH4Cl, an acidifying agent", correct: false },
      { text: "Absorption of the drug would be slower from the stomach than from the small intestine", correct: false },
      { text: "Urinary excretion would be accelerated by giving NaHCO3, an alkalinizing agent", correct: true },
    ],
  },
  {
    question: "A 3-year-old girl presented with hirsutism, breast enlargement, and a height and bone age that was  consistent with an age of 9. Diagnostic testing revealed precocious puberty. Which of the following is the most appropriate drug for treatment of this patient’s precocious puberty?",
    answers: [
      { text: "Atosiban", correct: false },
      { text: "Follitropin", correct: false },
      { text: "Leuprolide", correct: true },
      { text: "Octreotide", correct: false },
      { text: "Pegvisomant", correct: false },
    ],
  },
  {
    question: "A 29-year-old woman in her 41st wk of gestation had been in labor for 12 h. Although her uterine  contractions had been strong and regular initially, they had diminished in force during the past hour. Which of the following agents would be used to facilitate this woman’s labor and delivery?",
    answers: [
      { text: "Dopamine", correct: false },
      { text: "Leuprolide", correct: false },
      { text: "Oxytocin", correct: true },
      { text: "Prolactin", correct: false },
      { text: "Vasopressin", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs promotes the release of endogenous insulin?",
    answers: [
      { text: "Acarbose", correct: true },
      { text: "Glipizide", correct: false },
      { text: "Canagliflozin", correct: false },
      { text: "Metformin", correct: false },
      { text: "Pioglitazone", correct: false },
    ],
  },
  {
    question: "Which of the following is an important effect of insulin?",
    answers: [
      { text: "Increased conversion of amino acids into glucose", correct: false },
      { text: "Increased glucose transport into cells", correct: true },
      { text: "Stimulation of glycogenolysis", correct: false },
      { text: "Increased gluconeogenesis", correct: false },
      { text: "Inhibition of lipoprotein lipase", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is most likely to cause hypoglycemia when used as monotherapy in the treatment of type 2 diabetes?",
    answers: [
      { text: "Acarbose", correct: false },
      { text: "Glyburide", correct: true },
      { text: "Miglitol", correct: false },
      { text: "Canagliflozin", correct: false },
      { text: "Metformin", correct: false },
    ],
  },
  {
    question: "Which of the following drug increases contractile function of the uterus.They enhance mainly rhythmic activity. Efficacy depends on the presence and duration of pregnancy.Used of weak labor.When taken orally it is ineffective due to destruction in the gastrointestinal tract?",
    answers: [
      { text: "Prozerin", correct: false },
      { text: "Benzohexonium", correct: false },
      { text: "Ergometrin", correct: false },
      { text: "Dinoprost", correct: false },
      { text: "Oxytocin", correct: true },
    ],
  },
  {
    question: "Which of the following drug has a hypoglycemic effect, promotes the penetration of glucose into cells and its utilization, ineffective when taken orally?",
    answers: [
      { text: "Butamide", correct: false },
      { text: "Glybutide", correct: false },
      { text: "Glucagon", correct: false },
      { text: "adrenaline", correct: false },
      { text: "Insulin", correct: true },
    ],
  },
  {
    question: "Which of the following hormonal agent has anti-inflammatory, antiallergic, immunosuppressive effects, increases blood glucose levels, stimulates the breakdown of proteins in muscles, causes redistribution of adipose tissue in the body?",
    answers: [
      { text: "Adrenalin", correct: false },
      { text: "DOXA", correct: false },
      { text: "Testosterone propionate", correct: false },
      { text: "Phenobolin", correct: false },
      { text: "Prednisolone", correct: true },
    ],
  },
  {
    question: "Which of the following hormone is also known as emergency hormone?",
    answers: [
      { text: "Cortisol", correct: false },
      { text: "Growth Hormone", correct: false },
      { text: "Prolactine", correct: false },
      { text: "adrenaline", correct: true },
      { text: "Oxytocin", correct: false },
    ],
  },
  {
    question: "An order for prednisolone reads 10 mg four times a day.The dose for the child is 2 mg/kg/day. How many pounds does the child weigh?",
    answers: [
      { text: "36 pounds", correct: false },
      { text: "40 pounds", correct: false },
      { text: "46 pounds", correct: false },
      { text: "44 pounds", correct: true },
      { text: "42 pounds", correct: false },
    ],
  },
  {
    question: "Which of the following drug is an antithyroid drug?",
    answers: [
      { text: "Oxytocin", correct: false },
      { text: "Adiurecrin", correct: false },
      { text: "Thyroxine", correct: false },
      { text: "Triiodothyronine", correct: false },
      { text: "Mercazolil", correct: true },
    ],
  },
  {
    question: "Which of the following the main indication for prescribing vasopressin drugs?",
    answers: [
      { text: "Myxedema", correct: false },
      { text: "Thyrotoxicosis", correct: false },
      { text: "Diabetes mellitus", correct: false },
      { text: "Diabetes insipidus", correct: true },
      { text: "Autoimmune disease", correct: false },
    ],
  },
  {
    question: "Which of the following the mechanism of action of oxytocin?",
    answers: [
      { text: "Stimulates adrenoreceptors of the myometrium", correct: false },
      { text: "Blocks cholinergic receptors of the myometrium", correct: false },
      { text: "Increases the sensitivity of ion channels of myocellular membranes geometry", correct: false },
      { text: "Reduces the sensitivity of ion channels of myometrial cell membranes", correct: true },
      { text: "stimulates receptors for prostoglandins in the myometrium", correct: false },
    ],
  },
  {
    question: "Which of the following drug is for stimulating the adrenal cortex?",
    answers: [
      { text: "Corticotropin", correct: true },
      { text: "Oxytocin", correct: false },
      { text: "Human chorionic gonadotropin", correct: false },
      { text: "Prednisolone", correct: false },
      { text: "Thyroidin", correct: false },
    ],
  },
  {
    question: "Which one of the following action may cause drug deoxycorticosterone acetate?",
    answers: [
      { text: "Increased blood glucose levels", correct: false },
      { text: "Lowering blood glucose levels", correct: false },
      { text: "Retains sodium in the body", correct: true },
      { text: "Promotes the removal of sodium from the body", correct: false },
      { text: "Has an anti-inflammatory effect", correct: false },
    ],
  },
  {
    question: "Which of the following most directly describes the mechanism of action of digitalis?",
    answers: [
      { text: "Inhibits sodium-potassiumATPase", correct: true },
      { text: "Decreases intracellular sodium concentration", correct: false },
      { text: "Increases the intracellular level of ATP", correct: false },
      { text: "Stimulates production of cAMP", correct: false },
      { text: "Decreases release of calcium from the sarcoplasmic reticulum", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs would be the most appropriate single drug therapy for mild congestive heart failure?",
    answers: [
      { text: "A vasodilator such as hydralazine", correct: false },
      { text: "A cardiac glycoside such as digoxin", correct: false },
      { text: "A B-adrenergic agonist such as norepinephrine", correct: false },
      { text: "A diuretic such as hydrochlorothiazide", correct: false },
      { text: "An ACE inhibitor,such as captopril", correct: true },
    ],
  },
  {
    question: "Which one of the following statements concerning congestive heart failure is correct?",
    answers: [
      { text: "Digitoxin is more widely used than digoxin because it has a shorter half-life", correct: false },
      { text: "Serum levels of digoxin can be decreased by quinidine", correct: false },
      { text: "Loop diuretics are used in patients with renal insufficiency", correct: true },
      { text: "Digoxin is eliminated primarily in the bile", correct: false },
      { text: "Congenital heart defects are the most common cause of congestive heart failure", correct: false },
    ],
  },
  {
    question: "Which one of the following aggravates a digitalis-induced arrhythmia?",
    answers: [
      { text: "Decreased serum calcium", correct: false },
      { text: "Decreased heart rate with propranolol", correct: false },
      { text: "Decreased serum sodium", correct: false },
      { text: "Decreased serum potassium", correct: true },
      { text: "Decreased serum angiotensin II", correct: false },
    ],
  },
  {
    question: "a drug from the group of non-glycosidic cardiotonic agents:",
    answers: [
      { text: "strophantin K", correct: false },
      { text: "Corglycon", correct: false },
      { text: "celanide", correct: false },
      { text: "amrinone", correct: true },
      { text: "digoxin", correct: false },
    ],
  },
  {
    question: "The mechanism of action of cardiac glycosides is associated with the action on the enzyme:",
    answers: [
      { text: "H +, K + - ATPase", correct: false },
      { text: "phospholipase A2", correct: false },
      { text: "Na+, K+–ATPase", correct: true },
      { text: "cyclooxygenase-1", correct: false },
      { text: "catechol-O-methyltransferase.", correct: false },
    ],
  },
  {
    question: "Indicate against the background of which substances the toxicity of cardiac glycosides increases.",
    answers: [
      { text: "potassium preparations", correct: false },
      { text: "drugs that bind calcium ions in the blood", correct: false },
      { text: "saluretics", correct: true },
      { text: "unitiol", correct: false },
      { text: "potassium-sparing diuretics", correct: false },
    ],
  },
  {
    question: "Specify a cardiac glycoside with a pronounced ability to cumulate.",
    answers: [
      { text: "strophanthin", correct: false },
      { text: "digitoxin", correct: true },
      { text: "Digoxin", correct: false },
      { text: "clonidine", correct: false },
      { text: "unitiol", correct: false },
    ],
  },
  {
    question: "Specify the main indication for prescribing cardiac glycosides:",
    answers: [
      { text: "coronary insufficiency", correct: false },
      { text: "heart failure", correct: true },
      { text: "vascular collapse", correct: false },
      { text: "angina pectoris", correct: false },
      { text: "blockade of the conduction system of the heart", correct: false },
    ],
  },
  {
    question: "Indicate the main effect of digitoxin.",
    answers: [
      { text: "antianginal", correct: false },
      { text: "cardiotonic", correct: true },
      { text: "hypotensive", correct: false },
      { text: "hypertensive", correct: false },
      { text: "analgesic", correct: false },
    ],
  },
  {
    question: "Which group of drugs: They have a cardiotonic effect. Reduce oxygen consumption per unit of work. Reduce venous congestion. Reduce swelling. Applied with heart failure. In case of overdose, potassium preparations and agents that bind calcium ions are prescribed.  Pos",
    answers: [
      { text: "antianginal drugs", correct: false },
      { text: "adrenomimetics", correct: false },
      { text: "methylxanthines (caffeine)", correct: false },
      { text: "cardiac glycosides", correct: true },
      { text: "diuretics.", correct: false },
    ],
  },
  {
    question: "A patient taking digoxin for his heart failure is started on lovastatin and cholestyramine to lower his/her LDL-C levels. The dose of digoxin",
    answers: [
      { text: "Should be increased.", correct: false },
      { text: "Should be eliminated to prevent serious drug interactions.", correct: false },
      { text: "Should be taken 1 hour before or 3 to 4 hours after a dose of cholestyramine.", correct: true },
      { text: "Will not be affected as there are no known drug interactions among these drugs", correct: false },
      { text: "Should be decreased.", correct: false },
    ],
  },
  {
    question: "The cardiovascular risk associated with celecoxib results from",
    answers: [
      { text: "Effects on myocardial ion channels.", correct: false },
      { text: "Inhibition of platelet thromboxane production", correct: false },
      { text: "Inhibition of prostaglandin production in the gastric epithelium.", correct: false },
      { text: "Enhanced prostacyclin production by vascular endothelium.", correct: false },
      { text: "Inhibition of prostaglandin in the kidney.", correct: true },
    ],
  },
  {
    question: "A patient taking digoxin for his heart failure is started on lovastatin and cholestyramine to lower his/her LDL-C levels. The dose of digoxin",
    answers: [
      { text: "Should be eliminated to prevent serious drug interactions.", correct: false },
      { text: "Should be decreased.", correct: false },
      { text: "Will not be affected as there are no known drug interactions among these drugs", correct: false },
      { text: "Should be increased.", correct: false },
      { text: "Should be taken 1 hour before or 3 to 4 hours after a dose of cholestyramine.", correct: true },
    ],
  },
  {
    question: "This drug is used in treating supraventricular tachycardias:",
    answers: [
      { text: "Digoxin", correct: true },
      { text: "Dobutamine", correct: false },
      { text: "Amrinone", correct: false },
      { text: "Dopamine", correct: false },
      { text: "Verapamil", correct: false },
    ],
  },
  {
    question: "A young girl of 20 years has taken a suicidal overdose of digoxin, the drug of choice in her treatment will be:",
    answers: [
      { text: "Lidocaine", correct: false },
      { text: "Phenytoin", correct: false },
      { text: "Digoxin antibodies", correct: true },
      { text: "Potassium chloride", correct: false },
      { text: "Magnesium sulfate", correct: false },
    ],
  },
  {
    question: "Define a group of funds. Possess cardiotonic action. Reduce oxygen consumption per unit of work. Reduce venous congestion. Reduce swelling. Used for heart failure. In case of overdose, potassium preparations and agents that bind calcium ions are prescribed.",
    answers: [
      { text: "antianginal drugs", correct: false },
      { text: "adrenergic agonists", correct: false },
      { text: "methylxanthines", correct: false },
      { text: "cardiac glycosides", correct: true },
      { text: "diuretics", correct: false },
    ],
  },
  {
    question: "The pain in the ischaemic heart disease is controlled by",
    answers: [
      { text: "Beta blockers", correct: false },
      { text: "NSAIDs", correct: false },
      { text: "Local anaesthetics", correct: false },
      { text: "Opioids", correct: true },
      { text: "Antibiotics", correct: false },
    ],
  },
  {
    question: "Which of the following drug is cardiac glycoside?",
    answers: [
      { text: "Adrenaline", correct: false },
      { text: "Quinidine sulfate", correct: false },
      { text: "Caffeine", correct: false },
      { text: "Strophanthin", correct: true },
      { text: "Cordiamine", correct: false },
    ],
  },
  {
    question: "If quinidine and digoxin are administered concurrently, what effect does quinidine have on digoxin?",
    answers: [
      { text: "Plasma concentration of digoxin is increased", correct: true },
      { text: "Absorption of digoxin from the gastrointestinal tract is decreased", correct: false },
      { text: "Effect of digoxin on the AV node is antagonized", correct: false },
      { text: "Metabolism of digoxin is prevented", correct: false },
      { text: "Adverse effect of digoxin is decreased", correct: false },
    ],
  },
  {
    question: "Drugs known as beta blockers will",
    answers: [
      { text: "increase heart rate", correct: false },
      { text: "decrease heart rate", correct: true },
      { text: "increase stroke volume.", correct: false },
      { text: "increase cardiac output.", correct: false },
      { text: "decrease the end systolic volume", correct: false },
    ],
  },
  {
    question: "This drug is a class IB antiarrhythmic drug:",
    answers: [
      { text: "Flecainide", correct: false },
      { text: "Sotalol", correct: false },
      { text: "Lidocaine", correct: true },
      { text: "Salbutamol", correct: false },
      { text: "Propranolol", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is antiarrhythmic?",
    answers: [
      { text: "sodium nitroprusside", correct: false },
      { text: "quinidine sulfate", correct: true },
      { text: "iron lactate", correct: false },
      { text: "ergometrine maleate", correct: false },
      { text: "papaverine hydrochloride", correct: false },
    ],
  },
  {
    question: "What effect does quinidine sulfate cause?",
    answers: [
      { text: "antiarrhythmic", correct: true },
      { text: "antianginal", correct: false },
      { text: "cardiotonic", correct: false },
      { text: "analgesic", correct: false },
      { text: "hypertensive", correct: false },
    ],
  },
  {
    question: "Specify an antiarrhythmic drug from the group of anesthetics.",
    answers: [
      { text: "quinidine sulfate", correct: false },
      { text: "diphenin", correct: false },
      { text: "cordarone", correct: false },
      { text: "verapamil", correct: false },
      { text: "lidocaine", correct: true },
    ],
  },
  {
    question: "Which of the following antiarrhythmic drugs belongs to calcium channel blockers?",
    answers: [
      { text: "quinidine sulfate", correct: false },
      { text: "lidocaine", correct: false },
      { text: "inderal", correct: false },
      { text: "cordarone", correct: false },
      { text: "verapamil", correct: true },
    ],
  },
  {
    question: "This drug is a Class IA antiarrhythmic drug:",
    answers: [
      { text: "Sotalol", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Verapamil", correct: false },
      { text: "Quinidine", correct: true },
      { text: "Flecainide", correct: false },
    ],
  },
  {
    question: "This drug has beta-adrenergic blocking activity:",
    answers: [
      { text: "Flecainide", correct: false },
      { text: "Sotalol", correct: true },
      { text: "Lidocaine", correct: false },
      { text: "Verapamil", correct: false },
      { text: "Quinidine", correct: false },
    ],
  },
  {
    question: "This drug is a Class II antiarrhythmic drug:",
    answers: [
      { text: "Flecainide", correct: false },
      { text: "Propranolol", correct: true },
      { text: "Lidocaine", correct: false },
      { text: "Verapamil", correct: false },
      { text: "Quinidine", correct: false },
    ],
  },
  {
    question: "This drug is a Class III antiarrhythmic drug:",
    answers: [
      { text: "Flecainide", correct: false },
      { text: "Sotalol", correct: true },
      { text: "Lidocaine", correct: false },
      { text: "Verapamil", correct: false },
      { text: "Digoxin", correct: false },
    ],
  },
  {
    question: "This drug is a Class IC antiarrhythmic drug:",
    answers: [
      { text: "Flecainide", correct: true },
      { text: "Sotalol", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "Verapamil", correct: false },
      { text: "Quinidine", correct: false },
    ],
  },
  {
    question: "Which one of the following statements antiarrhythmic drugs is correct?",
    answers: [
      { text: "They may act by converting unidirectional block to a bidirectional block", correct: true },
      { text: "They often cause an increasein cardiac output", correct: false },
      { text: "As a group they have mild side effects", correct: false },
      { text: "They all affect Na channels in the cell membrane", correct: false },
      { text: "They are equally useful in atrial and ventricular arrhythmias", correct: false },
    ],
  },
  {
    question: "Choose a drug that eliminates the atrioventricular block.",
    answers: [
      { text: "strophanthin", correct: false },
      { text: "inderal", correct: false },
      { text: "verapamil", correct: false },
      { text: "amiodarone", correct: false },
      { text: "atropine", correct: true },
    ],
  },
  {
    question: "A 52-year-old woman with atrial fibrillation is prescribed apixaban. What is the mechanism of action of this oral anticoagulant?",
    answers: [
      { text: "It directly inhibits thrombin", correct: false },
      { text: "It indirectly inhibits thrombin by activating antithrombin.", correct: false },
      { text: "It indirectly inhibits factor Xa by activating antithrombin.", correct: false },
      { text: "It blocks the synthesis of active clotting actors.", correct: false },
      { text: "It directly inhibits factor Xa.", correct: true },
    ],
  },
  {
    question: "What is the mechanism of action of sotalol in preventing ventricular and atrial arrhythmias?",
    answers: [
      { text: "It blocks Ca2+ channels in ventricular myocytes.", correct: false },
      { text: "It blocks Na+ channels in ventricular myocytes.", correct: false },
      { text: "It blocks β adrenergic receptors in ventricular myocytes.", correct: false },
      { text: "It blocks K+ channels and β adrenergic receptors in ventricular myocytes.", correct: true },
      { text: "It blocks K+ channels in ventricular myocytes.", correct: false },
    ],
  },
  {
    question: "This drug acts by inhibiting slow Ca channels in the SA and AV nodes:",
    answers: [
      { text: "Quinidine", correct: false },
      { text: "Adenosine", correct: false },
      { text: "Flecainide", correct: false },
      { text: "Diltiazem", correct: true },
      { text: "Lidocaine", correct: false },
    ],
  },
  {
    question: "Tick the adverse reactions characteristic for lidocaine:",
    answers: [
      { text: "Agranulocytosis, leucopenia", correct: false },
      { text: "Extrapyramidal disorders", correct: false },
      { text: "Hypotension, paresthesias, convulsions", correct: true },
      { text: "Bronchospasm, dyspepsia", correct: false },
      { text: "Skeletal muscle weakness", correct: false },
    ],
  },
  {
    question: "This is a drug of choice for acute treatment of ventricular tachycardias:",
    answers: [
      { text: "Flecainide", correct: false },
      { text: "Sotalol", correct: false },
      { text: "Lidocaine", correct: true },
      { text: "Verapamil", correct: false },
      { text: "Adenosine", correct: false },
    ],
  },
  {
    question: "A 60-year-old man recently diagnosed with atrial fibrillation started a therapy with atenolol, a beta-receptor blocker. Which of the following changes most likely occurred in cardiac beta receptors after 1-2 weeks of therapy?",
    answers: [
      { text: "Spare beta-receptors become activated", correct: false },
      { text: "G-protein concentration decreased in time", correct: false },
      { text: "Beta-receptor number increased in time", correct: true },
      { text: "Beta-receptor intrinsic activity decreased in time", correct: false },
      { text: "Intracellular concentration of second messenger was decreased", correct: false },
    ],
  },
  {
    question: "Which drug causes the Smurf Syndrome where after long term administration of the drug causes blue-gray discoloration of skin",
    answers: [
      { text: "Amoidarone", correct: true },
      { text: "Lidocaine", correct: false },
      { text: "Procainamide", correct: false },
      { text: "Quinidine", correct: false },
      { text: "Phenytoin", correct: false },
    ],
  },
  {
    question: "What is the rationale for the use of lidocaine in treating a patient with ventricular tachycardia?",
    answers: [
      { text: "It blocks Na+ channels in ventricular myocytes.", correct: true },
      { text: "It activates purinergic receptors in the AV node", correct: false },
      { text: "It blocks K+ channels in ventricular myocytes.", correct: false },
      { text: "It blocks β adrenergic receptors in ventricular myocytes.", correct: false },
      { text: "It blocks Ca2+ channels in ventricular myocytes.", correct: false },
    ],
  },
  {
    question: "A 73-year-old man with a history of surgery for a benign thyroid nodule when he was 50 years old is now euthyroid but has developed a cardiac arrhythmia. Which of the antiarrhythmic drugs listed below might cause him to develop iodine-induced hypothyroidism?",
    answers: [
      { text: "Amiodarone", correct: true },
      { text: "Propranolol", correct: false },
      { text: "Quinidine", correct: false },
      { text: "Digoxin", correct: false },
      { text: "Diltiazam", correct: false },
    ],
  },
  {
    question: "For treatment of disarrythmias , which drug is approved for atrial fibrillation ( irregular contractions of indiviual muscular fibers of atria or ventricles) - decreases myocardium and conduction system, decreases contractile force of heart rate. works by blocking fast inward sodium current",
    answers: [
      { text: "Inderal", correct: false },
      { text: "Quinidine", correct: true },
      { text: "Lidocaine", correct: false },
      { text: "Phenytoin", correct: false },
      { text: "Procainamide", correct: false },
    ],
  },
  {
    question: "For treatment of disarrythmias , which drug blocks potassium ion channels as WELL as sodium ion channels. Prolongs the resting phase of heart contractions and teh refractory peroid. Used for patients in atrial dysrhythmias",
    answers: [
      { text: "Amoidarone", correct: true },
      { text: "Lidocaine", correct: false },
      { text: "Procainamide", correct: false },
      { text: "Quinidine", correct: false },
      { text: "Phenytoin", correct: false },
    ],
  },
  {
    question: "A 50 y.o. patient is having propranolol due to his cardiac problems but his physician now wants to stop this drug. Which of the following is the most important reason for this step?",
    answers: [
      { text: "Familiar tremor", correct: false },
      { text: "Partial AV heart block", correct: true },
      { text: "Mild hypertension", correct: false },
      { text: "Angina pectoris", correct: false },
      { text: "Supraventricular tachycardias", correct: false },
    ],
  },
  {
    question: "Which of the listed drugs is classified as antiarrhythmic?",
    answers: [
      { text: "sodium nitroprusside", correct: false },
      { text: "quinidine sulfate", correct: true },
      { text: "iron lactate", correct: false },
      { text: "ergometrine maleate", correct: false },
      { text: "papaverine hydrochloride", correct: false },
    ],
  },
  {
    question: "What effect does quinidine sulfate cause?",
    answers: [
      { text: "antiarrhythmic", correct: true },
      { text: "antianginal", correct: false },
      { text: "cardiotonic", correct: false },
      { text: "analgesic", correct: false },
      { text: "hypertensive", correct: false },
    ],
  },
  {
    question: "Which of the following antiarrhythmic drugs refers to calcium channel blockers?",
    answers: [
      { text: "quinidine sulfate", correct: false },
      { text: "lidocaine", correct: false },
      { text: "anaprilin", correct: false },
      { text: "cordarone", correct: true },
      { text: "verapamil", correct: false },
    ],
  },
  {
    question: "Which of the following class of anti-arrhythmic drug suppresses abnormal automaticity and permit the sinoatrial node to again assume the role of a dominant pacemaker?",
    answers: [
      { text: "Class I", correct: true },
      { text: "Class II", correct: false },
      { text: "Class III", correct: false },
      { text: "Class IV", correct: false },
      { text: "Class V", correct: false },
    ],
  },
  {
    question: "Electrical shock to the heart is usually used to treat",
    answers: [
      { text: "ventricular fibrillation.", correct: true },
      { text: "atrial fibrillation.", correct: false },
      { text: "heart block.", correct: false },
      { text: "heart murmur.", correct: false },
      { text: "myocardial infarction.", correct: false },
    ],
  },
  {
    question: "Drugs known as calcium channel blockers can be used to",
    answers: [
      { text: "decrease the force of cardiac contraction", correct: true },
      { text: "increase blood pressure.", correct: false },
      { text: "constrict the coronary arteries.", correct: false },
      { text: "increase sympathetic stimulation of the myocardium", correct: false },
      { text: "Increase stroke volume", correct: false },
    ],
  },
  {
    question: "Which one of the following adverse effects is associated with nitroglycerin?",
    answers: [
      { text: "Hypertension", correct: false },
      { text: "Throbbing headache", correct: true },
      { text: "Bradycardia", correct: false },
      { text: "Sexual dysfunction", correct: false },
      { text: "Anemia", correct: false },
    ],
  },
  {
    question: "Which one of the following is the most common side effect of antihyperlpidemic drug therapy?",
    answers: [
      { text: "Elevated blood pressure", correct: false },
      { text: "Gastrointestinal disturbance", correct: true },
      { text: "Neurological problems", correct: false },
      { text: "Heart palpitations", correct: false },
      { text: "Migraine headaches", correct: false },
    ],
  },
  {
    question: "Which one of the following hyperlipidemias is characterized by elevated plasma levels of chylomicrons and has no drug therapy available to lower the plasma lipoprotein levels?",
    answers: [
      { text: "Type 1", correct: true },
      { text: "Type 2", correct: false },
      { text: "Type 3", correct: false },
      { text: "Type 4", correct: false },
      { text: "Type 5", correct: false },
    ],
  },
  {
    question: "Antianginal drugs include:",
    answers: [
      { text: "strophanthin", correct: false },
      { text: "quinidine sulfate", correct: false },
      { text: "caffeine", correct: false },
      { text: "nitroglycerin", correct: true },
      { text: "cordiamine", correct: false },
    ],
  },
  {
    question: "The main effect of nitroglycerin.",
    answers: [
      { text: "reduces the need for myocardium in O2", correct: true },
      { text: "increases the need for myocardial oxygen", correct: false },
      { text: "has a positive inotropic effect", correct: false },
      { text: "increases blood pressure", correct: false },
      { text: "lowers the frequency of contractions of the heart", correct: false },
    ],
  },
  {
    question: "What is the side effect of nitroglycerin.",
    answers: [
      { text: "arterial hypertension", correct: false },
      { text: "bradycardia", correct: false },
      { text: "myocardial ischemia", correct: false },
      { text: "tachycardia", correct: true },
      { text: "AV blockade.", correct: false },
    ],
  },
  {
    question: "NITROGLYCERINE IS USED FOR?",
    answers: [
      { text: "NARCOTIC OVERDOSE", correct: false },
      { text: "TREATMENT OF ANGINA PECTORIS", correct: true },
      { text: "INFLAMMATORY CONDITIONS", correct: false },
      { text: "ANTI-ANXIETY MUSCLE RELAXANT TREATMENT", correct: false },
      { text: "antiarrhythmic therapy.", correct: false },
    ],
  },
  {
    question: "Duration of nitroglycerin action (sublingual) is:",
    answers: [
      { text: "10-30 minutes", correct: true },
      { text: "6-8 hours", correct: false },
      { text: "3-5 minutes", correct: false },
      { text: "1.5-2 hours", correct: false },
      { text: "3.5-4 hours", correct: false },
    ],
  },
  {
    question: "Which of the following antianginal agents is a calcium channel blocker?",
    answers: [
      { text: "Nitroglycerin", correct: false },
      { text: "Dipyridamole", correct: false },
      { text: "Minoxidil", correct: false },
      { text: "Nifedipine", correct: true },
      { text: "isosorbide dinitrate", correct: false },
    ],
  },
  {
    question: "Which of the following antianginal agents is a beta-adrenoceptor-blocking drug:",
    answers: [
      { text: "Dipyridamole", correct: false },
      { text: "Validol", correct: false },
      { text: "Atenolol", correct: true },
      { text: "Alinidine", correct: false },
      { text: "Nifedipine", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs decreases de novo cholesterol synthesis by inhibiting the enzyme 3-hydroxy-3-methylglytaryl CoA reductase?",
    answers: [
      { text: "Clofibrate", correct: false },
      { text: "Niacin", correct: false },
      { text: "Cholestyramine", correct: false },
      { text: "Lovastatin", correct: true },
      { text: "Gemfibrozil", correct: false },
    ],
  },
  {
    question: "Which of the following drug binds bile acids in the intestine, thus preventing their return to the liver via the enterohepatic circulation?",
    answers: [
      { text: "Niacin", correct: false },
      { text: "Clofibrate", correct: false },
      { text: "Cholestyramine", correct: true },
      { text: "Probucol", correct: false },
      { text: "Lovastatin", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs causes a decrease in plasma triacylglycerol levels by increasing the activity of lipoprotein lipase?",
    answers: [
      { text: "Niacin", correct: false },
      { text: "Clofibrate", correct: true },
      { text: "Cholestyramine", correct: false },
      { text: "Probucol", correct: false },
      { text: "Lovastatin", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs causes a decrease in liver triacylglycerol synthesis by limiting available free fatty acids needed as building blocks for this pathway?",
    answers: [
      { text: "Niacin", correct: true },
      { text: "Clofibrate", correct: false },
      { text: "Cholestyramine", correct: false },
      { text: "Probucol", correct: false },
      { text: "Lovastatin", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs inhibits 3-hydroxy-3-methylglutaryl CoA reductase, the rate limiting step in cholesterol synthesis?",
    answers: [
      { text: "Niacin", correct: false },
      { text: "Clofibrate", correct: false },
      { text: "Cholestyramine", correct: false },
      { text: "Probucol", correct: false },
      { text: "Lovastatin", correct: true },
    ],
  },
  {
    question: "Note the main indication for the appointment of nitrates.",
    answers: [
      { text: "coronary insufficiency", correct: true },
      { text: "vascular collapse", correct: false },
      { text: "paroxysmal tachycardia and extrasystole", correct: false },
      { text: "pheochromocytoma;", correct: false },
      { text: "peptic ulcer of the stomach and 12 duodenal ulcer.", correct: false },
    ],
  },
  {
    question: "Which of the following drugs used to prevent angina attacks is a β-blocker?",
    answers: [
      { text: "isosorbide dinitrate", correct: false },
      { text: "nitrong", correct: false },
      { text: "metoprolol", correct: true },
      { text: "dipyridamole", correct: false },
      { text: "nifedipine", correct: false },
    ],
  },
  {
    question: "For what purpose is acetylsalicylic acid prescribed for angina pectoris?",
    answers: [
      { text: "antipyretic", correct: false },
      { text: "analgesics", correct: false },
      { text: "thrombolytic therapy", correct: false },
      { text: "antiaggregation therapy", correct: true },
      { text: "reducing the need for myocardial oxygen", correct: false },
    ],
  },
  {
    question: "What is the purpose of streptokinase for myocardial infarction?",
    answers: [
      { text: "prevention of blood clots", correct: false },
      { text: "increasing the pumping function of the heart", correct: false },
      { text: "thrombolysis", correct: true },
      { text: "improvement of collateral circulation", correct: false },
      { text: "antiarrhythmic therapy.", correct: false },
    ],
  },
  {
    question: "Regarding the clinical use of liposomal formulations of amphotericin B, which statement is accurate?",
    answers: [
      { text: "They have a wider spectrum of antifungal activity than conventional formulations of amphotericin B", correct: false },
      { text: "Amphotericin B affinity for these lipids is greater than affinity for ergosterol", correct: false },
      { text: "More effective in fungal infections because they increase tissue uptake of amphotericin B", correct: false },
      { text: "They decrease the nephrotoxicity of amphotericin B", correct: true },
      { text: "Less expensive to use than conventional amphotericin B", correct: false },
    ],
  },
  {
    question: "The mechanism underlying the life-threatening interaction of organic nitrates and PDE5 inhibitors is that",
    answers: [
      { text: "PDE inhibitors enhance the conversion of organic nitrates to NO.", correct: false },
      { text: "PDE inhibitors block the degradation of cyclic GMP in vascular smooth muscle.", correct: true },
      { text: "PDE5 inhibitors block the degradation of organic nitrates in the liver.", correct: false },
      { text: "PDE5 inhibitor degradation is blocked by organic nitrates.", correct: false },
      { text: "PDE5 inhibitor excretion is blocked by organic nitrates.", correct: false },
    ],
  },
  {
    question: "A 29-year-old woman is being treated with valproic acid for simple partial seizures. She is at risk for developing a rise in her plasma",
    answers: [
      { text: "Glucose", correct: false },
      { text: "Hepatic transaminases.", correct: true },
      { text: "Calcium.", correct: false },
      { text: "Potassium.", correct: false },
      { text: "Blood urea nitrogen (BUN).", correct: false },
    ],
  },
  {
    question: "A patient is prescribed fenofibrate as part of his therapy to raise his/her HDL-C levels. Fenofibrate most likely acts by",
    answers: [
      { text: "Binding cell membrane receptors that leads to lowering of adipocyte hormone–sensitive lipase activity.", correct: false },
      { text: "Inhibiting HMG-CoA reductase.", correct: false },
      { text: "Binding PPARα receptors in liver and brown adipose tissue.", correct: true },
      { text: "Sequestering bile acids in the small intestine.", correct: false },
      { text: "Inhibiting cholesterol uptake rom the small intestine", correct: false },
    ],
  },
  {
    question: "A patient is prescribed niacin to reduce his/her triglyceride and LDL-C levels. The side effect(s) of niacin that most commonly limits patient compliance include",
    answers: [
      { text: "Flushing and dyspepsia.", correct: true },
      { text: "Tinninus", correct: false },
      { text: "Dry cough", correct: false },
      { text: "Bloating.", correct: false },
      { text: "Chills", correct: false },
    ],
  },
  {
    question: "The antianginal drug of choice to use in a patient with vasospastic angina who has sinus bradycardia is",
    answers: [
      { text: "Verapamil.", correct: false },
      { text: "Nitroglycerin.", correct: false },
      { text: "Propranolol.", correct: false },
      { text: "Amlodipidine.", correct: true },
      { text: "Diltiazem.", correct: false },
    ],
  },
  {
    question: "The main advantage of isosorbide-5-mononitrate (ISMN) over nitroglycerin for treatment of chronic angina is that",
    answers: [
      { text: "It can be used in combination with β adrenergic receptor blockers.", correct: false },
      { text: "It can be used in combination with Ca2+ channel blockers.", correct: false },
      { text: "It does not undergo rapid first-pass metabolism allowing once- or twice-daily oral administration.", correct: true },
      { text: "It is less expensive than nitroglycerin.", correct: false },
      { text: "Tolerance does not develop to its antianginal effects.", correct: false },
    ],
  },
  {
    question: "A patient is prescribed niacin to reduce his/her triglyceride and LDL-C levels. The side effect(s) of niacin that most commonly limits patient compliance include",
    answers: [
      { text: "Bloating.", correct: false },
      { text: "Flushing and dyspepsia.", correct: true },
      { text: "Chills", correct: false },
      { text: "Tinninus", correct: false },
      { text: "Dry cough", correct: false },
    ],
  },
  {
    question: "This combination of antianginal drugs should be avoided to circumvent an adverse drug interaction:",
    answers: [
      { text: "Amlodipine and a β adrenergic receptor antagonist", correct: false },
      { text: "Nitroglycerin and verapamil", correct: false },
      { text: "Verapamil and a β adrenergic receptor antagonist", correct: true },
      { text: "Nitroglycerin and a β adrenergic receptor antagonist", correct: false },
      { text: "Ranolazine and a β adrenergic receptor antagonist.", correct: false },
    ],
  },
  {
    question: "Specify an antianginal agent, an organic nitrate with a longer duration of action than nitroglycerin.",
    answers: [
      { text: "nitrosorbide", correct: true },
      { text: "nifedipine", correct: false },
      { text: "sodium nitroprusside", correct: false },
      { text: "dipyridamole", correct: false },
      { text: "validol", correct: false },
    ],
  },
  {
    question: "Which group of drug: They have an antianginal effect. Increase the delivery of oxygen to the heart and reduce the need for myocardial oxygen. It is used for coronary insufficiency.",
    answers: [
      { text: "cardiac glycosides;", correct: false },
      { text: "β-blockers", correct: false },
      { text: "β-adrenomimetics", correct: false },
      { text: "nitrates", correct: true },
      { text: "ganglion blockers", correct: false },
    ],
  },
  {
    question: "A patient is prescribed lovastatin to lower total cholesterol and LDL-C. For maximal effect, he should take his medication",
    answers: [
      { text: "With his evening meal.", correct: true },
      { text: "At bedtime", correct: false },
      { text: "With breakfast.", correct: false },
      { text: "Before breakfast.", correct: false },
      { text: "An hour after breakfast.", correct: false },
    ],
  },
  {
    question: "A patient with chronic exertional angina is refractory to combination therapy with a β blocker, organic nitrate, and Ca2+ channel blocker. Which of the following drugs may be use ul in reducing the symptoms of angina in this patient?",
    answers: [
      { text: "Aspirin", correct: false },
      { text: "A statin", correct: false },
      { text: "A PDE5 inhibitor", correct: false },
      { text: "Ranolazine", correct: true },
      { text: "Heparin", correct: false },
    ],
  },
  {
    question: "For treatment of MI, which one of these drugs decreases heart rate by the sympathetic nervous system and prevents development of angina pectoris. Reduces cardiac output by blocking beta and e[inepherine",
    answers: [
      { text: "Calcium Channel blockers", correct: false },
      { text: "Beta Adrenergic blockers", correct: true },
      { text: "Nitroglycerin", correct: false },
      { text: "Morphine sulfate", correct: false },
      { text: "IV drug", correct: false },
    ],
  },
  {
    question: "For treatment of MI, which one of these drugs decreases the heart workload by dialating blood vessels, increasing carfiac oxygen demand in stable angina. Alleviates chest pain by improving blood flow",
    answers: [
      { text: "Calcium Channel blockers", correct: false },
      { text: "Nitroglycerin", correct: true },
      { text: "IV drug", correct: false },
      { text: "Beta Adrenergic blockers", correct: false },
      { text: "Morphine sulfate", correct: false },
    ],
  },
  {
    question: "For treatment of MI, which one of these drugs FALLS UNDER THE CATEGORY that  relies on the principle that calcium needs to move from extracellular space into intracelular space to create cardiac contractions. This type of drug blocks  the calcium channels that are especially concentrated in the SA node and AV node this effect and smooth the cardiac muscles, causing dialation of the blood vessels. Used to treat angina and lower BP",
    answers: [
      { text: "Inderal", correct: false },
      { text: "Verapamil ( calan, isoptin)", correct: true },
      { text: "Propranolol", correct: false },
      { text: "Phenytoin", correct: false },
      { text: "Lidocaine", correct: false },
    ],
  },
  {
    question: "For treatment of MI, which one of these drugs  slows down the conduction of the AV node and causes depression of the myocardial contracility and causes dialation of coronary ateries. Also the side effects include : dizziness, sleepiness, headache, peripheral edema, hypotension, nausea, constipation.",
    answers: [
      { text: "Verapamil ( calan, isoptin)", correct: true },
      { text: "Inderal", correct: false },
      { text: "Lidocaine", correct: false },
      { text: "Propranolol", correct: false },
      { text: "Phenytoin", correct: false },
    ],
  },
  {
    question: "For what purpose is acetylsalicylic acid prescribed for angina pectoris?",
    answers: [
      { text: "antipyretic", correct: false },
      { text: "pain reliever", correct: false },
      { text: "thrombolytic therapy", correct: false },
      { text: "antiaggregation therapy", correct: true },
      { text: "decreased myocardial oxygen demand", correct: false },
    ],
  },
  {
    question: "Which of the listed drugs used to prevent attacks of angina pectoris is a β-blocker?",
    answers: [
      { text: "isosorbide dinitrate", correct: false },
      { text: "nitrogen", correct: false },
      { text: "metoprolol", correct: true },
      { text: "dipyridamole", correct: false },
      { text: "nifedipine", correct: false },
    ],
  },
  {
    question: "Define a group of funds. Provides antianginal action. Increase oxygen delivery to the heart and reduce myocardial oxygen demand. Used for coronary insufficiency.",
    answers: [
      { text: "cardiac glycosides", correct: false },
      { text: "β-blockers", correct: false },
      { text: "β-adrenergic agonists", correct: false },
      { text: "nitrates", correct: true },
      { text: "ganglion blockers", correct: false },
    ],
  },
  {
    question: "For what purpose is streptokinase prescribed for a heart attack myocardium?",
    answers: [
      { text: "prevention of thrombosis", correct: false },
      { text: "increasing the pumping function of the heart", correct: true },
      { text: "thrombolysis", correct: false },
      { text: "improvement of collateral circulation", correct: false },
      { text: "antiarrhythmic therapy", correct: false },
    ],
  },
  {
    question: "Impotence is caused by which drugs:",
    answers: [
      { text: "Angiotensin antagonist", correct: false },
      { text: "B-Blockers", correct: true },
      { text: "ACE inhibitors", correct: false },
      { text: "B-agonist", correct: false },
      { text: "A-blockers", correct: false },
    ],
  },
  {
    question: "This drug is inhibitor of renin synthesis:",
    answers: [
      { text: "Propranolol", correct: true },
      { text: "Enalapril", correct: false },
      { text: "Diazoxide", correct: false },
      { text: "Losartan", correct: false },
      { text: "Valsartan", correct: false },
    ],
  },
  {
    question: "Which is an appropriate choice for hypertension treatment during pregnancy?",
    answers: [
      { text: "Aliskiren", correct: false },
      { text: "Fosinopril", correct: false },
      { text: "Hydralazine", correct: true },
      { text: "Valsartan", correct: false },
      { text: "Losartan", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is antihypertensive?",
    answers: [
      { text: "mezaton", correct: false },
      { text: "naphthyzine", correct: false },
      { text: "clonidine", correct: true },
      { text: "cordiamine", correct: false },
      { text: "strophanthin", correct: false },
    ],
  },
  {
    question: "Specify the grug that causes the longest hypotensive effect.",
    answers: [
      { text: "nitroglycerin", correct: false },
      { text: "sodium nitroprusside", correct: false },
      { text: "sodium nitroprusside", correct: false },
      { text: "hygronium", correct: false },
      { text: "reserpine", correct: true },
    ],
  },
  {
    question: "Choose an antihypertensive agent from the group of ganglion blockers.",
    answers: [
      { text: "methyldopa", correct: false },
      { text: "hygronium", correct: true },
      { text: "reserpine", correct: false },
      { text: "prazosin", correct: false },
      { text: "apressin", correct: false },
    ],
  },
  {
    question: "Which of the antihypertensive drugs belongs to the group of βadrenergic blockers?",
    answers: [
      { text: "clonidine", correct: false },
      { text: "benzohexonium", correct: false },
      { text: "octadine", correct: false },
      { text: "anaprilin", correct: true },
      { text: "prazosin", correct: false },
    ],
  },
  {
    question: "Note the antihypertensive agent - an inhibitor of the angiotensin-converting enzyme.",
    answers: [
      { text: "captopril", correct: true },
      { text: "inderal", correct: false },
      { text: "dichlorothiazide", correct: false },
      { text: "apressin", correct: false },
      { text: "benzohexonium", correct: false },
    ],
  },
  {
    question: "Which one of the following antihypertensives is most likely to cause reflex tachycardia?",
    answers: [
      { text: "Propranolol", correct: false },
      { text: "Nifedipine", correct: false },
      { text: "Prazosin", correct: false },
      { text: "Hydralazine", correct: true },
      { text: "Captopril", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs acts at central presynaptic A2 receptors?",
    answers: [
      { text: "Minoxidil", correct: false },
      { text: "Verapamil", correct: false },
      { text: "Clonidine", correct: true },
      { text: "Enalapril", correct: false },
      { text: "Hydrochlorothiazide", correct: false },
    ],
  },
  {
    question: "Which can precipitate a hypertensive crisis following abrupt cessation of therapy?",
    answers: [
      { text: "Clonidine", correct: true },
      { text: "Diltiazem", correct: false },
      { text: "Enalapril", correct: false },
      { text: "Losartan", correct: false },
      { text: "Hydrochlorothiazide", correct: false },
    ],
  },
  {
    question: "Which may cause reflex tachycardia and /or postural hypotension on initial administration?",
    answers: [
      { text: "Atenolol", correct: false },
      { text: "Hydrochlorothiazide", correct: false },
      { text: "Metoprolol", correct: false },
      { text: "Prazosin", correct: true },
      { text: "Verapamil", correct: false },
    ],
  },
  {
    question: "From the list of antihypertensive drugs below select the one most likely to lower blood sugar",
    answers: [
      { text: "Prazosin", correct: false },
      { text: "Propranolol", correct: true },
      { text: "Nifedipine", correct: false },
      { text: "Captopril", correct: false },
      { text: "Hydralazine", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs contraindicated to a pregnant ,hypertensive woman?",
    answers: [
      { text: "Hydrochlorothiazide", correct: false },
      { text: "Propranolol", correct: false },
      { text: "A-Methyldopa", correct: false },
      { text: "Lisinopril", correct: true },
      { text: "Verapamil", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of captopril?",
    answers: [
      { text: "blocks α-adrenergic receptors", correct: false },
      { text: "blocks β-adrenergic receptors", correct: false },
      { text: "blocks N-cholinergic receptors", correct: false },
      { text: "enhances the formation of NO", correct: false },
      { text: "inhibits angiotensin-converting enzyme", correct: true },
    ],
  },
  {
    question: "Choose an antihypertensive agent that reduces the activity of vasomotor centers.",
    answers: [
      { text: "sodium nitroprusside", correct: false },
      { text: "papaverine", correct: false },
      { text: "octadine", correct: false },
      { text: "benzohexonium", correct: false },
      { text: "clonidine", correct: true },
    ],
  },
  {
    question: "Specify the antihypertensive agent that affects water electrolyte metabolism.",
    answers: [
      { text: "clonidine", correct: false },
      { text: "benzohexonium", correct: false },
      { text: "inderal", correct: false },
      { text: "dichlorothiazide", correct: true },
      { text: "magnesium sulfate", correct: false },
    ],
  },
  {
    question: "Which of the drugs used to treat hypertension causes hypokalemia?",
    answers: [
      { text: "clonidine", correct: false },
      { text: "benzohexonium", correct: false },
      { text: "dichlorothiazide", correct: true },
      { text: "inderal", correct: false },
      { text: "apressin", correct: false },
    ],
  },
  {
    question: "What is the contraindication to the use of ACE inhibitors:",
    answers: [
      { text: "arterial hypertension", correct: false },
      { text: "angina pectoris", correct: false },
      { text: "diabetes mellitus", correct: false },
      { text: "renal artery stenosis", correct: true },
      { text: "Raynaud's disease.", correct: false },
    ],
  },
  {
    question: "A patient with long-standing hypertension is taking aliskiren, amlodipine, and triamterene. What adverse effects might occur with this drug combination?",
    answers: [
      { text: "There is a risk of hypokalemia with this drug combination", correct: false },
      { text: "There is a risk of hyponatremia with this drug combination.", correct: false },
      { text: "There is a risk of hyperkalemia with this drug combination", correct: true },
      { text: "There is a risk of hypernatremia with this drug combination", correct: false },
      { text: "There is a risk of hypernatremia, hypokalemia with this drug combination", correct: false },
    ],
  },
  {
    question: "The typical dose of oral propranolol for the treatment of hypertension is 320 mg/day. The typical dose of IV propranolol to treat a life-threatening arrhythmia is 1 to 3 mg administered slowly. The reason for the discrepancy in these doses is",
    answers: [
      { text: "The IV dose avoids the “first pass” metabolism of oral propranolol.", correct: true },
      { text: "The density of β2 receptors in the heart is greater than the density of β2 receptors on blood vessels.", correct: false },
      { text: "Oral propranolol is excreted by the kidney at a faster rate than IV propranolol.", correct: false },
      { text: "Treatment of hypertension requires a higher dose of propranolol than does treatment of a cardiac arrhythmia.", correct: false },
      { text: "β adrenergic receptors are more sensitive to IV than oral propranolol.", correct: false },
    ],
  },
  {
    question: "Nitric oxide is the active metabolite. This mechanism of action of which drug?",
    answers: [
      { text: "Nitroprusside", correct: true },
      { text: "Losartan", correct: false },
      { text: "Nifedipine", correct: false },
      { text: "Methyldopa", correct: false },
      { text: "Labetalol", correct: false },
    ],
  },
  {
    question: "Blockade of AT1 receptors.This mechanism of action of which drug?",
    answers: [
      { text: "Hydralazine", correct: false },
      { text: "Losartan", correct: true },
      { text: "Furosemide", correct: false },
      { text: "Aliskiren", correct: false },
      { text: "Clonidine", correct: false },
    ],
  },
  {
    question: "A 61-year-old man, suffering from stage 2 hypertension for many years, had minoxidil added recently to his antihypertensive therapy. Which of the following actions best explains the antihypertensive effect of this drug?",
    answers: [
      { text: "Decreased extracellular fluid volume", correct: false },
      { text: "Decreased cardiac output", correct: false },
      { text: "Decreased total peripheral resistance", correct: true },
      { text: "Decreased central adrenergic tone", correct: false },
      { text: "Decreased synthesis of angiotensin II", correct: false },
    ],
  },
  {
    question: "A 63-year-old man, recently diagnosed with stage 1 essential hypertension, started a treatment with hydrochlorothiazide. After several weeks of treatment, the antihypertensive action of the drug was most likely associated with which of the following effects?",
    answers: [
      { text: "Remarkable postural hypotension", correct: false },
      { text: "Decreased peripheral vascular resistance", correct: true },
      { text: "Decreased renal blood flow", correct: false },
      { text: "ecreased cardiac output", correct: false },
      { text: "Increased interstitial fluid volume", correct: false },
    ],
  },
  {
    question: "Competitive inhibition of renin. This mechanism of action of which drug?",
    answers: [
      { text: "Diazoxide", correct: false },
      { text: "Enalapril", correct: false },
      { text: "Aliskiren", correct: true },
      { text: "Clonidine", correct: false },
      { text: "Verapamil", correct: false },
    ],
  },
  {
    question: "Identify the drug. Applied with hypertension. Reduces cardiac output and total peripheral resistance. It has a α-adrenomimetic effect, causes a sedative effect. Possible answ",
    answers: [
      { text: "benzohexonium", correct: false },
      { text: "sodium nitroprusside", correct: false },
      { text: "clonidine", correct: true },
      { text: "inderal", correct: false },
      { text: "prazosin", correct: false },
    ],
  },
  {
    question: "A 58-yer-old female reports that she recently stopped taking her blood pressure drugs because of swelling in her feet that began shortly after she stared treatment. Which is most likely to cause peripheral edema?",
    answers: [
      { text: "Atenolol", correct: false },
      { text: "Clonidine", correct: false },
      { text: "Felodipine", correct: true },
      { text: "Hydralazine", correct: false },
      { text: "Prazosin", correct: false },
    ],
  },
  {
    question: "A patient returns to her health care provider for routine monitoring 3 month after her hypertension regimen was modified. Labs reveal elevated serum potassium. Which is likely responsible for this hyperkalemia?",
    answers: [
      { text: "Chlorthalidone", correct: false },
      { text: "Clonidine", correct: false },
      { text: "Furosemide", correct: false },
      { text: "Losartan", correct: true },
      { text: "Nifedipine", correct: false },
    ],
  },
  {
    question: "A 48-year-old hypertensive patient has been successfully treated with a thiazide diuretic for the last 5 years. Over the last 3 month his diastolic pressure has steadily increased, and he was started on an additional antihypertensive agent. He complains of several instances of being unable to achieve an erection and not being able to complete three sets of tennis as he once did. Which is the likely second antihypertensive medication?",
    answers: [
      { text: "Captopril", correct: false },
      { text: "Losartan", correct: false },
      { text: "Metoprolol", correct: true },
      { text: "Minoxidil", correct: false },
      { text: "Nifedipine", correct: false },
    ],
  },
  {
    question: "A 32-year-old woman has chronic hypertension and a family history of cardiomyopathy. She has no history herself of heart problems and no symptoms of heart failure. Which drug is most appropriate to prevent or slow the development of heart failure in this patient?",
    answers: [
      { text: "Lisinopril", correct: true },
      { text: "Dobutamine", correct: false },
      { text: "Verapamil", correct: false },
      { text: "Digoxin", correct: false },
      { text: "Nifedipine", correct: false },
    ],
  },
  {
    question: "A 52-year-old man complained to his physician of acute pain at the base of his right big toe. The man, who had been working as a painter for 15 years, was recently diagnosed with essential hypertension and started an antihypertensive therapy one month ago. A lab test showed a plasma uric acid level of 17 mg/dL. Which of the following drugs might have caused the symptoms and signs of this patient?",
    answers: [
      { text: "Captopril", correct: false },
      { text: "Hydrochlorothiazide", correct: true },
      { text: "Methyldopa", correct: false },
      { text: "Furosemide", correct: false },
      { text: "Prazosin", correct: false },
    ],
  },
  {
    question: "A 65 year-old woman was found to have a blood pressure of 165/90 during a routine visit. Past history of the patient was significant for a second-degree heart block and for osteoporosis. One year ago she had suffered from a severe episode of angioedema. Which of the following antihypertensive drugs would be most appropriate for this patient?",
    answers: [
      { text: "Captopril", correct: false },
      { text: "Verapamil", correct: false },
      { text: "Minoxidil", correct: false },
      { text: "Hydrochlorothiazide", correct: true },
      { text: "Propranolol", correct: false },
    ],
  },
  {
    question: "A 35-year-old woman in her 29th week of gestation was found to have a positive direct Coombs' test during a routine prenatal visit. Two months after she became pregnant, she was diagnosed with stage 1 hypertension and started an antihypertensive therapy. Which of the following drugs was she most likely taking?",
    answers: [
      { text: "Nifedipine", correct: false },
      { text: "Methyldopa", correct: true },
      { text: "Propranolol", correct: false },
      { text: "Losartan", correct: false },
      { text: "Captopril", correct: false },
    ],
  },
  {
    question: "A 60-year-old man reported to his physician that he felt very dizzy and fainted upon standing up rapidly, after. The man, recently diagnosed with stage 1 essential hypertension and prostatic hyperplasia, started a drug treatment one week previously.    Which of the following drugs most likely caused this adverse effect?",
    answers: [
      { text: "Prazosin", correct: true },
      { text: "Fenoldopam", correct: false },
      { text: "Methyldopa", correct: false },
      { text: "Hydralazine", correct: false },
      { text: "Propranolol", correct: false },
    ],
  },
  {
    question: "A 38-year-old man was diagnosed with hypertension (156/95 mm Hg) during a routine visit. Subsequent exams indicated he was affected by hypertrophic cardiomyopathy. Which of the following antihypertensive drugs would be most appropriate for this patient?",
    answers: [
      { text: "Minoxidil", correct: false },
      { text: "Clonidine", correct: false },
      { text: "Propranolol", correct: true },
      { text: "Hydralazine", correct: false },
      { text: "Prazosin", correct: false },
    ],
  },
  {
    question: "Determine the remedy. Used for hypertension. Reduces cardiac output and total peripheral resistance. It has an α-adrenomimetic effect and causes a sedative effect.",
    answers: [
      { text: "benzohexonium", correct: false },
      { text: "sodium nitroprusside", correct: true },
      { text: "clonidine", correct: false },
      { text: "anaprilin", correct: false },
      { text: "prazosin", correct: false },
    ],
  },
  {
    question: "Identify the remedy. Causes diuretic and hypotensive. Effect. It makes it difficult for the kidneys to reabsorb sodium and water ions. Increases excretion of potassium ions. It acts quickly, clearly and for a short time.",
    answers: [
      { text: "spironolactone", correct: false },
      { text: "triamterene", correct: false },
      { text: "dichlorothiazide", correct: false },
      { text: "furosemide", correct: true },
      { text: "oxodoline", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is classified as antihypertensive?",
    answers: [
      { text: "Mezaton", correct: false },
      { text: "naphthyzin", correct: true },
      { text: "clonidine", correct: false },
      { text: "cordiamine", correct: false },
      { text: "strophanthin", correct: false },
    ],
  },
  {
    question: "Which antihypertensive drug belongs to the group of β-blockers?",
    answers: [
      { text: "clonidine", correct: false },
      { text: "benzohexonium", correct: false },
      { text: "octadine", correct: false },
      { text: "anaprilin", correct: true },
      { text: "prazosin.", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of captopril?",
    answers: [
      { text: "blocks α-adrenergic receptors", correct: false },
      { text: "blocks β-adrenergic receptors", correct: false },
      { text: "blocks H-cholinergic receptors", correct: false },
      { text: "enhances the formation of NO", correct: false },
      { text: "inhibits angiotensin converting enzyme", correct: true },
    ],
  },
  {
    question: "List the antihypertensive drug—angiotensin-converting enzyme inhibitor.",
    answers: [
      { text: "captopril", correct: true },
      { text: "anaprilin", correct: false },
      { text: "dichlorothiazide", correct: false },
      { text: "appressin", correct: false },
      { text: "benzohexonium.", correct: false },
    ],
  },
  {
    question: "Which of the medicines used for treatment hypertension, causes hypokalemia?",
    answers: [
      { text: "clonidine", correct: false },
      { text: "benzohexonium", correct: false },
      { text: "dichlorothiazide", correct: true },
      { text: "anaprilin", correct: false },
      { text: "appressin", correct: false },
    ],
  },
  {
    question: "Specify a drug from the group of ACE inhibitors?",
    answers: [
      { text: "atenolol", correct: false },
      { text: "enalapril", correct: true },
      { text: "nifedipine", correct: false },
      { text: "clonidine", correct: false },
      { text: "phenamine", correct: false },
    ],
  },
  {
    question: "Chlorothiazide is a weekly acidic drug with a pka of 6.5. If administered orally, at which of the following sites of absorption will the drug be able to readily pass through the membrane?",
    answers: [
      { text: "Mouth (ph approximately 7.0)", correct: false },
      { text: "Stomach (ph of 2.5)", correct: true },
      { text: "Duodenum (ph approximately 6.1)", correct: false },
      { text: "Jejunum (ph approximately 8.0)", correct: false },
      { text: "Ileum (ph approximately 7.0)", correct: false },
    ],
  },
  {
    question: "Furosemide acts at the nephron site:",
    answers: [
      { text: "Proximal convoluted tubule", correct: false },
      { text: "Ascending thick limb of the loop of Henle", correct: true },
      { text: "Distal convoluted tubule", correct: false },
      { text: "Collecting duct", correct: false },
      { text: "Bowman’s capsule", correct: false },
    ],
  },
  {
    question: "The drug acts at the proximal tubule:",
    answers: [
      { text: "Loop diuretics", correct: false },
      { text: "Thiazide diuretics", correct: false },
      { text: "Potassium-sparing diuretics", correct: false },
      { text: "Carbonic anhydrase inhibitors", correct: true },
      { text: "Furosemide", correct: false },
    ],
  },
  {
    question: "Which of the following should be avoided in a patient with a history of severe anaphylactic reaction to sulfa medications?",
    answers: [
      { text: "Amiloride", correct: false },
      { text: "Hydrochlorothiazide", correct: true },
      { text: "Mannitol", correct: false },
      { text: "Spironolactone", correct: false },
      { text: "Triamterene", correct: false },
    ],
  },
  {
    question: "An elderly patient with a history of heart disease is brought to the emergency room with difficulty breathing. Examination reveals that she has pulmonary edema. Which treatment is indicated?",
    answers: [
      { text: "Acetazolamide", correct: false },
      { text: "Chlorthalidone", correct: false },
      { text: "Furosemide", correct: true },
      { text: "Hydrochlorothiazide", correct: false },
      { text: "Spironolactone", correct: false },
    ],
  },
  {
    question: "A 55-year-old male with kidney stones has been placed on a diuretic to decrease calcium excretion. However, after a few weeks, he develops an attack of gout. Which diuretic was he taking?",
    answers: [
      { text: "Furosemide", correct: false },
      { text: "Hydrochlorothiazide", correct: true },
      { text: "Spironolactone", correct: false },
      { text: "Triamterene", correct: false },
      { text: "Urea", correct: false },
    ],
  },
  {
    question: "Which of the following patients is most suited for primary therapy with hydrochlorothiazide?",
    answers: [
      { text: "Patients with gout", correct: false },
      { text: "Patients with hyperlipidemia", correct: false },
      { text: "Young hypertensive patients with rapid resting heart rates", correct: false },
      { text: "Black patients and elderly patients", correct: true },
      { text: "Patients with impaired renal function", correct: false },
    ],
  },
  {
    question: "Which of the following drug uses to acute pulmonary edema?",
    answers: [
      { text: "Acetazolamide", correct: false },
      { text: "Amiloride", correct: false },
      { text: "Chlorothiazide", correct: false },
      { text: "Furosemide", correct: true },
      { text: "Spironolactone", correct: false },
    ],
  },
  {
    question: "Which of the following drug uses to acute hypercalcemia?",
    answers: [
      { text: "Acetazolamide", correct: false },
      { text: "Amiloride", correct: false },
      { text: "Chlorothiazide", correct: false },
      { text: "Furosemide", correct: true },
      { text: "Spironolactone", correct: false },
    ],
  },
  {
    question: "Which of the following drug uses to treat essential hypertension?",
    answers: [
      { text: "Acetazolamide", correct: false },
      { text: "Amiloride", correct: false },
      { text: "Chlorothiazide", correct: true },
      { text: "Furosemide", correct: false },
      { text: "Spironolactone", correct: false },
    ],
  },
  {
    question: "Which of the following drug uses to treat Glaucoma?",
    answers: [
      { text: "Acetazolamide", correct: true },
      { text: "Amiloride", correct: false },
      { text: "Chlorothiazide", correct: false },
      { text: "Furosemide", correct: false },
      { text: "Spironolactone", correct: false },
    ],
  },
  {
    question: "Which of the following drug inhibits Na/K/2Cl cotransporter?",
    answers: [
      { text: "Amiloride", correct: false },
      { text: "Acetazolamide", correct: false },
      { text: "Chlorothiazide", correct: false },
      { text: "Ethacrynic acid", correct: true },
      { text: "Spironolactone", correct: false },
    ],
  },
  {
    question: "Which of the following drug inhibits  carbonic anhydrase ?",
    answers: [
      { text: "Amiloride", correct: false },
      { text: "Acetazolamide", correct: true },
      { text: "Chlorothiazide", correct: false },
      { text: "Ethacrynic acid", correct: false },
      { text: "Spironolactone", correct: false },
    ],
  },
  {
    question: "Which of the following drug acts on aldosterone receptors?",
    answers: [
      { text: "Amiloride", correct: false },
      { text: "Acetazolamide", correct: false },
      { text: "Chlorothiazide", correct: false },
      { text: "Ethacrynic acid", correct: false },
      { text: "Spironolactone", correct: true },
    ],
  },
  {
    question: "Which of the following drug inhibits Na/Cl cotransporter?",
    answers: [
      { text: "Amiloride", correct: false },
      { text: "Acetazolamide", correct: false },
      { text: "Chlorothiazide", correct: true },
      { text: "Ethacrynic acid", correct: false },
      { text: "Spironolactone", correct: false },
    ],
  },
  {
    question: "Chlorothiazide can produce which one of the following actions?",
    answers: [
      { text: "Hyperkalemia", correct: false },
      { text: "Hyperuricemia", correct: true },
      { text: "Increase in blood pressure", correct: false },
      { text: "Hypoglycemia in diabetic patients", correct: false },
      { text: "Hypercalcemia", correct: false },
    ],
  },
  {
    question: "Which of the following drug may cause ototoxicity?",
    answers: [
      { text: "Ethacrynic acid", correct: false },
      { text: "Chlorthalidone", correct: false },
      { text: "Acetazolamide", correct: false },
      { text: "Furosemide", correct: true },
      { text: "Spironolactone", correct: false },
    ],
  },
  {
    question: "Which of the following drug may cause hyperuricemia?",
    answers: [
      { text: "Ethacrynic acid", correct: false },
      { text: "Chlorthalidone", correct: false },
      { text: "Acetazolamide", correct: false },
      { text: "Furosemide", correct: true },
      { text: "Spironolactone", correct: false },
    ],
  },
  {
    question: "Which of the following drug may cause gynecomastia in males?",
    answers: [
      { text: "Ethacrynic acid", correct: false },
      { text: "Chlorthalidone", correct: false },
      { text: "Acetazolamide", correct: false },
      { text: "Furosemide", correct: false },
      { text: "Spironolactone", correct: true },
    ],
  },
  {
    question: "Which of the following drug may cause metabolic acidosis?",
    answers: [
      { text: "Ethacrynic acid", correct: false },
      { text: "Chlorthalidone", correct: false },
      { text: "Acetazolamide", correct: true },
      { text: "Furosemide", correct: false },
      { text: "Spironolactone", correct: false },
    ],
  },
  {
    question: "Identify the drug. It causes diuretica and hypotensive effect. It makes it difficult to reabsorb sodium ions and water in the kidneys. Increases the excretion of potassium ions. It acts quickly, pronouncedly and for a short time.",
    answers: [
      { text: "spironolactone", correct: false },
      { text: "triamterene", correct: false },
      { text: "dichlorothiazide", correct: false },
      { text: "furosemide", correct: true },
      { text: "oxodolin", correct: false },
    ],
  },
  {
    question: "What diuretic is used for forced diuresis in acute drug poisoning?",
    answers: [
      { text: "diacarb", correct: false },
      { text: "dichlorothiazide", correct: false },
      { text: "furosemide", correct: true },
      { text: "spironolactone", correct: false },
      { text: "triamterene", correct: false },
    ],
  },
  {
    question: "A 55-year-old woman with hypertension is to be treated with a thiazide diuretic. Thiazide A in a dose of 5 mg produces the same decrease in blood pressure as 500 mg of thiazide B. Which of the following statements best describes these results?",
    answers: [
      { text: "Thiazide A is about 100 times more potent than thiazide B", correct: true },
      { text: "Thiazide A is more efficacious than thiazide B", correct: false },
      { text: "Toxicity of thiazide A is less than that of thiazide B", correct: false },
      { text: "Thiazide A has a longer half-life than thiazide B", correct: false },
      { text: "Thiazide A has a wider therapeutic window than thiazide B", correct: false },
    ],
  },
  {
    question: "Which drug is used for pulmonary edema and edemas of the heart, kidney, and liver?",
    answers: [
      { text: "Hydrochlorothiazide", correct: false },
      { text: "Furosemide", correct: false },
      { text: "Triamterene", correct: false },
      { text: "Spironolactone", correct: true },
      { text: "Amiloride", correct: false },
    ],
  },
  {
    question: "Which drug directly blocks the sodium channel through which sodium ca normally be reabsorbed from the tubular fluid in the cortical collecting duct?",
    answers: [
      { text: "Spironolactone", correct: false },
      { text: "Furosemide", correct: false },
      { text: "Amiloride", correct: true },
      { text: "Hydrochlorothiazide", correct: false },
      { text: "Mannitol", correct: false },
    ],
  },
  {
    question: "Which drug can cause ototoxicity, hyperglycemia, hyperuricemia, and also affects cholesterol in the body?",
    answers: [
      { text: "Hydrochlorothiazide", correct: false },
      { text: "Furosemide", correct: true },
      { text: "Spironolactone", correct: false },
      { text: "Amiloride", correct: false },
      { text: "Torasemide", correct: false },
    ],
  },
  {
    question: "Which drug causes an increase in plasma glucose, increase in urate levels, and lipid levels?",
    answers: [
      { text: "Mannitol", correct: false },
      { text: "Hydrochlorothiazide", correct: true },
      { text: "Spironolactone", correct: false },
      { text: "Furosemide", correct: false },
      { text: "Amiloride", correct: false },
    ],
  },
  {
    question: "The net effect of what type of drug is to pull water out of the body in excess of electrolytes?",
    answers: [
      { text: "Thiazide diuretics", correct: false },
      { text: "Potassium sparing diuretics", correct: false },
      { text: "Loop diuretics", correct: false },
      { text: "Osmotic diuretics", correct: true },
      { text: "Carbonic anhydrase inhibitors", correct: false },
    ],
  },
  {
    question: "Which drug can be used to treat a child who has overdosed on aspirin?",
    answers: [
      { text: "Thiazide diuretic", correct: false },
      { text: "Osmotic diuretic", correct: false },
      { text: "Carbonic anhydrase", correct: true },
      { text: "Vaptan", correct: false },
      { text: "Potassium sparing diuretics", correct: false },
    ],
  },
  {
    question: "Which of the following is paradoxically used to treat diabetes insipidus?",
    answers: [
      { text: "Hydrochlorothiazide", correct: true },
      { text: "Spironolactone", correct: false },
      { text: "Mannitol", correct: false },
      { text: "Furosemide", correct: false },
      { text: "Vaptan", correct: false },
    ],
  },
  {
    question: "A 30 y.o. old male suffering from cerebral edema will be best treated with:",
    answers: [
      { text: "Furosemide", correct: false },
      { text: "Amiloride", correct: false },
      { text: "Ethacrynic acid", correct: false },
      { text: "Mannitol", correct: true },
      { text: "Acetazolamide", correct: false },
    ],
  },
  {
    question: "What diuretic is used for forced diuresis in acute drug poisoning?",
    answers: [
      { text: "diacarb", correct: false },
      { text: "dichlorotiazide", correct: true },
      { text: "furosemide", correct: false },
      { text: "spironolactone", correct: false },
      { text: "triamterene", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of dichlorothiazide?",
    answers: [
      { text: "inhibits carbonic anhydrase", correct: false },
      { text: "blocks aldosterone receptors", correct: false },
      { text: "blocks vasopressin receptors", correct: false },
      { text: "inhibits Na+ reabsorption and Cl- in the distal and proximal parts of tubules", correct: true },
      { text: "enhances filtration in the renal glomeruli", correct: false },
    ],
  },
  {
    question: "What is the main effect of furosemide?",
    answers: [
      { text: "increased vascular tone", correct: false },
      { text: "increased uterine tone", correct: true },
      { text: "increased diuresis", correct: false },
      { text: "increased blood pressure", correct: false },
      { text: "increased intraocular pressure.", correct: false },
    ],
  },
  {
    question: "Mechanism of action of furosemide is:",
    answers: [
      { text: "Inhibits carbonic anhydrase", correct: false },
      { text: "Inhibits Na-K-2Cl transporter", correct: true },
      { text: "Osmotic diuretic", correct: false },
      { text: "Aldosterone antagonist", correct: false },
      { text: "Inhibits Na-Cl transporter", correct: false },
    ],
  },
  {
    question: "Mechanism  of action of methazolamide is:",
    answers: [
      { text: "Inhibits carbonic anhydrase", correct: true },
      { text: "Inhibits Na-K-2Cl transporter", correct: false },
      { text: "Osmotic diuretic", correct: false },
      { text: "Aldosterone antagonist", correct: false },
      { text: "Inhibits Na-Cl transporter", correct: false },
    ],
  },
  {
    question: "Antibiotics that kill bacteria are:",
    answers: [
      { text: "Bacteriological", correct: false },
      { text: "Bacteriovariable", correct: false },
      { text: "Bacteriostatic", correct: false },
      { text: "Bactericidal", correct: true },
      { text: "Bacteriolostatic", correct: false },
    ],
  },
  {
    question: "Bacteriostats are antibiotics that _____",
    answers: [
      { text: "kill viruses", correct: false },
      { text: "inhibit the growth of fungi", correct: false },
      { text: "kill bacteria", correct: false },
      { text: "inhibit the growth of bacteria", correct: true },
      { text: "kill fungi", correct: false },
    ],
  },
  {
    question: "Which of the following agents is considered a narrow-spectrum antibiotic?",
    answers: [
      { text: "Ceftriaxone", correct: false },
      { text: "Ciprofloxacin", correct: false },
      { text: "Isoniazid", correct: true },
      { text: "Imipenem", correct: false },
      { text: "penicillin", correct: false },
    ],
  },
  {
    question: "Which of the following antibiotic combinations is inappropriate based on antagonism at the same site of action?",
    answers: [
      { text: "Clindamycin and erythromycin", correct: true },
      { text: "Doxycycline and amoxicillin", correct: false },
      { text: "Tigecycline and azithromycin", correct: false },
      { text: "Ciprofloxacin and amoxicillin", correct: false },
      { text: "Amoxicillin and ampicillin", correct: false },
    ],
  },
  {
    question: "Which one of the following patients is least likely to require antimicrobial treatment tailored to the individuals conditions?",
    answers: [
      { text: "Patient undergoing cancer chemotherapy", correct: false },
      { text: "Patient with kidney disease", correct: false },
      { text: "Elderly patient", correct: false },
      { text: "Patient with hypertension", correct: true },
      { text: "Patient with liver disease", correct: false },
    ],
  },
  {
    question: "A 43-year-old man is neutropenic and has developed a fever. After obtaining the appropriate cultures, you decide to start him on a broad-spectrum antibacterial and antifungal therapy. Your decision fits which of the following goals of antimicrobial therapy?",
    answers: [
      { text: "Prophylaxis", correct: false },
      { text: "Empirical", correct: true },
      { text: "Definitive", correct: false },
      { text: "Post-treatment suppression", correct: false },
      { text: "Preemptive", correct: false },
    ],
  },
  {
    question: "A 33-year-old woman with a brain infection (meningitis) is administered her antibiotic directly into the cerebrospinal fluid because the",
    answers: [
      { text: "Bacteria are mostly located in the cerebrospinal fluid.", correct: false },
      { text: "Antibiotic binds to brain cells and is not available to the bacteria", correct: false },
      { text: "Antibiotic is activated by the cerebrospinal fluid.", correct: false },
      { text: "Bacteria causing the brain infection are not sensitive to the antibiotic.", correct: false },
      { text: "Blood brain barrier excludes the antibiotic if it is administered systemically.", correct: true },
    ],
  },
  {
    question: "Bacterial resistance to β-lactam antibiotics (eg, penicillin) is usually due to the bacterial production of β-lactamase. This results in",
    answers: [
      { text: "Development of an alternative mechanism of bacterial survival in the presence of antibiotic", correct: false },
      { text: "Decreased entry of the antibiotic into the bacteria", correct: false },
      { text: "Destruction of the antibiotic", correct: true },
      { text: "Reduced affinity to a bacterial protein", correct: false },
      { text: "Enhanced efflux o the antibiotic from the bacteria", correct: false },
    ],
  },
  {
    question: "Antibiotics that inhibit grows bacteria are:",
    answers: [
      { text: "Bacteriological", correct: false },
      { text: "Bacteriovariable", correct: false },
      { text: "Bacteriostatic", correct: true },
      { text: "Bactericidal", correct: false },
      { text: "Bacteriolostatic", correct: false },
    ],
  },
  {
    question: "Which drug inhibit DNA gyrase?",
    answers: [
      { text: "Ciprofloxacin", correct: true },
      { text: "Tetracyclines", correct: false },
      { text: "Chloramphenicol", correct: false },
      { text: "Clindamycin", correct: false },
      { text: "Cotrimaxosole", correct: false },
    ],
  },
  {
    question: "which drugs inhibits cell wall synthesis?",
    answers: [
      { text: "Macrolides", correct: false },
      { text: "Vancomycine", correct: true },
      { text: "Chloramphenicol", correct: false },
      { text: "Cotrimaxosole", correct: false },
      { text: "Tetracycline", correct: false },
    ],
  },
  {
    question: "Which is broad spectrum antibiotics?",
    answers: [
      { text: "Mebendazole", correct: true },
      { text: "Pyrantel", correct: false },
      { text: "Niclosamide", correct: false },
      { text: "Chloramphenicol", correct: false },
      { text: "Streptomycin", correct: false },
    ],
  },
  {
    question: "Ototoxicity and nephrotoxicity is caused by:",
    answers: [
      { text: "Antibiotic", correct: true },
      { text: "Antiemetic", correct: false },
      { text: "Antifungal", correct: false },
      { text: "Antiviral", correct: false },
      { text: "Antidiarrheal", correct: false },
    ],
  },
  {
    question: "Which of the following is primarily a bactericidal drug?",
    answers: [
      { text: "Chloramphenicol", correct: false },
      { text: "Gentamicin", correct: true },
      { text: "Sulphadiazine", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which drug causes photosensitivity?",
    answers: [
      { text: "Tetracycline", correct: true },
      { text: "Aminoglycoside", correct: false },
      { text: "Penicillin", correct: false },
      { text: "Cephalosporin", correct: false },
      { text: "Carbapenems", correct: false },
    ],
  },
  {
    question: "The oropharyngeal and oesophageal candidiasis following long-term therapy with a broad spectrum antibiotic can be best treated with:",
    answers: [
      { text: "Sulfonates", correct: false },
      { text: "Griseofulvin", correct: false },
      { text: "Fluconazole", correct: true },
      { text: "Amphotericin", correct: false },
      { text: "Antacids", correct: false },
    ],
  },
  {
    question: "Antibiotic that interferes with DNA function is:",
    answers: [
      { text: "Tetracycline", correct: false },
      { text: "Nystatin", correct: false },
      { text: "Sulphonamides", correct: false },
      { text: "Metronidazole", correct: true },
      { text: "Macrolides", correct: false },
    ],
  },
  {
    question: "The mechanism of action of chloramphenicol is inhibition of synthesis of:",
    answers: [
      { text: "Cell wall", correct: false },
      { text: "Cell membrane", correct: false },
      { text: "Protein", correct: true },
      { text: "DNA", correct: false },
      { text: "RNA", correct: false },
    ],
  },
  {
    question: "Choose a side effect specific to the beta-lactam group of antibiotics:",
    answers: [
      { text: "Dysbacteriosis", correct: false },
      { text: "Allergic reactions", correct: true },
      { text: "Hearing loss and vestibular disorders", correct: false },
      { text: "Neuropsychiatric disorders", correct: false },
      { text: "Severe kidney damage", correct: false },
    ],
  },
  {
    question: "The development of allergic reactions is most often caused by antibiotics from the groups:",
    answers: [
      { text: "Macrolides", correct: false },
      { text: "Penicillin", correct: true },
      { text: "Cephalosporins", correct: false },
      { text: "Chloramphenicol", correct: false },
      { text: "Aminoglycoside", correct: false },
    ],
  },
  {
    question: "Which of the following antibiotics is considered safe in pregnancy?",
    answers: [
      { text: "Doxycycline", correct: false },
      { text: "Levofloxacin", correct: false },
      { text: "Gentamicin", correct: false },
      { text: "Amoxicillin", correct: true },
      { text: "Tetracycline", correct: false },
    ],
  },
  {
    question: "One of the most challenging types of infections to treat are those produced by gram-negative enteric bacteria that produce Extended-Spectrum Beta-Lactamases (ESBLs). Which type of beta-lactam drug (circa 2015) is structurally different enough to other beta-lactams to remain effective in treating most infections caused by this type of bacteria?",
    answers: [
      { text: "Carbapenems", correct: true },
      { text: "extended-spectrum pencillins", correct: false },
      { text: "fourth generation cephalosporins", correct: false },
      { text: "Monobactams", correct: false },
      { text: "narrow spectrum penicillins", correct: false },
    ],
  },
  {
    question: "Three months later the same patient is diagnosed with a new S. aureus infection that is resistant to oxacillin (MRSA or ORSA). Which of the following would be a drug of choice for this infection?",
    answers: [
      { text: "1st Generation Cephalosporin", correct: false },
      { text: "Ampicillin", correct: false },
      { text: "Nafacillin", correct: false },
      { text: "Methicillin", correct: false },
      { text: "Vancomycin", correct: true },
    ],
  },
  {
    question: "What is the mechanism of action of amoxicillin?",
    answers: [
      { text: "Interference with the 50S subunit of bacterial ribosomes", correct: false },
      { text: "Suppression of folate synthesis", correct: false },
      { text: "Interference with the 30S subunit of bacterial ribosomes", correct: false },
      { text: "Inhibition of bacterial cell wall synthesis", correct: true },
      { text: "Inhibiting of bacterial topoisomerase II", correct: false },
    ],
  },
  {
    question: "Before administering intravenous (IV) penicillin, the nurse should do what?",
    answers: [
      { text: "Flush the IV site with normal saline", correct: false },
      { text: "Assess the patient for allergies.", correct: true },
      { text: "Review the patient's intake and output record.", correct: false },
      { text: "Determine the latest creatinine clearance result.", correct: false },
      { text: "avoid sun lights", correct: false },
    ],
  },
  {
    question: "A nurse should teach a patient to observe for which side effects when taking ampicillin?",
    answers: [
      { text: "Skin rash and loose stools", correct: true },
      { text: "Reddened tongue and gums", correct: false },
      { text: "Digit numbness and tingling", correct: false },
      { text: "Bruising and petechiae", correct: false },
      { text: "discoloration of skin", correct: false },
    ],
  },
  {
    question: "Penicillin us used to treat what type of microbe?",
    answers: [
      { text: "Fungal infections", correct: false },
      { text: "Gram negative bacteria only", correct: false },
      { text: "Gram positive and Gram negative", correct: true },
      { text: "Gram positive bacteria only", correct: false },
      { text: "Against Virus", correct: false },
    ],
  },
  {
    question: "Alexander Fleming is credited with the discovery of which of the following antimicrobial agents.",
    answers: [
      { text: "Ciprofloxacin", correct: false },
      { text: "Penicillin", correct: true },
      { text: "Cephalosporin", correct: false },
      { text: "Erythromycin", correct: false },
      { text: "Doxycycline", correct: false },
    ],
  },
  {
    question: "Penicillin us used to treat what type of microbe?",
    answers: [
      { text: "Fungal infections", correct: false },
      { text: "Gram negative bacteria only", correct: false },
      { text: "Gram positive and Gram negative", correct: false },
      { text: "Gram positive bacteria only", correct: true },
      { text: "virus", correct: false },
    ],
  },
  {
    question: "Which of the following antibiotics exhibits concentration-dependent killing?",
    answers: [
      { text: "Clindamycin", correct: false },
      { text: "Linezolid", correct: false },
      { text: "Vancomycin", correct: true },
      { text: "Daptomycin", correct: false },
      { text: "erythromycin", correct: false },
    ],
  },
  {
    question: "Which of the following antibiotics is considered safe in pregnancy?",
    answers: [
      { text: "Doxycycline", correct: false },
      { text: "Levofloxacin", correct: false },
      { text: "Gentamicin", correct: false },
      { text: "Amoxicillin", correct: true },
      { text: "Primaquine", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of amoxicillin?",
    answers: [
      { text: "Suppression of folate synthesis", correct: false },
      { text: "Interference with the 50S subunit of bacterial ribosomes", correct: false },
      { text: "Interference with the 30S subunit of bacterial ribosomes", correct: false },
      { text: "Inhibition of bacterial cell wall synthesis", correct: true },
      { text: "inhibition of bacterial topoisomerase II", correct: false },
    ],
  },
  {
    question: "Which of the following is the primary method of B-lactam resistance with Streptococcus pneumoniae?",
    answers: [
      { text: "Modification of target site", correct: true },
      { text: "Decreased drug levels due to changes in permeability", correct: false },
      { text: "Decreased drug levels due to an efflux pump", correct: false },
      { text: "Enzymatic inactivation", correct: false },
      { text: "Decreased drug levels due to inhibitory concentration of the drug", correct: false },
    ],
  },
  {
    question: "Which of the following cephalosporins has activity against gram-negative anaerobic pathogens like Bacteroides fragilis?",
    answers: [
      { text: "Cefoxitin", correct: true },
      { text: "Cefepime", correct: false },
      { text: "Ceftriaxone", correct: false },
      { text: "Cefazolin", correct: false },
      { text: "Chloramphenicol", correct: false },
    ],
  },
  {
    question: "Which is an anti-pseudomonal antibiotic?",
    answers: [
      { text: "Ciprofloxacin", correct: true },
      { text: "Vancomycin", correct: false },
      { text: "Cefaclor", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Oxytetracycline", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs is both penicillinase-resistant and effective by oral administration?",
    answers: [
      { text: "Methicillin", correct: false },
      { text: "Carbenicillin", correct: false },
      { text: "Penicillin V", correct: false },
      { text: "Amoxicillin+clavulanic acid", correct: true },
      { text: "Piperacillin", correct: false },
    ],
  },
  {
    question: "Specify a group of antibiotics that has a β-lactam ring in its structure:",
    answers: [
      { text: "cephalosporins", correct: true },
      { text: "tetracyclines", correct: false },
      { text: "lincosamides", correct: false },
      { text: "macrolides", correct: false },
      { text: "aminoglycosides", correct: false },
    ],
  },
  {
    question: "A 23-year-old man being treated for a S. aureus infection fails to respond to penicillin G. Culture results indicate that the bacterial strain is sensitive to oxacillin (MSSA or OSSA). What is the most likely cause for the bacterial resistance to penicillin G?",
    answers: [
      { text: "Lack of peptidoglycan in cell wall", correct: false },
      { text: "Production of penicillinase (a subtype of beta lactimase)", correct: true },
      { text: "Production of extended spectrum beta lactamases (ESBLs)", correct: false },
      { text: "Production of penicillin-insensitive PBP2 (expressed by the mecA gene)", correct: false },
      { text: "Upregulation of P-glycoprotein pumps", correct: false },
    ],
  },
  {
    question: "Susan H arrives at the emergency department with complaints of high fever, malaise, painful urination and severe flank pain. Lab tests indicate the presence of white blood cells and E.coli in her urine. A diagnosis of kidney infection (pyelonephritis) is made, and the decision is made to use a beta-lactam antibiotic that has both an appropriate antibacterial spectrum of activity, and good tissue penetration, yet is more resistant to beta-lactamases than narrow spectrum penicillins. The drug that best fits these characteristics is:",
    answers: [
      { text: "ceftriaxone", correct: true },
      { text: "daptomycin", correct: false },
      { text: "fosfomycin", correct: false },
      { text: "nitrofurantoin", correct: false },
      { text: "vancomycin", correct: false },
    ],
  },
  {
    question: "Will, a 14 year-old boy develops a bad case of otitis media a few days after swimming in Hideaway Lake, MS. Will's previous medical history is unremarkable except for having had a minor skin rash two years ago after being treated with amoxicillin for a sore throat. Which of the following shares a common mechanism, but would be very unlikely to produce a similar allergic reaction (e.g. ~1-2% or lower chance)?",
    answers: [
      { text: "ampicillin", correct: false },
      { text: "cefaclor", correct: true },
      { text: "clarithromycin", correct: false },
      { text: "clindamycin", correct: false },
      { text: "gentamycin", correct: false },
    ],
  },
  {
    question: "A 47 year old patient with a severe bacterial infection is given a drug by i.v. infusion. Because the drug is administered too rapidly, the patient develops hypotension, as well as marked flushing & itching over the upper portion of his chest, neck and face. The antibiotic most likely responsible for producing this reaction is:",
    answers: [
      { text: "Amoxicillin", correct: false },
      { text: "Aztreonam", correct: false },
      { text: "Daptomycin", correct: false },
      { text: "Linezolid", correct: false },
      { text: "vancomycin", correct: true },
    ],
  },
  {
    question: "Amy, a 35 year old woman develops a gram-negative soft tissue infection below the waist. Which of the following antibiotic classes, based upon basic antibiotic principles alone, would be \"most likely\" ineffective, and therefore contraindicated for empiric treatment of this type of infection?",
    answers: [
      { text: "Aminoglycosides", correct: false },
      { text: "Carbapenems", correct: false },
      { text: "Beta lactam + beta-lactamase inhibitors", correct: false },
      { text: "Fluoroquinolones", correct: false },
      { text: "Glycopeptides (e.g. vancomycin)", correct: true },
    ],
  },
  {
    question: "A 21-year-old man attends a local health clinic after developing open sores in his genital area, and is diagnosed with having a Gram negative bacterial infection caused by Treponema pallidum infection (Syphilis). Which of the following is a drug of choice for this condition?",
    answers: [
      { text: "Azithromycin", correct: false },
      { text: "Benzathine penicillin", correct: true },
      { text: "Daptomycin", correct: false },
      { text: "Linezolid", correct: false },
      { text: "Vancomycin", correct: false },
    ],
  },
  {
    question: "A 23-year-old man being treated for a S. aureus infection fails to respond to penicillin G. Culture results indicate that the bacterial strain is sensitive to oxacillin (MSSA or OSSA). What is the most likely cause for the bacterial resistance to penicillin G?",
    answers: [
      { text: "Lack of peptidoglycan in cell wall", correct: false },
      { text: "Production of penicillinase (a subtype of beta lactimase)", correct: true },
      { text: "Production of extended spectrum beta lactamases (ESBLs)", correct: false },
      { text: "Production of penicillin-insensitive PBP2 (expressed by the mecA gene)", correct: false },
      { text: "Upregulation of P-glycoprotein pumps", correct: false },
    ],
  },
  {
    question: "Three months later the same patient is diagnosed with a new S. aureus infection that is resistant to oxacillin (MRSA or ORSA). Which of the following would be a drug of choice for this infection?",
    answers: [
      { text: "1st Generation Cephalosporin", correct: false },
      { text: "Ampicillin", correct: false },
      { text: "Nafacillin", correct: false },
      { text: "Methicillin", correct: false },
      { text: "Vancomycin", correct: true },
    ],
  },
  {
    question: "A 10-year-old boy develops otitis externa (swimmers ear) after swimming in a local pool. Initial treatment with amoxicillin failed to reduce the patient’s symptoms. Culture results from an ear swab reveal the infection is caused by the Gram negative bacterium Pseudomonas aeruginosa. Which of the following would be the best option for treatment?",
    answers: [
      { text: "Ampicillin", correct: false },
      { text: "Cephalexin", correct: false },
      { text: "Piperacillin + Tazobactam", correct: true },
      { text: "Rifampin", correct: false },
      { text: "Vancomycin", correct: false },
    ],
  },
  {
    question: "A patient is receiving penicillin G [Bicillin C-R]. Which assessment should the nurse monitor as an indicator of an undesired effect?",
    answers: [
      { text: "Cardiac rhythm", correct: true },
      { text: "Serum sodium level", correct: false },
      { text: "Lung sounds", correct: false },
      { text: "Red blood cell (RBC) count", correct: false },
      { text: "creatinine", correct: false },
    ],
  },
  {
    question: "Before administering a cephalosporin to a patient, it is most important for the nurse to assess the patient for an allergy history to what?",
    answers: [
      { text: "Soy products", correct: false },
      { text: "Peanuts", correct: false },
      { text: "Penicillins", correct: true },
      { text: "Opioids", correct: false },
      { text: "macrolides", correct: false },
    ],
  },
  {
    question: "A 25-year-old male presents to the urgent care center with a painless sore on his genitals that started 1 to 2 weeks ago. He reports unprotected sex with a new partner about a month ago. A blood test confirms the patient has Treponema pallidum. Which of the following is the drug of choice for the treatment of this patient’s infection as a single dose?",
    answers: [
      { text: "Benzathine penicillin G", correct: true },
      { text: "Ceftriaxone", correct: false },
      { text: "Aztreonam", correct: false },
      { text: "Vancomycin", correct: false },
      { text: "erythromycin", correct: false },
    ],
  },
  {
    question: "An 18-year-old female presents to the urgent care clinic with urinary frequency, urgency, and fever for the past 3 days. Based on symptoms and a urinalysis, she is diagnosed with a urinary tract infection. Cultures reveal Enterococcus faecalis that is pan sensitive. Which of the following is an appropriate oral option to treat the urinary tract infection in this patient?",
    answers: [
      { text: "Cephalexin", correct: false },
      { text: "Vancomycin", correct: false },
      { text: "Cefdinir", correct: false },
      { text: "Amoxicillin", correct: true },
      { text: "tetracycline", correct: false },
    ],
  },
  {
    question: "An 18-year-old female presents to the urgent care clinic with urinary frequency, urgency, and fever for the past 3 days. Based on symptoms and a urinalysis, she is diagnosed with a urinary tract infection. Cultures reveal Enterococcus faecalis that is pan sensitive. Which of the following is an appropriate oral option to treat the urinary tract infection in this patient?",
    answers: [
      { text: "Cephalexin", correct: false },
      { text: "Vancomycin", correct: false },
      { text: "Cefdinir", correct: false },
      { text: "Amoxicillin", correct: true },
      { text: "midecamycin", correct: false },
    ],
  },
  {
    question: "A 20-year-old female presents to the emergency room with headache, stiff neck, and fever for 2 days and is diagnosed with meningitis. Which of the following agents is the best choice for the treatment of meningitis in this patient?",
    answers: [
      { text: "Cefazolin", correct: false },
      { text: "Cefdinir", correct: false },
      { text: "Cefotaxime", correct: true },
      { text: "Cefuroxime axetil", correct: false },
      { text: "Amoxcillin", correct: false },
    ],
  },
  {
    question: "A 68-year-old male presents from a nursing home with fever, increased urinary frequency and urgency, and mental status changes. He has a penicillin allergy of anaphylaxis. Which of the following B-lactams is the most appropriate choice for gram-negative coverage of this patient’s urinary tract infection?",
    answers: [
      { text: "Cefepime", correct: false },
      { text: "Ertapenem", correct: false },
      { text: "Aztreonam", correct: true },
      { text: "Ceftaroline", correct: false },
      { text: "Ceftriaxone", correct: false },
    ],
  },
  {
    question: "A 70 year old alcoholic male with poor dental hygiene is to have his remaining teeth extracted for subsequent dentures. He has mitral valve stenosis with mild cardiac insufficiency and is being treated with captopril, digoxin and furosemide. The dentist decides that his medical history warrants prophylactic antibiotic therapy prior to the procedure and prescribes:",
    answers: [
      { text: "Vancomycin", correct: false },
      { text: "Amoxicillin", correct: true },
      { text: "Tetracycline", correct: false },
      { text: "Co-trimoxazole", correct: false },
      { text: "Imipenem", correct: false },
    ],
  },
  {
    question: "A 25-year-old male returns home from a holiday in the Far East and complains of three days of dysuria and a purulent urethal discharge. You diagnose this to be a case of gonorrhea.Which of the following is appropriate treatment?",
    answers: [
      { text: "Ceftriaxone IM", correct: true },
      { text: "Penicillin G IM", correct: false },
      { text: "Gentamicin IM", correct: false },
      { text: "Piperacillin/Tazobactam IV", correct: false },
      { text: "Vancomycin IV", correct: false },
    ],
  },
  {
    question: "An eight-month pregnant medical student complains of lower abdominal pain and a 48-hour history of dysuria. She does not have any fever, an analysis of her urine shows protein, but no blood or glucose. A culture is taken.Which of the following is useful for treating this urinary track infection orally without causing risks to the fetus?",
    answers: [
      { text: "Cefadroxil", correct: true },
      { text: "Cotrimoxazole", correct: false },
      { text: "Penicillin V", correct: false },
      { text: "Ceftriaxone", correct: false },
      { text: "tetracycline", correct: false },
    ],
  },
  {
    question: "A patient with degenerative joint disease is to undergo insertion of a hip prosthesis .In order to avoid complications due to post-operative infection, the surgeon will pretreat this patient with an antibiotic.This hospital has a significant problem with MRSA. Which of the following antibiotics should the surgeon select?",
    answers: [
      { text: "Ampicillin", correct: false },
      { text: "Imipenem/cilastatin", correct: false },
      { text: "Gentamicin/piperacillin", correct: false },
      { text: "Vancomycin", correct: true },
      { text: "Cefazolin", correct: false },
    ],
  },
  {
    question: "Determine the group of antibiotics. They act mainly on gram-positive flora. The mechanism of antimicrobial action is associated with a violation of the formation of the bacterial wall, which leads to the death of young, growing forms of microorganisms. The main side effect is allergic reactions.",
    answers: [
      { text: "tetracyclines", correct: false },
      { text: "macrolides", correct: false },
      { text: "chloramphenicol", correct: false },
      { text: "aminoglycosides", correct: false },
      { text: "penicillins", correct: true },
    ],
  },
  {
    question: "A 62-year-old man is being treated for gonorrhea with a third-generation cephalosporin, ceftriaxone. Ceftriaxone is the drug of choice for gonorrhea rather than a first- or second-generation cephalosporin because",
    answers: [
      { text: "It is active against methicillin-resistant bacteria.", correct: false },
      { text: "Ceftriaxone has a half -life of about 8 hours making it effective as a single dose.", correct: true },
      { text: "It has a much lower incidence of adverse reactions compared to other cephalosporins.", correct: false },
      { text: "This third-generation cephalosporin has a shorter plasma half -life than the first- or second-generation cephalosporins.", correct: false },
      { text: "Ceftriaxone is well absorbed after oral administration.", correct: false },
    ],
  },
  {
    question: "A 16-year-old boy is treated for an infection with a strain of staphylococci known to produce β-lactamase with a combination of amoxicillin and clavulanic acid. Clavulanic acid is added to amoxicillin because it",
    answers: [
      { text: "Decreases the protein binding of amoxicillin.", correct: false },
      { text: "Decreases the renal excretion of amoxicillin.", correct: false },
      { text: "Increases the oral absorption of amoxicillin.", correct: false },
      { text: "Inhibits β-lactamase.", correct: true },
      { text: "Enhances the binding of amoxicillin to penicillin-binding proteins.", correct: false },
    ],
  },
  {
    question: "The drug of choice for treatment of typhoid is:",
    answers: [
      { text: "Tetracycline", correct: false },
      { text: "Cefotaxim", correct: false },
      { text: "Metronidazole", correct: false },
      { text: "Ciprofloxacin", correct: true },
      { text: "Vancomycin", correct: false },
    ],
  },
  {
    question: "The most common side effect of the oral administration of ampicillin is:",
    answers: [
      { text: "Anaphylactic shock", correct: false },
      { text: "Diarrhoea", correct: true },
      { text: "Oral candidiasis", correct: false },
      { text: "Renal failure", correct: false },
      { text: "Hepatotoxicity", correct: false },
    ],
  },
  {
    question: "Cephalosporines show their antimicrobial action by:",
    answers: [
      { text: "Binding to cytoplasmic receptor proteins", correct: false },
      { text: "Inhibition of beta-lactamases", correct: false },
      { text: "Inhibition of transpeptidation reactions", correct: true },
      { text: "Interference with the synthesis of ergosterol", correct: false },
      { text: "Inhibition of the synthesis of precursors of peptidoglycans", correct: false },
    ],
  },
  {
    question: "The most appropriate drug regimen for empiric treatment of gram-negative bacilli in blood is:",
    answers: [
      { text: "Ampicillin+sulbactam", correct: false },
      { text: "Aztreonam", correct: true },
      { text: "Cefazolin", correct: false },
      { text: "Imipenem+Cilastatin", correct: false },
      { text: "Ticarcillin+clavulanic acid", correct: false },
    ],
  },
  {
    question: "The antibiotic of choice in patients sensitive to penicillin is:",
    answers: [
      { text: "Erythromycin", correct: true },
      { text: "Streptomycin", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Chloramphenicol", correct: false },
      { text: "Vancomycin", correct: false },
    ],
  },
  {
    question: "The drug for choice for treatment of infection involving non-penicillinase producing staphylococcus is:",
    answers: [
      { text: "Erythromycin", correct: false },
      { text: "Penicillin G", correct: true },
      { text: "Ampicillin", correct: false },
      { text: "Methicillin sodium", correct: false },
      { text: "Imipenem", correct: false },
    ],
  },
  {
    question: "Children younger than 8 years of age should not receive tetracyclines because these agents:",
    answers: [
      { text: "Cause rupture tendons", correct: false },
      { text: "Deposit in tissue undergoing calcification", correct: true },
      { text: "Do not cross into the cerebrospinal fluid", correct: false },
      { text: "Can cause aplastic anemia", correct: false },
      { text: "Can cause hypersensibility", correct: false },
    ],
  },
  {
    question: "Which of the following antibiotics is considered safe to use in neonates?",
    answers: [
      { text: "Chloramphenicol", correct: true },
      { text: "Sulfamethoxazole", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Penicillin G", correct: false },
      { text: "macrolides", correct: false },
    ],
  },
  {
    question: "Which of the following class of antibiotics is associated with ototoxicity and hearing loss?",
    answers: [
      { text: "Beta-lactam antibiotics", correct: false },
      { text: "Quinolones", correct: false },
      { text: "Aminoglycosides", correct: true },
      { text: "Glycopeptides", correct: false },
      { text: "Macrolides", correct: false },
    ],
  },
  {
    question: "Aminoglycosides are primarily used for infections by what type of pathogen?",
    answers: [
      { text: "Gram positive bacteria only", correct: false },
      { text: "fungi", correct: false },
      { text: "Gram negative bacteria only", correct: true },
      { text: "Gram negative and Gram positive bacteria", correct: false },
      { text: "Protozoa", correct: false },
    ],
  },
  {
    question: "Aminoglycosides are primarily used for infections by what type of pathogen?",
    answers: [
      { text: "Gram positive bacteria only", correct: false },
      { text: "Fungi", correct: false },
      { text: "Gram negative bacteria only", correct: true },
      { text: "Gram negative and Gram positive bacteria", correct: false },
      { text: "Protozoa", correct: false },
    ],
  },
  {
    question: "Note the macrolide antibiotic used to eradicate Helicobacter pylori",
    answers: [
      { text: "benzylpenicillin", correct: false },
      { text: "oxacillin", correct: false },
      { text: "polymyxin", correct: false },
      { text: "chloramphenicol", correct: false },
      { text: "clarithromycin", correct: true },
    ],
  },
  {
    question: "Specify the mechanism of action of tetracycline",
    answers: [
      { text: "violates the synthesis of folic acid", correct: false },
      { text: "disrupts the synthesis of cellular murein", correct: false },
      { text: "disrupts the synthesis of nucleic acids", correct: false },
      { text: "disrupts protein synthesis, preventing the formation of a complex of messenger RNA with messenger RNA on ribosomes;", correct: true },
      { text: "disrupts protein synthesis by blocking the enzyme translocase.", correct: false },
    ],
  },
  {
    question: "Specify a long-acting drug from the tetracycline group.",
    answers: [
      { text: "ampicillin", correct: false },
      { text: "cephaloridine", correct: false },
      { text: "rifampicin", correct: false },
      { text: "erythromycin.", correct: false },
      { text: "doxycycline", correct: true },
    ],
  },
  {
    question: "Specify the drug with a bacteriostatic type of action:",
    answers: [
      { text: "doxycycline", correct: true },
      { text: "ceftriaxone", correct: false },
      { text: "benzylpenicillin", correct: false },
      { text: "amikacin", correct: false },
      { text: "cefazolin", correct: false },
    ],
  },
  {
    question: "Aminoglycosides are primarily used for infections by what type of pathogen?",
    answers: [
      { text: "Gram positive bacteria only", correct: false },
      { text: "Yeast and fungi", correct: false },
      { text: "Gram negative bacteria only", correct: true },
      { text: "Both Gram negative and Gram positive bacteria", correct: false },
      { text: "Fungi", correct: false },
    ],
  },
  {
    question: "Which drug can cause tooth discoloration when given to young children?",
    answers: [
      { text: "Aminoglycosides", correct: false },
      { text: "Macrolides", correct: false },
      { text: "Lincosamides", correct: false },
      { text: "Tetracyclines", correct: true },
      { text: "Penicillin", correct: false },
    ],
  },
  {
    question: "The clinic nurse is providing health teaching to a patient who has been prescribed doxycycline (Doxycin). What is a priority teaching point for this patient?",
    answers: [
      { text: "Stay out of the sun", correct: true },
      { text: "Avoid sexual activity", correct: false },
      { text: "Drink more water", correct: false },
      { text: "Avoid salt", correct: false },
      { text: "Should not eat meat", correct: false },
    ],
  },
  {
    question: "Amongst those antibiotics that act by inhibiting protein synthesis, several members this drug class are known to produce side effects related to both drug interactions caused by inhibition of P-450 and cardiac effects (QT prolongation/Torsade de pointes). Which drug class is this?",
    answers: [
      { text: "Aminoglycosides", correct: false },
      { text: "Fluoroquinolones", correct: false },
      { text: "Macrolides", correct: true },
      { text: "Rifampicin", correct: false },
      { text: "Tetracyclines", correct: false },
    ],
  },
  {
    question: "The tetracyclines are a group of widely used broad spectrum antibiotics. Antimicrobial activity of tetracyclines involves which of the following mechanisms?",
    answers: [
      { text: "Inhibition of microbial protein synthesis", correct: true },
      { text: "Inhibition of microbial DNA gyrase", correct: false },
      { text: "Inhibition of microbial cell wall synthesis", correct: false },
      { text: "Inhibition of microbial folic acid synthesis", correct: false },
      { text: "Inhibition of cell membrane function", correct: false },
    ],
  },
  {
    question: "Which of the following antibiotics is contraindicated in pregnant women and small children due to it's tendency to irreversibly stain developing teeth?",
    answers: [
      { text: "Tetracyclines", correct: true },
      { text: "Beta lactam antibiotics", correct: false },
      { text: "Fluoroquinolones", correct: false },
      { text: "Quinolines", correct: false },
      { text: "Macrolides", correct: false },
    ],
  },
  {
    question: "Which of the following class of antibiotics is associated with ototoxicity and hearing loss?",
    answers: [
      { text: "Quinolones", correct: false },
      { text: "Aminoglycosides", correct: true },
      { text: "Glycopeptides", correct: false },
      { text: "Tetracyclines", correct: false },
      { text: "Macrolides", correct: false },
    ],
  },
  {
    question: "Aminoglycosides are contraindicated in children under 14 years of age. It causes the following side effects:",
    answers: [
      { text: "Allergic reactions", correct: false },
      { text: "Hypoplasia of tooth enamel and bones", correct: false },
      { text: "Neuro- and ototoxicity", correct: true },
      { text: "Hepatotoxicity", correct: false },
      { text: "Anemia", correct: false },
    ],
  },
  {
    question: "What is the typical side effects of macrolides?",
    answers: [
      { text: "Mental disorders", correct: false },
      { text: "Hearing loss", correct: false },
      { text: "Vestibular disorders", correct: false },
      { text: "Dysbiosis", correct: true },
      { text: "Dryness in mouth", correct: false },
    ],
  },
  {
    question: "Tetracyclines are contraindicated in children under 8 years of age. They cause the following sude effect…",
    answers: [
      { text: "Allergic reactions", correct: false },
      { text: "Hypotension", correct: false },
      { text: "Hypoplasia of tooth enamel and bones", correct: true },
      { text: "Ototoxicity", correct: false },
      { text: "Neurotoxicity", correct: false },
    ],
  },
  {
    question: "The use of chloramphenicol in children is contraindicated. It causes the following side effects..",
    answers: [
      { text: "Allergic reactions", correct: false },
      { text: "Glossitis", correct: false },
      { text: "Oppression of hematopoiesis", correct: true },
      { text: "Nephrotoxicity", correct: false },
      { text: "Candida stomatitis", correct: false },
    ],
  },
  {
    question: "A 4 year old child should be prescribed a broad-spectrum antimicrobial agent for intestinal infection. Which of the following drugs is not prescribed for children due to the side effect of the development of bone tissue?",
    answers: [
      { text: "Co-trimoxazole", correct: false },
      { text: "Chloramphenicol", correct: false },
      { text: "Amoxicillin", correct: false },
      { text: "Tetracycline", correct: true },
      { text: "Ampicillin", correct: false },
    ],
  },
  {
    question: "After 10 days of treatment with a drug from the group of antibiotics, the patient has following symptoms: dyspeptic symptoms, candidamycosis, photosensitivity. What group of antibiotics could cause such side effects?",
    answers: [
      { text: "Tetracyclines", correct: true },
      { text: "Penicillin", correct: false },
      { text: "Cephalosporins", correct: false },
      { text: "Rifampicin", correct: false },
      { text: "Aminoglycosides", correct: false },
    ],
  },
  {
    question: "Roxanne, a 23-year-old medical student arrives in the student health clinic complaining of difficulty in swallowing, sore throat, and chills. Upon examination, she is found to be running a fever, and has white patches on her tonsils. A throat swab is positive for Streptococcus pyogenes (group A). A diagnosis of acute pharyngitis is made. Her past medical history is unremarkable except for an anaphylactic reaction to cefaclor two years ago. Which of the following would be a safe alternative for treating Roxanne's condition?",
    answers: [
      { text: "amoxicillin, oral", correct: false },
      { text: "cephalexin, oral", correct: false },
      { text: "Clindamycin", correct: true },
      { text: "Meropenem", correct: false },
      { text: "nafcillin", correct: false },
    ],
  },
  {
    question: "After successful treatment for her skin infection with a broad spectrum cephalosporin (cefotaxime), Amy's condition improves for several days, and then suddenly declines. A second set of cell cultures confirmed the presence of a superinfection by a new organism Bacteroides fragilis, a beta-lactamase producing obligate anaerobic gram-negative rod-shaped bacteria. Based upon basic principles of antibiotic action, which of the following would be contraindicated for treating this infection?",
    answers: [
      { text: "a carbapenem (e.g. meropenem)", correct: false },
      { text: "a macrolide (e.g. clarithromycin)", correct: false },
      { text: "a tetracycline derivative (tigecycline)", correct: false },
      { text: "an aminoglycoside (e.g. gentamicin)", correct: true },
      { text: "metronidazole", correct: false },
    ],
  },
  {
    question: "Johnny is a 5 year old boy hospitalized for a severe infection who has been treated with a parenteral antibiotic having bactericidal properties. Two days after the onset of therapy he complains of \"ringing in the ears\", and appears to have difficulty walking normally. Which of the following antibiotics was Johnny most likely given?",
    answers: [
      { text: "a macrolide (e.g. azithromycin)", correct: false },
      { text: "a tetracycline (e.g. minocycline)", correct: false },
      { text: "an aminoglycoside (e.g. tobramycin)", correct: true },
      { text: "an oxazolidinone (linezolid)", correct: false },
      { text: "clindamycin", correct: false },
    ],
  },
  {
    question: "A nurse assessing a patient who is 12 years old should associate which complication with the patient's receiving tetracycline as a younger child?",
    answers: [
      { text: "Delay in long bone growth", correct: false },
      { text: "Early onset of puberty", correct: false },
      { text: "Severe face and body acne", correct: false },
      { text: "Discoloration of the teeth", correct: true },
      { text: "dryness of mouth", correct: false },
    ],
  },
  {
    question: "A  24-year-old pregnant  female presents to the urgent care clinic with fever, frequency, and urgency. She is diagnosed with a urinary tract infection. Based on potential harm to the fetus, which of the following medications should be avoided in treating her urinary tract infection?",
    answers: [
      { text: "Nitrofurantoin", correct: false },
      { text: "Amoxicillin", correct: false },
      { text: "Cephalexin", correct: false },
      { text: "Tobramycin", correct: false },
      { text: "Tetracycline", correct: true },
    ],
  },
  {
    question: "THE PATIENT COMPLAINED OF ABDOMINAL PAIN, DIARRHEA. AFTER TAKING AN ANALYSIS FROM HIM, A LOT OF PATHOGENIC MICROFLORA WAS FOUND. WHICH ORAL ANTIBACTERIAL DRUG MAY PRESCRIBED TO HIM?",
    answers: [
      { text: "TETRACYCLINE", correct: true },
      { text: "AZITHROMOCINE", correct: false },
      { text: "GENTAMICINE", correct: false },
      { text: "CEFASOLINE", correct: false },
      { text: "Levomicetine", correct: false },
    ],
  },
  {
    question: "A 58-year-old male with a history of hepatitis C, cirrhosis, and ascites presents with spontaneous bacterial peritonitis. Which of the following antibiotics requires close monitoring and dosing adjustment in this patient given his liver disease?",
    answers: [
      { text: "Penicillin G", correct: false },
      { text: "Tobramycin", correct: false },
      { text: "Erythromycin", correct: true },
      { text: "Vancomycin", correct: false },
      { text: "Ceftriaxone", correct: false },
    ],
  },
  {
    question: "A patient being treated for springtime allergies with terfenadine develops an upper respiratory problem. He receives an antibiotic and develops a cardiac arrythmia. What was the likely antibiotic?",
    answers: [
      { text: "Ampicillin", correct: false },
      { text: "Cefaclor", correct: false },
      { text: "Erythromycin", correct: true },
      { text: "Doxycycline", correct: false },
      { text: "Cotrimoxazole", correct: false },
    ],
  },
  {
    question: "Determine the group of antibiotics. They have a wide spectrum of antimicrobial action. They act bacteriostatically. Inhibit protein synthesis in the microbial cell. Increase the sensitivity of the skin to ultraviolet radiation, deposited in the bones.",
    answers: [
      { text: "penicillins", correct: false },
      { text: "macrolides", correct: false },
      { text: "cephalosporins", correct: false },
      { text: "tetracyclines", correct: true },
      { text: "aminoglycosides.", correct: false },
    ],
  },
  {
    question: "Which group of antibiotics is used for intestinal amoebiasis?",
    answers: [
      { text: "Penicillins", correct: false },
      { text: "Tetracyclines", correct: true },
      { text: "Cephalosporins", correct: false },
      { text: "Macrolides", correct: false },
      { text: "Monobactams", correct: false },
    ],
  },
  {
    question: "Which of the antibiotics cause dysfunction of the VIII pair of cranial nerves?",
    answers: [
      { text: "chloramphenicol", correct: false },
      { text: "tetracyclines", correct: false },
      { text: "aminoglycosides", correct: true },
      { text: "macrolides", correct: false },
      { text: "penicillins.", correct: false },
    ],
  },
  {
    question: "Which of the antibiotics cause inhibition of hematopoiesis (anemia, leukopenia)?",
    answers: [
      { text: "penicillins", correct: false },
      { text: "cephalosporins", correct: false },
      { text: "macrolides", correct: false },
      { text: "chloramphenicol", correct: true },
      { text: "tetracyclines", correct: false },
    ],
  },
  {
    question: "Specify an antibiotic from the group of aminoglycosides used for intestinal sanitation before surgery on the gastrointestinal tract.",
    answers: [
      { text: "erythromycin", correct: false },
      { text: "neomycin", correct: true },
      { text: "griseofulvin", correct: false },
      { text: "metacycline", correct: false },
      { text: "oxacillin.", correct: false },
    ],
  },
  {
    question: "Specify the mechanism of action of chloramphenicol.",
    answers: [
      { text: "disrupts the synthesis of folic acid;", correct: false },
      { text: "disrupts the synthesis of cellular murein;", correct: false },
      { text: "disrupts protein synthesis in ribosomes, inhibiting the formation of peptide bonds", correct: true },
      { text: "disrupts the synthesis of NDT;", correct: false },
      { text: "causes disintegration of the cell membrane.", correct: false },
    ],
  },
  {
    question: "A 25-year-old woman is receiving tetracycline for the treatment of acne. She should be warned against the concurrent ingestion of",
    answers: [
      { text: "Milk", correct: true },
      { text: "Caffeine.", correct: false },
      { text: "Water.", correct: false },
      { text: "Green leafy vegetables.", correct: false },
      { text: "Chocolate", correct: false },
    ],
  },
  {
    question: "A 26-year-old woman has the diagnosis of bacterial meningitis. The organism cultured is a gram-negative Pseudomonas susceptible to gentamicin. There is concern about treatment of this patient with gentamicin because",
    answers: [
      { text: "Aminoglycosides are polar and do not penetrate the central nervous system.", correct: true },
      { text: "Aminoglycosides are rapidly metabolized in the brain and do not reach therapeutic concentrations.", correct: false },
      { text: "Patients with meningitis have a tendency to be more susceptible to the nephrotoxic effects of the aminoglycosides.", correct: false },
      { text: "Aminoglycosides can cause seizures at therapeutic concentrations.", correct: false },
      { text: "Aminoglycosides are not generally active against gram-negative bacteria.", correct: false },
    ],
  },
  {
    question: "A 36-year-old woman is being treated with gentamicin in hospital for a gram-negative infection. Her trough blood concentrations are below the known minimum inhibitory concentration (MIC) of the bacteria. An infectious disease consultant is not concerned about this because",
    answers: [
      { text: "Gentamicin is bacteriostatic.", correct: false },
      { text: "Gentamicin plasma concentrations are not an effective way to monitor therapy.", correct: false },
      { text: "The mechanism of action of gentamicin is inhibition of cell wall synthesis.", correct: false },
      { text: "Gentamicin has residual bacteriocidal activity which persists after the plasma concentration has fallen below the MIC.", correct: true },
      { text: "The MIC for most bacteria are notoriously too high.", correct: false },
    ],
  },
  {
    question: "A 23-year-old woman has developed a pulmonary infection of unknown cause. Patients in the same hospital have recently developed infections with organisms shown to be resistant to gentamicin and tobramycin. An infectious disease consultant recommends initially starting the patient on amikacin along with another antibiotic that is known to inhibit cell wall synthesis. The choice of amikacin is made because it is",
    answers: [
      { text: "Resistant to many of the aminoglycoside-inactivating enzymes.", correct: true },
      { text: "Less expensive than gentamicin or tobramycin.", correct: false },
      { text: "More concentrated in pulmonary tissue than gentamicin or tobramycin.", correct: false },
      { text: "Less ototoxic than gentamicin or tobramycin.", correct: false },
      { text: "Less nephrotoxic than gentamicin or tobramycin.", correct: false },
    ],
  },
  {
    question: "Which one of the following antibiotics chelates with calcium?",
    answers: [
      { text: "Tetracycline", correct: true },
      { text: "Cephalosporins", correct: false },
      { text: "Erythromycin", correct: false },
      { text: "Penicillin", correct: false },
      { text: "Monobactam", correct: false },
    ],
  },
  {
    question: "Doxycycline is:",
    answers: [
      { text: "Bactericidal", correct: false },
      { text: "Not excreted in the feces", correct: false },
      { text: "Having a short elimination half-life", correct: false },
      { text: "Not effective in lyme disease", correct: false },
      { text: "Not as effective as tetracycline against H.pylori", correct: true },
    ],
  },
  {
    question: "Neomycin, an aminoglycoside is:",
    answers: [
      { text: "Least nephrotoxic", correct: false },
      { text: "Metabolized by hepatic enzyme", correct: false },
      { text: "Used in hepatic coma", correct: true },
      { text: "A drug of choice in Rockey Mountain Spotted fever", correct: false },
      { text: "An adjunct in treatment of tuberculosis", correct: false },
    ],
  },
  {
    question: "The mechanism underlying the resistance of G+ve organisms to macrolides is:",
    answers: [
      { text: "Decreased drug permeability of the cytoplasmic membrane", correct: false },
      { text: "Methylation of binding sites on the 50-S ribosomal subunit", correct: true },
      { text: "Decreased activity of uptake mechanism", correct: false },
      { text: "Formation of estrases that hydrolyze the lactone ring", correct: false },
      { text: "Formation of acetyl transferase that inactivates macrolides", correct: false },
    ],
  },
  {
    question: "A senior dental surgeon is very much concerned about the systemic effect of the topically-used drugs for plaque prevention.Which of the following drugs will least be considered by him due to the same reason?",
    answers: [
      { text: "Vancomycin", correct: false },
      { text: "Bacitracin", correct: false },
      { text: "Polymyxin-B", correct: false },
      { text: "Clarithromycin", correct: true },
      { text: "Kanamycin", correct: false },
    ],
  },
  {
    question: "Which of the following is associated with vestibular toxicity?",
    answers: [
      { text: "Isoniazide", correct: false },
      { text: "Linezolide", correct: false },
      { text: "Cycloserine", correct: false },
      { text: "Rifampin", correct: false },
      { text: "Streptomycine", correct: true },
    ],
  },
  {
    question: "Concurrent administration of tetracyclines is most likely to impair the action of:",
    answers: [
      { text: "Lincomycin", correct: false },
      { text: "Chloramphenicol", correct: false },
      { text: "Erythromycin", correct: false },
      { text: "Penicillin", correct: false },
      { text: "Macrolides", correct: true },
    ],
  },
  {
    question: "A patient has seasonal allergic rhinitis and is on terfenadine. He develops cardiac arrhythmias after a course of antibiotics. Which of the following antibiotic could have been given?",
    answers: [
      { text: "Cotrimoxazole", correct: false },
      { text: "Erythromycin", correct: true },
      { text: "Tetracycline", correct: false },
      { text: "Ampicillin", correct: false },
      { text: "Aztreonam", correct: false },
    ],
  },
  {
    question: "What is the side effect of quinolones?",
    answers: [
      { text: "Arthropathy", correct: true },
      { text: "Hearing loss", correct: false },
      { text: "Photosensitivity", correct: false },
      { text: "Metallic taste in mouth", correct: false },
      { text: "Discoloration od nail beds", correct: false },
    ],
  },
  {
    question: "Which of the following class of antibiotics is considered the first-line treatment for E. coli infections?",
    answers: [
      { text: "Fluoroquinolones", correct: true },
      { text: "Aminoglycosides", correct: false },
      { text: "Macrolides", correct: false },
      { text: "Tetracyclines", correct: false },
      { text: "Penicillins", correct: false },
    ],
  },
  {
    question: "You are the nurse taking care of a patient who is being treated with levofloxacin, a fluoroquinolone antibiotic, for pneumonia. Which of the following choices best describes the mechanism of action of fluoroquinolone antibiotics?",
    answers: [
      { text: "Inhibition of topoisomerase II", correct: true },
      { text: "Disruption of peptidoglycan cross-linkage", correct: false },
      { text: "Disruption of mycolic acid synthesis", correct: false },
      { text: "Blockage of tRNA-ribosome-mRNA complex binding", correct: false },
      { text: "Inhibition of peptidoglycan synthesis", correct: false },
    ],
  },
  {
    question: "Therapeutic use of nalidixic acid:",
    answers: [
      { text: "nephrite, cystitis, urethritis", correct: true },
      { text: "diarrhea", correct: false },
      { text: "gastritis, enterocolitis", correct: false },
      { text: "psoriasis", correct: false },
      { text: "dermatitis", correct: false },
    ],
  },
  {
    question: "Note the sulfa drug, poorly absorbed in the gastrointestinal tract.",
    answers: [
      { text: "sulfadimezin", correct: false },
      { text: "sulfapyridazine", correct: false },
      { text: "urosulfan", correct: false },
      { text: "phthalazole", correct: true },
      { text: "Bactrim.", correct: false },
    ],
  },
  {
    question: "Note the long-acting sulfa drug.",
    answers: [
      { text: "sulfadimezin", correct: false },
      { text: "sulfadimethoxine", correct: true },
      { text: "phthalazole", correct: false },
      { text: "urosulfan", correct: false },
      { text: "etazole", correct: false },
    ],
  },
  {
    question: "Specify the sulfa drug used in eye drops.",
    answers: [
      { text: "sulfadimezin", correct: false },
      { text: "sulfapyridazine", correct: false },
      { text: "phthalazole", correct: false },
      { text: "sulfacil sodium", correct: true },
      { text: "Bactrim", correct: false },
    ],
  },
  {
    question: "Specify a sulfa preparation containing sulfanilamide and trimethoprim.",
    answers: [
      { text: "sulfadimezin", correct: false },
      { text: "sulfapyridazine", correct: false },
      { text: "ftalazole", correct: false },
      { text: "sulfacil sodium", correct: false },
      { text: "Cotrimoxazole (Bactrim).", correct: true },
    ],
  },
  {
    question: "Sulfa drugs can cause:",
    answers: [
      { text: "visual impairment;", correct: false },
      { text: "psychosis", correct: false },
      { text: "paralysis and paresis", correct: false },
      { text: "crystalluria;", correct: true },
      { text: "vestibular disorders.", correct: false },
    ],
  },
  {
    question: "Note a substance that weakens the antimicrobial effect of sulfa drugs.",
    answers: [
      { text: "novocaine", correct: true },
      { text: "benzylpenicillin", correct: false },
      { text: "trimethoprim", correct: false },
      { text: "rifampicin", correct: false },
      { text: "methotrexate.", correct: false },
    ],
  },
  {
    question: "What antimicrobial agents are included in Cotrimoxazole (Bactrim, Biseptol, Septrin)?",
    answers: [
      { text: "oxacillin and ampicillin", correct: false },
      { text: "amoxicillin and clavulanic acid", correct: false },
      { text: "imipine and cilastatin", correct: false },
      { text: "sulfamethoxazole and trimethoprim", correct: true },
      { text: "isoniazid and rifampicin.", correct: false },
    ],
  },
  {
    question: "In which one of the following infections are the fluoroquinolones ineffective?",
    answers: [
      { text: "UTIs due a B-lactamase-producing strain of klebsiella", correct: false },
      { text: "Pneumonia due to Streptococcus pneumoniae", correct: true },
      { text: "Exacerbation of chronic bronchitis due to Moraxella catarrhalis", correct: false },
      { text: "Urinary tract infections due to E.coli", correct: false },
      { text: "UTIs due to Pseudomonas aeruginosa", correct: false },
    ],
  },
  {
    question: "Which of the following drug is effective in the treatment of pneumonia caused by Pneumocystic carinii?",
    answers: [
      { text: "Sulfasalazine", correct: false },
      { text: "Sulfacetamide", correct: false },
      { text: "Co-trimoxazole", correct: true },
      { text: "Mafenide acetate", correct: false },
      { text: "Sulfisoxazole", correct: false },
    ],
  },
  {
    question: "Which of the following drug is used in the treatment of ulcerative colitis?",
    answers: [
      { text: "Sulfasalazine", correct: true },
      { text: "Sulfacetamide", correct: false },
      { text: "Co-trimoxazole", correct: false },
      { text: "Mafenide acetate", correct: false },
      { text: "Sulfisoxazole", correct: false },
    ],
  },
  {
    question: "Which of the following drug is used to prevent infections among burn patients?",
    answers: [
      { text: "Sulfasalazine", correct: false },
      { text: "Sulfacetamide", correct: false },
      { text: "Co-trimoxazole", correct: false },
      { text: "Mafenide acetate", correct: true },
      { text: "Sulfisoxazole", correct: false },
    ],
  },
  {
    question: "Sulfonamides increase the risk of neonatal kernicterus because they",
    answers: [
      { text: "diminish the production of plasma albumin", correct: false },
      { text: "increase the turnover of red blood cells", correct: false },
      { text: "inhibit the metabolism of bilirubin", correct: false },
      { text: "compete for bilirubin binding sites on plasma albumin", correct: true },
      { text: "depress the bone marrow", correct: false },
    ],
  },
  {
    question: "Trimethoprim:",
    answers: [
      { text: "Is less potent than sulfamethoxazole", correct: false },
      { text: "Inhibits the enzyme dihydropteroate synthetase", correct: false },
      { text: "Lowers the ratio of tetrahydrofolate to folate in the organism", correct: true },
      { text: "Resistance has not been observed in microorganisms", correct: false },
      { text: "Stimulates purine synthesis", correct: false },
    ],
  },
  {
    question: "Sulfonamides are useful in the treament of which one of the following?",
    answers: [
      { text: "Influenza", correct: false },
      { text: "Gonorrhea", correct: false },
      { text: "Most streptococcal infections", correct: false },
      { text: "Urinary tract infections", correct: true },
      { text: "Meningococcal infections", correct: false },
    ],
  },
  {
    question: "Most cases (more than 80%) of uncomplicated, community-acquired urinary tract infection (UTI) are caused by which bacteria?",
    answers: [
      { text: "Klebsiella pneumoniae", correct: false },
      { text: "Escherichia coli", correct: true },
      { text: "Enterobacter spp.", correct: false },
      { text: "Pseudomonas spp", correct: false },
      { text: "T. vaginalis", correct: false },
    ],
  },
  {
    question: "Ciprofloxacin belongs to what class of antibiotic?",
    answers: [
      { text: "Tetracyclines", correct: false },
      { text: "Macrolides", correct: false },
      { text: "Fluoroquinolones", correct: true },
      { text: "Beta lactams", correct: false },
      { text: "Macrolides", correct: false },
    ],
  },
  {
    question: "The nurse is assessing a patient who is receiving a sulfonamide for treatment of a urinary tract infection. To monitor the patient for the most severe response to sulfonamide therapy, the nurse will assess for what?",
    answers: [
      { text: "Diarrhea", correct: false },
      { text: "Skin rash and lesions", correct: true },
      { text: "Hypertension", correct: false },
      { text: "Bleeding", correct: false },
      { text: "glossitis", correct: false },
    ],
  },
  {
    question: "A 32-years-old male presents to an outpatient clinic with a 5-day history of productive cough, purulent sputum, and shortness of breath. He is diagnosed with community-acquired pneumonia. It is noted that this patient has a severe ampicillin allergy. Which of the following would be an acceptable treatment for this patient?",
    answers: [
      { text: "Levofloxacin", correct: true },
      { text: "Ciprofloxacin", correct: false },
      { text: "Penicillin VK", correct: false },
      { text: "Nitrofurantoin", correct: false },
      { text: "Tetracycline", correct: false },
    ],
  },
  {
    question: "A 26-year -old young man present with the symptoms of gonorrhea. Since this condition is often associated with an infection due to Chlamydia trachomatis, which of the following quinolones would be the best choice in treating him?",
    answers: [
      { text: "Ciprofloxacin", correct: false },
      { text: "Nalidixic acid", correct: false },
      { text: "Norfloxacin", correct: false },
      { text: "Ofloxacin", correct: true },
      { text: "Lomefloxacin", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of sulfadimezin?",
    answers: [
      { text: "disrupts the formation of folic acid (FC) by microbial cells;", correct: true },
      { text: "inhibits folate reductase and impedes the formation of tetrahydro-folic acid", correct: false },
      { text: "inhibits the enzyme transpeptidase and interferes with the synthesis of murein", correct: false },
      { text: "inhibits DNA-dependent RNA polymerase", correct: false },
      { text: "violates the correct reading of the genetic code", correct: false },
    ],
  },
  {
    question: "Determine the group of chemotherapeutic agents. They act on gram-positive and gram-negative microbes. The mechanism of antimicrobial action is associated with antagonism with para-aminobenzoic acid (PABA). Cause crystalluria.",
    answers: [
      { text: "nitrofurans", correct: false },
      { text: "derivatives of 8-hydroxyquinoline", correct: false },
      { text: "nafthyridine derivatives", correct: false },
      { text: "sulfa drugs", correct: true },
      { text: "quinoxaline derivatives", correct: false },
    ],
  },
  {
    question: "Sulfonamide drugs are selective for sensitive bacteria as compared to mammalian cells because",
    answers: [
      { text: "Mammalian cells have the ability to extrude sulfonamide drugs.", correct: false },
      { text: "Mammalian cells do not take up sulfonamide drugs.", correct: false },
      { text: "Mammalian cells require preformed folic acid.", correct: true },
      { text: "Sulfonamide drugs inter ere with the synthesis of vitamin B12 in bacterial cells but not mammalian cells", correct: false },
      { text: "Bacterial cells accumulate sulfonamide drugs more than mammalian cells.", correct: false },
    ],
  },
  {
    question: "In the combination drug trimethoprim-sulfamethoxazole, the trimethoprim moiety is selective for bacterial cells compared to mammalian cells because the trimethoprim",
    answers: [
      { text: "Inhibits bacterial protein synthesis.", correct: false },
      { text: "Is accumulated in bacterial cells.", correct: false },
      { text: "Destroys bacterial cell walls.", correct: false },
      { text: "Inhibits the incorporation of PABA into dihydropteroic acid.", correct: false },
      { text: "Is a selective inhibitor of dihydrofolate reductase in lower organisms.", correct: true },
    ],
  },
  {
    question: "A 41-year-old woman is being treated with clindamycin for an infection in the skin of her leg that resulted from a bicycle accident. She should be warned about what serious side effect?",
    answers: [
      { text: "Painful urination", correct: false },
      { text: "Watery diarrhea", correct: true },
      { text: "Constipation", correct: false },
      { text: "Discoloration around the infection site", correct: false },
      { text: "A change in her hearing.", correct: false },
    ],
  },
  {
    question: "A 46-year-old woman has a urinary tract infection which has become a systemic infection with fever and lethargy. Nitrofurantoin, an effective urinary antiseptic, would not be recommend for her treatment because",
    answers: [
      { text: "Nitrofurantoin is bacteriostatic", correct: false },
      { text: "The bacterial organism is likely not sensitive to nitrofurantoin.", correct: false },
      { text: "Effective concentrations of nitrofurantoin are not achieved in the kidney or bladder.", correct: false },
      { text: "Effective concentrations of nitrofurantoin are not achieved in the plasma.", correct: true },
      { text: "Bacterial resistance to nitrofurantoin is common.", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is used in eye infections because of its high aqueous solubility, and non-irritating nature?",
    answers: [
      { text: "Sulfamethoxazole", correct: false },
      { text: "Sulfacetamide", correct: true },
      { text: "Sulfadiazine", correct: false },
      { text: "Sulfazoxazole", correct: false },
      { text: "Salacylazosulfapyridine", correct: false },
    ],
  },
  {
    question: "Which FQN is used more to treat Pseudomonis aeruginosa?",
    answers: [
      { text: "Moxifloxacin", correct: false },
      { text: "Nalidixic Acid", correct: false },
      { text: "Sprafloxacin", correct: false },
      { text: "Levofloxacin", correct: false },
      { text: "Ciprofloxacin", correct: true },
    ],
  },
  {
    question: "A jaundiced 1-day-old premature infant with an elevated free bilirubin is seen in the premature baby nursery. The mother had received an antibiotic combination for a urinary tract infection (UTI) 1 week before delivery. Which drug is the most likely cause of the baby’s kernicterus?",
    answers: [
      { text: "Sulfonamides", correct: true },
      { text: "Macrolides", correct: false },
      { text: "Tetracyclines", correct: false },
      { text: "Monobactams", correct: false },
      { text: "Carbapenems", correct: false },
    ],
  },
  {
    question: "A patient on antimicrobial therapy develops the following signs and symptoms that ultimately are found to be drug-induced: cough, dyspnea, and pulmonary infiltrates; neutropenia and bleeding tendencies; and paresthesias. Which drug is the most likely cause of this patient’s symptoms?",
    answers: [
      { text: "Moxifloxacin", correct: false },
      { text: "Nalidixic acid", correct: false },
      { text: "Nitrofurantoin", correct: true },
      { text: "Levofloxacin", correct: false },
      { text: "Ciprofloxacin", correct: false },
    ],
  },
  {
    question: "Which FQN is used more to treat Pseudomonis aeruginosa?",
    answers: [
      { text: "Moxifloxacin", correct: false },
      { text: "Levofloxacin", correct: false },
      { text: "Nalidixic acid", correct: false },
      { text: "Ciprofloxacin", correct: true },
      { text: "Sprafloxacin", correct: false },
    ],
  },
  {
    question: "The sulfonamides which can be used for treatment of ulcerative colitis is:",
    answers: [
      { text: "Sulfasalazine", correct: true },
      { text: "Sulfacetamide", correct: false },
      { text: "Silver sulfaiazine", correct: false },
      { text: "Mafenide", correct: false },
      { text: "Sulfadoxine", correct: false },
    ],
  },
  {
    question: "Which of the following inhibit folate metabolism?",
    answers: [
      { text: "Tetracyclines", correct: false },
      { text: "Trimethoprim", correct: true },
      { text: "Ampicillin", correct: false },
      { text: "Cephalosporin", correct: false },
      { text: "Penicillin", correct: false },
    ],
  },
  {
    question: "In the tratment of a urinary tract infection in a patient known to have a deficiency of glucose-6-phosphate dehydrogenase, it would not be advisable to prescribe which of the following?",
    answers: [
      { text: "Sulfonamide", correct: true },
      { text: "Amoxicillin", correct: false },
      { text: "Cephalexin", correct: false },
      { text: "Ciprofloxacin", correct: false },
      { text: "Penicillin", correct: false },
    ],
  },
  {
    question: "What is the side effect of chloroquine?",
    answers: [
      { text: "Hearing loss", correct: false },
      { text: "Discoloration of nail beds", correct: true },
      { text: "Vestibular disorder", correct: false },
      { text: "Unpleasant taste in mouth", correct: false },
      { text: "Photosensitivity", correct: false },
    ],
  },
  {
    question: "What is the typical side effect of metronidazole?",
    answers: [
      { text: "Discoloration of nail beds", correct: false },
      { text: "Arthropathy", correct: false },
      { text: "Metallic taste in mouth", correct: true },
      { text: "Mental disorder", correct: false },
      { text: "Hearing loss", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is antimalarial?",
    answers: [
      { text: "Emetine", correct: false },
      { text: "Tinidazole", correct: false },
      { text: "Ornidazole", correct: false },
      { text: "Primaquine", correct: true },
      { text: "Metronidazole", correct: false },
    ],
  },
  {
    question: "The spectrum of activity of metronidazole:",
    answers: [
      { text: "Aerobic organisms", correct: false },
      { text: "Plasmodium malaria", correct: false },
      { text: "Trichomonas vaginalis", correct: true },
      { text: "Leishmania", correct: false },
      { text: "Plasmodium vivax", correct: false },
    ],
  },
  {
    question: "Spectrum activity of metronidazole:",
    answers: [
      { text: "Dysentery amoeba", correct: true },
      { text: "Plasmodium malaria", correct: false },
      { text: "Aerobic organisms", correct: false },
      { text: "Leishmania", correct: false },
      { text: "Plasmodium ovale", correct: false },
    ],
  },
  {
    question: "Antiamioebic drug:",
    answers: [
      { text: "Furazolidone", correct: false },
      { text: "Erythromycin", correct: false },
      { text: "Emetine", correct: true },
      { text: "Ofloxacin", correct: false },
      { text: "Midecamycin", correct: false },
    ],
  },
  {
    question: "What drug of choice for the treatment of trichomoniasis:",
    answers: [
      { text: "Co-trimoxazole", correct: false },
      { text: "Metronidazole", correct: true },
      { text: "Gentamicin", correct: false },
      { text: "Ampicillin", correct: false },
      { text: "Ceftriaxone", correct: false },
    ],
  },
  {
    question: "Which one of the following drug is a systemic amebicide?",
    answers: [
      { text: "Sodium stibogluconate", correct: false },
      { text: "Diloxanide furoate", correct: false },
      { text: "Pyrimethamine", correct: false },
      { text: "Emetine", correct: true },
      { text: "Metronidazole", correct: false },
    ],
  },
  {
    question: "Which one of the following drug used in the treatment of toxoplasmosis?",
    answers: [
      { text: "Sodium stibogluconate", correct: false },
      { text: "Diloxanide furoate", correct: false },
      { text: "Pyrimethamine", correct: true },
      { text: "Emetine", correct: false },
      { text: "Metronidazole", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs used in the treament of leishmaniasis?",
    answers: [
      { text: "Sodium stibogluconate", correct: true },
      { text: "Diloxanide furoate", correct: false },
      { text: "Pyrimethamine", correct: false },
      { text: "Emetine", correct: false },
      { text: "Metronidazole", correct: false },
    ],
  },
  {
    question: "After the acute infection, which of the following medications is given to treat the asymptomatic colonization state of E. histolytica?",
    answers: [
      { text: "Chloroquine", correct: false },
      { text: "Iodoquinol", correct: true },
      { text: "Metronidazole", correct: false },
      { text: "Primaquine", correct: false },
      { text: "Tinidazole", correct: false },
    ],
  },
  {
    question: "Which of the following agents is available as an oral therapy for the treatment of visceral leishmaniasis?",
    answers: [
      { text: "Artemether/lumefantrine", correct: false },
      { text: "Miltefosine", correct: true },
      { text: "Nitazoxanide", correct: false },
      { text: "Tinidazole", correct: false },
      { text: "Albendazole", correct: false },
    ],
  },
  {
    question: "An 18-year-old male is diagnosed with Chagas disease. Which medication would be the best for this patient?",
    answers: [
      { text: "Nifurtimox", correct: true },
      { text: "Suramin", correct: false },
      { text: "Sodium stibogluconate", correct: false },
      { text: "Metronidazole", correct: false },
      { text: "Pyrantel", correct: false },
    ],
  },
  {
    question: "Indicate the main clinical manifestations of malaria:",
    answers: [
      { text: "Hypertension", correct: false },
      { text: "Allergic reaction", correct: false },
      { text: "deafness", correct: true },
      { text: "hypotension", correct: false },
      { text: "dysbiosis", correct: false },
    ],
  },
  {
    question: "Which of the following antimicrobial drugs when taken with alcohol ,can cause a disulfiram-like reaction?",
    answers: [
      { text: "Cephalosporins", correct: false },
      { text: "Fluoroquinolones", correct: false },
      { text: "Metronidazole", correct: true },
      { text: "Aminoglycosides", correct: false },
      { text: "Tetracyclines", correct: false },
    ],
  },
  {
    question: "Disulfiram-like syndrome may develop after taken…",
    answers: [
      { text: "Nitroxoline", correct: false },
      { text: "Amoxicillin", correct: false },
      { text: "Metronidazole", correct: true },
      { text: "Furazolidone", correct: false },
      { text: "Gentamicin", correct: false },
    ],
  },
  {
    question: "Which one of the following statements about primaquine is correct?",
    answers: [
      { text: "It is effective against erythrocytic forms of malaria", correct: false },
      { text: "It is ineffective in treating relapsing vivax malaria", correct: false },
      { text: "High doses may produce corneal opacities", correct: false },
      { text: "Glucose 6-phosphate dehydrogenase deficient individuals are at risk for hemolytic anemia", correct: true },
      { text: "It is administered only by intravenouse route", correct: false },
    ],
  },
  {
    question: "Which group of antibiotics is used for intestinal amoebiasis?",
    answers: [
      { text: "Penicillins", correct: false },
      { text: "Tetracyclines", correct: true },
      { text: "Cephalosporins", correct: false },
      { text: "Macrolides", correct: false },
      { text: "Monobactams", correct: false },
    ],
  },
  {
    question: "Which of the following drug is effective in any localization Entamoeba histolytica?",
    answers: [
      { text: "Tetracylines", correct: false },
      { text: "Metronidazole", correct: true },
      { text: "Quinine", correct: false },
      { text: "Aminoglycosides", correct: false },
      { text: "Ethyl alcohol", correct: false },
    ],
  },
  {
    question: "Which of the following drug is effective for the treatment of trichomonadosis?",
    answers: [
      { text: "Hingamin", correct: true },
      { text: "Ethambutol", correct: false },
      { text: "Sulfadimezin", correct: false },
      { text: "Metronidazol", correct: false },
      { text: "Furatsilin", correct: false },
    ],
  },
  {
    question: "A group of collage students are travelling to a chloroquine-resistant malaria area for a mission trip. Which of the following medications can be used for both prevention and treatment of malaria in these students?",
    answers: [
      { text: "Pyrimethamine", correct: false },
      { text: "Artemisinin", correct: false },
      { text: "Atovaquone-proguanil", correct: true },
      { text: "Melarsoprol", correct: false },
      { text: "Metronidazole", correct: false },
    ],
  },
  {
    question: "Determine the chemotherapeutic agent.Spectrum of action:Dysenteric amoeba,Trichomonas, Giardia. Effective at all forms of amoebiasis. Causes aversion to alcohol.",
    answers: [
      { text: "Metronidazole", correct: true },
      { text: "Oxoline", correct: false },
      { text: "Hingamin", correct: false },
      { text: "Oxacillin", correct: false },
      { text: "Isoniazid", correct: false },
    ],
  },
  {
    question: "Which of the following drug used to treat malaria?It acts on erythrocyte forms  of Plasmodium.Is an alkacinchona bark loid.",
    answers: [
      { text: "Chloroquine", correct: false },
      { text: "Hingamin", correct: false },
      { text: "Akrikhin", correct: false },
      { text: "Quinine", correct: true },
      { text: "Primaquine", correct: false },
    ],
  },
  {
    question: "Which of the following medications should be started 1 week prior to travel to the tropics, continued for the duration of stay, and for 1 month after return, for malaria chemoprophylaxis?",
    answers: [
      { text: "Chloroquine", correct: true },
      { text: "Quinidine", correct: false },
      { text: "Quinine", correct: false },
      { text: "Sulfonamides", correct: false },
      { text: "Artimicilin", correct: false },
    ],
  },
  {
    question: "What is the purpose of combined (pyrimethamine + sulfadoxine, quinine, pyrimethamine and sulfadoxine) chemotherapy in the treatment of malaria?",
    answers: [
      { text: "In order to enhance the effect of P. falciparum resistance", correct: true },
      { text: "For primary prevention of malaria", correct: false },
      { text: "For secondary prevention of malaria", correct: false },
      { text: "To reduce the side effects of drugs", correct: false },
      { text: "For the treatment of malaria in children and pregnant women", correct: false },
    ],
  },
  {
    question: "What side effect is characteristic of sulfanilamide in the treatment of toxoplasmosis in pregnant women?",
    answers: [
      { text: "Steven-Johnson syndrome", correct: false },
      { text: "\"Grey baby\" syndrome", correct: false },
      { text: "Kernicterus", correct: true },
      { text: "\"Red man\" syndrome", correct: false },
      { text: "«Blue мan» syndrome", correct: false },
    ],
  },
  {
    question: "A 55-year-old man, who was about to leave for a vacation trip to central Africa, started a treatment with mefloquine. Which of the following plasmodia cells can be effectively killed by the drug?",
    answers: [
      { text: "P. Vivax hypnozoites", correct: false },
      { text: "P. Falciparum gametocytes", correct: false },
      { text: "P. Vivax tissue schizonts", correct: false },
      { text: "P. Falciparum hypnozoites", correct: false },
      { text: "P. Malarie blood schizonts", correct: true },
    ],
  },
  {
    question: "A 24-year-old woman, who was 22-week pregnant, presented with a 5-day history of loose stools containing bloody mucus. Her past medical history was significant for an optic neuritis one month ago, apparently due to a viral infection. Upon physical examination her abdomen was soft but nontender. The exam of fresh stools showed E. histolytica trophozoites. A CT scan was negative for gut wall or liver amebiasis. Which of the following drugs would be appropriate for this patient?",
    answers: [
      { text: ") Metronidazole", correct: true },
      { text: "Chloroquine", correct: false },
      { text: "Clindamycin", correct: false },
      { text: "Paromomycin", correct: false },
      { text: "Pyrimethamine", correct: false },
    ],
  },
  {
    question: "A 42-year-old man is being treated with atovaquone-proguanil for uncomplicated P. falciparum malaria. This combination product is preferred to the use of atovaquone alone because",
    answers: [
      { text: "Atovaquone improves the absorption of proguanil.", correct: false },
      { text: "Proguanil improves the absorption of atovaquone.", correct: false },
      { text: "There is a reduced risk of resistance.", correct: true },
      { text: "Proguanil decreases the clearance of atovaquone.", correct: false },
      { text: "Proguanil decreases the side effects of atovaquone.", correct: false },
    ],
  },
  {
    question: "A 36-year-old woman with the diagnosis of Trichomonas vaginalis returns to your office one day after receiving a 2 g oral dose of metronidazole with complaints of flushing, headache, vomiting, and abdominal pain. She states that her symptoms began after she and her husband celebrated their 10th wedding anniversary at a restaurant. The most likely cause of her symptoms is",
    answers: [
      { text: "Pork.", correct: false },
      { text: "Red wine.", correct: true },
      { text: "Coffee.", correct: false },
      { text: "Cabbage.", correct: false },
      { text: "Chocolate.", correct: false },
    ],
  },
  {
    question: "A 35-year-old man will be traveling to an area that is endemic for malaria. His physician starts him on an oral artemisinin derivative prior to his trip. This drug is likely to be ineffective as chemoprophylactic therapy because",
    answers: [
      { text: "Its effectiveness after oral administration is poor.", correct: false },
      { text: "Its side effects are so severe that compliance is unlikely", correct: false },
      { text: "It is likely to have cross-resistance with chloroquine", correct: false },
      { text: "Its active metabolite dihydro-artemisinin has a short plasma t½", correct: true },
      { text: "It is effective against only the blood stages of P. falciparum", correct: false },
    ],
  },
  {
    question: "Tick the group of antibiotics having natimalarial effect:",
    answers: [
      { text: "Aminoglycosides", correct: false },
      { text: "Tetracyclines", correct: true },
      { text: "Carbapenems", correct: false },
      { text: "Penicillins", correct: false },
      { text: "Monobactams", correct: false },
    ],
  },
  {
    question: "Which of the following drug used for malaria chemiprophylaxis and treatment?",
    answers: [
      { text: "Chloroquine", correct: true },
      { text: "Quinudine", correct: false },
      { text: "Quinine", correct: false },
      { text: "Sulfonamides", correct: false },
      { text: "Tetracycline", correct: false },
    ],
  },
  {
    question: "Which of the following drug used for toxoplasmosis treatment?",
    answers: [
      { text: "Chloroquine", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Suramin", correct: false },
      { text: "Pyrimethamine", correct: true },
      { text: "Qiunine", correct: false },
    ],
  },
  {
    question: "In the treatment of intestinal and extraintestinal amoebiasis which of the following drug is useful:",
    answers: [
      { text: "Metronidazole", correct: true },
      { text: "Cefaclor", correct: false },
      { text: "Chloroquine", correct: false },
      { text: "Diloxane", correct: false },
      { text: "Qiunine", correct: false },
    ],
  },
  {
    question: "Tick the drug of choice for the treatment of extraluminal amoebiasis?",
    answers: [
      { text: "Iodoquinol", correct: false },
      { text: "Metronidazole", correct: true },
      { text: "Diloxanide", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Emetine", correct: false },
    ],
  },
  {
    question: "Which of the following is the amebecide drug for the treatment of an asymptomatic intestinal form of amebiasis?",
    answers: [
      { text: "Chloroquine", correct: false },
      { text: "Diloxanide", correct: true },
      { text: "Emethine", correct: false },
      { text: "Doxycyline", correct: false },
      { text: "Metronidazole", correct: false },
    ],
  },
  {
    question: "Second line Anti T.B. drugs having-----",
    answers: [
      { text: "High efficacy & Low toxicity", correct: false },
      { text: "Low efficacy &Low toxicity", correct: false },
      { text: "Low efficacy &High toxicity", correct: true },
      { text: "High efficacy &High toxicity", correct: false },
      { text: "no efficacy &High toxicity", correct: false },
    ],
  },
  {
    question: "Which one of the following is a first line drug for TB treatment:",
    answers: [
      { text: "Pyrazinamide", correct: true },
      { text: "PASA", correct: false },
      { text: "Kanamycin", correct: false },
      { text: "Cycloserine", correct: false },
      { text: "Capreomycin", correct: false },
    ],
  },
  {
    question: "Which of the following is the most likely mechanism of resistance of M. tuberculosis to rifampin?",
    answers: [
      { text: "Loss of mycolic acid", correct: false },
      { text: "Altered bacterial RNA polymerase", correct: true },
      { text: "Increased bacterial acetylation of the drug", correct: false },
      { text: "Altered bacterial topoisomerase II", correct: false },
      { text: "Altered bacterial peptidyl-transferase", correct: false },
    ],
  },
  {
    question: "The mechanism of action of rifampin includes an inhibition of which of the following enzymes?",
    answers: [
      { text: "DNA dependent RNA-polymerase", correct: true },
      { text: "Arabinosyl transferase", correct: false },
      { text: "Transpeptidase", correct: false },
      { text: "Topoisomerase II", correct: false },
      { text: "RNA-dependent DNA-polymerase", correct: false },
    ],
  },
  {
    question: "High level of resistance of tubercle bacilli to isoniazid involves a decrease in the activity of which of the following enzymes?",
    answers: [
      { text: "Catalase-peroxidase", correct: true },
      { text: "Topoisomerase II", correct: false },
      { text: "Transpeptidase", correct: false },
      { text: "DNA-dependent RNA polymerase", correct: false },
      { text: "Acetyltransferase", correct: false },
    ],
  },
  {
    question: "Which of the following antimycobacterial drugs is inactivated by hepatic acetylation, the rate of which depends on genetic background?",
    answers: [
      { text: "Streptomycin", correct: false },
      { text: "Ethambutol", correct: false },
      { text: "Rifampin", correct: false },
      { text: "Isoniazid", correct: true },
      { text: "Pyrazinamide", correct: false },
    ],
  },
  {
    question: "What is the mechanism of action of rifampicin?",
    answers: [
      { text: "violates the synthesis of folic acid;", correct: false },
      { text: "disrupts the synthesis of murein of the bacterial wall", correct: false },
      { text: "disrupts the synthesis of nucleic acids", correct: true },
      { text: "causes disintegration of the membrane", correct: false },
      { text: "inhibits protein synthesis, preventing the formation of a complex of messenger RNA with messenger RNA on ribosomes.", correct: false },
    ],
  },
  {
    question: "Specify the anti-tuberculosis agent:",
    answers: [
      { text: "isoniazid", correct: true },
      { text: "urosulfan", correct: false },
      { text: "hingamine", correct: false },
      { text: "tinidazole", correct: false },
      { text: "oxolin", correct: false },
    ],
  },
  {
    question: "What is the most serious potential adverse effect of rifampin use?",
    answers: [
      { text: "Seizures", correct: false },
      { text: "Nephrotoxicity", correct: false },
      { text: "Liver failure", correct: true },
      { text: "Gastric ulceration or bleeding", correct: false },
      { text: "Dryness", correct: false },
    ],
  },
  {
    question: "What is rifampin's mechanism of action?",
    answers: [
      { text: "Inhibition of DNA gyrase", correct: false },
      { text: "Disruption of cell membranes", correct: false },
      { text: "Inhibition of the 30S subunit of bacterial ribosomes", correct: false },
      { text: "Inhibition of RNA polymerase", correct: true },
      { text: "Inhibition of topoisomerase II", correct: false },
    ],
  },
  {
    question: "A 24-year-old male has returned to the clinic for his 1-month check-up after starting treatment for tuberculosis. He is receiving isoniazid, rifampin, pyrazinamide, and ethambutol. He states he feels fine, but now is having difficulty reading his morning newspaper and feels he may need to get glasses. Which of the following drugs may be causing his decline in vision?",
    answers: [
      { text: "Isoniazid", correct: false },
      { text: "Rifampin", correct: false },
      { text: "Pyrazinamide", correct: false },
      { text: "Ethambutol", correct: true },
      { text: "Streptomycin", correct: false },
    ],
  },
  {
    question: "A 35-year-ol male, formerly a heroin abuse, has been on methadone maintenance for the last 13 months. Two weeks ago, he had a positive tuberculosis skin test, and a chest radiograph showed evidence of right upper lobe infection. He was started on standard four-drug antimycobacterial therapy. He has come to the emergency department complaining of “withdrawal symptoms”. Which of the following antimycobacterial drugs is likely to have caused this patient’s acute withdrawal reaction?",
    answers: [
      { text: "Ethambutol", correct: false },
      { text: "Isoniazid", correct: false },
      { text: "Pyrazinamide", correct: false },
      { text: "Rifampin", correct: true },
      { text: "Streptomycin", correct: false },
    ],
  },
  {
    question: "Which statement should the nurse include when teaching a patient about rifampin [Rifadin]?",
    answers: [
      { text: "\"A harmless side effect will be a red-orange discoloration of body fluids.\"", correct: true },
      { text: "\"Oral contraception is the preferred method of birth control when using rifampin.\"", correct: false },
      { text: "\"Take vitamin B6 to relieve numbness and tingling in the fingers and toes.\"", correct: false },
      { text: ". \"Treatment length for the medication is 3 times per day", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Specify a broad-spectrum antibiotic for the treatment of tuberculosis that is effective when taken orally.",
    answers: [
      { text: "streptomycin", correct: false },
      { text: "rifampicin", correct: true },
      { text: "ampicillin", correct: false },
      { text: "isoniazid", correct: false },
      { text: "para-aminosalicylic acid (PASK)", correct: false },
    ],
  },
  {
    question: "Identify the drug. Refers to first-line anti-tuberculosis drugs. It is a broad-spectrum antibiotic. It is practically not absorbed from the gastrointestinal tract. Side effects: hearing impairment, vestibular Disorder.",
    answers: [
      { text: "streptomycin", correct: true },
      { text: "rifampicin", correct: false },
      { text: "cycloserine", correct: false },
      { text: "isoniazid", correct: false },
      { text: "para-aminosalicylic acid (PASK)", correct: false },
    ],
  },
  {
    question: "A 31-year-old homosexual HIV-positive man was found to have latent tuberculosis. A treatment with isoniazid was started. The antibacterial effect of this drug is most likely mediated by the inhibition of the synthesis of which of the following molecules?",
    answers: [
      { text: "Mycolic acids", correct: true },
      { text: "Peptidoglycan", correct: false },
      { text: "Arabinogalactan", correct: false },
      { text: "Topoisomerase II", correct: false },
      { text: "DNA-dependent RNA polymerase", correct: false },
    ],
  },
  {
    question: "A 56-year-old man reports tingling sensation in his limbs and that his arms sometimes feel heavy. He was recently diagnosed with pulmonary tuberculosis and has been receiving isoniazid, rifampin, pyrazinamide and ethambutol for two months. Which of the following drugs would be most appropriate to treat his current symptoms?",
    answers: [
      { text: "Folic acid", correct: false },
      { text: "Cyanocobalamin", correct: false },
      { text: "Folinic acid", correct: false },
      { text: "Pyridoxine", correct: true },
      { text: "Vitamic C", correct: false },
    ],
  },
  {
    question: "A 63-year-old man presented to the hospital complaining of abdominal pain, and pain and stiffness in several joints. He was recently diagnosed with renal tuberculosis and started on a regimen of 4 antitubercular drugs one month ago. Lab results showed raised serum uric acid of 13 mg /dl. Which of the following drugs has most likely caused the patient's current symptoms?",
    answers: [
      { text: "Rifampin", correct: false },
      { text: "Pyrazinamide", correct: true },
      { text: "Isoniazid", correct: false },
      { text: "Streptomycin", correct: false },
      { text: "Azithromycin", correct: false },
    ],
  },
  {
    question: "A 7-year-old girl is admitted to the hospital with high fever and nuchal rigidity, later diagnosed with meningococcal meningitis. Which of the following drugs would most likely be given prophylactically to her 10 year old sister?",
    answers: [
      { text: "Amikacin", correct: false },
      { text: "Isoniazid", correct: false },
      { text: "Rifampin", correct: true },
      { text: "Piperacillin", correct: false },
      { text: "Nafcillin", correct: false },
    ],
  },
  {
    question: "A 67-year-old man, recently diagnosed with pulmonary tuberculosis, is started on a treatment with antitubercular drugs. The man has been suffering from atrial fibrillation, and he is presently taking warfarin as one his drugs. At this point, which of the following changes in the therapeutic regimen of the patient would be most appropriate?",
    answers: [
      { text: "To increase the dose of warfarin", correct: true },
      { text: "To reduce the dose of isoniazid", correct: false },
      { text: "To increase the dose of rifampin", correct: false },
      { text: "To stop pyrazinamide", correct: false },
      { text: "To stop isoniazid", correct: false },
    ],
  },
  {
    question: "A 45-year-old woman complained of blurred vision and inability to distinguish green objects from red objects. The woman, recently diagnosed with cavitary pulmonary tuberculosis, has been receiving a 4 drug combination regimen for two months. Which of the following drugs has most likely caused these adverse effects?",
    answers: [
      { text: "Isoniazid", correct: false },
      { text: "Rifampin", correct: false },
      { text: "Streptomycin", correct: false },
      { text: "Pyrazinamide", correct: false },
      { text: "Ethambutol", correct: true },
    ],
  },
  {
    question: "A 37-year-old homosexual man with AIDS was recently diagnosed with pulmonary tuberculosis and a treatment with isoniazid, rifampin, pyrazinamide and ethambutol was started. Which of the following statements best explains why ethambutol was added to the therapeutic regimen?",
    answers: [
      { text: "To enhance the antibacterial activity of pyrazinamide", correct: false },
      { text: "To prevent the neurotoxic effects of isoniazid", correct: false },
      { text: "To delay the emergence of drug resistance", correct: true },
      { text: "To provide antibacterial activity against atypical mycobacteria", correct: false },
      { text: "To prevent Pneumocystis carinii pneumonia", correct: false },
    ],
  },
  {
    question: "A 32-year-old woman, who was HIV positive, presented with fever, profuse night sweats, poor appetite and a 20-pound weight loss over the past 3 months. Physical examination revealed a cachectic female with a prominent oral thrust and mild splenomegaly. Her CD4+ lymphocyte count was 45 cells/mm and a DNA probe test confirmed the diagnosis of Mycobacterium Avium complex infection. An appropriate multidrug regimen for this patient would include which of the following drugs?",
    answers: [
      { text: "Ceftriaxone", correct: false },
      { text: "Metronidazole", correct: false },
      { text: "Vancomycin", correct: false },
      { text: "Doxycycline", correct: false },
      { text: "Azithromycin", correct: true },
    ],
  },
  {
    question: "Which of the following drugs is likely to damage the eighth cranial nerve when administered for a long period of time?",
    answers: [
      { text: "Ethambutol", correct: false },
      { text: "Isoniazid", correct: false },
      { text: "Rifampin", correct: false },
      { text: "Streptomycin", correct: true },
      { text: "Cycloserine", correct: false },
    ],
  },
  {
    question: "The drug which is metabolized by acetylation is?",
    answers: [
      { text: "Rifampicin", correct: false },
      { text: "Ethambutol", correct: false },
      { text: "Dapsone", correct: false },
      { text: "Isoniazid", correct: true },
      { text: "Ethionamide", correct: false },
    ],
  },
  {
    question: "Which of the following causes bone marrow suppression?",
    answers: [
      { text: "Ethionamide", correct: false },
      { text: "Streptomycine", correct: false },
      { text: "Cycloserine", correct: false },
      { text: "Rifambutin", correct: false },
      { text: "Linezolid", correct: true },
    ],
  },
  {
    question: "Peripheral  neuritis is a complication of:",
    answers: [
      { text: "Rifampicin", correct: false },
      { text: "Ethambutol", correct: false },
      { text: "Pirazinamide", correct: false },
      { text: "Isoniazid", correct: true },
      { text: "Ethionamide", correct: false },
    ],
  },
  {
    question: "The drug which gives orange colour to the urine is:",
    answers: [
      { text: "Streptomycin", correct: false },
      { text: "INH", correct: false },
      { text: "Rifampicin", correct: false },
      { text: "Ethambutol", correct: true },
      { text: "Isoniazid", correct: false },
    ],
  },
  {
    question: "Combination chemotherapy is used in tuberculosis in order to reduce:",
    answers: [
      { text: "Dosage of drugs", correct: false },
      { text: "Side effects of drugs", correct: false },
      { text: "Cost of therapy", correct: false },
      { text: "Development of drug resistance", correct: true },
      { text: "Clinical symptoms", correct: false },
    ],
  },
  {
    question: "Aminoglycoside agent useful in management of tuberculosis?",
    answers: [
      { text: "Ethionamide", correct: false },
      { text: "Ethambutol", correct: false },
      { text: "Streptomycin", correct: true },
      { text: "Isoniazid", correct: false },
      { text: "Cycloserine", correct: false },
    ],
  },
  {
    question: "Which of the following drug, inhibiting oxidative phosphorylation in some species of helminthes:",
    answers: [
      { text: "Niclosamide", correct: true },
      { text: "Piperazine", correct: false },
      { text: "Praziquantel", correct: false },
      { text: "Mebendazole", correct: false },
      { text: "Levamisole", correct: false },
    ],
  },
  {
    question: "Tick the drug for trematodosis (fluke invasion) treatment:",
    answers: [
      { text: "Bithionol", correct: true },
      { text: "Ivermectin", correct: false },
      { text: "Pyrantel", correct: false },
      { text: "Metronidazole", correct: false },
      { text: "Piperazine", correct: false },
    ],
  },
  {
    question: "Which of the following drug, a salicylamide derivative?",
    answers: [
      { text: "Praziquantel", correct: false },
      { text: "Piperazine", correct: false },
      { text: "Mebendazole", correct: false },
      { text: "Niclosamide", correct: true },
      { text: "Albendazole", correct: false },
    ],
  },
  {
    question: "Which of the following drug for strongiloidosis treatment:",
    answers: [
      { text: "Niclosamide", correct: false },
      { text: "Praziquantel", correct: false },
      { text: "Bithionol", correct: false },
      { text: "Ivermectin", correct: true },
      { text: "Piperazine", correct: false },
    ],
  },
  {
    question: "Tick the drug for echinococcosis treatment:",
    answers: [
      { text: "Suramin", correct: false },
      { text: "Mebendazole or Albendazole", correct: true },
      { text: "Piperazine", correct: false },
      { text: "Iodoquino", correct: false },
      { text: "Bithionol", correct: false },
    ],
  },
  {
    question: "Tick the drug for strongiloidosis treatment:",
    answers: [
      { text: "Niclosamide", correct: false },
      { text: "Praziquantel", correct: false },
      { text: "Bithionol", correct: false },
      { text: "Ivermectin", correct: true },
      { text: "Piperazine", correct: false },
    ],
  },
  {
    question: "First line of defense against giardia.",
    answers: [
      { text: "Metronidazole", correct: true },
      { text: "Amprolium", correct: false },
      { text: "Monensin", correct: false },
      { text: "Decoquinate", correct: false },
      { text: "Sulfadimethoxine", correct: false },
    ],
  },
  {
    question: "Which of the following  drug for ascaridosis and enterobiosis treatment:",
    answers: [
      { text: "Bithionol", correct: false },
      { text: "Pyrantel", correct: true },
      { text: "Praziquantel", correct: false },
      { text: "Suramin", correct: false },
      { text: "Ivermectin", correct: false },
    ],
  },
  {
    question: "Drug of choice for the treatment of most tapeworm infections",
    answers: [
      { text: "Mebendazole", correct: false },
      { text: "Praziquantel", correct: false },
      { text: "Niclosamide", correct: true },
      { text: "Pyrantel Pamoate", correct: false },
      { text: "Thiabendazole", correct: false },
    ],
  },
  {
    question: "A drug of choice for the treatment of all forms of schistosomiasis",
    answers: [
      { text: "Mebendazole", correct: false },
      { text: "Praziquantel", correct: true },
      { text: "Niclosamide", correct: false },
      { text: "Pyrantel Pamoate", correct: false },
      { text: "Thiabendazole", correct: false },
    ],
  },
  {
    question: "Which of the following medications inhibits the phosphorylation of adenosine diphosphate?",
    answers: [
      { text: "Albendazole", correct: false },
      { text: "Mebendazole", correct: false },
      { text: "Niclosamide", correct: true },
      { text: "Praziquantel", correct: false },
      { text: "Ivermectin", correct: false },
    ],
  },
  {
    question: "Which of the following drugs used to treat river blindness targets chloride channels and can cause a Mazzotti reaction?",
    answers: [
      { text: "Ivermectin", correct: true },
      { text: "Praziquantel", correct: false },
      { text: "Pyrantel pamoate", correct: false },
      { text: "Albendazole", correct: false },
      { text: "Mebendazole", correct: false },
    ],
  },
  {
    question: "A 48-year-old immigrant from Mexico presents with seizures and other neurologic symptoms. Eggs of T. solium are found upon examination of a stool specimen. A magnetic resonance image of the brain shows many cysts, some of which are calcified. Which one of the following drugs would be of benefit to this individual?",
    answers: [
      { text: "Ivermectin", correct: false },
      { text: "Pyrantel pamoate", correct: false },
      { text: "Albendazole", correct: true },
      { text: "Diethylcarbamazine", correct: false },
      { text: "Niclosamide", correct: false },
    ],
  },
  {
    question: "Which of the following drugs affects microtubular function in roundworm, pinworm and hookworm?",
    answers: [
      { text: "Mebendazole", correct: true },
      { text: "Praziquantel", correct: false },
      { text: "Niclosamide", correct: false },
      { text: "Pyrantel Pamoate", correct: false },
      { text: "Thiabendazole", correct: false },
    ],
  },
  {
    question: "Which of the following drug acts as a depolarizing neuromuscular blocking agent?",
    answers: [
      { text: "Mebendazole", correct: false },
      { text: "Praziquantel", correct: false },
      { text: "Niclosamide", correct: false },
      { text: "Pyrantel Pamoate", correct: true },
      { text: "Thiabendazole", correct: false },
    ],
  },
  {
    question: "Praziquantel is effective in treating blood fluke infections because of its ability to",
    answers: [
      { text: "block voltage-gated calcium channels", correct: false },
      { text: "induce muscle contracture and paralysis", correct: true },
      { text: "open chloride ion channels", correct: false },
      { text: "inhibit tubulin polymerization", correct: false },
      { text: "prevent glucose uptake", correct: false },
    ],
  },
  {
    question: "Which of the following  drug acts by inhibiting oxidative phosphorylation in some species of helminthes?",
    answers: [
      { text: "Niclosamide", correct: true },
      { text: "Piperazine", correct: false },
      { text: "Praziquantel", correct: false },
      { text: "Mebendazole", correct: false },
      { text: "Praziquantel", correct: false },
    ],
  },
  {
    question: "Which of the following  is broad spectrum drug for cestodosis, trematodosis and cycticercosis treatment:",
    answers: [
      { text: "Piperazine", correct: false },
      { text: "Ivermectine", correct: false },
      { text: "Praziquantel", correct: true },
      { text: "Pyrantel", correct: false },
      { text: "Bithionol", correct: false },
    ],
  },
  {
    question: "Determine the drug. It inhibits oxidative phosphorylation in cestodes and  paralyzes them.Reduces the resistance of helminths to proteolytic enzymes in the GIT.Contraindicated for Taeniasis,due to the risk of developing cysticercosis.",
    answers: [
      { text: "Levamisole", correct: false },
      { text: "Pyrentel pamoate", correct: false },
      { text: "Fenasal", correct: true },
      { text: "Piperazine adipate", correct: false },
      { text: "Mebendazole", correct: false },
    ],
  },
  {
    question: "A 56-year-old man from South America is found to be parasitized by both schistosomes and T. solium – the pork tapeworm. Which of the following anthelmintic drugs would be effective for both infestations?",
    answers: [
      { text: "Albendazole", correct: false },
      { text: "Ivermectin", correct: false },
      { text: "Mebendazole", correct: false },
      { text: "Praziquantel", correct: true },
      { text: "Niclosamide", correct: false },
    ],
  },
  {
    question: "Determine the drug. Has anthelmintic action.It is used to treat intestinal nematodes.Especially effective in ascariasis.Has an immunostimulatory effect.",
    answers: [
      { text: "Piperazine adipate", correct: false },
      { text: "Mebendazole", correct: false },
      { text: "Levamisole", correct: true },
      { text: "Praziquantel", correct: false },
      { text: "Chloxyl", correct: false },
    ],
  },
  {
    question: "A 4-year-old boy is brought into your office because of a possible pinworm infection. Examination of the anal area confirms the diagnosis of Enterobius (pinworm). Which of the following drugs would you recommend to treat this infection?",
    answers: [
      { text: "DEC", correct: false },
      { text: "Metrifonate", correct: false },
      { text: "Medbendazole", correct: true },
      { text: "nan", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 25-year-old woman immigrant from Guatemala is diagnosed with Taenia solium (pork tapeworm) upon examination of a stool specimen. Tests reveal that she has cysticercosis although a magnetic resonance image of the brain with a contrast agent shows no signs of neurocysticercosis. Which of the following drugs would be appropriate for her treatment?",
    answers: [
      { text: "Ivermectin", correct: false },
      { text: "Albendazole", correct: true },
      { text: "Pyrantel pamoate", correct: false },
      { text: "Metrifonate", correct: false },
      { text: "DEC", correct: false },
    ],
  },
  {
    question: "A 4-year-old boy is brought into your office because of a possible pinworm infection. Examination of the anal area confirms the diagnosis of Enterobius (pinworm). Which of the following drugs would you recommend to treat this infection?",
    answers: [
      { text: "DEC", correct: false },
      { text: "Ivermectin", correct: false },
      { text: "Metrifonate", correct: false },
      { text: "Pyrantel pamoate", correct: true },
      { text: "Praziquantel", correct: false },
    ],
  },
  {
    question: "Anthelmintic drugs should be given?",
    answers: [
      { text: "In the morning", correct: false },
      { text: "At the bed time", correct: true },
      { text: "At any time", correct: false },
      { text: "Avoid treatment", correct: false },
      { text: "at lunch time", correct: false },
    ],
  },
  {
    question: "Which of the following drug is broad spectrum for cestodosis, trematodosis and cycticercosis treatment?",
    answers: [
      { text: "Piperazine", correct: false },
      { text: "Ivermectine", correct: false },
      { text: "Praziquantel", correct: true },
      { text: "Pyrental", correct: false },
      { text: "Bithionol", correct: false },
    ],
  },
  {
    question: "Which of the following drug is a benzimidazole derivative:",
    answers: [
      { text: "Praziquantel", correct: false },
      { text: "Mebendazole", correct: true },
      { text: "Suramin", correct: false },
      { text: "Pyrental", correct: false },
      { text: "Ivermectine", correct: false },
    ],
  },
  {
    question: "Tick the drug inhibiting oxidative phosphorylation in some species of helminthes:",
    answers: [
      { text: "Niclosamide", correct: true },
      { text: "Piperazine", correct: false },
      { text: "Praziquantel", correct: false },
      { text: "Mebendazole", correct: false },
      { text: "Albendazole", correct: false },
    ],
  },
  {
    question: "Which of the following drug is used to treat herpes infection?",
    answers: [
      { text: "Metisazon", correct: false },
      { text: "Acyclovir", correct: true },
      { text: "Arbidol", correct: false },
      { text: "Rimantidine", correct: false },
      { text: "Zidovudine", correct: false },
    ],
  },
  {
    question: "Which of the following drug is used for the prevention and treatment of influenza?",
    answers: [
      { text: "Rimantidine", correct: true },
      { text: "Metisazon", correct: false },
      { text: "Acyclovir", correct: false },
      { text: "Idoxuridine", correct: false },
      { text: "Zidovudine", correct: false },
    ],
  },
  {
    question: "Which of the following drug with the widest spectrum of antiviral action?",
    answers: [
      { text: "Metisazon", correct: false },
      { text: "Midantan", correct: false },
      { text: "Oxolin", correct: false },
      { text: "Idoxuridine", correct: false },
      { text: "Interferon", correct: true },
    ],
  },
  {
    question: "Which of the following drug is used for the prevention of influenza?",
    answers: [
      { text: "Chlorine", correct: false },
      { text: "Metronidazole", correct: false },
      { text: "Rimantadine", correct: true },
      { text: "Difenin", correct: false },
      { text: "Phenobarbital", correct: false },
    ],
  },
  {
    question: "Antiviral agents include:",
    answers: [
      { text: "Amphotericin B", correct: false },
      { text: "Quinine sulfate", correct: false },
      { text: "Piperazine adipate", correct: false },
      { text: "Arbidol", correct: true },
      { text: "Isoniazid", correct: false },
    ],
  },
  {
    question: "Which of the following antiviral drug is used to treat influenza A?",
    answers: [
      { text: "Dextran sulfate", correct: false },
      { text: "Amantadine", correct: true },
      { text: "Ganciclovir", correct: false },
      { text: "Cidofovir", correct: false },
      { text: "Acyclovir", correct: false },
    ],
  },
  {
    question: "Which of the following is used to treat CMV infections?",
    answers: [
      { text: "Foscarnet", correct: true },
      { text: "Saquinavir", correct: false },
      { text: "Ritonavir", correct: false },
      { text: "Nelfinavir", correct: false },
      { text: "Acyclovir", correct: false },
    ],
  },
  {
    question: "Which of the following is used to treat genital herpes infections?",
    answers: [
      { text: "Penciclovir", correct: true },
      { text: "Pleconaril", correct: false },
      { text: "Oseltamivir", correct: false },
      { text: "Efavirenz", correct: false },
      { text: "Cidofovir", correct: false },
    ],
  },
  {
    question: "Which drug is used in the treatment of cytomegalovirus infections in immunocompromised patients?",
    answers: [
      { text: "Amantadine", correct: false },
      { text: "Zidovudine", correct: false },
      { text: "Ribavirin", correct: false },
      { text: "Vidarabine", correct: false },
      { text: "Ganciclovir", correct: true },
    ],
  },
  {
    question: "Which drug is used solely in the treatment of influenza A infections?",
    answers: [
      { text: "Amantadine", correct: true },
      { text: "Zidovudine", correct: false },
      { text: "Ribavirin", correct: false },
      { text: "Vidarabine", correct: false },
      { text: "Ganciclovir", correct: false },
    ],
  },
  {
    question: "Which of the antifungal drugs should be avoided in patients with evidence of ventricular dysfunction?",
    answers: [
      { text: "Micafungin", correct: false },
      { text: "Itraconazole", correct: true },
      { text: "Terbinafine", correct: false },
      { text: "Posaconazole", correct: false },
      { text: "Ketoconazole", correct: false },
    ],
  },
  {
    question: "Which of the following antifungal drugs is most likely to cause renal insufficiency?",
    answers: [
      { text: "Fluconazole", correct: false },
      { text: "Amphotericin B", correct: true },
      { text: "Itraconazole", correct: false },
      { text: "Posaconazole", correct: false },
      { text: "Terbinafine", correct: false },
    ],
  },
  {
    question: "Which one of the following antiviral agents exhibits the greatest selective toxicity for the invading virus?",
    answers: [
      { text: "Interferon", correct: false },
      { text: "Amantadine", correct: false },
      { text: "Acyclovir", correct: true },
      { text: "Zidovudine", correct: false },
      { text: "Ribavirin", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs is an adenosine analog that is active against all members of the herpesvirus group that infects humans?",
    answers: [
      { text: "Amantadine", correct: false },
      { text: "Zidovudine", correct: false },
      { text: "Ribavirin", correct: false },
      { text: "Vidarabine", correct: true },
      { text: "Ganciclovir", correct: false },
    ],
  },
  {
    question: "Which of the following drug with antiviral properties can be used as an antiparkinsonian agent?",
    answers: [
      { text: "Zidovudine", correct: false },
      { text: "Amantadine", correct: true },
      { text: "Arbidol", correct: false },
      { text: "Cycloferon", correct: false },
      { text: "Acyclovir", correct: false },
    ],
  },
  {
    question: "A 35 years-old man with AIDS started a therapy that included a combinant ion of lopinavir. Which of the following statements best explains the main reason for this combination regimen?",
    answers: [
      { text: "Lopinavir prevents ritonavir resistant", correct: false },
      { text: "Lopinavir inhibits ritonavir metabolism", correct: false },
      { text: "Lopinavir enhances ritonavir intestinal absorption", correct: false },
      { text: "Ritonavir prevents lopinavir resistant", correct: false },
      { text: "Ritonavir inhibits lopinavir metabolism", correct: true },
    ],
  },
  {
    question: "A 43-year-old woman with AIDS started a highly act ive antiretroviral therapy with zidovudine, lamivudine, and atazanavir.Which of the following reasons best explains animportant rationale for triple therapy in AIDS patients?",
    answers: [
      { text: "To dest roy both the replicat ing and nonreplicating viralgenome", correct: false },
      { text: "To increase the half-life of any one of the agents", correct: false },
      { text: "To delay the appearance of drug resistance", correct: true },
      { text: "To inhibit each other’s drug metabolism", correct: false },
      { text: "To expand the antimicrobial e cacy to opportunisticinfections", correct: false },
    ],
  },
  {
    question: "A 25-year-old man recen tly diagnosed with AIDS started anantiretroviral therapy that included atazanavir. Which of thefollowing steps of the viral growth cycle was primarily inhibitedby this drug?",
    answers: [
      { text: "Entry", correct: false },
      { text: "Uncoating", correct: false },
      { text: "Transcription", correct: false },
      { text: "Translation", correct: false },
      { text: "Proteolytic cleavage", correct: true },
    ],
  },
  {
    question: "A 34-year-old woman with AIDS had been taking an antiretroviraltherapy that included zalcitabine and stavudine.Which of the following adverse e ects would be predictedto be most likely, as it is shared by both drugs?",
    answers: [
      { text: "Nephrolithiasis", correct: false },
      { text: "Myelosuppression", correct: false },
      { text: "Hallucinat ions", correct: false },
      { text: "Peripheral neuropathy", correct: true },
      { text: "Altered body fat dist ribution", correct: false },
    ],
  },
  {
    question: "A 35-year-old patient with HIV infection is being started on 3 drugs in combination. The primary reason he is started on 3 drugs rather than 1 is",
    answers: [
      { text: "The drugs only come in combinations of 3", correct: false },
      { text: "The potential for reducing toxicity", correct: false },
      { text: "Preventing resistance to monotherapy", correct: true },
      { text: "A decrease in urinary excretion of each drug.", correct: false },
      { text: "Enhanced antiviral effect of each drug", correct: false },
    ],
  },
  {
    question: "A 30-year-old male patient with human immunodeficiency virus infection is being treated with a highly active antiretroviral therapy regimen. Four weeks after initiating therapy, he presents to the emergency department complaining of fever, rash, and gastrointestinal upset. Which of the following drugs is most likely to cause of his syndrome?",
    answers: [
      { text: "Zidovudine", correct: false },
      { text: "Nelfinavir", correct: false },
      { text: "Abacavir", correct: true },
      { text: "Efavirenz", correct: false },
      { text: "Darunavir", correct: false },
    ],
  },
  {
    question: "A 75-years-old patient with chronic obstructive pulmonary disease is diagnosed with suspected influenza based on his compliance of flu-like symptoms that began 24 hours ago. Which of the following agents is moat appropriate to initiate for the treatment of influenza?",
    answers: [
      { text: "Ribavirin", correct: false },
      { text: "Oseltamivir", correct: true },
      { text: "Zanamivir", correct: false },
      { text: "Rimantadine", correct: false },
      { text: "Amantadine", correct: false },
    ],
  },
  {
    question: "A 24-year-old female is diagnosed with genital herpes simplex virus infection. Which of the following agents is indicated for use in this diagnosis?",
    answers: [
      { text: "Valaciclovir", correct: true },
      { text: "Cidofovir", correct: false },
      { text: "Ganciclovir", correct: false },
      { text: "Zanamivir", correct: false },
      { text: "Lamivudine", correct: false },
    ],
  },
  {
    question: "A female patient who is being treated for chronic hepatic B develops nephrotoxicity while on treatment. Which is the most likely medication she is taking for HBV treatment?",
    answers: [
      { text: "Entecavir", correct: false },
      { text: "Telbivudine", correct: false },
      { text: "Lamivudine", correct: false },
      { text: "Adefovir", correct: true },
      { text: "Valaciclovir", correct: false },
    ],
  },
  {
    question: "A 36-year-old woman has been diagnosed with chronic hepatitis C. She is prescribed oral ribavirin in combination with which of the following agents for her treatment?",
    answers: [
      { text: "Tenofovir", correct: false },
      { text: "PegINF alpha-2A", correct: true },
      { text: "Enfuvirtide", correct: false },
      { text: "Cidofovir", correct: false },
      { text: "Telbivudine", correct: false },
    ],
  },
  {
    question: "A 33-year-old woman with AIDS was recently diagnosed with cytomegalovirus retinitis. The ophthalmologist prescribed a drug that must be phosphorylated by virus-speci enzymes, then by host cell enzymes to become active. Which of the following drug was most likely given?",
    answers: [
      { text: "Foscarnet", correct: false },
      { text: "Ribavirin", correct: false },
      { text: "Ganciclovir", correct: true },
      { text: "Acyclovir", correct: false },
      { text: "Vidarabine", correct: false },
    ],
  },
  {
    question: "A 34-year-old man presented to the clinic with jaundice and complaints of incapacitating fatigue and vague intermittent abdominal pain for the past month. The patient had a historyof intravenous drug abuse and alcohol abuse. Hepatitis serologic tests were positive for hepatitis B surface antigen. Which of the following drugs would be appropriate for this patients?",
    answers: [
      { text: "Enfuvirtide", correct: false },
      { text: "Atazanavir", correct: false },
      { text: "Amantadine", correct: false },
      { text: "Interferone alfa-2a", correct: true },
      { text: "Ganciclovir", correct: false },
    ],
  },
  {
    question: "A 56-year-old man su ering from viral hepatitis B had starteda t reatment with interferon alfa-2a, but 9 months later, hewas st ill posit ive for hepat it is B early ant igen. The gast roenterologistdecided to stop interferon and start anotherdrug. Which of the following drugs would be appropriate forthe patient at this time?",
    answers: [
      { text: "Ganciclovir", correct: false },
      { text: "Lopinavir", correct: false },
      { text: "Raltegravir", correct: false },
      { text: "Lamivudine", correct: true },
      { text: "Didanosine", correct: false },
    ],
  },
  {
    question: "A 35-year-old man recently diagnosed with herpes simplexkeratitis started a topical therapy with eye drops. Which ofthe following drugs would be appropriate for this patient?",
    answers: [
      { text: "Adefovir", correct: false },
      { text: "Lopinavir", correct: false },
      { text: "Nevirapine", correct: false },
      { text: "Zidovudine", correct: false },
      { text: "Triuridine", correct: true },
    ],
  },
  {
    question: "A 39-year-old man with AIDS was taking an antiretroviraltherapy that included a drug with a pronounced inhibitorye ect on CYP3A4. Which of the following drugs most likelyhas this inhibitory act ion?",
    answers: [
      { text: "Atazanavir", correct: false },
      { text: "Zidovudine", correct: false },
      { text: "Lamivudine", correct: false },
      { text: "Ritonavir", correct: true },
      { text: "Enfuvirtide", correct: false },
    ],
  },
  {
    question: "Regarding mechanisms of antiviral drug action:",
    answers: [
      { text: "Blockage of viral uncoating is caused by rifampicin", correct: true },
      { text: "Zidovudine is a protease inhibitor", correct: false },
      { text: "Amantadine blocks viral DNA packaging and assembly", correct: false },
      { text: "Indinavir is a reverse transcriptase inhibitor", correct: false },
      { text: "Acyclovir inhibits viral DNA synthesis", correct: false },
    ],
  },
  {
    question: "Which of the following is useful topically for genital herpes infection?",
    answers: [
      { text: "Acyclovir", correct: true },
      { text: "Amantadine", correct: false },
      { text: "Ritonavir", correct: false },
      { text: "Trifluridine", correct: false },
      { text: "Foscarnet", correct: false },
    ],
  },
  {
    question: "The toxic effect of amphotericin B definitely require reduction of dose is:",
    answers: [
      { text: "Myelosuppression", correct: false },
      { text: "Hepatitis", correct: false },
      { text: "Renal toxicity", correct: true },
      { text: "Hypotension", correct: false },
      { text: "Infusion-related adverse effects", correct: false },
    ],
  },
  {
    question: "30-year-old male patient with human immuno- deficiency virus infection is being treated with a HAART (highly active antiretroviral therapy) regimen. Four weeks after initiating therapy, he presents to the emergency department complaining of fever, rash, and gastrointestinal upset. Which one of the following drugs is most likely the cause of his symptoms?",
    answers: [
      { text: "Zidovudine", correct: false },
      { text: "Nelfinavir", correct: false },
      { text: "Abacavir", correct: true },
      { text: "Efavirenz", correct: false },
      { text: "Darunavir", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs has hypersensitivity reaction characterised by fever, rash, & GI upset?",
    answers: [
      { text: "Zidovudine", correct: false },
      { text: "Nelfinavir", correct: false },
      { text: "Abacavir", correct: true },
      { text: "Efavirenz", correct: false },
      { text: "Darunavir", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is prohibited in influenza if a person is diagnosed with chronic obstructive pulmonary disease?",
    answers: [
      { text: "Ribavirin.", correct: false },
      { text: "Oseltamivir.", correct: false },
      { text: "Zanamivir.", correct: true },
      { text: "Rimantadine", correct: false },
      { text: "Amantadine", correct: false },
    ],
  },
  {
    question: "A 24-year-old female is diagnosed with genital herpes simplex virus infection. Which of the following agents is indicated for use in this diagnosis?",
    answers: [
      { text: "Valacyclovir", correct: true },
      { text: "Cidofovir", correct: false },
      { text: "Ganciclovir", correct: false },
      { text: "Zanamivir", correct: false },
      { text: "Lamivudine", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs is metabolized to a cytotoxic product?",
    answers: [
      { text: "Vincristine", correct: false },
      { text: "Dactinomycin", correct: false },
      { text: "5-Fluorouracil", correct: true },
      { text: "Lomustine", correct: false },
      { text: "Paclitaxel", correct: false },
    ],
  },
  {
    question: "Anticancer drugs include:",
    answers: [
      { text: "Methotrexate", correct: true },
      { text: "Pentoxyl", correct: false },
      { text: "Ferkoven", correct: false },
      { text: "Piperazine adipate", correct: false },
      { text: "Quinine sulfate", correct: false },
    ],
  },
  {
    question: "A 53-year-old woman with breast cancer is being treated with tamoxifen. Tamoxifen is a(n)",
    answers: [
      { text: "Inhibitor of 5α-reductase.", correct: false },
      { text: "Selective estrogen receptor modulator.", correct: true },
      { text: "Inhibitor of aromatase.", correct: false },
      { text: "Progesterone antagonist.", correct: false },
      { text: "Androgen agonist.", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is antidote of Methotrexate?",
    answers: [
      { text: "Allopurinol", correct: false },
      { text: "Vincomycin", correct: false },
      { text: "Warfarin", correct: false },
      { text: "Naloxone", correct: false },
      { text: "Leucovorin", correct: true },
    ],
  },
  {
    question: "Which of the following toxiciti is common to most anticancer drugs",
    answers: [
      { text: "Bone marrow suppression", correct: true },
      { text: "Paresthesias", correct: false },
      { text: "Pulmonary fibrosis", correct: false },
      { text: "Renal dysfunction", correct: false },
      { text: "Cardiomyopathy", correct: false },
    ],
  },
  {
    question: "Which of the following toxiciti is common to most anticancer drugs",
    answers: [
      { text: "Hemorrhagic cystitis", correct: false },
      { text: "Nausea and vomiting", correct: true },
      { text: "Paresthesias", correct: false },
      { text: "Cardiomyopathy", correct: false },
      { text: "Pulmonary fibrosis", correct: false },
    ],
  },
  {
    question: "Which of the following toxiciti is common to most anticancer drugs",
    answers: [
      { text: "Hemorrhagic cystitis", correct: false },
      { text: "Paresthesias", correct: false },
      { text: "Alopecia", correct: true },
      { text: "Cardiomyopathy", correct: false },
      { text: "Pulmonary fibrosis", correct: false },
    ],
  },
  {
    question: "Bleomysocin, etoposide and teniposide act on which phase of the cell cycle?",
    answers: [
      { text: "G2", correct: true },
      { text: "G1", correct: false },
      { text: "G0", correct: false },
      { text: "M", correct: false },
      { text: "S", correct: false },
    ],
  },
  {
    question: "Cisplatin is a(n)",
    answers: [
      { text: "Alkylating drug", correct: true },
      { text: "DNA synthesis inhibitor", correct: false },
      { text: "Microbial product", correct: false },
      { text: "Mitotic inhibitor", correct: false },
      { text: "Antimetabolite", correct: false },
    ],
  },
  {
    question: "Doxorubicin, bleomycin, vinbastine and dacarbazine are treatments for",
    answers: [
      { text: "Breast cancer", correct: false },
      { text: "Testicular cancer", correct: false },
      { text: "Hodgkin's disease", correct: true },
      { text: "Ovarian cancer", correct: false },
      { text: "Rectal cancer", correct: false },
    ],
  },
  {
    question: "Cells resistant to methotrexate may:",
    answers: [
      { text: "have higher than normal levels of dihydrofolate reductase", correct: true },
      { text: "have higher levels of formyltetrahydrofolate", correct: false },
      { text: "metabolize the drug to inactive products", correct: false },
      { text: "have a decreased metabolic need for folate", correct: false },
      { text: "show an increased uptake of methotrexate", correct: false },
    ],
  },
  {
    question: "Determine an antitumor agent. Antimetabolite. Supresses the activity of folate reductase.It is used for acute Leukemia.",
    answers: [
      { text: "Sarcolysin", correct: false },
      { text: "Kolhamin", correct: false },
      { text: "Mercaptopurine", correct: false },
      { text: "Methotrexate", correct: true },
      { text: "Fluorouracil", correct: false },
    ],
  },
  {
    question: "The camptothecins, topotecan and irinotecan, are potent, cytotoxic neoplastic agents. They act by",
    answers: [
      { text: "Inhibiting DNA cleavage by topoisomerase I", correct: false },
      { text: "Intercalating DNA", correct: false },
      { text: "Inhibiting topoisomerase I binding to DNA", correct: false },
      { text: "Stabilizing the DNA-topoisomerase I cleavable complex", correct: true },
      { text: "Alkylating DNA", correct: false },
    ],
  },
  {
    question: "A patient experiences acute renal failure with severe nausea and vomiting. This patient is most likely being treated with",
    answers: [
      { text: "Prednisone", correct: false },
      { text: "Bleomycin", correct: false },
      { text: "Paclitaxel", correct: false },
      { text: "Cisplatin", correct: true },
      { text: "Vincristine", correct: false },
    ],
  },
  {
    question: "Which of the following statements correctly pair the anticancer drug with the likely mechanism of action",
    answers: [
      { text: "Cisplatin-inhibits thymidylate synthase", correct: false },
      { text: "Methotrexate- inhibits asparaginase enzyme", correct: false },
      { text: "Dactinomycin-binds to double stranded DNA", correct: true },
      { text: "Prednisolone- alkylates nucleophilic groups on DNA bases", correct: false },
      { text: "Fluorouracil- inhibits dihydrofolate reductase", correct: false },
    ],
  },
  {
    question: "Which of the following is a mechanism for multidrug resistance in cancer chemotherapy?",
    answers: [
      { text: "Decreased activity of DNA repair pathways", correct: false },
      { text: "Decreased sensitivity of dihydrofolate reductase", correct: false },
      { text: "Increased synthesis of the cell surface glycoprotein P-170", correct: true },
      { text: "Increased receptor affinity to the drug", correct: false },
      { text: "Increased activation of prodrugs", correct: false },
    ],
  },
  {
    question: "Which of the following anticancer drug exhibit dose-limiting toxicity to bone marrow?",
    answers: [
      { text: "Vincristine", correct: false },
      { text: "Bleomycin", correct: false },
      { text: "Doxorubicin", correct: true },
      { text: "Cisplatin", correct: false },
      { text: "Tamoxifen", correct: false },
    ],
  },
  {
    question: "Dihydrofolate reductase enzyme that convert folic acid to active tetrahydrofolic acid (FH4) in inhibited by?",
    answers: [
      { text: "Methotrexate", correct: true },
      { text: "Etoposide", correct: false },
      { text: "Cisplatin", correct: false },
      { text: "Fludarabine", correct: false },
      { text: "6-mercapopurine", correct: false },
    ],
  },
  {
    question: "An important mechanism by which clinical resistance develops to imatinib in chronic myelogenous leukemia is",
    answers: [
      { text: "Increased excretion in the urine.", correct: false },
      { text: "Spontaneous mutations in the BCR-ABL kinase.", correct: true },
      { text: "Decreased bioactivation in cancer cells.", correct: false },
      { text: "Increased efflux rom tumor cells.", correct: false },
      { text: "Increased hepatic metabolism.", correct: false },
    ],
  },
  {
    question: "Paclitaxel and the other taxanes have a central role in the therapy of ovarian, breast, lung, GI, genitourinary, and head and neck cancers. The cytotoxic effect of the taxanes in tumor cells is the result of",
    answers: [
      { text: "Inhibition of topoisomerase II", correct: false },
      { text: "Enhancement of microtubule disassembly", correct: false },
      { text: "Inhibition of topoisomerase I", correct: false },
      { text: "Inhibition of microtubule disassembly", correct: true },
      { text: "Inhibition of microtubule formation", correct: false },
    ],
  },
  {
    question: "A large pharmaceutical company has conducted extensive animal testing of a new drug for the treatment of advanced prostate cancer. The chief of research and development recommends that the company now submit an IND application in order to start clinical trials. Which of the following statements is most correct regarding clinical trials of new drugs?",
    answers: [
      { text: "Phase 2 requires the use of a positive control (a known effective drug) and a placebo.", correct: false },
      { text: "Phase 4 involves the detailed study of toxic effects that have been discovered in phase 3", correct: false },
      { text: "Chronic animal toxicity studies must be complete and reported in the IND", correct: false },
      { text: "Phase 1 involves the study of a small number of normal volunteers by highly trained clinical pharmacologists", correct: true },
      { text: "Phase 2 involves the use of the new drug in a large number of patients (1000–5000) who have the disease to be treated under conditions of proposed use (eg, outpatients)", correct: false },
    ],
  },
  {
    question: "A 47-year-old woman with choriocarcinoma is treated with very high doses of methotrexate (MTX). You anticipate significant host cell toxicity in response to the high MTX dose, and so immediately after giving the anticancer drug you administer which drug?",
    answers: [
      { text: "Leucovorin", correct: true },
      { text: "Cisplatin", correct: false },
      { text: "Flutamide", correct: false },
      { text: "Leuprolide", correct: false },
      { text: "Asparaginase", correct: false },
    ],
  },
  {
    question: "A 75-year-old man had surgery for prostate carcinoma, and local metastases were found intraoperatively. Which is the most appropriate drug aimed at treating the metastases?",
    answers: [
      { text: "Leucovorin", correct: false },
      { text: "Cisplatin", correct: false },
      { text: "Flutamide", correct: false },
      { text: "Leuprolide", correct: true },
      { text: "Asparaginase", correct: false },
    ],
  },
  {
    question: "A man has prostate cancer that will be treated with leuprolide. Which drug must be used adjunctively when we start chemotherapy?",
    answers: [
      { text: "Leucovorin", correct: false },
      { text: "Cisplatin", correct: false },
      { text: "Flutamide", correct: true },
      { text: "Methotrexate", correct: false },
      { text: "Asparaginase", correct: false },
    ],
  },
  {
    question: "The oncology team has treated many patients with acute lymphocytic leukemia using a combination of drugs. One drug tends to cause a high incidence of lumbar and abdominal pain, significant increases of serum amylase and transaminase activity, and other symptoms of hepatic and/or pancreatic dysfunction. Some patients developed serious hypersensitivity reactions upon drug administration, and there have been occasional sudden deaths. Which drug best fits this description?",
    answers: [
      { text: "Leucovorin", correct: false },
      { text: "Cisplatin", correct: false },
      { text: "Flutamide", correct: false },
      { text: "Methotrexate", correct: false },
      { text: "Asparaginase", correct: true },
    ],
  },
  {
    question: "A 30-year-old woman being treated for ovarian cancer develops high frequency hearing loss and declining renal function in response to anticancer drug therapy. Which drug is the most likely cause?",
    answers: [
      { text: "Leucovorin", correct: false },
      { text: "Cisplatin", correct: true },
      { text: "Flutamide", correct: false },
      { text: "Methotrexate", correct: false },
      { text: "Asparaginase", correct: false },
    ],
  },
  {
    question: "Chemotherapy therapy with Methotrexate, following drug is used to reverse the inhibition of dihydrofolate reductase?",
    answers: [
      { text: "Allopurinol", correct: false },
      { text: "5-fluorouracil", correct: false },
      { text: "Ifosfamide", correct: false },
      { text: "Mesna", correct: false },
      { text: "Leucovorin", correct: true },
    ],
  },
  {
    question: "A 6-year-old child presented with hematuria and complained of pain when urinating. The child, recently diagnosed with neuroblastoma, had begun a chemotherapy program five days previously. Which of the following drugs most likely caused the patients symptoms?",
    answers: [
      { text: "Prednisone", correct: false },
      { text: "Vincristine", correct: false },
      { text: "Cisplatin", correct: false },
      { text: "Cyclophosphamide", correct: true },
      { text: "Doxorubicin", correct: false },
    ],
  },
  {
    question: "A 12-year-old boy presents with fatigue,malaise and nosebleed.He has a one week history of an upper respiratory tract infection and otitis media.A blood examination reveals a normichromic, normocytic anemia and a differential white blood cell count shows 11% lymphoblasts.A bone marrow biopsy is performed which reveals 95% lymphoblasts. Which of the following pairs of drugs are most likely included in the therapeutic management of this body?",
    answers: [
      { text: "Cisplatin and etoposide", correct: false },
      { text: "Vincristine and prednisone", correct: true },
      { text: "Fluorouracil and cisplatin", correct: false },
      { text: "Flutamide and goserelin", correct: false },
      { text: "Tamoxifen and anastrozole", correct: false },
    ],
  },
  {
    question: "A 10-years-old girl, recently diagnosed with a lymphoblastic T-cell lymphoma, received her first combination chemotherapeutic regimen which included cyclophosphamide, vincristine, doxorubicin and prednisone.Which of the following adverse effects was the patients most likely to suffer from, during the first day of treatment?",
    answers: [
      { text: "Neuropathy", correct: false },
      { text: "Pulmonary fibrosis", correct: false },
      { text: "Nausea and vomiting", correct: true },
      { text: "Hemorrhagic cystitis", correct: false },
      { text: "Congestive heart failure", correct: false },
    ],
  },
  {
    question: "Tuberculosis is transmitted through:",
    answers: [
      { text: "infected water", correct: false },
      { text: "infected hands", correct: false },
      { text: "infected blood", correct: false },
      { text: "infected air", correct: true },
      { text: "infected food", correct: false },
    ],
  },
  {
    question: "Acute hemorrhage cystitis is a common toxic effect seen with:",
    answers: [
      { text: "Vincristine", correct: false },
      { text: "Tamoxifen", correct: false },
      { text: "Doxorubicin", correct: false },
      { text: "Cyclophosphamide", correct: true },
      { text: "Fluorouracil", correct: false },
    ],
  },
  {
    question: "A 35 y.o. lady who is on anticancer therapy is now suffering from severe nausea and vomiting.Which of the following drugs is having most effective antiemetic actions in this case?",
    answers: [
      { text: "Dexamethasone", correct: true },
      { text: "Levodopa", correct: false },
      { text: "Apomorphine", correct: false },
      { text: "Sucrulfate", correct: false },
      { text: "Omeprazole", correct: false },
    ],
  },
  {
    question: "What is the first line drug for tuberculosis?",
    answers: [
      { text: "Rifampin", correct: false },
      { text: "Rifabutin", correct: false },
      { text: "Ethionamide", correct: false },
      { text: "Isoniazid", correct: true },
      { text: "Ethambutol", correct: false },
    ],
  },
  {
    question: "Which of the following drug is most likely to be used for the treatment of M.avium?",
    answers: [
      { text: "Ethambutol", correct: true },
      { text: "Isoniazide", correct: false },
      { text: "Rifampin", correct: false },
      { text: "Erythromycine", correct: false },
      { text: "streptomycin", correct: false },
    ],
  },
  {
    question: "Which of the following is a second-line drug for TB and works by blocking folate synthesis of tubercle bacilli?",
    answers: [
      { text: "Isoniazide", correct: false },
      { text: "Fluoroquinolones", correct: false },
      { text: "PAS", correct: true },
      { text: "Cycloserine", correct: false },
      { text: "Ethionamide", correct: false },
    ],
  },
  {
    question: "A patient is taking some kind of RNA synthesis inhibitor for the treatment of a TB.They return back to the clinic extremely worried about recent events.They claim their urine,saliva, sweat,tears and feces are all reddish-orange in color.What drug is the patient likely taking?",
    answers: [
      { text: "Cycloserine", correct: false },
      { text: "Ethambutol", correct: false },
      { text: "Isoniazide", correct: false },
      { text: "Rifampin", correct: true },
      { text: "Streptomycine", correct: false },
    ],
  },
  {
    question: "Which of the following medications reduces immune system-mediated inflammation via inhibition of pyrimidine synthesis to reduce the number of activated lymphocytes in the CNS?",
    answers: [
      { text: "Riluzole", correct: false },
      { text: "Rotigotine", correct: false },
      { text: "Teriflunomide", correct: true },
      { text: "Dexamethasone", correct: false },
      { text: "Selegiline", correct: false },
    ],
  },
  {
    question: "In which one of the following conditions would aspirin be contraindicated?",
    answers: [
      { text: "Myalgia", correct: false },
      { text: "Fever", correct: false },
      { text: "Peptic ulcer", correct: true },
      { text: "Rheumatoid arthritis", correct: false },
      { text: "Unstable angina", correct: false },
    ],
  },
  {
    question: "Which of the following statements concerning gold salts is correct?",
    answers: [
      { text: "They may provideimmediate relief of artritic pain", correct: false },
      { text: "They act by inhibiting prostaglandin synthesis", correct: false },
      { text: "They frequently cause dermatitis of the skin or mucous membrains", correct: true },
      { text: "They are drugs of first choice in treating arthritis", correct: false },
      { text: "They must all be given intramuscularly", correct: false },
    ],
  },
  {
    question: "Note an antihistamine that has a hypnotic effect.",
    answers: [
      { text: "cimetidine", correct: false },
      { text: "ranitidine", correct: false },
      { text: "diphenhydramine;", correct: true },
      { text: "diazolin", correct: false },
      { text: "gistaglobulin.", correct: false },
    ],
  },
  {
    question: "Specify the immunostimulant, which is a synthetic inducer of interferon production:",
    answers: [
      { text: "levamisole", correct: false },
      { text: "thymalin", correct: false },
      { text: "intron A", correct: false },
      { text: "betaferon", correct: false },
      { text: "cycloferon", correct: true },
    ],
  },
  {
    question: "Specify the immunomodulator used as an anthelmintic agent:",
    answers: [
      { text: "tactivin", correct: false },
      { text: "thymalin;", correct: false },
      { text: "prodigiosan", correct: false },
      { text: "levamisole", correct: true },
      { text: "splenin", correct: false },
    ],
  },
  {
    question: "The antihistamine of choice in treating seasonal allergy symptoms in a pregnant woman is",
    answers: [
      { text: "Meclizine", correct: false },
      { text: "Promethazine", correct: false },
      { text: "Dimenhydrinate", correct: false },
      { text: "Cetirizine", correct: true },
      { text: "Dexamethazon", correct: false },
    ],
  },
  {
    question: "Tacrolimus is one of the most effective immunosuppressant drugs in routine use. The mechanism of action of tacrolimus is to",
    answers: [
      { text: "Block CD52 on the surface of activated cells.", correct: false },
      { text: "Intercalate DNA in proliferating cells.", correct: false },
      { text: "Block the protein kinase activity of mTOR.", correct: false },
      { text: "Block guanine nucleotide synthesis in proliferating cells.", correct: false },
      { text: "Block the protein phosphatase activity of calcineurin.", correct: true },
    ],
  },
  {
    question: "A 20-year-old woman is taking diphenhydramine for severe hay fever. Which of the following adverse effects is she most likely to report?",
    answers: [
      { text: "Nervousness, anxiety", correct: false },
      { text: "Sedation", correct: true },
      { text: "Vertigo", correct: false },
      { text: "Nausea", correct: false },
      { text: "Muscarinic increase in bladder tone", correct: false },
    ],
  },
  {
    question: "Which NSAID has the least anti-inflammatory efficacy?",
    answers: [
      { text: "Celecoxib.", correct: false },
      { text: "Acetaminophen", correct: true },
      { text: "Naproxen", correct: false },
      { text: "Ibuprofen", correct: false },
      { text: "Aspirin", correct: false },
    ],
  },
  {
    question: "Diclofenac has a t1/2 in plasma of 1 to 2 hours, yet its therapeutic effects in treating rheumatoid arthritis last for much longer. This prolongation of therapeutic effect is due to",
    answers: [
      { text: "Its relative selectivity for COX-2.", correct: false },
      { text: "The formation of a long-lived active metabolite.", correct: false },
      { text: "Irreversible inhibition of COX-1 and COX-2.", correct: false },
      { text: "CNS effects unrelated to inhibition of prostaglandin synthesis.", correct: false },
      { text: "Its accumulation in synovial fluid.", correct: true },
    ],
  },
  {
    question: "Which NSAID permanently inactivates TxA2 synthesis by platelets?",
    answers: [
      { text: "Ibuprofen", correct: false },
      { text: "Aspirin", correct: true },
      { text: "Celecoxib", correct: false },
      { text: "Acetaminophen", correct: false },
      { text: "Naproxen", correct: false },
    ],
  },
  {
    question: "This antihistamine has antiemetic effects useful in treating vertigo or postoperative emesis",
    answers: [
      { text: "Loratadine", correct: false },
      { text: "Promethazine", correct: true },
      { text: "Cetirizine", correct: false },
      { text: "Fexofenadine", correct: false },
      { text: "Dexamethazon", correct: false },
    ],
  },
  {
    question: "A 34-year-old woman with Crohn's disease has been taking prednisone daily for 1 year. She has been experiencing a thickness in the back of her neck. This is likely due to a(n)",
    answers: [
      { text: "Edema.", correct: false },
      { text: "Ectopic thyroid tissue.", correct: false },
      { text: "Redistribution of lipid.", correct: true },
      { text: "Increase in muscle growth.", correct: false },
      { text: "Protein deposition.", correct: false },
    ],
  },
  {
    question: "Cyclosporine was one of the first immunosuppressants to be used for organ transplant therapy. The mechanism of action of cyclosporine is to",
    answers: [
      { text: "Intercalate DNA in proliferating cells.", correct: false },
      { text: "Block purine metabolism in proliferating cells.", correct: false },
      { text: "Block CD52 on the surface of activated cells.", correct: false },
      { text: "Block the protein kinase activity of mTOR.", correct: false },
      { text: "Block the protein phosphatase activity of calcineurin.", correct: true },
    ],
  },
  {
    question: "HYDROCORTISONE IS A DRUG USED TO SUPPRESS?",
    answers: [
      { text: "INFLAMMATION", correct: true },
      { text: "SWELLING", correct: false },
      { text: "APPETITE", correct: false },
      { text: "EXCRETION OF URINE", correct: false },
      { text: "Arrythmia", correct: false },
    ],
  },
  {
    question: "Dexamethasone is an example of",
    answers: [
      { text: "Corticosteroids", correct: true },
      { text: "Leukotrienes", correct: false },
      { text: "Antitussives", correct: false },
      { text: "Decongestants", correct: false },
      { text: "Xanthines", correct: false },
    ],
  },
  {
    question: "A newborn has blood gas and hemodynamic problems because of a patent (open) ductus arteriosus. Which drug would be administered in an attempt to close the ductus?",
    answers: [
      { text: "Indomethacin", correct: true },
      { text: "Misoprostol", correct: false },
      { text: "Allopurinol", correct: false },
      { text: "Ibuprofen", correct: false },
      { text: "Naproxen", correct: false },
    ],
  },
  {
    question: "A patient with severe arthritis will be placed on long-term therapy with indomethacin. All other factors being equal, which drug is the most likely to administer as an add-on (adjunct) to prevent gastric ulcers caused by this NSAID?",
    answers: [
      { text: "Indomethacin", correct: false },
      { text: "Misoprostol", correct: true },
      { text: "Allopurinol", correct: false },
      { text: "Ibuprofen", correct: false },
      { text: "Naproxen", correct: false },
    ],
  },
  {
    question: "A 20 year female weighing 55 kg is admitted to the emergency department having consumed 10 gm of paracetamol together with alcohol 6 hrs earlier. What is a result and manifestations of such interaction?",
    answers: [
      { text: "Hepatotoxicity", correct: true },
      { text: "Bronchospasm", correct: false },
      { text: "Bone marrow suppression", correct: false },
      { text: "Ototoxicity", correct: false },
      { text: "Hypersensitivity", correct: false },
    ],
  },
  {
    question: "A patient has acute gout. The physician initially thinks about prescribing just one or two oral doses of colchicine, 12 h apart, but then decides otherwise. The main reason for avoiding colchicine, even with a very short oral course, is the development of the following?",
    answers: [
      { text: "One or two oral doses seldom relieve gout pain", correct: false },
      { text: "GI distress that is almost as bad as the acute gout discomfort", correct: true },
      { text: "Refractoriness/ tolerance with just a dose or two", correct: false },
      { text: "Bone marrow suppression", correct: false },
      { text: "Bronchospasm", correct: false },
    ],
  },
  {
    question: "A 65-year-old man suffering from osteoarthritis has been taking naproxen 500 mg twice a day for one month. The drug was effective, but the patient suffered from nausea and heartburn. The physician decided to try another NSAID and prescribed celecoxib, a drug about 5 times more potent than naproxen, with negligible gastrointestinal side effects. Which of the following was most likely the dose of celecoxib prescribed to the patient?",
    answers: [
      { text: "50 mg", correct: false },
      { text: "1000 mg", correct: false },
      { text: "10 mg", correct: false },
      { text: "5 mg", correct: false },
      { text: "100 mg", correct: true },
    ],
  },
  {
    question: "A 43 yo ship captain complains of seasonal allergies. Which one of the following would be indicated?",
    answers: [
      { text: "Cyclizine", correct: false },
      { text: "Doxepin", correct: false },
      { text: "Doxylamine", correct: false },
      { text: "Fexofenadine", correct: true },
      { text: "Dexamethazon", correct: false },
    ],
  },
  {
    question: "A 70-year-old man was administered penicillin IV. Within 5 min, he developed generalized urticarial, swelling of lips, hypotension and bronchospasm. What is the first choice drug to administer?",
    answers: [
      { text: "Cyclizine", correct: false },
      { text: "Doxepin", correct: false },
      { text: "Doxylamine", correct: false },
      { text: "Fexofenadine", correct: false },
      { text: "Adrenaline", correct: true },
    ],
  },
  {
    question: "Which of the following medications has the most potentialto significantly impair the ability to drive an automoile?",
    answers: [
      { text: "Diphenhydramine", correct: true },
      { text: "Levocetirizine", correct: false },
      { text: "Fexofenadine", correct: false },
      { text: "Ranitidine", correct: false },
      { text: "Hydroxyzine", correct: false },
    ],
  },
  {
    question: "Which NSAID is a prodrug?",
    answers: [
      { text: "Ibuprofen", correct: false },
      { text: "Aspirin", correct: false },
      { text: "Acetaminophen", correct: false },
      { text: "Nabumetone", correct: true },
      { text: "Meclofenamate", correct: false },
    ],
  },
  {
    question: "Which mediators of inflammation are acted on by NSAIDs?",
    answers: [
      { text: "Eicosanoids such as prostaglandins, thromboxanes and leukotrienes", correct: false },
      { text: "Degradative enzymes such as proteases,hyaluronidases", correct: false },
      { text: "Vasoactive enzymes such as histamine and serotonin", correct: true },
      { text: "Biologically derived oxidants such as hydrogen peroxide and superoxide anion", correct: false },
      { text: "Plasma proteins and peptides such products of the complement and kinin", correct: false },
    ],
  },
  {
    question: "The group of antibiotics which possess additional anti-inflammatory and immunomodulatory activity is:",
    answers: [
      { text: "Tetracyclines", correct: false },
      { text: "Polypeptide antibiotics", correct: false },
      { text: "Fluoroquinolones", correct: false },
      { text: "Macrolides", correct: true },
      { text: "Sulfonamides", correct: false },
    ],
  },
  {
    question: "Mediator most likely to promote pain:",
    answers: [
      { text: "histamine", correct: false },
      { text: "serotonin", correct: false },
      { text: "bradykinin", correct: true },
      { text: "prostaglandins", correct: false },
      { text: "leukotrienes", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is used in the treatment of rheumatoid arthritis?",
    answers: [
      { text: "Naproxen", correct: true },
      { text: "Allopurinol", correct: false },
      { text: "Colchicine", correct: false },
      { text: "Sulfinpyrazone", correct: false },
      { text: "Leflunomide", correct: false },
    ],
  },
  {
    question: "Indomethacin is preferred over Colchicine for acute attack of GOUT because it is:",
    answers: [
      { text: "Less likely to cause gastrointestinal bleeding", correct: false },
      { text: "Less likely to cause diarrhea", correct: true },
      { text: "Less likely to cause acute renal failure", correct: false },
      { text: "More likely to reduce inflammation", correct: false },
      { text: "More likely to prevent futher acute attacks", correct: false },
    ],
  },
  {
    question: "Effective in managing acute gouty arthritisand ankylosing spondylitis; also accelerates closure of patent ductus arteriosus in premature infants:",
    answers: [
      { text: "gold", correct: false },
      { text: "ketorolac", correct: false },
      { text: "phenylbutazone", correct: false },
      { text: "methotrexate", correct: false },
      { text: "indomethacin", correct: true },
    ],
  },
  {
    question: "Identify the remedy. Causes diuretic and hypotensive. Effect. It makes it difficult for the kidneys to reabsorb sodium and water ions. Increases excretion of potassium ions. It acts quickly, clearly and for a short time.",
    answers: [
      { text: "spironolactone", correct: false },
      { text: "triamterene", correct: false },
      { text: "dichlorothiazide", correct: false },
      { text: "furosemide", correct: true },
      { text: "oxodoline", correct: false },
    ],
  },
  {
    question: "A 3-year-old is brought to the emergency department having just ingested a large overdose of tolbutamide, an oral antidiabetic drug. Tolbutamide is a weak acid with a pKa of 5.3. It is capable of entering most tissues, including the brain. On physical examination, the heart rate is 100/min, blood pressure 90/50 mm Hg, and respiratory rate 20/min. Which of the following statements about this case of tolbutamide overdose is most correct?",
    answers: [
      { text: "Hemodialysis is the only effective therapy", correct: false },
      { text: "Less of the drug would be ionized at blood pH than at stomach pH", correct: false },
      { text: "Urinary excretion would be accelerated by administration of NH4Cl, an acidifying agent", correct: false },
      { text: "Absorption of the drug would be slower from the stomach than from the small intestine", correct: false },
      { text: "Urinary excretion would be accelerated by giving NaHCO3, an alkalinizing agent", correct: true },
    ],
  },
  {
    question: "A 3-year-old girl presented with hirsutism, breast enlargement, and a height and bone age that was  consistent with an age of 9. Diagnostic testing revealed precocious puberty. Which of the following is the most appropriate drug for treatment of this patient’s precocious puberty?",
    answers: [
      { text: "Atosiban", correct: false },
      { text: "Follitropin", correct: false },
      { text: "Leuprolide", correct: true },
      { text: "Octreotide", correct: false },
      { text: "Pegvisomant", correct: false },
    ],
  },
  {
    question: "A 29-year-old woman in her 41st wk of gestation had been in labor for 12 h. Although her uterine  contractions had been strong and regular initially, they had diminished in force during the past hour. Which of the following agents would be used to facilitate this woman’s labor and delivery?",
    answers: [
      { text: "Dopamine", correct: false },
      { text: "Leuprolide", correct: false },
      { text: "Oxytocin", correct: true },
      { text: "Prolactin", correct: false },
      { text: "Vasopressin", correct: false },
    ],
  },
  {
    question: "Which one of the following drugs promotes the release of endogenous insulin?",
    answers: [
      { text: "Acarbose", correct: true },
      { text: "Glipizide", correct: false },
      { text: "Canagliflozin", correct: false },
      { text: "Metformin", correct: false },
      { text: "Pioglitazone", correct: false },
    ],
  },
  {
    question: "Which of the following is an important effect of insulin?",
    answers: [
      { text: "Increased conversion of amino acids into glucose", correct: false },
      { text: "Increased glucose transport into cells", correct: true },
      { text: "Stimulation of glycogenolysis", correct: false },
      { text: "Increased gluconeogenesis", correct: false },
      { text: "Inhibition of lipoprotein lipase", correct: false },
    ],
  },
  {
    question: "Which of the following drugs is most likely to cause hypoglycemia when used as monotherapy in the treatment of type 2 diabetes?",
    answers: [
      { text: "Acarbose", correct: false },
      { text: "Glyburide", correct: true },
      { text: "Miglitol", correct: false },
      { text: "Canagliflozin", correct: false },
      { text: "Metformin", correct: false },
    ],
  },
  {
    question: "Which of the following drug increases contractile function of the uterus.They enhance mainly rhythmic activity. Efficacy depends on the presence and duration of pregnancy.Used of weak labor.When taken orally it is ineffective due to destruction in the gastrointestinal tract?",
    answers: [
      { text: "Prozerin", correct: false },
      { text: "Benzohexonium", correct: false },
      { text: "Ergometrin", correct: false },
      { text: "Dinoprost", correct: false },
      { text: "Oxytocin", correct: true },
    ],
  },
  {
    question: "Which of the following drug has a hypoglycemic effect, promotes the penetration of glucose into cells and its utilization, ineffective when taken orally?",
    answers: [
      { text: "Butamide", correct: false },
      { text: "Glybutide", correct: false },
      { text: "Glucagon", correct: false },
      { text: "adrenaline", correct: false },
      { text: "Insulin", correct: true },
    ],
  },
  {
    question: "Which of the following hormonal agent has anti-inflammatory, antiallergic, immunosuppressive effects, increases blood glucose levels, stimulates the breakdown of proteins in muscles, causes redistribution of adipose tissue in the body?",
    answers: [
      { text: "Adrenalin", correct: false },
      { text: "DOXA", correct: false },
      { text: "Testosterone propionate", correct: false },
      { text: "Phenobolin", correct: false },
      { text: "Prednisolone", correct: true },
    ],
  },
  {
    question: "Which of the following hormone is also known as emergency hormone?",
    answers: [
      { text: "Cortisol", correct: false },
      { text: "Growth Hormone", correct: false },
      { text: "Prolactine", correct: false },
      { text: "adrenaline", correct: true },
      { text: "Oxytocin", correct: false },
    ],
  },
  {
    question: "An order for prednisolone reads 10 mg four times a day.The dose for the child is 2 mg/kg/day. How many pounds does the child weigh?",
    answers: [
      { text: "36 pounds", correct: false },
      { text: "40 pounds", correct: false },
      { text: "46 pounds", correct: false },
      { text: "44 pounds", correct: true },
      { text: "42 pounds", correct: false },
    ],
  },
  {
    question: "Which of the following the main indication for prescribing vasopressin drugs?",
    answers: [
      { text: "Myxedema", correct: false },
      { text: "Thyrotoxicosis", correct: false },
      { text: "Diabetes mellitus", correct: false },
      { text: "Diabetes insipidus", correct: true },
      { text: "Autoimmune disease", correct: false },
    ],
  },
  {
    question: "Which of the following the mechanism of action of oxytocin?",
    answers: [
      { text: "Stimulates adrenoreceptors of the myometrium", correct: false },
      { text: "Blocks cholinergic receptors of the myometrium", correct: false },
      { text: "Increases the sensitivity of ion channels of myocellular membranes geometry", correct: false },
      { text: "Reduces the sensitivity of ion channels of myometrial cell membranes", correct: true },
      { text: "stimulates receptors for prostoglandins in the myometrium", correct: false },
    ],
  },
  {
    question: "Which of the following drug is for stimulating the adrenal cortex?",
    answers: [
      { text: "Corticotropin", correct: true },
      { text: "Oxytocin", correct: false },
      { text: "Human chorionic gonadotropin", correct: false },
      { text: "Prednisolone", correct: false },
      { text: "Thyroidin", correct: false },
    ],
  },
  {
    question: "Which one of the following action may cause drug deoxycorticosterone acetate?",
    answers: [
      { text: "Increased blood glucose levels", correct: false },
      { text: "Lowering blood glucose levels", correct: false },
      { text: "Retains sodium in the body", correct: true },
      { text: "Promotes the removal of sodium from the body", correct: false },
      { text: "Has an anti-inflammatory effect", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("night-mode-toggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
    toggle.textContent = document.body.classList.contains("night-mode")
      ? "☀️ Day Mode"
      : "🌙 Night Mode";
  });
});

startQuiz();
