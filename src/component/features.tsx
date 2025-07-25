import React, { useState } from "react";
import { QrCode, ArrowRightLeft, Fingerprint, Shield } from "lucide-react";

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState("balance");

  const features = [
    {
      id: "balance",
      name: "Balance Transfer",
      description:
        "Allows users to transfer money to other users. Supports real-time transactions with encrypted security (e.g., PIN, biometric verification) to protect funds.",
      icon: ArrowRightLeft,
      color: "bg-indigo-100 text-indigo-600",
      mockupImage:
        "https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png",
      mockupAlt:
        "Balance transfer interface showing amount input and recipient selection",
    },
    {
      id: "qr",
      name: "QR Payment",
      description:
        "Enables fast payments by scanning QR codes from merchants or other users. Designed for bill payments, retail shopping, or peer-to-peer transfers.",
      icon: QrCode,
      color: "bg-emerald-100 text-emerald-600",
      mockupImage:
        "https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png",
      mockupAlt: "QR code scanner interface with payment confirmation",
    },
    {
      id: "biometric",
      name: "Biometric Payment",
      description:
        "Secure facial recognition for login and transactions, minimizing password reliance. Continuous improvements enhance accuracy, prevent spoofing, and ensure device compatibility.",
      icon: Fingerprint,
      color: "bg-amber-100 text-amber-600",
      mockupImage:
        "https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png",
      mockupAlt: "Facial recognition interface for payment authorization",
    },
    {
      id: "security",
      name: "Security",
      description:
        "Protect your wallet with encryption, biometric verification, and fraud detection. Stay secure with real-time monitoring and multi-layer authentication.",
      icon: Shield,
      color: "bg-sky-100 text-sky-600",
      mockupImage:
        "https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png",
      mockupAlt: "Security settings interface with authentication options",
    },
  ];

  const activeFeatureData = features.find((f) => f.id === activeFeature);

  if (!activeFeatureData) {
    return null; // Or a fallback UI like <p>Loading...</p>
  }

  return (
    <div id="feature" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold text-indigo-600">
          Digital Wallet Features
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Everything you need for mobile payments
        </p>

        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            {features.map((feature) => (
              <button
                key={feature.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${activeFeature === feature.id
                  ? `${feature.color} shadow-md`
                  : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <feature.icon className="h-5 w-5" />
                <span className="font-medium">{feature.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 relative">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="lg:grid lg:grid-cols-2">
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${activeFeatureData.color}`}
                >
                  <activeFeatureData.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                  {activeFeatureData.name}
                </h3>
                <p className="mt-4 text-gray-600 max-w-lg">
                  {activeFeatureData.description}
                </p>
              </div>

              <div className="relative flex items-center justify-center p-5">
                <div className="relative w-64 h-[28rem] rounded-3xl border-12 border-gray-800 overflow-hidden shadow-2xl bg-gray-900">
                  <div className="h-full w-full overflow-hidden">
                    <div className="h-full w-full flex flex-col">
                      <div className="flex-1 bg-gray-100 relative">
                        <img
                          src={activeFeatureData.mockupImage}
                          alt={activeFeatureData.mockupAlt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 hidden md:grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`rounded-xl p-6 cursor-pointer transition-all ${activeFeature === feature.id
                ? `ring-2 ring-offset-2 ${feature.color
                  .replace("bg-", "ring-")
                  .replace("-100", "-500")} shadow-md`
                : "bg-white hover:shadow-md"
                }`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <div
                className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${feature.color}`}
              >
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveFeatures;

