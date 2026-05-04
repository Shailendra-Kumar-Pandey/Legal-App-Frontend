import React, { useState } from 'react'
import { toast } from 'react-toastify';

const AdminTable = ({ lawyerData }) => {
  const [model, setModel] = useState(false)
  const [selectedLawyer, setSelectedLawyer] = useState(null)

  const getStatusColor = (status) => {
    if (status === "APPROVED") return "bg-green-100 text-green-600";
    if (status === "PENDING") return "bg-yellow-100 text-yellow-600";
    if (status === "BLOCKED") return "bg-red-200 text-red-600";
    if (status === "RETURNED") return "bg-orange-100 text-orange-600";
    if (status === "REJECTED") return "bg-red-100 text-red-600";
  };

  async function changeStatus(status) {
    try {
      console.log(status)
    } catch (error) {
      toast.error("Server Error!")
    }
  }

  function openModal(lawyer) {
    setSelectedLawyer(lawyer)
    setModel(true)
  }

  return (
    <div className="bg-gray-100 min-h-full">

      <div className="p-2 sm:p-4">

        {/* Header row */}
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mb-3 gap-2">
          <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900">Manage Lawyers</h1>
          <select className="border border-gray-200 bg-white rounded px-3 py-1.5 text-sm focus:outline-none">
            <option>All</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Blocked</option>
          </select>
        </div>

        {/* Table – horizontally scrollable on small screens */}
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-3 text-left whitespace-nowrap">Name</th>
                <th className="p-3 text-left whitespace-nowrap hidden sm:table-cell">Specialization</th>
                <th className="p-3 text-left whitespace-nowrap hidden md:table-cell">Experience</th>
                <th className="p-3 text-left whitespace-nowrap hidden lg:table-cell">Win Ratio</th>
                <th className="p-3 text-left whitespace-nowrap hidden lg:table-cell">Fee Range</th>
                <th className="p-3 text-left whitespace-nowrap">Status</th>
                <th className="p-3 text-left whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {lawyerData.map((lawyer, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">

                  <td className="p-3">
                    <p className="font-medium text-gray-900 whitespace-nowrap">{lawyer.userId.name}</p>
                    <p className="text-gray-400 text-xs">{lawyer.userId.email}</p>
                  </td>

                  <td className="p-3 text-sm hidden sm:table-cell whitespace-nowrap">{lawyer.lawyerType}</td>

                  <td className="p-3 text-gray-900 hidden md:table-cell whitespace-nowrap">{lawyer.experienceYears} yrs</td>

                  <td className="p-3 text-sm font-medium text-gray-900 hidden lg:table-cell">{lawyer.winRatio}</td>

                  <td className="p-3 text-sm text-gray-900 hidden lg:table-cell whitespace-nowrap">
                    ₹{lawyer.feeMin} – ₹{lawyer.feeMax}
                  </td>

                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(lawyer.status)}`}>
                      {lawyer.status}
                    </span>
                  </td>

                  <td className="p-3">
                    <button
                      className="bg-gray-900 text-gray-50 rounded px-2 py-1 text-xs sm:text-sm cursor-pointer hover:bg-gray-700 transition-colors whitespace-nowrap"
                      onClick={() => openModal(lawyer)}
                    >
                      <i className="fa-regular fa-eye mr-1" />
                      View
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Modal ── */}
      {model && selectedLawyer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-3 sm:px-6">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">

            {/* Close button */}
            <button
              className="absolute top-3 right-3 bg-gray-900 hover:bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-sm transition-colors z-10"
              onClick={() => setModel(false)}
            >
              ✕
            </button>

            <div className="p-5 sm:p-7">
              <h2 className="text-lg sm:text-xl font-bold mb-5 text-center text-gray-900">Lawyer Details</h2>

              {/* Details grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-5">
                {[
                  { label: "Name", value: selectedLawyer.userId.name },
                  { label: "Email", value: selectedLawyer.userId.email },
                  { label: "Phone", value: selectedLawyer.userId.Phone },
                  { label: "Bar Council ID", value: selectedLawyer.barCouncilId },
                  { label: "Specialization", value: selectedLawyer.lawyerType },
                  { label: "Experience", value: `${selectedLawyer.experienceYears} Years` },
                  { label: "Degree", value: selectedLawyer.degree },
                  { label: "Won Cases", value: selectedLawyer.wonCases },
                  { label: "Lost Cases", value: selectedLawyer.lostCases },
                  { label: "Status", value: selectedLawyer.status },
                  { label: "Min Fee", value: `₹ ${selectedLawyer.feeMin}` },
                  { label: "Max Fee", value: `₹ ${selectedLawyer.feeMax}` },
                ].map(({ label, value }, i) => (
                  <div key={i}>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</h3>
                    <p className="text-sm text-gray-800 mt-0.5 break-words">{value ?? "—"}</p>
                  </div>
                ))}
              </div>

              {/* Remark + Actions */}
              <div className="border-t border-gray-100 pt-5 flex flex-col md:flex-row gap-4 items-start md:items-end">
                <div className="flex-1 w-full">
                  <label className="text-sm font-semibold text-gray-900 block mb-1">Remark</label>
                  <textarea
                    className="w-full bg-gray-100 text-gray-900 p-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows="3"
                    placeholder="Please enter remark..."
                  />
                </div>

                <div className="flex flex-wrap gap-2 md:flex-col lg:flex-row">
                  {[
                    { label: "Returned", value: "RETURNED", hover: "hover:bg-yellow-500" },
                    { label: "Approve", value: "APPROVED", hover: "hover:bg-green-600" },
                    { label: "Reject", value: "REJECTED", hover: "hover:bg-orange-600" },
                    { label: "Block", value: "BLOCKED", hover: "hover:bg-red-600" },
                  ].map(({ label, value, hover }) => (
                    <button
                      key={value}
                      value={value}
                      onClick={() => setModel(false)}
                      className={`px-3 py-2 bg-gray-900 text-white text-sm rounded cursor-pointer transition-colors ${hover}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTable;
