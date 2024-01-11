import Image from "next/image";

export default function LoadingMessage({ children }: { children: React.ReactNode }) {
    return <div className="mx-8 my-16 p-16 rounded bg-navy text-center">
            <div className="flex justify-center">
                <Image
                    className="w-16"
                    src="/spinner.svg"
                    alt="Loading pulse"
                    width="10"
                    height="10" />
            </div>
            <p className="text-center mt-4 text-lg italic animate-[loading_1.2s_ease-in-out_infinite]">
                {children}
            </p>
    </div>
}