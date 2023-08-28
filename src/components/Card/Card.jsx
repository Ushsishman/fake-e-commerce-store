/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const Card = ({ category, img, nav }) => {
  const navigate = useNavigate();
  {
    /* THIS DYNAMIC CARD IS SHOWN IN HOME PAGE */
  }
  return (
    <div
      className={`w-72 h-300 lg:w-1/4 md:h-30rem lg:h-30rem my-4 mx-8 bg-cover bg-center ${img} flex flex-col justify-end text-center`}>
      <div className="mb-3 md:mb-6 lg:mb-6">
        <p className="mb-1 md:mb-4 lg:mb-4 text-[#0D0D0D] text-xl md:text-2xl lg:text-2xl font-semibold">
          {category}
        </p>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate(nav)}
          className="bg-transparent border border-[#0D0D0D] text-[#0D0D0D] py-1.5 px-4 text-sm rounded-md hover:bg-[#F2E7DC] hover:text-[#0D0D0D]">
          View Products
        </motion.button>
      </div>
    </div>
  );
};
export default Card;
