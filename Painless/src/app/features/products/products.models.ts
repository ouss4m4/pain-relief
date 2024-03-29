export interface IProductMinInfoForList {
  node: {
    id: string;
    title: string;
    description: string;
    descriptionHtml: string;
    featuredImage: {
      originalSrc: string;
      altText: string;
    };
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
  };
}

export interface IProductDetails {
  title: string;
  totalVariants: string;
  variants: {
    edges: {
      node: {
        displayName: string;
        title: string;
        price: string;
      };
    }[];
  };
  options: {
    id: string;
  }[];
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  productType: string;
  handle: string;
  description: string;
  featuredImage: {
    id: string;
    originalSrc: string;
  };
  images: {
    edges: IProductImage[];
  };
}

export interface ICollection {
  node: {
    id: string;
    title: string;
  };
}

export interface IProductsPageState {
  collections: ICollection[];
  productsList: IProductMinInfoForList[];
  selectedProduct: IProductDetails;
}

export interface IProductImage {
  node: {
    altText: string;
    originalSrc: string;
  };
}