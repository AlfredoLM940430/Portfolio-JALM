import { useEffect, useState } from "react";

export const useAuxiliar = () => {

    const [isAux, setIsAux] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
      }, []);
    
      const stickNavbar = () => {
        if (window !== undefined) {
          const sobreQS = document.getElementById('quien-soy').getBoundingClientRect().top;
          sobreQS > 0 ? setIsAux(false) : setIsAux(true);
        }
    };    

    return {
        isAux,
    }
}