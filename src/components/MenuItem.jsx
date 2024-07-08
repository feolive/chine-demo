import { useState, useEffect } from "react";
import { MinusIcon } from "../assets/icons/MinusIcon";
import { PlusIcon } from "../assets/icons/PlusIcon";
import { motion, AnimatePresence } from "framer-motion";

export const MenuItem = (item, order) => {
  const [amount, setAmount] = useState(() => {
    order[food.id] ? order[food.id] : 0;
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
    order.totalAmount = amount;
  }, [amount]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="mt-2"
        key={item.id}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <section className="w-auto">

        </section>
      </motion.div>
    </AnimatePresence>
  );
};
