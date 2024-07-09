import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";

export const Cart = (order) => {

  const [items, setItems] = useState(order)

  const reduceItem = (key) => {
    if (items[key].amount === 0) {
        delete items[key]
    }
    items[key].amount = items[key].amount - 1
    items.totalAmount = items.totalAmount - 1
    setItems({items})
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[400px] sm:w-[380px] flex flex-col justify-start mx-auto overflow-auto">
          <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-center">
            Order List
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {Object.keys(items).map((key) => {
              if (key === "totalAmount") {
                return null;
              }
              return (
                <div key={key} className="flex justify-between items-center">
                  {totalAmount===0? <CloseIcon className="mr-1" onClick={reduceItem(key)} /> : <CheckArrowIcon className="mr-1" />} 
                  <p className="text-primaryText text-left">
                    {items[key].name} -  ${items[key].price}
                  </p>
                  <p className="text-primaryText text-left ml-4">
                    x{items[key].amount} = ${items[key].price * items[key].amount}
                  </p>
                  
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
