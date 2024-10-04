import { Textarea } from "./ui/textarea";

type Props = {
  productName: string;
  setProductName: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  productCode: number;
  setProductCode: (value: number) => void;
};

export const AddProductName = ({
  productName,
  setProductName,
  description,
  setDescription,
  productCode,
  setProductCode,
}: Props) => {
  return (
    <div className="p-6 flex flex-col gap-4 bg-[#ffffff] rounded-[8px]">
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

        <Textarea
          value={description}
          className="w-full"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>Барааны код</div>
        <input
          value={productCode !== 0 ? productCode : ""}
          onChange={(e) => setProductCode(Number(e.target.value))}
          className="w-full p-2 bg-[#F7F7F8]  rounded-[8px]"
          type="number"
          placeholder="#12345678"
        />
      </div>
    </div>
  );
};
