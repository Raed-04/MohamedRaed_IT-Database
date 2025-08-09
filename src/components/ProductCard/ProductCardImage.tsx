export default function ProductCardImage(props: {image: string, id: number}) {
    return (
      <div className="aspect-w-16 aspect-h-12 bg-gray-50">
        <img
          src={props.image}
          alt={`Image of Product ${props.id}`}
          className="w-full h-48 object-contain p-4"
        />
      </div>
    );
}