
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
export const dynamic = "force-dynamic"

async function ImagesContainer() {

  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
        {[...images,...images,...images,...images,...images].map((image)=>(
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
