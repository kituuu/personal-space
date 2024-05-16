
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic"

async function ImagesContainer() {
  // Data acess the layer
  const images = await getMyImages()

  return (
    <div className="flex flex-wrap px-5 justify-center sm:px-10 gap-4">
        {images.map((image)=>(
          <div key={image.id} >
            <Link href={`/img/${image.id}`}>
            <Image className="w-96 h-96 object-cover" src={image.url} width={400} height={400} alt={image.name} /></Link>
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
