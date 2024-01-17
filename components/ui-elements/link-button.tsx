import Link from "next/link"

export default function LinkButton({ children, href }: { children: React.ReactNode, href: string }) {
    return <Link
        className="bg-pink px-8 py-4 rounded text-lg text-white"
        href={href}
    >
        {children}
    </Link>
}