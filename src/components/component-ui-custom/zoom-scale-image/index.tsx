'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface IProps {
  height: string | number;
  width: string | number;
  image: string;
  scale?: number;
  alt: string;
}
interface IScaleImage {
  widthImage: null | number;
  heightImage: null | number;
}
function ZoomScaleImage(props: IProps) {
  const { height, width, image, scale, alt } = props;

  const imageRef = useRef<any>(null);

  const [scaleImage, setScaleImage] = useState<IScaleImage>({
    widthImage: 50,
    heightImage: 50,
  });

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.addEventListener('mousemove', (event: any) => {
        const left = event.clientX - imageRef.current.offsetLeft;
        const top = event.clientY - imageRef.current.offsetTop;

        const sizeImage = imageRef.current.getBoundingClientRect();
        const { height, width } = sizeImage;

        // Xử lý vị trí
        const percentY = (top / height) * 100;
        const percentX = (left / width) * 100;

        setScaleImage({ widthImage: percentX, heightImage: percentY });
      });
    }
  }, [imageRef]);

  return (
    <div className={`h-[${height ?? 200}] w-[${width ?? 200}] overflow-hidden`}>
      <Image
        ref={imageRef}
        objectFit="cover"
        width={400}
        height={400}
        className="w-full h-full object-cover hover:scale-[1.5]"
        src={image ?? '/img/no_image.jpg'}
        style={{
          transformOrigin: `${scaleImage.widthImage}% ${scaleImage.heightImage}%`,
        }}
        alt={alt ?? ''}
      />
    </div>
  );
}

export default ZoomScaleImage;
