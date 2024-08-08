import TitlePag from "@/components/pagesComponent/TitlePag";
import { POST } from "../page";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const post = POST.find((post) => post.slug === params.slug);
  return {
    title: post.title,
    description: post.title + " - Descripción",
  };
}

const Slug = ({ params }) => {
  const post = POST.find((post) => post.slug === params.slug);

  return (
    <>
      <TitlePag title={post.title} />
      <p className="text-center"> {post.content}</p>

      <div className="text-center">
        <Link
          href={"/blog"}
          className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-950 transition-all duration-300"
        >
          Volver
        </Link>
      </div>
    </>
  );
};

export default Slug;
