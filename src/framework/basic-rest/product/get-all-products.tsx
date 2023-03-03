import { QueryOptionsType, Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { filter } from "lodash";
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
    console.log(data);
    data = data.filter((p: any) => !myArray.includes(p.name));
    console.log("after", data);
  }

  if ("height" in _params) {
    const height = _params.height;

    console.log("hhhh", height);
    console.log("before", data);
    data = data.filter((el: any) => {
      return el.height !== undefined;
      // return el.height !== "undefined" && el.height === height;
    });
    console.log("data", data);

    data = data.filter((el: any) => {
      console.log(el.height);
      return el.height === parseInt(height);
    });
    console.log("data", data);
  }

  const { price } = _params;

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
      } else if (price === "Storage - Drawers,Material - Natural Wood") {
        return el.storage === "drawers";
      } else if (price === "Storage - Shelves,Material - Natural Wood") {
        return el.storage === "shelves";
      } else if (price === "Storage - No Storage,Material - Natural Wood") {
        return el.storage === "no storage";
      } else if (price === "Storage - Drawers,Material - Manufactured Wood") {
        return el.storage === "drawers";
      } else if (price === "Storage - Shelves,Material - Manufactured Wood") {
        return el.storage === "shelves";
      } else if (
        price === "Storage - No Storage,Material - Manufactured Wood"
      ) {
        return el.storage === "no storage";
      } else if (price === "Storage - Drawers,Material - Composite Wood") {
        return el.storage === "drawers";
      } else if (price === "Storage - Shelves,Material - Composite Wood") {
        return el.storage === "shelves";
      } else if (price === "Storage - No Storage,Material - Composite Wood") {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - Drawers,Warranty - One Year,Material - Natural Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - One Year,Material - Manufactured Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - One Year,Material - Composite Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - Unlimited,Material - Natural Wood"
      ) {
        console.log("am in ");
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - Unlimited,Material - Manufactured Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - Unlimited,Material - Composite Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - Manufacturer,Material - Natural Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - Manufacturer,Material - Manufactured Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Drawers,Warranty - Manufacturer,Material - Composite Wood"
      ) {
        return el.storage === "drawers";
      } else if (
        price ===
        "Storage - Shelves,Warranty - One Year,Material - Natural Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - One Year,Material - Manufactured Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - One Year,Material - Composite Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - Unlimited,Material - Natural Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - Unlimited,Material - Manufactured Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - Unlimited,Material - Composite Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - Manufacturer,Material - Natural Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - Manufacturer,Material - Manufactured Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - Shelves,Warranty - Manufacturer,Material - Composite Wood"
      ) {
        return el.storage === "shelves";
      } else if (
        price ===
        "Storage - No Storage,Warranty - One Year,Material - Natural Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - One Year,Material - Manufactured Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - One Year,Material - Composite Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - Unlimited,Material - Natural Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - Unlimited,Material - Manufactured Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - Unlimited,Material - Composite Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - Manufacturer,Material - Natural Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - Manufacturer,Material - Manufactured Wood"
      ) {
        return el.storage === "no storage";
      } else if (
        price ===
        "Storage - No Storage,Warranty - Manufacturer,Material - Composite Wood"
      ) {
        return el.storage === "no storage";
      }
    });
  }

  return {
    data: data.sort((a: any, b: any) => b.sale_price - a.sale_price),
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
