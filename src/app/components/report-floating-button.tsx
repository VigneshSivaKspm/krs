import { X, ChevronLeft } from "lucide-react";
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
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 w-6 h-36 text-white rounded-none shadow-lg hover:scale-105 transition-transform overflow-hidden"
        title="Report an issue / submit request"
        aria-label="Open report drawer"
      >
        <div className="w-full h-full flex flex-col">
          <div className="h-1/4 bg-red-600" />
          <div className="h-1/2 bg-yellow-400 flex items-center justify-center">
            <ChevronLeft strokeWidth={2.5} className={`w-5 h-5 transform transition-transform duration-200 text-black ${isOpen ? 'rotate-180' : ''}`} />
          </div>
          <div className="h-1/4 bg-red-600" />
        </div>
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
