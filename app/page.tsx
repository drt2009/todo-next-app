import Image from "next/image";
import Header from "./components/Header";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Header />
      <div className="z-10 w-full items-center font-mono lg:flex flex min-h-screen flex-col p-24">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
