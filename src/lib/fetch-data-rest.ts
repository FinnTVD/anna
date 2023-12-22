const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE) || 3600; // 1h
const baseUrl = process.env.NEXT_PUBLIC_REST_API;
const baseUrlAcf = process.env.NEXT_PUBLIC_ACF_API;

export const fetchDataRest = async (method: string, url: string, variables = {}) => {
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

export const fetchDataAcf = async (method: string, url: string) => {
  const res = await fetch(`${'https://woo-api.okhub.tech/wp-json/acf/v3'}/${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate },
    // cache: 'no-store'
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};