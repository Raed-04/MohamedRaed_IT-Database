export default function ProductCardBody(props: {
  title: string;
  description: string;
  category: string;
}) {
  return (
    <>
      <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
        {props.title}
      </h2>
      <span className="text-gray-700 flex flex-row py-1 font-bold text-sm leading-relaxed">
        Category: <p className="font-semibold pl-1">{props.category}</p>
      </span>
      <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed flex-grow">
        {props.description}
      </p>
    </>
  );
}