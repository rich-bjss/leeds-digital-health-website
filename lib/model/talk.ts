import Speaker from "./speaker";

export default interface Talk{
    key: string;
    title: string;
    image: {url: string}
    speakersCollection: { items: Speaker[]};
    slides: any
    video: string;
    description: string;
    sys: {id: string}
}