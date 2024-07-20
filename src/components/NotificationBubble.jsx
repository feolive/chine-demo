import { motion } from "framer-motion";

export const NotificationBubble = ({ num }) => {
    return (
        num <= 0 ? null :
        <motion.div 
        className="absolute top-0 right-0 sm:-top-6 sm:-right-8 bg-gradient-to-br from-red-200 via-secondaryColor to-primaryColor text-primaryText text-xs w-6 h-6 border-0 border-solid border-gray-400 rounded-full flex justify-center items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type:'spring', bounce: 0.4, duration: 0.2 }}
        >
        {num}
        </motion.div>
    );
};