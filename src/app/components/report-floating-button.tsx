import { X, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import ReportForm from "../pages/ReportForm";

export function ReportFloatingButton(){
  const [isOpen, setIsOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    // lock body scroll while drawer is visible
    if (showDrawer) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [showDrawer]);

  return (
    <>
      <button
        onClick={() => {
          if (!showDrawer) {
            setShowDrawer(true);
            // allow a tick for the drawer to mount, then open (for transition)
            setTimeout(() => setIsOpen(true), 10);
          } else {
            // if already open, start close; otherwise open
            if (isOpen) {
              setIsOpen(false);
              setTimeout(() => setShowDrawer(false), 300);
            } else {
              setIsOpen(true);
            }
          }
        }}
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-[9999] w-6 h-36 text-white rounded-none shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden ${isOpen ? '-translate-x-[92vw] sm:-translate-x-[24rem]' : ''}`}
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

      {showDrawer && (
        <div className="fixed inset-0 z-[9998] flex justify-end pointer-events-auto">
          <div
              className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-[9997] ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => {
              // start close animation
              setIsOpen(false);
              setTimeout(() => setShowDrawer(false), 300);
            }}
          />
            <aside className={`relative right-0 top-0 h-full w-[92%] sm:w-96 bg-black text-white shadow-2xl p-4 overflow-auto transform transition-transform duration-300 z-[9998] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-end mb-4">
              <button onClick={() => {
                setIsOpen(false);
                setTimeout(() => setShowDrawer(false), 300);
              }} className="p-2 rounded-md bg-white/5 hover:bg-white/10"><X className="w-5 h-5" /></button>
            </div>
            <ReportForm embedded={true} />
          </aside>
        </div>
      )}
    </>
  )
}

export default ReportFloatingButton;
