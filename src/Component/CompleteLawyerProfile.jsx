import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CompleteLawyerProfile = () => {
  let navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function submit(data) {
    let payload = {
      ...data,
      lawyerType: data.lawyerType.split('')[0].toUpperCase()+data.lawyerType.split('c')[1]
    }

    // console.log(payload)
    try {
      let response = await fetch('http://127.0.0.1:5050/lawyer/completeProfile',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(payload)
      })
      let result = await response.json()
      if(result.success === true){
        toast.success(result.massage)
        // console.log(result)
        navigate('/')
      }else{
        toast.error(result.massage)
      }
      
    } catch (error) {
      toast.error(`${error}`)
      console.log(`${error}`)
    }
  }

  return (
    <>
      <div className="w-full h-screen  bg-gray-200 flex">
        <div className=" w-full h-screen flex justify-center items-center">          
          <div className=" w-9/12 h-screen flex flex-col justify-center items-center">
            <div className="flex gap-2 font-serif text-xl">
              <i className="fa-solid fa-scale-balanced text-blue-500 text-xl pt-1"></i>
              <h1 className="text-gray-900 font-bold text-center">LegalDesk</h1>
            </div>

              <h1 className="text-2xl font-serif font-bold pt-2 text-gray-900">Welcome Back</h1>
              <p className="text-sm text-gray-400">Complete your professional details</p>
            
            <div className="">
              <form onSubmit={handleSubmit(submit)} className="flex flex-col flex-wrap gap-3 text-gray-900 font-semibold bg-white rounded-2xl shadow-xl p-4">
                
                <div className="flex gap-4 w-full">
                  <div className="flex flex-col gap-2 w-3/4">
                    <label htmlFor="email" className="text-lg">
                      Email
                    {errors.email && <span className="text-red-600 text-xs"> * </span>}
                    </label>
                    <input
                      {...register('email',{required:true})}
                      type="email"
                      id="email"
                      placeholder=" ✉ abc@example.com"
                      className="bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/4">
                    <label htmlFor="experience" className="text-lg">
                      Experience
                    {errors.experienceYears && <span className="text-red-600 text-xs"> * </span>}
                    </label>
                    <input
                      {...register('experienceYears',{required:true})}
                      type="number"
                      id="experience"
                      placeholder="💼 e.g. 5"
                      className="w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900 bg-gray-100"
                    />

                  </div>
               </div>

                <div className="flex gap-4 w-full"> 
                  <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="barcouncil-id" className="text-lg">
                      Bar Council ID
                    {errors.barCouncilId && <span className="text-red-600 text-xs"> * </span>}
                    </label>
                    <input
                      {...register('barCouncilId',{required:true})}
                      type="text"
                      id="barcouncil-id"
                      placeholder="🔰 e.g. MH/1234/2020"
                      className=" bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="degree" className="text-lg">
                      Degree
                    {errors.degree && <span className="text-red-600 text-xs"> * </span>}
                    </label>
                    <input
                      {...register('degree',{required:true})}
                      type="text"
                      id="degree"
                      placeholder="🎓 LL.B / LL.M"
                      className="w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900 bg-gray-100"
                    />

                  </div>
                </div>
                <div className="flex gap-4 w-full">
                  <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="specialization" className="text-lg">
                  Specialization
                {errors.lawyerType && (<span className="text-red-600 text-xs"> * </span>)}
                </label>
                <select
                  id="specialization"
                  className="  bg-gray-100  text-sm p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                  {...register("lawyerType", { required: true })}
                >
                  <option value="">Select Type</option>
                  <option value="criminal">Criminal</option>
                  <option value="civil">Civil</option>
                  <option value="family">Family</option>
                  <option value="corporate">Corporate</option>
                  <option value="cyber">Cyber</option>
                  <option value="property">Property</option>
                </select>
                  </div> 
                  <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="totalCases" className="text-lg">
                      Total Cases
                    {errors.totalCases && <span className="text-red-600 text-xs"> * </span>}
                    </label>
                    <input
                      {...register('totalCases',{required:true})}
                      type="number"
                      id="totalCases"
                      placeholder="💼 e.g. 5"
                      className="w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900 bg-gray-100"
                    />
                  </div>
                </div> 
                <div className="flex gap-4 w-full">
                  
                  <div className="flex flex-col gap-2 w-1/3">
                    <label htmlFor="winCases" className="text-lg">
                      Win Cases
                    {errors.wonCases && <span className="text-red-600 text-xs"> * </span>}
                    </label>
                    <input
                      {...register('wonCases',{required:true})}
                      type="number"
                      id="totalCases"
                      placeholder="💼 e.g. 5"
                      className="w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900 bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/3">
                    <label htmlFor="lostCases" className="text-lg">
                      Lost Cases
                    {errors.lostCases && <span className="text-red-600 text-xs"> * </span>}
                    </label>
                    <input
                      {...register('lostCases',{required:true})}
                      type="number"
                      id="lostCases"
                      placeholder="💼 e.g. 5"
                      className="w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900 bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/3">
                    <label htmlFor="winRatio" className="text-lg">
                      Win Ratio 
                    {errors.winRatio && <span className="text-red-600 text-xs"> * </span>}
                    </label>
                    <input
                      {...register('winRatio',{required:true})}
                      type="number"
                      id="winRatio"
                      placeholder="💼 e.g. 5"
                      className="w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900 bg-gray-100"
                    />
                  </div>
                </div>
                <div className="flex gap-4 w-full">
                  <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="feeMin" className="text-lg">
                      Min Fees (₹)
                    {errors.feeMin && <span className="text-red-600 text-xs"> * </span>}
                    </label>
                    <input
                      {...register('feeMin',{required:true})}
                      type="number"
                      id="feeMin"
                      placeholder="💰 e.g. 5000"
                      className="bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="feeMax" className="text-lg">
                      Max Fees (₹)
                    {errors.feeMax && <span className="text-red-600 text-xs"> * </span>}
                    </label>
                    <input
                      {...register('feeMax',{required:true})}
                      type="number"
                      id="feeMax"
                      placeholder="💰 e.g. 50000"
                      className="bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                    />
                  </div>
               </div>
                <button
                  className="w-full bg-blue-600 rounded-md mt-2 p-2 text-sm text-gray-200 hover:bg-sky-700 hover:text-white cursor-pointer"
                  type="submit"
                >
                  Submit
                </button> 
              </form>
            </div>
          </div>
        </div>
      </div>         
    </>
  );
};

export default CompleteLawyerProfile ;