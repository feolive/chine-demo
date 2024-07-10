import { useState, useEffect } from "react";
import { MinusIcon } from "../assets/icons/MinusIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";
import { motion } from "framer-motion";

export const Card = ({ food, order }) => {
  const [amount, setAmount] = useState(() => {
    order[food.id] ? order[food.id].amount : 0;
  });


  const increaseAmount = (step) => {
    setAmount(amount + step);
  };

  const decreaseAmount = (step) => {
    if (amount > 0) {
      setAmount(amount - step);
    }
  };

  useEffect(() => {
    if(!order[food.id]) {
      order[food.id] = {
        amount: 0,
        name: "",
        price: 0,
      }
    }
    order.totalAmount = order.totalAmount + amount;
    order[food.id]['amount'] = amount;
    order[food.id]['name'] = food.name;
    order[food.id]['price'] = food.price;
  }, [amount]);

  return (
    <motion.div
      initial={{ rotate: -10 }}
      whileInView={{
        rotate: 0,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 },
      }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[250px] sm:w-[300px] h-auto px-2 mt-4 flex flex-col justify-start content-center gap-3 bg-bgDark3 rounded-3xl">
          <div className="flex flex-col justify-start gap-3 items-center mt-6">
            <img className="h-10 w-10 sm:h-28 sm:w-28 mb-2" src={food.src} />
            <label className="text-primaryText text-left">{food.name} </label>
            <p className="w-[220px] h-[120px] mt-2 mb-6 2xl:mb-10 text-sm text-gray-500 leading-loose text-left overflow-hidden">
              {food.desc}
            </p>
          </div>
          <div className="flex justify-start items-center gap-1 ml-2 mb-6">
            <div className="text-2xl sm:text-3xl font-bold text-primaryText text-left">
              ${food.price}
            </div>
            <motion.div
              className="ml-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              onClick={() => decreaseAmount(1)}
            >
              <MinusIcon />
            </motion.div>
            <input
              className="w-14 h-6 mx-1 text-center outline-none border bg-gray-200 border-gray-200 rounded-sm"
              value={amount}
              type="text"
            />
            <motion.div
              className="mr-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              onClick={() => increaseAmount(1)}
            >
              <PlusIcon />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
