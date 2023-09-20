import { Umls } from "@/containers/Umls/Umls"
import Header from "../components/Header"

export default function Home() {
  return (
    <main>
      <Header />
      <div> Hello World le Diagram : </div>
      <Umls />
    </main>
  )
}
