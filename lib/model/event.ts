import Talk from "./talk";

export default interface Event {
    key: string;
    title: string;
    description: string;
    date: string;
    talksCollection: { items: Talk[] };
    slides: any;
    image: { url: string};
    video: string;
    slug: string;
    meetupEventId: string;
}