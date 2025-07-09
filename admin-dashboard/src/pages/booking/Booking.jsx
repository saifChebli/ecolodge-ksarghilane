import { Dropdown, Menu } from "antd";
import { MoreVertical, Eye, Check, UserRoundCheck , X } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../api";
import ReservationDetailsModal from "./components/ReservationDetailsModal";

const Booking = () => {
  const [bookingList, setBookingList] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const openDetailsModal = (booking) => {
    setSelectedBooking(booking);
    setDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setDetailsModalOpen(false);
    setSelectedBooking(null);
  };

  const getBookings = async () => {
    try {
      const response = await api.get("/reservation");
      setBookingList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);


  const getStatusBadge = (status) => {
    const statusConfig = {
      CHECKED_IN: {
        color: "bg-blue-100 text-blue-700",
        label: "Checked In",
      },
      PENDING: {
        color: "bg-orange-100 text-orange-700",
        label: "Pending",
      },
      ACCEPTED: {
        color: "bg-green-100 text-green-700",
        label: "Accepted",
      },
      DECLINED: {
        color: "bg-red-100 text-red-700",
        label: "Declined",
      },
    };

    const config = statusConfig[status] || statusConfig["PENDING"];

    return (
      <span
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color}`}
      >
        {config.label}
      </span>
    );
  };


  const handleAccept = async (id) => {
    await api.patch(`/reservation/${id}/status`, { status: "ACCEPTED" });
    getBookings();
  };

  const handleDecline = async (id) => {
    await api.patch(`/reservation/${id}/status`, { status: "DECLINED" });
    getBookings();
  };

  const handleChecked = async (id) => {
    await api.patch(`/reservation/${id}/status`, { status: "CHECKED_IN" });
    getBookings();
  };

  const actionMenu = (booking) => (
    <Menu>
      <Menu.Item
        key="view"
        icon={<Eye size={16} />}
        onClick={() => openDetailsModal(booking)}
      >
        View Details
      </Menu.Item>
      <Menu.Item
        key="checkedIn"
        icon={<UserRoundCheck size={16} />}
        onClick={() => handleChecked(booking.id)}
      >
        Checked In
      </Menu.Item>
      <Menu.Item
        key="accept"
        icon={<Check size={16} />}
        onClick={() => handleAccept(booking.id)}
      >
        Accept
      </Menu.Item>
      <Menu.Item
        key="decline"
        icon={<X size={16} />}
        onClick={() => handleDecline(booking.id)}
      >
        Decline
      </Menu.Item>
    </Menu>
  );

  // Filter Booking by room type and status and guest name

  const [filterRoomType, setFilterRoomType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterGuestName, setFilterGuestName] = useState("");

  const filteredBookings = bookingList.filter((booking) => {
    const roomTypeMatches =
      filterRoomType === "all" || booking.roomType === filterRoomType;
    const statusMatches =
      filterStatus === "all" || booking.status === filterStatus;
    const guestNameMatches =
      filterGuestName === "" ||
      (booking.fullname &&
        booking.fullname.toLowerCase().includes(filterGuestName.toLowerCase()));

    return roomTypeMatches && statusMatches && guestNameMatches;
  });

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 mb-8">
          <div className="flex items-center">
            <label htmlFor="filter" className="mr-2">
              Booking Status:
            </label>
            <select
              id="filterStatus"
              className="border border-gray-300 rounded-md px-2 py-1"
              onChange={(e) => setFilterStatus(e.target.value)}
              value={filterStatus}
            >
              <option value="all">All</option>
              <option value="PENDING">Pending</option>
              <option value="CHECKED_IN">Checked In</option>
              <option value="ACCEPTED">Accepted</option>
              <option value="DECLINED">Declined</option>
            </select>
          </div>
          {/* Filter by Room type */}
          <div className="flex items-center">
            <label htmlFor="filter" className="mr-2">
              Room Type:
            </label>
            <select
              id="filterRoomType"
              className="border border-gray-300 rounded-md px-2 py-1"
              onChange={(e) => setFilterRoomType(e.target.value)}
              value={filterRoomType}
            >
              <option value="all">All</option>
              <option value="STANDARD">Standard</option>
              <option value="SUITE">Suite</option>
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
              onChange={(e) => setFilterGuestName(e.target.value)}
              value={filterGuestName}
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
                Adults
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Children
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Room type
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
            {filteredBookings?.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-secondary-50 transition-fast"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                  {booking.reservationCode}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium ">
                      {booking.fullname ? booking.fullname : "Unknown Guest"}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm ">{booking.adults}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm ">{booking.children}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm ">{booking.roomType}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  {new Date(booking.checkInDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(booking.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                  {booking.amount ? `$${booking.amount}` : "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Dropdown overlay={actionMenu(booking)} trigger={["click"]}>
                    <button className="text-gray-600 hover:text-black">
                      <MoreVertical size={18} />
                    </button>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReservationDetailsModal
        open={detailsModalOpen}
        onClose={closeDetailsModal}
        reservation={selectedBooking}
      />
    </div>
  );
};

export default Booking;
