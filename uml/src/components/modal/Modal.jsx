import Image from 'next/image';
import { Button } from '../button/Button';
import './Modal.css';

export const Modal = ({ props, display, onClick }) => {

    if (display === props.id)
        return (
            <div key={props.id} className="modal">
                <ModalHeader>
                    <Button onClick={onClick}> X </Button>
                    <h1> {props.name} </h1>
                </ModalHeader>
                <Image
                    src={props.picture}
                    width={200}
                    height={100}
                    alt={props.name}
                />
                <div className="modal_info">

                    <div> {props.description} </div>
                </div>
            </div>
        )

}

export const ModalHeader = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export const ModalBody = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
export const ModalFooter = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}