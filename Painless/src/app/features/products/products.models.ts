export interface ISingleProductInfo {
  node: {
    id: string;
    title: string;
    description: string;
    descriptionHtml: string;
    featuredImage: {
      originalSrc: string;
      altText: string;
    };
  };
}
