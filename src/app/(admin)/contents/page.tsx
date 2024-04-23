import Link from "next/link";

export default async function Page() {
  return (
    <>
      <Link
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href={"/contents/create"}
      >
        글쓰기
      </Link>
    </>
  );
}
