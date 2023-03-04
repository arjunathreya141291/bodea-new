import { CheckBox } from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useTranslation } from "next-i18next";
import { SearchContext } from "@contexts/search";
import { IoClose } from "react-icons/io5";
import Link from "@components/ui/link";

const priceFilterItems = [
  {
    id: "1",
    name: "Under $50",
    slug: "$0-$50",
  },
  {
    id: "2",
    name: "$50 to $100",
    slug: "$50-$100",
  },
  {
    id: "3",
    name: "$100 to $300",
    slug: "$100-$300",
  },
  {
    id: "4",
    name: "$300 to $500",
    slug: "$300-$500",
  },
  {
    id: "5",
    name: "Over $500",
    slug: "$500-",
  },
];
export const ProductDifferences = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { pathname, query } = router;
  const selectedPrices = query?.price ? query.price.split(",") : [];
  const [formState, setFormState] = React.useState(selectedPrices);

  const [productDifference, setProductDifference] = useState("Storage");

  const { setSearchProducts } = useContext(SearchContext);

  React.useEffect(() => {
    setFormState(selectedPrices);
  }, [query?.price]);

  function handleItemClickStorage(storage) {
    itemClick();
    setSearchProducts("622");
    // const { value } = e.currentTarget;
    let value = "";
    if (storage === "Shelves") {
      value = "Storage - Shelves";
    } else if (storage === "Drawers") {
      value = "Storage - Drawers";
    } else if (storage === "No Storage") {
      value = "Storage - No Storage";
    }
    let currentFormState = formState.includes(value)
      ? formState.filter((i) => i !== value)
      : [...formState, value];
    // setFormState(currentFormState);
    const { price, ...restQuery } = query;
    router.push(
      {
        pathname,
        query: {
          ...restQuery,
          ...(!!currentFormState.length
            ? { price: currentFormState.join(",") }
            : {}),
        },
      },
      undefined,
      { scroll: false }
    );
  }

  function handleItemClickWarranty(warranty) {
    itemClick();
    setSearchProducts("82");
    const value = "";
    // const { value } = e.currentTarget;
    if (warranty === "One Year") {
      value = "Warranty - One Year";
    } else if (warranty === "Unlimited") {
      value = "Warranty - Unlimited";
    } else if (warranty === "Manufacturer") {
      value = "Warranty - Manufacturer";
    }

    // value = "Warranty - Unlimited";
    let currentFormState = formState.includes(value)
      ? formState.filter((i) => i !== value)
      : [...formState, value];
    // setFormState(currentFormState);
    const { price, ...restQuery } = query;
    router.push(
      {
        pathname,
        query: {
          ...restQuery,
          ...(!!currentFormState.length
            ? { price: currentFormState.join(",") }
            : {}),
        },
      },
      undefined,
      { scroll: false }
    );
  }

  function handleItemClickMaterial(material) {
    itemClick();

    setSearchProducts("61");
    const value = "";
    // const { value } = e.currentTarget;
    if (material === "Natural Wood") {
      value = "Material - Natural Wood";
    } else if (material === "Composite Wood") {
      value = "Material - Composite Wood";
    } else if (material === "Manufactured Wood") {
      value = "Material - Manufactured Wood";
    }

    // value = "Warranty - Unlimited";
    let currentFormState = formState.includes(value)
      ? formState.filter((i) => i !== value)
      : [...formState, value];
    // setFormState(currentFormState);
    const { price, ...restQuery } = query;
    router.push(
      {
        pathname,
        query: {
          ...restQuery,
          ...(!!currentFormState.length
            ? { price: currentFormState.join(",") }
            : {}),
        },
      },
      undefined,
      { scroll: false }
    );
  }

  const items = priceFilterItems;

  const itemClick = () => {
    if (productDifference === "Storage") {
      setProductDifference("Warranty");
    }

    if (productDifference === "Warranty") {
      setProductDifference("deskSurfaceMaterial");
    }

    if (productDifference === "deskSurfaceMaterial") {
      setProductDifference("Shelving");
    }

    if (productDifference === "Shelving") {
      setProductDifference("Storage");
    }
  };

  return (
    <div className="block border-b border-gray-300 pb-7 mb-7">
      <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
        Product Differences
      </h3>

      <div className="block max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow">
        {productDifference === "Storage" && (
          <>
            <h5 className="text-heading  text-sm md:text-base font-semibold mb-7">
              Storage
            </h5>
            <div className="flex flex-wrap -m-1.5 pt-2">
              <div
                className="group  flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading"
                onClick={() => handleItemClickStorage("Drawers")}
              >
                Drawers
              </div>

              <div
                className="group  flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading"
                onClick={() => handleItemClickStorage("Shelves")}
              >
                Shelves
              </div>

              <div
                className="group  flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading"
                onClick={() => handleItemClickStorage("No Storage")}
              >
                No Storage
              </div>
            </div>
          </>
        )}
        {productDifference === "Warranty" && (
          <>
            <h5 className="text-heading text-sm md:text-base font-semibold mb-7 skipFade">
              Warranty
            </h5>
            <div className="flex flex-wrap -m-1.5 pt-2 skipFade">
              <div
                className="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading"
                onClick={() => handleItemClickWarranty("One Year")}
              >
                One Year
              </div>

              <div
                className="group skipFade flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading"
                onClick={() => handleItemClickWarranty("Unlimited")}
              >
                Unlimited
              </div>

              <div
                className="group skipFade flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading"
                onClick={() => handleItemClickWarranty("Manufacturer")}
              >
                Manufacturer
              </div>
            </div>
          </>
        )}

        {productDifference === "deskSurfaceMaterial" && (
          <>
            <h5 className="text-heading skipFade text-sm md:text-base font-semibold mb-7">
              Surface Material
            </h5>
            <div className="flex flex-wrap -m-1.5 pt-2">
              <div
                className="group skipFade flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading"
                onClick={() => handleItemClickMaterial("Natural Wood")}
              >
                Natural Wood
              </div>

              <div
                className="group skipFade flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading"
                onClick={() => handleItemClickMaterial("Composite Wood")}
              >
                Composite Wood
              </div>

              <div
                className="group skipFade flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading"
                onClick={() => handleItemClickMaterial("Manufactured Wood")}
              >
                Manufactured Wood
              </div>
            </div>
          </>
        )}

        {productDifference === "Shelving" && (
          <>
            <h5 className="text-heading skipFade text-sm md:text-base font-semibold mb-7">
              Peripheral Shelving
            </h5>
            <div className="flex flex-wrap -m-1.5 pt-2">
              <div className="group skipFade flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                Monitor platform
              </div>

              <div className="group skipFade flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                Keyboard shelf
              </div>

              <div className="group skipFade flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                Speaker hutch
              </div>

              <div className="group skipFade flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                None
              </div>
            </div>
          </>
        )}

        {productDifference !== "Shelving" && (
          <div style={{ paddingTop: "20px" }} onClick={itemClick}>
            <Link
              href="#"
              style={{
                textDecoration: "underline",
              }}
            >
              Skip difference
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
