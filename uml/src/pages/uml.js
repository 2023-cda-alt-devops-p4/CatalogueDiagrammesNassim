import { Umls } from "@/containers/Umls/Umls";
import { HeaderContainer } from "@/containers/header/HeaderContainer";

const uml = () => {
    return (
        <div className="container_uml">
            <HeaderContainer />
            <Umls />
        </div>
    )
}
export default uml;