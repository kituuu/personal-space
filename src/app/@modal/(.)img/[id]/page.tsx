
import { Modal } from "./modal"
import FullPageImageView from "~/components/full-image-page"
const PhotoModal = ({params:{id:photoId}}: {params:{id:string}}) => {
  const idAsNumber = Number(photoId)
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id")
  return (
      <Modal>
        <FullPageImageView id={idAsNumber}/>
      </Modal>
  )
}

export default PhotoModal