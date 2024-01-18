import html from "remark-html"
import { remark } from "remark"

export default async function MarkdownContent({ markdownContent }: { markdownContent: string }) {
    const processedContent = await remark().use(html).process(markdownContent)
    const htmlContent = processedContent.toString()
    
    return <div
        className="w-full p-4 md:w-full my-8 text-navy bg-gray-100 content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
}