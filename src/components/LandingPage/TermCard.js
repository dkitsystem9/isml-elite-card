import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Lock, XCircle } from 'lucide-react';
import './TermCard.css';

const icons = {
  calendar: <CalendarDays size={32} />,
  lock: <Lock size={32} />,
  'x-circle': <XCircle size={32} />
};

export default function TermCard({ term, delay }) {
  return (
    <motion.div
      className="term-card"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <div className={`icon ${term.iconColor}`}>{icons[term.iconType]}</div>
      <h4>{term.title}</h4>
      <p>{term.description}</p>
    </motion.div>
  );
}
