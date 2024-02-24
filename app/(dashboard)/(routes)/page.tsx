import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="h-screen">
      <h1>home</h1>
      <p>This is protecte page</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
