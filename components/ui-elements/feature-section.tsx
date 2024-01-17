export default function FeatureSection({
    sectionId,
    className,
    imageUrl,
    children
}: {
    sectionId: string,
    className?: string
    imageUrl: string,
    children: React.ReactNode
}) {
    return <section id={sectionId} className={className || ""}>
        <div
            className="w-full bg-center bg-cover h-96 "
            style={{
                backgroundImage: `url(${imageUrl}?w=1050&q=75)`,
                backgroundPosition: `center 75%`
            }}
        >
            <div className="flex items-center justify-center w-full h-full bg-white bg-opacity-30">
                <div className="text-center"></div>
            </div>
        </div>
        <div className="container mx-auto">
            {children}
        </div>
    </section>
}