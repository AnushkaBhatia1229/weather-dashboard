import {
  FaCloudSun,
  FaHome,
  FaHeart,
  FaMapMarkerAlt,
  FaHistory,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  const menu = [
    { icon: <FaHome />, title: "Dashboard" },
    { icon: <FaHeart />, title: "Favorites" },
    { icon: <FaMapMarkerAlt />, title: "Location" },
    { icon: <FaHistory />, title: "History" },
    { icon: <FaCog />, title: "Settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900/40 backdrop-blur-3xl border-r border-white/10 shadow-2xl">

      {/* Logo */}

      <div className="flex items-center gap-3 px-8 py-8 border-b border-white/10">

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center shadow-xl">

          <FaCloudSun className="text-3xl text-yellow-300" />

        </div>

        <div>

          <h1 className="text-2xl font-bold text-white">
            WeatherSphere
          </h1>

          <p className="text-gray-300 text-sm">
            AI Dashboard
          </p>

        </div>

      </div>

      {/* Menu */}

      <div className="mt-8 px-5 space-y-3">

        {menu.map((item, index) => (

          <button
            key={index}
            className="group w-full flex items-center gap-4 p-4 rounded-2xl text-white hover:bg-cyan-500/20 hover:border hover:border-cyan-400 transition-all duration-300"
          >
            <span className="text-xl group-hover:scale-110 transition">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.title}
            </span>
          </button>

        ))}

      </div>

      {/* Bottom Card */}

      <div className="absolute bottom-8 left-5 right-5">

        <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 p-6 text-white shadow-2xl">

          <h3 className="text-xl font-bold">
            Weather Pro
          </h3>

          <p className="text-sm mt-2 text-blue-100">
            Get real-time forecast, AQI, UV Index & premium insights.
          </p>

          <button className="mt-5 w-full bg-white text-blue-700 font-semibold py-3 rounded-xl hover:scale-105 transition">
            Upgrade
          </button>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;