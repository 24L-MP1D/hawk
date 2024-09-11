"use client";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="container mx-auto bg-black text-white">
      <div className="flex justify-between mx-52 mt-16 items-center">
        <div className="w-[41px] h-[35px]">
          <Image width={41} height={35} alt={"logo"} src={"/Pinecone@2x.png"} />
        </div>
        <div className="flex gap-10">
          <div className="flex items-center gap-4">
            <div className="border rounded-full w-8 h-8 flex items-center justify-center text-slate-600">
              <FiPhone className="text-white" />
            </div>
            <p>(976) 7007-1234</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="border rounded-full w-8 h-8 flex items-center justify-center">
              <IoMailOutline />
            </div>
            <Link href="www.ecommerce.mn">contact@ecommerce.mn</Link>
          </div>
        </div>
      </div>

      <div className="flex items-center w-[1040px] h-[1.5px] bg-slate-50 mx-auto mt-11"></div>

      <div className="flex justify-between items-center mx-52 mb-16 mt-11">
        <div className="text-[14px]">© 2024 Ecommerce MN</div>
        <div className="flex gap-7">
          <Link href="https://www.facebook.com/">
            <FaFacebook />
          </Link>
          <Link href="https://www.instagram.com/">
            <IoLogoInstagram />
          </Link>
          <Link href="https://x.com/">
            <FaTwitter />
          </Link>
          <Link href="https://mn.linkedin.com/">
            <IoLogoLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};
