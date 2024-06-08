import React from 'react';

function Success() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
        <div className="flex items-center">
          <div className="bg-green-500 text-white rounded-full p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-900">Success!</h2>
            <p className="mt-1 text-gray-600">Your operation was completed successfully.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
