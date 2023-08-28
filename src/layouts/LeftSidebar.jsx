import LSidebarHeader from "../components/LeftSidebar/LSidebarHeader";
import Links from "../components/LeftSidebar/Links/Links";
import { useDispatch } from "react-redux";
import { close } from "../features/sidebarSlice";
import { motion } from "framer-motion";

const LeftSidebar = () => {
  const dispatch = useDispatch();

  {
    /* THIS IS LEFT SIDEBAR THAT USERS CAN WALK AROUND SITE */
  }

  return (
    <div>
      <div className="h-full w-full absolute top-0 left-0 z-10">
        <motion.div
          initial={{ translateX: -150 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#F2E7DC] text-[#0D0D0D] h-full w-full md:w-72 lg:w-72 absolute left-0">
          <LSidebarHeader />
          <Links />
        </motion.div>
        <div
          className="bg-white/50 w-full h-screen"
          onClick={() => dispatch(close("sidebarMenu"))}></div>
      </div>
    </div>
  );
};
export default LeftSidebar;
