"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const countries = [
  {
    name: "Armenia",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/am.png",
    link_main:`${baseURL}/country-wise-armenia-import-export-data`,
    link_imp :`${baseURL}/country-wise-armenia-import-data`,
   link_exp:`${baseURL}/country-wise-armenia-export-data`, 
  },
  {
    name: "Azerbaijan",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/az.png",
    link_main:`${baseURL}/country-wise-azerbaijan-import-export-data`,
    link_imp :`${baseURL}/country-wise-azerbaijan-import-data`,
   link_exp:`${baseURL}/country-wise-azerbaijan-export-data`, 
  },
  {
    name: "Bahrain",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/bh.png",
    link_main:`${baseURL}/country-wise-bahrain-import-export-data`,
    link_imp :`${baseURL}/country-wise-bahrain-import-data`,
   link_exp:`${baseURL}/country-wise-bahrain-export-data`, 
  },
  {
    name: "Bangladesh",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/bd.png",
    link_main:`${baseURL}/bangladesh-import-export-data`,
    link_imp :`${baseURL}/bangladesh-import-data`,
   link_exp:`${baseURL}/bangladesh-export-data`, 
    otherLinks: true,
  },
  {
    name: "Brunei",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/bn.png",
    link_main:`${baseURL}/country-wise-brunei-import-export-data`,
    link_imp :`${baseURL}/country-wise-brunei-import-data`,
   link_exp:`${baseURL}/country-wise-brunei-export-data`, 
  },
  {
    name: "Cambodia",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/kh.png",
    link_main:`${baseURL}/country-wise-cambodia-import-export-data`,
    link_imp :`${baseURL}/country-wise-cambodia-import-data`,
   link_exp:`${baseURL}/country-wise-cambodia-export-data`, 
  },
  {
    name: "China",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/cn.png",
    link_main:`${baseURL}/china-import-export-data`,
    link_imp :`${baseURL}/china-import-data`,
   link_exp:`${baseURL}/china-export-data`, 
  },
  {
    name: "Hong Kong",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/hk.png",
    link_main:`${baseURL}/country-wise-hong-kong-import-export-data`,
    link_imp :`${baseURL}/country-wise-hong-kong-import-data`,
   link_exp:`${baseURL}/country-wise-hong-kong-export-data`, 
  },
  // {
  //   name: "India",
  //   continent: "ASIA",
  //   flag: "https://flagcdn.com/w40/in.png",
  //   link_main:`${baseURL}/country-wise-india-import-export-data`,
  //   link_imp :`${baseURL}/country-wise-india-import-data`,
  //  link_exp:`${baseURL}/country-wise-india-export-data`, 
  // },
  {
    name: "Indonesia",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/id.png",
    link_main:`${baseURL}/indonesia-import-export-data`,
    link_imp :`${baseURL}/indonesia-import-data`,
   link_exp:`${baseURL}/indonesia-export-data`, 
    otherLinks: true,
  },
  {
    name: "Iran",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/ir.png",
    link_main:`${baseURL}/country-wise-iran-import-export-data`,
    link_imp :`${baseURL}/country-wise-iran-import-data`,
   link_exp:`${baseURL}/country-wise-iran-export-data`, 
  },
  {
    name: "Israel",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/il.png",
    link_main:`${baseURL}/country-wise-israel-import-export-data`,
    link_imp :`${baseURL}/country-wise-israel-import-data`,
   link_exp:`${baseURL}/country-wise-israel-export-data`, 
  },
  {
    name: "Japan",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/jp.png",
    link_main:`${baseURL}/country-wise-japan-import-export-data`,
    link_imp :`${baseURL}/country-wise-japan-import-data`,
   link_exp:`${baseURL}/country-wise-japan-export-data`, 
  },
  {
    name: "Jordan",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/jo.png",
    link_main:`${baseURL}/country-wise-jordan-import-export-data`,
    link_imp :`${baseURL}/country-wise-jordan-import-data`,
   link_exp:`${baseURL}/country-wise-jordan-export-data`, 
  },
  {
    name: "Kazakhstan",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/kz.png",
    link_main:`${baseURL}/kazakhstan-import-export-data`,
    link_imp :`${baseURL}/kazakhstan-import-data`,
   link_exp:`${baseURL}/kazakhstan-export-data`, 
  },
  {
    name: "Korea",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/kr.png",
    link_main:`${baseURL}/country-wise-korea-import-export-data`,
    link_imp :`${baseURL}/country-wise-korea-import-data`,
   link_exp:`${baseURL}/country-wise-korea-export-data`, 
    
  },
  {
    name: "Kuwait",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/kw.png",
    link_main:`${baseURL}/country-wise-kuwait-import-export-data`,
    link_imp :`${baseURL}/country-wise-kuwait-import-data`,
   link_exp:`${baseURL}/country-wise-kuwait-export-data`, 
  },
  {
    name: "Laos",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/la.png",
    link_main:`${baseURL}/country-wise-laos-import-export-data`,
    link_imp :`${baseURL}/country-wise-laos-import-data`,
   link_exp:`${baseURL}/country-wise-laos-export-data`, 
  },
  {
    name: "Lebanon",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/lb.png",
    link_main:`${baseURL}/country-wise-lebanon-import-export-data`,
    link_imp :`${baseURL}/country-wise-lebanon-import-data`,
   link_exp:`${baseURL}/country-wise-lebanon-export-data`, 
  },
  {
    name: "Maldives",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/mv.png",
    link_main:`${baseURL}/country-wise-maldives-import-export-data`,
    link_imp :`${baseURL}/country-wise-maldives-import-data`,
   link_exp:`${baseURL}/country-wise-maldives-export-data`, 
  },
  {
    name: "Mongolia",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/mn.png",
    link_main:`${baseURL}/country-wise-mongolia-import-export-data`,
    link_imp :`${baseURL}/country-wise-mongolia-import-data`,
   link_exp:`${baseURL}/country-wise-mongolia-export-data`, 
  },
  {
    name: "Myanmar",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/mm.png",
    link_main:`${baseURL}/country-wise-myanmar-import-export-data`,
    link_imp :`${baseURL}/country-wise-myanmar-import-data`,
   link_exp:`${baseURL}/country-wise-myanmar-export-data`, 
  },
  {
    name: "Nepal",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/np.png",
    link_main:`${baseURL}/country-wise-nepal-import-export-data`,
    link_imp :`${baseURL}/country-wise-nepal-import-data`,
   link_exp:`${baseURL}/country-wise-nepal-export-data`, 
  },
  {
    name: "Oman",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/om.png",
    link_main:`${baseURL}/country-wise-oman-import-export-data`,
    link_imp :`${baseURL}/country-wise-oman-import-data`,
   link_exp:`${baseURL}/country-wise-oman-export-data`, 
  },
  {
    name: "Pakistan",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/pk.png",
    link_main:`${baseURL}/pakistan-import-export-data`,
    link_imp :`${baseURL}/pakistan-import-data`,
   link_exp:`${baseURL}/pakistan-export-data`, 
    otherLinks: true,
  },
  {
    name: "Philippines",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/ph.png",
    link_main:`${baseURL}/philippines-import-export-data`,
    link_imp :`${baseURL}/philippines-import-data`,
   link_exp:`${baseURL}/philippines-export-data`, 
    otherLinks: true,
  },
  // {
  //   name: "Qatar",
  //   continent: "ASIA",
  //   flag: "https://flagcdn.com/w40/qa.png",
  //   link_main:`${baseURL}/country-wise-qatar-import-export-data`,
  //   link_imp :`${baseURL}/country-wise-qatar-import-data`,
  //  link_exp:`${baseURL}/country-wise-qatar-export-data`, 
  // },
  {
    name: "Russia",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/ru.png",
    link_main:`${baseURL}/russia-import-export-data`,
    link_imp :`${baseURL}/russia-import-data`,
   link_exp:`${baseURL}/russia-export-data`, 
  
  },
  {
    name: "Saudi Arabia",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/sa.png",
    link_main:`${baseURL}/country-wise-saudi-arabia-import-export-data`,
    link_imp :`${baseURL}/country-wise-saudi-arabia-import-data`,
   link_exp:`${baseURL}/country-wise-saudi-arabia-export-data`, 
  },
  {
    name: "Singapore",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/sg.png",
    link_main:`${baseURL}/singapore-import-export-data`,
    link_imp :`${baseURL}/singapore-import-data`,
   link_exp:`${baseURL}/singapore-export-data`, 
  },
  {
    name: "Sri Lanka",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/lk.png",
    link_main:`${baseURL}/country-wise-sri-lanka-import-export-data`,
    link_imp :`${baseURL}/country-wise-sri-lanka-import-data`,
   link_exp:`${baseURL}/country-wise-sri-lanka-export-data`, 
    otherLinks: true,
  },
  {
    name: "Syria",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/sy.png",
    link_main:`${baseURL}/country-wise-syria-import-export-data`,
    link_imp :`${baseURL}/country-wise-syria-import-data`,
   link_exp:`${baseURL}/country-wise-syria-export-data`, 
  },
  {
    name: "Taiwan",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/tw.png",
    link_main:`${baseURL}/country-wise-taiwan-import-export-data`,
    link_imp :`${baseURL}/country-wise-taiwan-import-data`,
   link_exp:`${baseURL}/country-wise-taiwan-export-data`, 
  },
  {
    name: "Thailand",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/th.png",
    link_main:`${baseURL}/thailand-import-export-data`,
    link_imp :`${baseURL}/thailand-import-data`,
   link_exp:`${baseURL}/thailand-export-data`, 
  },
  {
    name: "Turkey",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/tr.png",
    link_main:`${baseURL}/country-wise-turkey-import-export-data`,
    link_imp :`${baseURL}/country-wise-turkey-import-data`,
   link_exp:`${baseURL}/country-wise-turkey-export-data`, 
  },
  {
    name: "UAE",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/ae.png",
    link_main:`${baseURL}/country-wise-uae-import-export-data`,
    link_imp :`${baseURL}/country-wise-uae-import-data`,
   link_exp:`${baseURL}/country-wise-uae-export-data`, 
  },
  {
    name: "Uzbekistan",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/uz.png",
    link_main:`${baseURL}/country-wise-uzbekistan-import-export-data`,
    link_imp :`${baseURL}/country-wise-uzbekistan-import-data`,
   link_exp:`${baseURL}/country-wise-uzbekistan-export-data`, 
  },
  {
    name: "Vietnam",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/vn.png",
    link_main:`${baseURL}/vietnam-import-export-data`,
    link_imp :`${baseURL}/vietnam-import-data`,
   link_exp:`${baseURL}/vietnam-export-data`,
    otherLinks: true,
  },
  {
    name: "Yemen",
    continent: "ASIA",
    flag: "https://flagcdn.com/w40/ye.png",
    link_main:`${baseURL}/country-wise-yemen-import-export-data`,
    link_imp :`${baseURL}/country-wise-yemen-import-data`,
   link_exp:`${baseURL}/country-wise-yemen-export-data`, 
  },
  {
    name: "Algeria",
    continent: "AFRICA",
    flag: "https://flagcdn.com/dz.svg",
    link_main:`${baseURL}/country-wise-algeria-import-export-data`,
    link_imp :`${baseURL}/country-wise-algeria-import-data`,
   link_exp:`${baseURL}/country-wise-algeria-export-data`, 
  },
  {
    name: "Angola",
    continent: "AFRICA",
    flag: "https://flagcdn.com/ao.svg",
    link_main:`${baseURL}/country-wise-angola-import-export-data`,
    link_imp :`${baseURL}/country-wise-angola-import-data`,
   link_exp:`${baseURL}/country-wise-angola-export-data`, 
  },
  {
    name: "Botswana",
    continent: "AFRICA",
    flag: "https://flagcdn.com/bw.svg",
    link_main:`${baseURL}/botswana-import-export-data`,
    link_imp :`${baseURL}/botswana-import-data`,
   link_exp:`${baseURL}/botswana-export-data`, 
  },
  {
    name: "Burkina Faso",
    continent: "AFRICA",
    flag: "https://flagcdn.com/bf.svg",
    link_main:`${baseURL}/country-wise-burkina-faso-import-export-data`,
    link_imp :`${baseURL}/country-wise-burkina-faso-import-data`,
   link_exp:`${baseURL}/country-wise-burkina-faso-export-data`, 
  },
  {
    name: "Burundi",
    continent: "AFRICA",
    flag: "https://flagcdn.com/bi.svg",
    link_main:`${baseURL}/country-wise-burundi-import-export-data`,
    link_imp :`${baseURL}/country-wise-burundi-import-data`,
   link_exp:`${baseURL}/country-wise-burundi-export-data`, 
  },
  {
    name: "Cameroon",
    continent: "AFRICA",
    flag: "https://flagcdn.com/cm.svg",
    link_main:`${baseURL}/country-wise-cameroon-import-export-data`,
    link_imp :`${baseURL}/country-wise-cameroon-import-data`,
   link_exp:`${baseURL}/country-wise-cameroon-export-data`, 
  },
  {
    name: "Chad",
    continent: "AFRICA",
    flag: "https://flagcdn.com/td.svg",
    link_main:`${baseURL}/chad-import-export-data`,
    link_imp :`${baseURL}/chad-import-data`,
   link_exp:`${baseURL}/chad-export-data`, 
  },
  {
    name: "Congo",
    continent: "AFRICA",
    flag: "https://flagcdn.com/cg.svg",
    link_main:`${baseURL}/congo-import-export-data`,
    link_imp :`${baseURL}/congo-import-data`,
   link_exp:`${baseURL}/congo-export-data`, 
  },
  {
    name: "Cote D'Ivoire",
    continent: "AFRICA",
    flag: "https://flagcdn.com/ci.svg",
    link_main:`${baseURL}/cote-d-ivoire-import-export-data`,
    link_imp :`${baseURL}/cote-d-ivoire-import-data`,
   link_exp:`${baseURL}/cote-d-ivoire-export-data`, 
  },
  {
    name: "Egypt",
    continent: "AFRICA",
    flag: "https://flagcdn.com/eg.svg",
    link_main:`${baseURL}/egypt-import-export-data`,
    link_imp :`${baseURL}/egypt-import-data`,
   link_exp:`${baseURL}/egypt-export-data`, 
  },
  {
    name: "Ethiopia",
    continent: "AFRICA",
    flag: "https://flagcdn.com/et.svg",
    link_main:`${baseURL}/ethiopia-import-export-data`,
    link_imp :`${baseURL}/ethiopia-import-data`,
   link_exp:`${baseURL}/ethiopia-export-data`,},
  {
    name: "Ghana",
    continent: "AFRICA",
    flag: "https://flagcdn.com/gh.svg",
    link_main:`${baseURL}/ghana-import-export-data`,
    link_imp :`${baseURL}/ghana-import-data`,
   link_exp:`${baseURL}/ghana-export-data`,
  },
  {
    name: "Kenya",
    continent: "AFRICA",
    flag: "https://flagcdn.com/ke.svg",
    link_main:`${baseURL}/kenya-import-export-data`,
    link_imp :`${baseURL}/kenya-import-data`,
   link_exp:`${baseURL}/kenya-export-data`,
  },
  {
    name: "Lesotho",
    continent: "AFRICA",
    flag: "https://flagcdn.com/ls.svg",
    link_main:`${baseURL}/lesotho-import-export-data`,
    link_imp :`${baseURL}/lesotho-import-data`,
   link_exp:`${baseURL}/lesotho-export-data`,
  },
  {
    name: "Liberia",
    continent: "AFRICA",
    flag: "https://flagcdn.com/lr.svg",
    link_main:`${baseURL}/liberia-import-export-data`,
    link_imp :`${baseURL}/liberia-import-data`,
   link_exp:`${baseURL}/liberia-export-data`,
  },
  {
    name: "Libya",
    continent: "AFRICA",
    flag: "https://flagcdn.com/ly.svg",
    link_main:`${baseURL}/country-wise-libya-import-export-data`,
    link_imp :`${baseURL}/country-wise-libya-import-data`,
   link_exp:`${baseURL}/country-wise-libya-export-data`, 
  },
  {
    name: "Madagascar",
    continent: "AFRICA",
    flag: "https://flagcdn.com/mg.svg",
    link_main:`${baseURL}/country-wise-madagascar-import-export-data`,
    link_imp :`${baseURL}/country-wise-madagascar-import-data`,
   link_exp:`${baseURL}/country-wise-madagascar-export-data`, 
  },
  {
    name: "Malawi",
    continent: "AFRICA",
    flag: "https://flagcdn.com/mw.svg",
    link_main:`${baseURL}/malawi-import-export-data`,
    link_imp :`${baseURL}/malawi-import-data`,
   link_exp:`${baseURL}/malawi-export-data`, 
  },
  {
    name: "Mali",
    continent: "AFRICA",
    flag: "https://flagcdn.com/ml.svg",
    link_main:`${baseURL}/country-wise-mali-import-export-data`,
    link_imp :`${baseURL}/country-wise-mali-import-data`,
   link_exp:`${baseURL}/country-wise-mali-export-data`, 
  },
  {
    name: "Mauritania",
    continent: "AFRICA",
    flag: "https://flagcdn.com/mr.svg",
    link_main:`${baseURL}/country-wise-mauritania-import-export-data`,
    link_imp :`${baseURL}/country-wise-mauritania-import-data`,
   link_exp:`${baseURL}/country-wise-mauritania-export-data`, 
  },
  {
    name: "Mauritius",
    continent: "AFRICA",
    flag: "https://flagcdn.com/mu.svg",
    link_main:`${baseURL}/country-wise-mauritius-import-export-data`,
    link_imp :`${baseURL}/country-wise-mauritius-import-data`,
   link_exp:`${baseURL}/country-wise-mauritius-export-data`, 
  },
  {
    name: "Morocco",
    continent: "AFRICA",
    flag: "https://flagcdn.com/ma.svg",
    link_main:`${baseURL}/country-wise-morocco-import-export-data`,
    link_imp :`${baseURL}/country-wise-morocco-import-data`,
   link_exp:`${baseURL}/country-wise-morocco-export-data`, 
  },
  {
    name: "Mozambique",
    continent: "AFRICA",
    flag: "https://flagcdn.com/mz.svg",
    link_main:`${baseURL}/country-wise-mozambique-import-export-data`,
    link_imp :`${baseURL}/country-wise-mozambique-import-data`,
   link_exp:`${baseURL}/country-wise-mozambique-export-data`, 
  },
  {
    name: "Namibia",
    continent: "AFRICA",
    flag: "https://flagcdn.com/na.svg",
    link_main:`${baseURL}/namibia-import-export-data`,
    link_imp :`${baseURL}/namibia-import-data`,
   link_exp:`${baseURL}/namibia-export-data`,
  },
  {
    name: "Nigeria",
    continent: "AFRICA",
    flag: "https://flagcdn.com/ng.svg",
    link_main:`${baseURL}/nigeria-import-export-data`,
    link_imp :`${baseURL}/nigeria-import-data`,
   link_exp:`${baseURL}/nigeria-export-data`,
  },
  {
    name: "Rwanda",
    continent: "AFRICA",
    flag: "https://flagcdn.com/rw.svg",
    link_main:`${baseURL}/country-wise-rwanda-import-export-data`,
    link_imp :`${baseURL}/country-wise-rwanda-import-data`,
   link_exp:`${baseURL}/country-wise-rwanda-export-data`, 
  },
  {
    name: "Sao Tome and Principe",
    continent: "AFRICA",
    flag: "https://flagcdn.com/st.svg",
    link_main:`${baseURL}/sao-tome-and-principe-import-export-data`,
    link_imp :`${baseURL}/sao-tome-and-principe-import-data`,
   link_exp:`${baseURL}/sao-tome-and-principe-export-data`,
  },
  {
    name: "Sierra Leone",
    continent: "AFRICA",
    flag: "https://flagcdn.com/sl.svg",
    link_main:`${baseURL}/sierra-leone-import-export-data`,
    link_imp :`${baseURL}/sierra-leone-import-data`,
   link_exp:`${baseURL}/sierra-leone-export-data`,
  },
  {
    name: "South Africa",
    continent: "AFRICA",
    flag: "https://flagcdn.com/za.svg",
    link_main:`${baseURL}/country-wise-south-africa-import-export-data`,
    link_imp :`${baseURL}/country-wise-south-africa-import-data`,
   link_exp:`${baseURL}/country-wise-south-africa-export-data`, 
  },
  {
    name: "Tanzania",
    continent: "AFRICA",
    flag: "https://flagcdn.com/tz.svg",
    link_main:`${baseURL}/tanzania-import-export-data`,
    link_imp :`${baseURL}/tanzania-import-data`,
   link_exp:`${baseURL}/tanzania-export-data`,
    otherLinks: true,
  },
  {
    name: "Tunisia",
    continent: "AFRICA",
    flag: "https://flagcdn.com/tn.svg",
    link_main:`${baseURL}/country-wise-tunisia-import-export-data`,
    link_imp :`${baseURL}/country-wise-tunisia-import-data`,
   link_exp:`${baseURL}/country-wise-tunisia-export-data`, 
  },
  {
    name: "Uganda",
    continent: "AFRICA",
    flag: "https://flagcdn.com/ug.svg",
    link_main:`${baseURL}/uganda-import-export-data`,
    link_imp :`${baseURL}/uganda-import-data`,
   link_exp:`${baseURL}/uganda-export-data`,
  },
  {
    name: "Zambia",
    continent: "AFRICA",
    flag: "https://flagcdn.com/zm.svg",
    link_main:`${baseURL}/zambia-import-export-data`,
    link_imp :`${baseURL}/zambia-import-data`,
   link_exp:`${baseURL}/zambia-export-data`,
  },
  {
    name: "Zimbabwe",
    continent: "AFRICA",
    flag: "https://flagcdn.com/zw.svg",
    link_main:`${baseURL}/zimbabwe-import-export-data`,
    link_imp :`${baseURL}/zimbabwe-import-data`,
   link_exp:`${baseURL}/zimbabwe-export-data`,
  },
  {
    name: "Austria",
    continent: "EUROPE",
    flag: "https://flagcdn.com/at.svg",
    link_main:`${baseURL}/country-wise-austria-import-export-data`,
    link_imp :`${baseURL}/country-wise-austria-import-data`,
   link_exp:`${baseURL}/country-wise-austria-export-data`, 
  },
  {
    name: "Belgium",
    continent: "EUROPE",
    flag: "https://flagcdn.com/be.svg",
    link_main:`${baseURL}/country-wise-belgium-import-export-data`,
    link_imp :`${baseURL}/country-wise-belgium-import-data`,
   link_exp:`${baseURL}/country-wise-belgium-export-data`, 
  },
  {
    name: "Bosnia and Herzegovina",
    continent: "EUROPE",
    flag: "https://flagcdn.com/ba.svg",
    link_main:`${baseURL}/country-wise-bosnia-and-herzegovina-import-export-data`,
    link_imp :`${baseURL}/country-wise-bosnia-and-herzegovina-import-data`,
   link_exp:`${baseURL}/country-wise-bosnia-and-herzegovina-export-data`, 
  },
  {
    name: "Bulgaria",
    continent: "EUROPE",
    flag: "https://flagcdn.com/bg.svg",
    link_main:`${baseURL}/country-wise-bulgaria-import-export-data`,
    link_imp :`${baseURL}/country-wise-bulgaria-import-data`,
   link_exp:`${baseURL}/country-wise-bulgaria-export-data`, 
  },
  {
    name: "Croatia",
    continent: "EUROPE",
    flag: "https://flagcdn.com/hr.svg",
    link_main:`${baseURL}/country-wise-croatia-import-export-data`,
    link_imp :`${baseURL}/country-wise-croatia-import-data`,
   link_exp:`${baseURL}/country-wise-croatia-export-data`, 
  },
  {
    name: "Cyprus",
    continent: "EUROPE",
    flag: "https://flagcdn.com/cy.svg",
    link_main:`${baseURL}/country-wise-cyprus-import-export-data`,
    link_imp :`${baseURL}/country-wise-cyprus-import-data`,
   link_exp:`${baseURL}/country-wise-cyprus-export-data`, 
  },
  {
    name: "Czech Republic",
    continent: "EUROPE",
    flag: "https://flagcdn.com/cz.svg",
    link_main:`${baseURL}/country-wise-czech-republic-import-export-data`,
    link_imp :`${baseURL}/country-wise-czech-republic-import-data`,
   link_exp:`${baseURL}/country-wise-czech-republic-export-data`, 
  },
  {
    name: "Denmark",
    continent: "EUROPE",
    flag: "https://flagcdn.com/dk.svg",
    link_main:`${baseURL}/country-wise-denmark-import-export-data`,
    link_imp :`${baseURL}/country-wise-denmark-import-data`,
   link_exp:`${baseURL}/country-wise-denmark-export-data`, 
  },
  {
    name: "Finland",
    continent: "EUROPE",
    flag: "https://flagcdn.com/fi.svg",
    link_main:`${baseURL}/country-wise-finland-import-export-data`,
    link_imp :`${baseURL}/country-wise-finland-import-data`,
   link_exp:`${baseURL}/country-wise-finland-export-data`, 
  },
  {
    name: "France",
    continent: "EUROPE",
    flag: "https://flagcdn.com/fr.svg",
    link_main:`${baseURL}/country-wise-france-import-export-data`,
    link_imp :`${baseURL}/country-wise-france-import-data`,
   link_exp:`${baseURL}/country-wise-france-export-data`, 
  },
  {
    name: "Germany",
    continent: "EUROPE",
    flag: "https://flagcdn.com/de.svg",
    link_main:`${baseURL}/country-wise-germany-import-export-data`,
    link_imp :`${baseURL}/country-wise-germany-import-data`,
   link_exp:`${baseURL}/country-wise-germany-export-data`, 
  },
  {
    name: "Greece",
    continent: "EUROPE",
    flag: "https://flagcdn.com/gr.svg",
    link_main:`${baseURL}/country-wise-greece-import-export-data`,
    link_imp :`${baseURL}/country-wise-greece-import-data`,
   link_exp:`${baseURL}/country-wise-greece-export-data`, 
  },
  {
    name: "Hungary",
    continent: "EUROPE",
    flag: "https://flagcdn.com/hu.svg",
    link_main:`${baseURL}/country-wise-hungary-import-export-data`,
    link_imp :`${baseURL}/country-wise-hungary-import-data`,
   link_exp:`${baseURL}/country-wise-hungary-export-data`, 
  },
  {
    name: "Iceland",
    continent: "EUROPE",
    flag: "https://flagcdn.com/is.svg",
    link_main:`${baseURL}/country-wise-iceland-import-export-data`,
    link_imp :`${baseURL}/country-wise-iceland-import-data`,
   link_exp:`${baseURL}/country-wise-iceland-export-data`, 
  },
  {
    name: "Ireland",
    continent: "EUROPE",
    flag: "https://flagcdn.com/ie.svg",
    link_main:`${baseURL}/country-wise-ireland-import-export-data`,
    link_imp :`${baseURL}/country-wise-ireland-import-data`,
    link_exp:`${baseURL}/country-wise-ireland-export-data`, 
  },-
  {
    name: "Italy",
    continent: "EUROPE",
    flag: "https://flagcdn.com/it.svg",
    link_main:`${baseURL}/country-wise-italy-import-export-data`,
    link_imp :`${baseURL}/country-wise-italy-import-data`,
    link_exp:`${baseURL}/country-wise-italy-export-data`, 
  },
  {
    name: "Latvia",
    continent: "EUROPE",
    flag: "https://flagcdn.com/lv.svg",
    link_main:`${baseURL}/country-wise-latvia-import-export-data`,
    link_imp :`${baseURL}/country-wise-latvia-import-data`,
    link_exp:`${baseURL}/country-wise-latvia-export-data`, 
  },
  {
    name: "Luxembourg",
    continent: "EUROPE",
    flag: "https://flagcdn.com/lu.svg",
    link_main:`${baseURL}/country-wise-luxembourg-import-export-data`,
    link_imp :`${baseURL}/country-wise-luxembourg-import-data`,
    link_exp:`{baseURL}/country-wise-luxembourg-export-data`, 
  
  },
  {
    name: "Lithuania",
    continent: "EUROPE",
    flag: "https://flagcdn.com/lt.svg",
    link_main:`${baseURL}/country-wise-lithuania-import-export-data`,
    link_imp :`${baseURL}/country-wise-lithuania-import-data`,
    link_exp:`${baseURL}/country-wise-lithuania-export-data`, 
  },
  {
    name: "Malta",
    continent: "EUROPE",
    flag: "https://flagcdn.com/mt.svg",
    link_main:`${baseURL}/country-wise-malta-import-export-data`,
    link_imp :`${baseURL}/country-wise-malta-import-data`,
    link_exp:`${baseURL}/country-wise-malta-export-data`, 
  },
  {
    name: "Moldova",
    continent: "EUROPE",
    flag: "https://flagcdn.com/md.svg",
    link_main:`${baseURL}/country-wise-moldova-import-export-data`,
    link_imp :`${baseURL}/country-wise-moldova-import-data`,
    link_exp:`${baseURL}/country-wise-moldova-export-data`, 
  },
  {
    name: "Netherlands",
    continent: "EUROPE",
    flag: "https://flagcdn.com/nl.svg",
    link_main:`${baseURL}/country-wise-netherlands-import-export-data`,
    link_imp :`${baseURL}/country-wise-netherlands-import-data`,
    link_exp:`${baseURL}/country-wise-netherlands-export-data`, 
  },
  {
    name: "North Macedonia",
    continent: "EUROPE",
    flag: "https://flagcdn.com/mk.svg",
    link_main:`${baseURL}/country-wise-north-macedonia-import-export-data`,
    link_imp :`${baseURL}/country-wise-north-macedonia-import-data`,
    link_exp:`${baseURL}/country-wise-north-macedonia-export-data` 
  },
  {
    name: "Poland",
    continent: "EUROPE",
    flag: "https://flagcdn.com/pl.svg",
    link_main:`${baseURL}/country-wise-poland-import-export-data`,
    link_imp :`${baseURL}/country-wise-poland-import-data`,
    link_exp:`${baseURL}/country-wise-poland-export-data`, 
  },
  {
    name: "Portugal",
    continent: "EUROPE",
    flag: "https://flagcdn.com/pt.svg",
    link_main:`${baseURL}/country-wise-portugal-import-export-data`,
    link_imp :`${baseURL}/country-wise-portugal-import-data`,
    link_exp:`${baseURL}/country-wise-portugal-export-data`, 
  },
  {
    name: "Romania",
    continent: "EUROPE",
    flag: "https://flagcdn.com/ro.svg",
    link_main:`${baseURL}/country-wise-romania-import-export-data`,
    link_imp :`${baseURL}/country-wise-romania-import-data`,
    link_exp:`${baseURL}/country-wise-romania-export-data`,
  },
  {
    name: "Serbia",
    continent: "EUROPE",
    flag: "https://flagcdn.com/rs.svg",
    link_main:`${baseURL}/country-wise-serbia-import-export-data`,
    link_imp :`${baseURL}/country-wise-serbia-import-data`,
    link_exp:`${baseURL}/country-wise-serbia-export-data`, 
  },
  {
    name: "Slovenia",
    continent: "EUROPE",
    flag: "https://flagcdn.com/si.svg",
    link_main:`${baseURL}/country-wise-slovenia-import-export-data`,
    link_imp :`${baseURL}/country-wise-slovenia-import-data`,
    link_exp:`${baseURL}/country-wise-slovenia-export-data`, 
  },
  {
    name: "Spain",
    continent: "EUROPE",
    flag: "https://flagcdn.com/es.svg",
    link_main:`${baseURL}/country-wise-spain-import-export-data`,
    link_imp :`${baseURL}/country-wise-spain-import-data`,
    link_exp:`${baseURL}/country-wise-spain-export-data`, 
  },
  {
    name: "Sweden",
    continent: "EUROPE",
    flag: "https://flagcdn.com/se.svg",
    link_main:`${baseURL}/country-wise-sweden-import-export-data`,
    link_imp :`${baseURL}/country-wise-sweden-import-data`,
    link_exp:`${baseURL}/country-wise-sweden-export-data`, 
  },
  {
    name: "Switzerland",
    continent: "EUROPE",
    flag: "https://flagcdn.com/ch.svg",
    link_main:`${baseURL}/country-wise-switzerland-import-export-data`,
    link_imp :`${baseURL}/country-wise-switzerland-import-data`,
    link_exp:`${baseURL}/country-wise-switzerland-export-data`, 
  },
  {
    name: "UK",
    continent: "EUROPE",
    flag: "https://flagcdn.com/gb.svg",
    link_main:`${baseURL}/country-wise-uk-import-export-data`,
    link_imp :`${baseURL}/country-wise-uk-import-data`,
    link_exp:`${baseURL}/country-wise-uk-export-data`, 
  },
  {
    name: "Ukraine",
    continent: "EUROPE",
    flag: "https://flagcdn.com/ua.svg",
    link_main:`${baseURL}/country-wise-ukraine-import-export-data`,
    link_imp :`${baseURL}/country-wise-ukraine-import-data`,
    link_exp:`${baseURL}/country-wise-ukraine-export-data`, 
  },
  {
    name: "Canada",
    continent: "NORTH AMERICA",
    flag: "https://flagcdn.com/ca.svg",
    link_main:`${baseURL}/country-wise-canada-import-export-data`,
    link_imp :`${baseURL}/country-wise-canada-import-data`,
    link_exp:`${baseURL}/country-wise-canada-export-data`, 
  },
  {
    name: "Costa Rica",
    continent: "NORTH AMERICA",
    flag: "https://flagcdn.com/cr.svg",
    link_main:`${baseURL}/country-wise-costa-rica-import-export-data`,
    link_imp :`${baseURL}/country-wise-costa-rica-import-data`,
    link_exp:`${baseURL}/country-wise-costa-rica-export-data`, 
  },
  {
    name: "Cuba",
    continent: "NORTH AMERICA",
    flag: "https://flagcdn.com/cu.svg",
    link_main:`${baseURL}/country-wise-cuba-import-export-data`,
    link_imp :`${baseURL}/country-wise-cuba-import-data`,
    link_exp:`${baseURL}/country-wise-cuba-export-data`, 
  },
  {
    name: "Dominican Republic",
    continent: "NORTH AMERICA",
    flag: "https://flagcdn.com/do.svg",
    link_main:`${baseURL}/country-wise-dominican-republic-import-export-data`,
    link_imp :`${baseURL}/country-wise-dominican-republic-import-data`,
    link_exp:`${baseURL}/country-wise-dominican-republic-export-data`, 
  },
  {
    name: "El Salvador",
    continent: "NORTH AMERICA",
    flag: "https://flagcdn.com/sv.svg",
    link_main:`${baseURL}/country-wise-el-salvador-import-export-data`,
    link_imp :`${baseURL}/country-wise-el-salvador-import-data`,
    link_exp:`${baseURL}/country-wise-el-salvador-export-data`, 
  },
  {
    name: "Guatemala",
    continent: "NORTH AMERICA",
    flag: "https://flagcdn.com/gt.svg",
    link_main:`${baseURL}/country-wise-guatemala-import-export-data`,
    link_imp :`${baseURL}/country-wise-guatemala-import-data`,
    link_exp:`${baseURL}/country-wise-guatemala-export-data`, 
  },
  {
    name: "Honduras",
    continent: "NORTH AMERICA",
    flag: "https://flagcdn.com/hn.svg",
    link_main:`${baseURL}/country-wise-honduras-import-export-data`,
    link_imp :`${baseURL}/country-wise-honduras-import-data`,
    link_exp:`${baseURL}/country-wise-honduras-export-data`, 
  },
  {
    name: "Jamaica",
    continent: "NORTH AMERICA",
    flag: "https://flagcdn.com/jm.svg",
    link_main:`${baseURL}/country-wise-jamaica-import-export-data`,
    link_imp :`${baseURL}/country-wise-jamaica-import-data`,
    link_exp:`${baseURL}/country-wise-jamaica-export-data`, 
  },
  {
    name: "Mexico",
    continent: "NORTH AMERICA",
    flag: "https://flagcdn.com/mx.svg",
    link_main:`${baseURL}/mexico-import-export-data`,
    link_imp :`${baseURL}/mexico-import-data`,
    link_exp:`${baseURL}/mexico-export-data`, 
    otherLinks: true,
  },
  {
    name: "Nicaragua",
    continent: "NORTH AMERICA",
    flag: "https://flagcdn.com/ni.svg",
    link_main:`${baseURL}/country-wise-nicaragua-import-export-data`,
    link_imp :`${baseURL}/country-wise-nicaragua-import-data`,
    link_exp:`${baseURL}/country-wise-nicaragua-export-data`, 
  },
  {
    name: "Panama",
    continent: "NORTH AMERICA",
    flag: "https://flagcdn.com/pa.svg",
      link_main:`${baseURL}/panama-import-export-data`,
    link_imp :`${baseURL}/panama-import-data`,
    link_exp:`${baseURL}/panama-export-data`,
  },
  {
    name: "USA",
    continent: "NORTH AMERICA",
    flag: "https://flagcdn.com/us.svg",
    link_main:`${baseURL}/us-import-export-data`,
    link_imp :`${baseURL}/us-import-data`,
    link_exp:`${baseURL}/us-export-data`, 
  },
  {
    name: "Australia",
    continent: "OCEANIA",
    flag: "https://flagcdn.com/au.svg",
    link_main:`${baseURL}/australia-import-export-data`,
    link_imp :`${baseURL}/australia-import-data`,
    link_exp:`${baseURL}/australia-export-data`,
  },
  {
    name: "Fiji",
    continent: "OCEANIA",
    flag: "https://flagcdn.com/fj.svg",
    link_main:`${baseURL}/country-wise-fiji-import-export-data`,
    link_imp :`${baseURL}/country-wise-fiji-import-data`,
    link_exp:`${baseURL}/country-wise-fiji-export-data`, 
  },
  {
    name: "New Zealand",
    continent: "OCEANIA",
    flag: "https://flagcdn.com/nz.svg",
    link_main:`${baseURL}/country-wise-new-zealand-import-export-data`,
    link_imp :`${baseURL}/country-wise-new-zealand-import-data`,
    link_exp:`${baseURL}/country-wise-new-zealand-export-data`, 
    
  },
  {
    name: "Papua New Guinea",
    continent: "OCEANIA",
    flag: "https://flagcdn.com/pg.svg",
    link_main:`${baseURL}/country-wise-papua-new-guinea-import-export-data`,
    link_imp :`${baseURL}/country-wise-papua-new-guinea-import-data`,
    link_exp:`${baseURL}/country-wise-papua-new-guinea-export-data`, 
  },
  {
    name: "Argentina",
    continent: "SOUTH AMERICA",
    flag: "https://flagcdn.com/ar.svg",
    link_main:`${baseURL}/argentina-import-export-data`,
    link_imp :`${baseURL}/argentina-import-data`,
    link_exp:`${baseURL}/argentina-export-data`, 
  },
  {
    name: "Bolivia",
    continent: "SOUTH AMERICA",
    flag: "https://flagcdn.com/bo.svg",
    link_main:`${baseURL}/bolivia-import-export-data`,
    link_imp :`${baseURL}/bolivia-import-data`,
    link_exp:`${baseURL}/bolivia-export-data`, 
    
  },
  {
    name: "Brazil",
    continent: "SOUTH AMERICA",
    flag: "https://flagcdn.com/br.svg",
    link_main:`${baseURL}/brazil-import-export-data`,
    link_imp :`${baseURL}/brazil-import-data`,
    link_exp:`${baseURL}/brazil-export-data`, 
    otherLinks: true,
  },
  {
    name: "Chile",
    continent: "SOUTH AMERICA",
    flag: "https://flagcdn.com/cl.svg",
    link_main:`${baseURL}/country-wise-chile-import-export-data`,
    link_imp :`${baseURL}/country-wise-chile-import-data`,
    link_exp:`${baseURL}/country-wise-chile-export-data`, 
  },
  {
    name: "Colombia",
    continent: "SOUTH AMERICA",
    flag: "https://flagcdn.com/co.svg",
    link_main:`${baseURL}/country-wise-colombia-import-export-data`,
    link_imp :`${baseURL}/country-wise-colombia-import-data`,
    link_exp:`${baseURL}/country-wise-colombia-export-data`, 
  },
  {
    name: "Ecuador",
    continent: "SOUTH AMERICA",
    flag: "https://flagcdn.com/ec.svg",
    link_main:`${baseURL}/country-wise-ecuador-import-export-data`,
    link_imp :`${baseURL}/country-wise-ecuador-import-data`,
    link_exp:`${baseURL}/country-wise-ecuador-export-data`, 
  },
  {
    name: "Guyana",
    continent: "SOUTH AMERICA",
    flag: "https://flagcdn.com/gy.svg",
    link_main:`${baseURL}/country-wise-guyana-import-export-data`,
    link_imp :`${baseURL}/country-wise-guyana-import-data`,
    link_exp:`${baseURL}/country-wise-guyana-export-data`, 
  },
  {
    name: "Paraguay",
    continent: "SOUTH AMERICA",
    flag: "https://flagcdn.com/py.svg",
    link_main:`${baseURL}/country-wise-paraguay-import-export-data`,
    link_imp :`${baseURL}/country-wise-paraguay-import-data`,
    link_exp:`${baseURL}/country-wise-paraguay-export-data`, 
  },
  {
    name: "Peru",
    continent: "SOUTH AMERICA",
    flag: "https://flagcdn.com/pe.svg",
    link_main:`${baseURL}/country-wise-peru-import-export-data`,
    link_imp :`${baseURL}/country-wise-peru-import-data`,
    link_exp:`${baseURL}/country-wise-peru-export-data`, 
  },
  {
    name: "Suriname",
    continent: "SOUTH AMERICA",
    flag: "https://flagcdn.com/sr.svg",
    link_main:`${baseURL}/country-wise-suriname-import-export-data`,
    link_imp :`${baseURL}/country-wise-suriname-import-data`,
    link_exp:`${baseURL}/country-wise-suriname-export-data`, 
  },
  {
    name: "Venezuela",
    continent: "SOUTH AMERICA",
    flag: "https://flagcdn.com/ve.svg",
    link_main:`${baseURL}/country-wise-venezuela-import-export-data`,
    link_imp :`${baseURL}/country-wise-venezuela-import-data`,
    link_exp:`${baseURL}/country-wise-venezuela-export-data`, 
  }
  ,
  {
    name: "Uruguay",
    continent: "SOUTH AMERICA",
    flag: "https://flagcdn.com/uy.svg",
    link_main:`${baseURL}/uruguay-import-export-data`,
    link_imp :`${baseURL}/uruguay-import-data`,
    link_exp:`${baseURL}/uruguay-export-data`, 
  },
];
const newCountries = [
      "argentina", "bangladesh", "australia", "bolivia", "botswana", "brazil",
      "chad", "chile", "china", "cote-d-ivoire", "congo", "egypt", "ethiopia",
      "ghana", "indonesia", "kazakistan", "kenya", "lesotho", "liberia"
    ];
// function generateLink(countryName) {
//   const newCountries = [
//     "argentina", "bangladesh", "australia", "bolivia", "botswana", "brazil",
//     "chad", "chile", "china", "cote-d-ivoire", "congo", "egypt", "ethopia",
//     "ghana", "indonesia", "kazakistan", "kenya", "lesotho", "liberia"
//   ];

  
//console.log(generateLink(country));

const Countries = () => {
  const continents = [...new Set(countries.map((c) => c.continent))];
  const [activeContinent, setActiveContinent] = useState(continents[0]);

  const filteredCountries = countries.filter(
    (c) => c.continent === activeContinent
  );

  return (
    <section className="bg-white py-12 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
        Country wise Import Export Data
      </h2>

      {/* Subheading */}
      <p className="text-base text-black text-center max-w-4xl mx-auto mb-8">
        Access the accurate import export data statistics of 200+ countries
        based on customs data reported by other countries. Find shipment records
        by HS Code, product description, quantity, unit, value, country of
        origin/destination, importer name, exporter name and port of
        loading/unloading shipping information.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
  {continents.map((continent) => (
    continent && (  // Check if continent is truthy
      <button
        key={continent}
        onClick={() => setActiveContinent(continent)}
        className={`px-4 py-2 rounded-lg font-medium border ${
          activeContinent === continent
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-black border-gray-300 hover:bg-gray-100"
        }`}
      >
        <p>{`${continent}`}</p>
      </button>
    )
  ))}
</div>


      {/* Continent Heading */}
      <h3 className="text-2xl font-semibold text-black mb-6 text-center">
        {activeContinent} Import-Export Trade Data
      </h3>
    
      {/* Country Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  xl:px-20">
        {filteredCountries.map((country) => (
          <div
            key={country.link_main}
            className="relative group flex items-center gap-4 p-4 text-white border border-blue-300 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Flag */}
            <Link
              href={country.link_main}
            >
              <img
                src={country.flag}
                alt={country.name}
                className="w-18 h-auto "
              />
            </Link>

            {/* Country Info */}
            <div className="flex flex-col">
            
              <Link
                href={country.link_main}
                // className="flex items-center gap-1 font-semibold md:text-xl text-lg underline text-blue-600"
                className="flex items-center gap-1 font-semibold md:text-xl text-lg hover:underline text-black hover:text-blue-600"
              >
                {country.name.replace(/^./, (s) => s.toUpperCase())} Import Export Data
              </Link>
              <div className="flex gap-2 mt-2">
                <Link
                  href={country.link_imp}
                  className="text-sm px-3 py-1 bg-transparent shadow-md text-black border border-blue-600 hover:text-white hover:bg-blue-600  hover:scale-108 transition"
                >
                  Import Data
                </Link>
                <Link
                  href={country.link_exp}
                  className="text-sm px-3 py-1 bg-transparent shadow-md text-black border border-blue-600 hover:border-0 hover:text-white hover:bg-orange-500  hover:scale-108 transition"
                >
                  Export Data
                </Link>
              </div>
            </div>
            {country.otherLinks && (
              <div
                className="absolute top-full right-0 w-full mt-2 bg-white border z-50 rounded-lg shadow-lg 
  opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto 
  transition duration-300 delay-300 group-hover:delay-0"
              >
                {" "}
                <h4 className="px-4 py-2 font-semibold text-black border-b">
                  Other Links
                </h4>
                <ul className="p-4 space-y-2">
                  <li>
                    <Link
                      href={`/global-products/product-A/country-${country.name.toLowerCase()}/type-export/pg-1`}
                      className="flex items-center text-sm text-black underline hover:text-blue-600"
                    >
                      {country.name} Export Products{" "}
                      <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/global-products/product-A/country-${country.name.toLowerCase()}/type-import/pg-1`}
                      className="flex items-center text-sm text-black underline hover:text-blue-600"
                    >
                      {country.name} Import Products{" "}
                      <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/global-companies-list/${country.name.toLowerCase()}/A-1`}
                      className="flex items-center text-sm text-black underline hover:text-blue-600"
                    >
                      {country.name} Companies List{" "}
                      <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countries;
