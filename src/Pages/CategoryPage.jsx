import { useLoaderData, useParams } from "react-router-dom";

export default function CategoryPage() {
  const { data } = useLoaderData();
  const params = useParams();
  console.log(data);
  return <div className="text-5xl">i am from page.....{params.id}</div>;
}