import React, { useState } from "react";
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
  const [country, setCountry] = useState("India");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const aboutAppoint = async () => {
    if (!name || !email ||  !message || !country) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      setLoading(true);
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

 
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeTab, setActiveTab] = useState("AM");
  const [selectedTime, setSelectedTime] = useState(null);

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      confirmPassword: '',
      contactMethod: '',
      interests: [],
      newsletter: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked, name } = e.target;
    if (type === 'checkbox') {
        setFormData((prev) => ({ ...prev, [id]: checked }));
    } else if (type === 'radio') {
        setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
        setFormData((prev) => ({ ...prev, [id]: value }));
    }
};

const handleNext = () => {
  setCurrentStep((prev) => prev + 1);
};

const handlePrev = () => {
  setCurrentStep((prev) => prev - 1);
};

const handleSubmit = (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
};




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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onSubmit={handleSubmit}>
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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "Name",   id:"fullName",type: "text", placeholder: "Enter your name" },
                { label: "Email ID",  id:"email",type: "email", placeholder: "Enter email" },
                { label: "Company Name", id:"CompanyName", type: "text", placeholder: "Enter company name" },
                { label: "Company Type",  id:"CompanyType",type: "text", placeholder: "Enter company type" },
                { label: "Your Designation",   htmlFor:"Designation" ,  id:"Designation",type: "text", placeholder: "Enter designation" },
                { label: "Country", type: "text",  htmlFor:"ddlcountry", id:"ddlcountry", placeholder: "Enter country" },
                { label: "Website URL (optional)", htmlFor:"txtwebsite" ,id:"txtwebsite", type: "url", placeholder: "Enter website URL" },
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
                  />
                </div>
              ))}
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Next →
              </button>
            </div>
          </form>
        )}

        {/* Step 2 - Booking */}
        {step === 2 && (
          <form className="space-y-2">
            {/* Timezone + Date in one line */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="step-2">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-800" htmlFor="Timezone">
                  Timezone
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>UTC</option>
                  <option>GMT</option>
                  <option>EST</option>
                  <option>PST</option>
                  <option>IST</option>
                </select>
              </div>

              {/* Date Picker Toggle */}
              <div className="relative">
                <label className="block text-sm font-semibold mb-2 text-gray-800"   id="AppointmentDate"  htmlFor="AppointmentDate" >
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
  <label className="block text-sm font-semibold  text-gray-800">
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
              <label className="block text-sm font-semibold mb-2 text-gray-800">
                Your Message (optional)
              </label>
              <textarea
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your message..."
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                
                className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Next →
              </button>
            </div>
          </form>
        )}

        {/* Step 3 - Finish */}
        {step === 3 && (
          <div className="text-center space-y-6 py-8">
            <h3 className="text-xl font-bold text-green-600">🎉 Thank You!</h3>
            <p className="text-gray-600">
              You have successfully signed up for a free demo.
            </p>
            <button
        onClick={aboutAppoint}
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