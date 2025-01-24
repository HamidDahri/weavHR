import { faXmark } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Modal = ({ isOpen, onClose, children, size = "medium" }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    small: "w-64",
    medium: "w-96",
    large: "w-[36rem]",
    extraLarge: "w-[48rem]",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`bg-white rounded-lg shadow-lg p-6 relative ${sizeClasses[size]}`}
      >
        <button
          onClick={onClose}
          className="absolute w-8 h-8 text-gray-500 rounded-md top-5 right-5 hover:bg-gray-100 hover:text-gray-800 focus:outline-none"
        >
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
