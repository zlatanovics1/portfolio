import Image from "next/image";

export default function Testiomonials() {
  return (
    <div className="mt-32 py-10 px-20 h-72 rounded-xl border-2 border-indigo-700 flex gap-24 items-center justify-center">
      <div className="relative h-full w-1/4">
        <Image
          src="/person.jpeg"
          className="scale-150 object-cover rounded-xl"
          alt="Pic"
          fill
        />
      </div>
      <div className="relative">
        <p className="absolute -top-1 -left-6 text-7xl">&#34;</p>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
          consectetur vitae consequuntur optio nisi ullam!
        </p>
        <p className="text-gray-500 mt-8">Placeholder name, Web developer</p>
      </div>
    </div>
  );
}
