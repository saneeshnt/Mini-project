import React, { useState } from 'react';
import '../../../User/Headers/Header3/Header.css'
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        Dropdown Button
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <a href="#">Option 1</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
