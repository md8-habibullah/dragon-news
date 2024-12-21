import { useLoaderData } from "react-router-dom";

export default function CategoryPage() {
  const {data} = useLoaderData()
  console.log(data)
  return <div>i am from page.....</div>;
}
