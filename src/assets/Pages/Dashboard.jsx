import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Bar, Line, Doughnut } from 'react-chartjs-2'
import { ShoppingCart, Users, CreditCard } from 'lucide-react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

const Dashboard = () => {
  // Data untuk Sales Statistics (Line Chart)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [300, 350, 420, 380, 450, 500, 480, 520, 580, 550, 600, 650],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#ef4444",
        pointBorderColor: "#ef4444",
      },
    ],
  }

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: 'white',
        bodyColor: 'white',
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false
        },
        ticks: {
          font: { size: 11 },
          color: '#6b7280'
        },
        border: { display: false }
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(0,0,0,0.1)',
          drawBorder: false
        },
        ticks: {
          font: { size: 11 },
          color: '#6b7280',
          stepSize: 50
        },
        border: { display: false },
        min: 250,
        max: 650
      }
    }
  }

  // Data untuk Trends Categories (Doughnut Chart)
  const doughnutData = {
    labels: ["Clothes", "Food", "Others"],
    datasets: [
      {
        data: [38.6, 35.0, 26.4],
        backgroundColor: ["#dc2626", "#fca5a5", "#fed7d7"],
        borderWidth: 0,
        cutout: '65%',
      },
    ],
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      }
    },
  }

  // Data untuk Bar Chart "Data pelanggan baru"
  const barData = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Conversion Rate",
        data: [85, 75, 60, 80, 70, 90, 75],
        backgroundColor: "#dc2626",
        borderRadius: 2,
        barThickness: 25,
      },
    ],
  }

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: { enabled: false }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: false },
        border: { display: false }
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
        border: { display: false }
      }
    }
  }

  const topSearches = [
    { rank: 1, name: "Beras Tupi Koki", price: "Rp 120.000/sak", color: "bg-yellow-400" },
    { rank: 2, name: "Saus ABC", price: "Rp 15.000/pcs", color: "bg-orange-400" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Main Content - Full width and no header/sidebar */}
      <div>
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {/* Hawaii Logo and Welcome - Logo part removed */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div>
                {/* Logo code was here */}
                <h2 className="text-2xl font-semibold text-gray-800">Welcome, Hawai Supermarket</h2>
              </div>
            </div>
            <div className="flex space-x-4 text-sm text-gray-500">
              <span>24h</span>
              <span>97d</span>
              <span>30d</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xl">$</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">$500,000</div>
                <div className="text-sm text-gray-500">TOTAL PROFIT</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">893</div>
                <div className="text-sm text-gray-500">TOTAL SALES</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">1250</div>
                <div className="text-sm text-gray-500">TOTAL VISITORS</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">$150,00</div>
                <div className="text-sm text-gray-500">AVERAGE TICKET</div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sales Statistics */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">SALES STATISTICS</h3>
                <button className="text-blue-500 text-sm">See all...</button>
              </div>

              <div className="h-48 mb-4">
                <Line options={lineOptions} data={lineData} />
              </div>

              <div className="text-3xl font-bold text-gray-800">893</div>
            </div>

            {/* Trends Categories */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800">TRENDS CATEGORIES</h3>
                <button className="text-blue-500 text-sm">See all...</button>
              </div>

              <div className="h-48 flex items-center justify-center relative">
                <div className="w-40 h-40">
                  <Doughnut options={doughnutOptions} data={doughnutData} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-700">Clothes 38.6</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Data Pelanggan Baru */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="border-2 border-blue-300 border-dashed rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Data pelanggan baru</h3>
              <p className="text-sm text-gray-500 mb-6">Conversion Rate (%)</p>

              <div className="h-32 mb-4">
                <Bar options={barOptions} data={barData} />
              </div>
            </div>
          </div>

          {/* Top Searches */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-800">TOP SEARCHES</h3>
              <button className="text-blue-500 text-sm">See all...</button>
            </div>

            <div className="space-y-4">
              {topSearches.map((item) => (
                <div key={item.rank} className="flex items-center space-x-4">
                  <span className="text-gray-400 w-4 text-sm">{item.rank}</span>
                  <div className={`w-10 h-10 ${item.color} rounded`}></div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard