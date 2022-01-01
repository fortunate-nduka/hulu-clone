import { useRouter } from "next/router";
import requests from "../utils/requests";

function Navbar() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 space-x-10 overflow-x-scroll text-lg sm:px-20 whitespace-nowrap sm:space-x-20 scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="duration-100 transform cursor-pointer lasttransition hover:scale-125 hover:text-white active:text-red-500 last:pr-24"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 w-1/6 h-10 bg-gradient-to-l from-[#06202A]" />
    </nav>
  );
}

export default Navbar;
