import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getUser } from "./redux/UserSlice";
import Pagination from "./components/Pagination";
import SingleUser from "./components/SingleUser";
import { ClipLoader } from "react-spinners";

function App() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(null);

  const { isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#F8E667" size={150} />
        </div>
      ) : (
        <div className="my-20">
          <Pagination setCurrentPage={setCurrentPage}  currentPage={currentPage} />
          <SingleUser currentPage={currentPage} />
        </div>
      )}
    </>
  );
}

export default App;
