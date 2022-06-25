import React from "react";

const Home = () => {
  return (
    <div className="border  text-left p-5">
      <h1 className="text-4xl font-bold">
        This is Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
        ut saepe. Quisquam officiis rem sunt dignissimos similique ratione,
        consequuntur maiores?
      </h1>
      <br />
      <br />
      <div className="flex justify-between">
        <p className="text-2xl w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          possimus officia. Sunt ducimus dicta aperiam facere natus inventore
          minima alias molestias! Veniam voluptates, consectetur amet nemo
          architecto laborum atque ab! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Consectetur, optio pariatur iure fugit inventore
          quasi sint dignissimos odit accusantium amet adipisci! Non, at fugiat
          ducimus mollitia dolore reiciendis odio facilis!
        </p>
        <div className="img-container flex w-1/2">
          <div className="mx-3">
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
