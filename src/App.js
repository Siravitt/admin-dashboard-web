function App() {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 bg-[rgb(31,41,55)]">
      <div className="w-full h-20 px-10 border-b flex items-center gap-16 text-white font-bold sm:h-fit sm:px-0 sm:py-4 sm:flex-col sm:gap-4">
        <div className="text-3xl">Admin Dashboard</div>
        <div className="hover:text-blue-300">Order</div>
        <div className="hover:text-blue-300">Payment</div>
      </div>
      <div className="w-full px-10 flex flex-col sm:px-0">
        <div className="flex bg-white rounded-lg sm:flex-col sm:items-center sm:gap-2 sm:px-2 sm:mx-2">
          <div className="w-1/3 mx-4 my-4 flex flex-col gap-4 py-4 items-center rounded-lg bg-gradient-to-b from-blue-500 to-blue-300 border-b-4 border-blue-500 shadow-xl sm:w-full sm:my-2">
            <div className="text-xl text-white font-bold">Balance</div>
            <div className="text-lg text-white font-bold">10,000 THB</div>
          </div>
          <div className="w-1/3 mx-4 my-4 flex flex-col gap-4 py-4 items-center rounded-lg bg-gradient-to-b from-green-500 to-green-300 border-b-4 border-green-500 shadow-xl sm:w-full sm:my-2 bg-red-400">
            <div className="text-xl text-white font-bold">Profit</div>
            <div className="text-lg text-white font-bold">10,000 THB</div>
          </div>
          <div className="w-1/3 mx-4 my-4 flex flex-col gap-4 py-4 items-center rounded-lg bg-gradient-to-b from-red-500 to-red-300 border-b-4 border-red-500 shadow-xl sm:w-full sm:my-2 bg-red-400">
            <div className="text-xl text-white font-bold">Outcome</div>
            <div className="text-lg text-white font-bold">10,000 THB</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
