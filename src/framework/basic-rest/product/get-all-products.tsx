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

  console.log(_key);
  console.log(_params);

  const { price } = _params;

  if ("price" in _params) {
    data = data.filter((el: any) => {
      if (price === "Storage - Drawers") {
        return el.storage === "drawers";
      } else if (
        price === "Storage - Drawers,Desk Surface Material - Solid wood"
      ) {
        return el.material === "wood";
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
