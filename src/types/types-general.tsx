export interface IDetailProductRes {
  id?: number;
  name?: string;
  slug?: string;
  category?: {
    name?: string;
  }[];
  featuredImage?: string;
  stoc_quantity?: number;
  galleryImgs?: string[];
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  total_sales: number;
  manage_stock: boolean;
  stock_quantity: any;
  stock_status: string;
  backorders: string;
  low_stock_amount: string;
  sold_individually: false;
  weight: string;
  length: string;
  width: string;
  height: string;
  upsell_ids: number[];
  cross_sell_ids: number[];
  parent_id: number;
  reviews_allowed: boolean;
  purchase_note: string;
  attributes: string[];
  default_attributes: [];
  menu_order: number;
  post_password: string;
  virtual: false;
  downloadable: boolean;
  category_ids: number[];
  tag_ids: number[];
  shipping_class_id: number;
  downloads: string[];
  image_id: string;
  gallery_image_ids: number[];
  download_limit: number;
  download_expiry: number;
  rating_counts: number[] | string[];
  average_rating: string;
  review_count: number;
  meta_data: string[];
}

export interface IItemProduct {
  id?: number;
  name?: string;
  price?: number;
  ratings?: number;
  salePrice?: number;
  seller?: string;
  sku?: string;
  slug?: string;
  featuredImage?: string;
  categories?: string[];
  variations?: {
    attributes?: {
      attribute_color?: string;
      variation_id?: number;
    };
  }[];
}

export interface IProductVariantItem {
  attributes?: {
    color: string;
  };
  id?: number;
}

export interface IItemInputGlobal {
  name: string;
  type: string;
  placeHolder: string;
}

export interface IItemInputSelectGlobal {
  name: string;
  width?: string;
  placeHolder: string;
  listOption: {
    value: string;
    label: string;
  }[];
}

export interface listInputGlobal {
  name: string;
  require?: boolean;
  type: 'input' | 'select-option' | 'text-area';
  placeHolder?: string;
  width?: string;
  listOption?: {
    value: string;
    label: string;
  }[];
}
