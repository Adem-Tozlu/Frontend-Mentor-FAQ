import React from 'react';
import iconPlus from '../assets/images/icon-plus.svg';
import iconMinus from '../assets/images/icon-minus.svg';

function ButtonFunktion() {
    const [icon, setIcon] = React.useState(iconPlus);
    const handleClick = () => {

        setIcon(icon === iconPlus ? iconMinus : iconPlus);


    }

    return (
        <button onClick={handleClick}>
            <img className='img-plus' src={icon} alt="Plus Zeichen" />

        </button>
    )
}



export default ButtonFunktion;