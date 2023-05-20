import React from "react";

const SignupSuccessMessage = () => {
  return (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Signup successful!</strong>
      <span className="block sm:inline">
        You can now log in to your account.
      </span>
    </div>
  );
};

export default SignupSuccessMessage;