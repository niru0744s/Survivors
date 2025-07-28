export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="container">
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Welcome to Survivors</h1>
            <p className="text-lg text-gray-700 mb-8">
              A place for survivors to share their stories and find support.
            </p>
            <a
              href="/stories"
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              View Stories
            </a>
          </div>
        </div>
      </div>
    </>
  );
}