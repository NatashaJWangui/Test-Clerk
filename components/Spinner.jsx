import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>

    // <div className="flex justify-center items-center h-48">
    //   <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"></div>
    // </div>

    // <div className="loader"> {/* Add your styling here */}
    //   {/* You can use CSS to create a spinner */}
    //   <style jsx>{`
    //     .loader {
    //       border: 8px solid #f3f3f3; /* Light grey */
    //       border-top: 8px solid #3498db; /* Blue */
    //       border-radius: 50%;
    //       width: 50px;
    //       height: 50px;
    //       animation: spin 2s linear infinite;
    //     }

    //     @keyframes spin {
    //       0% { transform: rotate(0deg); }
    //       100% { transform: rotate(360deg); }
    //     }
    //   `}</style>
    // </div>


  );
};

export default Spinner;
