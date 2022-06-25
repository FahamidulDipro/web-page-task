import React from "react";
import {
  AiFillStar,
  AiOutlineQuestionCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
const Home = () => {
  return (
    <div className="border  text-left p-5">
      <h1 className="text-5xl font-bold">
        This is Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
        ut saepe. Quisquam officiis rem sunt dignissimos similique ratione,
        consequuntur maiores?
      </h1>
      <p className="text-2xl mt-3 text-gray-400 font-semibold	flex items-center">
        Multi-day Course{" "}
        <AiOutlineQuestionCircle className="mt-1 ml-3"></AiOutlineQuestionCircle>
      </p>

      <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col flex-col mt-20">
        <article className="text-xl lg:w-1/2 md:w-1/2 sm:w-full w-full mr-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, possimus officia. Sunt ducimus dicta aperiam facere
            natus inventore minima alias molestias! Veniam voluptates,
            consectetur amet nemo architecto laborum atque ab! Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Consectetur, optio pariatur
            iure fugit inventore quasi sint dignissimos odit accusantium amet
            adipisci! Non, at fugiat ducimus mollitia dolore reiciendis odio
            facilis!
          </p>
          <div className="flex mt-8">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg"
              alt="femaleImg"
              className=" h-10 w-10 rounded-full"
            />
            <h3 className="text-xl font-bold ml-3 text-violet-700">
              Kimberly R Moseler
            </h3>
          </div>
          <div className="flex items-center mt-5">
            {[...Array(5).keys()].map((num) => (
              <AiFillStar
                key={num}
                className="text-yellow-400 text-2xl"
              ></AiFillStar>
            ))}
            <span className="ml-3">467 total reviews for the teacher</span>
          </div>
          <div className="flex items-center mt-3">
            {[...Array(5).keys()].map((num) => (
              <AiFillStar
                key={num}
                className="text-yellow-400 text-2xl"
              ></AiFillStar>
            ))}
            <span className="ml-3">5 reviews for the class</span>
          </div>
          <p className="text-xl font-bold mt-5">Completed by 21 learners</p>

          <div className="flex items-center ">
            <button className="bg-violet-700 p-3 text-white mt-10 rounded-full flex items-center">
              See Class Schedule{" "}
              <FaAngleRight className="mt-1 ml-2 text-2xl"></FaAngleRight>
            </button>
            <p className="flex items-center mt-10 text-violet-700 font-bold mx-10">
              <AiOutlineHeart className="text-2xl mr-1"></AiOutlineHeart> Save
            </p>
            <p className="flex items-center mt-10 text-violet-700 font-bold mx-10">
              <RiShareForwardLine className="text-2xl mr-1"></RiShareForwardLine>{" "}
              Share
            </p>
          </div>
        </article>

        <div className="img-container flex lg:w-1/2 md:w-1/2 sm:w-full w-full mt-3">
          <div className="mr-3">
            <img
              src="https://w0.peakpx.com/wallpaper/4/918/HD-wallpaper-home-chen-chen-chao-evil-pink-art-house-luminos-tree-fantasy-green.jpg"
              alt="art"
              className="rounded-tl-lg"
            />
          </div>
          <div className="w-1/2">
            <div className="mb-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlIy0T7SmDS0vwXh0pVSKf4ggugz451SG7oIoCu7uJRCNFBV42lN6TNIhHDtnOUiVSzc&usqp=CAU"
                alt="art"
              />
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfi740tigtxS0qENiTpW0-PrjbEpjyKWypL15bf28pslnH7jEJaM-9EyQDfcVD3TQZIq4&usqp=CAU"
                alt="art"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
