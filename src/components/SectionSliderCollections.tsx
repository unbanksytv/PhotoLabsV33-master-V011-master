import React, { FC, useEffect, useId, useRef } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import CollectionCard from "./CollectionCard";
import CollectionCard2 from "./CollectionCard2";
import { Link } from "react-router-dom";

export interface SectionSliderCollectionsProps {
  className?: string;
  itemClassName?: string;
  cardStyle?: "style1" | "style2";
}

const SectionSliderCollections: FC<SectionSliderCollectionsProps> = ({
  className = "",
  cardStyle = "style1",
}) => {
  const sliderRef = useRef(null);
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    const OPTIONS: Glide.Options = {
      perView: 3,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          gap: 28,
          perView: 2.5,
        },
        1024: {
          gap: 20,
          perView: 2.15,
        },
        768: {
          gap: 20,
          perView: 1.5,
        },

        500: {
          gap: 20,
          perView: 1,
        },
      },
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    // @ts-ignore
    return () => slider.destroy();
  }, [sliderRef, UNIQUE_CLASS]);

  const MyCollectionCard =
    cardStyle === "style1" ? CollectionCard : CollectionCard2;

  return (
    <div className={`nc-SectionSliderCollections ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`} ref={sliderRef}>
        <Heading
          isCenter={false}
          hasNextPrev
          desc="Discover the GVO Creative EconOHMy"
          rightPopoverText="last 7 days"
        >
          Top collections
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className={`glide__slide`}>
              <MyCollectionCard
                imgs={[
                  "https://livethelife.tv/content/images/size/w1600/2022/04/Daniloff_Lemon_Scene_01-1.jpeg",
                  "https://livethelife.tv/content/images/2022/04/Dimitri_Daniloff_DaftPunk_scene03.jpg",
                  "https://livethelife.tv/content/images/2022/04/Daniloff_DaftPunk_scene04-1-1024x1007.jpg",
                  "https://livethelife.tv/content/images/size/w2400/2022/05/14_Dimitri_Daniloff_Archives_Molds-1.jpg",
                ]}
              />
            </li>
            <li className={`glide__slide`}>
              <MyCollectionCard
                imgs={[
                  "https://livethelife.tv/content/images/size/w2400/2022/04/04_Dimitri_Daniloff_Archives_Plugs.jpg",
                  "https://livethelife.tv/content/images/size/w2400/2022/04/11_Dimitri_Daniloff_Archives_Smoking.jpg",
                  "https://livethelife.tv/content/images/size/w1600/2022/04/12_Dimitri_Daniloff_Archives_Cubisme_2.jpg",
                  "https://livethelife.tv/content/images/size/w1600/2022/04/21_Dimitri_Daniloff_Archives_Cubisme_4.jpg",
                ]}
              />
            </li>

            <li className={`glide__slide`}>
              <MyCollectionCard
                imgs={[
                  "https://livethelife.tv/content/images/size/w1600/2022/04/27_Dimitri_Daniloff_Archives_Cubisme_3.jpg",
                  "hhttps://livethelife.tv/content/images/size/w1600/2022/04/20_Dimitri_Daniloff_Archives_Blowtorch-1.jpg",
                  "https://livethelife.tv/content/images/size/w1600/2022/04/17_Dimitri_Daniloff_Archives_Moth-1.jpg",
                  "https://livethelife.tv/content/images/size/w1600/2022/04/01_Dimitri_Daniloff_Archives_Balloon-2.jpg",
                ]}
              />
            </li>
            <li className={`glide__slide`}>
              <MyCollectionCard
                imgs={[
                  "https://livethelife.tv/content/images/size/w2400/2022/05/Dimitri_Daniloff_Archives_Supermarket.jpg",
                  "https://livethelife.tv/content/images/size/w1600/2022/04/06_Dimitri_Daniloff_Archives_Eye_1-1.jpg",
                  "https://livethelife.tv/content/images/size/w1600/2022/04/16_Dimitri_Daniloff_Archives_Eye_2-1.jpg",
                  "https://livethelife.tv/content/images/size/w2400/2022/04/02_Dimitri_Daniloff_Archives_Death.jpg",
                ]}
              />
            </li>
            <li className={`glide__slide   `}>
              <Link to={"/page-search"} className="block relative group">
                <div className="relative rounded-2xl overflow-hidden h-[410px]">
                  <div className="h-[410px] bg-black/5 dark:bg-neutral-800"></div>
                  <div className="absolute inset-y-6 inset-x-10  flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center relative">
                      <span className="text-xl font-semibold">Collections</span>
                      <svg
                        className="absolute left-full w-5 h-5 ml-2 rotate-45 group-hover:scale-110 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 20.4999V3.66992"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-sm mt-1">Show me more ser</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderCollections;
