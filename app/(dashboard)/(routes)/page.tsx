import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" ">
      <h1>Home</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
