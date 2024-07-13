import { useState, useEffect } from "react";
import { MenuItem } from "./MenuItem";
import { motion, AnimatePresence } from "framer-motion";

export const Menu = ({ dishes, selIdx, setSelIdx , order, updateTotalAmount }) => {
  const [selectedTab, setSelectedTab] = useState(dishes[selIdx]);

  useEffect(() => {
    updateTotalAmount(order.totalAmount);
  }, [order.totalAmount]);

  const changeTab =(item,index) => {
    setSelectedTab(item);
    setSelIdx(index);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[400px] sm:w-full flex justify-start gap-3 relative mx-auto">
          <nav className="nav-tabs">
            <ul>
              {dishes.map((item,index) => (
                <li
                className={item === selectedTab ? "selected" : ""}
                  key={item.id}
                  onClick={() => changeTab(item,index)}
                >
                  {item.icon} {item.category}
                  {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
                ) : null}
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
