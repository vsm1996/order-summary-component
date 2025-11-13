import Image from "next/image";
import Hero from "@/public/images/illustration-hero.svg";
import AnnualPlan from "@/components/annualPlan";
import Button from "@/components/button";

export default function Home() {
  return (
    <main className="relative bg-[url(/images/pattern-background-mobile.svg)] med:bg-[url(/images/pattern-background-desktop.svg)] bg-no-repeat bg-contain min-h-screen flex flex-col p-8 gap-8 items-center font-[family-name:var(--font-red-hat)]">
      <div className="bg-blue-100 inset-0 absolute -z-1"></div>
      <section className="z-10 flex flex-col items-center justify-center w-full min-h-dvh">
        <div className="bg-white rounded-[20] w-[327] md:w-[450] drop-shadow-(--card-shadow)">
          <div className="overflow-hidden rounded-t-[20] aspect-16/9">
            <Image
              src={Hero}
              alt="hero"
              className="h-full object-cover object-center"
            />
          </div>
          <div className="w-full p-[24] md:p-[48] text-gray-600 flex flex-col gap-[32]">
            <div className="w-full flex flex-col gap-[16] text-pretty items-center">
              <h1 className="text-2 text-blue-950">Order Summary</h1>
              <p className="text-4-med text-center">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>
              <AnnualPlan />
            </div>
            <div className="flex flex-col items-center gap-[32]">
              <Button label="Proceed to Payment" dropShadow={true} />
              <Button
                label="Cancel Order"
                textColor="gray"
                variation="transparent"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
