
function ClientCase() {
  return (
    <>
      <div className="p-3 sm:p-5 bg-gray-100 min-h-full">
        <h1 className="text-xl sm:text-2xl font-serif font-semibold mb-4">My Cases</h1>

        <div className="bg-white rounded-lg shadow p-4 sm:p-6 border">

          <p className="text-gray-700 mb-3 text-sm sm:text-base">
            I was wrongfully terminated from my job without any prior notice or valid reason.
            I had been working for the company for 5 years.
          </p>

          <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-500 mb-4">
            <span>📍 Mumbai, Maharashtra</span>
            <span>📅 2024-01-15</span>
            <span className="ml-auto bg-yellow-100 text-yellow-700 px-2 py-1 rounded whitespace-nowrap">
              OPEN
            </span>
          </div>

          <div className="border rounded-lg p-3 sm:p-4 bg-gray-50">
            <h2 className="font-semibold text-purple-600 mb-3 text-sm sm:text-base">⚙ AI Case Analysis</h2>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-4">
              <div>
                <p className="text-gray-500 text-xs">Predicted Type</p>
                <p className="font-medium">Employment Dispute</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Severity</p>
                <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs font-semibold">MEDIUM</span>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Estimated Fee</p>
                <p className="font-medium">₹15,000 – ₹50,000</p>
              </div>
            </div>

            <div className="mt-3 text-sm">
              <p className="text-gray-500 text-xs mb-1">IPC Sections</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">Section 27 – Industrial Disputes Act</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-xs">Section 25F – Conditions for Retrenchment</span>
              </div>
            </div>

            <div className="mt-3 text-sm">
              <p className="text-gray-500 text-xs">Worst Case Outcome</p>
              <p className="text-sm">Case dismissed if employer proves valid grounds</p>
            </div>

            <div className="mt-2 text-sm">
              <p className="text-gray-500 text-xs">Remark</p>
              <p className="text-sm">Strong case if termination letter lacks valid reasons</p>
            </div>
          </div>

          <div className="mt-4 text-sm">
            <p className="text-gray-500 text-xs mb-1">Attachments</p>
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">termination_letter.pdf</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientCase
