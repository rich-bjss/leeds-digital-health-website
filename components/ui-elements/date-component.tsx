import { format } from "date-fns"

export function isFuture(dateString: string) {
  const eventDate = new Date(dateString)
  return eventDate > new Date()
}

export default function DateComponent({
  dateString,
  className
}: {
  dateString: string
  className?: string
}) {
  return (
    <time className={className || ""} dateTime={dateString}>
      {format(new Date(dateString), `${isFuture(dateString)? 'h:mma ' : ''}LLLL	d, yyyy`)}
    </time>
  )
}
