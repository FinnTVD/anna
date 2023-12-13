import { IPostData } from '@/types/next-auth';

const postData = async ({ url, method = 'post', body, token }: IPostData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API}/${url}`, {
    body: body,
    method: method,
    mode: 'cors',
    headers: new Headers(
      token
        ? {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          }
        : {
            'Content-Type': 'application/json',
          }
    ),
  });

  if (res.ok) {
    return res.json();
  }
  return res.text().then((text) => {
    throw new Error(text);
  });
};

export { postData };
