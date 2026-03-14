const Login = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-300 flex">
        <div className="w-1/2 h-screen flex justify-center items-center">          
          <div className="w-1/2 h-screen flex flex-col justify-center items-center">
            <div className="flex gap-2 font-serif text-xl">
              <i className="fa-solid fa-scale-balanced text-blue-500 text-xl pt-1"></i>
              <h1 className="text-gray-900 font-bold text-center">LegalDesk</h1>
            </div>

              <h1 className="text-2xl font-serif font-bold pt-2 text-gray-900">Welcome Back</h1>
              <p className="text-sm text-gray-400">Sign in to your account</p>

              <div className="w-full mt-3 mb-3 rounded-2xl">
                <button className="w-1/3 rounded-2xl pt-1 pb-1 text-gray-400 text-sm hover:bg-gray-900 hover:text-gray-300 focus:text-gray-200 focus:bg-gray-900 cursor-pointer transition-all ">Admin</button>
                <button className="w-1/3 rounded-2xl pt-1 pb-1 text-gray-400 text-sm hover:bg-gray-900 hover:text-gray-300 focus:text-gray-200 focus:bg-gray-900 cursor-pointer transition-all ">Client</button>
                <button className="w-1/3 rounded-2xl pt-1 pb-1 text-gray-400 text-sm hover:bg-gray-900 hover:text-gray-300 focus:text-gray-200 focus:bg-gray-900 cursor-pointer transition-all ">Lawyer</button>
              </div>

              <form action="">
                <label htmlFor="email" className="text-l">Email</label>
                <input type="email" id="email" placeholder=" ✉  you@example.com" className="w-full p-1 border-1 border-gray-100 outline-gray-900"/>

                <label htmlFor="password" className="text-l">Password</label>
                <input type="password" id="password" placeholder="🔒 ********"  className="w-full p-1 border-gray-100 border-1 outline-gray-900"/>

                <button className="w-full bg-blue-600 rounded-md mt-2 p-1 text-sm text-gray-300 hover:bg-sky-700 hover:text-white cursor-pointer">Sign In</button>
              </form>

              <p className="text-sm text-gray-400 mt-5">Don't have an account? <span className="text-blue-600 hover:text-blue-700 hover:font-bold cursor-pointer"> Register </span> </p>

              <div className="w-full mt-5 p-2 border-2 border-gray-200 rounded-lg pl-3">
                <h1 className="font-bold text-sm text-gray-500">Demo Credentials</h1>
                <p className="text-sm text-gray-500">Admin: admin@legal.com</p>
                <p className="text-sm text-gray-500">Client: client@legal.com</p>
                <p className="text-sm text-gray-500">Lawyar: lawyar@legal.com</p>
                <p className="text-sm text-gray-500">Password: any</p>
              </div>
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
  );
};

export default Login;
