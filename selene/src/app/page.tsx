export default function Home() {
  return (
    <main>
      <div className="relative flex flex-col items-center justify-center h-screen px-10 sm:px-20 text-center bg-gradient-to-b from-purple-800 to-indigo-800">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full opacity-10"
        >
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">
            Selene
          </h1>
          <p className="text-lg sm:text-xl text-white leading-relaxed mb-12">
            Join the galaxy&apos;s social network for astronomy enthusiasts.
          </p>
          <button className="bg-white text-indigo-900 font-semibold py-4 px-8 rounded-full hover:bg-indigo-900 hover:text-white transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
