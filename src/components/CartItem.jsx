import { useState } from "react";
import { MinusIcon } from "../assets/icons/MinusIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";
import { DeleteIcon } from "../assets/icons/DeleteIcon";
import { motion } from "framer-motion";

export const CartItem = ({ item, refreshTotalAmount }) => {
  const [num, setNum] = useState(item.amount);

  const reduceItem = () => {
    item.amount = item.amount - 1;
    if (item.amount === 0) {
      let element = document.getElementById(item.name);
      element.style.pointerEvents = "none";
      element.style.opacity = "0.5";
      element.style.cursor = "not-allowed";
    }
    setNum(item.amount);
    refreshTotalAmount(-1);
  };

  const increaseItem = () => {
    item.amount = item.amount + 1;
    setNum(item.amount);
    if (item.amount > 0) {
      let element = document.getElementById(item.name);
      element.style.pointerEvents = "auto";
      element.style.opacity = "1";
      element.style.cursor = "auto";
    }
    refreshTotalAmount(1);
  };

  const deleteItem = () => {
    let text = "Do you want to remove this item?";
    if (confirm(text)) {
      refreshTotalAmount(-1*item.amount);
      item.amount = 0;
      item.show = false;
    }
  };

  return (
    <div
      key={item.name}
      className="flex justify-start items-center outline-none p-3 rounded-lg border-bgDark3 bg-bgDark3 hover:bg-bgDark3Hover"
    >
      <p className="text-primaryText text-left ml-4 mr-14 w-[90px] sm:w-[150px]">
        {item.name} / ${item.price}
      </p>
      <motion.div
        id={item.name}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        onClick={() => reduceItem()}
      >
        <MinusIcon />
      </motion.div>
      <input
        className="w-12 mx-1 text-center outline-none border bg-gray-200 border-gray-200 rounded-sm z-50 text-primaryText border-none bg-transparent"
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
      <p className="text-primaryText text-left mx-5 w-100px]">
        = ${item.price * item.amount}
      </p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        onClick={()=> deleteItem()}
      >
        <DeleteIcon />
      </motion.div>
    </div>
  );
};
