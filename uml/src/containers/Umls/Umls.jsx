'use client'
import './Umls.css';
import { useState } from 'react';
import { Modal } from '@/components/modal/Modal';
import { umlData } from "@/data/Diagram";
import { CardTitle, Card, CardPicture, CardPosition } from "@/components/Card/Card";
import { Button } from "@/components/button/Button";

export const Umls = () => {

    const [displayModal, setDisplayModal] = useState(null);

    const handleModal = (id) => {
        console.log("id click ", id)
        setDisplayModal(id)
    }

    return (
        <div className="umls_border">
            <div key="umls" className="umls_container">
                {umlData.map((item) => (
                    <div key={item.id}>
                        <Card size="sizeM" design="design">
                            <CardPicture src={item.picture} alt={item.name} />
                            <CardPosition center="center">
                                <CardTitle>  {item.name}</CardTitle>
                                <Button onClick={() => handleModal(item.id)} variant="variant" size="sizeM"> Plus d'info</Button>
                            </CardPosition>
                        </Card>
                        <Modal
                            display={displayModal}
                            props={item}
                            onClick={() => handleModal()}
                            id={item.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}