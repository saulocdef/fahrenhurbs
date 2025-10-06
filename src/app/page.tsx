import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center w-full">
        <div style={{ width: 250 }}>
          <Image
            className="light:invert"
            src="/logo.png"
            alt="FAHRENHurb Logo"
            width={250}
            height={0}
            style={{ height: "auto", width: "100%" }}
            priority
          />
        </div>
        <div className="text-sm/6 text-center text-white mt-20 w-full flex flex-col items-center">
          <div className="tracking-[-.01em] text-3xl font-bold flex justify-center">
            YOUR FIRST TIME{" "}
          </div>
          <div className="mt-2 tracking-[-.01em] flex justify-center">
            CLICK HERE TO ENJOY{" "}
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="/map"
              className="rounded-full bg-green-600 text-white px-4 py-2 text-lg font-semibold shadow hover:bg-green-700 transition-colors inline-block text-center"
            >
              Start journey
            </a>
          </div>
        </div>
        <div className="text-sm/6 text-center text-white max-w-lg mt-10 w-full flex flex-col items-center">
          <p className="tracking-[-.01em] flex justify-center">
            FAHRENHurbs is a platform dedicated to understanding and addressing the impacts of climate change on urban areas. Our mission is to provide data-driven insights and strategies for building more resilient cities.{" "}
          </p>
          <p className="text-xs tracking-[-.01em] flex justify-center mt-10">
            To see a static version of our proposal,
            <a
              href="https://fahrenhurbs.my.canva.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-400 hover:text-green-600 ml-1"
            >
              click here
            </a>
          </p>
          <p className="text-xs tracking-[-.01em] flex justify-center">
            To see our paper with details of this project,
            <a
              href="/FAHRENHurbs_Paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-green-400 hover:text-green-600 ml-1"
            >
              click here
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
