import { motion, AnimatePresence } from "framer-motion";

export const Cart = (order) => {
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
            {Object.keys(order).map((key) => {
              if (key === "totalAmount") {
                return null;
              }
              return (
                <div key={key} className="flex justify-between items-center">
                  <p className="text-primaryText text-left">
                    {order[key].name} -  ${order[key].price}
                  </p>
                  <p className="text-primaryText text-left ml-4">
                    x{order[key].amount} = ${order[key].price * order[key].amount}
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
