"use client";

import { Button } from "@/components/ui/button";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";

import { DashboardAside } from "@/components/Dashboard";
import { AddImage } from "@/components/addImage";
import { AddProductName } from "@/components/addProductName";
import { AddPrice } from "@/components/addPrice";
import { AddCategory } from "@/components/addCategory";
export const sizes: string[] = ["Free", "S", "M", "L", "XL", "2XL", "3Xl"];

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

  const [image, setImage] = useState<File | null>(null);
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
            <AddProductName
              productName={productName}
              setProductName={setProductName}
              productCode={productCode}
              setProductCode={setProductCode}
              description={description}
              setDescription={setDescription}
            />
            <AddImage
              uploadImage={uploadImage}
              setUploadImage={setUploadImage}
              setImage={setImage}
              image={image}
            />
            <AddPrice
              qty={qty}
              setQty={setQty}
              price={price}
              setPrice={setPrice}
            />
          </div>
          <AddCategory
            categoryType={categoryType}
            setShowCategory={setShowCategory}
            showCategory={showCategory}
            setCategoryType={setCategoryType}
            color={color}
            setColor={setColor}
            size={size}
            setSize={setSize}
            productTag={productTag}
            setProductTag={setProductTag}
            productColor={productColor}
            productSize={productSize}
            setProductSize={setProductSize}
            setProductColor={setProductColor}
          />
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
