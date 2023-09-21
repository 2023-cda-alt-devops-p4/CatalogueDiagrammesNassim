'use client'
import { umlData } from "@/data/Diagram";
import { CardTitle, Card, CardPicture } from "@/components/Card/Card";
import { Button } from "@/components/button/Button";

export const Umls = () => {
    console.table("all", umlData)
    return (
        <div>
            {umlData.map((item) => (
                <div className="umls_container">
                    <Card size="sizeM" design="design" key={item.id}>
                        <CardPicture src={item.picture} alt={item.name} />
                        <CardTitle>  {item.name}</CardTitle>
                        <Button>Plus d'info</Button>
                    </Card>
                </div>
            ))}
        </div>
    )
}