import React, { useState } from 'react'

function LawyerDashboard({ logOutHandler }) {
    const [panel, setPanel] = useState(true)
    const [selectedPanel, setSelectedPanel] = useState("Dashboard")

    const panelNames = [
        { name: "Dashboard", classData: "fa-regular fa-house text-sm" },
        { name: "My Cases", classData: "fa-solid fa-folder-open text-sm" },
        { name: "Clients", classData: "fa-solid fa-users text-sm" },
        { name: "Profile", classData: "fa-solid fa-user text-sm" },
    ]

    const stats = [
        { label: "Total Cases", value: 12, icon: "fa-solid fa-folder-open", color: "text-gray-400", bg: "bg-gray-200" },
        { label: "Active Cases", value: 5, icon: "fa-regular fa-clock", color: "text-yellow-500", bg: "bg-yellow-100" },
        { label: "Won Cases", value: 6, icon: "fa-regular fa-circle-check", color: "text-green-500", bg: "bg-green-100" },
        { label: "Lost Cases", value: 1, icon: "fa-solid fa-xmark", color: "text-red-500", bg: "bg-red-100" },
    ]

    function renderContent() {
        if (selectedPanel === "Dashboard") {
            return (
                <>
                    <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900 p-2">
                        Lawyer Dashboard
                    </h1>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-2 sm:p-4">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition-shadow"
                            >
                                <div className={`${stat.bg} rounded-lg p-2 flex-shrink-0`}>
                                    <i className={`${stat.icon} ${stat.color} text-2xl sm:text-3xl`} />
                                </div>
                                <div>
                                    <p className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                                    <h5 className="text-gray-500 text-xs sm:text-sm font-semibold">{stat.label}</h5>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Cases */}
                    <div className="px-2 sm:px-4 pb-4">
                        <h2 className="text-sm sm:text-base font-semibold text-gray-800 mb-3">Recent Cases</h2>
                        <div className="bg-white rounded-lg shadow overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                                    <tr>
                                        <th className="p-3 text-left whitespace-nowrap">Client</th>
                                        <th className="p-3 text-left whitespace-nowrap hidden sm:table-cell">Type</th>
                                        <th className="p-3 text-left whitespace-nowrap hidden md:table-cell">Date</th>
                                        <th className="p-3 text-left whitespace-nowrap">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { client: "Rohit Sharma", type: "Employment", date: "2024-01-10", status: "ACTIVE", statusColor: "bg-yellow-100 text-yellow-700" },
                                        { client: "Priya Singh", type: "Family", date: "2024-02-05", status: "WON", statusColor: "bg-green-100 text-green-700" },
                                        { client: "Amit Verma", type: "Criminal", date: "2024-03-15", status: "PENDING", statusColor: "bg-gray-100 text-gray-600" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                            <td className="p-3 font-medium text-gray-900 whitespace-nowrap">{row.client}</td>
                                            <td className="p-3 hidden sm:table-cell text-gray-600 whitespace-nowrap">{row.type}</td>
                                            <td className="p-3 hidden md:table-cell text-gray-500 whitespace-nowrap">{row.date}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${row.statusColor}`}>
                                                    {row.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )
        }

        // Placeholder for other panels
        return (
            <div className="flex flex-col items-center justify-center h-60 text-gray-400 gap-3">
                <i className="fa-solid fa-wrench text-3xl" />
                <p className="text-sm font-medium">{selectedPanel} — Coming Soon</p>
            </div>
        )
    }

    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col md:flex-row">

            {/* ── Sidebar (hidden on mobile, visible md+) ── */}
            <aside
                className={`hidden md:flex flex-col justify-between bg-gray-900 h-screen sticky top-0 flex-shrink-0 transition-all duration-300 overflow-hidden ${panel ? "w-52 lg:w-64" : "w-14"}`}
            >
                {/* Top */}
                <div className="flex flex-col w-full">
                    {/* Brand + toggle */}
                    <div className="flex items-center justify-between border-b border-gray-700 px-3 py-3">
                        {panel && (
                            <div className="flex items-center gap-2 font-serif">
                                <i className="fa-solid fa-scale-balanced text-blue-500 text-sm" />
                                <span className="text-gray-300 font-bold text-sm">LegalDesk</span>
                            </div>
                        )}
                        <i
                            className="fa-solid fa-bars text-gray-200 cursor-pointer text-sm p-1"
                            onClick={() => setPanel(!panel)}
                        />
                    </div>

                    {/* Nav items */}
                    <div className="flex flex-col gap-2 px-2 py-4 text-gray-400">
                        {panelNames.map((ele, i) => (
                            <div
                                key={i}
                                title={ele.name}
                                className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-sm transition-colors ${selectedPanel === ele.name
                                    ? "bg-gray-800 text-gray-100"
                                    : "hover:bg-gray-800 hover:text-gray-200"
                                    }`}
                                onClick={() => setSelectedPanel(ele.name)}
                            >
                                <i className={`${ele.classData} flex-shrink-0`} />
                                {panel && <span className="truncate">{ele.name}</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom – user info */}
                <div className="border-t border-gray-800 px-3 py-4 text-white">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 bg-gray-700 flex justify-center items-center rounded-full text-sm flex-shrink-0">
                            L
                        </div>
                        {panel && (
                            <div className="overflow-hidden">
                                <p className="text-sm truncate">Lawyer User</p>
                                <p className="text-xs text-gray-500 truncate">LAWYER</p>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 cursor-pointer text-sm hover:text-red-400 transition-colors"
                        onClick={logOutHandler}
                    >
                        <i className="fa-solid fa-arrow-right-from-bracket flex-shrink-0" />
                        {panel && <span>Sign Out</span>}
                    </div>
                </div>
            </aside>

            {/* ── Main content ── */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">

                {/* Top header */}
                <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3 sticky top-0 z-10 shadow-sm">
                    <i className="fa-solid fa-scale-balanced text-blue-500 md:hidden" />
                    <h1 className="text-sm font-bold font-serif text-gray-900">Lawyer Panel</h1>
                </header>

                {/* Page body */}
                <main className="flex-1 overflow-y-auto p-2 sm:p-4">
                    {renderContent()}
                </main>

                {/* ── Bottom Nav (mobile only) ── */}
                <nav className="md:hidden fixed bottom-0 inset-x-0 bg-gray-900 flex border-t border-gray-700 z-20">
                    {panelNames.map((ele, i) => (
                        <button
                            key={i}
                            className={`flex-1 flex flex-col items-center justify-center py-2 text-xs gap-1 transition-colors ${selectedPanel === ele.name ? "text-blue-400" : "text-gray-400"}`}
                            onClick={() => setSelectedPanel(ele.name)}
                        >
                            <i className={ele.classData} />
                            <span className="hidden xs:block truncate">{ele.name}</span>
                        </button>
                    ))}
                    <button className="flex-1 flex flex-col items-center justify-center py-2 text-xs gap-1 text-gray-400"
                        onClick={logOutHandler}
                    >
                        <i className="fa-solid fa-arrow-right-from-bracket text-sm" />
                        <span className="hidden xs:block">Sign Out</span>
                    </button>
                </nav>

                {/* Spacer for bottom nav on mobile */}
                <div className="md:hidden h-16" />
            </div>
        </div>
    )
}

export default LawyerDashboard