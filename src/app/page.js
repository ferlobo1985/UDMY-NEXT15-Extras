import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Image
          src="/images/image_one.jpg"
          alt="Picture of a horse"
          // fill={true}
          width={300}
          height={300}
          quality={75}
          loading="lazy" // eager
          style={{
            border:'5px solid red'
          }}
        />
      </div>
    </>
  );
}
