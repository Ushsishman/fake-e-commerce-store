import Card from "../components/Card/Card";
import { motion } from "framer-motion";

const Home = () => {
  {
    /* MOTION IS ANIMATIONS (FRAMER MOTION),EVERY CARD RETURNS THEIR CATEGORY OF CONTENT */
  }
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen flex flex-col md:flex-row lg:flex-row items-center justify-center">
      <Card
        nav="/mens-clothes"
        img="bg-men-clothes"
        category="Men's Clothing"
      />
      <Card
        nav="/womens-clothes"
        img="bg-women-clothes"
        category="Women's Clothing"
      />
      <Card nav="/jewelery" img="bg-jewelery" category="Jewelery" />
    </motion.div>
  );
};

export default Home;
