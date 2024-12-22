/* eslint-disable react/prop-types */

export default function SingleNews({ news }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <img
        className="w-full h-48 object-cover"
        src={news.thumbnail_url}
        alt={news.title}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{news.title}</h3>
        <div className="flex items-center mb-2">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={news.author.img}
            alt={news.author.name}
          />
          <div>
            <p className="text-sm font-semibold">{news.author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          {news.details.slice(0, 150)}...
        </p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
}
