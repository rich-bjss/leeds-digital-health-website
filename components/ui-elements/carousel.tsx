"use client"

import { useState } from "react";

export default function Carousel({ images }: { images: any[] }): any {
    const [currentImage, setCurrentImage] = useState(1);
    if (images == undefined) {
        return null
    } else {
        let tempImages = ["/roundtable1.jpg", "/roundtable1.jpg", "/roundtable1.jpg"];
        //carouselImages = images.map(MakeCarouselImage);

        let showSlide = (index: number) => {
            setCurrentImage(index);
            console.log("Clicked element" + index)
        }

        let MakeCarouselImage = (image: any, index: number) => {
            return (
                <div key={index}>
                    <img src={image} className="w-full" ></img>
                </div>
            )
        }

        let MakeCarouselButton = (image: any, index: number) => {
            return (
                <input key={index}
                    type="button"
                    value={index + 1}
                    onClick={e => showSlide(index)}
                    className="p-2 border my-3 mx-1" />
            )
        }

        carouselImages = tempImages.map(MakeCarouselImage);

        return (
            <div className="p-5">
                <div>
                    {carouselImages[currentImage]}
                </div>
                <div className="flex justify-center">
                    {[tempImages, tempImages, tempImages].map(MakeCarouselButton)}
                </div>
            </div>
        )
    }
}

let carouselImages = [];
