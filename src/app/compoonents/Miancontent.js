// // MainContent.js

// import React from 'react';
// import Sidebar from './Sidebar';
// import "./maincontent.css";

// const MainContent = () => {
//   return (
//     <div className='maincontentsid'>
//       <div style={{ display: 'flex', height: '80vh' }}>
//         <Sidebar />
//         <div style={{ flex: '1', marginLeft: '20px' }}>
//           {/* Content of your main area */}
//           {/* You can put any content here */}
//           <div className='maincoun'>
//             <div className='maincontouter'>
//               <div id="innerContainer_LoggedInDiv2" className="styles_login__QaueI styles_firstLogin__5vd19 customaincon">
//                 <div>
//                   <span className="styles_fauxLabel__fMl5r">Acting for:</span>
//                   <span id="innerContainer_CurrentEmployer" className="styles_firstLoginFont__0x2of">Visa Verification Service</span>
//                 </div>
//               </div>
//               <div className="styles_login__QaueI customaincon">
//                 <div>
//                   <span id="innerContainer_loginLabel" className="styles_fauxLabel__fMl5r">Logged in as:</span>
//                   <span id="innerContainer_CurrentRepresentativeName">John</span>
//                   <a id="innerContainer_logoutLinkControl" href="https://www.immigration.govt.nz/about-us/our-online-systems/visaview">logout</a>
//                 </div>
//               </div>
//             </div>
//             <h2 style={{ paddingTop: '20px', fontSize: '20px', color: '#09c' }}>Visa Verification Enquiry</h2>
//             <div className='headbelcon'>
//               <p>Enter the details of the visa to be verified.</p>
//               <a href="#">Can't find your visa</a>
//             </div>
//             <p>Please enter these details exactly as they appear in the visa holder's current passport.</p>
//           </div>
//           <div className='mainform'>
//             <form>
//               <div className='formin'>
//                 <label>Family Name</label>
//                 <input type='text' name='familyname' required />
//               </div>
//               <div className='formin'>
//                 <label>Passport Nationality</label>
//                 <select className="" name="NationalityControl" id="NationalityControl" tabIndex="2" required>
//                   <option value=""></option>
//                   <option value="Afghanistan">Afghanistan</option>
//                   {/* Add more options for passport nationality */}
//                 </select>
//               </div>
//               <div className='formin'>
//                 <label>Passport Number</label>
//                 <input type='text' name='passportnumber' required />
//               </div>
//               <div className='formin'>
//                 <label>Date Of Birth</label>
//                 <input type='date' name='passportnumber' required />
//               </div>
//               <div className='formin'>
//                 <label>Gender</label>
//                 <select className="" name="NationalityControl" id="NationalityControl" tabIndex="2" required>
//                   <option value=""></option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   {/* Add more options for passport nationality */}
//                 </select>
//               </div>
//               <div className='formin'>
//                 <label>Visa Start Date</label>
//                 <input type='date' name='passportnumber' required />
//               </div>
//               <div className='formin'>
//                 <input id="chkVisaConsent" type="checkbox" tabIndex="8" name="chkVisaConsent" required />
//                 <label htmlFor="chkVisaConsent">The visa holder has consented to this check.</label>
//               </div>
//               <button type='submit'>Check Visa</button>
//             </form>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainContent;
// MainContent.js

// 'use client'

// import React from 'react';
// import axios from 'axios';
// import "./maincontent.css";
// import Sidebar from './Sidebar';
// import dynamic from 'next/dynamic';
// // Add the "use client" directive
// // @ts-ignore
// // export { default } from 'react/server';

// // Add the "use client" directive at the top of the file
// // @ts-ignore
// export const useClient = true;

// const MainContent = () => {
//   // Use React.useState instead of useState
//   const [formData, setFormData] = React.useState({
//     // Your form state
//   });

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent the default form submission behavior

//     try {
//       // Make a GET request to the API using Axios
//       const response = await axios.get(`https://visaviews-immigratons-gov-nz.vercel.app/api/users/${formData.passportnumber}`);

//       // Log the response data to the console
//       console.log(response.data);
//     } catch (error) {
//       // Handle errors
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div className='maincontentsid'>
//       <div style={{ display: 'flex', height: '80vh' }}>
//         <Sidebar />
//         <div style={{ flex: '1', marginLeft: '20px' }}>
//           {/* Content of your main area */}
//           {/* You can put any content here */}
//           <div className='maincoun'>
//             <div className='maincontouter'>
//               <div id="innerContainer_LoggedInDiv2" className="styles_login__QaueI styles_firstLogin__5vd19 customaincon">
//                 <div>
//                   <span className="styles_fauxLabel__fMl5r">Acting for:</span>
//                   <span id="innerContainer_CurrentEmployer" className="styles_firstLoginFont__0x2of">Visa Verification Service</span>
//                 </div>
//               </div>
//               <div className="styles_login__QaueI customaincon">
//                 <div>
//                   <span id="innerContainer_loginLabel" className="styles_fauxLabel__fMl5r">Logged in as:</span>
//                   <span id="innerContainer_CurrentRepresentativeName">John</span>
//                   <a id="innerContainer_logoutLinkControl" href="https://www.immigration.govt.nz/about-us/our-online-systems/visaview">logout</a>
//                 </div>
//               </div>
//             </div>
//             <h2 style={{ paddingTop: '20px', fontSize: '20px', color: '#09c' }}>Visa Verification Enquiry</h2>
//             <div className='headbelcon'>
//               <p>Enter the details of the visa to be verified.</p>
//               <a href="#">Can't find your visa</a>
//             </div>
//             <p>Please enter these details exactly as they appear in the visa holder's current passport.</p>
//           </div>
//           <div className='mainform'>
//             <form onSubmit={handleSubmit}>
//               <div className='formin'>
//                 <label>Family Name</label>
//                 <input type='text' name='familyname' required />
//               </div>
//               <div className='formin'>
//                 <label>Passport Nationality</label>
//                 <select className="" name="NationalityControl" id="NationalityControl" tabIndex="2" required>
//                   <option value=""></option>
//                   <option value="Afghanistan">Afghanistan</option>
//                   <option value="india">India</option>
//                   {/* Add more options for passport nationality */}
//                 </select>
//               </div>
//               <div className='formin'>
//                 <label>Passport Number</label>
//                 <input type='text' name='passportnumber' required onChange={(e) => setFormData({ ...formData, passportnumber: e.target.value })} />
//               </div>
//               <div className='formin'>
//                 <label>Date Of Birth</label>
//                 <input type='date' name='passportnumber' required />
//               </div>
//               <div className='formin'>
//                 <label>Gender</label>
//                 <select className="" name="NationalityControl" id="NationalityControl" tabIndex="2" required>
//                   <option value=""></option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   {/* Add more options for passport nationality */}
//                 </select>
//               </div>
//               <div className='formin'>
//                 <label>Visa Start Date</label>
//                 <input type='date' name='passportnumber' required />
//               </div>
//               <div className='formin'>
//                 <input id="chkVisaConsent" type="checkbox" tabIndex="8" name="chkVisaConsent" required />
//                 <label htmlFor="chkVisaConsent">The visa holder has consented to this check.</label>
//               </div>
//               <button type='submit'>Check Visa</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainContent;



'use client'

import React, { useState } from 'react';
import "./maincontent.css";
import Sidebar from './Sidebar';
import dynamic from 'next/dynamic';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Add the "use client" directive at the top of the file
// @ts-ignore
export const useClient = true;

const MainContent = () => {
  // Use React.useState instead of useState
  const [formData, setFormData] = React.useState({
    // Your form state
  });
  const [userData, setUserData] = React.useState(null);
  const [userNotFound, setUserNotFound] = React.useState(false);

  const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
}).replace(/(\d+)\/(\d+)\/(\d+)/, '$2/$1/$3');
console.log(formattedDate); // Output: 19/03/2024

  // Define your user data
  const userDatabase = [
    { passportnumber: 'AV5548101', familyfirstname: 'MUHAMMAD, SUFYAN', FIRSTENTERYBEFOR: "17/06/2024",INZCLIENTNUMBER: "84567704", VISATYPE: "WORK",VISAEXPIRY:"16/03/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '01/05/1994', gender: 'Male', visaStartDate: '18/03/2024', applicationnumber: 'E6577901' },
    { passportnumber: 'AK1575613', familyfirstname: 'Muhammad, Aftab', FIRSTENTERYBEFOR: "29/06/2024",INZCLIENTNUMBER: "84579001", VISATYPE: "WORK",VISAEXPIRY:"28/03/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '05/02/1982', gender: 'Male', visaStartDate: '30/03/2024', applicationnumber: 'E6578002' },
{ passportnumber: 'DT1859203', familyfirstname: 'Muhammad, Azam', FIRSTENTERYBEFOR: "04/07/2024",INZCLIENTNUMBER: "86559905", VISATYPE: "WORK",VISAEXPIRY:"04/04/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '30/07/1991', gender: 'Male', visaStartDate: '05/04/2024', applicationnumber: 'E6670119' },
              { passportnumber: 'VU1811692', familyfirstname: 'Wazir, Ali', FIRSTENTERYBEFOR: "04/07/2024",INZCLIENTNUMBER: "86589918", VISATYPE: "WORK",VISAEXPIRY:"04/04/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '01/03/1990', gender: 'Male', visaStartDate: '05/04/2024', applicationnumber: 'E6672211' },
              { passportnumber: 'AP5336742', familyfirstname: 'Muhammad, Saqib', FIRSTENTERYBEFOR: "04/07/2024",INZCLIENTNUMBER: "86591300", VISATYPE: "WORK",VISAEXPIRY:"04/04/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '22/01/1998', gender: 'Male', visaStartDate: '05/04/2024', applicationnumber: 'E6671100' },
              { passportnumber: 'EG9456872', familyfirstname: 'Muhammad, Nadeem', FIRSTENTERYBEFOR: "04/07/2024",INZCLIENTNUMBER: "86602001", VISATYPE: "WORK",VISAEXPIRY:"04/04/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '04/07/1999', gender: 'Male', visaStartDate: '05/04/2024', applicationnumber: 'E6672005' },
              { passportnumber: 'TZ5141542', familyfirstname: 'ATIF, SHAHZAD', FIRSTENTERYBEFOR: "16/07/2024",INZCLIENTNUMBER: "87690052", VISATYPE: "WORK",VISAEXPIRY:"16/04/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '08/08/1991', gender: 'Male', visaStartDate: '17/04/2024', applicationnumber: 'E6691005' },
              { passportnumber: 'HK4106543', familyfirstname: 'Ejaz Ahmed, Khan', FIRSTENTERYBEFOR: "07/08/2024",INZCLIENTNUMBER: "8943301", VISATYPE: "WORK",VISAEXPIRY:" 07/05/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '15/06/1976', gender: 'Male', visaStartDate: '08/05/2024', applicationnumber: 'E6880054' },
              { passportnumber: 'AC8965295', familyfirstname: 'Muhammad, Farooq', FIRSTENTERYBEFOR: "06/08/2024",INZCLIENTNUMBER: "84596001", VISATYPE: "WORK",VISAEXPIRY:"06/05/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '16/09/1983', gender: 'Male', visaStartDate: '07/05/2024', applicationnumber: 'E6877080' },
              { passportnumber: 'QB6804541', familyfirstname: 'Usman, Hassan', FIRSTENTERYBEFOR: "02/08/2024",INZCLIENTNUMBER: "84590045", VISATYPE: "WORK",VISAEXPIRY:"02/05/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '01/02/1999', gender: 'Male', visaStartDate: '03/05/2024', applicationnumber: 'E6897661' },
              { passportnumber: 'AN9152444', familyfirstname: 'Abdul Rehman, Chaudhary', FIRSTENTERYBEFOR: "10/10/2024",INZCLIENTNUMBER: "785443007", VISATYPE: "WORK",VISAEXPIRY:"07/06/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '05/07//1990', gender: 'Male', visaStartDate: '08/06/2024', applicationnumber: 'E8698002' },
              { passportnumber: 'Bd4423224', familyfirstname: 'Muhammad, QADEER', FIRSTENTERYBEFOR: "10/10/2024",INZCLIENTNUMBER: "384565015", VISATYPE: "WORK",VISAEXPIRY:"07/06/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '15/02/1988', gender: 'Male', visaStartDate: '08/06/2024', applicationnumber: 'E9724643' },
               { passportnumber: 'BC0901642', familyfirstname: 'Muhammad Hassan, Moin', FIRSTENTERYBEFOR: "24/09/2024",INZCLIENTNUMBER: "89446892", VISATYPE: "WORK",VISAEXPIRY:"23/06/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '01/03/1997', gender: 'Male', visaStartDate: '24/06/2024', applicationnumber: 'E6896807' },
               { passportnumber: 'CC0946052', familyfirstname: 'Saad Hamid, Mughal', FIRSTENTERYBEFOR: "24/09/2024",INZCLIENTNUMBER: "89446896", VISATYPE: "WORK",VISAEXPIRY:"23/06/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '20/10/1997', gender: 'Male', visaStartDate: '24/06/2024', applicationnumber: 'E6896990' },
               { passportnumber: 'MG1178511', familyfirstname: 'Zeeshan, Ahmad', FIRSTENTERYBEFOR: "09/10/2024",INZCLIENTNUMBER: "84589001", VISATYPE: "WORK",VISAEXPIRY:"08/07/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '15/09/1997', gender: 'Male', visaStartDate: '09/07/2024', applicationnumber: 'E6896113' },
               { passportnumber: 'GW9614222', familyfirstname: 'Bismal, Nawaz', FIRSTENTERYBEFOR: "09/10/2024",INZCLIENTNUMBER: "84589075", VISATYPE: "WORK",VISAEXPIRY:"17/07/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '22/01/1998', gender: 'Male', visaStartDate: '17/07/2024', applicationnumber: 'E6895076' },
              { passportnumber: 'ST9890901', familyfirstname: 'Raza, Aamir', FIRSTENTERYBEFOR: "30/09/2024",INZCLIENTNUMBER: "89465690", VISATYPE: "WORK",VISAEXPIRY:"15/01/2025", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '11/02/1998', gender: 'Male', visaStartDate: '06/08/2024', applicationnumber: 'E6896870' },
            { passportnumber: 'PX1160602', familyfirstname: 'Ahmad, Farooq', FIRSTENTERYBEFOR: "10/10/2024",INZCLIENTNUMBER: "89465486", VISATYPE: "WORK",VISAEXPIRY:"25/07/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '05/06/1991', gender: 'Male', visaStartDate: '12/08/2024', applicationnumber: 'E6895436' },
              { passportnumber: 'DU0845793', familyfirstname: 'Masih, Saleem', FIRSTENTERYBEFOR: "10/10/2024",INZCLIENTNUMBER: "89466785", VISATYPE: "WORK",VISAEXPIRY:"25/07/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '21/07/2001', gender: 'Male', visaStartDate: '12/08/2024', applicationnumber: 'E6894397' },
              { passportnumber: 'UX1817892', familyfirstname: 'Ali, Nadir', FIRSTENTERYBEFOR: "15/09/2024",INZCLIENTNUMBER: "89452754", VISATYPE: "WORK",VISAEXPIRY:"25/07/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '16/05/1998', gender: 'Male', visaStartDate: '23/07/2024', applicationnumber: 'E6896247' },
              { passportnumber: 'FH4793113', familyfirstname: 'Gill, Maxwell Rehan', FIRSTENTERYBEFOR: "26/09/2024",INZCLIENTNUMBER: "84544007", VISATYPE: "WORK",VISAEXPIRY:"25/07/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '31/08/1992', gender: 'Male', visaStartDate: '24/09/2024', applicationnumber: 'E6898005' },
              { passportnumber: 'SW1836731', familyfirstname: 'Ali, Raja Saqlain', FIRSTENTERYBEFOR: "21/03/2025",INZCLIENTNUMBER: "84598675", VISATYPE: "WORK",VISAEXPIRY:"25/07/2026", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '15/10/2005', gender: 'Male', visaStartDate: '09/10/2024', applicationnumber: 'E6898597' },
              { passportnumber: 'DP5997422', familyfirstname: 'Sarwar, Yasin', FIRSTENTERYBEFOR: "16/04/2025",INZCLIENTNUMBER: "84515468", VISATYPE: "WORK",VISAEXPIRY:"15/01/2027", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '25/05/1999', gender: 'Male', visaStartDate: '16/01/2025', applicationnumber: 'E6890867' },
              { passportnumber: 'PA1075532', familyfirstname: 'Abdullah, Malik', FIRSTENTERYBEFOR: "29/03/2025",INZCLIENTNUMBER: "84786795", VISATYPE: "WORK",VISAEXPIRY:"29/01/2027", NOOFENTRIES: "Multiple Entries",  Visaenquirydate: new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }), nationality: 'Pakistan', dateOfBirth: '05/03/1998', gender: 'Male', visaStartDate: '30/01/2025', applicationnumber: 'E6857870' },
    // Add more user data as needed
  ];

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Find user data by passport number
    const foundUser = userDatabase.find(user => user.passportnumber === formData.passportnumber);

    if (foundUser) {
      setUserData(foundUser); // Set user data if found
      setUserNotFound(false); // Reset user not found status
    } else {
      // Set user not found status
      setUserNotFound(true);
    }
  };
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [visaStartDate, setVisaStartDate] = useState(null);

  const handleDateOfBirthChange = date => {
    setDateOfBirth(date);
  };

  const handleVisaStartDateChange = date => {
    setVisaStartDate(date);
  };
  return (
    <div className='maincontentsid'>
      <div style={{ display: 'flex', height: 'max-content' }}>
        <Sidebar />
        <div style={{ flex: '1', marginLeft: '20px' }}>
          {/* Content of your main area */}
          {/* You can put any content here */}
          <div className='maincoun'>
            
            <div className='maincontouter'>
              <div id="innerContainer_LoggedInDiv2" className="styles_login__QaueI styles_firstLogin__5vd19 customaincon">
                <div>
                  <span className="styles_fauxLabel__fMl5r">Acting for:</span>
                  <span id="innerContainer_CurrentEmployer" className="styles_firstLoginFont__0x2of">Visa Verification Service</span>
                </div>
              </div>
              <div className="styles_login__QaueI customaincon">
                <div>
                  <span id="innerContainer_loginLabel" className="styles_fauxLabel__fMl5r">Logged in as:</span>
                  <span id="innerContainer_CurrentRepresentativeName">John</span>
                  <a id="innerContainer_logoutLinkControl" href="https://www.immigration.govt.nz/about-us/our-online-systems/visaview">logout</a>
                </div>
              </div>
            </div>
            <h2 style={{ paddingTop: '20px', fontSize: '20px', color: '#09c' }}>Visa Verification Enquiry</h2>
            <div className='headbelcon'>
              <p>Enter the details of the visa to be verified.</p>
              <a href="#">Can't find your visa</a>
            </div>
            <p>Please enter these details exactly as they appear in the visa holder's current passport.</p>
          </div>
          {userData ? (
              <div className='userdata'>
                {/* Render user data */}
                <h3 style={{paddingTop:'20px'}}>Result</h3>
                <p>The visa has been verified successfully using the details you provided. See below for the full conditions of the visa. <br></br><br></br>Visa Verification Service checks are valid for the date stated on the enquiry result. Visa information may change.<br></br><br></br>All dates given are in New Zealand time. Where a person is not yet in New Zealand, any visa they hold may be subject to the grant of entry permission.</p>
                <h2 style={{paddingTop:'20px'}}>Visa Details</h2>
                <div className='userdatamain' style={{display:'flex', gap:'20px'}}>
                <div className='userdatain'>
                <p><strong>Family, First Name</strong> {userData.familyfirstname}</p>
                <p><strong>Date of Birth</strong> {userData.dateOfBirth}</p>
                <p><strong>Gender</strong> {userData.gender}</p>
                <p><strong>Passport Nationality</strong> {userData.nationality}</p>
                <p><strong>Passport Number</strong> {userData.passportnumber}</p>
                <p><strong>INZ CLIENT NUMBER</strong> {userData.INZCLIENTNUMBER}</p>
                </div>
                <div className='userdatain'>
                <p><strong>Visa Type</strong> {userData.VISATYPE}</p>
                {/* <p>Passport Number: {userData.VISATYPE}</p> */}
                <p><strong>Visa Start Date</strong> {userData.visaStartDate}</p>
                <p><strong>First Entry Before</strong> {userData.FIRSTENTERYBEFOR}</p>
                <p><strong>No Of Entries</strong> {userData.NOOFENTRIES}</p>
                <p><strong>Expiry Date Travel</strong> {userData.VISAEXPIRY}</p>
                <p><strong>Visa Expiry</strong> {userData.VISAEXPIRY}</p>
                {/* <p><strong>Visa Conditions</strong> </p> */}
                {/* <p><strong>Visa Start Date:</strong> {userData.visaStartDate}</p> */}
                </div>
                </div>
                <div className='visacon'>
                <p style={{paddingTop:'5px',color:'#09c'}}>Financial support evidence not required..May not be placed in a triangular employment arrangement with a controlling third party..Must be paid at or above $ 29.66 per hour..Must provide evidence of remuneration if requested..Return/onward ticket not required..Stay subject to grant of entry permission..The holder may only work as Retail Assistant in Auckland for EXPRESS MART LIMITED..The holder of this visa must comply with any instruction from a Medical Officer of Health which relates to a notifiable or quarantinable disease..The holder of this visa must comply with any order made under section 11 of the COVID-19 Public Health Response Act 2020..The holder of this visa must comply with any order made under section 70 of the Health Act 1956 and listed in schedule 2 of the COVID-19 Public He..</p>
<p style={{marginTop:"20px", marginBottom:"10px"}}>Enquiry Date <strong style={{color:"#09c", marginLeft:"30px"}}>{formattedDate}</strong></p>
<p style={{marginBottom:"30px"}}>Valid as <strong style={{color:"#09c", marginLeft:"57px"}}>{formattedDate}</strong></p>
<p style={{marginBottom:'20px'}}>Warning: if you download this visa information, you must ensure that you treat the personal information it contains in accordance with the Privacy Act 2020, including with respect to storage, access, disclosure to third parties, retention and disposal.</p></div>
<button className='downbtn'> Download Result</button>
              </div>
            ) : (
          <div className='mainform'>
            {userNotFound && (
              <div className="user-not-found-message">
                The details you have entered do not match a current visa issued by INZ. Please check the information provided.
              </div>
            )}
            <form onSubmit={handleSubmit}>
  <div className='formin'>
    <label>Family Name <span style={{ color: 'red' }}>*</span></label>
    <input type='text' name='familyname' required />
  </div>
  <div className='formin passhun'>
    <label>Passport Nationality <span style={{ color: 'red' }}>*</span></label>
    <select className="" name="NationalityControl" id="NationalityControl" tabIndex="2" required>
      <option value=""></option>
      <option value="Afghanistan">Afghanistan</option>
      <option value="india">India</option>
      <option value="Australia">Australia</option>
      <option value="Germany">Germany</option>
      <option value="Japan">Japan</option>
      <option value="unitedstates">United States</option>
      <option value="pakistan">Pakistan</option>
      {/* Add more options for passport nationality */}
    </select>
  </div>
  <div className='formin passtwo'>
    <label>Passport Number <span style={{ color: 'red' }}>*</span></label>
    <input type='text' name='passportnumber' required onChange={(e) => setFormData({ ...formData, passportnumber: e.target.value })} />
  </div>
  <div className='formin passtwo pasmar'>
  <label>Date Of Birth<br />dd/mm/yyyy <span style={{ color: 'red' }}>*</span></label>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <DatePicker
            selected={dateOfBirth}
            onChange={handleDateOfBirthChange}
            dateFormat="dd/MM/yyyy"
            placeholderText=""
            showYearDropdown
            scrollableYearDropdown
          />
        </div>
        <img
          src="https://visaviews-immigratons-gov-nz.vercel.app/_next/image?url=%2Fimages%2Ficon-calendar.gif&w=16&q=75"
          alt="Calendar"
          style={{
            position: 'relative',
            left: '5px',
            width: '15px',
            top: '5px',
            height: '15px',
            cursor: 'pointer'
          }}
          onClick={() => document.querySelector('.react-datepicker-wrapper input').click()}
        />

  </div>
  <div className='formin passtwo'>
    <label>Gender <span style={{ color: 'red' }}>*</span></label>
    <select className="" name="NationalityControl" id="NationalityControl" tabIndex="2" required>
      <option value=""></option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      {/* Add more options for passport nationality */}
    </select>
  </div>
  <div className='formin passtwo pasmar'>
  <label>Visa Start Date<br />dd/mm/yyyy <span style={{ color: 'red' }}>*</span></label>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <DatePicker
            selected={visaStartDate}
            onChange={handleVisaStartDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText=""
            showYearDropdown
            scrollableYearDropdown
          />
        </div>
        <img
          src="https://visaviews-immigratons-gov-nz.vercel.app/_next/image?url=%2Fimages%2Ficon-calendar.gif&w=16&q=75"
          alt="Calendar"
          style={{
            position: 'relative',
            left: '5px',
            top: '5px',
            width: '15px',
            height: '15px',
            cursor: 'pointer'
          }}
          onClick={() => document.querySelector('.react-datepicker-wrapper input').click()}
        />
  </div>
  <div className='formin'>
    <input id="chkVisaConsent" type="checkbox" tabIndex="8" name="chkVisaConsent" required />
    <label className='visaholder' htmlFor="chkVisaConsent" style={{lineHeight:"inherit", marginBottom:"25px"}}>The visa holder has consented to this check.</label>
  </div>
  <button type='submit'>Check Visa</button>
</form>

            
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
