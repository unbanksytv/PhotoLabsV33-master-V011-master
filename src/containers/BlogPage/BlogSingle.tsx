import React from "react";
import { Link } from "react-router-dom";
import Avatar from "shared/Avatar/Avatar";
import Badge from "shared/Badge/Badge";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Comment from "shared/Comment/Comment";
import NcImage from "shared/NcImage/NcImage";
import SocialsList from "shared/SocialsList/SocialsList";
import Textarea from "shared/Textarea/Textarea";
import { Helmet } from "react-helmet";
import { _getImgRd, _getPersonNameRd, _getTitleRd } from "contains/fakeData";

const BlogSingle = () => {
  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          <Badge href="##" color="red" name="Degen Vibes" />
          <h1
            className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
            title="Quiet ingenuity: 120,000 lunches and counting"
          >
            DDA & LTL/GVO represent a multimedia brand
          </h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
            At the age of 26, Dimitri Daniloff received a camera as a gift and became enamored and obsessed 
            with photography. He has been immersed in its world ever since. While his work is often inspired by fantasy, 
            he goes to great lengths to accomplish as much in-camera, as possible. He relishes the opportunity to work 
            with raw ideas and shape them piece-by-piece into reality. For over a decade, the award-winning photographer 
            Dimitri Daniloff has been among the top 10 advertising photographers in the world. 
            Around the Millenium, Dimitri Daniloff pioneered the switch from analog to digital. 
            Some of the brands that bought his work are Absolut Vodka, Air France, Audi, Carlsberg, Land Rover, 
            LG, Longchamp, Nike, and Sony Playstation.
          </span>

          <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <div className="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0">
              <Avatar
                containerClassName="flex-shrink-0"
                sizeClass="w-8 h-8 sm:h-11 sm:w-11 "
              />
              <div className="ml-3">
                <div className="flex items-center">
                  <a
                    className="block font-semibold"
                    href="/ncmaz/author/the-demo-author-slug"
                  >
                    Aloha
                  </a>
                </div>
                <div className="text-xs mt-[6px]">
                  <span className="text-neutral-700 dark:text-neutral-300">
                    May 20, 2022
                  </span>
                  <span className="mx-2 font-semibold">·</span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    6 min read
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-1.5 sm:ml-3">
              <SocialsList />
            </div>
          </div>
        </div>
      </header>
    );
  };

  const renderContent = () => {
    return (
      <div
        id="single-entry-content"
        className="prose prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-invert"
      >
        <p>
          A good analogy for LiveTheLifeTV is that we don't see ourselves as a marketplace, 
          but rather as an art gallery, with a gated (GVO Mint Pass) auction house, 
          with a single focus on photography-based NFTs, zooming in on the photogrammetry niche we pioneered. 
          We will feature NFTs on one of our fav marketplaces, Odyssey Curated by Beramarket. 
          The dot TV brand has always been a mindfuck, especially in the "Millenium Era" 
          when we moved away from pure webTV streaming services, into a travel and real estate guide (with WebTV content). 
          Rebranding is always a big shift, the GVO baseline adds another point of confusion, 
          while it's simply replacing our old tag line "one life, live it" with Good Vibes Ohmly (GVO). 
          So what about the DDA brand? Well, the DDA collection is some of the best work of Dimitri Daniloff, 
          licensed under the LiveTheLifeTV company. The main product offering is the GVO Mint Pass 
          that is needed to access the collections. All the Odyssey Genesis holders are on the snapshot 
          and will enjoy lifetime early access. 
        </p>
        <p>
          Everyone who contributes scarce time and attention to our venture should receive pro-rata rewards 
          for producing and curating high-quality code, design, and content. As we lean into building deeper 
          relationships with participants and stakeholders, we’re looking to do this using programmable equity. 
          With customized rights and restrictions, we can expand the definition of employee equity to include 
          anyone who helps drive our business as on our team - customers, business partners, community members, etc.
        </p>
        <ol>
          <li>
            Web1: democratizing information
          </li>
          <li>
            Web2: democratizing publishing
          </li>
          <li>
            Web3: democratizing ownership
          </li>
        </ol>
        <h3>Create, curate, and collect art</h3>
        <p>
          The goal is as much financial as it is about living the life. 
          We want to express a feeling of community where people 
          who love food, wine, art, and tech come together. 
        </p>
        <p>Resident artist Dimitri Daniloff has bestowed us with his artwork to support the movement.</p>
        <blockquote>
          <p>
            LiveTheLifeTV will curate upcoming artists to join the initiative. 
            The GVO brand needs to be bold, powerful, full of style, and express freedom. 
            This is just the genesis, those with our Values will always find a HOHM at LTL.
          </p>
        </blockquote>
        <p>
          A DAO is the talent pool shipping superb design, code, and content, 
          a magic cocktail with the ingredients of a pleasing User Experience to create, 
          share and exchange valuable media (NFTs)
        </p>
        <figure>
          <img
            src="https://livethelife.tv/content/images/size/w1600/2022/04/Daniloff_Lemon_Cover_Silver.jpeg"
            alt="nc blog"
            className="rounded-2xl"
          />
          <figcaption>
            Everyone who contributes scarce time and attention to our venture should receive pro-rata rewards 
            for producing and curating high-quality code, design, and content.
          </figcaption>
        </figure>
        <p>
          As we lean into building deeper relationships with participants and stakeholders, 
          we’re looking to do this using programmable equity. With customized rights and restrictions, 
          we can expand the definition of employee equity to include anyone who helps drive our business as on our team - 
          customers, business partners, community members, etc.
        </p>
        <ul>
          <li>Web3: democratizing ownership.</li>
          <li>Web3: democratizing ownership.</li>
          <li>Web3: democratizing ownership.</li>
        </ul>
        <p>Web3: democratizing ownership.</p>
        <h2>Web3: democratizing ownership.</h2>
        <p>
          Web3: democratizing ownership{" "}
          <a href="https://livethelife.tv/">Live The Life</a> or{" "}
          <a href="https://twitter.com/livethelifetv">Twitter</a> or Web3: democratizing ownership{" "}
          <em>okay</em> Web3: democratizing ownership.
        </p>
        <p>
          Web3: democratizing ownership.
        </p>

        <p>Web3: democratizing ownership.</p>
        <h3>Web3: democratizing ownership.</h3>
        <h4>
          Web3: democratizing ownership <code>h4</code> aloha.
        </h4>
        <p>
          Web3: democratizing ownership.
        </p>
        <p>
          Web3: democratizing ownership.
        </p>
        <p>
          Web3: democratizing ownership.
        </p>
      </div>
    );
  };

  const renderTags = () => {
    return (
      <div className="max-w-screen-md mx-auto flex flex-wrap">
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Photography
        </a>
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Photogrammetry
        </a>
        <a
          className="nc-Tag inline-block bg-white text-sm text-neutral-600 py-2 rounded-lg border border-neutral-100  md:px-4 dark:bg-neutral-700 dark:border-neutral-700 hover:border-neutral-200 dark:hover:border-neutral-6000 mr-2 mb-2"
          href="##"
        >
          Cinematography
        </a>
      </div>
    );
  };

  const renderAuthor = () => {
    return (
      <div className="max-w-screen-md mx-auto ">
        <div className="nc-SingleAuthor flex">
          <Avatar sizeClass="w-11 h-11 md:w-24 md:h-24" />
          <div className="flex flex-col ml-3 max-w-lg sm:ml-5 space-y-1">
            <span className="text-xs text-neutral-400 uppercase tracking-wider">
              WRITEN BY
            </span>
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
              <a href="/ncmaz/author/the-demo-author-slug">Degen Vibes</a>
            </h2>
            <span className="text-sm text-neutral-500 sm:text-base dark:text-neutral-300">
               Web3: democratizing ownership.
              <a
                className="text-primary-6000 font-medium ml-1"
                href="/ncmaz/author/the-demo-author-slug"
              >
                Read more ser
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderCommentForm = () => {
    return (
      <div className="max-w-screen-md mx-auto pt-5">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          Responses (33)
        </h3>
        <form className="nc-SingleCommentForm mt-5">
          <Textarea />
          <div className="mt-2 space-x-3">
            <ButtonPrimary>Submit</ButtonPrimary>
            <ButtonSecondary>Cancel</ButtonSecondary>
          </div>
        </form>
      </div>
    );
  };

  const renderCommentLists = () => {
    return (
      <div className="max-w-screen-md mx-auto">
        <ul className="nc-SingleCommentLists space-y-5">
          <li>
            <Comment />
            <ul className="pl-4 mt-5 space-y-5 md:pl-11">
              <li>
                <Comment isSmall />
              </li>
            </ul>
          </li>
          <li>
            <Comment />
            <ul className="pl-4 mt-5 space-y-5 md:pl-11">
              <li>
                <Comment isSmall />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  };

  const renderPostRelated = (_: any, index: number) => {
    return (
      <div
        key={index}
        className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group"
      >
        <Link to={"/blog-single"} />
        <NcImage
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          src={_getImgRd()}
        />
        <div>
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
        </div>
        <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
          <Badge name="Categories" />
          <h2 className="block text-lg font-semibold text-white ">
            <span className="line-clamp-2">{_getTitleRd()}</span>
          </h2>

          <div className="flex">
            <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {_getPersonNameRd()}
            </span>
            <span className="mx-1.5 font-medium">·</span>
            <span className="font-normal truncate">May 20, 2022</span>
          </div>
        </div>
        <Link to={"/blog-single"} />
      </div>
    );
  };

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16 ">
      <Helmet>
        <title>Single Blog || Ciscryp React Template</title>
      </Helmet>
      {renderHeader()}
      <NcImage
        className="w-full rounded-xl"
        containerClassName="container my-10 sm:my-12 "
        src="https://livethelife.tv/content/images/size/w1600/2022/04/Daniloff_Lemon_Cover_Silver.jpeg"
      />

      <div className="nc-SingleContent container space-y-10">
        {renderContent()}
        {renderTags()}
        <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
        {renderAuthor()}
        {renderCommentForm()}
        {renderCommentLists()}
      </div>
      <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-24">
        <div className="container ">
          <h2 className="text-3xl font-semibold">Related posts</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {/*  */}
            {[1, 1, 1, 1].filter((_, i) => i < 4).map(renderPostRelated)}
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
