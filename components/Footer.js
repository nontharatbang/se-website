import Image from "next/image";
import logo from "../public/SElogo.svg";
import facebook from "../public/fb_footer.svg";
import instagram from "../public/ig_footer.svg";
import twitter from "../public/twitter_footer.svg";
import location from "../public/location.svg";
import phone from "../public/phone_footer.svg";
import email from "../public/email.svg";

export default function Footer() {
  return (
    <div className="bg-black text-white mt-16 text-center">
      <div className="max-w-[1920px] my-0 mx-auto py-0 px-10 flex flex-col">
        <div className="pt-10 flex">
          <div className="max-w-[50%] w-full pr-2.5 flex justify-end">
            <div className="w-[30%] flex flex-col">
              <div className="p-2.5 flex justify-center">
                <Image src={logo} alt="SeLogo" />
              </div>
              <p className="p-2.5">
                King Mongkut's Institute of Technology Ladkrabang
              </p>
              <div className="{styles.iconlink}">
                <a className="p-2.5">
                  <Image src={facebook} alt="facebook" />
                </a>
                <a className="p-2.5">
                  <Image src={instagram} alt="facebook" />
                </a>
                <a className="p-2.5">
                  <Image src={twitter} alt="facebook" />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-[50%] w-full pl-2.5 flex justify-start">
            <div className="w-[30%] flex flex-col">
              <p className="p-2.5 text-left">CONTACT US</p>
              <div className="p-2.5 flex">
                <Image src={location} alt="location" />
                <p className="px-2.5">ECC704</p>
              </div>
              <div className="p-2.5 flex">
                <Image src={phone} alt="phone" />
                <p className="px-2.5">000-1111111</p>
              </div>
              <div className="p-2.5 flex">
                <Image src={email} alt="email" />
                <p className="px-2.5">se@email.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="p-2.5">
          © 2022 INTERNATIONAL COLLEGE, KING MONGKUT'S INSTITUTE OF TECHNOLOGY
          LADKRABANG
        </p>
      </div>
    </div>
  );
}
