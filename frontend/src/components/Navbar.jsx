import {
  FaBell,
  FaMoon,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const hour = new Date().getHours();

  let greeting = "Good Morning ☀";

  if (hour >= 12 && hour < 17) greeting = "Good Afternoon 🌤";
  if (hour >= 17) greeting = "Good Evening 🌙";

  return (
    <div className="bg-white/10 backdrop-blur-3xl border border-white/10 rounded-3xl px-8 py-5 shadow-2xl flex items-center justify-between">

      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold text-white">
          {greeting}
        </h1>

        <p className="text-gray-300 mt-1">
          {today}
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-cyan-500/20 text-white flex items-center justify-center transition">
          <FaBell size={18} />
        </button>

        <button className="w-12 h-12 rounded-2xl bg-white/10 hover:bg-cyan-500/20 text-white flex items-center justify-center transition">
          <FaMoon size={18} />
        </button>

        <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-4 py-2">

          <FaUserCircle className="text-4xl text-cyan-300" />

          <div>

            <p className="text-white font-semibold">
              Anushka
            </p>

            <p className="text-xs text-gray-300">
              Weather Explorer
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Navbar;