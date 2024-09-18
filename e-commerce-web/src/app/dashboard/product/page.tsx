"use client";

import { DashboardAside } from "@/components/DashboardAside";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AddProduct } from "../addProduct";

const Product = () => {
  const [product, setProduct] = useState(true);
  return (
    <div className="flex min-h-screen">
      <div className="bg-[#FFFFFF] w-[222px]">
        <DashboardAside />
      </div>
      {product && (
        <div className="bg-[#f7f7f8] flex flex-col gap-6 w-full">
          <div className="flex border-b-[1px]">
            <div className="p-4 border-b-2 border-black hover:cursor-pointer">
              Бүтээгдэхүүн
            </div>
            <div className="p-4 hover:cursor-pointer">Ангилал</div>
          </div>
          <div
            onClick={() => setProduct(false)}
            className="flex gap-1 bg-[#121316] px-[45px] py-3 hover:bg-blend-darken ml-6 rounded-[8px] max-w-[280px] w-full items-center hover:cursor-pointer "
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
            </svg>

            <div className="text-[#FFFFFF]">Бүтээгдэхүүн нэмэх</div>
          </div>
          <div className="flex flex-col gap-4 ml-6">
            <div className="flex justify-between">
              <div className="flex gap-[13px]">
                <div className="flex gap-1 bg-[#FFFFFF] rounded-[8px] py-2 px-3 hover:cursor-pointer">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 2L6 11H17L11.5 2ZM11.5 5.84L13.43 9H9.56L11.5 5.84ZM17 13C14.51 13 12.5 15.01 12.5 17.5C12.5 19.99 14.51 22 17 22C19.49 22 21.5 19.99 21.5 17.5C21.5 15.01 19.49 13 17 13ZM17 20C15.62 20 14.5 18.88 14.5 17.5C14.5 16.12 15.62 15 17 15C18.38 15 19.5 16.12 19.5 17.5C19.5 18.88 18.38 20 17 20ZM2.5 21.5H10.5V13.5H2.5V21.5ZM4.5 15.5H8.5V19.5H4.5V15.5Z"
                        fill="#121316"
                      />
                    </svg>
                  </div>
                  <div>Ангилал</div>
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504L16.59 8.29504Z"
                        fill="#121316"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex gap-1 bg-[#FFFFFF] rounded-[8px] py-2 px-3 hover:cursor-pointer">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3899 10.9C10.1199 10.31 9.38991 9.7 9.38991 8.75C9.38991 7.66 10.3999 6.9 12.0899 6.9C13.8699 6.9 14.5299 7.75 14.5899 9H16.7999C16.7299 7.28 15.6799 5.7 13.5899 5.19V3H10.5899V5.16C8.64991 5.58 7.08991 6.84 7.08991 8.77C7.08991 11.08 8.99991 12.23 11.7899 12.9C14.2899 13.5 14.7899 14.38 14.7899 15.31C14.7899 16 14.2999 17.1 12.0899 17.1C10.0299 17.1 9.21991 16.18 9.10991 15H6.90991C7.02991 17.19 8.66991 18.42 10.5899 18.83V21H13.5899V18.85C15.5399 18.48 17.0899 17.35 17.0899 15.3C17.0899 12.46 14.6599 11.49 12.3899 10.9Z"
                        fill="#121316"
                      />
                    </svg>
                  </div>
                  <div>Үнэ</div>
                  <div>
                    {" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504L16.59 8.29504Z"
                        fill="#121316"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex gap-1 bg-[#FFFFFF] rounded-[8px] py-2 px-3 hover:cursor-pointer">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z"
                        fill="#121316"
                      />
                    </svg>
                  </div>
                  <div>Сараар</div>
                  <div>
                    {" "}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504L16.59 8.29504Z"
                        fill="#121316"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <Input placeholder="Бүтээгдэхүүний нэр, SKU, UPC" />
              </div>
            </div>
            <div className="bg-[#FFFFFF] rounded-xl">
              <div className="flex border-b-2 border-[#F7F7F8] pl-[64px] ">
                <div className="py-[14px] px-6 max-w-[156px] w-full">
                  Бүтээгдэхүүн
                </div>
                <div className="py-[14px] px-6 max-w-[214px] w-full">
                  Ангилал
                </div>
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
                <div className="py-[26px] px-6 max-w-[156px] w-full">
                  19,000₮
                </div>
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
      )}
      {!product && <AddProduct onClose={() => setProduct(true)} />}
    </div>
  );
};
export default Product;
