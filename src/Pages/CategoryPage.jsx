import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleNews from "./SingleNews";

export default function CategoryPage() {
  // const data = useLoaderData();
  const params = useParams();
  // console.log(data);

  // state for news
  const [newsdata, setnewsdata] = useState([]);

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setnewsdata(data.data);
      });
  }, [params]);

  return (
    <div>
      <h2 className="text-xl">this is {params.id} lineee</h2>
      <div>
        {newsdata.map((news, indx) => (
          <SingleNews key={indx} news={news}></SingleNews>
        ))}
      </div>
    </div>
  );
}
