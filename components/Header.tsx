import { SignInButton, SignedOut, UserButton, auth } from "@clerk/nextjs";
import { ModeToggle } from "./Toggle";

const Header = () => {
  const user = auth();
  console.log(user.userId);
  return (
    <header className="bg-gray-100 dark:bg-slate-900 px-3">
      <div className="flex justify-between p-3 items-center">
        <div className="font-bold">Upload Gallery</div>
        <div className="flex space-x-5 items-center">
          <ModeToggle />
          {!user.userId ? (
            <SignedOut>
              <SignInButton afterSignInUrl="/dashboard"></SignInButton>
            </SignedOut>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
