import { useState, useEffect } from "react";
import { MinusIcon } from "../assets/icons/MinusIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";
import { motion } from "framer-motion";

export const Card = ({ food, order, updateTotalAmount }) => {
  const [amount, setAmount] = useState(() =>
    order[food.id] ? order[food.id].amount : 0
  );

  const increaseAmount = (step) => {
    updateOrder(step);
    const count = order[food.id] ? order[food.id].amount : 0;
    if (count >= 0) {
      order[food.id]['show'] = true;
    }
  };

  const decreaseAmount = (step) => {
    const count = order[food.id] ? order[food.id].amount : 0;
    if (count > 0) {
      updateOrder(step*-1);
    }
    if (count === 0) {
      order[food.id]['show'] = false;
    }
  };

  const updateOrder = (step) => {
    if(!order[food.id]) {
      order[food.id] = {}
    }
    order.totalAmount = order.totalAmount + step;
    updateTotalAmount(order.totalAmount);
    order[food.id]['amount'] = amount + step;
    order[food.id]['name'] = food.name;
    order[food.id]['price'] = food.price;
    setAmount(order[food.id].amount);
  };

  useEffect(() => {
    if(order?.totalAmount === undefined) {
      order.totalAmount = 0;
      updateTotalAmount(0);
    }
  }, []);

  return (
    <motion.div
      key={food.id}
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
        transition={{ duration: 0.3 }}
      >
        <div className="card-frame">
          <div className="flex flex-col justify-start gap-3 items-center mt-6">
            <img className="h-14 w-14 sm:h-28 sm:w-28 mb-2 rounded-3xl object-cover object-center" src={food.src} />
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
              onClick={(e) => decreaseAmount(1)}
            >
              <MinusIcon />
            </motion.div>
            <input
              className="w-14 h-10 mx-1 text-center outline-none border-none bg-transparent text-primaryText font-bold"
              value={amount<=0?0:amount}
              type="text"
              readOnly
            />
            <motion.div
              className="mr-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => increaseAmount(1)}
            >
              <PlusIcon />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
