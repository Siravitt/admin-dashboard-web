import "chart.js/auto";
import { Chart } from "react-chartjs-2";

function App() {
  return (
    <div className="w-screen h-fit min-h-screen flex flex-col gap-4 bg-[rgb(31,41,55)]">
      <div className="w-full h-20 px-10 border-b flex items-center gap-16 text-white font-bold sm:h-fit sm:px-0 sm:py-4 sm:flex-col sm:gap-4">
        <div className="text-3xl">Admin Dashboard</div>
        <div className="hover:text-blue-300">Order</div>
        <div className="hover:text-blue-300">Payment</div>
      </div>
      <div className="w-full px-10 flex flex-col gap-4 sm:px-0">
        <div className="flex bg-white rounded-lg sm:flex-col sm:items-center sm:gap-2 sm:px-2 sm:mx-2">
          <div className="w-1/3 mx-4 my-4 flex flex-col gap-4 py-4 items-center rounded-lg bg-gradient-to-b from-blue-500 to-blue-300 border-b-4 border-blue-500 shadow-xl sm:w-full sm:my-2">
            <div className="text-xl text-gray-700 font-bold">Balance</div>
            <div className="text-lg text-black font-bold">10,000 THB</div>
          </div>
          <div className="w-1/3 mx-4 my-4 flex flex-col gap-4 py-4 items-center rounded-lg bg-gradient-to-b from-green-500 to-green-300 border-b-4 border-green-500 shadow-xl sm:w-full sm:my-2">
            <div className="text-xl text-gray-700 font-bold">Profit</div>
            <div className="text-lg text-black font-bold">10,000 THB</div>
          </div>
          <div className="w-1/3 mx-4 my-4 flex flex-col gap-4 py-4 items-center rounded-lg bg-gradient-to-b from-red-500 to-red-300 border-b-4 border-red-500 shadow-xl sm:w-full sm:my-2">
            <div className="text-xl text-gray-700 font-bold">Outcome</div>
            <div className="text-lg text-black font-bold">10,000 THB</div>
          </div>
        </div>
        <div className="w-full">
          <div className="h-10 px-4 rounded-t-lg flex items-center bg-blue-900 text-xl text-white font-bold sm:mx-2">
            Analytics
          </div>
          <div className="flex bg-white rounded-b-lg sm:flex-col sm:items-center sm:gap-2 sm:px-2 sm:mx-2">
            <div className="w-1/3 mx-4 my-4 flex flex-col gap-4 py-4 items-center rounded-lg bg-gradient-to-b from-blue-500 to-blue-300 border-b-4 border-blue-500 shadow-xl sm:w-full sm:my-2">
              <div className="text-xl text-gray-700 font-bold">Order</div>
              <div className="text-lg text-black font-bold">10,000 THB</div>
            </div>
            <div className="w-1/3 mx-4 my-4 flex flex-col gap-4 py-4 items-center rounded-lg bg-gradient-to-b from-green-500 to-green-300 border-b-4 border-green-500 shadow-xl sm:w-full sm:my-2">
              <div className="text-xl text-gray-700 font-bold">Income</div>
              <div className="text-lg text-black font-bold">10,000 THB</div>
            </div>
            <div className="w-1/3 mx-4 my-4 flex flex-col gap-4 py-4 items-center rounded-lg border-b-4 border-gray-400 shadow-xl sm:w-full sm:my-2">
              <div className="text-xl text-gray-700 font-bold">Outcome</div>
              <div className="">
                <Chart
                type="bar"
                  datasetIdKey="id"
                  data={{
                    labels: ["Jun", "Jul", "Aug"],
                    datasets: [
                      {
                        id: 1,
                        label: "Like",
                        data: [5, 6, 7],
                      },
                      // {
                      //   id: 2,
                      //   label: "Unlike",
                      //   data: [3, 2, 1],
                      // },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
