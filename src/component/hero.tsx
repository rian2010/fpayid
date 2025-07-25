import React from 'react';
import Phone from "@/asset/phone.png"
import Image from 'next/image';

export default function Hero() {

  return (
    <div id="home" className="bg-gray-50 py-12">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:pb-40">
        {/* Background Illustration */}
        <div className="absolute -bottom-4 right-0 overflow-hidden pointer-events-none">
          <img
            className="max-w-none h-auto transform scale-125 lg:scale-75 origin-bottom-right"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2">
            <div className="text-center lg:text-left md:px-16 xl:pr-20">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Transform Your{" "} experience
              </h1>
              <p className="mt-2 text-lg text-gray-600 sm:mt-6">
                Discover a powerful platform that adapts to your needs,
                streamlines your workflow, and helps you achieve more with less
                effort.
              </p>
              <a
                href="#"
                className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white bg-gray-900 rounded sm:mt-10 hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Try our app
              </a>

              <div className="mt-8 sm:mt-16">


              </div>
            </div>

            <div className="xl:col-span-1">
              <Image
                className="mx-auto w-2/3 max-w-sm animate-float"
                src={Phone}
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

