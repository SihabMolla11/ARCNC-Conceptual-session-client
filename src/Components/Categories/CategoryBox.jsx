import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  // নিচের ফাংশোনটি ব্যবহার করে আমরা ক্যাটাগরি ওয়াইজ আমাদের ব্রাউজারের URL change করতে পারি
  const setUrlByCategory = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      {
        skipNull: true,
      }
    );
    navigate(url);
  };

  // console.log(params);

  return (
    <div onClick={setUrlByCategory} className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500 cursor-pointer">
      <Icon size={26} />
      <div className=" text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
