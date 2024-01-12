import Image from 'next/image';

export default function Banner() {
  return (
    <div className="h-screen -translate-y-[9rem] relative w-full overflow-hidden">
      <Image
        className="w-full h-full object-cover z-[5] absolute top-0 left-0"
        src={'/img/httt/banner_desktop.jpg'}
        alt="background hanh trinh tu te"
        width={1600}
        height={900}
      />
      <h1 className="absolute z-0">Hành trình tử tế by anna</h1>
      <div className="w-[87.5rem] absolute z-10 top-[27.473vh] left-1/2 -translate-x-1/2">
        <Image
          className="w-[33.1rem] h-[35.vh] object-contain"
          src={'/img/httt/slogan.png'}
          alt="slogan hanh trinh tu te"
          width={550}
          height={350}
        />
        <p className="mt-[3.835vh] text-[#414141] text-[1.25rem] font-medium leading-[1.65] tracking-[-0.0625rem] w-[38.4375rem]">
          Là một dự án phi lợi nhuận hướng đến cộng đồng và xã hội, chúng mình
          mong muốn{' '}
          <span className="text-[#7BD7D6]">lan toả giá trị nhân ái</span>, tiếp
          thêm động lực cộng đồng, và cùng nhau tiến về phía{' '}
          <span className="text-[#7BD7D6]">tương lai tốt đẹp hơn.</span>
        </p>
      </div>
    </div>
  );
}
