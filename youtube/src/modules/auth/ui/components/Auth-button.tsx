import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  return (
    <div>
      <SignedIn>
        <UserButton/>
      </SignedIn>

      <SignedOut>
          <SignInButton mode="modal">
            <Button
              variant="outline"
              className="px-2 py-4 text-sm font-medium rounded-full bg-white text-blue-600
            hover:text-blue-500 hover:border-blue-500 shadow-none">
              <UserCircleIcon />
              <p>Sign in</p>
            </Button>
          </SignInButton>
      </SignedOut>
    </div>
  );
};
