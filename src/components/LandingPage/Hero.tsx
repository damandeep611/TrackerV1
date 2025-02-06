export default function Hero() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen ">
      <div className="absolute   inset-0  opacity-20">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-20 flex flex-col items-center justify-center pb-12 pt-24 md:pb-36 md:pt-36">
        <div className="relative" style={{ opacity: 1, transform: "none" }}>
          <span className="relative z-10 mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-3 py-1.5 text-xs  md:mb-0 md:text-sm">
            Fix Your Skill issues
            <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0"></span>
          </span>
        </div>
        <h1
          className="mb-3 text-center text-3xl font-bold leading-tight  sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight"
          style={{ opacity: 1, transform: "none" }}
        >
          Tracker <span className="glow-and-split"> 友智</span>
        </h1>
        <p
          className="mb-9 max-w-2xl text-center text-base text-zinc-400 sm:text-lg md:text-xl"
          style={{ opacity: 1, transform: "none" }}
        >
          Manage Tasks and Track Your skills Learning By hours
        </p>
        <div
          className="flex flex-col items-center gap-4 sm:flex-row"
          style={{ opacity: 1, transform: "none" }}
        >
          <button className="rounded-md bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-lg ring-2 ring-blue-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70 flex items-center gap-2">
            Try it free
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button className="transition-all hover:scale-[1.02] hover:bg-zinc-800  active:scale-[0.98] rounded-md px-4 py-2 text-lg ">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
