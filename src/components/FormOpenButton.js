"use client"
import React, { useState } from 'react';
import DesignSessionForm from './DesignSessionForm'; // Import your form component

const FormOpenButton = ({ className,text }) => {
  // State to control whether the form is open or not
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true); // Open the form when button is clicked
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the form
  };

  return (
    <div  className='relative'>
      {/* Button to open the form, with dynamic className from props */}
      <button
        onClick={handleOpenForm}
        className={`${className} }`}
      >
        {text}
      </button>

      {/* Conditionally render the form */}
      {isFormOpen && 
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <DesignSessionForm setOpenForm={setIsFormOpen} />
      </div>
      }
    </div>
  );
};

export default FormOpenButton;
