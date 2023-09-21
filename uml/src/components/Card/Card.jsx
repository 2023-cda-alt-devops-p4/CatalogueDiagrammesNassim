import Image from 'next/image'
import './Card.css';

export const Card = ({ children, size, design }) => {
    return (
        <div className={`card ${size} ${design}`}>
            {children}
        </div>
    )
}

export const CardPicture = ({ src, alt }) => {
    return (
        <Image
            src={src}
            width={349}
            height={150}
            alt={alt}
        />
    )
}

export const CardTitle = ({ children }) => {
    return (
        <div className="card_title">
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
export const CardPosition = ({ children, mobile, tablette }) => {
    return (
        <div className={`card_position ${mobile} ${tablette}`}>
            {children}
        </div>
    )
}