import React, { useEffect, useState } from "react";
import {
  AiFillStar,
  AiOutlineQuestionCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
const Home = () => {
  //Loading data from data.json file
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="text-left p-5">
      <h1 className="text-5xl font-bold">{data?.title}</h1>
      <p className="text-2xl mt-3 text-gray-400 font-semibold	flex items-center">
        {data?.type}
        <AiOutlineQuestionCircle className="mt-1 ml-3"></AiOutlineQuestionCircle>
      </p>

      <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col flex-col mt-20">
        <article className="text-xl lg:w-1/2 md:w-1/2 sm:w-full w-full mr-5">
          <p className="font-semibold">{data?.shortDescription}</p>
          <div className="flex mt-8">
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg"
              alt="femaleImg"
              className=" h-10 w-10 rounded-full"
            />
            <h3 className="text-xl font-bold ml-3 text-violet-700">
              {data?.name}
            </h3>
          </div>
          <div className="flex items-center mt-5">
            {[...Array(5).keys()].map((num) => (
              <AiFillStar
                key={num}
                className="text-yellow-400 text-2xl"
              ></AiFillStar>
            ))}
            <span className="ml-3 text-gray-400">
              {data?.teacherReviews} total reviews for the teacher
            </span>
          </div>
          <div className="flex items-center mt-3">
            {[...Array(5).keys()].map((num) => (
              <AiFillStar
                key={num}
                className="text-yellow-400 text-2xl"
              ></AiFillStar>
            ))}
            <span className="ml-3 text-gray-400">
              {" "}
              {data?.classReviews} reviews for the class
            </span>
          </div>
          <p className="text-xl font-semibold mt-5">
            Completed by {data?.learners} learners
          </p>

          <div className="flex items-center lg:flex-row md:flex-row sm:flex-col flex-col">
            <button className="bg-violet-700 p-3 text-white mt-10 rounded-full flex items-center hover:bg-violet-500">
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

        <div className="img-container flex lg:w-1/2 md:w-1/2 sm:w-full w-full mt-3 items-start">
          <div className="mr-3">
            <img
              src={data?.images?.first}
              alt="art"
              className="rounded-tl-lg"
            />
          </div>
          <div className="w-1/2">
            <div className="mb-3">
              <img src={data?.images?.second} alt="art" />
            </div>
            <div>
              <img src={data?.images?.third} alt="art" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
