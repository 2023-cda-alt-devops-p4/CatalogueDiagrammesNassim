"use client";
import { useEffect, useState } from "react";
import { umlData } from "@/data/Diagram";
import { Button } from "@/components/button/Button";
import { Card, CardDescription, CardPicture } from "@/components/Card/Card";
export const UmlRandom = () => {
    const [dataUml] = useState(umlData);
    const [resultRandom, setResultRandom] = useState([]);

    const randomUml = async () => {
        let random = Math.floor(Math.random() * dataUml.length);
        setResultRandom(dataUml[random]);
        return await resultRandom;
    }

    useEffect(() => {
        randomUml();
    }, [])


    return (
        <div className="uml_random_contaner">
            <Button onClick={() => randomUml()}> Random </Button>
            <Card>

            </Card>

        </div>
    )
}