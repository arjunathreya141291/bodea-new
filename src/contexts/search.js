import PropTypes from "prop-types";
import React, { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchProducts, setSearchProducts] = useState("100,000");
  const [showRemovedProducts, setShowRemovedProducts] = useState(false);
  const [productName, setProductName] = useState("");
  const [showCustomDimensionOnImage, setShowCustomDimensionOnImage] =
    useState(false);

  const context = {
    searchProducts,
    setSearchProducts,
    showRemovedProducts,
    setShowRemovedProducts,
    productName,
    setProductName,
    showCustomDimensionOnImage,
    setShowCustomDimensionOnImage,
  };

  return (
    <SearchContext.Provider value={context}>{children}</SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node,
};

export { SearchContext, SearchProvider };
