"use client";
import './Umls.css';
import { useLayoutEffect, useState } from "react";
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

    useLayoutEffect(() => {
        randomUml();
    }, [])

    if (resultRandom)
        return (
            <>
                <div className="uml_random_container">
                    <Card>
                        <CardPosition center="uml">
                            <CardPicture src={resultRandom.picture} alt="picture uml" />
                            <CardDescription> Le {resultRandom.name} </CardDescription>
                        </CardPosition>
                    </Card>
                </div>
                <Button variant="random" onClick={() => randomUml()}> Random </Button>
            </>
        )
    return (

        <div>   Loading...

        </div>
    )
}