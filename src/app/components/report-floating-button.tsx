import { X } from "lucide-react";
import { useState, useEffect } from "react";
import ReportForm from "../pages/ReportForm";

export function ReportFloatingButton(){
  const [isOpen, setIsOpen] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approximately 100px)
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // lock body scroll while drawer is visible
    if (showDrawer) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [showDrawer]);

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed left-3 sm:left-5 bottom-28 sm:bottom-32 z-40 flex items-center gap-2">
        {/* Label pill */}
        <button
          onClick={() => {
            if (!showDrawer) {
              setShowDrawer(true);
              setTimeout(() => setIsOpen(true), 10);
            } else {
              if (isOpen) {
                setIsOpen(false);
                setTimeout(() => setShowDrawer(false), 300);
              } else {
                setIsOpen(true);
              }
            }
          }}
          className="p-2 sm:p-3 bg-white hover:bg-gray-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none flex-shrink-0"
          title="Report an issue / submit request"
          aria-label="Open report form"
        >
          <img src="/assets/flag.png" alt="Report" className="w-10 h-12 sm:w-14 sm:h-14 object-contain" />
        </button>
        {/* Tooltip label */}
        <div className="bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md leading-tight pointer-events-none">
          <span className="block">Report /</span>
          <span className="block">Request</span>
        </div>
      </div>

      {showDrawer && (
        <div className="fixed inset-0 z-[9998] flex justify-end pointer-events-auto">
          <div
              className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-[9997] ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => {
              // start close animation
              setIsOpen(false);
              setTimeout(() => setShowDrawer(false), 300);
            }}
          />
            <aside className={`relative right-0 top-0 h-full w-[92%] sm:w-96 bg-amber-50 text-gray-900 shadow-2xl p-4 overflow-auto transform transition-transform duration-300 z-[9998] border-l-4 border-amber-400 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-end mb-4">
              <button onClick={() => {
                setIsOpen(false);
                setTimeout(() => setShowDrawer(false), 300);
              }} className="p-2 rounded-md bg-red-100 hover:bg-red-200 text-red-800"><X className="w-5 h-5" /></button>
            </div>
            <ReportForm embedded={true} />
          </aside>
        </div>
      )}
    </>
  )
}

export default ReportFloatingButton;
