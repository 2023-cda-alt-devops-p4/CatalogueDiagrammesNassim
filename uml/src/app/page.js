import { HeaderContainer } from "@/containers/header/HeaderContainer"
import './globals.css';

export default function Home() {
  return (
    <main>
      <HeaderContainer />
      <div className="page_border">
        Page Home
      </div>
    </main>
  )
}
