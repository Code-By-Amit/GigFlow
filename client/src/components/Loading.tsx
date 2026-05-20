interface LoaderProps {
  fullScreen?: boolean;

  text?: string;
}

const Loader = ({
  fullScreen = false,
  text = "Loading...",
}: LoaderProps) => {
  return (
    <div
      className={`
        flex
        items-center
        justify-center
        w-full
        ${
          fullScreen
            ? "fixed inset-0 z-[9999] bg-white/80 dark:bg-black/80 backdrop-blur-sm"
            : "min-h-[300px]"
        }
      `}
    >
      <div className="flex flex-col items-center gap-5">
        
        {/* Spinner */}
        <div className="relative">
          <div className="w-14 h-14 rounded-full border-4 border-gray-200 dark:border-zinc-800" />

          <div className="absolute inset-0 w-14 h-14 rounded-full border-4 border-transparent border-t-black dark:border-t-white animate-spin" />
        </div>

        {/* Text */}
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Loader;