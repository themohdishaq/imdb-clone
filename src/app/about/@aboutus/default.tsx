import Link from "next/link";

export default async function aboutus() {
    return (
        <section className=" flex flex-col border-2 rounded-lg p-4 items-center justify-center">
            <h2 className="text-xl">Default aboutus</h2>
            <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
            <Link href={'/about'} className="bg-purple-500 cursor-pointer w-1/2 px-2 py-4 text-white flex items-center justify-center rounded-xl text-2xl">

                About us
            </Link>

        </section>
    )
}