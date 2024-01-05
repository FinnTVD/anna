'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface IProps {
  height: string | number;
  width: string | number;
  image: string;
  scale?: number;
  alt?: string;
}
interface IScaleImage {
  width: null | number;
  height: null | number;
}
function ZoomScaleImage(props: IProps) {
  const { height, width, image, scale, alt } = props;

  const imageRef = useRef<any>(null);

  const [scaleImage, setScaleImage] = useState<IScaleImage>({
    width: null,
    height: null,
  });

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.addEventListener('mousemove', (event: any) => {
        const x = event.clientX - imageRef.current.offsetLeft;
        const y = event.clientY - imageRef.current.offsetTop;

        const { height } = imageRef.current.getBoundingClientRect();
        const { width } = imageRef.current.getBoundingClientRect();
        // Xử lý vị trí
        const percentY = (x / height) * 100;
        const percentX = (y / width) * 100;

        setScaleImage({ width: percentY, height: percentX });
      });
    }
  }, [imageRef]);
  return (
    <div
      ref={imageRef}
      className={`h-[${height ?? 200}] w-[${width ?? 200}] overflow-hidden`}
    >
      <Image
        objectFit="cover"
        width={400}
        height={400}
        className={`w-full h-full object-cover hover:scale-[${scale ?? 1.5}]`}
        src={image ?? '/img/no_image.jpg'}
        style={{
          transformOrigin: `${scaleImage.width}% ${scaleImage.height}%`,
        }}
        alt={alt ?? ''}
      />
    </div>
  );
}

export default ZoomScaleImage;
