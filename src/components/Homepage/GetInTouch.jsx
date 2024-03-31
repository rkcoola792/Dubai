import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

const GetInTouch = () => {
  return (
    <div className="contact-us">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-2">
        <Card title="Phone" subtitle="+1 908-736-1801" href="#" Icon={FiUser} />
        <Card
          title="Email"
          subtitle="hello@example.com"
          href="#"
          Icon={FiMail}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-mainBlue to-secondaryBlue translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-secondaryBlue group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-mainBlue group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default GetInTouch;
