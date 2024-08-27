export const LinkSosmed = ({href, src, alt, width}) => {
    return (
        <a href={href}>
            <img src={src} alt={alt} width={width}/>
        </a>
    )
}