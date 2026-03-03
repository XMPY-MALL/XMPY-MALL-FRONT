import { useParams } from "react-router-dom";
import { Pagination } from "swiper/modules";
import { useSubMenu } from "./hooks/useSubmenu";

export default function SubMenuPage() {
  const categoryDetailId = useParams("categoryDetailId");
  const { categoryDetailName, pagination, products } =
    useSubMenu(categoryDetailId);
  return (
    <>
      <div>
        <h1>{categoryDetailName}</h1>
      </div>
      {/* ProductCard map으로 뿌릴거임 클릭시 navigate */}
      <Pagination pagination={pagination} />
    </>
  );
}
