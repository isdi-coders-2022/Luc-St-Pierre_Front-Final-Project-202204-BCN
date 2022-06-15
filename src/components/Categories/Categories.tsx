type CategoriesProps<T> = {
  categories: Readonly<T[]>;
  selectedCategory?: Readonly<T>;
  onSelectCategory: (category: T) => void;
};

const Categories = <
  T extends {
    title: string;
    image: string;
  }
>(
  props: CategoriesProps<T>
) => {
  const { categories, onSelectCategory } = props;
  return (
    <div className="absolute right-0 left-0 top-[5.5rem] bg-white shadow z-[99]">
      <div className="flex items-center justify-between max-w-full px-4 sm:px-6 md:px-10 xl:px-20">
        <div className="flex justify-between h-[78px] max-w-[1440px] space-x-10 overflow-x-auto">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className="flex flex-col items-center flex-shrink-0 justify-center pt-1"
                onClick={() => onSelectCategory(category)}
              >
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
      </div>
    </div>
  );
};

export default Categories;
