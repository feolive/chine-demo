import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./Card";

export const MenuItem = ({ selectedTab, order, updateTotalAmount }) => {

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedTab.id}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div id="scroll-b" className="scroll-block" />
        <section id="menu-item" className="h-[500px] grid grid-cols-3 gap-5 px-6 scroll-bar sm:overscroll-contain" >
          {selectedTab["data"].map((food) => (
            <Card food={food} order={order} updateTotalAmount={updateTotalAmount} />
          ))}
        </section>
      </motion.div>
    </AnimatePresence>
  );
};
