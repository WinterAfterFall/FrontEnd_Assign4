// src/components/TopMenu.tsx
import TopMenuItem from "./TopMenuItem";

const TopMenu = () => {
  return (
    <div className="bg-gray-800 p-4 flex justify-end items-center text-white">
      <div className="flex items-center gap-8"> {/* ใช้ gap */}
      <TopMenuItem label="Booking" href="/booking" />
        <img src="/img/logo.png" alt="Logo" className="h-10" />
       
      </div>
    </div>
  );
};

export default TopMenu;