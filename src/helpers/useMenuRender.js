import { useState } from "react";

export const useMenuRender = () => {

    const [isMenu, setIsMenu] = useState('none');
    const [isMargin, setIsMargin] = useState('112px');
    const [isFoto, setIsFoto] = useState('block');

    const onMenuBurger = (e) => {
        e.preventDefault();
        
        if(isMenu === 'none') {
            setIsMenu('block');
            setIsMargin('0');
            setIsFoto('none');
            
        } else if(isMenu === 'block') {
            setIsMenu('none');
            setIsMargin('112px');
            setIsFoto('block');
        }
    }
    
    return {
        isMenu, 
        isMargin, 
        isFoto,
        onMenuBurger,
    };
}