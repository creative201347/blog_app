import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setSategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setSategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-2">
      <div className="border-b w-full inline-block border-blue-400 py-4">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl text-white">
              Creative Nepal
            </span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.name} href={`/category/${category.slug}`}>
              <span
                className="md:float-right text-sm  mt-2 align-middle text-white
                ml-4 font-semibold cursor-pointer"
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
