import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const SingleUser = ({ currentPage }) => {
  const { usersData, total_users_count } = useSelector(
    (state) => state.user.user
  );

  const filteredUser = usersData?.filter((user) => user?.id == currentPage);


  return (
    <>
      {currentPage === null ? (
        <div className="text-center text-white text-3xl font-black my-10">
          Click on the page number to see the user
        </div>
      ) : (
        <div className="bg-[#29282B] my-10 p-4 rounded-sm mx-10 lg:mx-80">
          <img className="w-full sm:w-72 md:w-80 lg:w-96" src={filteredUser[0]?.avatar} alt="Profile" />
          <p className="text-[#FEEF10] font-black text-3xl my-4">
            {filteredUser[0]?.first_name}{" "}
            <span className="text-white">{filteredUser[0]?.last_name}</span>
          </p>
          <p className="text-white text-2xl">{filteredUser[0]?.email}</p>
        </div>
      )}
    </>
  );
};

export default SingleUser;
