import Image from "next/image";
import styles from "../styles/Profile.module.css";
import anonymous_profile from "../public/anonymous_profile.svg";
import phone from "../public/phone.svg";
import mail from "../public/mail.svg";
import twitter from "../public/twitter.svg";
import facebook from "../public/facebook.svg";

export default function Profile() {
  return (
    <div className="bg-[#D8D8D8] rounded-xl mx-5 h-96 w-72 flex flex-col">
      <div className="pt-8 pb-2 flex justify-center">
        <Image src={anonymous_profile} alt="profile" />
      </div>
      <p className="p-2 text-center">Role</p>
      <p className="p-2 text-center">Name</p>
      <div className="flex justify-center">
        <a className="p-2">
          <Image src={phone} alt="phone" />
        </a>
        <a className="p-2">
          <Image src={mail} alt="mail" />
        </a>
        <a className="p-2">
          <Image src={twitter} alt="twitter" />
        </a>
        <a className="p-2">
          <Image src={facebook} alt="facebook" />
        </a>
      </div>
      <p className="p-2 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
