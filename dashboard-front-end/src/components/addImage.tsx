import { ImageIcon, Plus } from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
type Props = {
  setImage: (value: File | null) => void;
  image: File | null;
  uploadImage: string[];
  setUploadImage: (value: string[]) => void;
};
export const AddImage = ({
  image,
  setImage,
  uploadImage,
  setUploadImage,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (files) {
      setImage(files[0]);
    }
  };
  const handleUpload = async () => {
    if (!image) return;
    setLoading(true);
    const formDate = new FormData();
    formDate.append("image", image);
    try {
      const response = await fetch(`http://localhost:4000/upload`, {
        method: "POST",
        body: formDate,
      });
      const data = await response.json();
      const imageArray = [...uploadImage];
      imageArray.push(data.secure_url);
      setUploadImage(imageArray);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  // useEffect(() => {
  //   handleUpload();
  // }, [image]);
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-[8px] ">
      <div className="mb-4 text-[#000000] text-lg">Бүтээгдэхүүний зураг</div>
      <div className="flex gap-2 items-center">
        <div
          className={`flex-1 rounded-2xl grid place-items-center aspect-square relative ${
            uploadImage.length ? "border-none" : "border-dashed border-2"
          }`}
        >
          <ImageIcon />
          <Image
            className={`${
              uploadImage.length
                ? "block absolute inset-0 w-full h-full rounded-lg"
                : "hidden"
            }`}
            alt="a"
            src={uploadImage[0] || "/"}
            width={100}
            height={100}
          />
        </div>

        <div
          className={`flex-1 rounded-2xl grid aspect-square place-items-center ${
            uploadImage.length > 1 ? "border-none" : "border-dashed border-2"
          } relative`}
        >
          <ImageIcon />
          <Image
            className={`${
              uploadImage.length > 1
                ? "block absolute inset-0 w-full h-full rounded-lg"
                : "hidden"
            }`}
            alt="a"
            src={uploadImage[1] || "/"}
            width={100}
            height={100}
          />
        </div>
        <div
          className={`flex-1 rounded-2xl grid aspect-square place-items-center ${
            uploadImage.length > 2 ? "border-none" : "border-dashed border-2"
          } relative`}
        >
          <ImageIcon />
          <Image
            className={`${
              uploadImage.length > 2
                ? "block absolute w-full h-full inset-0 rounded-lg"
                : "hidden"
            }`}
            alt="a"
            src={uploadImage[2] || "/"}
            width={100}
            height={100}
          />
        </div>
        {loading && (
          <Image
            className="w-6 h-6 animate-spin"
            src={"/spinner.png"}
            width={40}
            height={40}
            alt="spinner"
          />
        )}
        <div className="flex-1 rounded-2xl grid place-items-center">
          <div className="w-8 h-8 rounded-full bg-[#ECEDF0] grid place-items-center relative">
            <Input
              type="file"
              className="opacity-0 absolute z-50 w-full"
              onChange={handleFileChange}
            />
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
};
