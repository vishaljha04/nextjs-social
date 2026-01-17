"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MenuIcon,
  HomeIcon,
  BellIcon,
  UserIcon,
  LogOutIcon,
  LogInIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  SignInButton,
  useUser,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetContent,
} from "./ui/sheet";

const MobileNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex md:hidden items-center space-x-2">

      <ModeToggle />

      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-64">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <nav className="flex items-start flex-col space-y-3  p-4">

            <Button
              variant="ghost"
              asChild
              onClick={() => setShowMobileMenu(false)}
            >
              <Link
                href="/"
                className="flex items-center gap-3 text-sm font-medium"
              >
                <HomeIcon className="w-5 h-5" /> Home
              </Link>
            </Button>

            {isSignedIn && user ? (
              <>
                <Button
                  variant="ghost"
                  asChild
                  onClick={() => setShowMobileMenu(false)}
                >
                  <Link
                    href={`/profile/${user.emailAddresses[0].emailAddress.split("@")[0]}`}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <UserIcon className="w-5 h-5" /> Profile
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  asChild
                  onClick={() => setShowMobileMenu(false)}
                >
                  <Link
                    href="/notifications"
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <BellIcon className="w-5 h-5" /> Notifications
                  </Link>
                </Button>

                <SignOutButton>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-3 justify-start w-full"
                  >
                    <LogOutIcon className="w-5 h-5" />
                    Logout
                  </Button>
                </SignOutButton>
              </>
            ) : (
              <SignInButton mode="modal">
                <Button
                  variant="default"
                  className="flex items-center gap-3 justify-center w-full"
                >
                  <LogInIcon className="w-5 h-5" />
                  Sign In
                </Button>
              </SignInButton>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
