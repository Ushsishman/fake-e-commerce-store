import RSidebarHeader from "../components/RightSidebar/RSidebarHeader";
import { useSelector } from "react-redux";
import FavouritePart from "../components/RightSidebar/FavouritePart/FavouritePart";
import BasketPart from "../components/RightSidebar/BasketPart/BasketPart";
import { useDispatch } from "react-redux";
import { close } from "../features/sidebarSlice";
import { motion } from "framer-motion";

const Sidebar = () => {
  {
    /* THIS CHECKS FOR WHAT IS THE STATE OF BASKET MENUS,IF YOU CLICKED FAV MENU,
    IT WILL SHOW YOU FAV MENU,YOU CAN CHANGE THE STATE IN RSIDEBARHEADER */
  }
  const currentMenu = useSelector((state) => state.basket.current);
  const dispatch = useDispatch();
  {
    /* THIS IS WHERE USERS CAN SEE WHAT THEY ADDED TO FAVOURITE OR BASKET */
  }
  return (
    <div className="h-screen w-full fixed top-0 right-0 z-10">
      <motion.div
        initial={{ translateX: 200 }}
        animate={{ translateX: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#F2E7DC] h-screen w-full md:w-3/6 lg:w-2/6 absolute right-0">
        <RSidebarHeader />
        <div className=" text-[#0D0D0D]">
          {currentMenu == "basket" ? <BasketPart /> : <FavouritePart />}
        </div>
      </motion.div>
      <div
        className="bg-white/50 w-full h-screen"
        onClick={() => dispatch(close("basketAndFavMenu"))}></div>
    </div>
  );
};
export default Sidebar;
