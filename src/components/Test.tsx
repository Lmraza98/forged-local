"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <section className="relative w-full h-[calc(100vh-64px)] bg-gradient-to-br from-white to-orange-50 overflow-hidden">
      <div className="w-full h-full flex items-start">
        <div className="container mx-auto px-4 md:mx-8 lg:mx-32 lg:pt-12">
          {/* Mobile-optimized badge - Positioned at the top */}
          <div className="w-full mb-4 flex justify-start">
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm text-orange-600">
              <span className="font-medium">Trusted by 500+ local businesses</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-4 lg:gap-24 h-full">
            {/* Right content (Image and Stats) - Move to top on mobile */}
            <div className="flex-1 flex justify-center relative order-first lg:order-none">
              <div className="relative w-full max-w-[250px] lg:max-w-[400px]">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange-200 opacity-30 blur-3xl"></div>
                <div className="relative z-10">
                  <div className="overflow-hidden shadow-xl">
                    <Image
                      src="/business.png"
                      width={400}
                      height={400}
                      alt="Local business storefront"
                      className="w-full h-auto object-contain"
                      priority
                    />
                    <div className="absolute inset-0"></div>
                  </div>

                  {/* Stats card - Consistent styling across breakpoints */}
                  <div className="absolute -bottom-3 -right-3 rounded-lg bg-white p-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                        <span className="text-sm font-bold text-orange-600">+82%</span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-900">Average increase in</p>
                        <p className="text-xs font-bold text-orange-600">local inquiries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Left content (Text) */}
            <div className="flex-1 max-w-5xl order-last lg:order-none">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 text-center lg:text-left">
                Empowering Local Businesses with Tailored Web Solutions
              </h1>

              <p className="text-gray-600 mb-4 text-base lg:text-lg lg:leading-relaxed max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                Custom websites and digital marketing strategies designed to help your local business stand out, attract
                more customers, and grow your revenue.
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-4 text-base text-gray-600 justify-center lg:justify-start mb-4">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>Results in 48 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>100% satisfaction</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center lg:justify-start">
                <Button
                  size={isMobile ? "lg" : "default"}
                  className="bg-orange-600 hover:bg-orange-700 text-white h-12 px-5 text-base"
                >
                  Free SEO Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size={isMobile ? "lg" : "default"}
                  variant="outline"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 h-12 px-5 text-base"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}