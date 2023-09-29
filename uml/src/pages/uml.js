import { Umls } from "@/containers/Umls/Umls";
import { HeaderContainer } from "@/containers/header/HeaderContainer";
import { ButtonScroll } from "@/components/button/ButtonScroll";
const uml = () => {
    return (
        <div className="container_uml">
            <HeaderContainer />
            <Umls />
            <ButtonScroll />
        </div>
    )
}
export default uml;