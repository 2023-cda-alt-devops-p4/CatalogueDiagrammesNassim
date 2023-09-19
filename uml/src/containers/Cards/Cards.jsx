'use client'
import { umlData } from "@/data/Diagram";
import { CardTitle, CardDescription } from "@/components/Card/Card";
export const Cards = () => {
    // const [allData] = useState(UmlData);
    console.table("all", umlData)
    return (
        <div>
            {umlData.map((data) => (
                <>
                    <CardTitle> {data.id}. {data.name}</CardTitle>
                </>

            ))}
        </div>
    )
}