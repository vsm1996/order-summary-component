import Card from "@/components/card";

export default function Home() {
  return (
    <main className="relative bg-[url(/images/pattern-background-mobile.svg)] med:bg-[url(/images/pattern-background-desktop.svg)] bg-no-repeat bg-contain min-h-screen flex flex-col p-8 gap-8 items-center font-[family-name:var(--font-red-hat)]">
      <div className="bg-blue-100 inset-0 absolute -z-1"></div>
      <section className="z-10 flex flex-col items-center justify-center w-full min-h-dvh">
        <Card />
      </section>
    </main>
  );
}
