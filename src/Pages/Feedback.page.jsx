import FeedbackForm from "@/Comman/FeedbackForm";
import { Link } from "react-router-dom";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";


function Feedback() {
    return (
        <>
            <section className="w-full relative h-full py-10 md:py-20 container grid   grid-cols-1 md:grid-cols-[1fr_1fr]  gap-5 md:gap-10 lg:gap-20 xl:gap-20 px-5  md:px-10   xl:px-20 ">
                <FeedbackForm />
                <div
                    className="w-full gap-3  sticky lg:sticky lg:top-20 h-fit 
         flex flex-col"
                >
                    <h2 className="text-2xl font-medium text-foreground  ">Contact Us</h2>

                    <span className="w-full relative h-auto flex flex-col gap-1 ">
                        <h2 className="w-full text-xl   font-medium  text-fontPrimary  ">
                            Contact :
                        </h2>
                        <div className="w-full relative flex  flex-wrap items-center gap-3 md:gap-5 ">
                            <Link
                                to={"tel:(+91) 9773141989"}
                                className="text-lg font-medium  text-fontPrimary "
                            >
                                (+91) 9773141989
                            </Link>
                            /
                            <Link
                                to={"tel:(+91) 9773141989"}
                                className="text-lg font-medium text-fontPrimary  "
                            >
                                (+91) 9773141989
                            </Link>
                        </div>
                    </span>

                    <div className="w-full relative flex  flex-wrap items-centergap-3 md:gap-3 ">
                        <h2 className="w-full text-xl font-medium text-fontPrimary  ">
                            Email :
                        </h2>
                        <Link to={"/"} className="text-lg font-medium text-fontPrimary">
                            sales@pcd-flowmeter.com
                        </Link>
                        /
                        <Link
                            to={"melto:sales.pcdpl@gmail.com"}
                            className="text-lg font-medium text-fontPrimary"
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
        </>
    );
}

export default Feedback