import html from "remark-html"
import { remark } from "remark"

export default async function MarkdownContent({ markdownString }: { markdownString: string }) {
    const processedContent = await remark().use(html).process(markdownString)
    const contentHtml = processedContent.toString()
    
    return <div
        className="w-full p-4 md:w-full mt-8 mr-6 mb-8 text-navy bg-gray-100 content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
}