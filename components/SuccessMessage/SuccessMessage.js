import { useEffect } from "react";
import { SuccessMessageWrapper } from "./StyledSuccessMessage";

export default function SuccessMessage({ 
  message, 
  show, 
  onClose, 
  duration = 2000 
}) {
  useEffect(() => {
    if (show && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [show, onClose, duration]);

  if (!show) return null;

  return (
    <SuccessMessageWrapper>
      <span>✓</span> {message}
    </SuccessMessageWrapper>
  );
}
