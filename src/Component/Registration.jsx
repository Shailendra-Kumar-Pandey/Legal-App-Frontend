import React from 'react';
import { useForm } from 'react-hook-form';

function Registration() {

    const { register, handleSubmit, formState: {errors} } = useForm();


    function submit(data){
        console.log(data)
    }

  return (
    <>
        <div className="w-full h-screen bg-gray-300 flex">
        <div className="w-1/2 h-screen flex justify-center items-center">          
          <div className="w-1/2 h-screen flex flex-col justify-center items-center">
            <div className="flex gap-2 font-serif text-xl">
              <i className="fa-solid fa-scale-balanced text-blue-500 text-xl pt-1"></i>
              <h1 className="text-gray-900 font-bold text-center">LegalDesk</h1>
            </div>

              <h1 className="text-2xl font-serif font-bold pt-2 text-gray-900">Welcome</h1>
              <p className="text-sm text-gray-400">All Field Requierd in Create Account</p>

              <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="name" className="text-l">Full Name</label>
                <input type="name" id="name" placeholder="Rahul Singh" className="w-full p-1 rounded-sm border-2 border-gray-200 outline-gray-900"
                {...register('name', {required:true})}/>

                {errors.name && <span className="text-red-600">Name is Required<br/></span> }

                <label htmlFor="phone" className="text-l">Mobile Number</label>
                <input type="phone" id="phone" placeholder="9988123456" className="w-full p-1 rounded-sm border-2 border-gray-200 outline-gray-900"
                {...register('phone', {required:true})}/>

                {errors.phone && <span className="text-red-600">Mobile Number is Required<br/></span> }

                <label htmlFor="email" className="text-l">Email</label>
                <input type="email" id="email" placeholder=" ✉  you@example.com" className="w-full p-1 rounded-sm border-2 border-gray-200 outline-gray-900"
                {...register('email', {required:true})}/>

                {errors.email && <span className="text-red-600">Email is Required<br/></span> }


                <label htmlFor="password" className="text-l">Password</label>
                <input type="password" id="password" placeholder="🔒 ********"  className="w-full p-1 rounded-sm border-gray-200 border-2 outline-gray-900" 
                {...register('password', {required:true})}/>

                {errors.password && <span className="text-red-600">Password is Required <br/></span>}

                <label htmlFor="password" className="text-l">Confirm Password</label>
                <input type="password" id="password" placeholder="🔒 ********"  className="w-full p-1 rounded-sm border-gray-200 border-2 outline-gray-900" 
                {...register('password', {required:true})}/>

                {errors.password && <span className="text-red-600">Password is Required <br/></span>}

                <button className="w-full bg-blue-600 rounded-md mt-2 p-1 text-sm text-gray-300 hover:bg-sky-700 hover:text-white cursor-pointer" type="submit">Sign Up</button>
              </form>

              

          </div>
        </div>

        <div className="w-1/2 h-screen bg-gray-900 flex justify-center items-center">
          <div className="w-1/2 h-screen flex justify-center items-center flex-col">
            <i className="fa-solid fa-scale-balanced text-blue-500 text-2xl "></i>
            <h1 className="p-2 text-2xl text-gray-300 font-serif">
              Justice, Simplifired
            </h1>
            <p className="text-wrap text-sm text-gray-400 text-center">
              AI-powered legal case management, Contact with top laywers,
              analyze your case, and get justice faster.
            </p>
          </div>
        </div>
      </div>        
    </>
  )
}

export default Registration;
