import { useState, useEffect } from "react";
import {MenuItem} from "./MenuItem";
import { motion } from "framer-motion";


export const Menu = (foodData, order) => {
  const pseudoFoodData = [
    {
      id: "c1",
      category: "Noodles",
      icon: "🍜",
      data: [
        {
          id: 1,
          name: "Beef Noodles (红烧牛肉面)",
          src: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
          price: "10.99",
          desc: "Beef Noodles is a traditional Chinese dish made with beef, vegetables, and noodles. The beef is marinated and cooked with the vegetables and noodles to create a flavorful and satisfying meal.",
          rate: "5",
        },
        {
          id: 2,
          name: "Spicy Beef Noodles (麻辣牛肉面)",
          src: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
          price: "11.99",
          desc: "Spicy Beef Noodles is a popular Chinese dish made with beef, vegetables, and noodles. The beef is marinated in a spicy sauce and cooked with the vegetables and noodles to create a delicious and spicy meal.",
          rate: "4.5",
        },
        {
          id: 3,
          name: "Chicken Noodles (红烧鸡肉面)",
          src: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
          price: "9.99",
          desc: "Chicken Noodles is a classic Chinese dish made with chicken, vegetables, and noodles. The chicken is marinated and cooked with the vegetables and noodles to create a flavorful and satisfying meal.",
          rate: "4",
        },
        {
          id: 4,
          name: "Spicy Chicken Noodles (麻辣鸡肉面)",
          src: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
          price: "10.99",
          desc: "Spicy Chicken Noodles is a popular Chinese dish made with chicken, vegetables, and noodles. The chicken is marinated in a spicy sauce and cooked with the vegetables and noodles to create a delicious and spicy meal.",
          rate: "4.5",
        },
        {
          id: 5,
          name: "Vegetable Noodles (素面)",
          src: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
          price: "8.99",
          desc: "Vegetable Noodles is a healthy and delicious Chinese dish made with a variety of vegetables and noodles. The vegetables are cooked with the noodles to create a flavorful and satisfying meal.",
          rate: "4",
        }
      ]
    },
    {
      id: "c2",
      category: "Hotpot",
      icon: "🥘",
      data: [
        {
          id: 10,
          name: "Spicy Pot (麻辣香锅)",
          src: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
          price: "15.99",
          desc: "Hot and Spicy Pot is savory and spicy with a numbing sensation.",
          rate: "5",
        },
        {
          id: 9,
          name: "Borsch (罗宋汤)",
          src: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
          price: "11.99",
          desc: "Borsch is a traditional Russian soup made with beets, cabbage, and potatoes. It is hearty, flavorful, and perfect for a cold day.",
          rate: "5",
        },
      ]
    },
    {
      id: "c3",
      category: "Drinks",
      icon: "🥤",
      data: [
        {
          id: 6,
          name: "Coke (可乐)",
          src: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
          price: "1.99",
          desc: "Coke Cola",
          rate: "5",
        },
        {
          id: 7,
          name: "Sprite (雪碧)",
          src: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
          price: "1.99",
          desc: "Sprite.",
          rate: "4.5",
        },
        {
          id: 8,
          name: "Orange Juice (橙汁)",
          src: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
          price: "6.99",
          desc: "100% Orange Juice.",
          rate: "4",
        },
      ]
    },
  ];

  const pseudoOrder = {
    totalAmount: 0,
    1 : {
      amount: 0,
      name: "",
      price: 0,
    },
    2 : {
      amount: 0,
      name: "",
      price: 0,
    },
    3 : {
      amount: 0,
      name: "",
      price: 0,
    },
    5 : {
      amount: 0,
      name: "",
      price: 0,
    },
  };

  const [selectedTab, setSelectedTab] = useState(foodData[0]);
  const [order, setOrder] = useState(pseudoOrder);
  const [foodData, setFoodData] = useState(pseudoFoodData);

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
