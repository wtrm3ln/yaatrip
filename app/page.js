import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="h-screen relative flex overflow-hidden justify-center gap-5 md:pl-48 pt-12">

      <div className="hidden md:flex absolute rounded-full bg-primary -bottom-[60vh] -left-[110vh] h-[150vh] w-[150vh] flex items-center justify-center rounded-full">
          <div className="rounded-full w-[90%] h-[90%] border-2 border-light flex items-center justify-center shadow-xl ">
          <div className="rounded-full w-[97%] h-[97%] border-dashed border-2 border-light">
            
            </div>
          </div>
        </div>

        <div className="absolute z-10 left-0 md:left-auto top-0 bottom-0 md:right-0 flex flex-col justify-between p-4 text-primary">
          <div>
          <p className="font-bold">Contact Us</p>
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
            <div>
            <p className="font-bold text-black">Visit our parent website:</p>
            <a
              className="flex items-center gap-2 text-black hover:underline hover:underline-offset-4"
              href="https://tulsitechlabs.vercel.app/"
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
              Tulsi Tech Labs Pvt Ltd→
            </a>
            </div>
      </div>

      <div className="p-10 ">
      <main className="mx-auto md:flex justify-bottom px-6">
          
          <Image
          src="/yaatrip logo-03.png"
          alt="Yaatrip"
          width={700} // Adjust width as needed
          height={400}
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          />
        

        <div className="-ml-10 relative rounded-full flex flex-col justify-end rounded-full">
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
      <div className="px-6 mt-7">
            <p className="text-[#238858] font-semibold text-3xl">Coming Soon...</p>
      </div>
      </div>
    </div>
    <footer>

        <section className="md:flex justify-between items-center bg-gray-100 p-8">
        {/* Left side: Logo */}
        <div className="w-1/3">
            <img src="/logo2.png" alt="Tulsi Tech Labs Logo" className="w-48" />
        </div>

        {/* Right side: Contact Details */}
        <div className="w-2/3 text-gray-700 md:text-right">
            <h2 className="text-xl text-gray-400 font-semibold">CONTACT</h2>
            <p>HN0 14, WD N0 4, Pataudi - 122503 (Haryana)</p>
            <p>Phone Number: <a href="tel:+919499116400" className="text-blue-600">+91 9499116400</a></p>
            <p>E-Mail: <a href="mailto:info@tulsitechlabs.com" className="text-blue-600">info@tulsitechlabs.com</a></p>
        </div>
        </section>

        <div className="bg-primary text-white py-8">
            <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Tulsi Tech Labs. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
