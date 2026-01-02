import { FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ReportFloatingButton(){
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);
  },[]);

  if (!isVisible) return null;

  return (
    <button
      onClick={()=>navigate('/report')}
      className="fixed left-4 sm:left-6 bottom-20 sm:bottom-24 z-50 p-3 bg-white text-black rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
      title="Report an issue / submit request"
    >
      <FileText className="w-5 h-5" />
    </button>
  )
}

export default ReportFloatingButton;
