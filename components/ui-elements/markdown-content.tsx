import html from "remark-html"
import { remark } from "remark"

import { cn } from "@/lib/tailwind-helper"

export default async function MarkdownContent({
  markdownContent,
  className
}: {
  markdownContent: string
  className?: string
}) {
  const processedContent = await remark().use(html).process(markdownContent)
  const htmlContent = processedContent.toString()
  
  return (
    <div
      className={cn( 'content text-justify',
        className ? className : ''
      )}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
