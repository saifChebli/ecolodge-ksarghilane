import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const BookingCharts = () => {
  const bookingData = [
    { month: 'Jan', bookings: 65, revenue: 45000 },
    { month: 'Feb', bookings: 78, revenue: 52000 },
    { month: 'Mar', bookings: 90, revenue: 61000 },
    { month: 'Apr', bookings: 81, revenue: 58000 },
    { month: 'May', bookings: 95, revenue: 67000 },
    { month: 'Jun', bookings: 110, revenue: 78000 },
    { month: 'Jul', bookings: 125, revenue: 89000 },
    { month: 'Aug', bookings: 118, revenue: 84000 },
    { month: 'Sep', bookings: 102, revenue: 72000 },
    { month: 'Oct', bookings: 88, revenue: 63000 },
    { month: 'Nov', bookings: 75, revenue: 54000 },
    { month: 'Dec', bookings: 92, revenue: 68000 }
  ];

  const occupancyData = [
    { day: 'Mon', occupancy: 85 },
    { day: 'Tue', occupancy: 78 },
    { day: 'Wed', occupancy: 92 },
    { day: 'Thu', occupancy: 88 },
    { day: 'Fri', occupancy: 95 },
    { day: 'Sat', occupancy: 98 },
    { day: 'Sun', occupancy: 82 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
              {entry.name === 'revenue' && '$'}
              {entry.name === 'occupancy' && '%'}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Booking Trends */}
      <div className=" rounded-lg border border-gray-300 shadow-lg">
        <div className="p-6 border-b border-gray-300">
          <h3 className="text-lg font-semibold">Booking Trends</h3>
          <p className="text-sm  mt-1">Monthly booking statistics</p>
        </div>
        <div className="p-6">
          <div className="w-full h-64" aria-label="Monthly Booking Trends Line Chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bookingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis 
                  dataKey="month" 
                  stroke="black"
                  fontSize={12}
                />
                <YAxis 
                  stroke="black"
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="bookings" 
                  stroke="#1E40AF" 
                  strokeWidth={2}
                  dot={{ fill: '#1E40AF', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#1E40AF', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Weekly Occupancy */}
      <div className=" rounded-lg border border-gray-300 shadow-lg">
        <div className="p-6 border-b border-gray-300">
          <h3 className="text-lg font-semibold">Weekly Occupancy</h3>
          <p className="text-sm mt-1">Current week occupancy rates</p>
        </div>
        <div className="p-6">
          <div className="w-full h-64" aria-label="Weekly Occupancy Bar Chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="day" 
                  stroke="var(--color-text-secondary)"
                  fontSize={12}
                />
                <YAxis 
                  stroke="var(--color-text-secondary)"
                  fontSize={12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="occupancy" 
                  fill="#1E40AF"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCharts;