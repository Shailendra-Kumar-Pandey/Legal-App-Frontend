import React from 'react'

function AdminPanel({ refrence }) {
    const stats = [
        { label: "Total Lawyers", value: refrence.total, icon: "fa-solid fa-user-group", color: "text-gray-400", bg: "bg-gray-200" },
        { label: "Approved", value: refrence.approved, icon: "fa-regular fa-circle-check", color: "text-green-500", bg: "bg-green-100" },
        { label: "Pending", value: refrence.pending, icon: "fa-regular fa-clock", color: "text-yellow-500", bg: "bg-yellow-100" },
        { label: "Blocked", value: refrence.blocked, icon: "fa-solid fa-triangle-exclamation", color: "text-red-500", bg: "bg-red-100" },
        { label: "Rejected", value: refrence.rejected, icon: "fa-solid fa-xmark", color: "text-orange-500", bg: "bg-orange-100" },
        { label: "Returned", value: refrence.returned, icon: "fa-solid fa-rotate-left", color: "text-blue-500", bg: "bg-blue-100" },
    ]

    return (
        <>
            <h1 className="text-base sm:text-lg font-serif font-bold text-gray-900 p-2">Admin Dashboard</h1>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 p-2 sm:p-4">
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

export default AdminPanel
