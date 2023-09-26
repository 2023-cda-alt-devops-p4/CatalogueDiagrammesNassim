import Image from 'next/image';
import { Button } from '../button/Button';
import './Modal.css';

export const Modal = ({ props, display, onClick }) => {

    if (display === props.id)
        return (
            <div key={props.id} className="modal">
                <ModalHeader>
                    <Button variant="btn_closeModal" onClick={onClick}> X </Button>
                    <hr />
                    <h1> {props.name} </h1>
                </ModalHeader>
                <ModalBody>
                    <Image
                        src={props.picture}
                        width={600}
                        height={400}
                        alt={props.name}
                    />
                </ModalBody>
                <ModalFooter>
                    <div> - {props.description} </div>
                </ModalFooter>
            </div>
        )
}

export const ModalHeader = ({ children }) => {
    return (
        <div className="modal_header">
            {children}
        </div>
    )
}
export const ModalBody = ({ children }) => {
    return (
        <div className="modal_body">
            {children}
        </div>
    )
}
export const ModalFooter = ({ children }) => {
    return (
        <div className="modal_footer">
            {children}
        </div>
    )
}