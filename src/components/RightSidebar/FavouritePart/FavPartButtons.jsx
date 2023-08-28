/* eslint-disable react/prop-types */
import { addFav, addToBasket } from "../../../features/productSlice";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CiShoppingBasket } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

const FavPartButtons = ({ id, image, title, price }) => {
  const isFavProductInMenu = useSelector((state) =>
    state.product[0].find((p) => p.id === id),
  );
  {
    /* THIS BUTTONS IS FAVOURITE PARTS BUTTONS,I EXPLAINED THEM IN FEATURES */
  }
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col">
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        className="my-1"
        onClick={() => dispatch(addFav({ id, image, title, price }))}>
        {isFavProductInMenu ? (
          <AiFillHeart size="2em" color="red" />
        ) : (
          <AiOutlineHeart size="2em" />
        )}
      </motion.button>
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        className="my-1"
        onClick={() =>
          dispatch(
            addToBasket({
              id: Math.floor(Math.random() * 9999),
              image,
              title,
              price,
            }),
          )
        }>
        <CiShoppingBasket size="2em" />
      </motion.button>
    </div>
  );
};

export default FavPartButtons;
