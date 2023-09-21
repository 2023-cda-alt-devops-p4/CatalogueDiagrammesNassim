import Image from 'next/image'
import './Card.css';

export const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export const CardPicture = ({ src, alt }) => {
    return (
        <Image
            src={src}
            width={100}
            height={100}
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