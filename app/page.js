import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col py-14 justify-center items-center">
          
          <Image
          src="/yaatrip.png"
          alt="Yaatrip"
          width={500} // Adjust width as needed
          height={100}
          style={{ objectFit: 'contain' }}
          />
        

        <div className="mx-auto my-20 relative rounded-full flex items-center justify-center h-[80vw] w-[80vw] md:h-[90vh] md:w-[90vh]">
          <div className="z-10 absolute inset-0 flex items-center justify-center text-primary">
            <p>Coming Soon...</p>
          </div>
          <Image
              src="/loading.png"
              alt="Yaatrip"
              width={500} // Adjust width as needed
              height={100}
              style={{ objectFit: 'contain' }}
              className="rounded-full flex items-center justify-center animate-spin-slow"
              />
        </div>
      </main>


      <footer className="flex gap-6 flex-wrap items-center justify-center mt-10 p-4">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
