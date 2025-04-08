import React, { useEffect } from 'react';
import './ToastMessage.css';
import { CheckCircle } from 'lucide-react';

const ToastMessage = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="custom-toast">
      <CheckCircle size={18} />
      <span>{message}</span>
    </div>
  );
};

export default ToastMessage;
