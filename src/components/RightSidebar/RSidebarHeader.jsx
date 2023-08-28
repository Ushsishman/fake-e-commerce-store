import { useDispatch } from "react-redux";
import { close } from "../../features/sidebarSlice";
import { setCurrent } from "../../features/basketSlice";
import { CiShoppingBasket } from "react-icons/ci";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const RSidebarHeader = () => {
  const dispatch = useDispatch();
  const productMenu = useSelector((state) => state.product[1]);
  const favMenu = useSelector((state) => state.product[0]);
  {
    /* THIS IS HEADER PART OF RIGHT SIDEBAR,YOU CAN CHOOSE WHAT WILL SHOW IN MAIN PART OF RIGHT SIDEBAR */
  }
  return (
    <div className="h-16 bg-[#A9D9D0] text-[#0D0D0D] flex items-center">
      <ul className="h-14 w-full bg-[#F2E7DC] flex flex-row items-center justify-around">
        <li
          className="py-2 flex flex-row cursor-pointer"
          onClick={() => dispatch(setCurrent("basket"))}>
          <CiShoppingBasket size="1.5em" />
          <p className="ml-1 font-semibold">BASKET ({productMenu.length})</p>
        </li>
        <li
          className="py-3 px-6 flex flex-row border-x border-[#0D0D0D] cursor-pointer"
          onClick={() => dispatch(setCurrent("favourites"))}>
          <AiOutlineHeart size="1.5em" />
          <p className="ml-1 font-semibold">FAVOURİTES ({favMenu.length})</p>
        </li>
        <li className="py-2 mr-4 flex flex-row">
          <button onClick={() => dispatch(close("basketAndFavMenu"))}>
            <AiOutlineClose size="1.5em" />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default RSidebarHeader;
