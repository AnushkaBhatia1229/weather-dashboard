import {
  FaSun,
  FaMoon,
  FaCompressArrowsAlt,
  FaWater,
} from "react-icons/fa";

const Highlights = ({ weather }) => {
  if (!weather) return null;

  const sunrise = new Date(
    weather.sys.sunrise * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const sunset = new Date(
    weather.sys.sunset * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const cards = [
    {
      title: "Sunrise",
      value: sunrise,
      icon: <FaSun className="text-yellow-400 text-3xl" />,
    },
    {
      title: "Sunset",
      value: sunset,
      icon: <FaMoon className="text-blue-300 text-3xl" />,
    },
    {
      title: "Pressure",
      value: `${weather.main.pressure} hPa`,
      icon: <FaCompressArrowsAlt className="text-green-400 text-3xl" />,
    },
    {
      title: "Sea Level",
      value: weather.main.sea_level || "--",
      icon: <FaWater className="text-cyan-300 text-3xl" />,
    },
  ];

  return (
    <div>

      <h2 className="text-white text-2xl font-bold mb-5">
        Today's Highlights
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {cards.map((card, index) => (

          <div
            key={index}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:scale-105 transition"
          >

            {card.icon}

            <p className="mt-4 text-gray-300 text-sm">
              {card.title}
            </p>

            <h3 className="text-white text-xl font-bold mt-2">
              {card.value}
            </h3>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Highlights;