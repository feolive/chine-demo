import { useState, useEffect } from "react";
import { MinusIcon } from "../assets/icons/MinusIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";
import { motion } from "framer-motion";

export const MenuItem = (food, order) => {
  const [amount, setAmount] = useState(() => {
    order[food.id].amount ? order[food.id].amount : 0;
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
    order.totalAmount = order.totalAmount + amount;
    order[food.id].amount = amount;
    order[food.id].name = food.name;
    order[food.id].price = food.price;
  }, [amount]);

  return (
    <motion.div
      className="mt-2"
      initial={{ rotate: -5 }}
      whileInView={{
        rotate: 0,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 },
      }}
    >
      <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
        <div className="p-8 bg-bgDark3 rounded-3xl">
          <div className="grid grid-cols-1 gap-2">
            <img className="h-10 w-10 sm:h-11 sm:w-11 mb-2" src={food.src} />
            <p className="mt-2 text-primaryText text-left">{food.name} </p>
          </div>
          <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
            {food.desc}
          </p>
          <div className="flex justify-start items-end">
            <div className="text-2xl sm:text-3xl font-bold text-primaryText text-left mt-4 mr-2">
              ${food.price}
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <MinusIcon
                className="h-7 w-7 sm:h-8 sm:w-8 mr-2"
                onClick={decreaseAmount}
              />

              <input
                className="text-2xl sm:text-3xl font-bold text-primaryText text-center mr-2"
                value={amount}
              />
              <PlusIcon
                className="h-7 w-7 sm:h-8 sm:w-8 mr-2"
                onClick={increaseAmount}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
