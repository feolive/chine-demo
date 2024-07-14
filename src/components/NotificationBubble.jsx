import { motion } from "framer-motion";

export const NotificationBubble = ({ num }) => {
    return (
        <motion.div 
        className="absolute top-0 right-0 bg-primaryColor text-white text-xs w-4 h-4 rounded-full flex justify-center items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type:'spring', duration: 0.2 }}
        >
        {num}
        </motion.div>
    );
};