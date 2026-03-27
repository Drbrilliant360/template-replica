import logo from "@/assets/logo.jpg";

const Loader = () => (
  <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary">
    <div className="relative mb-8">
      {/* Outer ring */}
      <div className="absolute -inset-4 rounded-full border-2 border-secondary/20 animate-[spin_3s_linear_infinite]" />
      {/* Inner spinning arc */}
      <div className="absolute -inset-4 rounded-full border-2 border-transparent border-t-secondary animate-[spin_1.2s_ease-in-out_infinite]" />
      {/* Logo */}
      <img
        src={logo}
        alt="Tanzania Advisory Partners"
        className="h-16 w-16 rounded-full object-cover animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
      />
    </div>
    {/* Loading bar */}
    <div className="w-40 h-0.5 bg-primary-foreground/10 rounded-full overflow-hidden">
      <div className="h-full bg-secondary rounded-full animate-[loading-bar_1.5s_ease-in-out_infinite]" />
    </div>
    <p className="mt-4 text-[10px] tracking-[0.4em] uppercase text-primary-foreground/50 font-semibold">
      Loading
    </p>
  </div>
);

export default Loader;
