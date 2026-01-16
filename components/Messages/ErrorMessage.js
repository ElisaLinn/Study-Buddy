import { useEffect } from "react";
import { ErrorMessageWrapper} from "./StyledMessages";
import { X } from "lucide-react";

export default function ErrorMessage({ 
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
    <ErrorMessageWrapper>
      <X/>{message}
    </ErrorMessageWrapper>
  );
}