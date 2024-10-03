"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Check, ImageIcon, Plus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

import { ProductType } from "../product/page";

import Link from "next/link";

import Image from "next/image";
import { DashboardAside } from "@/components/Dashboard";
import { filters } from "@/components/DashboardSelect";
export const sizes: string[] = ["Free", "S", "M", "L", "XL", "2XL", "3Xl"];
type Props = {
  onClose: () => void;
  loadProduct: () => void;
  aProduct: ProductType;
  onVoid: () => void;
};
export const colors = [
  { color: "blue", Value: "#4c4efd" },
  { color: "red", Value: "#f23838" },
  { color: "yellow", Value: "#ecb442" },
  { color: "green", Value: "#00ff00" },
  { color: "brown", Value: "#94463c" },
  { color: "black", Value: "#151f2e" },
  { color: "white", Value: "#fffbfc" },
];
const AddProduct = () => {
  const searchParams = useSearchParams();
  let edit = searchParams.get("id");

  const updateProduct = async () => {
    await fetch(`http://localhost:4000/products/${edit}`, {
      method: "PUT",
      body: JSON.stringify({
        productName,
        description,
        productId: productCode,
        price,
        qty,
        categoryType: categoryType,
        productTag,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  const [image, setImage] = useState<File | null>(null);
  const [size, setSize] = useState(false);
  const [color, setColor] = useState(false);
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(0);
  const [categoryType, setCategoryType] = useState("");
  const [showCategory, setShowCategory] = useState(false);
  const [productTag, setProductTag] = useState("");
  const [productColor, setProductColor] = useState<string[]>([]);
  const [productSize, setProductSize] = useState<string[]>([]);
  const [uploadImage, setUploadImage] = useState<string[]>([]);
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

  const AddItems = async () => {
    const data = await fetch("http://localhost:4000/products", {
      method: "POST",
      body: JSON.stringify({
        productName,
        description,
        productId: productCode,
        price,
        qty,
        categoryType: categoryType,
        productTag,
        color: productColor,
        size: productSize,
        images: uploadImage,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    reset();
    console.log(data);
  };
  const reset = () => {
    setProductName("");
    setProductCode(0);
    setPrice(0);
    setDescription("");
    setQty(0);
    setProductTag("");
    setCategoryType("");
    setProductColor([]);
    setProductSize([]);
    setImage(null);
    setUploadImage([]);
  };
  const addColor = (color: string) => {
    const newProductColor = [...productColor];
    newProductColor.push(color);
    setProductColor(newProductColor);
  };
  const checkColor = (color: string) => {
    const includeColor = productColor.filter((item) => item !== color);
    setProductColor(includeColor);
  };
  const addColorAndCheckColor = (color: string) => {
    const checkedColor = productColor.includes(color);

    if (checkedColor) {
      checkColor(color);
    } else {
      addColor(color);
    }
  };

  const addSizes = (size: string) => {
    const newProductSize = [...productSize];
    newProductSize.push(size);
    setProductSize(newProductSize);
    console.log(productSize);
  };
  const checkSizes = (size: string) => {
    const checkSize = productSize.filter((item) => item !== size);
    setProductSize(checkSize);
  };
  const addSizesAndCheckSizes = (size: string) => {
    const checkedSize = productSize.includes(size);
    if (checkedSize) {
      checkSizes(size);
      return;
    }
    addSizes(size);
  };
  const getOneProduct = async () => {
    const response = await fetch(`http://localhost:4000/products/${edit}`);
    const data = await response.json();
    setProductName(data.productName);
    setCategoryType(data.categoryType);
    setDescription(data.description);
    setProductCode(data.productId);
    setPrice(data.price);
    setQty(data.qty);
    setProductColor(data.color);
    setProductTag(data.productTag);
    setProductSize(data.size);
  };
  if (edit) {
    useEffect(() => {
      getOneProduct();
    }, []);
  }

  useEffect(() => {
    handleUpload();
  }, [image]);

  // console.log({ edit });

  return (
    <div className="flex">
      <DashboardAside />
      <div className="w-full text-nowrap bg-[#F7F7F8]">
        <div className="flex py-4 bg-[#ffffff] items-center">
          <Link
            href={"/dashboard/product"}
            className="px-4 hover:cursor-pointer"
          >
            <svg
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
          </Link>
          <div className="flex-1">Бүтээгдэхүүн нэмэх</div>
        </div>
        <div className="flex gap-5 px-6 mt-8">
          <div className="flex flex-col gap-6 flex-1">
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
            <div className="bg-[#FFFFFF] p-6 rounded-[8px] ">
              <div className="mb-4 text-[#000000] text-lg">
                Бүтээгдэхүүний зураг
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className={`flex-1 rounded-2xl grid place-items-center aspect-square relative ${
                    uploadImage.length
                      ? "border-none"
                      : "border-dashed border-2"
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
                    uploadImage.length > 1
                      ? "border-none"
                      : "border-dashed border-2"
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
                    uploadImage.length > 2
                      ? "border-none"
                      : "border-dashed border-2"
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
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-[#FFFFFF] rounded-[8px] flex-auto p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2 relative">
                <div>Ерөнхий ангилал</div>

                <div className="">
                  <div onClick={() => setShowCategory(true)}>
                    <Input
                      className="cursor-pointer"
                      placeholder="Сонгох"
                      value={categoryType}
                      onChange={() => ""}
                    />
                  </div>
                  {showCategory && (
                    <div className="flex flex-col absolute w-full z-20">
                      {filters.map((select) => (
                        <div
                          onClick={() => {
                            setCategoryType(select.value);
                            setShowCategory(false);
                          }}
                          className="cursor-pointer p-4 bg-[#F7F7F8] rounded-lg border-[2px]"
                          key={select.value}
                        >
                          {select.filt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <div>Дэд ангилал</div>
                <Input
                  type="text"
                  className="rounded-[8px] px-2 py-[14px] bg-[#F7F7F8]"
                  placeholder="Сонгох"
                />
              </div>
            </div>
            <div className="p-6 flex flex-col gap-6 flex-auto bg-[#FFFFFF] rounded-[8px]">
              <div>Төрөл</div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-6 items-center">
                  <div>Өнгө</div>
                  <div
                    onClick={() => {
                      setColor(true);
                    }}
                    className="bg-[#ECEDF0] rounded-full p-1 cursor-pointer w-8 h-8 flex justify-center items-center hover:bg-slate-300"
                  >
                    <Plus width={15} height={15} />
                  </div>

                  {color && (
                    <div className="relative flex right-0 gap-1 items-center">
                      {colors.map((color) => (
                        <div
                          onClick={() => {
                            addColorAndCheckColor(color.color);
                          }}
                          key={color.Value}
                          className="w-6 h-6 rounded-full cursor-pointer flex items-center justify-center"
                          style={{ backgroundColor: color.Value }}
                        >
                          {productColor.includes(color.color) && (
                            <Check className="w-3 h-3" />
                          )}
                        </div>
                      ))}
                      <Button onClick={() => setColor(false)}>Хаах</Button>
                    </div>
                  )}
                </div>
                <div className="flex gap-6 items-center">
                  <div>Хэмжээ</div>
                  <div
                    onClick={() => setSize(true)}
                    className="bg-[#ECEDF0] rounded-full p-1 cursor-pointer w-8 h-8 flex justify-center items-center hover:bg-slate-300"
                  >
                    <Plus width={15} height={15} />
                  </div>
                  {size && (
                    <div className="relative flex right-0 gap-1 items-center">
                      {sizes.map((size) => (
                        <div
                          onClick={() => {
                            addSizesAndCheckSizes(size);
                          }}
                          key={size}
                          className={`${
                            productSize.includes(size)
                              ? "bg-red-300"
                              : "bg-slate-400 "
                          } cursor-pointer flex items-center justify-center  p-2 rounded-xl`}
                        >
                          {size}
                        </div>
                      ))}
                      <Button onClick={() => setSize(false)}>Хаах</Button>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <Button className="px-4 py-2.5 border-[1px] bg-[#FFFFFF] text-black hover:bg-red-400">
                  Төрөл нэмэх
                </Button>
              </div>
            </div>
            <div className="flex flex-col flex-auto gap-2 p-6 bg-[#FFFFFF] rounded-[8px]">
              <div>Таг</div>
              <div>
                <Input
                  type="text"
                  placeholder="Таг нэмэх..."
                  className="px-2 pt-2 bg-[#F7F7F8]"
                  onChange={(e) => setProductTag(e.target.value)}
                  value={productTag}
                />
              </div>
              <div className="text-[#5E6166] text-base">
                Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-6 px-6 mt-[21px] mb-[106px]">
          <Button className="bg-[#FFFFFF] text-black border-[1px]">
            Ноорог
          </Button>
          <Button
            onClick={() => {
              edit ? updateProduct() : AddItems();
            }}
          >
            {edit ? "засах" : "нийтлэх"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
