export interface Treatment {
  id: string;
  name: string;
  category: string;
  overview: string;
  recoveryTime: string;
  topCities: string[];
  costs: {
    treatment: { min: number; max: number };
    consultation: { min: number; max: number };
    hospitalStay: { min: number; max: number };
    medicines: { min: number; max: number };
    localTransport: { min: number; max: number };
  };
  recommendedHospitals: string[];
  journeyTimeline: {
    phase: string;
    days: string;
    description: string;
    icon: string;
  }[];
}

export interface Hospital {
  id: string;
  name: string;
  city: string;
  specialties: string[];
  rating: number;
  accreditation: string;
  beds: number;
  experience: string;
  image?: string;
}

export const treatments: Treatment[] = [
  {
    id: "heart-bypass",
    name: "Heart Bypass Surgery (CABG)",
    category: "Cardiac",
    overview:
      "Coronary Artery Bypass Grafting (CABG) is a surgical procedure used to treat coronary heart disease. It redirects blood around clogged arteries to improve blood flow and oxygen to the heart.",
    recoveryTime: "4–6 weeks",
    topCities: ["Chennai", "Mumbai", "Delhi", "Bangalore"],
    costs: {
      treatment: { min: 300000, max: 500000 },
      consultation: { min: 40000, max: 70000 },
      hospitalStay: { min: 50000, max: 80000 },
      medicines: { min: 20000, max: 40000 },
      localTransport: { min: 10000, max: 20000 },
    },
    recommendedHospitals: [
      "Asian Heart Institute Mumbai",
      "Fortis Memorial Research Institute",
      "Narayana Health City Bangalore",
      "Indraprastha Apollo Hospital Delhi",
      "Apollo Hospitals Chennai",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online consultation with senior cardiologist, share reports & ECG", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "Arrival and hotel check-in near hospital", icon: "plane" },
      { phase: "Pre-Op Tests", days: "Day 4", description: "Echocardiogram, angiography, blood tests, anesthesia review", icon: "flask" },
      { phase: "Surgery Day", days: "Day 5", description: "CABG surgery performed by expert cardiac surgeon (4–6 hrs)", icon: "heart" },
      { phase: "ICU Recovery", days: "Day 6–8", description: "Monitored in ICU, vital signs stabilized, pain management", icon: "activity" },
      { phase: "Ward Recovery", days: "Day 9–10", description: "Moved to private ward, physiotherapy begins, diet started", icon: "bed" },
      { phase: "Follow-Up", days: "Day 11–14", description: "Discharge planning, follow-up consultation, medication guidance", icon: "clipboard" },
      { phase: "Return Home", days: "Day 15", description: "Medical clearance for travel, safe return to home country", icon: "home" },
    ],
  },
  {
    id: "angioplasty",
    name: "Coronary Angioplasty + Stent",
    category: "Cardiac",
    overview:
      "A minimally invasive procedure to open narrowed or blocked coronary arteries. A stent is placed to keep the artery open and restore normal blood flow to the heart muscle.",
    recoveryTime: "1–2 weeks",
    topCities: ["Delhi", "Mumbai", "Chennai", "Hyderabad"],
    costs: {
      treatment: { min: 150000, max: 280000 },
      consultation: { min: 20000, max: 40000 },
      hospitalStay: { min: 30000, max: 60000 },
      medicines: { min: 15000, max: 30000 },
      localTransport: { min: 8000, max: 15000 },
    },
    recommendedHospitals: [
      "Medanta – The Medicity",
      "Asian Heart Institute Mumbai",
      "Apollo Hospitals Chennai",
      "BLK-Max Super Speciality Hospital",
      "Fortis Memorial Research Institute",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online cardiologist consultation, share previous ECG & reports", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "Arrival and hospital admission same day", icon: "plane" },
      { phase: "Diagnostics", days: "Day 4", description: "Angiography to assess blockage, pre-procedure blood tests", icon: "flask" },
      { phase: "Procedure", days: "Day 5", description: "Angioplasty with stent placement (1–2 hrs under local anesthesia)", icon: "heart" },
      { phase: "Recovery", days: "Day 6–8", description: "Observation in cardiac care unit, medication titration", icon: "activity" },
      { phase: "Discharge", days: "Day 9", description: "Discharge with medications, dietary counseling", icon: "clipboard" },
      { phase: "Return Home", days: "Day 10", description: "Medical clearance for air travel, return flight booked", icon: "home" },
    ],
  },
  {
    id: "heart-valve",
    name: "Heart Valve Replacement",
    category: "Cardiac",
    overview:
      "Surgical replacement of a damaged or diseased heart valve with a mechanical or biological prosthetic valve. Restores normal blood flow direction and reduces strain on the heart.",
    recoveryTime: "6–8 weeks",
    topCities: ["Mumbai", "Chennai", "Delhi", "Bangalore"],
    costs: {
      treatment: { min: 350000, max: 600000 },
      consultation: { min: 45000, max: 75000 },
      hospitalStay: { min: 60000, max: 90000 },
      medicines: { min: 25000, max: 50000 },
      localTransport: { min: 10000, max: 20000 },
    },
    recommendedHospitals: [
      "Asian Heart Institute Mumbai",
      "Narayana Health City Bangalore",
      "Apollo Hospitals Chennai",
      "Fortis Memorial Research Institute",
      "Medanta – The Medicity",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online echocardiogram review with cardiac surgeon", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "Arrival and hospital pre-admission procedures", icon: "plane" },
      { phase: "Pre-Op", days: "Day 4", description: "Full cardiac workup, valve assessment, fitness for surgery", icon: "flask" },
      { phase: "Surgery", days: "Day 5", description: "Valve replacement surgery (4–6 hrs), heart-lung bypass used", icon: "heart" },
      { phase: "ICU Care", days: "Day 6–9", description: "ICU monitoring, ventilator weaning, anticoagulation started", icon: "activity" },
      { phase: "Ward Recovery", days: "Day 10–12", description: "Cardiac rehabilitation begins, INR monitoring", icon: "bed" },
      { phase: "Discharge", days: "Day 13–15", description: "Discharge with anticoagulation plan, follow-up in 5 days", icon: "clipboard" },
      { phase: "Return Home", days: "Day 16–18", description: "Final clearance, guidance for long-term care, departure", icon: "home" },
    ],
  },
  {
    id: "pacemaker",
    name: "Pacemaker Implantation",
    category: "Cardiac",
    overview:
      "A small device implanted in the chest to regulate abnormal heart rhythms (arrhythmias). The pacemaker sends electrical pulses to help the heart beat at a normal rate.",
    recoveryTime: "2–4 weeks",
    topCities: ["Delhi", "Mumbai", "Hyderabad", "Chennai"],
    costs: {
      treatment: { min: 120000, max: 250000 },
      consultation: { min: 20000, max: 35000 },
      hospitalStay: { min: 25000, max: 50000 },
      medicines: { min: 10000, max: 20000 },
      localTransport: { min: 8000, max: 15000 },
    },
    recommendedHospitals: [
      "Medanta – The Medicity",
      "BLK-Max Super Speciality Hospital",
      "Indraprastha Apollo Hospital Delhi",
      "Sir Ganga Ram Hospital",
      "Fortis Memorial Research Institute",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online consultation, share Holter monitor & ECG reports", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, hospital pre-admission check-in", icon: "plane" },
      { phase: "Diagnostics", days: "Day 4", description: "EP study, blood tests, chest X-ray, anesthesia review", icon: "flask" },
      { phase: "Implantation", days: "Day 5", description: "Pacemaker implanted under local anesthesia (1–2 hrs)", icon: "heart" },
      { phase: "Monitoring", days: "Day 6–7", description: "Device programming, wound care, telemetry monitoring", icon: "activity" },
      { phase: "Discharge", days: "Day 8", description: "Discharge with device card, activity restrictions explained", icon: "clipboard" },
      { phase: "Return Home", days: "Day 9–10", description: "Final check, remote monitoring setup, return travel", icon: "home" },
    ],
  },
  {
    id: "knee-replacement",
    name: "Knee Replacement Surgery",
    category: "Orthopedic",
    overview:
      "Total or partial knee replacement surgery to relieve severe knee pain caused by arthritis or injury. Damaged knee joint surfaces are replaced with prosthetic implants for pain-free mobility.",
    recoveryTime: "6–12 weeks",
    topCities: ["Delhi", "Gurgaon", "Chennai", "Mumbai"],
    costs: {
      treatment: { min: 250000, max: 420000 },
      consultation: { min: 30000, max: 55000 },
      hospitalStay: { min: 40000, max: 75000 },
      medicines: { min: 20000, max: 35000 },
      localTransport: { min: 10000, max: 18000 },
    },
    recommendedHospitals: [
      "Medanta – The Medicity",
      "Apollo Hospitals Chennai",
      "Max Super Speciality Hospital Saket",
      "Fortis Memorial Research Institute",
      "Manipal Hospital Bangalore",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online orthopedic consultation, X-ray & MRI review", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, physiotherapy assessment, hospital admission", icon: "plane" },
      { phase: "Pre-Op Tests", days: "Day 4", description: "Blood tests, cardiac fitness, anesthesia consultation", icon: "flask" },
      { phase: "Surgery", days: "Day 5", description: "Total knee replacement under spinal/general anesthesia (2 hrs)", icon: "activity" },
      { phase: "Physio Starts", days: "Day 6–8", description: "Physiotherapy day 1 post-op, CPM machine, ice therapy", icon: "bed" },
      { phase: "Rehabilitation", days: "Day 9–12", description: "Walking with support, stair climbing, pain management", icon: "clipboard" },
      { phase: "Discharge", days: "Day 13", description: "Discharge with exercise program, home physio plan", icon: "home" },
      { phase: "Return Home", days: "Day 14–15", description: "Travel fitness assessment, business class recommended", icon: "plane" },
    ],
  },
  {
    id: "hip-replacement",
    name: "Hip Replacement Surgery",
    category: "Orthopedic",
    overview:
      "Total hip arthroplasty replaces the damaged hip joint with an artificial implant. Eliminates chronic hip pain from arthritis, fractures, or avascular necrosis.",
    recoveryTime: "6–10 weeks",
    topCities: ["Delhi", "Gurgaon", "Mumbai", "Bangalore"],
    costs: {
      treatment: { min: 280000, max: 450000 },
      consultation: { min: 30000, max: 55000 },
      hospitalStay: { min: 45000, max: 80000 },
      medicines: { min: 20000, max: 38000 },
      localTransport: { min: 10000, max: 20000 },
    },
    recommendedHospitals: [
      "Medanta – The Medicity",
      "Fortis Memorial Research Institute",
      "Max Super Speciality Hospital Saket",
      "Apollo Hospitals Chennai",
      "Narayana Health City Bangalore",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online consultation, share hip X-ray & bone density scan", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "Arrive India, hospital admission, pre-surgical assessment", icon: "plane" },
      { phase: "Pre-Op Tests", days: "Day 4", description: "Blood work, ECG, anesthesia review, implant selection", icon: "flask" },
      { phase: "Surgery", days: "Day 5", description: "Total hip replacement surgery (2–3 hrs)", icon: "activity" },
      { phase: "Early Recovery", days: "Day 6–8", description: "Physiotherapy starts, sitting and standing practice", icon: "bed" },
      { phase: "Rehabilitation", days: "Day 9–12", description: "Walking training, muscle strengthening exercises", icon: "clipboard" },
      { phase: "Discharge", days: "Day 13–15", description: "Cleared for discharge, anticoagulation medications, home exercises", icon: "home" },
    ],
  },
  {
    id: "spinal-fusion",
    name: "Spinal Fusion Surgery",
    category: "Orthopedic",
    overview:
      "Spinal fusion permanently connects two or more vertebrae in the spine to eliminate painful motion. Treats spondylolisthesis, degenerative disc disease, and spinal deformities.",
    recoveryTime: "3–6 months",
    topCities: ["Delhi", "Gurgaon", "Mumbai", "Hyderabad"],
    costs: {
      treatment: { min: 350000, max: 600000 },
      consultation: { min: 40000, max: 65000 },
      hospitalStay: { min: 55000, max: 85000 },
      medicines: { min: 25000, max: 45000 },
      localTransport: { min: 12000, max: 22000 },
    },
    recommendedHospitals: [
      "Medanta – The Medicity",
      "BLK-Max Super Speciality Hospital",
      "Max Super Speciality Hospital Saket",
      "Kokilaben Dhirubhai Ambani Hospital",
      "AIIMS New Delhi",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online consultation, share MRI and CT scan of spine", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, pain management consultation", icon: "plane" },
      { phase: "Pre-Op", days: "Day 4", description: "Full spine imaging, neurological assessment, blood tests", icon: "flask" },
      { phase: "Surgery", days: "Day 5", description: "Spinal fusion procedure (3–6 hrs depending on levels)", icon: "activity" },
      { phase: "ICU/Ward", days: "Day 6–9", description: "Neurological monitoring, pain control, log rolling technique", icon: "bed" },
      { phase: "Mobilization", days: "Day 10–14", description: "Brace fitting, walking with support, physiotherapy", icon: "clipboard" },
      { phase: "Return Home", days: "Day 15–18", description: "Medical clearance, travel in reclining seat recommended", icon: "home" },
    ],
  },
  {
    id: "brain-tumor",
    name: "Brain Tumor Surgery",
    category: "Neurology",
    overview:
      "Neurosurgical removal of benign or malignant brain tumors using advanced techniques including stereotactic surgery, awake craniotomy, and robotic navigation systems.",
    recoveryTime: "4–8 weeks",
    topCities: ["Delhi", "Mumbai", "Hyderabad", "Chennai"],
    costs: {
      treatment: { min: 400000, max: 800000 },
      consultation: { min: 50000, max: 90000 },
      hospitalStay: { min: 70000, max: 120000 },
      medicines: { min: 30000, max: 60000 },
      localTransport: { min: 12000, max: 22000 },
    },
    recommendedHospitals: [
      "AIIMS New Delhi",
      "Kokilaben Dhirubhai Ambani Hospital",
      "Apollo Hospitals Chennai",
      "Fortis Memorial Research Institute",
      "BLK-Max Super Speciality Hospital",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online neuro-oncology consultation, MRI and PET scan review", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, tumor board multidisciplinary review", icon: "plane" },
      { phase: "Pre-Op", days: "Day 4", description: "Functional MRI, neuropsychological assessment, surgical planning", icon: "flask" },
      { phase: "Surgery", days: "Day 5", description: "Craniotomy with intraoperative navigation (4–8 hrs)", icon: "activity" },
      { phase: "ICU Care", days: "Day 6–9", description: "Neuro ICU monitoring, anti-edema medications", icon: "bed" },
      { phase: "Recovery", days: "Day 10–14", description: "Rehabilitation, speech/physio therapy as needed", icon: "clipboard" },
      { phase: "Oncology Plan", days: "Day 15–18", description: "Histopathology results, radiation/chemo plan if required", icon: "home" },
    ],
  },
  {
    id: "cataract",
    name: "Cataract Surgery",
    category: "Ophthalmology",
    overview:
      "Phacoemulsification surgery to remove the clouded natural lens and replace it with a clear artificial intraocular lens (IOL). Restores clear vision with minimal downtime.",
    recoveryTime: "1–2 weeks",
    topCities: ["Delhi", "Mumbai", "Hyderabad", "Chennai"],
    costs: {
      treatment: { min: 30000, max: 80000 },
      consultation: { min: 8000, max: 15000 },
      hospitalStay: { min: 10000, max: 20000 },
      medicines: { min: 5000, max: 10000 },
      localTransport: { min: 6000, max: 12000 },
    },
    recommendedHospitals: [
      "Apollo Hospitals Chennai",
      "Medanta – The Medicity",
      "Kokilaben Dhirubhai Ambani Hospital",
      "Narayana Health City Bangalore",
      "Ruby Hall Clinic Pune",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online eye consultation, share vision test reports", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, hotel near hospital, eye assessment", icon: "plane" },
      { phase: "Eye Tests", days: "Day 4", description: "Biometry, corneal topography, IOL power selection", icon: "flask" },
      { phase: "Surgery", days: "Day 5", description: "Phaco surgery both eyes (15–20 min each, same day)", icon: "activity" },
      { phase: "Recovery", days: "Day 6–7", description: "Post-op check, protective shield, eye drops started", icon: "bed" },
      { phase: "Follow-Up", days: "Day 8", description: "Vision clarity assessment, discharge with drops kit", icon: "clipboard" },
      { phase: "Return Home", days: "Day 9–10", description: "Final vision check, cleared for travel", icon: "home" },
    ],
  },
  {
    id: "lasik",
    name: "LASIK Eye Surgery",
    category: "Ophthalmology",
    overview:
      "Laser-assisted in-situ keratomileusis permanently corrects refractive errors (myopia, hyperopia, astigmatism). Uses excimer laser to reshape the cornea for glasses-free vision.",
    recoveryTime: "3–7 days",
    topCities: ["Delhi", "Mumbai", "Bangalore", "Hyderabad"],
    costs: {
      treatment: { min: 35000, max: 75000 },
      consultation: { min: 5000, max: 12000 },
      hospitalStay: { min: 5000, max: 10000 },
      medicines: { min: 3000, max: 8000 },
      localTransport: { min: 5000, max: 10000 },
    },
    recommendedHospitals: [
      "Artemis Hospital Gurgaon",
      "Apollo Hospitals Chennai",
      "Manipal Hospital Bangalore",
      "Kokilaben Dhirubhai Ambani Hospital",
      "Max Super Speciality Hospital Saket",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1", description: "Online consultation, check candidacy for LASIK", icon: "video" },
      { phase: "Arrival", days: "Day 2", description: "India arrival, rest day before procedure", icon: "plane" },
      { phase: "Detailed Check", days: "Day 3", description: "Corneal thickness, wavefront mapping, dilated eye exam", icon: "flask" },
      { phase: "LASIK", days: "Day 4", description: "Bilateral LASIK procedure (15–20 min total)", icon: "activity" },
      { phase: "Rest", days: "Day 5", description: "Rest at hotel, protective goggles, medicated eye drops", icon: "bed" },
      { phase: "Follow-Up", days: "Day 6", description: "Vision sharpness check, cleared if stable", icon: "clipboard" },
      { phase: "Return Home", days: "Day 7", description: "Wear protective goggles on flight, drops continue for 2 weeks", icon: "home" },
    ],
  },
  {
    id: "kidney-transplant",
    name: "Kidney Transplant",
    category: "Transplant",
    overview:
      "Surgical transplantation of a healthy kidney from a living or deceased donor. The primary treatment for end-stage renal disease (ESRD), offering better outcomes than dialysis.",
    recoveryTime: "4–8 weeks",
    topCities: ["Chennai", "Delhi", "Mumbai", "Hyderabad"],
    costs: {
      treatment: { min: 700000, max: 1200000 },
      consultation: { min: 70000, max: 120000 },
      hospitalStay: { min: 100000, max: 180000 },
      medicines: { min: 60000, max: 100000 },
      localTransport: { min: 15000, max: 25000 },
    },
    recommendedHospitals: [
      "Apollo Hospitals Chennai",
      "Medanta – The Medicity",
      "Kokilaben Dhirubhai Ambani Hospital",
      "Indraprastha Apollo Hospital Delhi",
      "AIIMS New Delhi",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–3", description: "Detailed nephrology consultation, tissue typing, HLA matching", icon: "video" },
      { phase: "Arrival", days: "Day 4", description: "India arrival, comprehensive transplant evaluation begins", icon: "plane" },
      { phase: "Workup", days: "Day 5–7", description: "Full recipient & donor workup, ethics committee clearance", icon: "flask" },
      { phase: "Surgery", days: "Day 8", description: "Kidney transplant surgery (3–4 hrs)", icon: "activity" },
      { phase: "ICU Care", days: "Day 9–12", description: "Strict fluid management, immunosuppression initiation", icon: "bed" },
      { phase: "Monitoring", days: "Day 13–20", description: "Daily creatinine checks, biopsy if needed, wound care", icon: "clipboard" },
      { phase: "Discharge", days: "Day 21–25", description: "Stable graft function, patient education on medications", icon: "home" },
      { phase: "Return Home", days: "Day 30", description: "Final clearance with transplant team, travel advisory", icon: "plane" },
    ],
  },
  {
    id: "liver-transplant",
    name: "Liver Transplant",
    category: "Transplant",
    overview:
      "Replacement of a diseased liver with a healthy donor liver. Indicated for cirrhosis, liver failure, hepatocellular carcinoma. India has world-class liver transplant programs.",
    recoveryTime: "2–3 months",
    topCities: ["Delhi", "Chennai", "Mumbai", "Bangalore"],
    costs: {
      treatment: { min: 1500000, max: 2500000 },
      consultation: { min: 100000, max: 180000 },
      hospitalStay: { min: 200000, max: 350000 },
      medicines: { min: 100000, max: 180000 },
      localTransport: { min: 20000, max: 35000 },
    },
    recommendedHospitals: [
      "Medanta – The Medicity",
      "Apollo Hospitals Chennai",
      "Indraprastha Apollo Hospital Delhi",
      "Fortis Memorial Research Institute",
      "AIIMS New Delhi",
    ],
    journeyTimeline: [
      { phase: "Pre-Evaluation", days: "Day 1–5", description: "Comprehensive transplant evaluation, MELD score assessment", icon: "video" },
      { phase: "Arrival", days: "Day 6", description: "India arrival, transplant team meeting, donor evaluation", icon: "plane" },
      { phase: "Prep Work", days: "Day 7–10", description: "Full workup both recipient & donor, surgical team planning", icon: "flask" },
      { phase: "Surgery", days: "Day 11", description: "Liver transplant surgery (8–12 hrs, living donor)", icon: "activity" },
      { phase: "ICU Care", days: "Day 12–18", description: "Intensive post-transplant monitoring, tacrolimus levels", icon: "bed" },
      { phase: "Recovery", days: "Day 19–35", description: "Progressive mobilization, liver function normalization", icon: "clipboard" },
      { phase: "Return Home", days: "Day 60–90", description: "Stable LFTs, cleared for travel with immunosuppression plan", icon: "home" },
    ],
  },
  {
    id: "chemotherapy",
    name: "Chemotherapy (Cancer Treatment)",
    category: "Oncology",
    overview:
      "Systemic drug treatment targeting and destroying cancer cells. India offers advanced chemotherapy protocols with targeted therapy, immunotherapy, and personalized medicine at fraction of Western costs.",
    recoveryTime: "3–6 months (full course)",
    topCities: ["Delhi", "Mumbai", "Chennai", "Hyderabad"],
    costs: {
      treatment: { min: 100000, max: 500000 },
      consultation: { min: 30000, max: 60000 },
      hospitalStay: { min: 40000, max: 80000 },
      medicines: { min: 50000, max: 200000 },
      localTransport: { min: 15000, max: 30000 },
    },
    recommendedHospitals: [
      "Apollo Hospitals Chennai",
      "AIIMS New Delhi",
      "Tata Memorial Hospital Mumbai",
      "Narayana Health City Bangalore",
      "Medanta – The Medicity",
    ],
    journeyTimeline: [
      { phase: "Oncology Review", days: "Day 1–2", description: "Online tumor board consultation, biopsy and pathology review", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, PET-CT scan and staging workup", icon: "plane" },
      { phase: "Planning", days: "Day 4–5", description: "Personalized chemo protocol selection, port-a-cath placement", icon: "flask" },
      { phase: "Cycle 1", days: "Day 6–8", description: "First chemotherapy cycle, anti-nausea medications, monitoring", icon: "activity" },
      { phase: "Observation", days: "Day 9–10", description: "Post-chemo monitoring, blood counts, side effect management", icon: "bed" },
      { phase: "Discharge", days: "Day 11", description: "Discharge between cycles, dietary counseling, schedule for next cycle", icon: "clipboard" },
      { phase: "Follow-Up Plan", days: "Day 12–14", description: "Plan for subsequent cycles, teleconsultation available", icon: "home" },
    ],
  },
  {
    id: "radiation",
    name: "Radiation Therapy",
    category: "Oncology",
    overview:
      "Advanced radiotherapy using IMRT, VMAT, Stereotactic Radiosurgery (Gamma Knife, CyberKnife), and proton therapy to precisely target tumors while minimizing damage to surrounding tissue.",
    recoveryTime: "2–6 weeks post-treatment",
    topCities: ["Delhi", "Mumbai", "Hyderabad", "Chennai"],
    costs: {
      treatment: { min: 200000, max: 600000 },
      consultation: { min: 30000, max: 60000 },
      hospitalStay: { min: 30000, max: 70000 },
      medicines: { min: 20000, max: 50000 },
      localTransport: { min: 15000, max: 30000 },
    },
    recommendedHospitals: [
      "AIIMS New Delhi",
      "Apollo Hospitals Chennai",
      "Kokilaben Dhirubhai Ambani Hospital",
      "Manipal Hospital Bangalore",
      "Medanta – The Medicity",
    ],
    journeyTimeline: [
      { phase: "Pre-Planning", days: "Day 1–2", description: "Online radiation oncology consultation, scan review", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, simulation CT/MRI for treatment planning", icon: "plane" },
      { phase: "Planning", days: "Day 4–5", description: "Dosimetry planning, mask fabrication, quality assurance", icon: "flask" },
      { phase: "Treatment Start", days: "Day 6", description: "First fraction of radiation therapy (15–30 min session)", icon: "activity" },
      { phase: "Daily Treatment", days: "Day 7–20", description: "Daily radiation sessions (5 days/week), side effect monitoring", icon: "bed" },
      { phase: "Mid-Point Check", days: "Day 14", description: "Response assessment, treatment plan review if needed", icon: "clipboard" },
      { phase: "Completion", days: "Day 21–25", description: "Final fractions, end-of-treatment scan, follow-up plan", icon: "home" },
    ],
  },
  {
    id: "ivf",
    name: "IVF (In Vitro Fertilization)",
    category: "Fertility",
    overview:
      "Assisted reproductive technology where eggs are fertilized outside the body and embryos are transferred to the uterus. India offers high success rates at significantly lower cost than Western countries.",
    recoveryTime: "2–4 weeks",
    topCities: ["Delhi", "Mumbai", "Bangalore", "Chennai"],
    costs: {
      treatment: { min: 80000, max: 180000 },
      consultation: { min: 15000, max: 30000 },
      hospitalStay: { min: 20000, max: 40000 },
      medicines: { min: 30000, max: 60000 },
      localTransport: { min: 10000, max: 20000 },
    },
    recommendedHospitals: [
      "Manipal Hospital Bangalore",
      "Kokilaben Dhirubhai Ambani Hospital",
      "Apollo Hospitals Chennai",
      "Jaslok Hospital Mumbai",
      "Artemis Hospital Gurgaon",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online fertility consultation, share AMH, FSH, semen analysis", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, baseline ultrasound and hormone tests", icon: "plane" },
      { phase: "Stimulation", days: "Day 4–12", description: "Ovarian stimulation injections, daily monitoring ultrasounds", icon: "flask" },
      { phase: "Egg Retrieval", days: "Day 13", description: "Transvaginal ultrasound-guided egg retrieval, semen collection", icon: "activity" },
      { phase: "Fertilization", days: "Day 14–17", description: "ICSI/IVF fertilization in lab, embryo culture and grading", icon: "bed" },
      { phase: "Embryo Transfer", days: "Day 18", description: "Best quality embryo transferred under ultrasound guidance", icon: "clipboard" },
      { phase: "Beta hCG Test", days: "Day 28–30", description: "Pregnancy test, continue progesterone support, return home", icon: "home" },
    ],
  },
  {
    id: "rhinoplasty",
    name: "Cosmetic Rhinoplasty (Nose Surgery)",
    category: "Cosmetic",
    overview:
      "Surgical reshaping of the nose for aesthetic or functional improvement. Can address the nasal bridge, tip, nostrils, and septum. India offers expert plastic surgeons at 60–70% lower cost.",
    recoveryTime: "2–4 weeks",
    topCities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad"],
    costs: {
      treatment: { min: 80000, max: 180000 },
      consultation: { min: 10000, max: 25000 },
      hospitalStay: { min: 15000, max: 30000 },
      medicines: { min: 8000, max: 15000 },
      localTransport: { min: 8000, max: 15000 },
    },
    recommendedHospitals: [
      "Kokilaben Dhirubhai Ambani Hospital",
      "Jaslok Hospital Mumbai",
      "Lilavati Hospital Mumbai",
      "Max Super Speciality Hospital Saket",
      "Fortis Memorial Research Institute",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online consultation with plastic surgeon, photo analysis", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, in-person consultation, 3D imaging", icon: "plane" },
      { phase: "Pre-Op", days: "Day 4", description: "Blood tests, medical fitness, final surgical plan review", icon: "flask" },
      { phase: "Surgery", days: "Day 5", description: "Open or closed rhinoplasty (2–3 hrs under general anesthesia)", icon: "activity" },
      { phase: "Recovery", days: "Day 6–8", description: "Cast applied, swelling management, antibiotics", icon: "bed" },
      { phase: "Cast Removal", days: "Day 12", description: "External cast removed, nasal splint applied, sutures out", icon: "clipboard" },
      { phase: "Return Home", days: "Day 14", description: "Travel allowed, avoid strenuous activity for 4 weeks", icon: "home" },
    ],
  },
  {
    id: "liposuction",
    name: "Liposuction",
    category: "Cosmetic",
    overview:
      "Surgical fat removal from specific body areas using cannula and suction. Vaser liposuction and laser-assisted techniques provide body contouring with minimal scarring.",
    recoveryTime: "2–4 weeks",
    topCities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad"],
    costs: {
      treatment: { min: 60000, max: 150000 },
      consultation: { min: 8000, max: 20000 },
      hospitalStay: { min: 15000, max: 30000 },
      medicines: { min: 8000, max: 15000 },
      localTransport: { min: 8000, max: 15000 },
    },
    recommendedHospitals: [
      "Kokilaben Dhirubhai Ambani Hospital",
      "Lilavati Hospital Mumbai",
      "Jaslok Hospital Mumbai",
      "Dr. L. H. Hiranandani Hospital Mumbai",
      "Manipal Hospital Bangalore",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online plastic surgery consultation, photos and BMI review", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, body marking and surgical area consultation", icon: "plane" },
      { phase: "Pre-Op", days: "Day 4", description: "Blood tests, anesthesia review, final area selection", icon: "flask" },
      { phase: "Surgery", days: "Day 5", description: "Vaser/laser liposuction (2–4 hrs depending on areas)", icon: "activity" },
      { phase: "Recovery", days: "Day 6–8", description: "Compression garment fitted, drain management, wound care", icon: "bed" },
      { phase: "Post-Op Check", days: "Day 9–10", description: "Drain removal if present, garment check, lymphatic massage", icon: "clipboard" },
      { phase: "Return Home", days: "Day 12–14", description: "Final check, cleared for long-haul travel with compression stockings", icon: "home" },
    ],
  },
  {
    id: "hair-transplant",
    name: "Hair Transplant",
    category: "Cosmetic",
    overview:
      "FUE (Follicular Unit Extraction) or FUT hair transplant to restore natural hairline. India has world-renowned trichologists offering premium results at 70% lower cost than the UK or USA.",
    recoveryTime: "2–4 weeks",
    topCities: ["Delhi", "Mumbai", "Hyderabad", "Bangalore"],
    costs: {
      treatment: { min: 40000, max: 120000 },
      consultation: { min: 5000, max: 15000 },
      hospitalStay: { min: 5000, max: 12000 },
      medicines: { min: 5000, max: 10000 },
      localTransport: { min: 6000, max: 12000 },
    },
    recommendedHospitals: [
      "BLK-Max Super Speciality Hospital",
      "Artemis Hospital Gurgaon",
      "Max Super Speciality Hospital Saket",
      "Manipal Hospital Bangalore",
      "Apollo Gleneagles Hospital Kolkata",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1", description: "Online trichology consultation, share photos of hair loss", icon: "video" },
      { phase: "Arrival", days: "Day 2", description: "India arrival, detailed scalp examination, graft count estimate", icon: "plane" },
      { phase: "Procedure Day", days: "Day 3", description: "FUE/DHI hair transplant (6–8 hrs, 2000–4000 grafts)", icon: "activity" },
      { phase: "Post-Procedure", days: "Day 4–5", description: "Scalp care, anti-swelling medications, sleep upright", icon: "bed" },
      { phase: "Wash Day", days: "Day 6", description: "First supervised scalp wash, instructions for home care", icon: "clipboard" },
      { phase: "Return Home", days: "Day 7–8", description: "Cleared for travel, avoid direct sun on scalp for 2 weeks", icon: "home" },
    ],
  },
  {
    id: "dental-implant",
    name: "Dental Implant",
    category: "Dental",
    overview:
      "Titanium post surgically placed into the jawbone as an artificial tooth root. Crown attached after osseointegration. India offers premium implants (Nobel Biocare, Straumann) at 70% lower cost.",
    recoveryTime: "3–6 months (osseointegration)",
    topCities: ["Delhi", "Mumbai", "Bangalore", "Hyderabad"],
    costs: {
      treatment: { min: 25000, max: 60000 },
      consultation: { min: 3000, max: 8000 },
      hospitalStay: { min: 0, max: 5000 },
      medicines: { min: 3000, max: 8000 },
      localTransport: { min: 5000, max: 10000 },
    },
    recommendedHospitals: [
      "Manipal Hospital Bangalore",
      "Apollo Hospitals Chennai",
      "Artemis Hospital Gurgaon",
      "Narayana Health City Bangalore",
      "Columbia Asia Hospital Bangalore",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1", description: "Online dental consultation, OPG X-ray or CBCT review", icon: "video" },
      { phase: "Arrival", days: "Day 2", description: "India arrival, clinical dental examination, bone density check", icon: "plane" },
      { phase: "Implant Placement", days: "Day 3", description: "Titanium implant surgically placed under local anesthesia", icon: "activity" },
      { phase: "Recovery", days: "Day 4–5", description: "Swelling management, antibiotics, soft food diet", icon: "bed" },
      { phase: "Healing", days: "Day 6–8", description: "Wound check, suture removal, osseointegration begins", icon: "clipboard" },
      { phase: "Return Home", days: "Day 9–10", description: "Cleared for travel, crown fitting arranged after 3–6 months", icon: "home" },
    ],
  },
  {
    id: "bariatric",
    name: "Bariatric (Weight Loss) Surgery",
    category: "General Surgery",
    overview:
      "Laparoscopic weight loss surgery including gastric sleeve, gastric bypass, and mini-gastric bypass. Treats severe obesity and related conditions like Type 2 diabetes, hypertension.",
    recoveryTime: "3–6 weeks",
    topCities: ["Delhi", "Mumbai", "Hyderabad", "Bangalore"],
    costs: {
      treatment: { min: 200000, max: 380000 },
      consultation: { min: 25000, max: 45000 },
      hospitalStay: { min: 35000, max: 70000 },
      medicines: { min: 15000, max: 30000 },
      localTransport: { min: 10000, max: 20000 },
    },
    recommendedHospitals: [
      "Medanta – The Medicity",
      "Kokilaben Dhirubhai Ambani Hospital",
      "Fortis Memorial Research Institute",
      "Max Super Speciality Hospital Saket",
      "Apollo Hospitals Chennai",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online bariatric consultation, BMI assessment, comorbidity review", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, nutritionist consultation, psychological clearance", icon: "plane" },
      { phase: "Pre-Op Workup", days: "Day 4", description: "Sleep study, endoscopy, blood tests, anesthesia review", icon: "flask" },
      { phase: "Surgery", days: "Day 5", description: "Laparoscopic gastric sleeve/bypass (1–2 hrs)", icon: "activity" },
      { phase: "Recovery", days: "Day 6–8", description: "Liquid diet started, walking begins day 1, drain removal", icon: "bed" },
      { phase: "Discharge", days: "Day 9–10", description: "Discharged on liquid diet protocol, nutritional supplements", icon: "clipboard" },
      { phase: "Return Home", days: "Day 12–14", description: "Dietary plan provided, teleconsultation follow-up arranged", icon: "home" },
    ],
  },
  {
    id: "gallbladder",
    name: "Gallbladder Removal (Laparoscopic)",
    category: "General Surgery",
    overview:
      "Laparoscopic cholecystectomy to remove the gallbladder through small incisions. Most common abdominal surgery with quick recovery. Treats gallstones, cholecystitis, and gallbladder disease.",
    recoveryTime: "1–2 weeks",
    topCities: ["Delhi", "Mumbai", "Bangalore", "Chennai"],
    costs: {
      treatment: { min: 60000, max: 120000 },
      consultation: { min: 10000, max: 20000 },
      hospitalStay: { min: 20000, max: 40000 },
      medicines: { min: 8000, max: 15000 },
      localTransport: { min: 6000, max: 12000 },
    },
    recommendedHospitals: [
      "Apollo Hospitals Chennai",
      "Narayana Health City Bangalore",
      "Fortis Memorial Research Institute",
      "Ruby Hall Clinic Pune",
      "Aster CMI Hospital Bangalore",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1", description: "Online consultation, share ultrasound and LFT reports", icon: "video" },
      { phase: "Arrival", days: "Day 2", description: "India arrival, admission, pre-surgical blood work", icon: "plane" },
      { phase: "Surgery", days: "Day 3", description: "Laparoscopic cholecystectomy (45–60 min)", icon: "activity" },
      { phase: "Recovery", days: "Day 4–5", description: "Pain management, liquid to soft diet, early mobilization", icon: "bed" },
      { phase: "Discharge", days: "Day 6", description: "Discharged with dietary guidelines, wound care instructions", icon: "clipboard" },
      { phase: "Return Home", days: "Day 7–8", description: "Cleared for air travel, avoid heavy lifting for 2 weeks", icon: "home" },
    ],
  },
  {
    id: "prostate",
    name: "Prostate Surgery",
    category: "Urology",
    overview:
      "Robotic or laparoscopic prostatectomy for prostate cancer or BPH. Da Vinci robotic surgery offers precision nerve-sparing technique with faster recovery and minimal blood loss.",
    recoveryTime: "4–6 weeks",
    topCities: ["Delhi", "Mumbai", "Hyderabad", "Bangalore"],
    costs: {
      treatment: { min: 250000, max: 450000 },
      consultation: { min: 30000, max: 55000 },
      hospitalStay: { min: 40000, max: 80000 },
      medicines: { min: 20000, max: 40000 },
      localTransport: { min: 10000, max: 20000 },
    },
    recommendedHospitals: [
      "Medanta – The Medicity",
      "AIIMS New Delhi",
      "Kokilaben Dhirubhai Ambani Hospital",
      "Indraprastha Apollo Hospital Delhi",
      "Max Super Speciality Hospital Saket",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online urology consultation, share PSA, biopsy, MRI reports", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, urodynamic studies, robotic surgery briefing", icon: "plane" },
      { phase: "Pre-Op", days: "Day 4", description: "Blood tests, cardiac clearance, bowel preparation", icon: "flask" },
      { phase: "Surgery", days: "Day 5", description: "Robotic-assisted laparoscopic prostatectomy (2–3 hrs)", icon: "activity" },
      { phase: "Recovery", days: "Day 6–8", description: "Catheter management, early ambulation, pain control", icon: "bed" },
      { phase: "Discharge", days: "Day 9–10", description: "Discharge with catheter (removed after 7–10 days), pelvic floor exercises", icon: "clipboard" },
      { phase: "Return Home", days: "Day 12–14", description: "Travel with catheter in situ, removal done at home by local urologist", icon: "home" },
    ],
  },
  {
    id: "hernia",
    name: "Hernia Surgery",
    category: "General Surgery",
    overview:
      "Laparoscopic hernia repair using mesh to correct inguinal, umbilical, hiatal, or incisional hernias. Minimally invasive approach ensures faster recovery, less pain, and minimal scarring.",
    recoveryTime: "1–3 weeks",
    topCities: ["Delhi", "Mumbai", "Bangalore", "Chennai"],
    costs: {
      treatment: { min: 70000, max: 140000 },
      consultation: { min: 10000, max: 20000 },
      hospitalStay: { min: 20000, max: 40000 },
      medicines: { min: 8000, max: 15000 },
      localTransport: { min: 7000, max: 14000 },
    },
    recommendedHospitals: [
      "Fortis Memorial Research Institute",
      "Apollo Hospitals Chennai",
      "Aster CMI Hospital Bangalore",
      "Ruby Hall Clinic Pune",
      "Columbia Asia Hospital Bangalore",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1", description: "Online consultation, share USG abdomen reports", icon: "video" },
      { phase: "Arrival", days: "Day 2", description: "India arrival, surgical consultation, admission", icon: "plane" },
      { phase: "Surgery", days: "Day 3", description: "Laparoscopic TEP/TAPP hernia repair (1–1.5 hrs)", icon: "activity" },
      { phase: "Recovery", days: "Day 4–5", description: "Early mobilization, light diet, wound check", icon: "bed" },
      { phase: "Discharge", days: "Day 6", description: "Discharged with activity restrictions, return to hotel", icon: "clipboard" },
      { phase: "Return Home", days: "Day 8–10", description: "Cleared for travel, avoid heavy lifting for 4 weeks", icon: "home" },
    ],
  },
  {
    id: "skin-cancer",
    name: "Skin Cancer Surgery",
    category: "Oncology",
    overview:
      "Surgical excision of skin cancers including melanoma, basal cell carcinoma, and squamous cell carcinoma. Mohs micrographic surgery offers highest cure rates with maximal tissue preservation.",
    recoveryTime: "2–4 weeks",
    topCities: ["Delhi", "Mumbai", "Hyderabad", "Chennai"],
    costs: {
      treatment: { min: 80000, max: 200000 },
      consultation: { min: 15000, max: 30000 },
      hospitalStay: { min: 20000, max: 45000 },
      medicines: { min: 10000, max: 25000 },
      localTransport: { min: 8000, max: 15000 },
    },
    recommendedHospitals: [
      "AIIMS New Delhi",
      "Apollo Hospitals Chennai",
      "Kokilaben Dhirubhai Ambani Hospital",
      "Medanta – The Medicity",
      "Lilavati Hospital Mumbai",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online dermatology/oncology consultation, share biopsy report", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, dermatoscopy and sentinel lymph node mapping", icon: "plane" },
      { phase: "Pre-Op", days: "Day 4", description: "Surgical markings, PET scan if melanoma, anesthesia briefing", icon: "flask" },
      { phase: "Surgery", days: "Day 5", description: "Wide local excision or Mohs surgery with reconstruction if needed", icon: "activity" },
      { phase: "Wound Care", days: "Day 6–9", description: "Daily dressing changes, histopathology review, antibiotic cover", icon: "bed" },
      { phase: "Pathology", days: "Day 10–12", description: "Margin clearance confirmed, adjuvant therapy plan if required", icon: "clipboard" },
      { phase: "Return Home", days: "Day 13–15", description: "Travel cleared, sunscreen protocol and follow-up plan provided", icon: "home" },
    ],
  },
  {
    id: "fracture",
    name: "Orthopedic Fracture Surgery",
    category: "Orthopedic",
    overview:
      "Open reduction and internal fixation (ORIF) or intramedullary nailing for complex bone fractures. Includes femur, tibia, humerus, and pelvis fractures requiring surgical stabilization.",
    recoveryTime: "6–12 weeks",
    topCities: ["Delhi", "Mumbai", "Bangalore", "Chennai"],
    costs: {
      treatment: { min: 120000, max: 250000 },
      consultation: { min: 20000, max: 40000 },
      hospitalStay: { min: 30000, max: 60000 },
      medicines: { min: 15000, max: 30000 },
      localTransport: { min: 10000, max: 20000 },
    },
    recommendedHospitals: [
      "Medanta – The Medicity",
      "Apollo Hospitals Chennai",
      "Fortis Memorial Research Institute",
      "Manipal Hospital Bangalore",
      "Sir Ganga Ram Hospital",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Online orthopedic consultation, share X-ray and CT scan", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, orthopedic assessment, implant planning", icon: "plane" },
      { phase: "Pre-Op", days: "Day 4", description: "Blood tests, anesthesia review, implant selection", icon: "flask" },
      { phase: "Surgery", days: "Day 5", description: "ORIF/IMN fracture fixation (1–3 hrs)", icon: "activity" },
      { phase: "Recovery", days: "Day 6–9", description: "Post-op X-ray, physiotherapy, DVT prophylaxis", icon: "bed" },
      { phase: "Mobilization", days: "Day 10–14", description: "Weight-bearing as tolerated, walking aids provided", icon: "clipboard" },
      { phase: "Return Home", days: "Day 15", description: "Travel cleared, home physio plan, follow-up in 6 weeks", icon: "home" },
    ],
  },
  {
    id: "other",
    name: "Other (Custom Treatment)",
    category: "General",
    overview:
      "India offers a comprehensive range of medical treatments across all specialties. Our expert coordinators will help you find the right hospital and specialist for your specific condition.",
    recoveryTime: "Varies by treatment",
    topCities: ["Delhi", "Mumbai", "Chennai", "Bangalore", "Hyderabad"],
    costs: {
      treatment: { min: 50000, max: 500000 },
      consultation: { min: 10000, max: 50000 },
      hospitalStay: { min: 20000, max: 100000 },
      medicines: { min: 10000, max: 50000 },
      localTransport: { min: 8000, max: 20000 },
    },
    recommendedHospitals: [
      "Apollo Hospitals Chennai",
      "Medanta – The Medicity",
      "Fortis Memorial Research Institute",
      "AIIMS New Delhi",
      "Max Super Speciality Hospital Saket",
    ],
    journeyTimeline: [
      { phase: "Pre-Consultation", days: "Day 1–2", description: "Detailed online consultation with specialist team", icon: "video" },
      { phase: "Arrival", days: "Day 3", description: "India arrival, hospital admission and assessment", icon: "plane" },
      { phase: "Diagnostics", days: "Day 4", description: "Comprehensive diagnostic workup and specialist review", icon: "flask" },
      { phase: "Treatment", days: "Day 5", description: "Procedure/surgery as per treatment plan", icon: "activity" },
      { phase: "Recovery", days: "Day 6–10", description: "Post-treatment monitoring and care", icon: "bed" },
      { phase: "Discharge", days: "Day 11–12", description: "Discharge with follow-up plan", icon: "clipboard" },
      { phase: "Return Home", days: "Day 13–15", description: "Travel clearance, home care instructions", icon: "home" },
    ],
  },
];

export const hospitals: Hospital[] = [
  {
    id: "apollo-chennai",
    name: "Apollo Hospitals Chennai",
    city: "Chennai, Tamil Nadu",
    specialties: ["Cardiac Surgery", "Oncology", "Neurology", "Transplants", "Orthopedics"],
    rating: 4.9,
    accreditation: "JCI & NABH Accredited",
    beds: 560,
    experience: "40+ years",
  },
  {
    id: "medanta",
    name: "Medanta – The Medicity",
    city: "Gurugram, Haryana",
    specialties: ["Cardiac Sciences", "Orthopedics", "Neurosciences", "Liver Transplant", "Oncology"],
    rating: 4.8,
    accreditation: "JCI & NABH Accredited",
    beds: 1500,
    experience: "15+ years",
  },
  {
    id: "fortis",
    name: "Fortis Memorial Research Institute",
    city: "Gurugram, Haryana",
    specialties: ["Neurology", "Orthopedics", "Cardiac Care", "Renal Sciences", "Oncology"],
    rating: 4.8,
    accreditation: "JCI & NABH Accredited",
    beds: 310,
    experience: "12+ years",
  },
  {
    id: "aiims",
    name: "AIIMS New Delhi",
    city: "New Delhi",
    specialties: ["All Specialties", "Research", "Rare Diseases", "Oncology", "Neurology"],
    rating: 4.9,
    accreditation: "NABH Accredited",
    beds: 2478,
    experience: "70+ years",
  },
  {
    id: "max-saket",
    name: "Max Super Speciality Hospital Saket",
    city: "New Delhi",
    specialties: ["Cardiac Sciences", "Oncology", "Neurosciences", "Orthopedics", "Robotic Surgery"],
    rating: 4.7,
    accreditation: "JCI & NABH Accredited",
    beds: 500,
    experience: "20+ years",
  },
  {
    id: "narayana",
    name: "Narayana Health City Bangalore",
    city: "Bangalore, Karnataka",
    specialties: ["Cardiac Surgery", "Cancer Care", "Bone Marrow Transplant", "Orthopedics", "Nephrology"],
    rating: 4.8,
    accreditation: "JCI & NABH Accredited",
    beds: 1000,
    experience: "22+ years",
  },
  {
    id: "kokilaben",
    name: "Kokilaben Dhirubhai Ambani Hospital",
    city: "Mumbai, Maharashtra",
    specialties: ["Robotic Surgery", "Cancer Care", "Neurology", "Transplants", "Cosmetic Surgery"],
    rating: 4.8,
    accreditation: "JCI & NABH Accredited",
    beds: 750,
    experience: "15+ years",
  },
  {
    id: "manipal",
    name: "Manipal Hospital Bangalore",
    city: "Bangalore, Karnataka",
    specialties: ["Orthopedics", "Oncology", "Fertility", "Neurology", "Cardiac Care"],
    rating: 4.7,
    accreditation: "JCI & NABH Accredited",
    beds: 600,
    experience: "30+ years",
  },
  {
    id: "blk-max",
    name: "BLK-Max Super Speciality Hospital",
    city: "New Delhi",
    specialties: ["Bone Marrow Transplant", "Cancer", "Cardiac Sciences", "Neurosciences", "Hair Transplant"],
    rating: 4.7,
    accreditation: "JCI & NABH Accredited",
    beds: 650,
    experience: "75+ years",
  },
  {
    id: "sir-ganga-ram",
    name: "Sir Ganga Ram Hospital",
    city: "New Delhi",
    specialties: ["Cardiac Surgery", "Orthopedics", "Neurology", "Gastroenterology", "Urology"],
    rating: 4.6,
    accreditation: "NABH Accredited",
    beds: 675,
    experience: "80+ years",
  },
  {
    id: "apollo-delhi",
    name: "Indraprastha Apollo Hospital Delhi",
    city: "New Delhi",
    specialties: ["Cardiac Care", "Neurology", "Transplants", "Oncology", "Robotic Surgery"],
    rating: 4.8,
    accreditation: "JCI & NABH Accredited",
    beds: 710,
    experience: "25+ years",
  },
  {
    id: "artemis",
    name: "Artemis Hospital Gurgaon",
    city: "Gurugram, Haryana",
    specialties: ["Cardiac Sciences", "Neurosciences", "Orthopedics", "Oncology", "Fertility"],
    rating: 4.6,
    accreditation: "JCI & NABH Accredited",
    beds: 400,
    experience: "17+ years",
  },
  {
    id: "jaslok",
    name: "Jaslok Hospital Mumbai",
    city: "Mumbai, Maharashtra",
    specialties: ["Cardiac Surgery", "Neurology", "Nephrology", "Urology", "Cosmetic Surgery"],
    rating: 4.6,
    accreditation: "NABH Accredited",
    beds: 351,
    experience: "50+ years",
  },
  {
    id: "lilavati",
    name: "Lilavati Hospital Mumbai",
    city: "Mumbai, Maharashtra",
    specialties: ["Cardiac Care", "Oncology", "Orthopedics", "Dermatology", "Neurology"],
    rating: 4.6,
    accreditation: "NABH Accredited",
    beds: 323,
    experience: "35+ years",
  },
  {
    id: "asian-heart",
    name: "Asian Heart Institute Mumbai",
    city: "Mumbai, Maharashtra",
    specialties: ["Cardiac Surgery", "Interventional Cardiology", "Cardiac Rehabilitation", "Paediatric Cardiac"],
    rating: 4.9,
    accreditation: "JCI & NABH Accredited",
    beds: 400,
    experience: "20+ years",
  },
  {
    id: "aster-cmi",
    name: "Aster CMI Hospital Bangalore",
    city: "Bangalore, Karnataka",
    specialties: ["Cardiac Sciences", "Oncology", "Neurology", "Orthopedics", "Transplants"],
    rating: 4.6,
    accreditation: "NABH Accredited",
    beds: 450,
    experience: "10+ years",
  },
  {
    id: "apollo-kolkata",
    name: "Apollo Gleneagles Hospital Kolkata",
    city: "Kolkata, West Bengal",
    specialties: ["Cardiac Surgery", "Oncology", "Orthopedics", "Gastroenterology", "Hair Transplant"],
    rating: 4.7,
    accreditation: "JCI & NABH Accredited",
    beds: 520,
    experience: "20+ years",
  },
  {
    id: "ruby-hall",
    name: "Ruby Hall Clinic Pune",
    city: "Pune, Maharashtra",
    specialties: ["Cardiac Care", "Oncology", "Nephrology", "Orthopedics", "Cataract Surgery"],
    rating: 4.6,
    accreditation: "JCI & NABH Accredited",
    beds: 450,
    experience: "60+ years",
  },
  {
    id: "hiranandani",
    name: "Dr. L. H. Hiranandani Hospital Mumbai",
    city: "Mumbai, Maharashtra",
    specialties: ["Orthopedics", "Cardiac Care", "Urology", "Cosmetic Surgery", "Bariatric Surgery"],
    rating: 4.5,
    accreditation: "NABH Accredited",
    beds: 234,
    experience: "25+ years",
  },
  {
    id: "columbia-asia",
    name: "Columbia Asia Hospital Bangalore",
    city: "Bangalore, Karnataka",
    specialties: ["General Surgery", "Dentistry", "Orthopedics", "Gastroenterology", "Maternity"],
    rating: 4.5,
    accreditation: "NABH Accredited",
    beds: 180,
    experience: "15+ years",
  },
];

export const getTreatmentById = (id: string): Treatment | undefined => {
  return treatments.find((t) => t.id === id);
};

export const getHospitalByName = (name: string): Hospital | undefined => {
  return hospitals.find((h) => h.name === name);
};

export const formatCurrency = (amount: number): string => {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`;
  }
  return `₹${(amount / 1000).toFixed(0)}K`;
};

export const formatRange = (min: number, max: number): string => {
  return `${formatCurrency(min)} – ${formatCurrency(max)}`;
};

export const calculateTotal = (treatment: Treatment) => {
  const { costs } = treatment;
  const totalMin =
    costs.treatment.min +
    costs.consultation.min +
    costs.hospitalStay.min +
    costs.medicines.min +
    costs.localTransport.min;
  const totalMax =
    costs.treatment.max +
    costs.consultation.max +
    costs.hospitalStay.max +
    costs.medicines.max +
    costs.localTransport.max;
  return { min: totalMin, max: totalMax };
};
