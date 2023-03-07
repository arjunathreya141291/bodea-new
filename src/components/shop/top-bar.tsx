import { Drawer } from "@components/common/drawer/drawer";
import FilterIcon from "@components/icons/filter-icon";
import Text from "@components/ui/text";
import { useUI } from "@contexts/ui.context";
import FilterSidebar from "@components/shop/filter-sidebar";
import ListBox from "@components/ui/list-box";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { getDirection } from "@utils/get-direction";
import motionProps from "@components/common/drawer/motion";
import { useCart } from "@contexts/cart/cart.context";
import { useContext } from "react";
import { SearchContext } from "@contexts/search";

export default function SearchTopBar() {
  const { openFilter, displayFilter, closeFilter } = useUI();
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const dir = getDirection(locale);
  // const { searchProducts } = useCart();
  const { searchProducts, showRemovedProducts, productName } =
    useContext(SearchContext);
  const contentWrapperCSS = dir === "ltr" ? { left: 0 } : { right: 0 };
  const { searchValue } = useContext(SearchContext);

  return (
    <div className="flex justify-between items-center">
      <Text variant="pageHeading" className="hidden lg:inline-flex pb-1">
        {searchValue}
      </Text>
      {/* <button
        className="lg:hidden text-heading text-sm px-4 py-2 font-semibold border border-gray-300 rounded-md flex items-center transition duration-200 ease-in-out focus:outline-none hover:bg-gray-200"
        onClick={openFilter}
      >
        <FilterIcon />
        <span className="ps-2.5">{t("text-filters")}</span>
      </button> */}
      {showRemovedProducts === true && (
        <span>
          Removed Products:
          <span className=" m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading">
            {productName}
          </span>{" "}
          <svg
            id="clock"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            style={{ display: "inline-block" }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {"           "}
          <svg
            id="save"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            style={{ display: "inline-block" }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </span>
      )}

      <div className="flex items-center justify-end">
        <ListBox
          options={[
            { name: "text-sorting-options", value: "options" },
            { name: "text-newest", value: "newest" },
            { name: "text-popularity", value: "popularity" },
            { name: "text-price-low-high", value: "low-high" },
            { name: "text-price-high-low", value: "high-low" },
          ]}
        />
      </div>
      {/* TODO: need to use just one drawer component */}
      <Drawer
        placement={dir === "rtl" ? "right" : "left"}
        open={displayFilter}
        onClose={closeFilter}
        contentWrapperStyle={contentWrapperCSS}
        {...motionProps}
      >
        <FilterSidebar />
      </Drawer>
    </div>
  );
}
