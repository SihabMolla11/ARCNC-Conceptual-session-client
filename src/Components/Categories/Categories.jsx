import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {
  return (
    <div className="my-container">
      <div className=" flex gap-2 py-4 flex-row justify-between items-center overflow-x-auto ">
        {categories.map((category) => (
          <CategoryBox
          key={category?.label}
            label={category?.label}
            icon={category?.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
