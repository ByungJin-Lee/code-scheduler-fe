import Link from "next/link";
import MainTemplate from "../templates/MainTemplate";

export default function Home() {
  return (
    <MainTemplate>
      <Link href={"/workspace"}>Workspace</Link>
    </MainTemplate>
  );
}
