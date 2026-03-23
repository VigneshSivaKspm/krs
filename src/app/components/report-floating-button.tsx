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
        className="fixed left-4 sm:left-6 bottom-20 sm:bottom-24 z-40 p-4 sm:p-5 bg-red-600 hover:bg-red-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        title="Report an issue / submit request"
        aria-label="Open report form"
      >
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' stroke='white' stroke-width='2'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3Cpath d='M12 6c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm0 8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1z'/%3E%3C/svg%3E"
          alt="Report"
          className="w-6 h-6 sm:w-7 sm:h-7"
        />
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
