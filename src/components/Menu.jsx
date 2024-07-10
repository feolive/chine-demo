import { useState, useEffect } from "react";
import { MenuItem } from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";

export const Menu = ({ dishes, order, updateTotalAmount }) => {
  // const [order, setOrder] = useState(order);
  // const [foodData, setFoodData] = useState(dishes);
  const [selectedTab, setSelectedTab] = useState(dishes[0]);

  useEffect(() => {
    updateTotalAmount(order.totalAmount);
  }, [order.totalAmount]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="menu w-[400px] sm:w-[720px] flex justify-start gap-3 relative mx-auto p-2">
          <nav className="overflow-auto">
            <ul className="flex flex-col justify-start list-none">
              {dishes.map((item) => (
                <li
                  className="rounded-lg bg-gray-300"
                  key={item.id}
                  onClick={() => setSelectedTab(item)}
                >
                  {item.icon} {item.category}
                </li>
              ))}
            </ul>
          </nav>
          <MenuItem selectedTab={selectedTab} order={order} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
