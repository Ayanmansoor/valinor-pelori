import React from 'react'

import ContactForm from '@/Comman/ContactForm';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
function ContactUs() {

  return (
    <section className="w-full relative h-auto grid grid-cols-1 md:grid-cols-2  container py-10 md:py-10  gap-5 lg:gap-20 2xl:gap-40  px-5  md:px-10   xl:px-20 ">
      <ContactForm />

      <div className="w-full relative flex flex-col gap-2 md:gap-4 h-auto ">
        <h2 className="w-full relative text-2xl lg:text-3xl text-primary font-medium ">
          Head Office
        </h2>

        <span className="w-full relative h-auto flex flex-col gap-1 ">
          <h2 className="w-full text-xl font-medium text-foreground  ">
            Address :
          </h2>
          <p className=" text-base font-normal text-fontPrimary  ">
            Plot No. 22, Rautara Industrial Estate, Beside Hanuman Hotel,
            Shil-Mahape Road, Shilphata, Thane 400 612
          </p>
        </span>
        <span className="w-full relative h-auto flex flex-col gap-1 ">
          <h2 className="w-full text-lg font-medium text-foreground  ">
            Contact :
          </h2>
          <div className="w-full relative flex  flex-wrap items-center gap-3 md:gap-5 ">
            <Link
              to={"tel:(+91) 9773141989"}
              className="text-base font-medium text-fontPrimary "
            >
              (+91) 9773141989
            </Link>
            /
            <Link
              to={"tel:(+91) 9773141989"}
              className="text-base font-medium text-fontPrimary "
            >
              (+91) 9773141989
            </Link>
          </div>
        </span>

        <div className="w-full relative flex  flex-wrap items-centergap-3 md:gap-5 ">
          <Link to={"/"} className="text-lg font-medium text-fontPrimary ">
            sales@pcd-flowmeter.com
          </Link>
          /
          <Link
            to={"melto:sales.pcdpl@gmail.com"}
            className="text-lg font-medium text-webtext "
          >
            sales.pcdpl@gmail.com
          </Link>
        </div>

        <div className="w-full relative flex  flex-wrap items-center gap-5 ">
          <Link
            to={"/"}
            className="text-p18 font-medium bg-primary rounded-full p-2 text-webtext "
          >
            <FaFacebook className="text-white text-[25px]" />
          </Link>
          <Link
            to={"melto:sales.pcdpl@gmail.com"}
            className="text-p18 font-medium bg-primary p-2 rounded-full text-webtext "
          >
            <FaTwitter className="text-[25px] text-white " />
          </Link>

          <Link
            to={"/"}
            className="text-p18 font-medium bg-primary rounded-full p-2 text-webtext "
          >
            <FaInstagram className="text-white text-[25px]" />
          </Link>
          <Link
            to={"melto:sales.pcdpl@gmail.com"}
            className="text-p18 font-medium bg-primary p-[10px] rounded-full text-webtext "
          >
            <BsLinkedin className="text-[20px] text-white " />
          </Link>
          <Link
            to={"melto:sales.pcdpl@gmail.com"}
            className="text-p18 font-medium bg-primary p-2 rounded-full text-webtext "
          >
            <FaYoutube className="text-[25px] text-white " />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactUs