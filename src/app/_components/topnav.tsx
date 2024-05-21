
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { SimpleUploadButton } from "./simple-upload-button"

export const TopNav = () => {
    return (
      <nav className="flex items-center justify-between gap-4 p-4 text-2xl border-b-2">
        <div>Gallery</div>
        <div className="flex flex-row gap-4 items-center">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
              <SimpleUploadButton />
                <UserButton/>
            </SignedIn>
        </div>
      </nav>
    )
  }