const Spinner = ({ isLoading }) => {
  return (
    <div
      className={`fixed transition-all duration-700 transform ${
        isLoading
          ? "inset-0 flex items-center justify-center bg-black opacity-100 scale-100 z-50"
          : "top-4 left-4 translate-x-0 translate-y-0 scale-50 opacity-0 pointer-events-none z-0"
      }`}
    >
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <h1 className="animate-pulse font-bold text-3xl px-2 text-white">OFFVERSE</h1>
      </div>
    </div>
  );
};

export default Spinner;
