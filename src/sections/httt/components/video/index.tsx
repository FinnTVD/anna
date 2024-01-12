import Image from 'next/image';

export default function Video() {
  return (
    <div className="w-full h-[47.125rem] mt-[0.69rem] relative">
      <video
        src="https://youtu.be/V1C0OPZ0jMw?si=IK2nYSRHcBDb-dhm"
        className="w-full h-full object-cover"
        poster="/img/httt/poster.jpg"
      ></video>
      <Image
        src={'/img/httt/play.svg'}
        alt="poster"
        className="w-[7rem] h-[7rem] absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-10 object-cover cursor-pointer"
        height={120}
        width={120}
      />
    </div>
  );
}
