
const Spinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" >
    </div>
    <h1 className="animate-pulse font-bold text-3xl px-2">OFFVERSE</h1>
  </div>
);

export default Spinner;
