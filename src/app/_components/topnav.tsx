import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"


export const TopNav = () => {
    return (
      <nav className="flex items-center justify-between gap-4 p-4 text-2xl border-b-2">
        <div>Gallery</div>
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
      </nav>
    )
  }