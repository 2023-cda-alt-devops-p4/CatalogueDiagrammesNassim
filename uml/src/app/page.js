import { HeaderContainer } from "@/containers/header/HeaderContainer"
import { UmlRandom } from "@/containers/Umls/UmlRandom";
import './globals.css';

export default function Home() {
  return (
    <main>
      <HeaderContainer />
      <div className="page_center">
        <h1> Hello World 👋🏼 </h1>
        <h2>Apprendre & comprendre les différents <span className="span_title">  UML </span> et <span className="span_title"> Mérise.</span></h2>
        <UmlRandom />
      </div>

    </main>
  )
}
