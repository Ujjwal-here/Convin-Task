import React, { useRef } from "react";
import { useSelector } from "react-redux";

const Pagination = ({ setCurrentPage, currentPage }) => {
  const { usersData, total_users_count } = useSelector(
    (state) => state.user.user
  );
  const pages = [];
  for (let i = 1; i <= total_users_count; i++) {
    pages.push(i);
  }
  const pageChangeHandler = (e) => {
    console.log(e);
    setCurrentPage(e.target.id);
  };

  return (
    <div className="text-center" onClick={pageChangeHandler}>
      {pages.map((page) => {
        return (
          <button
            id={page}
            className={`bg-[#FEEF10] p-6 rounded mx-4 my-4 text-xl `}
            key={page}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
