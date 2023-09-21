'use client'
import './Umls.css';
import { umlData } from "@/data/Diagram";
import { CardTitle, Card, CardPicture, CardPosition } from "@/components/Card/Card";
import { Button } from "@/components/button/Button";

export const Umls = () => {
    console.table("all", umlData)
    return (
        <div className="umls_border">
            <div className="umls_container">
                {umlData.map((item) => (
                    <Card size="sizeM" design="design" key={item.id}>
                        <CardPosition>
                            <CardPicture src={item.picture} alt={item.name} />
                            <CardTitle>  {item.name}</CardTitle>
                            <Button variant="variant" size="sizeM"> Plus d'info</Button>
                        </CardPosition>
                    </Card>
                ))}
            </div>
        </div>
    )
}