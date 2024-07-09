import { useState, useCallback } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

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
            <div className="max-w-2xl mx-auto text-center mb-16">
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
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    Beginner
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      $0
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    The perfect way to get started and get used to our tools.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-primaryText text-left">
                    Standard
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      {isMonthly ? "$19" : "$180"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    Unlock more features and elevate your data analysis.
                  </p>
                  <ul className="mb-14 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full contained-button leading-loose transition duration-200 mt-20"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    Premium
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      {isMonthly ? "$36" : "$390"}
                    </div>
                    <div className="text-gray-500">
                      {isMonthly ? "/ month" : "/ year"}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Experience the full power of our analytic platform
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Get started"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
