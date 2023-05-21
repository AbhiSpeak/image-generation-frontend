import React from "react";

const Message = ({ variant, children }) => {
  let textColor;
  if (variant === "success") {
    textColor = "text-green-600";
  } else if (variant === "failure") {
    textColor = "text-red-600";
  } else {
    textColor = "text-gray-600";
  }

  return (
    <div
      className={`bg-white border-l-4 px-4 py-3 ${textColor} border-opacity-50 border-solid border rounded`}
    >
      {children}
    </div>
  );
};

export default Message;
