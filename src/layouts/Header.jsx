import { CiShoppingBasket } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { open } from "../features/sidebarSlice";
import { motion } from "framer-motion";

const Header = () => {
  const dispatch = useDispatch();
  {
    /* THIS IS HEADER LAYOUT */
  }
  return (
    <nav className="bg-transparent text-[#0D0D0D] px-8 lg:px-24">
      <ul className="h-20  flex flex-row items-center justify-between">
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}>
          <GiHamburgerMenu
            className="cursor-pointer"
            size="2em"
            color="#0D0D0D"
            onClick={() => dispatch(open("sidebarMenu"))}
          />
        </motion.li>
        <li className="text-4xl  font-bold">
          <Link to="/">Fake Store</Link>
        </li>
        <motion.li
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}>
          <CiShoppingBasket
            className="cursor-pointer"
            size="2em"
            color="#0D0D0D"
            onClick={() => dispatch(open("basketAndFavMenu"))}
          />
        </motion.li>
      </ul>
    </nav>
  );
};
export default Header;
