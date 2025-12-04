import React, { useState } from 'react';

const Modal = ({ openModal, setOpenModal }) => {
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

    const validateStep = (step) => {
        const currentStepElement = document.getElementById(`step-${step}`);
        const inputs = currentStepElement.querySelectorAll('input[required], select[required]');
        let isValid = true;

        inputs.forEach((input) => {
            if (!input.value) {
                isValid = false;
                input.classList.add('border-red-500');
            } else {
                input.classList.remove('border-red-500');
            }
        });

        if (step === 2) {
            const { password, confirmPassword } = formData;
            if (password !== confirmPassword) {
                isValid = false;
                alert("Passwords do not match");
            }
        }

        return isValid;
    };

    const showStep = (step) => {
        return currentStep === step ? '' : 'hidden';
    };

    return (
        <>
            <div class={`${openModal ? 'flex' : 'hidden'} overflow-x-hidden fixed top-0 left-0 md:top-2/4 md:left-2/4 z-[100] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div class="relative p-4 rounded-xl w-full max-w-5xl max-h-full bg-white border">
                    <h1 className="text-2xl font-bold text-center mb-2">Schedule an Appointment</h1>
                    <p className="mb-3 text-base text-center font-normal text-gray-700">Book an Appointment with our experts for online demo.</p>
                    <button type="button" class="text-gray-400 bg-transparent absolute top-5 right-5 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => setOpenModal(false)}>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                    {/* Progress Bar */}
                    <div className="my-8">
                        <div className="flex justify-between mb-2">
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200" id="step1">
                                Personal Info
                            </span>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 opacity-50" id="step2">
                                Booking
                            </span>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 opacity-50" id="step3">
                                Finish
                            </span>
                        </div>
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                            <div
                                id="progress-bar"
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                                style={{ width: `${(currentStep / 3) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Form Steps */}
                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Personal Information */}
                        <div id="step-1" className={`step ${showStep(1)} grid grid-cols-1 md:grid-cols-2 gap-4`}>
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-900">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-0"
                                    required
                                    placeholder='Enter Your Name'
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-0"
                                    required
                                    placeholder='Enter Your Email'
                                />
                            </div>
                            <div>
                                <label htmlFor="CompanyName" className="block text-sm font-medium text-gray-900">Company Name</label>
                                <input
                                    type="text"
                                    id="CompanyName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-0"
                                    required
                                    placeholder='Enter Your Company Name'
                                />
                            </div>
                            <div>
                                <label htmlFor="CompanyType" className="block text-sm font-medium text-gray-900">Company Type</label>
                                <select
                                    id="CompanyType"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-0"
                                    required
                                >
                                    <option selected="" value="">Select Your Company Type</option>
                                    <option value="Agricultural industry "> Agricultural industry </option>
                                    <option value="Automotive industry"> Automotive industry </option>
                                    <option value="Basic metal industry"> Basic metal industry </option>
                                    <option value="Chemical industry "> Chemical industry </option>
                                    <option value="Computer industry"> Computer industry </option>
                                    <option value="Construction industr "> Construction industry </option>
                                    <option value="Creative industry "> Creative industry </option>
                                    <option value="Cultural industry"> Cultural industry </option>
                                    <option value="Defense industry "> Defense industry </option>
                                    <option value="Education industry"> Education industry </option>
                                    <option value="Electric power indusry"> Electric power industry </option>
                                    <option value="Electronics industry"> Electronics industry </option>
                                    <option value="Energy industry "> Energy industry </option>
                                    <option value="Engineering industry"> Engineering industry </option>
                                    <option value="Entertainment industy"> Entertainment industry </option>
                                    <option value="Farming industry "> Farming industry </option>
                                    <option value="Fashion industry "> Fashion industry </option>
                                    <option value="Film industry "> Film industry </option>
                                    <option value="Financial services industry"> Financial services industry </option>
                                    <option value="Fishing industry"> Fishing industry </option>
                                    <option value="Food industry"> Food industry </option>
                                    <option value="Forestry industr"> Forestry industry </option>
                                    <option value="Gambling industr"> Gambling industry </option>
                                    <option value="Gas industry "> Gas industry </option>
                                    <option value="Green industry"> Green industry </option>
                                    <option value="Health services industry "> Health services industry </option>
                                    <option value="Hospitality industry"> Hospitality industry </option>
                                    <option value="Hotels industry "> Hotels industry </option>
                                    <option value="Industrial robot industry"> Industrial robot industry </option>
                                    <option value="Information industry "> Information industry </option>
                                    <option value="Information technology industry"> Information technology industry </option>
                                    <option value="Infrastructure industry "> Infrastructure industry </option>
                                    <option value="Insurance industry "> Insurance industry </option>
                                    <option value="Leisure industry "> Leisure industry </option>
                                    <option value="Low technology industry "> Low technology industry </option>
                                    <option value="Manufacturing industry "> Manufacturing industry </option>
                                    <option value="Meat industry "> Meat industry </option>
                                    <option value="Media industry "> Media industry </option>
                                    <option value="Merchandising industry "> Merchandising industry </option>
                                    <option value="Mining industry "> Mining industry </option>
                                    <option value="Music industry "> Music industry </option>
                                    <option value="News media industry "> News media industry </option>
                                    <option value="Oil and gas industry "> Oil and gas industry </option>
                                    <option value="Pharmaceutical industry "> Pharmaceutical industry </option>
                                    <option value="Professional industry "> Professional industry </option>
                                    <option value="Publishing industry "> Publishing industry </option>
                                    <option value="Pulp and paper industry "> Pulp and paper industry </option>
                                    <option value="Railway industry "> Railway industry </option>
                                    <option value="Real estate industry "> Real estate industry </option>
                                    <option value="Retail industry "> Retail industry </option>
                                    <option value="Scientific industry "> Scientific industry </option>
                                    <option value="Services industry "> Services industry </option>
                                    <option value="Software industry "> Software industry </option>
                                    <option value="Space industry "> Space industry </option>
                                    <option value="Sport industry "> Sport industry </option>
                                    <option value="Steel industry "> Steel industry </option>
                                    <option value="Technology industry "> Technology industry </option>
                                    <option value="Telecommunications industry "> Telecommunications industry </option>
                                    <option value="Textile industry "> Textile industry </option>
                                    <option value="Tobacco industry "> Tobacco industry </option>
                                    <option value="Transport industry "> Transport industry </option>
                                    <option value="Utility industry "> Utility industry </option>
                                    <option value="Video game industry "> Video game industry </option>
                                    <option value="Water industry "> Water industry </option>
                                    <option value="Wholesale industry "> Wholesale industry </option>
                                    <option value="Wood industry "> Wood industry </option>
                                    <option value="OTHER">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="Designation" className="block text-sm font-medium text-gray-900">Your Designation</label>
                                <input
                                    type="text"
                                    id="Designation"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-0"
                                    required
                                    placeholder='Enter Your Designation'
                                />
                            </div>
                            <div>
                                <label htmlFor="ddlcountry" className="block text-sm font-medium text-gray-900">Country</label>
                                <select name="ddlcountry" id="ddlcountry" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-0">
                                    <option value="">Select country...</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antartica">Antarctica</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Bouvet Island">Bouvet Island</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Congo">Congo, the Democratic Republic of the</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                                    <option value="Croatia">Croatia (Hrvatska)</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="East Timor">East Timor</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="France Metropolitan">France, Metropolitan</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Territories">French Southern Territories</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                                    <option value="Holy See">Holy See (Vatican City State)</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran (Islamic Republic of)</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                                    <option value="Korea">Korea, Republic of</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Lao">Lao People's Democratic Republic</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macau">Macau</option>
                                    <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia">Micronesia, Federated States of</option>
                                    <option value="Moldova">Moldova, Republic of</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn">Pitcairn</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russian Federation</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint LUCIA">Saint LUCIA</option>
                                    <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia (Slovak Republic)</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                                    <option value="Span">Spain</option>
                                    <option value="SriLanka">Sri Lanka</option>
                                    <option value="St. Helena">St. Helena</option>
                                    <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syrian Arab Republic</option>
                                    <option value="Taiwan">Taiwan, Province of China</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania, United Republic of</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Viet Nam</option>
                                    <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                    <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                                    <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                                    <option value="Western Sahara">Western Sahara</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>

                                </select>
                            </div>
                            <div>
                                <label htmlFor="txtwebsite" className="block text-sm font-medium text-gray-900">Website Url(Optional)</label>
                                <input
                                    type="text"
                                    id="txtwebsite"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-0"
                                    required
                                    placeholder='Enter Your Website'
                                />
                            </div>
                            <div>
                                <label htmlFor="txtphone" className="block text-sm font-medium text-gray-900">Phone No.</label>
                                <input
                                    type="text"
                                    id="txtphone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-0"
                                    required
                                    placeholder='Enter Your Phone no.'
                                />
                            </div>
                        </div>

                        {/* Step 2: Account Details */}
                        <div id="step-2" className={`step ${showStep(2)}`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="Timezone" className="block mb-2 text-sm font-medium text-gray-900">Timezone</label>
                                    <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 focus:outline-0" id="ddlTimezone">
                                        <option data-time-zone-id="1" data-gmt-adjustment="GMT-12:00" data-use-daylight="0" value="(GMT-12:00) International Date Line West">(GMT-12:00) International Date Line West</option>
                                        <option data-time-zone-id="2" data-gmt-adjustment="GMT-11:00" data-use-daylight="0" value="(GMT-11:00) Midway Island, Samoa">(GMT-11:00) Midway Island, Samoa</option>
                                        <option data-time-zone-id="3" data-gmt-adjustment="GMT-10:00" data-use-daylight="0" value="(GMT-10:00) Hawaii">(GMT-10:00) Hawaii</option>
                                        <option data-time-zone-id="4" data-gmt-adjustment="GMT-09:00" data-use-daylight="1" value="(GMT-09:00) Alaska">(GMT-09:00) Alaska</option>
                                        <option data-time-zone-id="5" data-gmt-adjustment="GMT-08:00" data-use-daylight="1" value="(GMT-08:00) Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                                        <option data-time-zone-id="6" data-gmt-adjustment="GMT-08:00" data-use-daylight="1" value="(GMT-08:00) Tijuana, Baja California">(GMT-08:00) Tijuana, Baja California</option>
                                        <option data-time-zone-id="7" data-gmt-adjustment="GMT-07:00" data-use-daylight="0" value="(GMT-07:00) Arizona">(GMT-07:00) Arizona</option>
                                        <option data-time-zone-id="8" data-gmt-adjustment="GMT-07:00" data-use-daylight="1" value="(GMT-07:00) Chihuahua, La Paz, Mazatlan">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                                        <option data-time-zone-id="9" data-gmt-adjustment="GMT-07:00" data-use-daylight="1" value="(GMT-07:00) Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                                        <option data-time-zone-id="10" data-gmt-adjustment="GMT-06:00" data-use-daylight="0" value="(GMT-06:00) Central America">(GMT-06:00) Central America</option>
                                        <option data-time-zone-id="11" data-gmt-adjustment="GMT-06:00" data-use-daylight="1" value="(GMT-06:00) Central Time (US &amp; Canada)">(GMT-06:00) Central Time (US &amp; Canada)</option>
                                        <option data-time-zone-id="12" data-gmt-adjustment="GMT-06:00" data-use-daylight="1" value="(GMT-06:00) Guadalajara, Mexico City, Monterrey">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                                        <option data-time-zone-id="13" data-gmt-adjustment="GMT-06:00" data-use-daylight="0" value="(GMT-06:00) Saskatchewan">(GMT-06:00) Saskatchewan</option>
                                        <option data-time-zone-id="14" data-gmt-adjustment="GMT-05:00" data-use-daylight="0" value="(GMT-05:00) Bogota, Lima, Quito, Rio Branco">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                                        <option data-time-zone-id="15" data-gmt-adjustment="GMT-05:00" data-use-daylight="1" value="(GMT-05:00) Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                                        <option data-time-zone-id="16" data-gmt-adjustment="GMT-05:00" data-use-daylight="1" value="(GMT-05:00) Indiana (East)">(GMT-05:00) Indiana (East)</option>
                                        <option data-time-zone-id="17" data-gmt-adjustment="GMT-04:00" data-use-daylight="1" value="(GMT-04:00) Atlantic Time (Canada)">(GMT-04:00) Atlantic Time (Canada)</option>
                                        <option data-time-zone-id="18" data-gmt-adjustment="GMT-04:00" data-use-daylight="0" value="(GMT-04:00) Caracas, La Paz">(GMT-04:00) Caracas, La Paz</option>
                                        <option data-time-zone-id="19" data-gmt-adjustment="GMT-04:00" data-use-daylight="0" value="(GMT-04:00) Manaus">(GMT-04:00) Manaus</option>
                                        <option data-time-zone-id="20" data-gmt-adjustment="GMT-04:00" data-use-daylight="1" value="(GMT-04:00) Santiago">(GMT-04:00) Santiago</option>
                                        <option data-time-zone-id="21" data-gmt-adjustment="GMT-03:30" data-use-daylight="1" value="(GMT-03:30) Newfoundland">(GMT-03:30) Newfoundland</option>
                                        <option data-time-zone-id="22" data-gmt-adjustment="GMT-03:00" data-use-daylight="1" value="(GMT-03:00) Brasilia">(GMT-03:00) Brasilia</option>
                                        <option data-time-zone-id="23" data-gmt-adjustment="GMT-03:00" data-use-daylight="0" value="(GMT-03:00) Buenos Aires, Georgetown">(GMT-03:00) Buenos Aires, Georgetown</option>
                                        <option data-time-zone-id="24" data-gmt-adjustment="GMT-03:00" data-use-daylight="1" value="(GMT-03:00) Greenland">(GMT-03:00) Greenland</option>
                                        <option data-time-zone-id="25" data-gmt-adjustment="GMT-03:00" data-use-daylight="1" value="(GMT-03:00) Montevideo">(GMT-03:00) Montevideo</option>
                                        <option data-time-zone-id="26" data-gmt-adjustment="GMT-02:00" data-use-daylight="1" value="(GMT-02:00) Mid-Atlantic">(GMT-02:00) Mid-Atlantic</option>
                                        <option data-time-zone-id="27" data-gmt-adjustment="GMT-01:00" data-use-daylight="0" value="(GMT-01:00) Cape Verde Is">(GMT-01:00) Cape Verde Is.</option>
                                        <option data-time-zone-id="28" data-gmt-adjustment="GMT-01:00" data-use-daylight="1" value="(GMT-01:00) Azores">(GMT-01:00) Azores</option>
                                        <option data-time-zone-id="29" data-gmt-adjustment="GMT+00:00" data-use-daylight="0" value="(GMT+00:00) Casablanca, Monrovia, Reykjavik">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
                                        <option data-time-zone-id="30" data-gmt-adjustment="GMT+00:00" data-use-daylight="1" value="(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
                                        <option data-time-zone-id="31" data-gmt-adjustment="GMT+01:00" data-use-daylight="1" value="(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                                        <option data-time-zone-id="32" data-gmt-adjustment="GMT+01:00" data-use-daylight="1" value="(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                                        <option data-time-zone-id="33" data-gmt-adjustment="GMT+01:00" data-use-daylight="1" value="(GMT+01:00) Brussels, Copenhagen, Madrid, Paris">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
                                        <option data-time-zone-id="34" data-gmt-adjustment="GMT+01:00" data-use-daylight="1" value="(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                                        <option data-time-zone-id="35" data-gmt-adjustment="GMT+01:00" data-use-daylight="1" value="(GMT+01:00) West Central Africa">(GMT+01:00) West Central Africa</option>
                                        <option data-time-zone-id="36" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="(GMT+02:00) Amman">(GMT+02:00) Amman</option>
                                        <option data-time-zone-id="37" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="(GMT+02:00) Athens, Bucharest, Istanbul">(GMT+02:00) Athens, Bucharest, Istanbul</option>
                                        <option data-time-zone-id="38" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="(GMT+02:00) Beirut">(GMT+02:00) Beirut</option>
                                        <option data-time-zone-id="39" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="(GMT+02:00) Cairo">(GMT+02:00) Cairo</option>
                                        <option data-time-zone-id="40" data-gmt-adjustment="GMT+02:00" data-use-daylight="0" value="(GMT+02:00) Harare, Pretoria">(GMT+02:00) Harare, Pretoria</option>
                                        <option data-time-zone-id="41" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
                                        <option data-time-zone-id="42" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="(GMT+02:00) Jerusalem">(GMT+02:00) Jerusalem</option>
                                        <option data-time-zone-id="43" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="(GMT+02:00) Minsk">(GMT+02:00) Minsk</option>
                                        <option data-time-zone-id="44" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="(GMT+02:00) Windhoek">(GMT+02:00) Windhoek</option>
                                        <option data-time-zone-id="45" data-gmt-adjustment="GMT+03:00" data-use-daylight="0" value="(GMT+03:00) Kuwait, Riyadh, Baghdad">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
                                        <option data-time-zone-id="46" data-gmt-adjustment="GMT+03:00" data-use-daylight="1" value="(GMT+03:00) Moscow, St. Petersburg, Volgograd">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
                                        <option data-time-zone-id="47" data-gmt-adjustment="GMT+03:00" data-use-daylight="0" value="(GMT+03:00) Nairobi">(GMT+03:00) Nairobi</option>
                                        <option data-time-zone-id="48" data-gmt-adjustment="GMT+03:00" data-use-daylight="0" value="(GMT+03:00) Tbilisi">(GMT+03:00) Tbilisi</option>
                                        <option data-time-zone-id="49" data-gmt-adjustment="GMT+03:30" data-use-daylight="1" value="(GMT+03:30) Tehran">(GMT+03:30) Tehran</option>
                                        <option data-time-zone-id="50" data-gmt-adjustment="GMT+04:00" data-use-daylight="0" value="(GMT+04:00) Abu Dhabi, Muscat">(GMT+04:00) Abu Dhabi, Muscat</option>
                                        <option data-time-zone-id="51" data-gmt-adjustment="GMT+04:00" data-use-daylight="1" value="(GMT+04:00) Baku">(GMT+04:00) Baku</option>
                                        <option data-time-zone-id="52" data-gmt-adjustment="GMT+04:00" data-use-daylight="1" value="(GMT+04:00) Yerevan">(GMT+04:00) Yerevan</option>
                                        <option data-time-zone-id="53" data-gmt-adjustment="GMT+04:30" data-use-daylight="0" value="(GMT+04:30) Kabul">(GMT+04:30) Kabul</option>
                                        <option data-time-zone-id="54" data-gmt-adjustment="GMT+05:00" data-use-daylight="1" value="(GMT+05:00) Yekaterinburg">(GMT+05:00) Yekaterinburg</option>
                                        <option data-time-zone-id="55" data-gmt-adjustment="GMT+05:00" data-use-daylight="0" value="(GMT+05:00) Islamabad, Karachi, Tashkent">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
                                        <option data-time-zone-id="56" data-gmt-adjustment="GMT+05:30" data-use-daylight="0" value="(GMT+05:30) Sri Jayawardenapura">(GMT+05:30) Sri Jayawardenapura</option>
                                        <option data-time-zone-id="57" data-gmt-adjustment="GMT+05:30" data-use-daylight="0" value="(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi" selected="">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                                        <option data-time-zone-id="58" data-gmt-adjustment="GMT+05:45" data-use-daylight="0" value="(GMT+05:45) Kathmandu">(GMT+05:45) Kathmandu</option>
                                        <option data-time-zone-id="59" data-gmt-adjustment="GMT+06:00" data-use-daylight="1" value="(GMT+06:00) Almaty, Novosibirsk">(GMT+06:00) Almaty, Novosibirsk</option>
                                        <option data-time-zone-id="60" data-gmt-adjustment="GMT+06:00" data-use-daylight="0" value="6">(GMT+06:00) Astana, Dhaka</option>
                                        <option data-time-zone-id="61" data-gmt-adjustment="GMT+06:30" data-use-daylight="0" value="(GMT+06:30) Yangon (Rangoon)">(GMT+06:30) Yangon (Rangoon)</option>
                                        <option data-time-zone-id="62" data-gmt-adjustment="GMT+07:00" data-use-daylight="0" value="(GMT+07:00) Bangkok, Hanoi, Jakarta">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
                                        <option data-time-zone-id="63" data-gmt-adjustment="GMT+07:00" data-use-daylight="1" value="(GMT+07:00) Krasnoyarsk">(GMT+07:00) Krasnoyarsk</option>
                                        <option data-time-zone-id="64" data-gmt-adjustment="GMT+08:00" data-use-daylight="0" value="(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                                        <option data-time-zone-id="65" data-gmt-adjustment="GMT+08:00" data-use-daylight="0" value="(GMT+08:00) Kuala Lumpur, Singapore">(GMT+08:00) Kuala Lumpur, Singapore</option>
                                        <option data-time-zone-id="66" data-gmt-adjustment="GMT+08:00" data-use-daylight="0" value="(GMT+08:00) Irkutsk, Ulaan Bataar">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
                                        <option data-time-zone-id="67" data-gmt-adjustment="GMT+08:00" data-use-daylight="0" value="(GMT+08:00) Perth">(GMT+08:00) Perth</option>
                                        <option data-time-zone-id="68" data-gmt-adjustment="GMT+08:00" data-use-daylight="0" value="(GMT+08:00) Taipei">(GMT+08:00) Taipei</option>
                                        <option data-time-zone-id="69" data-gmt-adjustment="GMT+09:00" data-use-daylight="0" value="(GMT+09:00) Osaka, Sapporo, Tokyo">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
                                        <option data-time-zone-id="70" data-gmt-adjustment="GMT+09:00" data-use-daylight="0" value="(GMT+09:00) Seoul">(GMT+09:00) Seoul</option>
                                        <option data-time-zone-id="71" data-gmt-adjustment="GMT+09:00" data-use-daylight="1" value="(GMT+09:00) Yakutsk">(GMT+09:00) Yakutsk</option>
                                        <option data-time-zone-id="72" data-gmt-adjustment="GMT+09:30" data-use-daylight="0" value="(GMT+09:30) Adelaide">(GMT+09:30) Adelaide</option>
                                        <option data-time-zone-id="73" data-gmt-adjustment="GMT+09:30" data-use-daylight="0" value="(GMT+09:30) Darwin">(GMT+09:30) Darwin</option>
                                        <option data-time-zone-id="74" data-gmt-adjustment="GMT+10:00" data-use-daylight="0" value="(GMT+10:00) Brisbane">(GMT+10:00) Brisbane</option>
                                        <option data-time-zone-id="75" data-gmt-adjustment="GMT+10:00" data-use-daylight="1" value="(GMT+10:00) Canberra, Melbourne, Sydney">(GMT+10:00) Canberra, Melbourne, Sydney</option>
                                        <option data-time-zone-id="76" data-gmt-adjustment="GMT+10:00" data-use-daylight="1" value="(GMT+10:00) Hobart">(GMT+10:00) Hobart</option>
                                        <option data-time-zone-id="77" data-gmt-adjustment="GMT+10:00" data-use-daylight="0" value="(GMT+10:00) Guam, Port Moresby">(GMT+10:00) Guam, Port Moresby</option>
                                        <option data-time-zone-id="78" data-gmt-adjustment="GMT+10:00" data-use-daylight="1" value="(GMT+10:00) Vladivostok">(GMT+10:00) Vladivostok</option>
                                        <option data-time-zone-id="79" data-gmt-adjustment="GMT+11:00" data-use-daylight="1" value="(GMT+11:00) Magadan, Solomon Is., New Caledonia">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
                                        <option data-time-zone-id="80" data-gmt-adjustment="GMT+12:00" data-use-daylight="1" value="(GMT+12:00) Auckland, Wellington">(GMT+12:00) Auckland, Wellington</option>
                                        <option data-time-zone-id="81" data-gmt-adjustment="GMT+12:00" data-use-daylight="0" value="(GMT+12:00) Fiji, Kamchatka, Marshall Is">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
                                        <option data-time-zone-id="82" data-gmt-adjustment="GMT+13:00" data-use-daylight="0" value="(GMT+13:00) Nuku'alofa">(GMT+13:00) Nuku'alofa</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="AppointmentDate" className="block mb-2 text-sm font-medium text-gray-900">Appointment Date</label>
                                    <input
                                        type="date"
                                        id="AppointmentDate"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="grid grid-flow-col-dense gap-6 mt-5">
                                <label for="00-30" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">00:00 - 00:30</span>
                                    <input type="radio" name="plan" id="00-30" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="30-01" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">00:30 - 01:00</span>
                                    <input type="radio" name="plan" id="30-01" value="growth" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="01-1-30" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">01:00 - 01:30</span>
                                    <input type="radio" name="plan" id="01-1-30" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="2" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">01:30 - 02:00</span>
                                    <input type="radio" name="plan" id="2" value="growth" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="3" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">02:00 - 02:30</span>
                                    <input type="radio" name="plan" id="3" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="4" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">02:30 - 03:00</span>
                                    <input type="radio" name="plan" id="4" value="growth" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="5" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">03:00 - 03:30</span>
                                    <input type="radio" name="plan" id="5" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="6" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">04:00 - 04:30</span>
                                    <input type="radio" name="plan" id="6" value="growth" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div class="grid grid-flow-col-dense gap-6 mt-3">
                                <label for="00-30" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">00:00 - 00:30</span>
                                    <input type="radio" name="plan" id="00-30" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="30-01" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">00:30 - 01:00</span>
                                    <input type="radio" name="plan" id="30-01" value="growth" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="01-1-30" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">01:00 - 01:30</span>
                                    <input type="radio" name="plan" id="01-1-30" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="2" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">01:30 - 02:00</span>
                                    <input type="radio" name="plan" id="2" value="growth" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="3" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">02:00 - 02:30</span>
                                    <input type="radio" name="plan" id="3" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="4" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">02:30 - 03:00</span>
                                    <input type="radio" name="plan" id="4" value="growth" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="5" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">03:00 - 03:30</span>
                                    <input type="radio" name="plan" id="5" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="6" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">04:00 - 04:30</span>
                                    <input type="radio" name="plan" id="6" value="growth" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div class="grid grid-flow-col-dense gap-6 mt-3">
                                <label for="7" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">00:00 - 00:30</span>
                                    <input type="radio" name="plan" id="7" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="8" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">00:30 - 01:00</span>
                                    <input type="radio" name="plan" id="8" value="growth" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="9" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">01:00 - 01:30</span>
                                    <input type="radio" name="plan" id="9" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="10" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">01:30 - 02:00</span>
                                    <input type="radio" name="plan" id="10" value="growth" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="11" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">02:00 - 02:30</span>
                                    <input type="radio" name="plan" id="11" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="12" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">02:30 - 03:00</span>
                                    <input type="radio" name="plan" id="12" value="growth" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="13" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">03:00 - 03:30</span>
                                    <input type="radio" name="plan" id="13" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                                <label for="14" class="relative flex flex-col bg-white px-2 py-3 rounded-lg shadow-md cursor-pointer">
                                    <span class="font-semibold text-gray-500 text-[12px] uppercase">04:00 - 04:30</span>
                                    <input type="radio" name="plan" id="14" value="growth" class="absolute h-0 w-0 appearance-none" />
                                    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg">
                                        <span class="absolute -top-2 -right-2 h-5 w-5 inline-flex items-center justify-center rounded-full bg-green-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3 w-3 text-green-600">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div className="mb-2 mt-5">
                                <text className="block mb-2 text-sm font-medium text-gray-900">Your Message(Optional)</text>
                                <textarea
                                    id="contact-email"
                                    type="text"
                                    name="contactMethod"
                                    className="w-full h-32 text-gray-700 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2 focus:outline-0"
                                />
                            </div>
                        </div>

                        {/* Step 3: Preferences */}
                        <div id="step-3" className={`step ${showStep(3)}`}>
                            <div className="grid grid-cols-3 items-center gap-5">
                                <div className="">
                                    <img src="./images/thanku.svg" className='w-80 mx-auto' alt="" />
                                </div>
                                <div className="col-span-2">
                                    <div className="text-2xl font-bold">Your Appointment has been scheduled</div>
                                    <div className='text-lg font-semibold my-3'>Your appointment is scheduled for [Date] at [Time].</div>
                                    <p className='text-base font-normal'>Location: [Location or "Online – link will be shared before the session"].
                                        If you need to reschedule, just let us know!</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            <button
                                type="button"
                                id="prevBtn"
                                onClick={handlePrev}
                                className={`px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:shadow-outline ${currentStep === 1 ? 'hidden' : ''}`}
                            >
                                Previous
                            </button>
                            <button
                                type="button"
                                id="nextBtn"
                                onClick={handleNext}
                                className={`px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:shadow-outline ${currentStep === 3 ? 'hidden' : ''}`}
                            >
                                Next
                            </button>
                            <button
                                type="submit"
                                id="submitBtn"
                                className={`px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:shadow-outline ${currentStep !== 3 ? 'hidden' : ''}`}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            <div className={`fixed bg-black bg-opacity-70 top-0 left-0 w-screen h-screen z-50 ${openModal ? 'flex' : 'hidden'}`} onClick={() => setOpenModal(false)}></div>
        </>
    );
};

export default Modal;
