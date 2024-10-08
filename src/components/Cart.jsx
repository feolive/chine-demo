import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartItem } from "./CartItem";

export const Cart = ({ order, updateTotalAmount }) => {
  const [items, setItems] = useState(order);

  const refreshTotalAmount = (num) => {
    let newAmount = order.totalAmount + num;
    if(newAmount < 0) {
      return;
    }
    order.totalAmount = newAmount;
    updateTotalAmount(newAmount);
  };

  useEffect(() => {
    if(order?.totalAmount === undefined) {
      order.totalAmount = 0;
      updateTotalAmount(0);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center items-end gap-10 mb-3">
          <h3 className="p-1 text-xl font-bold font-heading text-primaryText text-center">
            Order List
          </h3>
          <button
            className="w-16 h-8 contained-button ml-8"
            aria-label="submit new order"
          >
            Submit
          </button>
        </div>
        <div className="w-[400px] sm:w-[480px] h-[560px] flex flex-col justify-start gap-3 mx-auto scroll-bar sm:overscroll-contain">
          {Object.keys(items).map((key) => {
            if (key === "totalAmount") {
              return null;
            }
            return !items[key].show?null : (
              <CartItem
                item={items[key]} refreshTotalAmount={refreshTotalAmount}
              />
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
