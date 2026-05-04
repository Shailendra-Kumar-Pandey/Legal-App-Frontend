import React from 'react'

function ClientPanel() {
    const stats = [
        { label: "Total Cases", value: 1, icon: "fa-solid fa-folder-open", color: "text-gray-400", bg: "bg-gray-200" },
        { label: "Open", value: 1, icon: "fa-regular fa-clock", color: "text-yellow-500", bg: "bg-yellow-100" },
        { label: "Assigned", value: 0, icon: "fa-regular fa-circle-check", color: "text-green-500", bg: "bg-green-100" },
    ]

    return (
        <>
            <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2 px-2 pt-2">
                <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900">Client Dashboard</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-3 py-1.5 rounded transition-colors">
                    Create Case
                </button>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 p-2 sm:p-4">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 hover:shadow-lg transition-shadow">
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
        </>
    )
}

export default ClientPanel
