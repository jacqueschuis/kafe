export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b dark:bg-gradient-to-b from-brown-200 via-brown-100 to-brown-200 dark:from-brown-900 dark:via-brown-700 dark:to-brown-900">
      <div className="blobs flex flex-col justify-center items-center relative">
        <div className="bg-red-500 one blob"></div>
        <div className="bg-green-400 three blob"></div>
        <div className="bg-blue-400 two blob"></div>
      </div>
      <div className="rounded-2xl text-center flex flex-col items-center justify-center z-10 p-4">
        <h1 className=" text-brown-900 dark:text-brown-100 font-bold text-9xl">
          kafe
        </h1>
        <h2 className="text-orange-600 dark:text-orange-200 text-2xl">
          your next brew, perfected
        </h2>
      </div>
    </main>
  );
}
