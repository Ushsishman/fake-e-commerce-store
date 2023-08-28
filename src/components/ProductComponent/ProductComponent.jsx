/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard/ProductCard";
import { motion } from "framer-motion";

const ProductComponent = ({ productName }) => {
  const [storeData, setStoreData] = useState([]);

  {
    /* GET REQUEST TO FAKESTORE API */
  }
  const getStoreData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setStoreData(response.data));
  };

  useEffect(() => {
    getStoreData();
  }, []);

  {
    /* THIS FILTERS GIVEN DATA FOR EVERY PRODUCT PAGE */
  }
  const filteredData = storeData.filter(
    (item) => item.category === productName,
  );
  {
    /* CONTAINER AND ITEM ARE ABOUT ANIMATIONS */
  }
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  {
    /* THIS RETURNS PRODUCTS IF THEY EXISTS,THEN FILTERS WHAT USER LOOKS FOR THEN SHOWS IT */
  }
  return (
    <>
      {storeData && (
        <div className="min-h-screen w-full flex justify-center items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-48 my-24 mx-24">
            {filteredData.map((product) => (
              <motion.div variants={item} key={product.id}>
                <ProductCard
                  id={product.id}
                  image={product.image}
                  price={product.price}
                  title={product.title}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProductComponent;
