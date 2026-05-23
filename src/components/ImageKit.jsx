import { Image } from "@imagekit/react";

const ImageKit = ({src, className, alt, h, w}) => {
  return (
    <Image
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
        src={src}
        className={className}
        height={h}
        widtht={w}
        alt={alt}
        loading="lazy"
    />
  )
}

export default ImageKit