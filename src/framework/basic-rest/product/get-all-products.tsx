import { QueryOptionsType, Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import shuffle from "lodash/shuffle";
import { useInfiniteQuery } from "react-query";

type PaginatedProduct = {
  data: Product[];
  paginatorInfo: any;
};
const fetchProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  var { data } = await http.get(API_ENDPOINTS.PRODUCTS);

  console.log(_params);

  if ("myArray" in _params) {
    const myArray = _params.myArray;
    data = data.filter((p: any) => !myArray.includes(p.name));
  }
  // console.log(_key);

  const test = ["Meridiani"];

  const { price } = _params;

  if (test.length > 0) {
    console.log(data);
    data = data.filter((p: any) => !test.includes(p.name));
  }

  if ("price" in _params) {
    data = data.filter((el: any) => {
      if (price === "Storage - Drawers") {
        return el.storage === "drawers";
      } else if (price === "Storage - Shelves") {
        return el.storage === "shelves";
      } else if (price === "Storage - No Storage") {
        return el.storage === "no storage";
      } else if (price === "Storage - Drawers,Warranty - Unlimited") {
        return el.storage === "drawers";
      } else if (price === "Storage - Shelves,Warranty - Unlimited") {
        return el.storage === "shelves";
      } else if (price === "Storage - No Storage,Warranty - Unlimited") {
        return el.storage === "no storage";
      } else if (price === "Storage - Drawers,Warranty - One Year") {
        return el.storage === "drawers";
      } else if (price === "Storage - Shelves,Warranty - One Year") {
        return el.storage === "shelves";
      } else if (price === "Storage - No Storage,Warranty - One Year") {
        return el.storage === "no storage";
      } else if (price === "Storage - Drawers,Warranty - Manufacturer") {
        return el.storage === "drawers";
      } else if (price === "Storage - Shelves,Warranty - Manufacturer") {
        return el.storage === "shelves";
      } else if (price === "Storage - No Storage,Warranty - Manufacturer") {
        return el.storage === "no storage";
      } else if (
        price === "Storage - Drawers,Warranty - One Year,Material - Solid Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - One Year,Material - Manufactured Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price === "Storage - Drawers,Warranty - One Year,Material - Composite"
      ) {
        return el.storage === "drawers";
      } else if (
        price === "Storage - Drawers,Warranty - Unlimited,Material - Solid Wood"
      ) {
        console.log("am in ");
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - Unlimited,Material - Manufactured Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price === "Storage - Drawers,Warranty - Unlimited,Material - Composite"
      ) {
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - Manufacturer,Material - Solid Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - Manufacturer,Material - Manufactured Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - Manufacturer,Material - Composite"
      ) {
        return el.storage === "drawers";
      } else if (
        price === "Storage - Shelves,Warranty - One Year,Material - Solid Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - One Year,Material - Manufactured Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price === "Storage - Shelves,Warranty - One Year,Material - Composite"
      ) {
        return el.storage === "shelves";
      } else if (
        price === "Storage - Shelves,Warranty - Unlimited,Material - Solid Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - Unlimited,Material - Manufactured Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price === "Storage - Shelves,Warranty - Unlimited,Material - Composite"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - Manufacturer,Material - Solid Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - Manufacturer,Material - Manufactured Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - Manufacturer,Material - Composite"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - No Storage,Warranty - One Year,Material - Solid Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - One Year,Material - Manufactured Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - One Year,Material - Composite"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - Unlimited,Material - Solid Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - Unlimited,Material - Manufactured Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - Unlimited,Material - Composite"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - Manufacturer,Material - Solid Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - Manufacturer,Material - Manufactured Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - Manufacturer,Material - Composite"
      ) {
        return el.storage === "no storage";
      }
    });
  }

  return {
    data: shuffle(data),
    paginatorInfo: {
      nextPageUrl: "",
    },
  };
};

const useProductsQuery = (options: QueryOptionsType) => {
  return useInfiniteQuery<PaginatedProduct, Error>(
    [API_ENDPOINTS.PRODUCTS, options],
    fetchProducts,
    {
      getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
    }
  );
};

export { useProductsQuery, fetchProducts };
