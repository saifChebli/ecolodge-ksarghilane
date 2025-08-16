"use client";

import { DatePicker, Divider, Drawer, Input, Spin } from "antd";
import dayjs from "dayjs";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../api";
import { set, z } from "zod";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useTranslation } from "../lib/i18n";
const ReservationForm = ({ open, onClose }) => {
  const { t } = useTranslation();
  const [adultsCounter, setAdultsCounter] = useState(0);
  const [childrenCounter, setChildrenCounter] = useState(0);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [roomType, setRoomType] = useState("STANDARD");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Zod form validation

  const reservationSchema = z.object({
    fullname: z.string(),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(4, { message: "Phone number too short" }),
    roomType: z.enum(["STANDARD", "SUITE"]),
    adults: z.number().int().nonnegative(),
    children: z.number().int().nonnegative(),
    checkInDate: z.date(),
    checkOutDate: z.date(),
  });

  const handlePlusAdult = () => {
    setAdultsCounter(adultsCounter + 1);
  };
  const handleMinusAdult = () => {
    if (adultsCounter > 0) {
      setAdultsCounter(adultsCounter - 1);
    }
  };
  const handlePlusChildren = () => {
    setChildrenCounter(childrenCounter + 1);
  };
  const handleMinusChildren = () => {
    if (childrenCounter > 0) {
      setChildrenCounter(childrenCounter - 1);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "fullname") {
      setFullname(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      fullname,
      email,
      phone,
      roomType,
      adults: adultsCounter,
      children: childrenCounter,
      checkInDate: checkInDate?.toDate?.(),
      checkOutDate: checkOutDate?.toDate?.(),
    };

    const validatedData = reservationSchema.safeParse(data);

    console.log(validatedData.error)
    try {
      setIsLoading(true);
      const response = await api.post("/", validatedData);
      if (response.status === 201) {
        toast.success("Reservation successful sent ", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        onClose();
        setFullname("");
        setEmail("");
        setPhone("");
        setAdultsCounter(0);
        setChildrenCounter(0);
        setRoomType("STANDARD");
        setCheckInDate("");
        setCheckOutDate("");
      }
    } catch (error) {
      console.log(error);
      toast.error("Reservation failed", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }finally {
      setIsLoading(false);
    }
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };

  const contentStyle = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  color: 'rgba(0, 0, 0, 0.85)',
  borderRadius: 4,
};
const content = <div style={contentStyle} />;

  return (
    <div>
      <Drawer
        title={`Ecolodge Ksar Ghillane - ${t('reservation')}`}
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      > 

      {
        isLoading && (
          <Spin tip="Loading" size="large">
              {content}
          </Spin>
        )

      }
    
        {/* Form for reservation */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="space-y-2">
            <label htmlFor="fullname" className="block text-sm font-semibold">
               {t('fullName')}{" "}
            </label>
            <Input
              id="fullname"
              name="fullname"
              type="text"
              placeholder={t('enterFullName')}
              required
              value={fullname}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-200 focus:border-gray-400 outline-0 p-2 "
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold">
              {t('emailAddress')}{" "}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('enterEmailAddress')}
              required
              value={email}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-200 focus:border-gray-400 outline-0 p-2 "
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-semibold">
              {t('phoneNumber')}{" "}
            </label>
            <PhoneInput
              country={'tn'}
        value={phone}
        onChange={(value) => setPhone(value)}
        inputProps={{
          name: 'phone',
          required: true,
          id: 'phone',
        }}
        inputClass="!w-full"
        containerClass="!w-full"
        enableSearch
            />
          </div>
          <Divider />
          <div className="space-y-2">
            <label htmlFor="checkin" className="block text-sm font-semibold">
              {t('checkIn')} | {t('checkOut')}
            </label>
            <DatePicker.RangePicker
              disabledDate={disabledDate}
              value={
                checkInDate && checkOutDate
                  ? [dayjs(checkInDate), dayjs(checkOutDate)]
                  : []
              }
              onChange={(dates) => {
                if (dates) {
                  setCheckInDate(dates[0]);
                  setCheckOutDate(dates[1]);
                } else {
                  setCheckInDate(null);
                  setCheckOutDate(null);
                }
              }}
              className="w-full"
            />
          </div>

          {/* Room Type */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="roomType" className="font-semibold">
              {t('roomType')}
            </label>
            <select
              onChange={(e) => setRoomType(e.target.value)}
              name="roomType"
              id=""
              className="w-full rounded border border-gray-300 focus:border-blue-400 outline-0 p-[6px] "
            >
              <option value="STANDARD">{t('standard')}</option>
              <option value="SUITE">{t('suite')}</option>
            </select>
          </div>

           <div className="flex flex-col space-y-2">
            <label htmlFor="visitType" className="font-semibold">
              {t('visitType')}
            </label>
            <select
              // onChange={(e) => setRoomType(e.target.value)}
              name="visitType"
              id=""
              className="w-full rounded border border-gray-300 focus:border-blue-400 outline-0 p-[6px] "
            >
              <option value="STANDARD">{t('restAndDiscovery')}</option>
              <option value="SUITE">{t('adventureExpedition')}</option>
            </select>
          </div>
          {/* Counter for how many room and type standard or suite , number of adults and children */}

          <div>
            <label htmlFor="guests" className="block text-sm font-semibold">
              {t('guests')}
            </label>
            <div className="flex flex-col space-y-4 my-4">
              <div className="flex items-center justify-between mx-0">
                <h2>{t('adults')}</h2>
                <div className="flex items-center space-x-2">
                  <PlusCircleIcon
                    onClick={handlePlusAdult}
                    className="w-6 h-6 text-gray-600  hover:text-black cursor-pointer"
                  />
                  <p>{adultsCounter}</p>
                  <MinusCircleIcon
                    onClick={handleMinusAdult}
                    className="w-6 h-6 text-gray-600  hover:text-black cursor-pointer "
                  />
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <h2>{t('children')}</h2>
                <div className="flex items-center space-x-2">
                  <PlusCircleIcon
                    onClick={handlePlusChildren}
                    className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer"
                  />
                  <p>{childrenCounter}</p>
                  <MinusCircleIcon
                    onClick={handleMinusChildren}
                    className="w-6 h-6 text-gray-600  hover:text-black cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#000000] cursor-pointer text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            {isLoading ? t('loading') : t('reserveNow')}
          </button>
        </form>
      </Drawer>
    </div>
  );
};

export default ReservationForm;
