import Heading from "components/Heading/Heading";
import React from "react";
import NcImage from "shared/NcImage/NcImage";

export interface People {
  id: string;
  name: string;
  job: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  {
    id: "1",
    name: `GVO33`,
    job: "Co-founder and Chief Executive",
    avatar:
      "https://livethelife.tv/content/images/2020/05/JoJo-De-Freq_2.jpg&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "4",
    name: `GVO33`,
    job: "Co-founder and Chief Executive",
    avatar:
      "https://livethelife.tv/content/images/2020/05/JoJo-De-Freq_2.jpg&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "3",
    name: `GVO33`,
    job: "Co-founder, Chairman",
    avatar:
      "https://livethelife.tv/content/images/2020/05/JoJo-De-Freq_2.jpg&auto=format&fit=crop&w=400&q=80",  },
  {
    id: "2",
    name: `GVO33`,
    job: "Co-Founder, Chief Strategy Officer",
    avatar:
      "https://livethelife.tv/content/images/2020/05/JoJo-De-Freq_2.jpg&auto=format&fit=crop&w=400&q=80",
  },
];

const SectionFounder = () => {
  return (
    <div className="nc-SectionFounder relative">
      <Heading
        desc="We’re impartial and independent."
      >
        ⛱ Founder
      </Heading>
      <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
        {FOUNDER_DEMO.map((item) => (
          <div key={item.id} className="max-w-sm">
            <NcImage
              containerClassName="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden"
              className="absolute inset-0 object-cover"
              src={item.avatar}
            />
            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
              {item.name}
            </h3>
            <span className="block text-sm text-neutral-500 sm:text-base dark:text-neutral-400">
              {item.job}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFounder;
