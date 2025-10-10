const InDevelopment = () => {

  return (
    <div className="flex justify-center items-center scrollbar-hide h-screen my-10 md:my-0">
      <div className="bg-[#FFE6A7] flex md:w-120 w-90 rounded-3xl flex-col pb-5">
        <div className="bg-[#432818] flex h-30 w-full rounded-t-2xl"></div>
        <div className="bg-[#FFE6A7] flex justify-center items-center rounded-full w-20 h-20 ml-5 -mt-10">
          <div className="bg-[#99582A] m-1 w-18 h-18 rounded-full"></div>
        </div>
        <p className="text-[#99582A] mt-2 mx-5 font-bold text-xl">mars.rei</p>
        <p className="text-[#99582A] -mt-1 mx-5">creator of the 'fire on marz' universe</p>

        <div className="bg-[#99582A] mx-5 mt-4 rounded-xl p-3 text-[#FFE6A7] space-y-2">
          <p className="text-sm font-semibold">Playing</p>
          <div className="flex flex-row space-x-4">
            <div className="bg-[#432818] w-20 h-20 rounded-xl flex justify-center items-center">
              <i className="fa fa-fire fa-2xl" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-semibold text-sm">Visual Studio Code</p>
              <p className="text-xs">Editing home.jsx</p>
              <p className="text-xs">Workspace: fire on marz</p>
            </div>
          </div>
        </div>

        <div className="bg-[#99582A] mx-5 mt-4 rounded-xl p-3 text-[#FFE6A7] space-y-2">
          <p className="text-sm font-semibold">About Me</p>
          <div className="flex flex-col justify-center text-sm">
            <p>marsy</p>
            <p>20 || eng/filo || 3rd yr compsci</p>
            <p>i like doodling and coding websites!!</p>
            <br />
            <p>this website is still under construction,, please come back later!!</p>
          </div>
        </div>

        <div className="bg-[#99582A] mx-5 mt-4 rounded-xl p-3 text-[#FFE6A7] space-y-2">
          <p className="text-sm font-semibold">Connections</p>
          <div className="flex flex-col justify-center space-y-2">
            {/* discord */}
            <div className="flex flex-row items-center space-x-4">
              <div className="flex justify-center items-center w-10 h-10 rounded-md bg-[#432818]">
                <i className="fa-brands fa-discord"></i>
              </div>
              <p className="text-sm">the fire on marz server!</p>
              <a href="https://discord.gg/BVaJZ6NZCn" className="contents">
                <i className="ml-auto mr-2 fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <hr className="text-[#6F1D1B] ml-14 -mr-3" />

            {/* instagram */}
            <div className="flex flex-row items-center space-x-4">
              <div className="flex justify-center items-center w-10 h-10 rounded-md bg-[#432818]">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <p className="text-sm">marzhmallow.marz</p>
              <a href="https://www.instagram.com/marzhmallow.marz/" className="contents">
                <i className="ml-auto mr-2 fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <hr className="text-[#6F1D1B] ml-14 -mr-3" />

            {/* tiktok */}
            <div className="flex flex-row items-center space-x-4">
              <div className="flex justify-center items-center w-10 h-10 rounded-md bg-[#432818]">
                <i className="fa-brands fa-tiktok"></i>
              </div>
              <p className="text-sm">marzhmallow_marz</p>
              <a href="https://www.tiktok.com/@marzhmallow_marz?is_from_webapp=1&sender_device=pc" className="contents">
                <i className="ml-auto mr-2 fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <hr className="text-[#6F1D1B] ml-14 -mr-3" />

            {/* youtube 
            <div className="flex flex-row items-center space-x-4">
              <div className="flex justify-center items-center w-10 h-10 rounded-md bg-[#432818]">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <p className="text-sm">fire on marz</p>
              <a href="https://youtube.com/@mars_rei?si=R7U-4V4ipytG62IP" className="contents">
                <i className="ml-auto mr-2 fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <hr className="text-[#6F1D1B] ml-14 -mr-3" />
            */}

            {/* webtoon 
            <div className="flex flex-row items-center space-x-4">
              <div className="flex justify-center items-center w-10 h-10 rounded-md bg-[#432818]">
                <i className="fa fa-book-bookmark"></i>
              </div>
              <p className="text-sm">webtoon canvas</p>
              <a href="https://www.webtoons.com/p/community/en/u/ha0sc" className="contents">
                <i className="ml-auto mr-2 fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <hr className="text-[#6F1D1B] ml-14 -mr-3" />
            */}

            {/* kofi */}
            <div className="flex flex-row items-center space-x-4">
              <div className="flex justify-center items-center w-10 h-10 rounded-md bg-[#432818]">
                <i className="fa fa-mug-hot"></i>
              </div>
              <p className="text-sm">kofi</p>
              <a href="https://ko-fi.com/marsrei" className="contents">
                <i className="ml-auto mr-2 fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InDevelopment;