export default function MarkdownContent({
  markdownContent,
  className
}: {
  markdownContent: string
  className?: string
}) {
  return (
    <div data-testid="markdown-content-mock">
      <p data-testid="markdown-content-prop">{markdownContent}</p>
      <p data-testid="markdown-content-classname-prop">{className}</p>
    </div>
  )
}
