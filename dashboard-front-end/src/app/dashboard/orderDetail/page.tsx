"use client"; 
import { DashboardAside } from "@/components/Dashboard";
import OrderDetailCart from "@/components/orderDetailCart";
import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { LuCar } from "react-icons/lu";
import { useState } from "react";

const mockData = [{
  orderID: 12345678,
  date: "2024-01-20",
  user: "хувь хүн",
  address: "Улаанбаатар, Сонгинохайрхан дүүрэг, 1-р хороо, 14-р байр 8-р орц, 6 давхар", 
  email: "Zoloosoko0526@gmail.com",
  tel: 88556061,
  productName: "WOMEN'S HORSEBIT MULE",
  productId: 30349049903,
  productPrice: 225.700,
  productamount: 3,
}]


const OrderDetail = () => {
  const [product, setProduct] = useState();
  const loadOrderDetail = async () => {
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    setProduct(data);
  }
console.log(product);

  useEffect(()=>{
    loadOrderDetail();
  },[]);

  return (
    <div className="flex bg-[#F7F7F8]">
      <DashboardAside />
      <div className="w-full bg-[#F7F7F8]">
        <div className="flex w-full h-[56px] items-center gap-4 bg-white mb-6">
            <IoIosArrowBack />
            <p className="text-[#121316] text-[24px]">Захиалгын дэлгэрэнгүй</p>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-[627px] bg-white border-2 gap-6 mx-6">
            <div className="flex rounded-lg justify-between bg-yellow-200 mx-6 mt-6">
              <div className="w-[404px] h-[24px]">
                <p>Захиалгын ID дугаар</p>
                <p>#12345678</p>
              </div>
              <div className="w-[200px] h-[64p]">
                <div className="bg-[#F7F7F8] p-3 rounded-full">Бэлтгэгдэж байна</div>
              </div>
            </div>
            <div className="bg-pink-300 mx-6">
              <p>
                Захиалагч: Хувь хүн
              </p>
              <p>
                  Solongo Zoloo- Zoloosoko0526@gmail.com, 88556061
              </p>
            </div>
            <div className="mx-6">
              <OrderDetailCart/>
            </div>
          </div>
          <div>
            <div className="border-2 rounded-lg w-[519px] bg-white mb-6">
              <div className="text-[#121316] text-[16px] mx-6 border-b-2 mb-2 py-5">Хүргэлтийн мэдээлэл</div>
              <div className="text-[#3F4145] text-[16px] mx-6 pt-5">Гэр</div>
              <div className="text-[#3F4145] text-[16px] mx-6 font-extrabold mb-5">Улаанбаатар, Сонгинохайрхан дүүрэг, 1-р хороо, 14-р байр 8-р орц, 6 давхар"</div>
            </div>
            <div className="border-2 rounded-lg w-[519px] bg-white">
              <div className="mx-6 border-b-2 mb-2 py-5">Төлбөрийн мэдээлэл</div>
              <div className="mx-6 my-4">Бүтээгдэхүүн</div>

              <div className="flex gap-3 justify-around mx-6">
                <div className="text-[#3F4145] text-[16px] font-extrabold mb-5">
                  WOMEN'S HORSEBIT MULE Women’s horsebit mule
                </div> 
                <div>X2</div>
                <div>₮677,100</div>
              </div>

              <div className="flex gap-3 justify-around mx-6">
                <div className="text-[#3F4145] text-[16px] font-extrabold mb-5">
                  WOMEN'S HORSEBIT MULE Women’s horsebit mule
                </div> 
                <div>X1</div>
                <div>₮125,700</div>
              </div>
              <div className="flex gap-3 items-center justify-between mx-6">
                <div className="text-[#3F4145] text-[16px] flex items-center">
                  <p className="mr-20 mb-2 py-2">Хүргэлт</p>
                  <div className="justify-items-center"><LuCar /></div>
                </div> 
                <div>₮5,000</div>
              </div>
              <div className="flex gap-3 justify-between mx-6 border-t-2">
                <div className="text-[#3F4145] text-[16px] font-extrabold my-5">
                  Нийт төлсөн дүн
                </div> 
                <div className="my-5">₮807,800</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetail;
