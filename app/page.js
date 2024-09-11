import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen grid justify-center items-center">

      <div className="hidden md:flex fixed rounded-full bg-primary bottom-0 md:top-0 md:-left-[70vh] h-[90vh] w-[90vh] flex items-center justify-center rounded-full">
          <div className="rounded-full w-[90%] h-[90%] border-2 border-light flex items-center justify-center">
          <div className="rounded-full w-[97%] h-[97%] border-dashed border-2 border-light">
            
            </div>
          </div>
        </div>

        <div className="fixed top-0 right-0 p-4 flex gap-6 flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@yaatrip.com
            </a>

            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 9499116400 
            </a>
        </div>

      <main className="mx-auto my-36 md:my-auto md:flex py-14 px-6 md:pl-48">
          
          <Image
          src="/yaatrip-1.png"
          alt="Yaatrip"
          width={700} // Adjust width as needed
          height={100}
          style={{ objectFit: 'contain' }}
          />
        

        <div className="-ml-10 relative rounded-full flex items-center justify-center rounded-full">
          <Image
              src="/loading.png"
              alt="Yaatrip"
              width={300} // Adjust width as needed
              height={300}
              style={{ objectFit: 'contain' }}
              className="rounded-full flex items-center justify-center animate-spin-slow"
              />
        </div>
      </main>
      <div className="flex text-2xl items-center justify-center text-primary">
            <p>Coming Soon...</p>
      </div>


      <footer className="flex gap-6 flex-wrap items-center justify-center">
      <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to Tulsi Tech Labs →
        </a>
      </footer>
    </div>
  );
}
