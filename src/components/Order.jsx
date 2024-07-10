import { useState, useCallback } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
// import { Menu } from "./Menu";
import { Cart } from "./Cart";

const pricingData = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];

const newOrder = {
  totalAmount: 0,
  1 : {
    amount: 1,
    name: "",
    price: 5,
  },
  2 : {
    amount: 0,
    name: "",
    price: 0,
  },
  3 : {
    amount: 0,
    name: "ceshi",
    price: 9.9,
  },
  5 : {
    amount: 0,
    name: "",
    price: 0,
  },
  6 : {
    amount: 0,
    name: "Beef Noodles tttttt(红烧牛肉面)",
    price: 10,
  },
  13 : {
    amount: 0,
    name: "蛋炒饭",
    price: 7.9,
  },
  9 : {
    amount: 0,
    name: "xiaolongbao (小笼包)",
    price: 10,
  },
  7 : {
    amount: 0,
    name: "火锅-鸳鸯锅底",
    price: 19.99,
  },
};

const dishes = [
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

export const Order = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDishNum, setNewDishNum] = useState(()=>{newOrder.totalAmount?newOrder.totalAmount:0});

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  const countNewOrder = useCallback((total) => { 
    setNewDishNum(total);
  }, [newDishNum]);

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="order" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <span className="block-subtitle">Find Your Perfect Meal</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
                Your Flavor World
              </h2>
              <p className="mb-6 text-secondaryText">
                Select the food that suits your apetiite and enjoy the meal.
              </p>
              <label className="mx-auto bg-bgDark3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-bgDark3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-primaryColor   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-primaryText text-sm font-bold">
                  <div
                    className={
                      isMonthly ? "mr-14 ml-5" : "mr-14 ml-5 text-gray-400"
                    }
                  >
                    Menu
                  </div>
                  <div className={isMonthly ? "text-gray-400" : ""}>Cart</div>
                </div>
              </label>
            </div>
            {
              // isMonthly ? (<Menu dishes={dishes} newOrder={newOrder} countNewOrder={countNewOrder} />) : 
              // (<Cart order={newOrder} />)
            }
            <Cart order={newOrder} updateTotalAmount={countNewOrder} />
            
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
