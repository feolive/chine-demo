import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./Card";

export const MenuItem = ({selectedTab, order}) => {

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="mt-2"
        key={selectedTab.id}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <section className="w-auto grid grid-cols-3">
          {
          selectedTab['data'].map((food) => (
              <Card food={food} order={order} />
          ))
          }
         
        </section>
      </motion.div>
    </AnimatePresence>
  );
};
