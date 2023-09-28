"use client";
import './UmlRandom.css';
import { useEffect, useState } from "react";
import { umlData } from "@/data/Diagram";
import { Button } from "@/components/button/Button";
import { Card, CardDescription, CardPicture, CardPosition } from "@/components/Card/Card";

export const UmlRandom = () => {

    const [resultRandom, setResultRandom] = useState([]);

    const randomUml = () => {
        let random = Math.floor(Math.random() * umlData.length - 1);
        setResultRandom(umlData[random]);
        return resultRandom;
    }

    useEffect(() => {
        randomUml();
    }, [resultRandom])

    if (resultRandom)
        return (
            <div className="uml_container">
                <div className="uml_random_">
                    <Card>
                        <CardPosition center="uml">
                            <CardPicture src={resultRandom.picture} alt="picture uml" />
                            <div className="uml_random_name"> Le {resultRandom.name} </div>
                        </CardPosition>
                    </Card>
                </div>
                <Button variant="random" onClick={() => randomUml()}> Random </Button>
            </div>
        )
    return (

        <div>   Loading...

        </div>
    )
}