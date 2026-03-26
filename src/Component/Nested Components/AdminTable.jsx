import React, { useState } from 'react'
import { toast } from 'react-toastify';



const AdminTable = ({lawyerData}) => {
  const [model, setModel] = useState(false)
  const getStatusColor = (status) => {
    if (status === "APPROVED") return "bg-green-100 text-green-600";
    if (status === "PENDING") return "bg-yellow-100 text-yellow-600";
    if (status === "BLOCKED") return "bg-red-200 text-red-600";
    if (status === "RETURNED") return "bg-orange-100 text-orange-600";
    if (status === "REJECTED") return "bg-red-100 text-red-600";
  };
  console.log(lawyerData)

  async function changeStatus(status){
    try {
      console.log(status)
    } catch (error) {
      toast.error("Server Error!")
    }
  }


  return (
    <div className="flex  bg-gray-100">

      <div className="flex-1 md:p-2">

        <div className="flex justify-between items-center mb-2">
          <h1 className="text-lg font-serif font-bold text-gray-900 p-2">Manage Lawyer's</h1>

          <select className="border-0 w-20 rounded px-3 py-2">
            <option>All</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Blocked</option>
          </select>
        </div>

        <div className="bg-gray-50 pl-4 shadow rounded-lg overflow-x-auto">

          <table className=" min-w-full text-sm border-0">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Specialization</th>
                <th className="p-2 text-left">Experience</th>
                <th className="p-2 text-left">Win Ratio</th>
                <th className="p-2 text-left">Fee Range</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {lawyerData.map((lawyer, index) => (
                <tr key={index} className="border-0 ">

                  <td className="p-2">
                    <p className="font-medium text-gray-900">{lawyer.userId.name}</p>
                    <p className="text-gray-400 text-xs">{lawyer.userId.email}</p>
                  </td>

                  <td className="p-2 text-sm">{lawyer.lawyerType}</td>

                  <td className="p-2 text-gray-900">{lawyer.experienceYears} Years</td>

                  <td className="p-2 text-sm font-medium text-gray-900">{lawyer.winRatio}</td>

                  <td className="p-2 text-sm text-gray-900">₹ {lawyer.feeMin} - ₹ {lawyer.feeMax} </td>

                  <td className="p-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        lawyer.status
                      )}`}
                    >
                      {lawyer.status.toUpperCase()}
                    </span>
                  </td>

                  <td className="p-2 space-x-2">

                      <button className='bg-gray-900 text-gray-50 rounded px-2 py-1 text-sm cursor-pointer ' onClick={()=> setModel(true)}><i className="fa-regular fa-eye text-gray-50"></i> View</button>


                      {/* Modal */}
                      {model && (
                        <div className=" fixed inset-0 flex items-center justify-center bg-black/25">
                          
                          <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-[75%] h-[60%] ">
                            <button className='text-gray-50 bg-gray-900 rounded-[50%] p-2 absolute right-45 hover:bg-red-500 cursor-pointer' onClick={() => setModel(false)}>X</button>
                            <h2 className="text-xl font-bold mb-4 text-center text-gray-900">Lawyers Detailes</h2>
                          
                          <div className='flex flex-wrap gap-12'>
                            <div>
                              <h3 className='text-sm font-semibold text-gray-900 '>Name</h3>
                              <p className='text-xm text-gray-700'>{lawyer.userId.name}</p>
                            </div>
                            <div> 
                              <h3  className='text-sm font-semibold text-gray-900'>Email</h3>
                              <p className='text-xm text-gray-700'>{lawyer.userId.email}</p>
                            </div>
                            <div> 
                              <h3  className='text-sm font-semibold text-gray-900'>Phone</h3>
                              <p className='text-xm text-gray-700'>{lawyer.userId.Phone}</p>
                            </div>
                            <div>
                              <h3 className='text-sm font-semibold text-gray-900' >barCouncil Id</h3>
                              <p className='text-xm text-gray-700'>{lawyer.barCouncilId}</p>
                            </div>
                            <div> 
                              <h3  className='text-sm font-semibold text-gray-900'>Specialization</h3>
                              <p className='text-xm text-gray-700'>{lawyer.lawyerType}</p>
                            </div>
                            <div>
                              <h3 className='text-sm font-semibold text-gray-900'>Experience</h3>
                              <p className='text-xm text-gray-700'>{lawyer.experienceYears} Years</p>
                            </div>
                            <div>
                              <h3 className='text-sm font-semibold text-gray-900' >Degree</h3>
                              <p className='text-xm text-gray-700'>{lawyer.degree}</p>
                            </div>
                            <div>
                              <h3 className='text-sm font-semibold text-gray-900'>Win Case</h3>
                              <p className='text-xm text-gray-700'>{lawyer.wonCases} Case</p>
                            </div>
                            <div>
                              <h3 className='text-sm font-semibold text-gray-900' >Lost Case</h3>
                              <p className='text-xm text-gray-700'>{lawyer.lostCases}</p>
                            </div>
                            <div>
                              <h3 className='text-sm font-semibold text-gray-900' >Status</h3>
                              <p className='text-xm text-gray-700'>{lawyer.status}</p>
                            </div>
                            
                            <div>
                              <h3 className='text-sm font-semibold text-gray-900' >Minimam Fees</h3>
                              <p className='text-xm text-gray-700'>₹ {lawyer.feeMin}</p>
                            </div>
                            <div>
                              <h3 className='text-sm font-semibold text-gray-900' >Maximam Fees</h3>
                              <p className='text-xm text-gray-700'>₹ {lawyer.feeMax}</p>
                            </div>
                            
                          </div>
                          
                          <div className='flex p-5 gap-10 justify-around items-center'>
                           
                            <div>
                              <label htmlFor="" className='text-sm font-semibold text-gray-900'>Remark</label><br />
                              <textarea className='bg-gray-200  text-gray-900 p-2 rounded' name="" id="" cols="50" rows='3' placeholder='Please Enter Remark...' onKeyUp={(e)=>{}}>

                              </textarea>
                            </div>
                            <div className='flex gap-2 flex-row'>

                           
                            <button
                              value="RETURNED"
                              onClick={() => setModel(false)}
                              className="px-4 py-2 bg-gray-900 hover:bg-yellow-400 cursor-pointer text-white rounded"
                            >
                              Returned
                            </button>
                            <button
                              value= "APPROVED"
                              onClick={() => setModel(false)}
                              className="px-4 py-2 bg-gray-900 hover:bg-green-600 cursor-pointer text-white rounded"
                            >
                              Approved
                            </button>
                            <button
                              value="REJECTED"
                              onClick={() => setModel(false)}
                              className="px-4 py-2 bg-gray-900 hover:bg-orange-600 cursor-pointer text-white rounded"
                            >
                              Rejected
                            </button>
                            <button
                              value="BLOCKED"
                              onClick={() => setModel(false)}
                              className="px-4 py-2 bg-gray-900 hover:bg-red-600 cursor-pointer text-white rounded"
                            >
                              Blocked
                            </button>
                          </div>
                          </div>

                          


                          </div>
                        </div>
                      )}

                     

                    {/* {lawyer.status === "PENDING" && (
                      <button className="px-3 py-1 text-xs border-2  cursor-pointer border-green-100 text-green-600 rounded">
                        Approve
                      </button>
                    )}

                    <button className="px-3 py-1 text-xs border-2 border-red-100 cursor-pointer text-red-600 rounded">
                      Block
                    </button>

                    <button className="px-3 py-1 text-xs border-2 border-yellow-100 cursor-pointer text-yellow-600 rounded">
                      Reject
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default AdminTable;
