import { useState, useEffect } from "react";
import {MenuItem} from "./MenuItem";
import { motion } from "framer-motion";


export const Menu = ({dishes, newOrder,countNewOrder}) => {
  
  const [order, setOrder] = useState(newOrder);
  const [foodData, setFoodData] = useState(dishes);
  const [selectedTab, setSelectedTab] = useState(foodData[0]);

  useEffect(() => {
    countNewOrder(order.totalAmount)
  }, [order.totalAmount]);

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    >
    <div className="menu w-screen sm:max-w-sm h-[720px] flex justify-start bg-bgDark2 relative mx-auto ">
      
      <nav className="overflow-auto">
        <ul className="flex flex-col justify-start">
          {
            foodData.map((item, index) => (
              <li className="rounded-lg" key={item.id} 
              onClick={() => setSelectedTab(item)}
              >
                {item.icon} {item.category}
              </li>
            ))
          }
        </ul>
      </nav>
      <MenuItem selectedTab={selectedTab} order={order} />
    </div>
    </motion.div>
  );
};
