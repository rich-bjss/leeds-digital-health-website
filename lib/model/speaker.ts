export default interface Speaker {
    key: string;
    name: string;
    jobTitle: string;
    company: string;
    description: string;
    image: { url: string };
    sys: { id: string };
}