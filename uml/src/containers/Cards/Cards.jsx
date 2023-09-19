'use client'
import { umlData } from "@/data/Diagram";
import { CardTitle, Card } from "@/components/Card/Card";

export const Cards = () => {
    console.table("all", umlData)
    return (
        <div>
            {umlData.map((data, id) => (
                <>
                    <Card key={id.id}>
                        <CardTitle > {data.id}. {data.name}</CardTitle>

                    </Card>
                </>

            ))}
        </div>
    )
}