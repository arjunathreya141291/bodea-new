// @ts-nocheck
import ProductCard from "@components/product/product-card";
import Button from "@components/ui/button";
import { FC, useContext, useEffect } from "react";
import { useProductsQuery } from "@framework/product/get-all-products";
import Router, { useRouter } from "next/router";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useTranslation } from "next-i18next";
import { Product } from "@framework/types";
import { SearchContext } from "@contexts/search";
interface ProductGridProps {
  className?: string;
}
export const ProductGrid: FC<ProductGridProps> = ({ className = "" }) => {
  const { query, pathname } = useRouter();
  const router = useRouter();
  var {
    isFetching: isLoading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    data,
    error,
  } = useProductsQuery({ limit: 10, ...query });
  if (error) return <p>{error.message}</p>;

  const { t } = useTranslation("common");

  const { myArray, searchProducts, setSearchProducts } =
    useContext(SearchContext);

  useEffect(() => {
    router.push(
      {
        pathname,
        query: { ...query, myArray },
      },
      undefined,
      { scroll: false }
    );

    const newValueOfSearchProducts = "";

    if (myArray.length > 0) {
      newValueOfSearchProducts = parseInt(searchProducts) - 1;
      setSearchProducts(newValueOfSearchProducts);
    }
  }, [myArray]);

  useEffect(() => {
    console.log(query.height !== null);
    if (data && query.height && query.height !== null) {
      // console.log("i am in here");
      // console.log(data);
      // console.log(data?.pages[0].data.length);
      setSearchProducts(data?.pages[0].data.length);
    }
  }, [router, data]);

  return (
    <>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
      >
        {isLoading && !data?.pages?.length ? (
          <ProductFeedLoader limit={20} uniqueKey="search-product" />
        ) : (
          data?.pages?.map((page) => {
            return page?.data?.map((product: Product) => (
              <ProductCard
                key={`product--key${product.id}`}
                product={product}
                variant="grid"
              />
            ));
          })
        )}
      </div>
      <div className="text-center pt-8 xl:pt-14">
        {hasNextPage && (
          <Button
            loading={loadingMore}
            disabled={loadingMore}
            onClick={() => fetchNextPage()}
            variant="slim"
          >
            {t("button-load-more")}
          </Button>
        )}
      </div>
    </>
  );
};
