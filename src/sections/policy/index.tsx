'use client';

import { baseUrl, fetchDataRest } from '@/lib/fetch-data-rest';
import SectionHome from '@/sections/home/view/SectionHome';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import './style.css';
import LoadingGlobal from '@/components/component-ui-custom/loading-global';

interface IPropPolicy {
  slug: string;
}

function Policy({ slug }: IPropPolicy) {
  const [dataPolicy, setDataPolicy] = useState(null) as any;
  const [isLoading, setIsLoading] = useState(true);
  const paramApi: any = {
    method: 'get',
    urlPolicy: `wp/v2/pages?slug=${slug}`,
  };
  const getListPolicy = useSWR(`${baseUrl}${paramApi.urlPolicy}`, () =>
    fetchDataRest(paramApi.method, paramApi.urlPolicy).then((res: any) => {
      setDataPolicy(res[0]);
      setIsLoading(false);
    })
  );

  useEffect(() => {
    getListPolicy.mutate();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center policy py-24 md:py-12 mb-12">
          {' '}
          <LoadingGlobal stroke="#55D5D2" />
        </div>
      ) : (
        <div className="container py-24 md:py-12 px-[5rem] md:px-4 m-auto">
          <h4 className="text-black text-[7.5rem] md:text-2xl font-semibold pb-10 md:pb-4">
            {dataPolicy?.title?.rendered}
          </h4>
          <div className="flex justify-between flex-wrap">
            <div
              className="w-full min-h-[300px] policy-page"
              dangerouslySetInnerHTML={{
                __html: `${dataPolicy ? dataPolicy?.content?.rendered : ''}`,
              }}
            />
          </div>
        </div>
      )}
      <SectionHome />
    </div>
  );
}

export default Policy;
