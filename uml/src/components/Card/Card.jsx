import Image from 'next/image'
import './Card.css';

export const Card = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const CardPicture = ({ src, alt }) => {
    return (
        <Image
            src={src}
            width={500}
            height={500}
            alt={alt}
        />
    )
}

export const CardTitle = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const CardDescription = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}