import { Button } from "./Button";
import './ButtonScroll.css';

export const ButtonScroll = () => {

    const handleClickScroll = () => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: "smooth",
        })
    }

    return (
        <Button className="btn_scroll" onClick={() => handleClickScroll()}> V </Button>
    )
}