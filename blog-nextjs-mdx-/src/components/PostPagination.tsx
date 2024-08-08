import Link from "next/link";

interface Props {
  totalPages: number;
  curretPages?: number;
}

const PostPagination = ({ totalPages, curretPages = 1 }: Props) => {
  return (
    <>
      <div className="flex gap-4 m-auto">
        <Link
          href={`/page/${curretPages - 1}`}
          className={`${
            curretPages === 1
              ? "text-gray-600 cursor-not-allowed"
              : "text-blue-700"
          }`}
        >
          Prev
        </Link>

        {[...Array(totalPages)].map((_, index) => (
          <Link
            key={index + 1}
            href={`/page/${index + 1}`}
            className={`${
              curretPages === index + 1
                ? "text-gray-600 cursor-not-allowed"
                : "text-blue-700"
            }`}
          >
            {index + 1}
          </Link>
        ))}

        <Link
          href={`/page/${curretPages + 1}`}
          className={`${
            curretPages === totalPages
              ? "text-gray-600 cursor-not-allowed"
              : "text-blue-700"
          }`}
        >
          Next
        </Link>
      </div>
    </>
  );
};

export default PostPagination;
