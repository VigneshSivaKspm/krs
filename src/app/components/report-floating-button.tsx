import { X } from "lucide-react";
import { useState, useEffect } from "react";
import ReportForm from "../pages/ReportForm";

export function ReportFloatingButton(){
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // lock body scroll when drawer open
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={()=>setIsOpen(true)}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 w-8 h-36 bg-gradient-to-l from-red-600 to-yellow-500 text-white rounded-none flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        title="Report an issue / submit request"
        aria-label="Open report drawer"
      >
        <span className={`text-xl font-black leading-none transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>&gt;</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-60 flex justify-end">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={()=>setIsOpen(false)} />
          <aside className="relative right-0 top-0 h-full w-[92%] sm:w-96 bg-black text-white shadow-2xl p-4 overflow-auto transform transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-semibold">Report</div>
              <button onClick={()=>setIsOpen(false)} className="p-2 rounded-md bg-white/5 hover:bg-white/10"><X className="w-5 h-5" /></button>
            </div>
            <ReportForm embedded={true} />
          </aside>
        </div>
      )}
    </>
  )
}

export default ReportFloatingButton;
