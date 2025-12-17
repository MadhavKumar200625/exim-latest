/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },





  
//   async rewrites() {
//     return [
//       {
//         source: '/country-wise-armenia-import-data',
//         destination: '/country-wise-import-data/armenia',  // content armenia
//       },
//       {
//         source: '/country-wise-armenia-export-data',
//         destination: '/country-wise-export-data/armenia', 
//       },
//       {
//         source: '/country-wise-armenia-import-export-data',
//         destination: '/country-wise/armenia', 
//       },

//        // content azerbaijan
//       {
//         source: '/country-wise-azerbaijan-import-data',
//         destination: '/country-wise-import-data/azerbaijan',  // content 
//       },
//       {
//         source: '/country-wise-azerbaijan-export-data',
//         destination: '/country-wise-export-data/azerbaijan', 
//       },
//       {
//         source: '/country-wise-azerbaijan-import-export-data',
//         destination: '/country-wise/azerbaijan', 
//       },
// //Bahrain
//       {
//         source: '/country-wise-bahrain-import-data',
//         destination: '/country-wise-import-data/bahrain',  // content from here
//       },
//       {
//         source: '/country-wise-bahrain-export-data',
//         destination: '/country-wise-export-data/bahrain', 
//       },
//       {
//         source: '/country-wise-bahrain-import-export-data',
//         destination: '/country-wise/bahrain', 
//       },

//       //Bangladesh
//       {
//         source: '/bangladesh-import-data',
//         destination: '/country-wise-import-data/bangladesh',  
//       },
//       {
//         source: '/bangladesh-export-data',
//         destination: '/country-wise-export-data/bangladesh', 
//       },
//       {
//         source: '/bangladesh-import-export-data',
//         destination: '/country-wise/bangladesh', 
//       },

//       ///Brunei

//       {
//         source: '/country-wise-brunei-import-data',
//         destination: '/country-wise-import-data/brunei',  
//       },
//       {
//         source: '/country-wise-brunei-export-data',
//         destination: '/country-wise-export-data/brunei', 
//       },
//       {
//         source: '/country-wise-brunei-import-export-data',
//         destination: '/country-wise/brunei', 
//       },

//       //Cambodia

//       {
//         source: '/country-wise-cambodia-import-data',
//         destination: '/country-wise-import-data/cambodia',  
//       },
//       {
//         source: '/country-wise-cambodia-export-data',
//         destination: '/country-wise-export-data/cambodia', 
//       },
//       {
//         source: '/country-wise-cambodia-import-export-data',
//         destination: '/country-wise/cambodia', 
//       },

//       //China
//       {
//         source: '/china-import-data',
//         destination: '/country-wise-import-data/china',  
//       },
//       {
//         source: '/china-export-data',
//         destination: '/country-wise-export-data/china', 
//       },
//       {
//         source: '/china-import-export-data',
//         destination: '/country-wise/china', 
//       },

      

//       ///Iran
//       {
//         source: '/country-wise-iran-import-data',
//         destination: '/country-wise-import-data/iran',  
//       },
//       {
//         source: '/country-wise-iran-export-data',
//         destination: '/country-wise-export-data/iran', 
//       },
//       {
//         source: '/country-wise-iran-import-export-data',
//         destination: '/country-wise/iran', 
//       },

//       ///HongKong
//       {
//         source: '/country-wise-hong-kong-import-data',
//         destination: '/country-wise-import-data/hongkong',  
//       },
//       {
//         source: '/country-wise-hong-kong-export-data',
//         destination: '/country-wise-export-data/hong-kong', 
//       },
//       {
//         source: '/country-wise-hong-kong-import-export-data',
//         destination: '/country-wise/hong-kong', 
//       },


//       ///Indonesia
//       {
//         source: '/indonesia-import-data',
//         destination: '/country-wise-import-data/indonesia',  
//       },
//       {
//         source: '/indonesia-export-data',
//         destination: '/country-wise-export-data/indonesia', 
//       },
//       {
//         source: '/indonesia-import-export-data',
//         destination: '/country-wise/indonesia', 
//       },

//       //Israel

//       {
//         source: '/country-wise-israel-import-data',
//         destination: '/country-wise-import-data/israel',  
//       },
//       {
//         source: '/country-wise-israel-export-data',
//         destination: '/country-wise-export-data/israel', 
//       },
//       {
//         source: '/country-wise-israel-import-export-data',
//         destination: '/country-wise/israel', 
//       },

//       //Japan

//       {
//         source: '/country-wise-japan-import-data',
//         destination: '/country-wise-import-data/japan',  
//       },
//       {
//         source: '/country-wise-japan-export-data',
//         destination: '/country-wise-export-data/japan', 
//       },
//       {
//         source: '/country-wise-japan-import-export-data',
//         destination: '/country-wise/japan', 
//       },

//       //Jordan

//       {
//         source: '/country-wise-jordan-import-data',
//         destination: '/country-wise-import-data/jordan',  
//       },
//       {
//         source: '/country-wise-jordan-export-data',
//         destination: '/country-wise-export-data/jordan', 
//       },
//       {
//         source: '/country-wise-jordan-import-export-data',
//         destination: '/country-wise/jordan', 
//       },


//       //Kazakstan

//       {
//         source: '/kazakhstan-import-data',
//         destination: '/country-wise-import-data/kazakhstan',  
//       },
//       {
//         source: '/kazakhstan-export-data',
//         destination: '/country-wise-export-data/kazakhstan', 
//       },
//       {
//         source: '/kazakhstan-import-export-data',
//         destination: '/country-wise/kazakhstan', 
//       },
// ///Korea
//       {
//         source: '/country-wise-korea-import-data',
//         destination: '/country-wise-import-data/korea',
//       },
//       {
//         source: '/country-wise-korea-export-data',
//         destination: '/country-wise-export-data/korea',
//       },
//       {
//         source: '/country-wise-korea-import-export-data',
//         destination: '/country-wise/korea',
//       },
      

//       ///Kuwait
//       {
//         source: '/country-wise-kuwait-import-data',
//         destination: '/country-wise-import-data/kuwait',
//       },
//       {
//         source: '/country-wise-kuwait-export-data',
//         destination: '/country-wise-export-data/kuwait',
//       },
//       {
//         source: '/country-wise-kuwait-import-export-data',
//         destination: '/country-wise/kuwait',
//       },

//       //Laos
      
//       {
//         source: '/country-wise-laos-import-data',
//         destination: '/country-wise-import-data/laos',
//       },
//       {
//         source: '/country-wise-laos-export-data',
//         destination: '/country-wise-export-data/laos',
//       },
//       {
//         source: '/country-wise-laos-import-export-data',
//         destination: '/country-wise/laos',
//       },


//       //Lebanon
      
//       {
//         source: '/country-wise-lebanon-import-data',
//         destination: '/country-wise-import-data/lebanon',
//       },
//       {
//         source: '/country-wise-lebanon-export-data',
//         destination: '/country-wise-export-data/lebanon',
//       },
//       {
//         source: '/country-wise-lebanon-import-export-data',
//         destination: '/country-wise/lebanon',
//       },


//       // Congo
// { source: '/congo-import-data', destination: '/country-wise-import-data/congo' },
// { source: '/congo-export-data', destination: '/country-wise-export-data/congo' },
// { source: '/congo-import-export-data', destination: '/country-wise/congo' },

// // Côte d'Ivoire (cotedivoire)
// { source: '/cote-d-ivoire-import-data', destination: '/country-wise-import-data/cote-d-ivoire' },
// { source: '/cote-d-ivoire-export-data', destination: '/country-wise-export-data/cote-d-ivoire' },
// { source: '/cote-d-ivoire-import-export-data', destination: '/country-wise/cote-d-ivoire' },



//       ///Malaysia
//       // --- Asia & Middle East ---
// { source: '/country-wise-malaysia-import-data', destination: '/country-wise-import-data/malaysia' },
// { source: '/country-wise-malaysia-export-data', destination: '/country-wise-export-data/malaysia' },
// { source: '/country-wise-malaysia-import-export-data', destination: '/country-wise/malaysia' },



// ///Maldives
// { source: '/country-wise-maldives-import-data', destination: '/country-wise-import-data/maldives' },
// { source: '/country-wise-maldives-export-data', destination: '/country-wise-export-data/maldives' },
// { source: '/country-wise-maldives-import-export-data', destination: '/country-wise/maldives' },


// //Nepal
// { source: '/country-wise-nepal-import-data', destination: '/country-wise-import-data/nepal' },
// { source: '/country-wise-nepal-export-data', destination: '/country-wise-export-data/nepal' },
// { source: '/country-wise-nepal-import-export-data', destination: '/country-wise/nepal' },



// //Oman
// { source: '/country-wise-oman-import-data', destination: '/country-wise-import-data/oman' },
// { source: '/country-wise-oman-export-data', destination: '/country-wise-export-data/oman' },
// { source: '/country-wise-oman-import-export-data', destination: '/country-wise/oman' },



// //Pakistan
// { source: '/pakistan-import-data', destination: '/country-wise-import-data/pakistan' },
// { source: '/pakistan-export-data', destination: '/country-wise-export-data/pakistan' },
// { source: '/pakistan-import-export-data', destination: '/country-wise/pakistan'},


// ///Philippines
// { source: '/country-wise-philippines-import-data', destination: '/country-wise-import-data/philippines' },
// { source: '/country-wise-philippines-export-data', destination: '/country-wise-export-data/philippines' },
// { source: '/country-wise-philippines-import-export-data', destination: '/country-wise/philippines' },


// //Qatar
// { source: '/country-wise-qatar-import-data', destination: '/country-wise-import-data/qatar' },
// { source: '/country-wise-qatar-export-data', destination: '/country-wise-export-data/qatar' },
// { source: '/country-wise-qatar-import-export-data', destination: '/country-wise/qatar' },


// //Russia
// { source: '/russia-import-data', destination: '/country-wise-import-data/russia' },
// { source: '/russia-export-data', destination: '/country-wise-export-data/russia' },
// { source: '/russia-import-export-data', destination: '/country-wise/russia' },



// //Saudi Arabia
// { source: '/country-wise-saudi-arabia-import-data', destination: '/country-wise-import-data/saudi-arabia' },
// { source: '/country-wise-saudi-arabia-export-data', destination: '/country-wise-export-data/saudi-arabia' },
// { source: '/country-wise-saudiarabia-import-export-data', destination: '/country-wise/saudi-arabia' },


// //Myanmar
// { source: '/country-wise-myanmar-import-data', destination: '/country-wise-import-data/myanmar' },
// { source: '/country-wise-myanmar-export-data', destination: '/country-wise-export-data/myanmar' },
// { source: '/country-wise-myanmar-import-export-data', destination: '/country-wise/myanmar' },


// //Singapore
// { source: '/singapore-import-data', destination: '/country-wise-import-data/singapore' },
// { source: '/singapore-export-data', destination: '/country-wise-export-data/singapore' },
// { source: '/singapore-import-export-data', destination: '/country-wise/singapore' },



// //Srilanka
// { source: '/country-wise-sri-lanka-import-data', destination: '/country-wise-import-data/sri-lanka' },
// { source: '/country-wise-sri-lanka-export-data', destination: '/country-wise-export-data/sri-lanka' },
// { source: '/country-wise-sri-lanka-import-export-data', destination: '/country-wise/sri-lanka' },



// //Syria
// { source: '/country-wise-syria-import-data', destination: '/country-wise-import-data/syria' },
// { source: '/country-wise-syria-export-data', destination: '/country-wise-export-data/syria' },
// { source: '/country-wise-syria-import-export-data', destination: '/country-wise/syria' },


// //Taiwan
// { source: '/country-wise-taiwan-import-data', destination: '/country-wise-import-data/taiwan' },
// { source: '/country-wise-taiwan-export-data', destination: '/country-wise-export-data/taiwan' },
// { source: '/country-wise-taiwan-import-export-data', destination: '/country-wise/taiwan' },



// //Thailand
// { source: '/thailand-import-data', destination: '/country-wise-import-data/thailand' },
// { source: '/thailand-export-data', destination: '/country-wise-export-data/thailand' },
// { source: '/thailand-import-export-data', destination: '/country-wise/thailand' },



// //UAE
// { source: '/country-wise-uae-import-data', destination: '/country-wise-import-data/uae' },
// { source: '/country-wise-uae-export-data', destination: '/country-wise-export-data/uae' },
// { source: '/country-wise-uae-import-export-data', destination: '/country-wise/uae' },


// //Uzbekistan
// { source: '/country-wise-uzbekistan-import-data', destination: '/country-wise-import-data/uzbekistan' },
// { source: '/country-wise-uzbekistan-export-data', destination: '/country-wise-export-data/uzbekistan' },
// { source: '/country-wise-uzbekistan-import-export-data', destination: '/country-wise/uzbekistan' },


// //Vietnam
// { source: '/vietnam-import-data', destination: '/country-wise-import-data/vietnam' },
// { source: '/vietnam-export-data', destination: '/country-wise-export-data/vietnam' },
// { source: '/vietnam-import-export-data', destination: '/country-wise/vietnam' },


// ///Yemen
// { source: '/country-wise-yemen-import-data', destination: '/country-wise-import-data/yemen' },
// { source: '/country-wise-yemen-export-data', destination: '/country-wise-export-data/yemen' },
// { source: '/country-wise-yemen-import-export-data', destination: '/country-wise/yemen' },

// // --- Africa ---


// //Algeria
// { source: '/country-wise-algeria-import-data', destination: '/country-wise-import-data/algeria' },
// { source: '/country-wise-algeria-export-data', destination: '/country-wise-export-data/algeria' },
// { source: '/country-wise-algeria-import-export-data', destination: '/country-wise/algeria' },


// //Angola
// { source: '/country-wise-angola-import-data', destination: '/country-wise-import-data/angola' },
// { source: '/country-wise-angola-export-data', destination: '/country-wise-export-data/angola' },
// { source: '/country-wise-angola-import-export-data', destination: '/country-wise/angola' },



// //Botswana
// { source:'/botswana-import-data', destination: '/country-wise-import-data/botswana' },
// { source:'/botswana-export-data', destination: '/country-wise-export-data/botswana' },
// { source:'/botswana-import-export-data', destination: '/country-wise/botswana' },


// //Burkinafaso
// { source: '/country-wise-burkina-faso-import-data', destination: '/country-wise-import-data/burkina-faso' },
// { source: '/country-wise-burkina-faso-export-data', destination: '/country-wise-export-data/burkina-faso' },
// { source: '/country-wise-burkina-faso-import-export-data', destination: '/country-wise/burkina-faso' },


// //Burundi
// { source: '/country-wise-burundi-import-data', destination: '/country-wise-import-data/burundi' },
// { source: '/country-wise-burundi-export-data', destination: '/country-wise-export-data/burundi' },
// { source: '/country-wise-burundi-import-export-data', destination: '/country-wise/burundi' },

// // --- Europe ---

// //Austria
// { source: '/country-wise-austria-import-data', destination: '/country-wise-import-data/austria' },
// { source: '/country-wise-austria-export-data', destination: '/country-wise-export-data/austria' },
// { source: '/country-wise-austria-import-export-data', destination: '/country-wise/austria' },



// ///Belgium
// { source: '/country-wise-belgium-import-data', destination: '/country-wise-import-data/belgium' },
// { source: '/country-wise-belgium-export-data', destination: '/country-wise-export-data/belgium' },
// { source: '/country-wise-belgium-import-export-data', destination: '/country-wise/belgium' },


// //Bosnia and Herzegovina
// { source: '/country-wise-bosnia-and-herzegovina-import-data', destination: '/country-wise-import-data/bosnia-and-herzegovina' },
// { source: '/country-wise-bosnia-and-herzegovina-export-data', destination: '/country-wise-export-data/bosnia-and-herzegovina' },
// { source: '/country-wise-bosnia-and-herzegovina-import-export-data', destination: '/country-wise/bosnia-and-herzegovina' },



// //Croatia
// { source: '/country-wise-croatia-import-data', destination: '/country-wise-import-data/croatia' },
// { source: '/country-wise-croatia-export-data', destination: '/country-wise-export-data/croatia' },
// { source: '/country-wise-croatia-import-export-data', destination: '/country-wise/croatia' },


// //Cyprus
// { source: '/country-wise-cyprus-import-data', destination: '/country-wise-import-data/cyprus' },
// { source: '/country-wise-cyprus-export-data', destination: '/country-wise-export-data/cyprus' },
// { source: '/country-wise-cyprus-import-export-data', destination: '/country-wise/cyprus' },


// //Czech Republic
// { source: '/country-wise-czech-republic-import-data', destination: '/country-wise-import-data/czech-republic' },
// { source: '/country-wise-czech-republic-export-data', destination: '/country-wise-export-data/czech-republic' },
// { source: '/country-wise-czech-republic-import-export-data', destination: '/country-wise/czech-republic' },


// //Denmark
// { source: '/country-wise-denmark-import-data', destination: '/country-wise-import-data/denmark' },
// { source: '/country-wise-denmark-export-data', destination: '/country-wise-export-data/denmark' },
// { source: '/country-wise-denmark-import-export-data', destination: '/country-wise/denmark' },


// //Finland
// { source: '/country-wise-finland-import-data', destination: '/country-wise-import-data/finland' },
// { source: '/country-wise-finland-export-data', destination: '/country-wise-export-data/finland' },
// { source: '/country-wise-finland-import-export-data', destination: '/country-wise/finland' },


// //France
// { source: '/country-wise-france-import-data', destination: '/country-wise-import-data/france' },
// { source: '/country-wise-france-export-data', destination: '/country-wise-export-data/france' },
// { source: '/country-wise-france-import-export-data', destination: '/country-wise/france' },


// //Germany
// { source: '/country-wise-germany-import-data', destination: '/country-wise-import-data/germany' },
// { source: '/country-wise-germany-export-data', destination: '/country-wise-export-data/germany' },
// { source: '/country-wise-germany-import-export-data', destination: '/country-wise/germany' },


// //Greece
// { source: '/country-wise-greece-import-data', destination: '/country-wise-import-data/greece' },
// { source: '/country-wise-greece-export-data', destination: '/country-wise-export-data/greece' },
// { source: '/country-wise-greece-import-export-data', destination: '/country-wise/greece' },


// //Hungary
// { source: '/country-wise-hungary-import-data', destination: '/country-wise-import-data/hungary' },
// { source: '/country-wise-hungary-export-data', destination: '/country-wise-export-data/hungary' },
// { source: '/country-wise-hungary-import-export-data', destination: '/country-wise/hungary' },


// ///Ireland
// { source: '/country-wise-ireland-import-data', destination: '/country-wise-import-data/ireland' },
// { source: '/country-wise-ireland-export-data', destination: '/country-wise-export-data/ireland' },
// { source: '/country-wise-ireland-import-export-data', destination: '/country-wise/ireland' },


// //iceland
// { source: '/country-wise-iceland-import-data', destination: '/country-wise-import-data/iceland' },
// { source: '/country-wise-iceland-export-data', destination: '/country-wise-export-data/iceland' },
// { source: '/country-wise-iceland-import-export-data', destination: '/country-wise/iceland' },


// //Italy
// { source: '/country-wise-italy-import-data', destination: '/country-wise-import-data/italy' },
// { source: '/country-wise-italy-export-data', destination: '/country-wise-export-data/italy' },
// { source: '/country-wise-italy-import-export-data', destination: '/country-wise/italy' },

// ///latvia
// { source: '/country-wise-latvia-import-data', destination: '/country-wise-import-data/latvia' },
// { source: '/country-wise-latvia-export-data', destination: '/country-wise-export-data/latvia' },
// { source: '/country-wise-latvia-import-export-data', destination: '/country-wise/latvia' },


// //luxembourg
// { source: '/country-wise-luxembourg-import-data', destination: '/country-wise-import-data/luxembourg' },
// { source: '/country-wise-luxembourg-export-data', destination: '/country-wise-export-data/luxembourg' },
// { source: '/country-wise-luxembourg-import-export-data', destination: '/country-wise/luxembourg' },


// //lithuania
// { source: '/country-wise-lithuania-import-data', destination: '/country-wise-import-data/lithuania' },
// { source: '/country-wise-lithuania-export-data', destination: '/country-wise-export-data/lithuania' },
// { source: '/country-wise-lithuania-import-export-data', destination: '/country-wise/lithuania' },


// //malta
// { source: '/country-wise-malta-import-data', destination: '/country-wise-import-data/malta' },
// { source: '/country-wise-malta-export-data', destination: '/country-wise-export-data/malta' },
// { source: '/country-wise-malta-import-export-data', destination: '/country-wise/malta' },


// //moldova
// { source: '/country-wise-moldova-import-data', destination: '/country-wise-import-data/moldova' },
// { source: '/country-wise-moldova-export-data', destination: '/country-wise-export-data/moldova' },
// { source: '/country-wise-moldova-import-export-data', destination: '/country-wise/moldova' },


// //netherlands
// { source: '/country-wise-netherlands-import-data', destination: '/country-wise-import-data/netherlands' },
// { source: '/country-wise-netherlands-export-data', destination: '/country-wise-export-data/netherlands' },
// { source: '/country-wise-netherlands-import-export-data', destination: '/country-wise/netherlands' },


// ///north-macedonia
// { source: '/country-wise-north-macedonia-import-data', destination: '/country-wise-import-data/north-macedonia' },
// { source: '/country-wise-north-macedonia-export-data', destination: '/country-wise-export-data/north-macedonia' },
// { source: '/country-wise-north-macedonia-import-export-data', destination: '/country-wise/north-macedonia' },



// ///Poland
// { source: '/country-wise-poland-import-data', destination: '/country-wise-import-data/poland' },
// { source: '/country-wise-poland-export-data', destination: '/country-wise-export-data/poland' },
// { source: '/country-wise-poland-import-export-data', destination: '/country-wise/poland' },


// //Prtugal
// { source: '/country-wise-portugal-import-data', destination: '/country-wise-import-data/portugal' },
// { source: '/country-wise-portugal-export-data', destination: '/country-wise-export-data/portugal' },
// { source: '/country-wise-portugal-import-export-data', destination: '/country-wise/portugal' },


// //Romania
// { source: '/country-wise-romania-import-data', destination: '/country-wise-import-data/romania' },
// { source: '/country-wise-romania-export-data', destination: '/country-wise-export-data/romania' },
// { source: '/country-wise-romania-import-export-data', destination: '/country-wise/romania' },


// //Serbia
// { source: '/country-wise-serbia-import-data', destination: '/country-wise-import-data/serbia' },
// { source: '/country-wise-serbia-export-data', destination: '/country-wise-export-data/serbia' },
// { source: '/country-wise-serbia-import-export-data', destination: '/country-wise/serbia' },


// //Slovenia
// { source: '/country-wise-slovenia-import-data', destination: '/country-wise-import-data/slovenia' },
// { source: '/country-wise-slovenia-export-data', destination: '/country-wise-export-data/slovenia' },
// { source: '/country-wise-slovenia-import-export-data', destination: '/country-wise/slovenia' },


// //Spain
// { source: '/country-wise-spain-import-data', destination: '/country-wise-import-data/spain' },
// { source: '/country-wise-spain-export-data', destination: '/country-wise-export-data/spain' },
// { source: '/country-wise-spain-import-export-data', destination: '/country-wise/spain' },


// //Sweden
// { source: '/country-wise-sweden-import-data', destination: '/country-wise-import-data/sweden' },
// { source: '/country-wise-sweden-export-data', destination: '/country-wise-export-data/sweden' },
// { source: '/country-wise-sweden-import-export-data', destination: '/country-wise/sweden' },

// //Switzerland
// { source: '/country-wise-switzerland-import-data', destination: '/country-wise-import-data/switzerland' },
// { source: '/country-wise-switzerland-export-data', destination: '/country-wise-export-data/switzerland' },
// { source: '/country-wise-switzerland-import-export-data', destination: '/country-wise/switzerland' },

// //UK
// { source: '/country-wise-uk-import-data', destination: '/country-wise-import-data/uk' },
// { source: '/country-wise-uk-export-data', destination: '/country-wise-export-data/uk' },
// { source: '/country-wise-uk-import-export-data', destination: '/country-wise/uk' },


// //Ukraine
// { source: '/country-wise-ukraine-import-data', destination: '/country-wise-import-data/ukraine' },
// { source: '/country-wise-ukraine-export-data', destination: '/country-wise-export-data/ukraine' },
// { source: '/country-wise-ukraine-import-export-data', destination: '/country-wise/ukraine' },


// // --- North America ---

// //Canada

// { source: '/country-wise-canada-import-data', destination: '/country-wise-import-data/canada' },
// { source: '/country-wise-canada-export-data', destination: '/country-wise-export-data/canada' },
// { source: '/country-wise-canada-import-export-data', destination: '/country-wise/canada' },


// ///Costa-Rica
// { source: '/country-wise-costa-rica-import-data', destination: '/country-wise-import-data/costa-rica' },
// { source: '/country-wise-costa-rica-export-data', destination: '/country-wise-export-data/costa-rica' },
// { source: '/country-wise-costa-rica-import-export-data', destination: '/country-wise/costa-rica' },


// ///Cuba
// { source: '/country-wise-cuba-import-data', destination: '/country-wise-import-data/cuba' },
// { source: '/country-wise-cuba-export-data', destination: '/country-wise-export-data/cuba' },
// { source: '/country-wise-cuba-import-export-data', destination: '/country-wise/cuba' },


// //Dominican Republic 
// { source: '/country-wise-dominican-republic-import-data', destination: '/country-wise-import-data/dominican-republic' },
// { source: '/country-wise-dominican-republic-export-data', destination: '/country-wise-export-data/dominican-republic' },
// { source: '/country-wise-dominican-republic-import-export-data', destination: '/country-wise/dominican-republic' },


// //El Salvador
// { source: '/country-wise-el-salvador-import-data', destination: '/country-wise-import-data/el-salvador' },
// { source: '/country-wise-el-salvador-export-data', destination: '/country-wise-export-data/el-salvador' },
// { source: '/country-wise-el-salvador-import-export-data', destination: '/country-wise/el-salvador' },


// ///Gautemala
// { source: '/country-wise-guatemala-import-data', destination: '/country-wise-import-data/guatemala' },
// { source: '/country-wise-guatemala-export-data', destination: '/country-wise-export-data/guatemala' },
// { source: '/country-wise-guatemala-import-export-data', destination: '/country-wise/guatemala' },


// //Honduras
// { source: '/country-wise-honduras-import-data', destination: '/country-wise-import-data/honduras' },
// { source: '/country-wise-honduras-export-data', destination: '/country-wise-export-data/honduras' },
// { source: '/country-wise-honduras-import-export-data', destination: '/country-wise/honduras' },


// //Jamaica
// { source: '/country-wise-jamaica-import-data', destination: '/country-wise-import-data/jamaica' },
// { source: '/country-wise-jamaica-export-data', destination: '/country-wise-export-data/jamaica' },
// { source: '/country-wise-jamaica-import-export-data', destination: '/country-wise/jamaica' },


// //Mexico
// { source: '/mexico-import-data', destination: '/country-wise-import-data/mexico' },
// { source: '/mexico-export-data', destination: '/country-wise-export-data/mexico' },
// { source: '/mexico-import-export-data', destination: '/country-wise/mexico' },


// ///Nicaragua
// { source: '/country-wise-nicaragua-import-data', destination: '/country-wise-import-data/nicaragua' },
// { source: '/country-wise-nicaragua-export-data', destination: '/country-wise-export-data/nicaragua' },
// { source: '/country-wise-nicaragua-import-export-data', destination: '/country-wise/nicaragua' },


// ///Panama
// { source: '/country-wise-panama-import-data', destination: '/country-wise-import-data/panama' },
// { source: '/country-wise-panama-export-data', destination: '/country-wise-export-data/panama' },
// { source: '/country-wise-panama-import-export-data', destination: '/country-wise/panama' },


// ///US
// { source: '/us-import-data', destination: '/country-wise-import-data/usa' },
// { source: '/us-export-data', destination: '/country-wise-export-data/usa' },
// { source: '/us-import-export-data', destination: '/country-wise/usa' },

// // --- South America ---

// //Argentina
// { source: '/argentina-import-data', destination: '/country-wise-import-data/argentina' },
// { source: '/argentina-export-data', destination: '/country-wise-export-data/argentina' },
// { source: '/argentina-import-export-data', destination: '/country-wise/argentina' },


// //Bolivia
// { source: '/bolivia-import-data', destination: '/country-wise-import-data/bolivia' },
// { source: '/bolivia-export-data', destination: '/country-wise-export-data/bolivia' },
// { source: '/bolivia-import-export-data', destination: '/country-wise/bolivia' },


// //Brazil
// { source: '/brazil-import-data', destination: '/country-wise-import-data/brazil' },
// { source: '/brazil-export-data', destination: '/country-wise-export-data/brazil' },
// { source: '/brazil-import-export-data', destination: '/country-wise/brazil' },


// //Chile 
// { source: '/country-wise-chile-import-data', destination: '/country-wise-import-data/chile' },
// { source: '/country-wise-chile-export-data', destination: '/country-wise-export-data/chile' },
// { source: '/country-wise-chile-import-export-data', destination: '/country-wise/chile' },


// //chad
// { source: '/chad-import-data', destination: '/country-wise-import-data/chad' },
// { source: '/chad-export-data', destination: '/country-wise-export-data/chad' },
// { source: '/chad-import-export-data', destination: '/country-wise/chad' },


// //Colombia
// { source: '/country-wise-colombia-import-data', destination: '/country-wise-import-data/colombia' },
// { source: '/country-wise-colombia-export-data', destination: '/country-wise-export-data/colombia' },
// { source: '/country-wise-colombia-import-export-data', destination: '/country-wise/colombia' },


// //Ecuador
// { source: '/country-wise-ecuador-import-data', destination: '/country-wise-import-data/ecuador' },
// { source: '/country-wise-ecuador-export-data', destination: '/country-wise-export-data/ecuador' },
// { source: '/country-wise-ecuador-import-export-data', destination: '/country-wise/ecuador' },


// //Guyana
// { source: '/country-wise-guyana-import-data', destination: '/country-wise-import-data/guyana' },
// { source: '/country-wise-guyana-export-data', destination: '/country-wise-export-data/guyana' },
// { source: '/country-wise-guyana-import-export-data', destination: '/country-wise/guyana' },


// ///Paraguay
// { source: '/country-wise-paraguay-import-data', destination: '/country-wise-import-data/paraguay' },
// { source: '/country-wise-paraguay-export-data', destination: '/country-wise-export-data/paraguay' },
// { source: '/country-wise-paraguay-import-export-data', destination: '/country-wise/paraguay' },


// //Peru
// { source: '/country-wise-peru-import-data', destination: '/country-wise-import-data/peru' },
// { source: '/country-wise-peru-export-data', destination: '/country-wise-export-data/peru' },
// { source: '/country-wise-peru-import-export-data', destination: '/country-wise/peru' },



// ////Suriname
// { source: '/country-wise-suriname-import-data', destination: '/country-wise-import-data/suriname' },
// { source: '/country-wise-suriname-export-data', destination: '/country-wise-export-data/suriname' },
// { source: '/country-wise-suriname-import-export-data', destination: '/country-wise/suriname' },


// ///Venezuela
// { source: '/country-wise-venezuela-import-data', destination: '/country-wise-import-data/venezuela' },
// { source: '/country-wise-venezuela-export-data', destination: '/country-wise-export-data/venezuela' },
// { source: '/country-wise-venezuela-import-export-data', destination: '/country-wise/venezuela' },

// ///Uruguay
// { source: '/uruguay-import-data', destination: '/country-wise-import-data/uruguay' },
// { source: '/uruguay-export-data', destination: '/country-wise-export-data/uruguay' },
// { source: '/uruguay-import-export-data', destination: '/country-wise/uruguay' },

// // --- Oceania ---

// //Australia
// { source: '/australia-import-data', destination: '/country-wise-import-data/australia' },
// { source: '/australia-export-data', destination: '/country-wise-export-data/australia' },
// { source: '/australia-import-export-data', destination: '/country-wise/australia' },


// ///Fiji
// { source: '/country-wise-fiji-import-data', destination: '/country-wise-import-data/fiji' },
// { source: '/country-wise-fiji-export-data', destination: '/country-wise-export-data/fiji' },
// { source: '/country-wise-fiji-import-export-data', destination: '/country-wise/fiji' },

// { source: '/country-wise-new-zealand-import-data', destination: '/country-wise-import-data/new-zealand' },
// { source: '/country-wise-new-zealand-export-data', destination: '/country-wise-export-data/new-zealand' },
// { source: '/country-wise-new-zealand-import-export-data', destination: '/country-wise/new-zealand' },

// //Papua-New-Guinea
// { source: '/country-wise-papua-new-guinea-import-data', destination: '/country-wise-import-data/papua-new-guinea' },
// { source: '/country-wise-papua-new-guinea-export-data', destination: '/country-wise-export-data/papua-new-guinea' },
// { source: '/country-wise-papua-new-guinea-import-export-data', destination: '/country-wise/papua-new-guinea' },

// // Philippines
// { source: '/country-wise-philippines-import-data', destination: '/country-wise-import-data/philippines' },
// { source: '/country-wise-philippines-export-data', destination: '/country-wise-export-data/philippines' },
// { source: '/country-wise-philippines-import-export-data', destination: '/country-wise/philippines' },

// // Liberia
// { source: '/liberia-import-data', destination: '/country-wise-import-data/liberia' },
// { source: '/liberia-export-data', destination: '/country-wise-export-data/liberia' },
// { source: '/liberia-import-export-data', destination: '/country-wise/liberia' },

// // Libya
// { source: '/country-wise-libya-import-data', destination: '/country-wise-import-data/libya' },
// { source: '/country-wise-libya-export-data', destination: '/country-wise-export-data/libya' },
// { source: '/country-wise-libya-import-export-data', destination: '/country-wise/libya' },

// // Malawi
// { source: '/malawi-import-data', destination: '/country-wise-import-data/malawi' },
// { source: '/malawi-export-data', destination: '/country-wise-export-data/malawi' },
// { source: '/malawi-import-export-data', destination: '/country-wise/malawi' },

// // Namibia
// { source: '/namibia-import-data', destination: '/country-wise-import-data/namibia' },
// { source: '/namibia-export-data', destination: '/country-wise-export-data/namibia' },
// { source: '/namibia-import-export-data', destination: '/country-wise/namibia' },

// // Nigeria
// { source: '/nigeria-import-data', destination: '/country-wise-import-data/nigeria' },
// { source: '/nigeria-export-data', destination: '/country-wise-export-data/nigeria' },
// { source: '/nigeria-import-export-data', destination: '/country-wise/nigeria' },

// // Tanzania
// { source: '/tanzania-import-data', destination: '/country-wise-import-data/tanzania' },
// { source: '/tanzania-export-data', destination: '/country-wise-export-data/tanzania' },
// { source: '/tanzania-import-export-data', destination: '/country-wise/tanzania' },

// // Uganda
// { source: '/uganda-import-data', destination: '/country-wise-import-data/uganda' },
// { source: '/uganda-export-data', destination: '/country-wise-export-data/uganda' },
// { source: '/uganda-import-export-data', destination: '/country-wise/uganda'},
// // Zambia
// { source: '/zambia-import-data', destination: '/country-wise-import-data/zambia' },
// { source: '/zambia-export-data', destination: '/country-wise-export-data/zambia' },
// { source: '/zambia-import-export-data', destination: '/country-wise/zambia'},
// // Zimbabwe
// { source: '/zimbabwe-import-data', destination: '/country-wise-import-data/zimbabwe' },
// { source: '/zimbabwe-export-data', destination: '/country-wise-export-data/zimbabwe' },
// { source: '/zimbabwe-import-export-data', destination: '/country-wise/zimbabwe' },

// // Panama
// { source: '/panama-import-data', destination: '/country-wise-import-data/panama' },
// { source: '/panama-export-data', destination: '/country-wise-export-data/panama' },
// { source: '/panama-import-export-data', destination: '/country-wise/panama' },

// // Argentina
// { source: '/country-wise-argentina-import-data', destination: '/country-wise-import-data/argentina' },
// { source: '/country-wise-argentina-export-data', destination: '/country-wise-export-data/argentina' },
// { source: '/country-wise-argentina-import-export-data', destination: '/country-wise/argentina' },

// // Brazil
// { source: '/country-wise-brazil-import-data', destination: '/country-wise-import-data/brazil' },
// { source: '/country-wise-brazil-export-data', destination: '/country-wise-export-data/brazil' },
// { source: '/country-wise-brazil-import-export-data', destination: '/country-wise/brazil' },


// // Egypt
// { source: '/egypt-import-data', destination: '/country-wise-import-data/egypt' },
// { source: '/egypt-export-data', destination: '/country-wise-export-data/egypt' },
// { source: '/egypt-import-export-data', destination: '/country-wise/egypt' },

// // Ethiopia
// { source: '/ethiopia-import-data', destination: '/country-wise-import-data/ethiopia' },
// { source: '/ethiopia-export-data', destination: '/country-wise-export-data/ethiopia' },
// { source: '/ethiopia-import-export-data', destination: '/country-wise-/ethiopia' },

// // Ghana
// { source: '/ghana-import-data', destination: '/country-wise-import-data/ghana' },
// { source: '/ghana-export-data', destination: '/country-wise-export-data/ghana' },
// { source: '/ghana-import-export-data', destination: '/country-wise-/ghana' },

// // Kenya
// { source: '/kenya-import-data', destination: '/country-wise-import-data/kenya' },
// { source: '/kenya-export-data', destination: '/country-wise-export-data/kenya' },
// { source: '/kenya-import-export-data', destination: '/country-wise/kenya' },

// // Lesotho
// { source: '/lesotho-import-data', destination: '/country-wise-import-data/lesotho' },
// { source: '/lesotho-export-data', destination: '/country-wise-export-data/lesotho' },
// { source: '/lesotho-import-export-data', destination: '/country-wise/lesotho' },


// // Lesotho
// { source: '/country-wise-turkey-import-data', destination: '/country-wise-import-data/turkey' },
// { source: '/country-wise-turkey-export-data', destination: '/country-wise-export-data/turkey' },
// { source: '/country-wise-turkey-import-export-data', destination: '/country-wise/turkey' },

// // Sierra Leone → sierraleone
// { source: '/sierra-leone-import-data', destination: '/country-wise-import-data/sierra-leone' },
// { source: '/sierra-leone-export-data', destination: '/country-wise-export-data/sierra-leone' },
// { source: '/sierra-leone-import-export-data', destination: '/country-wise/sierra-leone' },

      
//     ];
//   },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/:country/:port*',
  //       destination: '/global-ports/:country/:port*',
  //     },
  //   ];
  // },
};

export default nextConfig;

