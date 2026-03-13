const Login = () => {
  return (
    <>
      <div className="w-full h-screen bg-gray-300 flex">
        <div className="w-1/2 h-screen">
          
              <i className="fa-solid fa-scale-balanced text-blue-500 text-2xl"></i>
              <h1 className="text-gray-900 font-bold text-center">LegalDesk</h1>

              <h1>Welcome Back</h1>
              <p>sing in to your account</p>

              <form action="">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="you@example.com"/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="********" />

                <button>Sign IN</button>
              </form>

              <p>Don't have an account? <span> Register </span> </p>
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
