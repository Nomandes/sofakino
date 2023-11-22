import './Cinema.css';

import Sofa from './Sofa.tsx';
import Screen from './Screen.tsx';
import Overlay from './Overlay';

export default function Cinema(){
    return (
        <div className="cinema col-main row-cinema">
            <Screen />
            <Sofa />
            <Overlay />
        </div>
    );
    
    
}