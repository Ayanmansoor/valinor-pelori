import { mysupabase } from "./Configs";
import { useEffect } from "react";

async function getAllProducts() {
  const { data: products, error } = await mysupabase
    .from("products")
    .select("*,discounts(*)");
  if (products) {
    return products;
  } else {
    return new Error(error.message);
  }
}

async function getAllCollections() {
  const { data: collections, error } = await mysupabase
    .from("collection")
    .select("*");
  if (collections) {
    return collections;
  } else {
    return new Error(error.message);
  }
}

async function getAllBanner() {
  const { data: homebanner, error } = await mysupabase
    .from("HomeBanner")
    .select("*");
  if (homebanner) {
    return homebanner;
  } else {
    return new Error(error.message);
  }
}

async function getAllTrendingProducts() {
  const { data: trendings, error } = await mysupabase
    .from("trendings")
    .select("*,products(*)");
  if (trendings) {
    return trendings;
  } else {
    return new Error(error.message);
  }
}

// async function getAllLimitedEditionProducts() {
//   const { data: trendings, error } = await mysupabase
//     .from("products")
//     .select("*, brands(*)")
//     .eq("is_limited_edition", true);
//   if (trendings) {
//     return trendings;
//   } else {
//     return new Error(error.message);
//   }
// }

async function getAllNewArrivalProducts() {
  const { data: newArrivals, error } = await mysupabase
    .from("products")
    .select("*,brands(*)")
    .eq("is_new_arrival", true);
  if (newArrivals) {
    return newArrivals;
  } else {
    return new Error(error.message);
  }
}

async function getAllNewCollections() {
  const { data: newCollections, error } = await mysupabase
    .from("collection")
    .select("*")
    .eq("is_new_collection", true);
  if (newCollections) {
    return newCollections;
  } else {
    return new Error(error.message);
  }
}

async function getProductData(slug) {
  try {
    const { data: product, error } = await mysupabase // Add `await` here
      .from("products")
      .select("*,brands(*),collection(*),discounts(*)")
      .eq("slug", slug)
      .single();

    if (error) {
      throw new Error(error.message); // Properly handle errors
    }

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null; // Return null instead of throwing an error
  }
}

async function getCollectionBanner() {
  try {
    const { data: collectionbanner, error } = await mysupabase
      .from("collectionBanner")
      .select("*")
      .limit(3);

    if (error) {
      throw new Error(error.message);
    }

    return collectionbanner;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

async function getProductBaseOnCollection(slug) {
  try {
    if (!slug) {
      return null;
    }

    const { data: collectionBaseData, error } = await mysupabase
      .from("products")
      .select(
        `
      *,
      brands(*),
      collection!inner(id, slug),
      discounts(*)
    `
      ) // Ensure we join correctly
      .eq("collection.slug", slug); // Filter based on collection slug

    if (error) {
      throw new Error(error.message);
    }
    return collectionBaseData;
  } catch (error) {
    return null;
  }
}

async function getRelatedProducts(product, slug) {
  if (!product) return [];

  const { data: relatedProducts, error } = await mysupabase
    .from("products")
    .select("*, brands(*), collection(*), discounts(*)")
    .or(
      `brand_key.eq.${product?.brand_key},collection_key.eq.${product?.collection_key}`
    )
    .neq("slug", slug) // Exclude the current product
    .limit(6);

  if (error) {
    throw new Error(error.message);
  }

  return relatedProducts;
}

export {
  getAllProducts,
  getAllCollections,
  getAllBanner,
  getAllTrendingProducts,
  getAllNewArrivalProducts,
  getAllNewCollections,
  getProductData,
  getRelatedProducts,
  getCollectionBanner,
  getProductBaseOnCollection,
};
