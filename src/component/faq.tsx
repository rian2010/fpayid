import React, { useState } from "react";

const faqs = [
  {
    question: "What is F-pay?",
    answer:
      "F-pay is a digital wallet platform designed for fast, secure, and convenient campus-based transactions. It enables students to pay with face authentication, QR codes, and balance transfers.",
  },
  {
    question: "How do I top up my balance?",
    answer:
      "You can top up your F-pay balance through authorized kiosks, linked bank accounts, or participating merchants around campus.",
  },
  {
    question: "Is F-pay secure?",
    answer:
      "Yes. F-pay uses biometric face recognition, encrypted data, and multi-layer authentication to protect your account and transactions.",
  },
  {
    question: "Where can I use F-pay?",
    answer:
      "F-pay is accepted in participating campus canteens, bookstores, copy centers, and with other student vendors who are F-pay merchants.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq" className="bg-gray-50 dark:bg-gray-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-white">
          Have questions? We’re here to help.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-medium text-white">
                {faq.question}
              </span>
              <svg
                className={`h-5 w-5 text-gray-500 transform transition-transform ${activeIndex === index ? "rotate-180" : ""
                  }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 14a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 14z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="mt-3 text-gray-600 text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

