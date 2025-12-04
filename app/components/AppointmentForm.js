"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  User,
  Calendar,
  CheckCircle,
} from "lucide-react";

const AppointmentForm = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [country, setCountry] = useState("India");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const aboutAppoint = async () => {
    if (!name || !email || !  !message || !country) {
      alert("Please fill all the fields.");
      return;
    }
   




    try {
      setLoading(true);
      console.log(name);
      const res = await axios.post("/api/Appointment", {
        name,
        email,
      message,
        country,
      });

      alert("Message sent successfully!");
      console.log(res.data);

    } catch (error) {
      console.error("Error:", error);
      //alert("Something went wrong!");
      alert(error);
    } finally {
      setLoading(false);
      
      setName("");
      setEmail("");
      setMessage("");
      setCountry("India");
    }
  };

//  alert("A");
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeTab, setActiveTab] = useState("AM");
  const [selectedTime, setSelectedTime] = useState(null);
  const [errors, setErrors] = useState({});

  // const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
        CompanyName:'',
        CompanyType:'',
        Designation:'',
        ddlcountry:'',
        txtwebsite: '',
        txtphone:'',
        Timezone:'',
        AppointmentDate:'',
        AppointmentTime:'',
        Message:'',
        Plan:''
  });

  const handleChange = (e) => {
    const { id, name, value, type, checked } = e.target;

    const key = id || name; // pick whichever is used
    const val = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
        ...prev,
        [key]: val,
    }));

};


// const validateStep = (step) => {
//   const formSection = document.getElementById(`step-${step}`);
//   if (!formSection) return true;

//   const inputs = formSection.querySelectorAll("input[required], select[required]");
//   let valid = true;

//   inputs.forEach((input) => {
//     if (!input.value.trim()) {
//       valid = false;
//       input.classList.add("border-red-500");
//       const message = document.createElement("p");
//       message.className = "error-text text-red-500 text-sm mt-1";
//       message.textContent = `${ input.placeholder ||input.name || "This field"} is required`;
//       input.parentElement.appendChild(message);
//     } else {
//       input.classList.remove("border-red-500");
//       if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         alert("Please enter a valid email address.");
//         return;
//       }
  
//       // Check if phone number is valid
//   if (!/^\d{10,}$/.test(mobile)) {
//       alert("Please enter a valid phone number with at least 10 digits.");
//       return;
//     }
//     }
//   });

//   return valid;
// };
const validateStep = (step) => {
  const formSection = document.getElementById(`step-${step}`);
  if (!formSection) return true;

  // Get required fields
  const inputs = formSection.querySelectorAll("input[required], select[required]");
  let valid = true;

  // Remove previous error messages
  formSection.querySelectorAll(".error-text").forEach(el => el.remove());

  inputs.forEach((input) => {
    input.classList.remove("border-red-500");

    // Check required field is empty
    if (!input.value.trim()) {
      valid = false;
      input.classList.add("border-red-500");

      const message = document.createElement("p");
      message.className = "error-text text-red-500 text-sm mt-1";
      message.textContent = `${input.placeholder || input.name || "This field"} is required`;
      input.parentElement.appendChild(message);
      return; // skip further checks for empty field
    }

    // Additional EMAIL VALIDATION
    if (input.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        valid = false;
        input.classList.add("border-red-500");

        const message = document.createElement("p");
        message.className = "error-text text-red-500 text-sm mt-1";
        message.textContent = "Please enter a valid email address.";
        input.parentElement.appendChild(message);
      }
    }

    // Additional PHONE NUMBER VALIDATION
    if (input.name === "mobile" || input.type === "tel") {
      const phoneRegex = /^\d{10,}$/;
      if (!phoneRegex.test(input.value)) {
        valid = false;
        input.classList.add("border-red-500");

        const message = document.createElement("p");
        message.className = "error-text text-red-500 text-sm mt-1";
        message.textContent = "Please enter a valid phone number (at least 10 digits).";
        input.parentElement.appendChild(message);
      }
    }
  });

  return valid;
};


const validateStep2 = () => {
  let valid = true;

  // Remove old error styles
  const dateLabel = document.getElementById("AppointmentDate");
  const timeLabel = document.querySelector("label[for='AppointmentTime']");
  if (dateLabel) dateLabel.classList.remove("text-red-600");
  if (timeLabel) timeLabel.classList.remove("text-red-600");

  // Get timezone value
  const timezone = document.querySelector("#step-2 select")?.value;

  // ✅ Single combined condition
  if (!timezone || !selectedDate) {
    alert("Please select both timezone and date before proceeding.");
    if (!timezone) document.querySelector("#step-2 select")?.classList.add("border-red-500");
    if (dateLabel) dateLabel.classList.add("text-red-600");
    valid = false;
  }

  return valid;
};

//  alert("b");

// const handleNext = () => {
//   const newErrors = {};
//   var validate = 0;
//   var weregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   var name = document.getElementById('fullName').value;
//   var email = document.getElementById('email').value;
//   var company = document.getElementById('CompanyName').value;
//   var companytype = document.getElementById('CompanyType').value;
//   var designation = document.getElementById('Designation').value;
//   var country = document.getElementById('ddlcountry').value;
//   var phone = document.getElementById('txtphone').value;

//   if (!weregex.test(email)) {
//       newErrors.email = 'Enter a valid email id...';
//   }


//   if (name == '') { newErrors.fullName = 'Name Required'; }
//   if (email == '') { newErrors.email = 'Email Required'; }
//   if (company == '') { newErrors.CompanyName = 'Company Name Required'; }
//   if (companytype == '') { newErrors.CompanyType = 'Company Type Required'; }
//   if (designation == '') { newErrors.Designation = 'Designation Required'; }
//   if (country == '') { newErrors.ddlcountry = 'Country Required'; }
//   if (phone == '') { newErrors.txtphone = 'Phone Required'; }
//   if (name != '' && email != '' && company != '' && companytype != '' && designation != '' && country != '' && phone != '') {
//       validate = 1;
//   }
//   if (validate == 1) {
//       setCurrentStep((prev) => prev + 1);
//   }
//   setErrors(newErrors);
//   return Object.keys(newErrors).length === 0;
// };

const handleNext = () => {
  const isValid = validateStep(step);
  if (isValid) {
    setStep((prev) => prev + 1);
  } else {
    alert("Please fill all required fields before proceeding.");
  }
};

const handlePrev = () => {
  setStep((prev) => prev - 1);
};

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//       // alert(JSON.stringify(formData));
//       // const response = await fetch('/api/Appointment', {
//       //     method: 'POST',
//       //     headers: {
//       //         'Content-Type': 'application/json',
//       //     },

//       //     body: JSON.stringify(formData),
//       // });

//       // if (response.ok) {
//       //     setCurrentStep((prev) => prev + 1);
//       //     alert('Appointment scheduled successfully! We will contact you shortly.');
//       //     setOpenModal(false);
//       //     setCurrentStep(1);
//       //     setFormData({
//       //         fullName: '',
//       //         email: '',
//       //         CompanyName: '',
//       //         CompanyType: '',
//       //         Designation: '',
//       //         ddlcountry: '',
//       //         txtwebsite: '',
//       //         txtphone: '',
//       //         Timezone: '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',
//       //         AppointmentDate: '',
//       //         AppointmentTime: '',
//       //         Message: ''
//       //     });
//       // } else {
//       //     //throw new Error('Failed to send email');
//       //     throw new Error(JSON.stringify(response.error));
//       // }

//       //New Tanya Code starts

//       var a = document.getElementById('Timezone').value;
//       var b = document.getElementById('AppointmentDate').value;
//       var c = document.getElementById('AppointmentTime').value;


//       if (!a || !b || !c) {
//           alert("Please fill all the fields.");
//           return;
//       }


//       const {
//           fullName,
//           email,
//           CompanyName,
//           CompanyType,
//           Designation,
//           ddlcountry,
//           txtwebsite,
//           txtphone,
//           Timezone,
//           AppointmentDate,
//           AppointmentTime,
//           Message,
//           Plan
//       } = formData;

//       try {
//           setLoading(true);
//           //console.log("🚀 Sending to API:", formData);
//           const res = await axios.post("/api/Appointment", {
//               fullName,
//               email,
//               CompanyName,
//               CompanyType,
//               Designation,
//               ddlcountry,
//               txtwebsite,
//               txtphone,
//               Timezone,
//               AppointmentDate,
//               AppointmentTime,
//               Message,
//               Plan
//           });
//           //alert(res);
//           alert("Appointment Scheduled Succesfully!");
//           setCurrentStep((prev) => prev + 1);

//           //console.log(res.data);


//       } catch (error) {
//           console.error("Error:", error);
//           //alert("Something went wrong!");
//           alert(error);

//       } finally {
//           setLoading(false);

//           setFormData({
//               fullName: '',
//               email: '',
//               CompanyName: '',
//               CompanyType: '',
//               Designation: '',
//               ddlcountry: '',
//               txtwebsite: '',
//               txtphone: '',
//               Timezone: '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',
//               AppointmentDate: '',
//               AppointmentTime: '',
//               Message: '',
//               Plan: plan || ''
//           });
//       }
//       // Code ends

//   } catch (error) {
//       console.error('Error:', error);
//       alert(error);
//   }
//   // alert('Form submitted successfully!');
// };


// const handleSubmit = (e) => {
//   e.preventDefault();
//   alert('Form submitted successfully!');
// };

const handleSubmit = async () => {
  try {
    setLoading(true);

    console.log("Sending:", formData);

    await axios.post("/api/Appointment", formData);

    alert("Appointment submitted successfully!");

    setStep(3);
  } catch (err) {
    alert("Error submitting form");
    console.error(err);
  } finally {
    setLoading(false);
  }
};




// alert("submit");
// const validateStep = (step) => {
//   const formSection = document.getElementById(`step-${step}`);
//   if (!formSection) return true;

//   const inputs = formSection.querySelectorAll("input[required], select[required]");
//   let valid = true;

//   inputs.forEach((input) => {
//     if (!input.value.trim()) {
//       valid = false;
//       input.classList.add("border-red-500");
//     } else {
//       input.classList.remove("border-red-500");
//     }
//   });

//   return valid;
// };










  if (!isOpen) return null;

  // 📅 Calendar helpers
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );
  const prevMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  const nextMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );

  const generateDays = () => {
    const days = [];
    const startDay = startOfMonth.getDay();
    const totalDays = endOfMonth.getDate();

    for (let i = 0; i < startDay; i++) days.push(null);
    for (let i = 1; i <= totalDays; i++) {
      days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
    }
    return days;
  };

  // ⏰ Generate 30-min slots
  const generateSlots = (isAM) => {
    const slots = [];
    for (let h = isAM ? 0 : 12; h < (isAM ? 12 : 24); h++) {
      for (let m = 0; m < 60; m += 30) {
        let hour = h % 12 || 12;
        let minute = m === 0 ? "00" : m;
        let label = `${hour}:${minute}`;
        slots.push(label);
      }
    }
    return slots;
  };

  const steps = [
    { id: 1, label: "Personal Info", icon: <User size={18} /> },
    { id: 2, label: "Booking", icon: <Calendar size={18} /> },
    { id: 3, label: "Finish", icon: <CheckCircle size={18} /> },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onSubmit={handleSubmit} >
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-1 text-gray-900">
          Schedule an Appointment
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Book an Appointment with our experts for an online demo.
        </p>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-6 relative">
          {steps.map((s, idx) => (
            <div
              key={s.id}
              className="flex-1 flex flex-col items-center text-center relative"
            >
              {idx < steps.length - 1 && (
                <div
                  className={`absolute top-5 left-1/2 w-full h-[2px] ${
                    step > s.id ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  style={{ transform: "translateX(50%)" }}
                />
              )}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full relative z-10 ${
                  step === s.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : step > s.id
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {s.icon}
              </div>
              <span
                className={`mt-2 text-sm font-medium ${
                  step >= s.id ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1 - Personal Info */}
        {step === 1 && (
          <form id="step-1" className="space-y-6" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 "> 
              {[
                { label: "Name",   id:"fullName",type: "text", placeholder: "Enter your name"  },
                { label: "Email ID",  id:"email",type: "email", placeholder: "Enter email" },
                { label: "Company Name", id:"CompanyName", type: "text", placeholder: "Enter company name" },
                { label: "Company Type",  id:"CompanyType",type: "text", placeholder: "Enter company type" },
                { label: "Your Designation",   htmlFor:"Designation" ,  id:"Designation",type: "text", placeholder: "Enter designation" },
                { label: "Country", type: "text",  htmlFor:"ddlcountry", id:"ddlcountry", placeholder: "Enter country" },
                { label: "Website URL ", htmlFor:"txtwebsite" ,id:"txtwebsite", type: "url", placeholder: "Enter website URL" },
                { label: "Phone Number", htmlForm:"txtphone",      id:"txtphone",type: "tel", placeholder: "Enter phone number" },
              ].map((field, idx) => (
                <div key={idx}>
                  <label    htmlFor={field.id}  className="block text-sm font-semibold mb-1 text-gray-800">
                    {field.label}
                  </label>
                  <input
                  id={field.id}
                    type={field.type}
                    value={formData[field.id] || ""}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                   required  />
                </div>
              ))}
            </div>
            <div className="text-right">
            <button
  type="button"
  onClick={handleNext}
  className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
>
                Next →
              </button>
            </div>
          </form>
        )}

        {/* Step 2 - Booking */}
        {step === 2 && (
          <form  id="step-2"className="space-y-2">
            {/* Timezone + Date in one line */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-800" htmlFor="Timezone" required>
                  Timezone
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required>
                  <option>UTC</option>
                  <option>GMT</option>
                  <option>EST</option>
                  <option>PST</option>
                  <option>IST</option>
                </select>
              </div>

              {/* Date Picker Toggle */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-2 text-gray-800"   id="AppointmentDate"  htmlFor="AppointmentDate"  required>
                  Select Date
                </label>
                <button
                  type="button"
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 flex justify-between items-center"
                >
                  {selectedDate
                    ? selectedDate.toDateString()
                    : "Choose a date"}
                  <Calendar size={18} />
                </button>

                {showCalendar && (
                  <div className="absolute mt-2 bg-white border rounded-lg shadow-lg p-4 z-20">
                    {/* Month Navigation */}
                    <div className="flex justify-between items-center mb-4">
                      <button onClick={prevMonth} type="button">
                        <ChevronLeft />
                      </button>
                      <span className="font-semibold text-gray-800">
                        {currentMonth.toLocaleString("default", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <button onClick={nextMonth} type="button">
                        <ChevronRight />
                      </button>
                    </div>
                    {/* Days of Week */}
                    <div className="grid grid-cols-7 text-sm font-medium text-gray-500 mb-2">
                      {daysOfWeek.map((day) => (
                        <div key={day} className="text-center">
                          {day}
                        </div>
                      ))}
                    </div>
                    {/* Dates */}
                    <div className="grid grid-cols-7 gap-2" id="AppointmentDate">
                      {generateDays().map((day, idx) => (
                        <div key={idx} className="text-center">
                          {day ? (
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedDate(day);
                                setShowCalendar(false);
                              }}
                              className={`w-10 h-10 rounded-full transition ${
                                selectedDate &&
                                day.toDateString() ===
                                  selectedDate.toDateString()
                                  ? "bg-blue-600 text-white"
                                  : "hover:bg-blue-100"
                              }`}
                            >
                              {day.getDate()}
                            </button>
                          ) : (
                            <span className="w-10 h-10 inline-block"></span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Time Slots */}
            <div>
  <label className="block text-sm font-semibold  text-gray-800" >
    Time Slots
  </label>

  {/* Tabs for AM/PM */}
  <div className="flex mb-4 border-b border-gray-300">
    {["AM", "PM"].map((tab) => (
      <button
        key={tab}
        type="button"
        onClick={() => setActiveTab(tab)}
        className={`flex-1 cursor-pointer px-4 py-2 text-sm font-medium transition ${
          activeTab === tab
            ? "border-b-2 border-blue-600 text-blue-600"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Slots */}
  <div className="grid grid-cols-2 md:grid-cols-8 gap-2">
    {generateSlots(activeTab === "AM").map((time) => (
      <button
        key={time}
        type="button"
        onClick={() => setSelectedTime(time + " " + activeTab)}
        className={`border cursor-pointer rounded-lg px-4 py-2 transition ${
          selectedTime === time + " " + activeTab
            ? "bg-blue-600 text-white border-blue-600"
            : "border-gray-300 hover:bg-blue-100"
        }`}
      >
        {time}
      </button>
    ))}
  </div>
</div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-800" required>
                Your Message (optional)
              </label>
              <textarea
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your message..."
                required
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                
                className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Next →
              </button>
            </div>
          </form>
        )}

        {/* Step 3 - Finish */}
        {step === 3 && (
          <div id="step-3" className="text-center space-y-6 py-8">
            <h3 className="text-xl font-bold text-green-600">🎉 Thank You!</h3>
            <p className="text-gray-600">
              You have successfully signed up for a free demo.
            </p>
            <button
              onClick={() => router.push("/pricing")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentForm;