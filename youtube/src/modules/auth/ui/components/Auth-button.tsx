import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";



export const AuthButton = () => {
  return (
    <Button
      variant="outline"
      className="px-2 py-4 text-sm font-medium rounded-full bg-white text-blue-600
      hover:text-blue-500 hover:border-blue-500 shadow-none">
      <UserCircleIcon />
      <p>Sign in</p>
    </Button>
  );
};
