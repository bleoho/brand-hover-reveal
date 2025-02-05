"use client";

import { useState } from "react";
import { brands } from "./data";

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState(brands[0].name);

  return (
    <div className="h-screen px-8 py-8 flex flex-col justify-between">
      <div className="grid grid-cols-12">
        <div className="col-span-2 col-start-4">
          {brands.map((brand, index) =>
            selectedBrand === brand.name ? (
              <img key={`img-${index}`} src={brand.image} alt={brand.name} />
            ) : null
          )}
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <h2 className="uppercase">Brands</h2>
        </div>
        <div className="col-span-9">
          <ul className="flex flex-wrap gap-x-3 text-5xl leading-[1.1] group">
            {brands.map((brand, index) => (
              <li
                key={index}
                className="cursor-pointer text-black group-hover:opacity-30 hover:!opacity-100 transition-opacity duration-300 ease-out"
                onMouseEnter={() => setSelectedBrand(brand.name)}
              >
                {brand.name}
                {index < brands.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
