import {
  categories,
  type ProductCategory,
} from "../../interfaces/ProductsInterfaces";

interface ProductFiltersProps {
  name: string;
  setName: (value: string) => void;
  category: ProductCategory | "";
  setCategory: (value: ProductCategory | "") => void;
  minPrice: number | "";
  setMinPrice: (value: number | "") => void;
  maxPrice: number | "";
  setMaxPrice: (value: number | "") => void;
}

export default function ProductFilters({
  name,
  setName,
  category,
  setCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center mb-6">
      <input
        type="text"
        name="name"
        placeholder="Search by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded px-3 py-2"
      />
      <select
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value as ProductCategory | "")}
        className="border rounded px-3 py-2"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) =>
          setMinPrice(e.target.value === "" ? "" : Number(e.target.value))
        }
        className="border rounded px-3 py-2 w-24"
        min={0}
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
        }
        className="border rounded px-3 py-2 w-24"
        min={0}
      />
    </div>
  );
}
