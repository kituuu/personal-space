import Link from "next/link";

const mockLinks = [
  "https://utfs.io/f/6a8ea8bc-db45-46bc-9a02-08719df2657b-n0tuc1.jpg",
  "https://utfs.io/f/8e9c733b-9116-492f-b569-8a8b45cffc50-lvqzpx.jpg",
  "https://utfs.io/f/ed90e052-0120-41e3-a538-e65572db9844-bfurb7.jpg",
  "https://utfs.io/f/e8de9323-d873-43c6-b6b7-b0ad8ae1a99d-nxg7g6.jpg",
];

const mockImages = mockLinks.map((url,index) => ({
  id: index+1,
  url
}))

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
