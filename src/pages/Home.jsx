import React from "react";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Search from "../components/Search";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Search />
      <Veggie />
      <Popular />
    </motion.div>
  );
};

export default Home;
