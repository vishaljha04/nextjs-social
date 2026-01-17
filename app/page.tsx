import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-4">
      <ClerkProvider>
        <SignedOut>
        <SignInButton mode="modal" >
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle/>
      </ClerkProvider>
    </div>
  );
}
