import React, { useState, useEffect } from 'react';
import MetricCard from './components/MetricCard';
// import RecentBookingsTable from './components/RecentBookingsTable';
// import RoomStatusOverview from './components/RoomStatusOverview';
// import QuickActions from './components/QuickActions';
import BookingCharts from './components/BookingCharts';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const dashboardMetrics = [
    {
      title: "Total Rooms",
      value: "88",
      change: "+2 this month",
      changeType: "positive",
      icon: "Home",
      color: "primary"
    },
    {
      title: "Current Guests",
      value: "145",
      change: "+12 today",
      changeType: "positive",
      icon: "Users",
      color: "accent"
    },
    {
      title: "Occupancy Rate",
      value: "74%",
      change: "+3% this week",
      changeType: "positive",
      icon: "TrendingUp",
      color: "warning"
    },
    {
      title: "Pending Bookings",
      value: "8",
      change: "2 urgent",
      changeType: "neutral",
      icon: "Clock",
      color: "error"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="p-6 space-y-6">
        {/* Welcome Header */}
        <div className=" rounded-lg shadow border border-gray-300 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome back,</h1>
              <p className=" mt-1">
                Here's what's happening at your hotel today - {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            <div className="mt-4 sm:mt-0 text-right">
              <p className="text-sm">Current Time</p>
              <p className="text-lg font-semibold">
                {currentTime.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dashboardMetrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              changeType={metric.changeType}
              icon={metric.icon}
              color={metric.color}
            />
          ))}
        </div>


        {/* Charts Section */}
        <BookingCharts />
      </div>
    </div>
  );
};

export default Dashboard;