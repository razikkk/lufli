import { useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const location = useLocation();

  const getWhatsAppMessage = () => {
    const pathname = location.pathname;
    
    if (pathname === "/travel") {
      return "Hello! I'm interested in Travel services. Please provide more information.";
    } else if (pathname === "/study-abroad") {
      return "Hello! I'm interested in Study Abroad programs. Please provide more information.";
    } else {
      return "Hello! I'm interested in Job opportunities. Please provide more information.";
    }
  };

  const getWhatsAppLabel = () => {
    const pathname = location.pathname;
    
    if (pathname === "/travel") {
      return "Travel Enquiry";
    } else if (pathname === "/study-abroad") {
      return "Study Abroad Enquiry";
    } else {
      return "Job Enquiry";
    }
  };

  const phoneNumber = "+918891416777"; // Replace with actual WhatsApp number
  const message = encodeURIComponent(getWhatsAppMessage());
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={getWhatsAppLabel()}
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        {getWhatsAppLabel()}
      </span>
      
      {/* Button */}
      <div className="relative">
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
        
        {/* Main button */}
        <div className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110">
          <MessageCircle className="h-7 w-7 text-white" fill="white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
