import { useForm } from "react-hook-form";

const CompleteLawyerProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submit(data) {
    console.log(data);
  }

  return (
    <>
      <div className="w-full h-screen  bg-gray-200 flex">
        <div className="md:w-1/2 w-full h-screen flex justify-center items-center">          
          <div className="md:w-1/2 w-9/12 h-screen flex flex-col justify-center items-center">
            <div className="flex gap-2 font-serif text-xl">
              <i className="fa-solid fa-scale-balanced text-blue-500 text-xl pt-1"></i>
              <h1 className="text-gray-900 font-bold text-center">LegalDesk</h1>
            </div>

              <h1 className="text-2xl font-serif font-bold pt-2 text-gray-900">Welcome Back</h1>
              <p className="text-sm text-gray-400">Complete your professional details</p>
            
            <div className="">
              <form onSubmit={handleSubmit(submit)} className="flex flex-col flex-wrap gap-3 text-gray-600 font-semibold bg-white rounded-2xl shadow-xl p-4">
                
                <div className="flex gap-4 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="email" className="text-lg">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="abc@example.com"
                      className="bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                    />
                  </div>
                  
               </div>

                <div className="flex gap-4 w-full"> 
                  <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="barcouncil-id" className="text-lg">
                      Bar Council ID
                    </label>
                    <input
                      type="text"
                      id="barcouncil-id"
                      placeholder="🔰 e.g. MH/1234/2020"
                      className=" bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="degree" className="text-lg">
                      Degree
                    </label>
                    <input
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
                </label>
                <select
                  id="specialization"
                  className="  bg-gray-100  text-sm p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                  {...register("lawyerType", { required: true })}
                >
                  <option value="">Select Type</option>
                  <option value="criminal">Criminal</option>
                  <option value="civil">Civil</option>
                  <option value="domestic">Domestic</option>
                </select>
                {errors.lawyerType && (
                  <span className="text-red-600">Type is Required</span>
                )}
                  </div> 
                  <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="experience" className="text-lg">
                      Experience
                    </label>
                    <input
                      type="number"
                      id="experience"
                      placeholder="💼 e.g. 5"
                      className="w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900 bg-gray-100"
                    />
                  </div>
                </div> 
                <div className="flex gap-4 w-full">
                  <div className="flex flex-col gap-2 w-1/3">
                    <label htmlFor="totalCases" className="text-lg">
                      Total Cases
                    </label>
                    <input
                      type="number"
                      id="totalCases"
                      placeholder="💼 e.g. 5"
                      className="w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900 bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/3">
                    <label htmlFor="winCases" className="text-lg">
                      Win Cases
                    </label>
                    <input
                      type="number"
                      id="totalCases"
                      placeholder="💼 e.g. 5"
                      className="w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900 bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/3">
                    <label htmlFor="lostCases" className="text-lg">
                      Lost Cases
                    </label>
                    <input
                      type="number"
                      id="lostCases"
                      placeholder="💼 e.g. 5"
                      className="w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900 bg-gray-100"
                    />
                  </div>
                </div>

                <div className="flex gap-4 w-full">
                  <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="minFees" className="text-lg">
                      Min Fees (₹)
                    </label>
                    <input
                      type="number"
                      id="minFees"
                      placeholder="💰 e.g. 5000"
                      className="bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="maxFees" className="text-lg">
                      Max Fees (₹)
                    </label>
                    <input
                      type="number"
                      id="maxFees"
                      placeholder="💰 e.g. 50000"
                      className="bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                    />
                  </div>
               </div>

               <div className="flex gap-4 w-full">
                  <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="minFees" className="text-lg">
                      Min Fees (₹)
                    </label>
                    <input
                      type="number"
                      id="minFees"
                      placeholder="💰 e.g. 5000"
                      className="bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <label htmlFor="maxFees" className="text-lg">
                      Max Fees (₹)
                    </label>
                    <input
                      type="number"
                      id="maxFees"
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