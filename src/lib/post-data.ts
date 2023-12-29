import { IPostData } from '@/types/next-auth';

const postData = async ({ url, method = 'post', body, token }: IPostData) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_REST_API}/${url}`, {
    body: body,
    method: method,
    mode: 'cors',
    headers: headers,
  });

  if (res.ok) {
    return res.json();
  }
  return res.text().then((text) => {
    throw new Error(text);
  });
};

export { postData };
