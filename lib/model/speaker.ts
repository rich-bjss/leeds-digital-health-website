import Image from "./image"

export default interface Speaker {
    key: string;
    name: string;
    jobTitle: string;
    company: string;
    description: string;
    image: Image
    sys: { id: string };
}