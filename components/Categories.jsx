import { useState, useEffect } from "react";
import { getCategories } from "../services";
import Link from "next/link";

const Categories = () => {
  const [categories, setSategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setSategories(newCategories));
  }, []);

  return (
    <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b">Categories</h3>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug}>
          <span className="block pb-3 mb-3 cursor-pointer">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
