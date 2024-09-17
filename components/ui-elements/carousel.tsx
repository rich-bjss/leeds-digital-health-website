"use client"

import { useState } from "react";
import Image from "next/image";
import { default as ImageType } from "../../lib/model/image"

export default function Carousel({ images }: { images: ImageType[] }) {
    if (images.length == 0) {
        return (
            <></>
        )
    } else {
        const [currentImage, setCurrentImage] = useState(0);

        const MakeCarouselImage = (image: ImageType, index: number) => {
            return (
                <div key={index}>
                    <Image alt={image.description || ""} src={image.url} width={image.width} height={image.height} />
                </div>
            )
        }

        const carouselImages = images.map(MakeCarouselImage);

        let showSlide = (index: number) => {
            setCurrentImage(index);
        }

        let MakeCarouselButton = (image: any, index: number) => {
            return (
                <input key={index}
                    type="button"
                    value={index + 1}
                    onClick={e => showSlide(index)}
                    className="p-2 border my-3 mx-1 w-7" />
            )
        }

        return (
            <div className="p-5 flex flex-col items-center">
                <div className="">
                    {carouselImages[currentImage]}
                </div>
                {carouselImages.length > 1 &&
                    <div className="flex justify-center">
                        {carouselImages.map(MakeCarouselButton)}
                    </div>
                }
            </div>
        )
    }
}
