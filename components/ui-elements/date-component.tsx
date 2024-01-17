import { format } from 'date-fns'

export default function DateComponent({ dateString, className }: { dateString: string, className?: string }) {
  return (
    <time className={className || ""} dateTime={dateString}>
      {format(new Date(dateString), 'h:mma LLLL	d, yyyy')}
    </time>
  )
}
