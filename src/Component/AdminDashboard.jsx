import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import AdminPanel from "./Nested Components/AdminPanel";
import AdminTable from './Nested Components/AdminTable'

function AdminDashboard() {
    let token = JSON.parse(localStorage.getItem('user')).token || "";
    const [panel, setPanel] = useState(true)
    const [selectedPanel, setSelectedPanel] = useState("Dashboard")
    const [lawyerData, setLawyerData] = useState([])
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
    
    let refrence = useRef({total: 0, approved:0, pending:0, rejected:0, blocked:0, returned:0 });

    async function getAllLawyer(){
        try {
            let response = await fetch("http://localhost:5050/admin/getAllLawyers",{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            let res = await response.json();

            if(res.success === false){
                toast.success(res.message)
            }else{
                let approved = res.result.filter((e)=> e.status === 'APPROVED').length;
                let blocked = res.result.filter((e)=> e.status === 'BLOCKED').length;
                let pending = res.result.filter((e)=> e.status === 'PENDING').length;
                let rejected = res.result.filter((e)=> e.status === 'REJECTED').length;
                let returned = res.result.filter((e)=> e.status === 'RETURNED').length;

                refrence.current = {total: res?.result?.length, approved:approved, pending:pending, rejected:rejected, blocked:blocked, returned:returned}
                
                setLawyerData(res.result)
            }
            
        } catch (error) {
            toast.error("Server Error!")
            console.log(error)
        }
    }

    useEffect(()=>{
        if(token){
            getAllLawyer()
        }
    }, [token])


    return (
        <div className='w-full h-screen bg-gray-100 md:flex md:flex-row'>
            <div className={panel ? "w-full h-1/12 bg-gray-900 flex flex-row justify-between md:w-1/6 md:h-screen" :
                "w-full h-1/12 bg-gray-900 flex flex-row justify-between md:w-10 md:h-screen overflow-hidden"
            }>
                <div className="flex w-full flex-col justify-between ">
                    <div className="flex flex-col w-full">
                        <div className="flex border-b border-gray-700">
                            <div className="flex gap-2 font-serif text-sm p-3 ">
                                <i className="fa-solid fa-scale-balanced text-blue-500  pt-1"></i>
                                <h1 className="text-gray-300 font-bold text-center">LegalDesk</h1>
                            </div>

                            <div>
                                <i className="fa-solid fa-bars text-gray-200 p-5 mr-2 cursor-pointer text-sm text-center " onClick={() => {
                                    setPanel(!panel)
                                }}></i>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 p-5 text-gray-400">
                            {
                                panelNames?.map((ele,i) => {
                                    return (
                                        <div key={i} className={
                                            selectedPanel === ele.name ? `flex items-center text-gray-200  gap-2 p-1.5 bg-gray-800 cursor-pointer
                                            rounded-[5px] text-sm ps-3`: `flex items-center text-sm gap-2 p-1.5 cursor-pointer
                                            rounded-[5px] ps-3`
                                        }
                                            onClick={() => {
                                                setSelectedPanel(ele.name)
                                            }}

                                        >
                                            <i className={ele.classData} />
                                            <h1>{ele.name}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="p-5 border-t border-gray-800 text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-7.5 w-7.5 bg-gray-800 flex justify-center text-sm items-center 
                            rounded-[50%]">
                                A
                            </div>
                            <div>
                                <h1 className="text-sm">Admin</h1>
                                <p className="text-sm text-gray-500">Admin</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500 cursor-pointer text-sm">
                            <i className="fa-solid fa-arrow-right-from-bracket text-sm" />
                            <h3>Sign Out</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div className='md:w-full md:h-screen'>

                <div className='bg-gray-50 text-center p-3 text-gray-900 border-b border-gray-200 md:flex'>
                    <h1 className='text-center text-sm font-bold font-serif'>Admin Panel</h1>
                </div>


                {
                    selectedPanel === "Dashboard" ? <AdminPanel refrence={refrence.current}  /> : <AdminTable lawyerData={lawyerData} />
                }


            </div>

        </div>
    )
}

export default AdminDashboard;