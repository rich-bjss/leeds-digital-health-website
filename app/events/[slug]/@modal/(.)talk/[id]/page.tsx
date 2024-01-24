import Modal from "@/components/ui-elements/client-modal"
import TalkDetails from "@/components/event/talk/talk-details"

export default function TalkModal({
  params
}: {
  params: { slug: string, id: string }
}) {
  return (
    <Modal>
      <TalkDetails talkId={params.id} eventSlug={params.slug}/>
    </Modal>
  )
}
