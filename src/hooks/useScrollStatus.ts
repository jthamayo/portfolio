import { useState, useEffect } from "react";

const useScrollStatus = ()=> {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
          if (window.scrollY >= heroHeight) {
            setIsScrolled(true);
          }
          if (window.scrollY <= heroHeight * 0.3) {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      });
    
    return isScrolled;
}

export default useScrollStatus;
