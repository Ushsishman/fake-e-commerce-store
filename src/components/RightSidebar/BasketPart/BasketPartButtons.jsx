/* eslint-disable react/prop-types */
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteFromBasket } from "../../../features/productSlice";
import { motion } from "framer-motion";

const BasketPartButtons = ({ id }) => {
  const dispatch = useDispatch();
  {
    /* THIS IS DELETE BUTTON IN BASKET */
  }
  return (
    <div>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => dispatch(deleteFromBasket({ id }))}>
        <RiDeleteBin6Fill size="1.5em" color="red" />
      </motion.button>
    </div>
  );
};

export default BasketPartButtons;
