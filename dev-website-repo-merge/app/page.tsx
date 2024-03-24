import Image from "next/image";
import profilePicSid from "../public/profile-pic-sid.jpg";

import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaCoffee as CoffeeIcon } from "react-icons/fa";
import { InformationIde } from "app/components/information-ide";

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center h-full gap-8 p-10">
      <div className="flex w-full lg:justify-around md:justify-center">
        <div
          id="picture-name-headline"
          className="flex flex-col lg:items-center md:gap-2"
        >
          <div className="h-40 w-40 md:h-48 md:w-48 lg:h-64 lg:w-64 relative ">
            <Image
              src={profilePicSid}
              alt="profile picture"
              fill={true}
              className="rounded-full"
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium md:font-bold">
            <span className="text-[#2d5a96]">Sid</span>dhant{" "}
            <span className="text-[#2d5a96]">B</span>hatia
          </h1>
          <h2 className="md:text-lg lg:text-center">
            Communicate | Document | Code | Test | Deliver | Monitor | Mentor
          </h2>
        </div>
        <div
          id="desktop-details"
          className="hidden lg:block bg-zinc-800 h-[20rem] w-[36rem] rounded-3xl px-10 py-16 text-white"
        >
          <InformationIde />
        </div>
      </div>
      <div
        id="mobile-details"
        className="lg:hidden flex w-full md:w-max flex-col md:text-lg md:justify-center"
      >
        <p className="text-[#2d5a96] font-normal">
          Solving problems at:{" "}
          <a
            href="https://www.foodpanda.com/"
            target="_blank"
            className="text-black font-medium hover:decoration-solid hover:underline"
          >
            Foodpanda - Delivery Hero
          </a>
        </p>
        <p className="text-[#2d5a96] font-normal">
          Previously at:{" "}
          <a
            href="https://www.airasia.com/"
            target="_blank"
            className="text-black font-medium hover:decoration-solid hover:underline"
          >
            AirAsia Superapp
          </a>
        </p>
        <p className="text-[#2d5a96] font-normal">
          First class engineering honours from:{" "}
          <a
            href="https://www.monash.edu/it"
            target="_blank"
            className="text-black font-medium hover:decoration-solid hover:underline"
          >
            Monash University
          </a>
        </p>
        <br />
        <a
          href="mailto:siddhant8b@gmail.com?Subject=Hey Siddhant!"
          className="text-black font-medium hover:decoration-solid hover:underline"
        >
          siddhant8b@gmail.com
        </a>
        <p className="text-black">
          Kuala Lumpur, <span className="font-medium">Malaysia</span>
        </p>
      </div>
      <div id="social-profiles" className="flex flex-row gap-4">
        <a
          className="hover:opacity-50"
          href="https://www.linkedin.com/in/siddhant-bhatia/"
          target="_blank"
        >
          <LinkedinIcon className="h-8 w-8" />
        </a>
        <a
          className="hover:opacity-50"
          href="https://github.com/siddhantbhatia"
          target="_blank"
        >
          <GithubIcon className="h-8 w-8" />
        </a>
      </div>
      <a
        className="hover:opacity-50 cursor-pointer flex gap-1 items-center"
        href="mailto:siddhant8b@gmail.com?Subject=Up%20for%20a%20virtual%20coffee%20chat?"
        target="_top"
      >
        <span>Hit me up for a</span> <CoffeeIcon className="h-8 w-8" />
      </a>
    </main>
  );
}

export const metadata = {
  title: "Siddhant Bhatia Developer page",
  description: "Another software engineer's webpage for self promotion",
};
