// import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

const role = ['Admin', 'Client', 'Lawyer']

const [defaultRole, setRole] = useState('Admin')

const { register, handleSubmit, formState: {errors} } = useForm()
const navigator = useNavigate();

async function submit(payload){
  console.log(payload)
  try {
   let response = await fetch("http://localhost:5050/auth/userlogin",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(payload)
            });

            let res = await response.json();
            console.log(res)

            if(res.status === true){
              toast.success(res.massage)
              localStorage.setItem('user', JSON.stringify(res))
              navigator('/AdminPanel')
            }else{
              toast.error(res.massage)
            }
    

  } catch (error) {
    console.log(error)
    toast.error("Server Error...")
  }
} 
  return (
    <>
      <div className="w-full h-screen bg-gray-200 flex">
        <div className="md:w-1/2 w-full h-screen flex justify-center items-center">          
          <div className="md:w-1/2 w-9/12 h-screen flex flex-col justify-center items-center">
            <div className="flex gap-2 font-serif text-xl">
              <i className="fa-solid fa-scale-balanced text-blue-500 text-xl pt-1"></i>
              <h1 className="text-gray-900 font-bold text-center">LegalDesk</h1>
            </div>

              <h1 className="text-2xl font-serif font-bold pt-2 text-gray-900">Welcome Back</h1>
              <p className="text-sm text-gray-400">Sign in to your account</p>

              <div className="w-full bg-gray-300 mt-3 mb-3 rounded-2xl">
                {
                  role.map((ele, index)=>{
                    return(
                      
                      <button key={index} className={ defaultRole === ele ? `w-1/3 rounded-2xl pt-1 pb-1 text-gray-300 text-sm
                       bg-gray-900 cursor-pointer transition-all` : `w-1/3 rounded-2xl pt-1 pb-1 text-gray-400 text-sm
                       hover:bg-gray-900 hover:text-gray-300 focus:text-gray-200 focus:bg-gray-900
                        cursor-pointer transition-all`} onClick={()=>{setRole(ele)}}>{ele}</button>
                    )
                  })
                }
              </div>

              <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="email" className="text-l">Email</label>
                <input type="email" id="email" placeholder=" ✉  you@example.com" className="w-full p-1 rounded-sm border-2 border-gray-200 outline-gray-900"
                {...register('email', {required:true})}/>

                {errors.email && <span className="text-red-600">Email is Required<br/></span> }

                <label htmlFor="password" className="text-l">Password</label>
                <input type="password" id="password" placeholder="🔒 ********"  className="w-full p-1 rounded-sm border-gray-200 border-2 outline-gray-900" 
                {...register('password', {required:true})}/>

                {errors.password && <span className="text-red-600">Password is Required <br/></span>}

                <button className="w-full bg-blue-600 rounded-md mt-2 p-1 text-sm text-gray-300 hover:bg-sky-700 hover:text-white cursor-pointer" type="submit">Sign In</button>
              </form>

              <p className="text-sm text-gray-400 mt-5">Don't have an account? <span className="text-blue-600 hover:text-blue-700 hover:font-bold cursor-pointer" > <Link to='/registration'> Register </Link> </span> </p>

              <div className=" text-gray-900 absolute bottom-2 md:hidden ">
                <p>
                    <small> &copy; 2026 Shailendra Kumar Pandey. All Rights Reserved.</small>
                </p>
                <p className="text-center">Developed by  <Link className="cursor-pointer hover:text-gray-500" to='https://www.google.com' target="_blank">Shailedra Kumar Pandey</Link> </p>
               
              </div> 

          </div>
        </div>

        <div className="md:w-1/2 md:h-screen md:bg-gray-900 md:flex md:justify-center md:items-center hidden">
          <div className="w-1/2 h-screen flex justify-center items-center flex-col">
            <i className="fa-solid fa-scale-balanced text-blue-500 text-2xl "></i>
            <h1 className="p-2 text-2xl text-gray-300 font-serif">
              Justice, Simplifired
            </h1>
            <p className="text-wrap text-sm text-gray-400 text-center">
              AI-powered legal case management, Contact with top laywers,
              analyze your case, and get justice faster.
            </p>
              <div className=" md:text-gray-200 md:absolute md:bottom-2  ">
                <p>
                    <small> &copy; 2026 Shailendra Kumar Pandey. All Rights Reserved.</small>
                </p>
                <p className="text-center">Developed by  <Link className="cursor-pointe hover:text-gray-400" to='https://www.google.com' target="_blank">Shailedra Kumar Pandey</Link> </p>
               
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
