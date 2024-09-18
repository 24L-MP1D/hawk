import { Button } from "@/components/ui/button";
import { error } from "console";
import { useState } from "react";

type Props = {
  onClose: () => void;
};

export const AddProduct = ({ onClose }: Props) => {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const AddItems = async () => {
    console.log(productName);
    console.log(productCode);
    const data = await fetch("http://localhost:4000/products", {
      method: "POST",
      body: JSON.stringify({
        productName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(data);
  };
  return (
    <div className="w-full">
      <div className="flex py-4 bg-[#ffffff] items-center">
        <div className="px-4 hover:cursor-pointer">
          <svg
            onClick={onClose}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1682 2.48752C13.7598 2.07919 13.1015 2.07919 12.6932 2.48752L5.76816 9.41252C5.44316 9.73752 5.44316 10.2625 5.76816 10.5875L12.6932 17.5125C13.1015 17.9209 13.7598 17.9209 14.1682 17.5125C14.5765 17.1042 14.5765 16.4459 14.1682 16.0375L8.13483 9.99586L14.1765 3.95419C14.5765 3.55419 14.5765 2.88752 14.1682 2.48752Z"
              fill="#121316"
            />
          </svg>
        </div>
        <div className="flex-1">Бүтээгдэхүүн нэмэх</div>
      </div>
      <div className="flex gap-5 px-6">
        <div className="flex flex-col gap-6 flex-1">
          <div className="p-6 flex flex-col gap-4 bg-[#ffffff]">
            <div className="flex flex-col gap-2">
              <div>Бүтээгдэхүүний нэр</div>
              <input
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
                className="w-full p-2 bg-[#F7F7F8]  rounded-[8px]"
                type="text"
                placeholder="Нэр"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>Нэмэлт мэдээлэл</div>
              <textarea
                placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                className="p-2 bg-[#F7F7F8]  rounded-[8px]"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <div>Барааны код</div>
              <input
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                className="w-full p-2 bg-[#F7F7F8]  rounded-[8px]"
                type="text"
                placeholder="#12345678"
              />
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="flex justify-end gap-6 px-6">
        <Button onClick={AddItems}>Нийтлэх</Button>
      </div>
    </div>
  );
};
