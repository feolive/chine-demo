import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./Card";

export const MenuItem = ({ selectedTab, order }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedTab.id}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <section className="w-auto h-[500px] p-1 grid grid-cols-3 gap-3  overflow-auto">
          {selectedTab["data"].map((food) => (
            <Card food={food} order={order} />
          ))}
        </section>
      </motion.div>
    </AnimatePresence>
  );
};
