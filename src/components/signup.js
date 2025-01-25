
const SignUpPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md">
          {/* Header */}
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create Your Account
          </h1>
  
          {/* Signup Form */}
          <form>
            {/* Username Input */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your username"
                required
              />
            </div>
  
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>
  
            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                required
              />
            </div>
  
            {/* Confirm Password Input */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Confirm your password"
                required
              />
            </div>
  
            {/* Signup Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold shadow-md"
              >
                Sign Up
              </button>
            </div>
          </form>
  
          {/* Footer */}
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="#signin"
              className="text-green-500 font-semibold hover:underline"
            >
              sigin
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default SignUpPage;
  