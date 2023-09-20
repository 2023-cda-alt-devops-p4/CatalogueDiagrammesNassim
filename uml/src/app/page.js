import { Umls } from "@/containers/Umls/Umls"
import { HeaderContainer } from "@/containers/header/HeaderContainer"

export default function Home() {
  return (
    <main>
      <HeaderContainer />
      <div> Hello World le Diagram : </div>
      <Umls />
    </main>
  )
}
