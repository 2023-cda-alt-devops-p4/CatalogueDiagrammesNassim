import { HeaderContainer } from "@/containers/header/HeaderContainer"
import { UmlRandom } from "@/containers/Umls/UmlRandom";
import './globals.css';

export default function Home() {
  return (
    <main>
      <HeaderContainer />
      <div className="page_border">
        <h1>
        </h1>Projet Catalogue : Viens découvrir
        <UmlRandom />
      </div>
    </main>
  )
}
