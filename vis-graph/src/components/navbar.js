import React, { useState, useEffect } from 'react';
import '../style/navbar.css';
import logo2 from '../assets/header5.png';

const Navbar = ({
  onUploadClick,
  onResetClick,
  showTableView,
  toggleTableView,
  showAbout,
  toggleAbout,
  fileUploaded,
  setFilteredData
}) => {
  const [groupNames, setGroupNames] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (fileUploaded) {
      fetch("https://spiderweb-j1ca.onrender.com/group_names")
        .then(res => res.json())
        .then(data => {
          setGroupNames(data.groupNames);
        })
        .catch(error => console.error('Error fetching group names:', error));
    } else {
      setGroupNames([]);
    }
  }, [fileUploaded]);

  const handleFilterClick = (groupName, filter) => {
    fetch("https://spiderweb-j1ca.onrender.com/filtered_data", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ groupName, filter })
    })
      .then(res => res.json())
      .then(data => {
        setFilteredData(data);
      })
      .catch(error => console.error('Error fetching filtered data:', error));
  };

  const handleResetClick = () => {
    setFilteredData(null);
  };

  const handleGroupClick = (groupName) => {
    setSelectedGroup(groupName);
    fetch("https://spiderweb-j1ca.onrender.com/filters", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ groupName })
    })
      .then(res => res.json())
      .then(data => {
        setFilters(data.filters);
      })
      .catch(error => console.error('Error fetching filters:', error));
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="title-logo">
        {/* <img className="header-logo" src={logo2} alt="Logo" /> */}
        <div className="navbar-title">Ancient Egyptian Divine Mapping</div>
      </div>

      <div className="navbar-buttons">
        <button className="navbar-button" onClick={toggleTableView}>
          {showTableView ? 'Hide Table View' : 'Show Table View'}
        </button>
        <button className="navbar-button" onClick={toggleAbout}>
          {showAbout ? 'Hide About' : 'Show About'}
        </button>
      </div>

      {/* Menu Icon for Small Screens */}
      <div className="navbar-menu-icon" onClick={toggleDropdown}>
        ☰
      </div>

      {/* Dropdown for Small Screens */}
      <div className={`navbar-dropdown ${dropdownOpen ? 'show' : ''}`}>
        <div className="navbar-button dropdown">
          Filter
          <div className="dropdown-content">
            {fileUploaded ? (
              groupNames.length > 0 ? (
                groupNames.map((columnName, index) => (
                  <div key={index} className="dropdown-item">
                    <a className="groups" href="#" onClick={() => handleGroupClick(columnName)}>
                      {columnName}
                    </a>
                    {selectedGroup === columnName && (
                      <div className="dropdown-submenu">
                        {filters.length > 0 ? (
                          filters.map((filter, index) => (
                            <a href="#" key={index} onClick={() => handleFilterClick(columnName, filter)}>
                              {filter}
                            </a>
                          ))
                        ) : (
                          <a href="#">Filter not Found</a>
                        )}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <a href="#">Filter not Found</a>
              )
            ) : (
              <a href="#">No file uploaded</a>
            )}
          </div>
        </div>
        <a href="#" onClick={onResetClick}>Reset</a>
        <a href="#" onClick={toggleTableView}>
          {showTableView ? 'Hide Table View' : 'Show Table View'}
        </a>
        <a href="#" onClick={toggleAbout}>
          {showAbout ? 'Hide About' : 'Show About'}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import '../style/navbar.css';
// import logo2 from '../assets/header5.png';

// const Navbar = ({ onUploadClick, onResetClick, showTableView, toggleTableView, fileUploaded, setFilteredData }) => {
//   const [groupNames, setGroupNames] = useState([]);
//   const [filters, setFilters] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState('');
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     if (fileUploaded) {
//       fetch("https://spiderweb-j1ca.onrender.com/group_names")
//         .then(res => res.json())
//         .then(data => {
//           setGroupNames(data.groupNames);
//         })
//         .catch(error => console.error('Error fetching group names:', error));
//     } else {
//       setGroupNames([]);
//     }
//   }, [fileUploaded]);

//   const handleFilterClick = (groupName, filter) => {
//     fetch("https://spiderweb-j1ca.onrender.com/filtered_data", {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ groupName, filter })
//     })
//       .then(res => res.json())
//       .then(data => {
//         setFilteredData(data);
//       })
//       .catch(error => console.error('Error fetching filtered data:', error));
//   };

//   const handleResetClick = () => {
//     setFilteredData(null);
//   };

//   const handleGroupClick = (groupName) => {
//     setSelectedGroup(groupName);
//     fetch("https://spiderweb-j1ca.onrender.com/filters", {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ groupName })
//     })
//       .then(res => res.json())
//       .then(data => {
//         setFilters(data.filters);
//       })
//       .catch(error => console.error('Error fetching filters:', error));
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="title-logo">
//         {/* <img className="header-logo" src={logo2} alt="Logo" /> */}
//         <div className="navbar-title">Ancient Egyptian Divine Mapping</div>
//       </div>

//       <div className="navbar-buttons">
//         {/* <div className="navbar-button dropdown">
//           Filter
//           <div className="dropdown-content">
//             {fileUploaded ? (
//               groupNames.length > 0 ? (
//                 groupNames.map((columnName, index) => (
//                   <div key={index} className="dropdown-item">
//                     <a className="groups" href="#" onClick={() => handleGroupClick(columnName)}>
//                       {columnName}
//                     </a>
//                     {selectedGroup === columnName && (
//                       <div className="dropdown-submenu">
//                         {filters.length > 0 ? (
//                           filters.map((filter, index) => (
//                             <a href="#" key={index} onClick={() => handleFilterClick(columnName, filter)}>
//                               {filter}
//                             </a>
//                           ))
//                         ) : (
//                           <a href="#">Filter not Found</a>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 ))
//               ) : (
//                 <a href="#">Filter not Found</a>
//               )
//             ) : (
//               <a href="#">No file uploaded</a>
//             )}
//           </div>
//         </div> */}
//         {/* <button className="navbar-button" onClick={handleResetClick}>Reset</button> */}
//         <button className="navbar-button" onClick={toggleTableView}>
//           {showTableView ? 'Hide Table View' : 'Show Table View'}
//         </button>
//       </div>

//       {/* Menu Icon for Small Screens */}
//       <div className="navbar-menu-icon" onClick={toggleDropdown}>
//         ☰
//       </div>

//       {/* Dropdown for Small Screens */}
//       <div className={`navbar-dropdown ${dropdownOpen ? 'show' : ''}`}>
//         <div className="navbar-button dropdown">
//           Filter
//           <div className="dropdown-content">
//             {fileUploaded ? (
//               groupNames.length > 0 ? (
//                 groupNames.map((columnName, index) => (
//                   <div key={index} className="dropdown-item">
//                     <a className="groups" href="#" onClick={() => handleGroupClick(columnName)}>
//                       {columnName}
//                     </a>
//                     {selectedGroup === columnName && (
//                       <div className="dropdown-submenu">
//                         {filters.length > 0 ? (
//                           filters.map((filter, index) => (
//                             <a href="#" key={index} onClick={() => handleFilterClick(columnName, filter)}>
//                               {filter}
//                             </a>
//                           ))
//                         ) : (
//                           <a href="#">Filter not Found</a>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 ))
//               ) : (
//                 <a href="#">Filter not Found</a>
//               )
//             ) : (
//               <a href="#">No file uploaded</a>
//             )}
//           </div>
//         </div>
//         <a href="#" onClick={handleResetClick}>Reset</a>
//         <a href="#" onClick={toggleTableView}>
//           {showTableView ? 'Hide Table View' : 'Show Table View'}
//         </a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
