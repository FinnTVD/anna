const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE) || 3600; // 1h
export const baseUrlAcf = process.env.NEXT_PUBLIC_ACF_API;
export const baseUrl = process.env.NEXT_PUBLIC_V2_API;
export const baseUrlBlog = 'https://woo-api.okhub.tech/wp-json/post/v1/posts';
export const fetchDataRest = async (
  method: string,
  url: string,
  variables = {}
) => {
  const res = await fetch(`${baseUrl}/${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({
    //   variables,
    // }),
    next: { revalidate },
    // cache: 'no-store'
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
};
