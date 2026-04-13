const ImageCard=({image})=>{
    return(
        <div className="image-card card">
            <img src={image.download_url} alt={image.author} />
            <p>{image.author}</p>
        </div>
    )
}
export default ImageCard