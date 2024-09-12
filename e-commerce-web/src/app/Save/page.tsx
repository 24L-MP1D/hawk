import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const save = [
  {
    title: "",
    image: "/",
    price: "",
  },
];

export default function Save() {
  return (
    <div className="max-w-[622px] mx-auto">
      <div>
        <p className="text-xl font-bold p-3">Хадгалсан бараа (3)</p>
        <div className="flex justify-between pb-4">
          <div className="flex gap-6">
            <div>
              <Image
                src="/asian.png"
                alt="image"
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>Chunky Glyph Tee</p>
              <p>120’000₮</p>
              <button className="bg-[#2563EB] w-[81px] h-[28px] rounded-3xl text-sm text-white">
                Сагслах
              </button>
            </div>
          </div>
          <div>
            <FaHeart />
          </div>
        </div>

        <div className="flex justify-between pb-4">
          <div className="flex gap-6">
            <div>
              <Image
                src="/asian.png"
                alt="image"
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>Chunky Glyph Tee</p>
              <p>120’000₮</p>
              <button className="bg-[#2563EB] w-[81px] h-[28px] rounded-3xl text-sm text-white">
                Сагслах
              </button>
            </div>
          </div>
          <div>
            <FaHeart />
          </div>
        </div>
      </div>
    </div>
  );
}
