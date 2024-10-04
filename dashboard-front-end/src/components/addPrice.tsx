import { Input } from "./ui/input";
type Props = {
  price: number;
  setPrice: (value: number) => void;
  setQty: (value: number) => void;
  qty: number;
};
export const AddPrice = ({ price, setPrice, setQty, qty }: Props) => {
  return (
    <div className="flex gap-4 bg-[#FFFFFF] p-6 rounded-[8px]">
      <div className="flex flex-col gap-2 flex-1">
        <div>Үндсэн үнэ</div>
        <Input
          type="number"
          value={price != 0 ? price : ""}
          min="0"
          max="10000"
          step="1"
          name="Broker_Fees"
          id="broker_fees"
          maxLength={10}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="rounded-[8px] px-2 py-[14px]"
          placeholder="Үндсэн үнэ"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div>Үлдэгдэл тоо ширхэг</div>
        <Input
          onChange={(e) => setQty(Number(e.target.value))}
          type="number"
          className="rounded-[8px] px-2 py-[14px]"
          placeholder="Үлдэгдэл тоо ширхэг"
          value={qty !== 0 ? qty : ""}
        />
      </div>
    </div>
  );
};
