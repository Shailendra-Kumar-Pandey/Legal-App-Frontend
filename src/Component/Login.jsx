const Login = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-300 flex">
        <div className="w-1/2 h-screen flex justify-center items-center">          
          <div className="w-1/2 h-1 flex flex-col justify-center items-center">
            <div className="flex gap-2 font-serif text-xl">
              <i className="fa-solid fa-scale-balanced text-blue-500 text-xl pt-1"></i>
              <h1 className="text-gray-900 font-bold text-center">LegalDesk</h1>
            </div>

              <h1 className="text-2xl font-serif font-bold pt-2 text-gray-900">Welcome Back</h1>
              <p className="text-sm text-gray-400">Sign in to your account</p>

              <div className="w-full bg-amber-200 mt-3 mb-3 pt-2 pb-2">
                <button className="w-1/3 bg-red-400">Admin</button>
                <button className="w-1/3">Client</button>
                <button className="w-1/3">Laywer</button>
              </div>

              <form action="">
                <label htmlFor="email" className="text-l">Email</label>
                <input type="email" id="email" placeholder=" ✉  you@example.com" className="w-full p-1 border-1 border-gray-100 outline-gray-900"/>

                <label htmlFor="password" className="text-l">Password</label>
                <input type="password" id="password" placeholder="🔒 ********"  className="w-full p-1 border-gray-100 border-1 outline-gray-900"/>

                <button className="w-full bg-blue-600 rounded-md mt-2 p-1 text-sm text-gray-300">Sign In</button>
              </form>

              <p className="text-sm text-gray-400 mt-5">Don't have an account? <span className="text-blue-600"> Register </span> </p>
          </div>
        </div>

        <div className="w-1/2 h-screen bg-gray-900 flex justify-center items-center">
          <div className="w-1/2 h-screen flex justify-center items-center flex-col">
            <i className="fa-solid fa-scale-balanced text-blue-500 text-2xl"></i>
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
