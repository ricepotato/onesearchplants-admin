import QuillEditor from "@/app/components/QuillEditor";

export default async function Page() {
  return (
    <>
      <QuillEditor />
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          작성 완료
        </button>
      </div>
    </>
  );
}
