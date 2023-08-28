/* eslint-disable react/prop-types */
import { CiShoppingBasket } from "react-icons/ci";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addFav, addToBasket } from "../../../features/productSlice";
import { motion } from "framer-motion";

const ProductCard = ({ id, image, price, title }) => {
  const dispatch = useDispatch();

  {
    /* THIS SELECTOR LOOKS FOR IF USER ADDS THAT PRODUCT TO FAV */
  }
  const isFavProductInMenu = useSelector((state) =>
    state.product[0].find((p) => p.id === id),
  );

  {
    /* RETURNS SINGLE PRODUCT */
  }
  return (
    <div>
      <div className="relative">
        <img src={image} />
        <div className="w-full h-10 absolute bottom-0 bg-gray-400/70 flex flex-row justify-between px-2">
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              dispatch(
                addToBasket({
                  id: Math.floor(Math.random() * 9999),
                  image,
                  price,
                  title,
                }),
              );
            }}
            className="flex flex-row items-center">
            <span className="text-2xl">+</span>
            <CiShoppingBasket size="2em" />
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              dispatch(addFav({ id, image, price, title }));
            }}>
            {isFavProductInMenu ? (
              <AiFillHeart size="2em" color="red" />
            ) : (
              <AiOutlineHeart size="2em" />
            )}
          </motion.button>
        </div>
      </div>
      <div className="text-center text-[#0D0D0D] text-sm">
        <p className="font-bold">{title}</p>
        <p>{price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;
