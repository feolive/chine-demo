import { useState } from "react";
import { MinusIcon } from "../assets/icons/MinusIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";
import { motion } from "framer-motion";

export const CartItem = ({ item, updateTotalAmount }) => {

    const [num, setNum] = useState(item.amount);

    const reduceItem = () => {
        if (item.amount === 0) {
          let text = "Do you want to remove this item?";
          if (!confirm(text)) {
            return;
          } 
        }
        item.amount = item.amount - 1;
        setNum(item.amount);
      };
    
      const increaseItem = () => {
        item.amount = item.amount + 1;
        setNum(item.amount);
      };


  return (
      item.amount < 0 ? null :
      <div
        key={item.name}
        className="flex justify-start items-center outline-none p-3 rounded-lg border-bgDark3 bg-bgDark3 hover:bg-bgDark3Hover"
      >
      <p className="text-primaryText text-left ml-4 mr-20 w-[90px] sm:w-[150px]">
        {item.name} / ${item.price}
      </p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        onClick={() => reduceItem()}
      >
        <MinusIcon />
      </motion.div>
      <input
        className="w-12 mx-1 text-center outline-none border bg-gray-200 border-gray-200 rounded-sm z-50"
        value={num}
        type="text"
        readOnly
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        onClick={() => increaseItem()}
      >
        <PlusIcon />
      </motion.div>
      <p className="text-primaryText text-left ml-6 w-100px]">
        = ${item.price * item.amount}
      </p>
    </div>
  );
};
