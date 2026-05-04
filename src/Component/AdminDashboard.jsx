import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import AdminPanel from "./Nested Components/AdminPanel";
import AdminTable from './Nested Components/AdminTable'

function AdminDashboard() {
    let token = JSON.parse(localStorage.getItem('user')).token || "";
    const [panel, setPanel] = useState(true)
    const [selectedPanel, setSelectedPanel] = useState("Dashboard")
    const [lawyerData, setLawyerData] = useState([])
    const apiURL = import.meta.env.VITE_API_URL;
    const panelNames = [
        {
            name: "Dashboard",
            classData: "fa-regular fa-house text-sm"
        },
        {
            name: "Manage Lawyers",
            classData: "fa-solid fa-user-group text-sm"
        }
    ]

    let refrence = useRef({ total: 0, approved: 0, pending: 0, rejected: 0, blocked: 0, returned: 0 });

    async function getAllLawyer() {
        try {
            let response = await fetch(`${apiURL}admin/getAllLawyers`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            let res = await response.json();
            if (res.success === false) {
                toast.success(res.message)
            } else {
                let approved = res.result.filter((e) => e.status === 'APPROVED').length;
                let blocked = res.result.filter((e) => e.status === 'BLOCKED').length;
                let pending = res.result.filter((e) => e.status === 'PENDING').length;
                let rejected = res.result.filter((e) => e.status === 'REJECTED').length;
                let returned = res.result.filter((e) => e.status === 'RETURNED').length;
                refrence.current = { total: res?.result?.length, approved, pending, rejected, blocked, returned }
                setLawyerData(res.result)
            }
        } catch (error) {
            toast.error("Server Error!")
            console.log(error)
        }
    }

    useEffect(() => {
        if (token) getAllLawyer()
    }, [token])

    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col md:flex-row">

            {/* ── Sidebar (hidden on mobile, visible md+) ── */}
            <aside
                className={`hidden md:flex flex-col justify-between bg-gray-900 h-screen sticky top-0 flex-shrink-0 transition-all duration-300 ${panel ? "w-52 lg:w-64" : "w-14"} overflow-hidden`}
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
                        <div className="h-8 w-8 bg-gray-700 flex justify-center items-center rounded-full text-sm flex-shrink-0">A</div>
                        {panel && (
                            <div className="overflow-hidden">
                                <p className="text-sm truncate">Admin</p>
                                <p className="text-xs text-gray-500 truncate">Admin</p>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 cursor-pointer text-sm hover:text-red-400 transition-colors">
                        <i className="fa-solid fa-arrow-right-from-bracket flex-shrink-0" />
                        {panel && <span>Sign Out</span>}
                    </div>
                </div>
            </aside>

            {/* ── Main content ── */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                {/* Top header */}
                <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
                    <div className="flex items-center gap-3">
                        {/* Mobile brand */}
                        <i className="fa-solid fa-scale-balanced text-blue-500 md:hidden" />
                        <h1 className="text-sm font-bold font-serif text-gray-900">Admin Panel</h1>
                    </div>
                </header>

                {/* Page body */}
                <main className="flex-1 overflow-y-auto p-2 sm:p-4">
                    {selectedPanel === "Dashboard"
                        ? <AdminPanel refrence={refrence.current} />
                        : <AdminTable lawyerData={lawyerData} />
                    }
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
                            <span>{ele.name}</span>
                        </button>
                    ))}
                    {/* Sign out */}
                    <button className="flex-1 flex flex-col items-center justify-center py-2 text-xs gap-1 text-gray-400">
                        <i className="fa-solid fa-arrow-right-from-bracket text-sm" />
                        <span>Sign Out</span>
                    </button>
                </nav>

                {/* Spacer so content is not hidden by bottom nav on mobile */}
                <div className="md:hidden h-16" />
            </div>
        </div>
    )
}

export default AdminDashboard;