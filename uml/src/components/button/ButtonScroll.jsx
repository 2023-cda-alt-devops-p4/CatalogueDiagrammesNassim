"use client";
import { Button } from "./Button";
import './ButtonScroll.css';
import { BsFillArrowUpCircleFill } from "react-icons/bs"



export const ButtonScroll = () => {

    const handleClickScroll = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    return (
        <div className="btn_scroll_position">
            <Button variant="scroll" onClick={() => handleClickScroll()}> <BsFillArrowUpCircleFill /> </Button>
        </div>
    )
}