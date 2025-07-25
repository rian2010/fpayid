import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "What is F-Pay?",
      answer:
        "F-Pay is a secure digital wallet and payment application that allows you to send and receive money, pay bills, shop online, and manage your finances all in one place. Our platform uses advanced encryption to ensure your financial information stays protected.",
    },
    {
      id: 2,
      question: "How do I create an F-Pay account?",
      answer:
        "Creating an F-Pay account is simple. Download the F-Pay app from the App Store or Google Play Store, tap 'Sign Up', and follow the verification process. You'll need to provide a valid email address, phone number, and government-issued ID for verification purposes.",
    },
    {
      id: 3,
      question: "Is F-Pay secure?",
      answer:
        "Yes, F-Pay employs bank-level security measures including 256-bit encryption, two-factor authentication, and biometric verification options. Your financial data is never stored directly on your device, and all transactions require verification through your chosen security method.",
    },
    {
      id: 4,
      question: "What are the fees for using F-Pay?",
      answer:
        "F-Pay offers free person-to-person transfers, bill payments, and purchases at partner merchants. Certain premium services like instant transfers to bank accounts (0.5% fee), international transfers (fees vary by country), and ATM withdrawals ($2.50 plus ATM operator fees) may incur charges. See our fee schedule in the app for complete details.",
    },
    {
      id: 5,
      question: "How do I add money to my F-Pay wallet?",
      answer:
        "You can fund your F-Pay wallet in several ways: link your bank account for direct transfers, add a debit or credit card, deposit cash at partner locations, receive money from other F-Pay users, or set up direct deposit for your paycheck. Most funding methods are instant, though bank transfers may take 1-3 business days to process.",
    },
    {
      id: 6,
      question: "Can I use F-Pay internationally?",
      answer:
        "F-Pay currently supports transactions in over 30 countries. International transfers typically process within 24 hours and may include a currency conversion fee. While traveling, you can use your F-Pay account wherever our payment partners are accepted. Enable travel notifications in the app before your trip for uninterrupted service.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Top right gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-transparent opacity-30 rounded-full blur-3xl -mr-16 -mt-16 dark:opacity-10"></div>

      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tl from-blue-400 via-purple-500 to-transparent opacity-30 rounded-full blur-3xl -ml-16 -mb-16 dark:opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about F-Pay&apos;s digital wallet services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium text-gray-900 dark:text-white text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-blue-500 transform transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${faq.id}`}
                className={`px-6 pb-4 ${activeIndex === index ? "block" : "hidden"}`}
              >
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Still have questions?
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Support
            </a>
            <a
              href="#help-center"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Browse Help Center
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

