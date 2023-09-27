"use client";
import { useLayoutEffect, useState } from "react";
import { umlData } from "@/data/Diagram";
import { Button } from "@/components/button/Button";
import { Card, CardDescription, CardPicture } from "@/components/Card/Card";
export const UmlRandom = () => {
    // const [dataUml] = useState(umlData);
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
            <div className="uml_random_contaner">
                <Card>
                    <CardPicture src={resultRandom.picture} alt="picture uml" />
                    <CardDescription> {resultRandom.description}</CardDescription>
                </Card>
                <Button onClick={() => randomUml()}> Random </Button>

            </div>
        )
    return (

        <div>   Loadding...

        </div>
    )
}