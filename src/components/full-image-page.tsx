import { getImage } from "~/server/queries"


const FullPageImageView = async (props: {id:number}) => {
  const image = await getImage(props.id)
  return (
      <div className="flex w-full h-full min-w-0">
        <div className="flex-shrink flex justify-center w-full items-center">
        <img src={image.url} className="max-h-screen flex-shrink object-cover"/>
        </div>
        <div className="flex flex-col w-56 flex-shrink-0">
            <div className="text-xl font-bold ">{image.name}</div>
        </div>
      </div>
  )
}

export default FullPageImageView