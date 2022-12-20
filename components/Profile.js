import Image from "next/image";
import styles from "../styles/Profile.module.css";
import anonymous_profile from "../public/anonymous_profile.svg";
import phone_pic from "../public/phone.svg";
import email_pic from "../public/mail.svg";
import twitter_pic from "../public/twitter.svg";
import facebook_pic from "../public/facebook.svg";

export default function Profile({
  role,
  name,
  tel,
  email,
  twitter,
  facebook,
  about,
}) {
  return (
    <div className="bg-[#D8D8D8] rounded-xl mx-5 h-96 w-72 flex flex-col">
      <div className="pt-8 pb-2 flex justify-center">
        <Image src={anonymous_profile} alt="profile" />
      </div>
      <p className="p-2 text-center">{role}</p>
      <p className="p-2 text-center">{name}</p>
      <div className="flex justify-center">
        <a className="p-2" href={`tel:${tel}`}>
          <Image src={phone_pic} alt="phone" />
        </a>
        <a className="p-2" href={email}>
          <Image src={email_pic} alt="email_pic" />
        </a>
        <a className="p-2" href={twitter}>
          <Image src={twitter_pic} alt="twitter_pic" />
        </a>
        <a className="p-2" href={facebook}>
          <Image src={facebook_pic} alt="facebook_pic" />
        </a>
      </div>
      <p className="p-2 text-center">{about}</p>
    </div>
  );
}
