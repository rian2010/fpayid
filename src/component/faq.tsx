import React, { useState, useCallback, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const InteractiveFAQ = () => {
  // Memoize FAQ data to prevent unnecessary re-renders
  const faqData = useMemo(() => [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password.",
    },
    // ... rest of the FAQ data
  ], []);

  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // Memoized toggle function
  const toggleItem = useCallback((index) => {
    setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
  }, []);

  // Memoized filtered FAQs
  const filteredFaqs = useMemo(() =>
    faqData.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [faqData, searchQuery]
  );

  return (
    <div className="overflow-x-hidden">
      <div className="w-screen max-w-[100vw] px-4 py-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 px-2">
          Frequently Asked Questions
        </h2>

        {/* Search bar */}
        <div className="mb-6 px-2">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg mx-2"
              >
                <button
                  className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-medium text-gray-800 text-base">
                    {faq.question}
                  </span>
                  {openItems[index] ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {openItems[index] && (
                  <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center p-4 text-gray-500">
              No FAQs match your search. Try different keywords.
            </div>
          )}
        </div>

        {/* Results count */}
        {searchQuery && (
          <div className="mt-4 text-sm text-gray-500 px-2">
            Showing {filteredFaqs.length} of {faqData.length} FAQs
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveFAQ;
