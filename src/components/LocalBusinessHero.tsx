import Image from 'next/image'

export function LocalBusinessHero() {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] bg-white">
      <div className="w-full h-full flex items-start md:pt-24">
        <div className="container mx-auto px-4 md:mx-8 lg:mx-32">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-24">
            {/* Left content */}
            <div className="flex-1 max-w-5xl">
              <h2 className="text-3xl lg:text-3xl font-bold mb-6">
                Empowering Local Businesses with Tailored Web Solutions
              </h2>
              <p className="text-gray-600 mb-8 text-base lg:text-lg lg:leading-relaxed max-w-2xl">
                Lorem ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem ipsum has been the industry&apos;s standard dummy text ever
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-500 text-white px-6 py-2.5 rounded-md hover:bg-red-600 transition text-base">
                  Free SEO Audit
                </button>
                <button className="border border-gray-300 px-6 py-2.5 rounded-md hover:bg-gray-50 transition text-base">
                  Schedule a Call
                </button>
              </div>
            </div>

            {/* Decorative arrow */}
            <div className="hidden lg:flex items-end h-full -translate-y-1/5">
              <Image
                src="/down-line.png"
                alt="Decorative arrow"
                width={60}
                height={60}
                className="transform -translate-x-1/2"
              />
            </div>

            {/* Right content */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-[300px] lg:max-w-[400px]">
                <Image
                  src="/business.png"
                  alt="Local Business Illustration"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 