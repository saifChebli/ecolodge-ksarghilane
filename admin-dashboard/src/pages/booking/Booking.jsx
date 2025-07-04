import { Check, EyeIcon, X } from "lucide-react";
import React from "react";

const Booking = () => {
  const recentBookings = [
    {
      id: "BK001",
      guestName: "Sarah Johnson",
      roomNumber: "101",
      roomType: "Deluxe Suite",
      checkIn: "2024-01-15",
      checkOut: "2024-01-18",
      status: "confirmed",
      amount: "$450",
    },
    {
      id: "BK002",
      guestName: "Michael Chen",
      roomNumber: "205",
      roomType: "Standard Room",
      checkIn: "2024-01-16",
      checkOut: "2024-01-19",
      status: "checked-in",
      amount: "$320",
    },
    {
      id: "BK003",
      guestName: "Emma Wilson",
      roomNumber: "301",
      roomType: "Executive Suite",
      checkIn: "2024-01-17",
      checkOut: "2024-01-20",
      status: "pending",
      amount: "$680",
    },
    {
      id: "BK004",
      guestName: "David Rodriguez",
      roomNumber: "102",
      roomType: "Standard Room",
      checkIn: "2024-01-18",
      checkOut: "2024-01-21",
      status: "confirmed",
      amount: "$290",
    },
    {
      id: "BK005",
      guestName: "Lisa Anderson",
      roomNumber: "401",
      roomType: "Presidential Suite",
      checkIn: "2024-01-19",
      checkOut: "2024-01-22",
      status: "checked-in",
      amount: "$950",
    },
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      confirmed: { color: "bg-blue-100 text-primary-700", icon: "CheckCircle" },
      "checked-in": {
        color: "bg-green-100 text-success-700",
        icon: "UserCheck",
      },
      pending: { color: "bg-orange-100 text-warning-700", icon: "Clock" },
      cancelled: { color: "bg-red-100 text-error-700", icon: "XCircle" },
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
      <span
        className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${config.color}`}
      >
        <span className="capitalize">{status.replace("-", " ")}</span>
      </span>
    );
  };
  return (
    <div className="p-6">
      <div className="rounded-lg shadow border border-gray-300 p-6">
        <div>
          <h1 className="text-2xl font-bold">Bookings Dashboard</h1>
          <p className=" mt-1">Here you can view and manage your bookings. </p>
        </div>
      </div>
      <div className="overflow-x-auto rounded-lg shadow border border-gray-300 p-6 my-10">
        {/* Filter and search */}
        <div className="flex gap-16 items-center justify-center my-4 mb-8">
          <div className="flex items-center">
            <label htmlFor="filter" className="mr-2">
              Booking Status:
            </label>
            <select
              id="filter"
              className="border border-gray-300 rounded-md px-2 py-1"
            >
              <option value="all">All</option>
              <option value="confirmed">Confirmed</option>
              <option value="checked-in">Checked In</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          {/* Filter by Room type */}
          <div className="flex items-center">
            <label htmlFor="filter" className="mr-2">
              Room Type:
            </label>
            <select
              id="filter"
              className="border border-gray-300 rounded-md px-2 py-1"
            >
              <option value="all">All</option>
              <option value="deluxe-suite">Deluxe Suite</option>
              <option value="standard-room">Standard Room</option>
            </select>
          </div>

          <div className="flex items-center">
            <label htmlFor="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </label>
            <input
              type="text"
              id="search"
              className="border w-full border-gray-300 rounded-md px-2 py-1 mx-2"
              placeholder="Search by guest name ..."
            />
          </div>
        </div>
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Booking ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Guest
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Room
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Check-in
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {recentBookings.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-secondary-50 transition-fast"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                  {booking.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium ">
                      {booking.guestName}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium ">
                      Room {booking.roomNumber}
                    </div>
                    <div className="text-sm ">{booking.roomType}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  {new Date(booking.checkIn).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(booking.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                  {booking.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[12px] font-medium">
                  <button className="bg-gray-100 text-gray-700 px-2 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
                    View Details
                  </button>
                  <button className="bg-green-100 mx-2 text-green-700 px-2 py-2 rounded-lg cursor-pointer hover:bg-green-200">
                    Check-in
                  </button>
                  <button className="bg-red-100 text-red-700 px-2 py-2 rounded-lg cursor-pointer hover:bg-red-200">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
