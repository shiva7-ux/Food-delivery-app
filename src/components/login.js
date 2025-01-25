const LoginPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Login to Your Account</h1>
          
          {/* Login Form */}
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>
  
            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                required
              />
            </div>
  
            {/* Login Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg font-semibold shadow-md"
              >
                Login
              </button>
            </div>
          </form>
  
          {/* Footer */}
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-500 font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default LoginPage;












  //other form
  
  