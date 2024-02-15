import { motion } from "framer-motion";

export default function Tab({ isSelected, onSelect, children }) {
  return (
    <>
      <motion.button
        className={isSelected ? "selected" : undefined}
        onClick={onSelect}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring" }}
      >
        {children}
      </motion.button>
      {isSelected && (
        <motion.div layoutId="tab-indicator" className="active-tab-indicator" />
      )}
    </>
  );
}
