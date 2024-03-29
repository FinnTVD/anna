// const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE) || 3600; // 1h
// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
//
// export default async function fetchData(
//   method: string,
//   query: string,
//   variables = {}
//   // usePonyfill = true
// ) {
//   const res = await fetch(baseUrl, {
//     method: method,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query,
//       variables,
//     }),
//     // cache: 'no-store'
//     next: { revalidate },
//   });
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//
//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//     // return null
//   }
//
//   return res.json();
// }
