import TitlePag from "@/components/pagesComponent/TitlePag";
import Link from "next/link";

const page = () => {
  return (
    <>
      <TitlePag title={"Home"} />
      <Link href={"/blog"}> blog </Link>
    </>
  );
};

export default page;
