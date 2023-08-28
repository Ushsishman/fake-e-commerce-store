import { useDispatch } from "react-redux";
import { close } from "../../features/sidebarSlice";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LSidebarHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  {
    /* THIS IS HEADER PART OF LEFT SIDEBAR */
  }
  return (
    <div className="flex flex-row justify-between m-2 border-b-2 border-black">
      <h2
        onClick={() => navigate("/")}
        className="text-3xl font-bold cursor-pointer">
        Fake Store
      </h2>
      <button
        className="flex items-center h-10"
        onClick={() => dispatch(close("sidebarMenu"))}>
        <AiOutlineClose size="1.5em" />
      </button>
    </div>
  );
};

export default LSidebarHeader;
