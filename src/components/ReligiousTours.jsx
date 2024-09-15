"use client"

const CardsData = [
  {
    id: 1,
    img: "https://www.templedarshanyatri.com/upload/yamunotri-temple.jpg",
    title: "Yamunotri",
    desc: "Yamunotri is one of the most noteworthy religious destinations in the country and a part of the fabled Char Dham Yatra. It is in the western-most part of the great Garhwal Himalayas.",
  },
  {
    id: 2,
    img: "https://uttarakhandtourism.gov.in/sites/default/files/2020-06/Gangotri%20banner.jpg",
    title: "Gangotri",
    desc: "It is the highest temple dedicated to Goddess Ganga. The holy River Ganges originates from the Gangotri glacier, located here, and is called Bhagirathi. ",
  },
  {
    id: 3,
    img: "https://badrinath-kedarnath.gov.in/Assets/image/k3.jpg",
    title: "Kedarnath",
    desc: "The Kedarnath temple, dedicated to Lord Shiva, is a part of Char Dham pilgrimage circuit, and is one of the 12 Jyotirlingas of Lord Shiva in India.",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5IyrP38s-DymMcpwuORTMuzjRVTS04pi7w&s",
    title: "Badrinath",
    desc: "Badarinath is one of the holy shrines for Vaishnavites among the 108 divya desams incarnation of Lord Vishnu.",
  },
  {
    id: 5,
    img: "https://www.templedarshanyatri.com/upload/yamunotri-temple.jpg",
    title: "Yamunotri",
    desc: "Yamunotri is one of the most noteworthy religious destinations in the country and a part of the fabled Char Dham Yatra. It is in the western-most part of the great Garhwal Himalayas.",
  },
  {
    id: 6,
    img: "https://uttarakhandtourism.gov.in/sites/default/files/2020-06/Gangotri%20banner.jpg",
    title: "Gangotri",
    desc: "It is the highest temple dedicated to Goddess Ganga. The holy River Ganges originates from the Gangotri glacier, located here, and is called Bhagirathi. ",
  },
  {
    id: 7,
    img: "https://badrinath-kedarnath.gov.in/Assets/image/k3.jpg",
    title: "Kedarnath",
    desc: "The Kedarnath temple, dedicated to Lord Shiva, is a part of Char Dham pilgrimage circuit, and is one of the 12 Jyotirlingas of Lord Shiva in India.",
  },
  {
    id: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5IyrP38s-DymMcpwuORTMuzjRVTS04pi7w&s",
    title: "Badrinath",
    desc: "Badarinath is one of the holy shrines for Vaishnavites among the 108 divya desams incarnation of Lord Vishnu.",
  },
  {
    id: 9,
    img: "https://www.templedarshanyatri.com/upload/yamunotri-temple.jpg",
    title: "Yamunotri",
    desc: "Yamunotri is one of the most noteworthy religious destinations in the country and a part of the fabled Char Dham Yatra. It is in the western-most part of the great Garhwal Himalayas.",
  },
];
const ReligiousTours = () => {
  return (
    <div className="h-full pt-20 pb-20 bg-black bg-cover bg-no-repeat">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-28  px-12 gap-12">
        {CardsData.map(({ id, img, title }) => {
          return (
            <div
              key={id}
              className="p-3 border-2 border-dashed border-gray-300 rounded-md hover:scale-110 transition-all duration-300"
            >
              <div className=" rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                <img src={img} alt="card image" className="h-72 w-full" />

                <div className="px-6 py-3">
                  <h3 className="text-xl font-medium text-slate-700">
                    {title}
                  </h3>
                </div>

                <div className="flex justify-end px-6 py-3 pt-0">
                  <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span> View </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReligiousTours;

{
  /* <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group "
            >
              <img
                src={img}
                alt=""
                className="w-full max-w-[300px] h-[350px] rounded-lg"
              />

              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      <div className="w-[70%]">{desc}</div>
                    </Fade>

                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div> */
}
