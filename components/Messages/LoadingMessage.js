import { useEffect } from "react";
import { LoadingSpinner, LoadingWrapper, } from "./StyledMessages";

export default function LoadingMessage({ 
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
    <LoadingWrapper>
      <LoadingSpinner />
      {message}
    </LoadingWrapper>
  );
}