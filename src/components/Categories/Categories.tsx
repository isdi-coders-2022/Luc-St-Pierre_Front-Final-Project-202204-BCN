const categories = [
  {
    title: "Islands",
    image: "/assets/airbnb-icons/islands.jpeg",
  },
  {
    title: "Beach",
    image: "/assets/airbnb-icons/beach.jpeg",
  },
  {
    title: "Amazing pools",
    image: "/assets/airbnb-icons/Amazing-views.jpeg",
  },
  {
    title: "OMG!",
    image: "/assets/airbnb-icons/OMG!.jpeg",
  },
  {
    title: "National parks",
    image: "/assets/airbnb-icons/national-parks.jpeg",
  },
  {
    title: "Chalets",
    image: "/assets/airbnb-icons/Amazing-views.jpeg",
  },
  {
    title: "Design",
    image: "/assets/airbnb-icons/OMG!.jpeg",
  },
  {
    title: "Arctic",
    image: "/assets/airbnb-icons/national-parks.jpeg",
  },
  {
    title: "Tiny homes",
    image: "/assets/airbnb-icons/Tiny-homes.jpeg",
  },
  {
    title: "Design",
    image: "/assets/airbnb-icons/Treehouses.jpeg",
  },
  {
    title: "Surfing",
    image: "/assets/airbnb-icons/Surfing.jpeg",
  },
  {
    title: "Amazing views",
    image: "/assets/airbnb-icons/Amazing-views.jpeg",
  },
  {
    title: "Lakefront",
    image: "/assets/airbnb-icons/Lakefront.jpeg",
  },
  {
    title: "Camping",
    image: "/assets/airbnb-icons/Camping.jpeg",
  },
  {
    title: "Shared homes",
    image: "/assets/airbnb-icons/Shared-homes.jpeg",
  },
];

const Categories = () => {
  return (
    <div className="bg-white border-0 md:border-b-2 md:border-gray-100 pt-4">
      <div className="flex items-center justify-between max-w-full sm:px-6 md:px-10 xl:px-20">
        <div className="flex justify-between h-[78px] max-w-[1440px] space-x-10">
          {categories.map((category) => {
            return (
              <button className="flex flex-col items-center justify-center pt-1">
                <span className="flex flex-col justify-center items-center">
                  <img
                    src={`${category.image}`}
                    height={24}
                    width={24}
                    alt=""
                  />
                  <div className="mt-0.5">
                    <span className="text-xs font-semibold">
                      {category.title}
                    </span>
                  </div>
                </span>
              </button>
            );
          })}
        </div>
        {/* <div className="w-[114px] h-[48px] flex justify-end">
          <div className="w-[90px] px-4 flex items-center justify-between border rounded-xl">
            <img
              src="/assets/show-filters.png"
              alt=""
              className="h-2.5 w-2.5"
            />
            <span className="px-2 py-3 flex  justify-center text-xs font-medium cursor-pointer focus:outline-none bg-white border-gray-200 text-[#222222] hover:bg-gray-50">
              Filters
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
