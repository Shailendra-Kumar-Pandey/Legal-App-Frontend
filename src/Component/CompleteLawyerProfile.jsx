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
      <div className="w-full h-full bg-gray-100 ">
        <div className="flex flex-col pt-[30px] font-serif gap-4 items-center text-center">
          <div className="flex gap-2 text-xl items-center justify-center">
            <i className="fa-solid fa-scale-balanced text-blue-500 text-2xl"></i>
            <h1 className="text-gray-900 font-bold text-2xl">LegalDesk</h1>
          </div>

          <div>
            <h1 className="text-gray-900 font-bold text-2xl">
              Lawyer Profile Setup
            </h1>
            <p className="text-gray-600">complete your professional details</p>
          </div>
        </div>

        <div className="w-[40%] mx-auto py-6">
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-3 text-gray-600 font-semibold bg-white rounded-2xl shadow-xl p-4"
          >
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
                  {...register("barId", { required: true })}
                />
                {errors.barId && (
                  <span className="text-red-600">
                    Bar Council ID is Required
                  </span>
                )}
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
                  {...register("degree", { required: true })}
                />
                {errors.degree && (
                  <span className="text-red-600">Degree is Required</span>
                )}
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="specialization" className="text-lg">
                  Specialization
                </label>
                <select
                  id="specialization"
                  className="  bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                  {...register("type", { required: true })}
                >
                  <option value="">Select Type</option>
                  <option value="criminal">Criminal</option>
                  <option value="civil">Civil</option>
                  <option value="domestic">Domestic</option>
                </select>
                {errors.type && (
                  <span className="text-red-600">Type is Required</span>
                )}
              </div>

              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="experience" className="text-lg">
                  Experience (Years)
                </label>
                <input
                  type="number"
                  id="experience"
                  placeholder="⏳ 0"
                  className="  bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                  {...register("experience", { required: true })}
                />
                {errors.experience && (
                  <span className="text-red-600">Experience is Required</span>
                )}
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
                  placeholder="0"
                  className="bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                  {...register("totalCases", {required:true})}
                />
                                {errors.totalCases && (
                  <span className="text-red-600">this field is Required</span>
                )}
              </div>

              <div className="flex flex-col gap-2 w-1/3">
                <label htmlFor="won" className="text-lg">
                  Won
                </label>
                <input
                  type="number"
                  id="won"
                  placeholder="0"
                  className="bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                  {...register("won", {required:true})}/>
                                   {errors.won && (
                  <span className="text-red-600">this field is Required</span>
                )}
              </div>

              <div className="flex flex-col gap-2 w-1/3">
                <label htmlFor="lost" className="text-lg">
                  Lost
                </label>
                <input
                  type="number"
                  id="lost"
                  placeholder="0"
                  className="bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                  {...register("lost", {required:true})} />
                                      {errors.lost && (
                  <span className="text-red-600">this field is Required</span>
                )}

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
                  placeholder="₹ 0"
                  className="bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                  {...register("MinFees", {required:true})}  />
                                           {errors.MinFees && (
                  <span className="text-red-600">this field is Required</span>
                )}

                     
              </div>

              <div className="flex flex-col gap-2 w-1/2">
                <label htmlFor="maxFees" className="text-lg">
                  Max Fees (₹)
                </label>
                <input
                  type="number"
                  id="maxFees"
                  placeholder="₹ 0"
                  className="bg-gray-100 w-full p-1 rounded-md border-2 border-gray-200 outline-gray-900"
                  {...register("MaxFees", {required:true})}   />
                                                     {errors.MaxFees && (
                  <span className="text-red-600">this field is Required</span>
                )}

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
    </>
  );
};

export default CompleteLawyerProfile;