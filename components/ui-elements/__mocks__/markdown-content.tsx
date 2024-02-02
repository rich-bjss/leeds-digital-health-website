export default function MarkdownContent({
  markdownContent,
  className
}: {
  markdownContent: string
  className?: string
}) {
  return (
    <div className="markdown-content-mock">
      <p className="markdown-content-prop">{markdownContent}</p>
      <p className="markdown-content-classname-prop">{className}</p>
    </div>
  )
}
