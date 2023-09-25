import Image from 'next/image';
import { Button } from '../button/Button';
import './Modal.css';

export const Modal = ({ props, display, onClick }) => {

    if (display === props.id)
        return (
            <div key={props.id} className="modal">
                <Image
                    src={props.picture}
                    width={200}
                    height={100}
                    alt={props.name}
                />
                <h1> {props.name} </h1>
                <div> {props.description} </div>
                <Button onClick={onClick}> X </Button>
            </div>
        )

}