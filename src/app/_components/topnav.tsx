"use client"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { UploadButton } from "~/utils/uploadthing"

export const TopNav = () => {
  const router = useRouter()
    return (
      <nav className="flex items-center justify-between gap-4 p-4 text-2xl border-b-2">
        <div>Gallery</div>
        <div className="flex flex-row gap-4">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
              <UploadButton endpoint="imageUploader" onClientUploadComplete={()=>{
                router.refresh(); // optimised refresh, provided my next
              }}/>
                <UserButton/>
            </SignedIn>
        </div>
      </nav>
    )
  }