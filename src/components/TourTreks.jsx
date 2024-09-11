const CardsData = [
  {
    id: 1,
    img: "https://trekthehimalayas.com/images/HomePageImages/Desktop/dd55db94-506c-4c87-8e3c-e2c0654ba11c_Hampta-Pass%20(7).webp",
    title: "Hampta Paas Trek",
    desc: "Located in the beautiful state of Himachal Pradesh, Hampta Pass Trek is a must-do trek for all adventure enthusiasts.",
  },
  {
    id: 2,
    img: "https://trekthehimalayas.com/images/HomePageImages/Desktop/af720d55-0677-4cbb-bcea-6f24663153a6_VOF%20(6).webp",
    title: "Valley Of Flowers Trek",
    desc: "The Valley of Flowers trek unfolds a world of ethereal beauty and also takes you to a revered pilgrimage site.",
  },
  {
    id: 3,
    img: "https://trekthehimalayas.com/images/HomePageImages/Desktop/8f49f49a-1b39-49be-abeb-b0cf12824578_Kedarkantha%20(8).webp",
    title: "Kedarkantha Peak Trek",
    desc: "The trek offers some of the most scenic campsites like Juda Ka Talab with a frozen lake in the middle of a pine forest.",
  },
  {
    id: 4,
    img: "https://trekthehimalayas.com/images/HomePageImages/Desktop/ff529472-c154-4f58-92bd-298557930c24_Tarsar-Marsar%20(2).webp",
    title: "Tarsar Marsar Trek",
    desc: "Tarsar Marsar unfolds the majestic beauty of the Kashmir Valley. The trek takes you on a captivating journey from the stunning Tarsar Lake to the Marsar Lake and on to Sundersar, another serene high-altitude lake in the region.",
  },
  {
    id: 5,
    img: "https://trekthehimalayas.com/images/HomePageImages/Desktop/dd55db94-506c-4c87-8e3c-e2c0654ba11c_Hampta-Pass%20(7).webp",
    title: "Hampta Paas Trek",
    desc: "Located in the beautiful state of Himachal Pradesh, Hampta Pass Trek is a must-do trek for all adventure enthusiasts.",
  },
  {
    id: 6,
    img: "https://trekthehimalayas.com/images/HomePageImages/Desktop/af720d55-0677-4cbb-bcea-6f24663153a6_VOF%20(6).webp",
    title: "Valley Of Flowers Trek",
    desc: "The Valley of Flowers trek unfolds a world of ethereal beauty and also takes you to a revered pilgrimage site.",
  },
  {
    id: 7,
    img: "https://trekthehimalayas.com/images/HomePageImages/Desktop/8f49f49a-1b39-49be-abeb-b0cf12824578_Kedarkantha%20(8).webp",
    title: "Kedarkantha Peak Trek",
    desc: "The trek offers some of the most scenic campsites like Juda Ka Talab with a frozen lake in the middle of a pine forest.",
  },
  {
    id: 8,
    img: "https://trekthehimalayas.com/images/HomePageImages/Desktop/ff529472-c154-4f58-92bd-298557930c24_Tarsar-Marsar%20(2).webp",
    title: "Tarsar Marsar Trek",
    desc: "Tarsar Marsar unfolds the majestic beauty of the Kashmir Valley. The trek takes you on a captivating journey from the stunning Tarsar Lake to the Marsar Lake and on to Sundersar, another serene high-altitude lake in the region.",
  },
  {
    id: 9,
    img: "https://trekthehimalayas.com/images/HomePageImages/Desktop/dd55db94-506c-4c87-8e3c-e2c0654ba11c_Hampta-Pass%20(7).webp",
    title: "Hampta Paas Trek",
    desc: "Located in the beautiful state of Himachal Pradesh, Hampta Pass Trek is a must-do trek for all adventure enthusiasts.",
  },
];
const TourTreks = () => {
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

export default TourTreks;
