export default function ErrorScreen() {
  return (
    <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
        <svg
          className="w-16 h-16 text-red-500 mb-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M12 8v4m0 4h.01"
          />
        </svg>
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Something went wrong
        </h2>
        <p className="text-gray-700 mb-2">
          Unable to fetch products. Please try again later.
        </p>
      </div>
    </div>
  );
}