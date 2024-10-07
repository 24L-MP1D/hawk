import { ImageIcon, Plus } from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "./ui/button";
type Props = {
  setImage: (value: File) => void;
  image: File | null;
  uploadImage: string[];
  setUploadImage: (value: string[]) => void;
  create: string;
};
export const AddImage = ({
  image,
  create,
  setImage,
  uploadImage,
  setUploadImage,
}: Props) => {
  const [files, setFiles] = useState<FileList | null>();
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const imageArray: File[] = [];

  useEffect(() => {
    const urls: string[] = [];

    Array.from(files ?? []).forEach((file) => {
      const imageURl = URL.createObjectURL(file);
      urls.push(imageURl);
    });

    setImageURLs([...imageURLs, ...urls]);
    setUploadImage(imageURLs);
  }, [files]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFiles(event.currentTarget.files);
    const files = event.currentTarget.files;
    if (!files) return;
    for (let i = 0; i < files?.length; i++) {
      imageArray.push(files[i]);
    }
  };
  useEffect(() => {
    handleUpload();
  }, [create]);

  const handleUpload = async () => {
    try {
      for (let i = 0; i < imageArray.length; i++) {
        const formData = new FormData();
        formData.append("image", imageArray[i]);
        const response = await fetch(`http://localhost:4000/upload`, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        const iArray = [...uploadImage];
        iArray.push(data.secure_url);
        setUploadImage(iArray);
        console.log({ iArray });
      }
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
              imageURLs.length
                ? "block absolute inset-0 w-full h-full rounded-lg"
                : "hidden"
            }`}
            alt="a"
            src={imageURLs[0] || "/"}
            width={100}
            height={100}
          />
        </div>

        <div
          className={`flex-1 rounded-2xl grid aspect-square place-items-center ${
            imageURLs.length > 1 ? "border-none" : "border-dashed border-2"
          } relative`}
        >
          <ImageIcon />
          <Image
            className={`${
              imageURLs.length > 1
                ? "block absolute inset-0 w-full h-full rounded-lg"
                : "hidden"
            }`}
            alt="a"
            src={imageURLs[1] || "/"}
            width={100}
            height={100}
          />
        </div>
        <div
          className={`flex-1 rounded-2xl grid aspect-square place-items-center ${
            imageURLs.length > 2 ? "border-none" : "border-dashed border-2"
          } relative`}
        >
          <ImageIcon />
          <Image
            className={`${
              imageURLs.length > 2
                ? "block absolute w-full h-full inset-0 rounded-lg"
                : "hidden"
            }`}
            alt="a"
            src={imageURLs[2] || "/"}
            width={100}
            height={100}
          />
        </div>

        <div className="flex-1 rounded-2xl grid place-items-center">
          <div className="w-8 h-8 rounded-full bg-[#ECEDF0] grid place-items-center relative">
            <Input
              multiple
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
