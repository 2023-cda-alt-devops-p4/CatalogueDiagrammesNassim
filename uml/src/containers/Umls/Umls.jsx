'use client'
import './Umls.css';
import { useState } from 'react';
import { umlData } from "@/data/Diagram";
import { CardTitle, Card, CardPicture, CardPosition } from "@/components/Card/Card";
import { Button } from "@/components/button/Button";

export const Umls = () => {
    const [displayModal, setDisplayModal] = useState(false);


    const handleModal = () => {
        setDisplayModal(!displayModal)
        console.log("displayModal", displayModal)
    }
    return (
        <div className="umls_border">
            <div className="umls_container">
                {umlData.map((item) => (
                    <Card size="sizeM" design="design" key={item.id}>
                        <CardPicture src={item.picture} alt={item.name} />
                        <CardPosition center="center">
                            <CardTitle>  {item.name}</CardTitle>
                            <Button onClick={() => handleModal()} variant="variant" size="sizeM"> Plus d'info</Button>
                        </CardPosition>
                    </Card>
                ))}
            </div>
        </div>
    )
}