import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MinusIcon } from "../assets/icons/MinusIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";

export const Cart = ({ order, updateTotalAmount }) => {
  const [items, setItems] = useState(order);

  const reduceItem = (key) => {
    if (items[key].amount === 0) {
      let text = "Do you want to remove this item?";
      if (confirm(text) == true) {
        delete items[key];
        updateTotalAmount(items.totalAmount);
        setItems(items);
        return;
      } else {
        return;
      }
    }
    items[key].amount = items[key].amount - 1;
    items.totalAmount = items.totalAmount - 1;
    updateTotalAmount(items.totalAmount);
    setItems(items);
  };

  const increaseItem = (key) => {
    items[key].amount = items[key].amount + 1;
    items.totalAmount = items.totalAmount + 1;
    updateTotalAmount(items.totalAmount);
    setItems(items);
  };

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
        <div className="w-[400px] sm:w-[480px] flex flex-col justify-start gap-3 mx-auto overflow-auto">
          {Object.keys(items).map((key) => {
            if (key === "totalAmount") {
              return null;
            }
            return (
              <div
                key={key}
                className="flex justify-start items-center outline-none p-3 rounded-lg border-bgDark3 bg-bgDark3 hover:bg-bgDark3Hover"
              >
                <p className="text-primaryText text-left ml-4 mr-20 w-[90px] sm:w-[150px]">
                  {items[key].name} / ${items[key].price}
                </p>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => reduceItem(key)}
                >
                  <MinusIcon />
                </motion.div>
                <input
                  className="w-12 mx-1 text-center outline-none border bg-gray-200 border-gray-200 rounded-sm z-50"
                  value={items[key].amount}
                  type="text"
                  readOnly
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => increaseItem(key)}
                >
                  <PlusIcon />
                </motion.div>
                <p className="text-primaryText text-left ml-8 mr-4 w-100px]">
                  = ${items[key].price * items[key].amount}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
