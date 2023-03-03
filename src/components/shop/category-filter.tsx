import { useCategoriesQuery } from "@framework/category/get-all-categories";
import { CheckBox } from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useTranslation } from "next-i18next";
import { useCart } from "@contexts/cart/cart.context";
import { SearchContext } from "@contexts/search";
import { CustomDimensions } from "./custom-dimensions";

export const CategoryFilter = () => {
  // const { searchProducts, setSearchProducts } = useCart();
  const [openFilter, setOpenFilter] = useState(true);
  const { setSearchProducts } = useContext(SearchContext);
  const { t } = useTranslation("common");
  const router = useRouter();
  const { pathname, query } = router;
  const { data, isLoading } = useCategoriesQuery({
    limit: 10,
  });
  const selectedCategories = query?.category
    ? (query.category as string).split(",")
    : [];
  const [htmlFormState, sethtmlFormState] =
    React.useState<string[]>(selectedCategories);

  //  console.log("searchProducts", searchProducts);

  React.useEffect(() => {
    sethtmlFormState(selectedCategories);
  }, [query?.category]);

  if (isLoading) return <p>Loading...</p>;

  function handleItemClick(e: React.htmlFormEvent<HTMLInputElement>): void {
    setSearchProducts("64,000");

    console.log("cate", e);
    const { value } = e.currentTarget;

    console.log(value);
    console.log("cate22222", e);

    let currenthtmlFormState = htmlFormState.includes(value)
      ? htmlFormState.filter((i) => i !== value)
      : [...htmlFormState, value];
    const { category, ...restQuery } = query;
    router.push(
      {
        pathname,
        query: {
          ...restQuery,
          ...(!!currenthtmlFormState.length
            ? { category: currenthtmlFormState.join(",") }
            : {}),
        },
      },
      undefined,
      { scroll: false }
    );
  }
  const items = data?.categories.data;
  return (
    <div className="block border-b border-gray-300 pb-7 mb-7">
      <h3 className="text-heading text-sm md:text-base font-semibold mb-10">
        {t("text-category")}
      </h3>

      {/* <h5 className="text-heading text-sm md:text-base font-semibold mb-7">
        Depth
      </h5>
      <div className="mt-2 flex flex-col space-y-4 mb-7 pb-7">
        {items?.map((item: any) => (
          <CheckBox
            key={item.id}
            label={item.name}
            name={item.name.toLowerCase()}
            checked={htmlFormState.includes(item.slug)}
            value={item.slug}
            onChange={handleItemClick}
          />
        ))}
      </div> */}

      <div id="accordionExample5" className="mb-7 pb-7">
        <div
          className="border border-t-0 border-neutral-200 bg-white "
          style={{ borderTop: "1px outset" }}
        >
          <h2 className="mb-0" id="headingTwo5">
            <button
              className="group  relative flex w-full items-center rounded-none border-1 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseTwo5"
              aria-expanded="false"
              aria-controls="collapseTwo5"
            >
              Depth
              <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo5"
            className="!visible hidden"
            data-te-collapse-item
            aria-labelledby="headingTwo5"
          >
            <div className="py-4 px-5">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="border border-t-0 border-neutral-200 bg-white ">
          <h2 className="mb-0" id="headingTwo5">
            <button
              className="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseTwo5"
              aria-expanded="false"
              aria-controls="collapseTwo5"
            >
              Height
              <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo5"
            className="!visible hidden"
            data-te-collapse-item
            aria-labelledby="headingTwo5"
          >
            <div className="py-4 px-5">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>

        <div className="border border-t-0 border-neutral-200 bg-white">
          <h2 className="mb-0" id="headingTwo5">
            <button
              className="group relative flex w-full items-center rounded-none border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseTwo5"
              aria-expanded="false"
              aria-controls="collapseTwo5"
            >
              Width
              <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo5"
            className="!visible hidden"
            data-te-collapse-item
            aria-labelledby="headingTwo5"
          >
            <div className="py-4 px-5">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <CustomDimensions></CustomDimensions>
    </div>
  );
};
