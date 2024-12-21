import { useLoaderData, useParams } from "react-router-dom";

export default function CategoryPage() {
  const { data } = useLoaderData();
  const params = useParams();
  console.log(data);
  return (
    <div className="text-5xl">
      I am from page.<span className=" pl-10 bg-green-300">__{params.id}__</span>
    </div>
  );
}
