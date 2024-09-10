export default function Carousel({images}: {images: any[]}): any {
    if (images == undefined) {
        return null
    } else {
        return (
            <div>
                {images.map(MakeCarouselImage)}
            </div>
        )
    }
}

function MakeCarouselImage(image: any) {
    return (
        <div>
            <img src={image} className="w-full" alt={image}></img>
        </div>
    )
}