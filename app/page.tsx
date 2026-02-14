'use client';

import Image from "next/image";
import ParallaxWrapper from "./components/ParallaxWrapper";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <div
        className="absolute inset-0 -z-50 bg-top bg-no-repeat bg-size-[100%_auto]"
        style={{ backgroundImage: "url('/Aseprite/Langit.png')" }}
      />

      <ParallaxWrapper>


        <div className="h-screen flex flex-col items-center justify-start pt-10 gap-5">
          <h1 className="font-pixel text-4xl text-white drop-shadow-lg text-center">
            <TypeAnimation
              sequence={[
                'Haloo Zahraaaaa',
                1000
              ]}
              wrapper="span"
              speed={1}
              cursor={true}
              style={{ display: 'inline-block' }}
            />
          </h1>

          {/* KUCING JATUH SAAT TANAH TERBUKA */}
          <ParallaxWrapper
            startScroll={0}
            endScroll={600}
            translateY={['0px', '300px']} // Jatuh ke Jurang!
            className="z-1 relative mt-5"
          >
            <Image
              src="/Aseprite/Koceng.gif"
              alt="Koceng"
              width={150}
              height={150}
              className="pixelated -mt-32 relative z-10"
              unoptimized
            />
          </ParallaxWrapper>
          <div className="flex -mt-45 relative z-0">
            <ParallaxWrapper
              startScroll={0}
              endScroll={500}
              translateX={['0px', '-100px']}
              rotate={[0, 90]}
              className="origin-top-right"
            >
              <Image
                src="/Aseprite/Tanah.png"
                alt="Tanah Kiri"
                width={300}
                height={100}
                className="pixelated"
              />
            </ParallaxWrapper>

            <ParallaxWrapper
              startScroll={0}
              endScroll={500}
              translateX={['0px', '100px']}
              rotate={[0, -90]}
              className="origin-top-left"
            >
              <Image
                src="/Aseprite/Tanah.png"
                alt="Tanah Kanan"
                width={300}
                height={100}
                className="pixelated scale-x-[-1]"
              />
            </ParallaxWrapper>
          </div>

          <div className="relative -mt-20flex justify-center items-center z-3">
            <ParallaxWrapper
              translateY={['-320px', '120px']}
              scale={[1, 1.8]}
              className="absolute z-2"
            >
              <Image src="/Aseprite/Clouds 2.png" alt="Awan 2" width={500} height={500} className="pixelated" />
            </ParallaxWrapper>
          </div>

          <div className="relative -mt-30 flex justify-center items-center z-4">
            <ParallaxWrapper
              translateY={['-320px', '120px']}
              scale={[1, 2]}
              className="absolute z-4"
            >
              <Image src="/Aseprite/Clouds 4.png" alt="Awan 4" width={500} height={500} className="pixelated scale-x-[-1]" />
            </ParallaxWrapper>
          </div>

          <div className="relative -mt-100 flex justify-center items-center z-3">
            <ParallaxWrapper
              translateY={['-300px', '200px']}
              scale={[2, 2]}
              className="absolute z-3"
            >
              <Image src="/Aseprite/Clouds 4.png" alt="Awan 4" width={500} height={500} className="pixelated" />
            </ParallaxWrapper>
          </div>

          <div className="relative -mt-100 flex justify-center items-center z-3">
            <ParallaxWrapper
              translateY={['-300px', '200px']}
              scale={[2, 2]}
              className="absolute z-3"
            >
              <Image src="/Aseprite/Clouds 5.png" alt="Awan 4" width={500} height={500} className="pixelated" />
            </ParallaxWrapper>
          </div>


          <ParallaxWrapper
            translateY={['-320px', '800px']}
            scale={[0.5, 1.8]}
            className="z-2"
          >
            <Image src="/Aseprite/Koceng parasut.gif" alt="Koceng parasut" width={200} height={200} className="pixelated" />
          </ParallaxWrapper>


          <ParallaxWrapper
            translateY={['-320px', '120px']}
            scale={[0.5, 1.8]}
            className="z-2 absolute left-30 top-1/2"
            opacity={[0, 2]}
          >
            <Image src="/Aseprite/Aloo.gif" alt="Aloo" width={200} height={200} className="pixelated" />
          </ParallaxWrapper>


          <ParallaxWrapper
            translateY={['50px', '220px']}
            scale={[0.5, 1.8]}
            className="z-2 absolute left-30 top-1/2"
            opacity={[0, 2]}
          >
            <Image src="/Aseprite/Raa.gif" alt="Raa" width={200} height={200} className="pixelated" />
          </ParallaxWrapper>

          <ParallaxWrapper
            translateY={['150px', '320px']}
            scale={[0.5, 1.8]}
            className="z-2 absolute left-30 top-1/2"
            opacity={[0, 2]}
          >
            <Image src="/Aseprite/Happy.gif" alt="Raa" width={200} height={200} className="pixelated" />
          </ParallaxWrapper>

          <ParallaxWrapper
            translateY={['250px', '420px']}
            scale={[0.5, 1.8]}
            className="z-2 absolute left-30 top-1/2"
            opacity={[0, 2]}
          >
            <Image src="/Aseprite/14 Feb.gif" alt="Raa" width={200} height={200} className="pixelated" />
          </ParallaxWrapper>


        </div>
      </ParallaxWrapper >
      <div className="h-[4000px] w-full" />
    </main >
  );

}