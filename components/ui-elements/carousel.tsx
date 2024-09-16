"use client"

import { useState } from "react";
import Image from "next/image";

export default function Carousel({ images }: { images: any[] }): any {
    const [currentImage, setCurrentImage] = useState(1);
    if (images == undefined) {
        return null
    } else {
        let tempImages = ["/roundtable1.jpg", "/logo.png", "/roundtable1.jpg"];
        //carouselImages = images.map(MakeCarouselImage);

        let showSlide = (index: number) => {
            setCurrentImage(index);
            console.log("Clicked element" + index)
        }

        let prevSlide = () => {
            if (currentImage == 0) {
                //setCurrentImage(images.length - 1);
                setCurrentImage(tempImages.length - 1);
            } else {
                setCurrentImage(currentImage - 1);
            }
        }

        let nextSlide = () => {
            //if (currentImage == images.length - 1) {
            if (currentImage == tempImages.length - 1) {
                setCurrentImage(0);
            } else {
                setCurrentImage(currentImage + 1);
            }
        }

        let MakeCarouselImage = (image: any, index: number) => {
            return (
                <div key={index}>
                    <Image alt={"image"} src={image} className="h-[40rem]" />
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
            <div className="p-5 flex flex-col items-center">
                <div className="">
                    {carouselImages[currentImage]}
                </div>
                <div className="flex justify-center">
                    {/*images.map(MakeCarouselButton)*/}
                    {[tempImages, tempImages, tempImages].map(MakeCarouselButton)}
                </div>
            </div>
        )
    }
}

let carouselImages = [];
