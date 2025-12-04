// 'use client';

// import { useState } from 'react';

// export default function AddIndustryPage() {
//   const [industries, setIndustries] = useState({});
//   const [currentSlug, setCurrentSlug] = useState('');
//   const [section1, setSection1] = useState({ title: '', description: '', image: '' });
//   const [section2, setSection2] = useState({ heading: '',subheading:'', points: [] });
//   const [section3, setSection3] = useState({ heading: '', subheading: '', points: [] });
//   const [section4, setSection4] = useState({ heading: '' });
//   const [section5, setSection5] = useState({ industries: [] });
//   const [jsonOutput, setJsonOutput] = useState('');

//   const handleAddIndustry = () => {
//     setJsonOutput('')
//     if (!currentSlug) return alert('Slug is required');

//     const industryData = { section1 };

//     if (section2.heading) industryData.section2 = section2;
//     if (section3.heading || section3.subheading) industryData.section3 = section3;
//     if (section4.heading) industryData.section4 = section4;
//     if (section5.industries.length > 0) industryData.section5 = section5;

//     const updatedIndustries = {
//       ...industries,
//       [currentSlug]: industryData,
//     };

//     setIndustries(updatedIndustries);
//     setJsonOutput(JSON.stringify(updatedIndustries, null, 2));

//     // Reset form
//     setCurrentSlug('');
//     setSection1({ title: '', description: '', image: '' });
//     setSection2({ heading: '', subheading:'', points: [] });
//     setSection3({ heading: '', subheading: '', points: [] });
//     setSection4({ heading: '' });
//     setSection5({ industries: [] });
//   };

//   const handleAddSection2Point = () => {
//     setSection2({
//       ...section2,
//       points: [...section2.points, { heading: '', description: '', icon: '' }],
//     });
//   };

//   const handleAddSection3Point = () => {
//     setSection3({
//       ...section3,
//       points: [...section3.points, { heading: '', description: '' }],
//     });
//   };

//   const handleAddSection5Industry = () => {
//     setSection5({
//       ...section5,
//       industries: [
//         ...section5.industries,
//         { image: '', title: '', heading: '', description: '', link: '' },
//       ],
//     });
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Industry Form</h1>

//       <div className="space-y-6">
//         <input
//           type="text"
//           placeholder="Industry Slug (e.g. agribusiness)"
//           className="w-full p-2 border rounded"
//           value={currentSlug}
//           onChange={(e) => setCurrentSlug(e.target.value)}
//         />

//         {/* Section 1 */}
//         <div className="p-4 border rounded shadow">
//           <h2 className="text-xl font-semibold mb-2">Section 1</h2>
//           <input
//             placeholder="Title"
//             className="w-full mb-2 p-2 border rounded"
//             value={section1.title}
//             onChange={(e) => setSection1({ ...section1, title: e.target.value })}
//           />
//           <textarea
//             placeholder="Description"
//             className="w-full mb-2 p-2 border rounded"
//             value={section1.description}
//             onChange={(e) => setSection1({ ...section1, description: e.target.value })}
//           />
//           <input
//             placeholder="Image URL"
//             className="w-full p-2 border rounded"
//             value={section1.image}
//             onChange={(e) => setSection1({ ...section1, image: e.target.value })}
//           />
//         </div>

//         {/* Section 2 */}
//         <div className="p-4 border rounded shadow">
//           <h2 className="text-xl font-semibold mb-2">Section 2 (optional)</h2>
//           <input
//             placeholder="Heading"
//             className="w-full mb-2 p-2 border rounded"
//             value={section2.heading}
//             onChange={(e) => setSection2({ ...section2, heading: e.target.value })}
//           />

//           <input
//             placeholder="Sub Heading"
//             className="w-full mb-2 p-2 border rounded"
//             value={section2.subheading}
//             onChange={(e) => setSection2({ ...section2, subheading: e.target.value })}
//           />

//           {section2.points.map((point, i) => (
//             <div key={i} className="grid grid-cols-3 gap-2 mb-2">
//               <input
//                 placeholder="Point Heading"
//                 value={point.heading}
//                 onChange={(e) =>
//                   setSection2((prev) => {
//                     const updated = [...prev.points];
//                     updated[i].heading = e.target.value;
//                     return { ...prev, points: updated };
//                   })
//                 }
//                 className="p-2 border rounded"
//               />
//               <input
//                 placeholder="Description"
//                 value={point.description}
//                 onChange={(e) =>
//                   setSection2((prev) => {
//                     const updated = [...prev.points];
//                     updated[i].description = e.target.value;
//                     return { ...prev, points: updated };
//                   })
//                 }
//                 className="p-2 border rounded"
//               />
//               <input
//                 placeholder="Icon URL"
//                 value={point.icon}
//                 onChange={(e) =>
//                   setSection2((prev) => {
//                     const updated = [...prev.points];
//                     updated[i].icon = e.target.value;
//                     return { ...prev, points: updated };
//                   })
//                 }
//                 className="p-2 border rounded"
//               />
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={handleAddSection2Point}
//             className="text-sm text-blue-600 hover:underline"
//           >
//             + Add Point
//           </button>
//         </div>

//         {/* Section 3 */}
//         <div className="p-4 border rounded shadow">
//           <h2 className="text-xl font-semibold mb-2">Section 3 (optional)</h2>
//           <input
//             placeholder="Heading"
//             className="w-full mb-2 p-2 border rounded"
//             value={section3.heading}
//             onChange={(e) => setSection3({ ...section3, heading: e.target.value })}
//           />
//           <textarea
//             placeholder="Subheading"
//             className="w-full mb-2 p-2 border rounded"
//             value={section3.subheading}
//             onChange={(e) => setSection3({ ...section3, subheading: e.target.value })}
//           />
//           {section3.points.map((point, i) => (
//             <div key={i} className="grid grid-cols-2 gap-2 mb-2">
//               <input
//                 placeholder="Point Heading"
//                 value={point.heading}
//                 onChange={(e) =>
//                   setSection3((prev) => {
//                     const updated = [...prev.points];
//                     updated[i].heading = e.target.value;
//                     return { ...prev, points: updated };
//                   })
//                 }
//                 className="p-2 border rounded"
//               />
//               <input
//                 placeholder="Description"
//                 value={point.description}
//                 onChange={(e) =>
//                   setSection3((prev) => {
//                     const updated = [...prev.points];
//                     updated[i].description = e.target.value;
//                     return { ...prev, points: updated };
//                   })
//                 }
//                 className="p-2 border rounded"
//               />
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={handleAddSection3Point}
//             className="text-sm text-blue-600 hover:underline"
//           >
//             + Add Point
//           </button>
//         </div>

//         {/* Section 4 */}
//         <div className="p-4 border rounded shadow">
//           <h2 className="text-xl font-semibold mb-2">Section 4 (optional)</h2>
//           <input
//             placeholder="Heading"
//             className="w-full p-2 border rounded"
//             value={section4.heading}
//             onChange={(e) => setSection4({ heading: e.target.value })}
//           />
//         </div>

//         {/* Section 5 */}
//         <div className="p-4 border rounded shadow">
//           <h2 className="text-xl font-semibold mb-2">Section 5 (optional)</h2>
//           {section5.industries.map((ind, i) => (
//             <div key={i} className="grid grid-cols-5 gap-2 mb-2">
//               <input
//                 placeholder="Image URL"
//                 className="p-2 border rounded"
//                 value={ind.image}
//                 onChange={(e) =>
//                   setSection5((prev) => {
//                     const updated = [...prev.industries];
//                     updated[i].image = e.target.value;
//                     return { ...prev, industries: updated };
//                   })
//                 }
//               />
//               <input
//                 placeholder="Title"
//                 className="p-2 border rounded"
//                 value={ind.title}
//                 onChange={(e) =>
//                   setSection5((prev) => {
//                     const updated = [...prev.industries];
//                     updated[i].title = e.target.value;
//                     return { ...prev, industries: updated };
//                   })
//                 }
//               />
//               <input
//                 placeholder="Heading"
//                 className="p-2 border rounded"
//                 value={ind.heading}
//                 onChange={(e) =>
//                   setSection5((prev) => {
//                     const updated = [...prev.industries];
//                     updated[i].heading = e.target.value;
//                     return { ...prev, industries: updated };
//                   })
//                 }
//               />
//               <input
//                 placeholder="Description"
//                 className="p-2 border rounded"
//                 value={ind.description}
//                 onChange={(e) =>
//                   setSection5((prev) => {
//                     const updated = [...prev.industries];
//                     updated[i].description = e.target.value;
//                     return { ...prev, industries: updated };
//                   })
//                 }
//               />
//               <input
//                 placeholder="Link"
//                 className="p-2 border rounded"
//                 value={ind.link}
//                 onChange={(e) =>
//                   setSection5((prev) => {
//                     const updated = [...prev.industries];
//                     updated[i].link = e.target.value;
//                     return { ...prev, industries: updated };
//                   })
//                 }
//               />
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={handleAddSection5Industry}
//             className="text-sm text-blue-600 hover:underline"
//           >
//             + Add Industry Link
//           </button>
//         </div>

//         <button
//           onClick={handleAddIndustry}
//           className="bg-blue-600 text-white font-bold px-6 py-2 rounded hover:bg-blue-700"
//         >
//           Add Industry
//         </button>

//         {/* JSON Output */}
//         {jsonOutput && (
//           <div className="mt-8">
//             <h3 className="text-xl font-bold mb-2">Final Output</h3>
//             <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm">
//               {jsonOutput}
//             </pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }