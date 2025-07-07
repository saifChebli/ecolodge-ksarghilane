'use client';

import { Modal, Descriptions, Tag } from "antd";
import dayjs from "dayjs";

const statusColors = {
  PENDING: "orange",
  ACCEPTED: "green",
  DECLINED: "red",
};

const ReservationDetailsModal = ({ open, onClose, reservation }) => {
  if (!reservation) return null;

  return (
    <Modal
      title={`Reservation #${reservation.reservationCode || reservation.id}`}
      open={open}
      onCancel={onClose}
      footer={null}
      centered
    >
      <Descriptions
        bordered
        column={1}
        size="middle"
        labelStyle={{ fontWeight: 600 }}
      >
        <Descriptions.Item label="Guest Name">
          {reservation.fullname || "N/A"}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          {reservation.email}
        </Descriptions.Item>
        <Descriptions.Item label="Phone">
          {reservation.phone}
        </Descriptions.Item>
        <Descriptions.Item label="Room Type">
          {reservation.roomType}
        </Descriptions.Item>
        <Descriptions.Item label="Guests">
          {reservation.adults} Adults, {reservation.children} Children
        </Descriptions.Item>
        <Descriptions.Item label="Check-in">
          {dayjs(reservation.checkInDate).format("DD MMM YYYY")}
        </Descriptions.Item>
        <Descriptions.Item label="Check-out">
          {dayjs(reservation.checkOutDate).format("DD MMM YYYY")}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Tag color={statusColors[reservation.status] || "blue"}>
            {reservation.status}
          </Tag>
        </Descriptions.Item>
        {/* {reservation.notes && (
          <Descriptions.Item label="Notes">{reservation.notes}</Descriptions.Item>
        )} */}
      </Descriptions>
    </Modal>
  );
};

export default ReservationDetailsModal;
