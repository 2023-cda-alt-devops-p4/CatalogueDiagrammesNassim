import Image from 'next/image'

export const Card = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const CardPicture = ({ children, src, alt }) => {
    return (
        <>
            <Image
                src={src}
                width={500}
                height={500}
                alt={alt}
            />
            {children}
        </>
    )
}

export const CardTitle = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}