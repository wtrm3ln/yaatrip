import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col justify-center items-center">
          
          
          <div className="md:flex mx-auto">
          <Image
          src="/yaatrip.png"
          alt="Yaatrip"
          width={500} // Adjust width as needed
          height={100}
          style={{ objectFit: 'contain' }}
          />

          <Image
          src="/proto.png"
          alt="Yaatrip"
          width={400} // Adjust width as needed
          height={100}
          style={{ objectFit: 'contain' }}
          />
          </div>
        

        <div className="bg-primary mx-auto my-20 relative rounded-full flex items-center justify-center h-[80vw] w-[80vw] md:h-[90vh] md:w-[90vh]">
          <div className="absolute inset-0 flex items-center justify-center text-gray-200">
            <p>Coming Soon...</p>
          </div>
          <div className="rounded-full flex items-center justify-center h-[90%] w-[90%] border-dashed border-4 border-light md:animate-spin">
            <div className="rounded-full flex items-center justify-center h-[95%] w-[95%] border-2 border-light">
            </div>
          </div>
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
