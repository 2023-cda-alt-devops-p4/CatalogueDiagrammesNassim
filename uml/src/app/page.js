import { HeaderContainer } from "@/containers/header/HeaderContainer"
import { UmlRandom } from "@/containers/Umls/UmlRandom";
import './globals.css';

export default function Home() {
  return (
    <main>
      <HeaderContainer />
      <div className="page_border">
        <UmlRandom />
      </div>
    </main>
  )
}
