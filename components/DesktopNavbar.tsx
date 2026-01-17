"use client";

import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { Button } from "./ui/button";
import { BellIcon, Home, UserIcon } from "lucide-react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const DesktopNavbar = () => {
  const { user, isSignedIn } = useUser();

  return (
  <div className="hidden md:flex items-center gap-6">
  {/* Home Link */}
  <Link
    href="/"
    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
  >
    <Home className="w-4 h-4" />
    <span className="hidden lg:inline">Home</span>
  </Link>

  {/* Authenticated Links */}
  {isSignedIn && user ? (
    <div className="flex items-center gap-4">
      {/* Notifications */}
      <Link
        href="/notifications"
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        <BellIcon className="w-4 h-4" />
        <span className="hidden lg:inline">Notifications</span>
      </Link>

      {/* Profile */}
      <Link
        href={`/profile/${user.emailAddresses[0].emailAddress.split("@")[0]}`}
        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        <UserIcon className="w-4 h-4" />
        <span className="hidden lg:inline">Profile</span>
      </Link>

      {/* User Avatar + Logout */}
      <UserButton />
    </div>
  ) : (
    <SignInButton mode="modal">
      <Button variant="default">Sign In</Button>
    </SignInButton>
  )}

  {/* Theme Toggle */}
  <ModeToggle />
</div>

  );
};

export default DesktopNavbar;
