// Sidebar.js

import React from 'react';
import "./maincontent.css"

const Sidebar = () => {
  return (
    <div style={{ width: '20%', backgroundColor: '#f0f0f0', position: 'relative', left: 0, top: 0, bottom: 0, overflowY: 'auto',padding: '15px' }}>
      {/* Sidebar content */}
      <h3 style={{fontSize: '13px', fontWeight:'600', color: '#09c', paddingBottom: '10px'}}>VisaView</h3>
      <ul>
        <li style={{fontSize: '12px', fontWeight:'500', paddingBottom: '5px'}}><a href=''>Register Organization</a></li>
        <li style={{fontSize: '12px', fontWeight:'500', paddingBottom: '5px'}}><a href='#'>Verify Visa Record</a></li>
        <li style={{fontSize: '12px', fontWeight:'500', paddingBottom: '5px'}}><a href='#'>My Visa Verification <br></br>Service Account</a></li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
