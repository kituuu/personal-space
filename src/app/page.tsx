import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic";

async function ImagesContainer() {
  // Data acess the layer
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 px-5 sm:px-10">
      {images.map((image) => (
        <div
          key={image.id}
          className="flex w-96 flex-col justify-center rounded-md border-[1px] border-slate-300 p-2"
        >
          <Link
            href={`/img/${image.id}`}
            className="flex items-center justify-center"
          >
            <Image
              className="h-80 w-80 rounded-md object-cover"
              src={image.url}
              width={320}
              height={320}
              alt={image.name}
            />
          </Link>
          <p className="line-clamp-1 text-center">{image.name}</p>
        </div>
      ))}
    </div>
  );
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
