import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Product = () => {
  return (
    <div className="flex">
      <div className="bg-[#FFFFFF] w-[222px]">nav example</div>
      <div className="bg-[#f7f7f8] flex flex-col gap-6 w-full">
        <div className="flex border-b-[1px]">
          <div className="p-4 border-b-2 border-black">Бүтээгдэхүүн</div>
          <div className="p-4">Ангилал</div>
        </div>
        <div className="flex gap-1 bg-[#121316] px-[45px] py-3 hover:bg-blend-darken">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
          </svg>

          <div>Бүтээгдэхүүн нэмэх</div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-[13px]">
            <div className="flex gap-1 bg-[#FFFFFF] rounded-[8px]">
              <div>icon</div>
              <div>Ангилал</div>
              <div>icon</div>
            </div>
            <div className="flex gap-1 bg-[#FFFFFF] rounded-[8px]">
              <div>icon</div>
              <div>Үнэ</div>
              <div>icon</div>
            </div>
            <div className="flex gap-1 bg-[#FFFFFF] rounded-[8px]">
              <div>icon</div>
              <div>Сараар</div>
              <div>icon</div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] rounded-xl">
            <div className="flex border-b-2 border-[#F7F7F8] pl-[64px] ">
              <div className="py-[14px] px-6 max-w-[156px] w-full">
                Бүтээгдэхүүн
              </div>
              <div className="py-[14px] px-6 max-w-[214px] w-full">Ангилал</div>
              <div className="py-[14px] px-6 max-w-[156px] w-full">Үнэ</div>
              <div className="py-[14px] px-6 max-w-[156px] w-full">
                Үлдэгдэл
              </div>
              <div className="py-[14px] px-6 max-w-[156px] w-full">
                Зарагдсан
              </div>
              <div className="py-[14px] px-6 max-w-[156px] w-full">
                 Нэмсэн огноо
              </div>
              <div className="max-w-[104px] w-full"></div>
            </div>
            <div className="flex border-b-2 items-center">
              <div className="py-[26px] px-6">
                <Checkbox />
              </div>
              <div className="py-[26px] px-6 max-w-[156px] w-full">
                Laptop цүнх
              </div>
              <div className="py-[26px] px-6 max-w-[214px] w-full">
                {" "}
                Эмэгтэй, цүнх
              </div>
              <div className="py-[26px] px-6 max-w-[156px] w-full">19,000₮</div>
              <div className="py-[26px] px-6 max-w-[156px] w-full">76</div>
              <div className="py-[26px] px-6 max-w-[156px] w-full">30</div>
              <div className="py-[26px] px-6 max-w-[156px] w-full">
                2024-01-10
              </div>
              <div className="py-[26px] px-6 max-w-[104px] w-full">icon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
