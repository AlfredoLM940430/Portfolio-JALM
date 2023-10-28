import { useState } from "react";

export const useMenuRender = () => {

    const [isMenu, setIsMenu] = useState('none');
    const [isMargin, setIsMargin] = useState('112px');
    const [isFoto, setIsFoto] = useState('block');

    const onMenuBurger = (e) => {
        
        e.preventDefault();
        let foto = isFoto;
        let menu = isMenu;
        let margin = isMargin;
        
        if(isMenu === 'none') {
            setIsMenu(menu = 'block');
            setIsMargin(margin = '0');
            setIsFoto(foto = 'none');
            
        } else if(isMenu === 'block') {
            setIsMenu(menu = 'none');
            setIsMargin(margin = '112px');
            setIsFoto(foto = 'block');
        }
    }
    
    return {
        isMenu, 
        isMargin, 
        isFoto,
        onMenuBurger,
    };
}