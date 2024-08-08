import { allPosts } from "contentlayer/generated";
import { getPagination } from "@/utils/PaginationUtils";

import PostsLists from "@/components/PostsList";
import PostsPagination from "@/components/PostPagination";

import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return Array.from({ length: allPosts.length }).map((_, index) => ({
    number: `${index + 1}`,
  }));
};

interface Props {
  params: {
    number: string;
  };
}

const LayoutPages = ({ params }: Props) => {
  let arrayCurrentPosts;
  let totalPagesNumber;
  try {
    const { currentItems, totalPages } = getPagination(
      allPosts,
      2,
      params.number,
    );
    arrayCurrentPosts = currentItems;
    totalPagesNumber = totalPages;
  } catch (error) {
    notFound();
  }

  return (
    <div className="grid gap-4">
      <PostsLists posts={arrayCurrentPosts} />

      {totalPagesNumber > 1 && (
        <PostsPagination
          totalPages={totalPagesNumber}
          curretPages={parseInt(params.number)}
        />
      )}
    </div>
  );
};
export default LayoutPages;
