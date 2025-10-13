import React from 'react';

const HistoryCard = ({ history }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-700 border-green-400";
      case "Rejected":
        return "bg-red-100 text-red-700 border-red-400";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-400";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between 
                    p-4 rounded-xl shadow-sm bg-gray-50 border border-gray-200">
      
      {/* Left Section - Title & Type */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{history.title}</h3>
        <p className="text-sm text-gray-500">{history.type}</p>
      </div>

      {/* Middle Section - Date */}
      <div className="mt-2 md:mt-0">
        <p className="text-sm text-gray-600">{history.date}</p>
      </div>

      {/* Right Section - Status */}
      <div className={`mt-2 md:mt-0 px-3 py-1 text-sm font-medium rounded-full border ${getStatusColor(history.status)}`}>
        {history.status}
      </div>
    </div>
  );
};

export default HistoryCard;