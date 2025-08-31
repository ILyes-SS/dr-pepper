import React from "react";

const Footer = () => {
  return (
    <section className="px-7 py-4 bg-secondary h-full w-[100dvw]">
      <div className="max-[450px]:flex-col max-[450px]:items-start pr-10 items-center border-b-2 pb-2 border-primary flex">
        <div className="original font-body mt-1 xl:text-xl xl:my-2">
          <img
            className="h-[50px]"
            src="/images/dr-pepper-new-logo-removebg-preview.png"
            alt="Dr pepper logo"
          />
          <div className="mt-2">
            <h1 className="font-bold">Address:</h1>
            <p>Algeria</p>
          </div>
          <div className="mt-2">
            <h1 className="font-bold">Contact:</h1>
            <p className="underline">0541907026</p>
            <p className="underline">benmaltiiilyes@gmail.com</p>
          </div>
          <div className="mt-2 flex gap-3">
            <img className="h-7" src="/icons/fb.png" alt="facebook logo" />
            <img className="h-7" src="/icons/insta.png" alt="instagram logo" />
            <img className="h-7" src="/icons/li.png" alt="linkedin logo" />
            <img className="h-7" src="/icons/x.png" alt="X logo" />
          </div>
        </div>
        <div className="min-[450px]:ml-auto max-[450px]:mt-2">
          <ul className="original font-body mt-1 xl:text-xl xl:my-2">
            <li>Career Page</li>
            <li>FAQs</li>
            <li>Events Calendar</li>
            <li>Feedback Form</li>
          </ul>
        </div>
      </div>
      <div className="max-[600px]:flex-col  flex original font-body text-sm mt-1 xl:text-md xl:my-2">
        <div>©2024 Ilyes, all rights reserved.</div>
        <div className="min-[600px]:ml-auto max-[600px]:pt-2 pr-3">
          <ul className="max-[600px]:flex-col max-[600px]:gap-1 underline flex gap-3">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies Settings</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
