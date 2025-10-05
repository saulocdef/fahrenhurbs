import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
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
        <div className="text-sm/6 text-center sm:text-left text-white mt-24">
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
      </main>
    </div>
  );
}
