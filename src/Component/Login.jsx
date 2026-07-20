import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

  const apiURL = import.meta.env.VITE_API_URL || 'http://localhost:5050';

  const [showPassword, setShowPassword] = useState(false);
  const [isLawyer, setIsLawyer] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigator = useNavigate();

  async function submit(payload) {
    console.log(payload)
    try {
      let response = await fetch(`${apiURL}/auth/userlogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      let res = await response.json();
      console.log(res)

      if (res.status === true) {
        toast.success(res.message)
        localStorage.setItem('user', JSON.stringify(res))
        if (res?.result?.role === 'ADMIN') {
          navigator('/admin-dashboard')
        } else if (res?.result?.role === 'LAWYER') {
          navigator('/lawyer-dashboard')
        } else {
          navigator('/client-dashboard')
        }
      } else {
        if (res.message === 'Please complte Profile..') {
          setIsLawyer(true)
        } else {
          setIsLawyer(false)
        }
        toast.error(res.message)
      }
    } catch (error) {
      console.log(error)
      toast.error("Server Error...")
    }
  }
  return (
    <>
      <div className="w-full h-screen bg-gray-100 flex">
        <div className="md:w-1/2 w-full h-screen flex justify-center items-center relative">
          <div className="w-10/12 sm:w-8/12 md:w-9/12 lg:w-7/12 xl:w-1/2 h-full flex flex-col justify-center items-center">
            <div className="flex gap-2 font-serif text-xl">
              <i className="fa-solid fa-scale-balanced text-blue-500 text-xl pt-1"></i>
              <h1 className="text-gray-900 font-bold text-center">LegalDesk</h1>
            </div>

            <h1 className="text-2xl font-serif font-bold pt-2 text-gray-900">Welcome Back</h1>
            <p className="text-sm text-gray-400">Sign in to your account</p>



            <form className="w-full mt-6" onSubmit={handleSubmit(submit)}>
              <label htmlFor="email" className="text-l">Email</label>
              <input type="email" id="email" placeholder=" ✉  you@example.com" className={`w-full p-1 rounded-sm border ${errors.email ? 'border-red-500 outline-red-500' : 'border-gray-200 outline-gray-500'}`}
                {...register('email', {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address"
                  }
                })} />

              {errors.email && <span className="text-red-600 text-sm">{errors.email.message}<br /></span>}

              <label htmlFor="password" className="text-l mt-2 block">Password</label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="🔒 ********"
                  className={`w-full p-1 rounded-sm border pr-10 ${errors.password ? 'border-red-500 outline-red-500' : 'border-gray-200 outline-gray-500'}`}
                  {...register('password', {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>

              {errors.password && <span className="text-red-600 text-sm">{errors.password.message} <br /></span>}

              <button className="w-full bg-blue-600 rounded-md mt-2 p-1 text-sm text-gray-300 hover:bg-sky-700 hover:text-white cursor-pointer" type="submit">Sign In</button>
            </form>

            <p className="text-sm text-gray-400 mt-5">Don't have an account? <span className="text-blue-600 hover:text-blue-700 hover:font-bold cursor-pointer" > <Link to='/registration'> Register </Link> </span> </p>

            {
              isLawyer ? (<p className="text-sm text-gray-400 mt-5">Please Complete Your Profile <span className="text-blue-600 hover:text-blue-700 hover:font-bold cursor-pointer" > <Link to='/completeProfile'> Profile </Link> </span> </p>) : null

            }

            <div className="w-full text-center text-gray-900 absolute bottom-4 md:hidden px-4">
              <p className="text-xs">
                &copy; 2026 Shailendra Kumar Pandey. All Rights Reserved.
              </p>
              <p className="text-xs text-center mt-1">Developed by <Link className="cursor-pointer hover:text-gray-500" to='https://www.google.com' target="_blank">Shailendra Kumar Pandey</Link></p>
            </div>

          </div>
        </div>

        <div className="md:w-1/2 w-full h-screen bg-gray-900 md:flex justify-center items-center hidden relative">
          <div className="w-10/12 lg:w-8/12 xl:w-1/2 h-full flex justify-center items-center flex-col">
            <i className="fa-solid fa-scale-balanced text-blue-500 text-4xl mb-4"></i>
            <h1 className="p-2 text-3xl text-gray-300 font-serif text-center">
              Justice, Simplified
            </h1>
            <p className="text-wrap text-base text-gray-400 text-center mt-2 px-4">
              AI-powered legal case management. Connect with top lawyers,
              analyze your case, and get justice faster.
            </p>
            <div className="w-full text-center text-gray-400 absolute bottom-4 px-4">
              <p className="text-xs">
                &copy; 2026 Shailendra Kumar Pandey. All Rights Reserved.
              </p>
              <p className="text-xs text-center mt-1">Developed by <Link className="cursor-pointer hover:text-gray-300" to='https://www.google.com' target="_blank">Shailendra Kumar Pandey</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
