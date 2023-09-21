'use client'
import { umlData } from "@/data/Diagram";
import { CardTitle, Card, CardPicture } from "@/components/Card/Card";

export const Umls = () => {
    console.table("all", umlData)
    return (
        <div>
            {umlData.map((item) => (
                <>
                    <Card key={item.id}>
                        <CardPicture src={item.picture} alt={item.name} />
                        <CardTitle> {item.id}. {item.name}</CardTitle>
                    </Card>
                </>

            ))}
        </div>
    )
}