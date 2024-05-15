
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic"

async function ImagesContainer() {
  // Data acess the layer
  const images = await getMyImages()

  return (
    <div className="flex flex-wrap gap-4">
        {images.map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url} />
            <p>{image.name}</p>
          </div>
        ))}
      </div>
  )
}

export default async function HomePage() {
  return (
    <main>
      <SignedIn>  
          <ImagesContainer />
      </SignedIn>

      <SignedOut>
        <h1 className="text-center">Please sign in first</h1>
      </SignedOut>
      
    </main>
  );
}
