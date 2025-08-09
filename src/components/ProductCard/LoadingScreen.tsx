export default function LoadingScreen() {
  return (
    <>
      {Array.from({ length: 5 }).map(() => (
        <div className="bg-gray-100 animate-pulse rounded-lg m-2 border border-gray-200 shadow-md max-w-sm w-72 h-[400px] flex flex-col">
          <div className="bg-gray-200 h-48 w-full rounded-t-lg" />
          <div className="p-4 flex flex-col flex-grow">
            <div className="h-6 bg-gray-200 rounded mb-2 w-3/4" />
            <div className="h-4 bg-gray-200 rounded mb-2 w-1/2" />
            <div className="h-4 bg-gray-200 rounded mb-4 w-full" />
            <div className="mt-auto">
              <div className="h-8 bg-gray-200 rounded mb-3 w-1/2" />
              <div className="flex flex-row gap-2 mb-2">
                <div className="flex-1 h-10 bg-gray-200 rounded" />
                <div className="flex-1 h-10 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}