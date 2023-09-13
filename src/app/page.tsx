import CoveoAtomicSearchInterface from "./components/coveo/coveo-search-page";

export default function Home() {
  return (
    <main className="font-sans">
      <h1 className="p-4 mb-5 bg-blue-500 text-white text-xl text-center">
        Coveo Atomic Search Page with Next.js
      </h1>
      <CoveoAtomicSearchInterface></CoveoAtomicSearchInterface>
    </main>
  );
}
