import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";

export const Cart = ({order, updateTotalAmount}) => {

  const [items, setItems] = useState(order)

  const reduceItem = (key) => {
    if (items[key].amount === 0) {
        delete items[key]
        updateTotalAmount(items.totalAmount)
        setItems(items)
        return 
    }
    items[key].amount = items[key].amount - 1
    items.totalAmount = items.totalAmount - 1
    updateTotalAmount(items.totalAmount)
    setItems(items)
  }




  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="mb-4 text-xl font-bold font-heading text-primaryText text-center">
            Order List
          </h3>
        <div className="w-[300px] sm:w-[480px] flex flex-col justify-start gap-3 mx-auto overflow-auto">
          
            {Object.keys(items).map((key) => {
              if (key === "totalAmount") {
                return null;
              }
              return (
                <div key={key} className="flex justify-start items-center outline-none p-3 rounded-lg border-bgDark3 bg-bgDark3 hover:bg-bgDark3Hover">
                  <p className="text-primaryText text-left ml-4 mr-20 w-[90px] sm:w-[150px]">
                    {items[key].name} -  ${items[key].price}
                  </p>
                  <p className="text-primaryText text-left mr-2 w-[50px]">
                    x{items[key].amount}
                  </p>
                  <p className="text-primaryText text-left mr-2 w-[50px]">
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
