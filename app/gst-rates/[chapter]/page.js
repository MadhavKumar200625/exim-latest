// import { getConnection } from "@/libs/db";
// import Hero from "../Hero";
// import Questions from "../Questions";

// export default async function ChapterPage({ params }) {
//   const { chapter } = await params;
//   const chapterNumber = chapter.replace("chapter-", "");

//   const db = await getConnection();

//   const result = await db.query`
//     SELECT DISTINCT hs_code, item_description, igst, id
//     FROM hs_code_rates
//     WHERE hs_code LIKE ${chapterNumber + "%"}
//     ORDER BY hs_code
//   `;

//   const rowColors = ["bg-white", "bg-slate-50", "bg-slate-100"];

//   return (
//     <main>
//       <Hero heading={"GST Rate and HSN Code : Chapter " + chapterNumber}></Hero>

//       <section className=" px-4 text-center pt-12 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-black mb-4">
//             GST HSN Code List with GST rates 2024
//           </h2>

//           <div className="mt-10 border border-gray-300  shadow-md">
//             <table className="min-w-full text-left text-black border-collapse">
// <thead className="sticky top-16 z-10">
//                 <tr className="bg-gray-200">
//                   <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 w-40">
//                     Chapter
//                   </th>
//                   <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 border-l">
//                     Chapter Description
//                   </th>
//                   <th className="px-6 py-4 text-base font-semibold border-b border-gray-300 border-l">
//                     GST
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {result.recordset.map((row, idx) => (
//                   <tr
//                     key={idx}
//                     className={`${
//                       rowColors[idx % 3]
//                     } hover:bg-gray-100 transition`}
//                   >
//                     <td className="px-6 py-4  font-semibold border-b text-blue-600 border-gray-200">
//                       <div className="block w-full">{row.hs_code}</div>
//                     </td>
//                     <td className="px-6 py-4 border-b border-gray-200 border-l">
//                       <div className="block w-full">{row.item_description}</div>
//                     </td>
//                     <td className="px-6 py-4 border-b border-gray-200 border-l">
//                       <div className="block w-full">{row.igst}</div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       <Questions></Questions>
//     </main>
//   );
// }
