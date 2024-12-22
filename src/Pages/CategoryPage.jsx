import { useEffect } from "react";
import { useParams } from "react-router-dom";


export default function CategoryPage() {
  // const data = useLoaderData();
  const params = useParams();
  // console.log(data);

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      .then((res) => res.json())
      .then((data) => console.log(data.data));
  }, [params]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => console.log(data.data.news_category));
  }, []);

  return (
    <div className="text-xl">
      Total News this 
      xyz(i want to show the name of this category)
       page in <span className=" px-2 bg-base-300">{params.id}</span>
      
    </div>
  );
}
