const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-gray-400 pt-6 px-8 bg-gray-200 shadow-lg rounded-md" style={{ width: '25.25rem', height: '25.5rem' }}>
        <center>
          <h1 className="font-bold text-lg mb-4">Contact Us</h1>
          <input
            type="text"
            className="border border-black w-full px-3 py-2 mb-3 rounded"
            placeholder="Enter name"
          />
          <input
            type="text"
            className="border border-black w-full px-3 py-2 mb-3 rounded"
            placeholder="Enter message"
          />
          <input
            type="email"
            className="border border-black w-full px-3 py-2 mb-3 rounded"
            placeholder="Enter Email"
          />
          <input
            type="password"
            className="border border-black w-full px-3 py-2 mb-4 rounded"
            placeholder="Enter Password"
          />
          <button className="border border-black px-4 py-2 hover:bg-white rounded mb-4">
            Submit
            </button>
        </center>
      </div>
    </div>
  );
};

export default Contact;