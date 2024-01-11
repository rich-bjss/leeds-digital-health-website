import Speaker from "./speaker";

export default interface Talk{
    key: string;
    title: string;
    //image
    speakersCollection: { items: Speaker[]};
    //slides
    video: string;
    description: string;
}