import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../store/UserDetailSlice";
import { getRoommateListRespone } from "../http";
import { Link, useNavigate } from "react-router-dom";

const GuestRouteForm = () => {
  const { userName, age, target_location, interests, lookingFor } = useSelector(
    (state) => state.UserDetailSlice
  );
  const [userNameInInput, setUserNameInInput] = useState("");
  const [userAgeInInput, setUserAgeInInput] = useState("");
  const [targetLocationInInput, setTargetLocationInInput] = useState("");
  const [lookingForInInput, setLookingForInInput] = useState("flat+roommate");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitUserDetails = () => {
    dispatch(
      setUserDetails({
        userdto: userNameInInput,
        age_var: userAgeInInput,
        target_locationvar: targetLocationInInput,
        interests_var: "",
        lookingFor_var: lookingForInInput,
      })
    );

    const userDetail = {
      userName: userNameInInput,
      age: userAgeInInput,
      targetLocation: targetLocationInInput,
      interest: "",
      lookingFor: lookingForInInput,
    };
    // useSelector((state) => console.log((state.UserDetailSlice)));
    navigate("/home");
    // console.log(userDetail);
    // getRoommateListRespone(userDetail);
  };

  return (
    <>
      <div className="flex-col min-h-[90vh] w-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          {/* <h1 className="mb-1 font-bold text-3xl flex gap-1 items-baseline font-mono">Form UI<span className="text-sm text-purple-700">form showcase</sm></h1> */}
          <h1 className="mb-1 font-bold sm:text-2xl lg:text-3xl flex gap-1 items-baseline font-mono">
            Personal Details
            {/* </span> */}
          </h1>
        </div>
        <span className="w-50">
          don't worry we don't save any private information without confirmation
        </span>
        <div className="flex flex-col max-w- gap-2 py-10 px-8 sm:grid-cols-2 bg-white rounded-md border-t-4 border-purple-400 min-w-[25vw]">
          <div
            id="name"
            onBlur={() => {
              console.log("Hello");
            }}
            className=""
          >
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
              onBlur={(e) => {
                setUserNameInInput(e.target.value);
              }}
            />
          </div>
          <div id="age" className="">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="19"
              required
              onBlur={(e) => {
                setUserAgeInInput(e.target.value);
              }}
            />
          </div>
          <div id="target_location" className="">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Target Location
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mumbai"
              required
              onBlur={(e) => {
                setTargetLocationInInput(e.target.value);
              }}
            />
          </div>

          <div className="flex items-center">
            <input
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-purple-600"
              onClick={() => {
                setLookingForInInput("flat");
              }}
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Looking for flat
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-purple-600"
              onClick={() => {
                setLookingForInInput("roommates");
              }}
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Looking for roommate
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 accent-purple-600"
              onClick={() => {
                setLookingForInInput("flat+roommate");
              }}
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Looking for flat + roommate
            </label>
          </div>

          <div className="flex flex-row justify-center ">
            <button
              className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
              onClick={submitUserDetails}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestRouteForm;
