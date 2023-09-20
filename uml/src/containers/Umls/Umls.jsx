'use client'
import { umlData } from "@/data/Diagram";
import { CardTitle, Card } from "@/components/Card/Card";

export const Umls = () => {
    console.table("all", umlData)
    return (
        <div>
            {umlData.map((item) => (
                <>
                    <Card key={item.id}>
                        <CardTitle > {item.id}. {item.name}</CardTitle>
                    </Card>
                </>

            ))}
        </div>
    )
}