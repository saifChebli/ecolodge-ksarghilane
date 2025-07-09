import { useEffect } from "react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { api } from "../../../api";
import dayjs from "dayjs";

const BookingCharts = () => {
  const [data, setData] = useState([]);
  const [dataWeekly, setDataWeekly] = useState([]);
  const fetchBookingStats = async () => {
    try {
      const res = await api.get("/reservation/stats/daily-bookings");
      setData(res.data);
    } catch (err) {
      console.error("Failed to fetch booking stats", err);
    }
  };

  useEffect(() => {
    fetchBookingStats();
  }, []);

  
  const fetchWeeklyOccupancy = async () => {
    try {
      const res = await api.get("/reservation/stats/weekly-occupancy");
      setDataWeekly(res.data);
    } catch (err) {
      console.error("Error fetching weekly occupancy", err);
    }
  };

  useEffect(() => {
    fetchWeeklyOccupancy();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Booking Trends */}
      <div className=" rounded-lg border border-gray-300 shadow-lg">
        <div className="p-6 border-b border-gray-300">
          <h3 className="text-lg font-semibold">Booking Trends</h3>
          <p className="text-sm  mt-1">Daily Bookings Trend</p>
        </div>
        <div className="p-6">
          <div
            className="w-full h-64"
            aria-label="Monthly Booking Trends Line Chart"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 10, right: 20, bottom: 0, left: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3"  />
                <XAxis
                  dataKey="date"
                  tickFormatter={(str) => dayjs(str).format("MMM D")}
                />
                <YAxis allowDecimals={false} />
                <Tooltip formatter={(value) => `${value} bookings`}   labelFormatter={(label) => dayjs(label).format("dddd, MMMM D")}  />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={{ r: 3 }}
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
           <BarChart data={dataWeekly} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis unit="%" domain={[0, 100]} />
          <Tooltip formatter={(value) => `${value}% occupied`} />
          <Bar dataKey="occupancyRate" fill="#82ca9d" radius={[4, 4, 0, 0]} />
        </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCharts;
