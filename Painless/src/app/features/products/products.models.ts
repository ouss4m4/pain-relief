export interface ISingleProductInfo {
  node: {
    title: string;
    description: string;
    descriptionHtml: string;
    featuredImage: {
      originalSrc: string;
      altText: string;
    };
  };
}
