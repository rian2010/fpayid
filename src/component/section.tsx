import React from "react";
import phoneMockup from "@/asset/section.png"; // Replace with your actual image
import Image from "next/image";

const FpayPromoSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          {/* Text Section */}
          <div>
            {/* Tag */}
            <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
              ✨ Anywhere, Anytime with F-pay
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              All Transactions Easily on Your Mobile
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-600 text-base max-w-lg">
              Paying for anything is as easy as a tap. With F-pay, you can effortlessly handle a wide range of transactions.
            </p>

            {/* CTA Button */}
            <div className="mt-6">
              <button className="px-6 py-2 text-white bg-purple-700 rounded-full hover:bg-purple-800 text-sm font-semibold shadow-sm">
                Download Apps
              </button>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 flex justify-center min-h-[500px]">
            {/* Phone Mockup */}
            <Image
              src={phoneMockup}
              alt="F-pay App"
              className="relative z-10 w-[22rem] md:w-[26rem] drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default FpayPromoSection;

