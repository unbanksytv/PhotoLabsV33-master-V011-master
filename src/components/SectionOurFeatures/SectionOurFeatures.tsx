import React, { FC } from "react";
import rightImg from "images/our-features.png";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "py-14",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col lg:flex-row items-center ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
      <div className="max-w-2xl flex-shrink-0 mb-10 lg:mb-0 lg:pl-16 lg:w-2/5">
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          Curate, own, and create culture
        </span>
        <h2 className="font-semibold text-4xl mt-5">Fine Art Photography </h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Advertising" />
            <span className="block text-xl font-semibold">
              Creating a lifestyle, one vibe at a time…
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              The exhibition themes focus on photography and photogrammetry
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Exposure " />
            <span className="block text-xl font-semibold">
             A global platform supporting photogrammetry artists
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              3 stages of a NFTfi bear market. growth can wait, survival cannot
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="Secure" />
            <span className="block text-xl font-semibold">
              The future of culture and community NFTs
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Team Work makes the Dream Work
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
