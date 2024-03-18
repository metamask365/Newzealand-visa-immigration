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

// Add the "use client" directive at the top of the file
// @ts-ignore
export const useClient = true;

const MainContent = () => {
  // Use React.useState instead of useState
  const [formData, setFormData] = React.useState({
    // Your form state
  });
  const [userData, setUserData] = React.useState(null);

  // Define your user data
  const userDatabase = [
    { passportnumber: '123456',INZCLIENTNUMBER: "80158551", VISATYPE: "WORK",NOOFENTRIES: "25",FIRSTENTERYBEFOR: "25/04/2023", VISAEXPIRY:"25/07/2024",  familyfirstname: 'John Doe', nationality: 'US', dateOfBirth: '1990-01-01', gender: 'male', visaStartDate: '2024-01-01' },
    { passportnumber: 'Z76651', familyfirstname: 'John Doe', FIRSTENTERYBEFOR: "25/04/2023",INZCLIENTNUMBER: "80158551", VISATYPE: "WORK",VISAEXPIRY:"25/07/2024", NOOFENTRIES: "25", nationality: 'US', dateOfBirth: '1990-01-01', gender: 'male', visaStartDate: '2024-01-01' }
    // Add more user data as needed
  ];

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Find user data by passport number
    const foundUser = userDatabase.find(user => user.passportnumber === formData.passportnumber);

    if (foundUser) {
      setUserData(foundUser); // Set user data if found
    } else {
      // Handle case where user is not found
      alert('User not found');
    }
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
                <h3>Result</h3>
                <p>The visa has been verified successfully using the details you provided. See below for the full conditions of the visa. <br></br><br></br>Visa Verification Service checks are valid for the date stated on the enquiry result. Visa information may change.<br></br><br></br>All dates given are in New Zealand time. Where a person is not yet in New Zealand, any visa they hold may be subject to the grant of entry permission.</p>
                <h2 style={{paddingTop:'20px'}}>Visa Details</h2>
                <div className='userdatamain' style={{display:'flex', gap:'20px'}}>
                <div className='userdatain'>
                <p>Name: {userData.familyfirstname}</p>
                <p>Passport Number: {userData.passportnumber}</p>
                <p>Nationality: {userData.nationality}</p>
                <p>Date of Birth: {userData.dateOfBirth}</p>
                <p>Gender: {userData.gender}</p>
                <p>INZ CLIENT NUMBER: {userData.INZCLIENTNUMBER}</p>
                </div>
                <div className='userdatain'>
                <p>Visa Type: {userData.VISATYPE}</p>
                {/* <p>Passport Number: {userData.VISATYPE}</p> */}
                <p>Visa Start Date: {userData.visaStartDate}</p>
                <p>First Entry Before: {userData.FIRSTENTERYBEFOR}</p>
                <p>No Of Entries: {userData.NOOFENTRIES}</p>
                <p>Visa Start Date: {userData.visaStartDate}</p>
                </div>
                </div>
                <p style={{paddingTop:'20px'}}>Financial support evidence not required..May not be placed in a triangular employment arrangement with a controlling third party..Must be paid at or above $ 29.66 per hour..Must provide evidence of remuneration if requested..Return/onward ticket not required..Stay subject to grant of entry permission..The holder may only work as Retail Assistant in Auckland for EXPRESS MART LIMITED..The holder of this visa must comply with any instruction from a Medical Officer of Health which relates to a notifiable or quarantinable disease..The holder of this visa must comply with any order made under section 11 of the COVID-19 Public Health Response Act 2020..The holder of this visa must comply with any order made under section 70 of the Health Act 1956 and listed in schedule 2 of the COVID-19 Public He..
<br></br>Enquiry Date18/03/2024
<br></br>Valid as at18/03/2024
<br></br><br></br>Warning: if you download this visa information, you must ensure that you treat the personal information it contains in accordance with the Privacy Act 2020, including with respect to storage, access, disclosure to third parties, retention and disposal.</p>
              </div>
            ) : (
          <div className='mainform'>
            <form onSubmit={handleSubmit}>
              <div className='formin'>
                <label>Family Name</label>
                <input type='text' name='familyname' required />
              </div>
              <div className='formin'>
                <label>Passport Nationality</label>
                <select className="" name="NationalityControl" id="NationalityControl" tabIndex="2" required>
                  <option value=""></option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="india">India</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="Japan">Japan</option>
                  <option value="unitedstates">United States</option>
                  {/* Add more options for passport nationality */}
                </select>
              </div>
              <div className='formin'>
                <label>Passport Number</label>
                <input type='text' name='passportnumber' required onChange={(e) => setFormData({ ...formData, passportnumber: e.target.value })} />
              </div>
              <div className='formin'>
                <label>Date Of Birth</label>
                <input type='date' name='passportnumber' required />
              </div>
              <div className='formin'>
                <label>Gender</label>
                <select className="" name="NationalityControl" id="NationalityControl" tabIndex="2" required>
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  {/* Add more options for passport nationality */}
                </select>
              </div>
              <div className='formin'>
                <label>Visa Start Date</label>
                <input type='date' name='passportnumber' required />
              </div>
              <div className='formin'>
                <input id="chkVisaConsent" type="checkbox" tabIndex="8" name="chkVisaConsent" required />
                <label htmlFor="chkVisaConsent">The visa holder has consented to this check.</label>
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
