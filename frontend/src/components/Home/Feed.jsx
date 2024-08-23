import useMenuState from "@/contexts/navMenu";  

function Feed()
{

    const {menuState} = useMenuState();


    return(
        <>
    <div className={` ${menuState? 'ml-[120px] md:ml-[250px]': 'ml-[50px] md:ml-[70px]'} text-white bg-neutral-950 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-2 text-center mt-24 transition-ml duration-200 ease-in-out`}>
      <div className="md:rounded-xl rounded:sm flex-col p-4 shadow">
        <div className="w-full">
            <img className="w-full md:h-56 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYJmWQ51HduTdVJqtwWxGUEY1NOWotNViPg&s" alt="" />
        </div>
        <div className="mt-2 text-left">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" />
              <p className="text-[10px] md:text-[16px] p-1 ml-4">Sunday Hindi Full Movie - Ajay Devgan - Ayesha Takia</p>
            </div>
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">Venus Movies</p>
            <div className="flex">
              <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">5.7m views</p>
              <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull; 7 years ago</p>
            </div>
        </div>
      </div>
      <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
        <div className="w-full">
            <img className="w-full md:h-56 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReU7XOuG5Lq2ceiahBEIybtlucTopgcZGSg&s" alt="" />
        </div>
        <div className="mt-2 text-left">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" />
              <p className="text-[10px] md:text-[16px] p-1 ml-4">Sunday Hindi Full Movie - Ajay Devgan - Ayesha Takia</p>
            </div>
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">Venus Movies</p>
            <div className="flex">
              <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">5.7m views</p>
              <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull; 7 years ago</p>
            </div>
        </div>
      </div>
      <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
        <div className="w-full">
            <img className="w-full md:h-56 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItw4AGQlUYTx5PpiYkaXsw-YksNEJfqf0Lw&s" alt="" />
        </div>
        <div className="mt-2 text-left">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" />
              <p className="text-[10px] md:text-[16px] p-1 ml-4">Sunday Hindi Full Movie - Ajay Devgan - Ayesha Takia</p>
            </div>
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">Venus Movies</p>
            <div className="flex">
              <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">5.7m views</p>
              <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull; 7 years ago</p>
            </div>
        </div>
      </div>
      <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
        <div className="w-full">
            <img className="w-full md:h-56 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwoCoOVfqIUDsSIN9DyS1bHyZSDWwpxQMVQ&s" alt="" />
        </div>
        <div className="mt-2 text-left">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" />
              <p className="text-[10px] md:text-[16px] p-1 ml-4">Sunday Hindi Full Movie - Ajay Devgan - Ayesha Takia</p>
            </div>
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">Venus Movies</p>
            <div className="flex">
              <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">5.7m views</p>
              <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull; 7 years ago</p>
            </div>
        </div>
      </div>
      <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
        <div className="w-full">
            <img className="w-full md:h-56 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6MxDfcAoeDFWKal-ywgxsS8vlKAoQjnQ1w&s" alt="" />
        </div>
        <div className="mt-2 text-left">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" />
              <p className="text-[10px] md:text-[16px] p-1 ml-4">Sunday Hindi Full Movie - Ajay Devgan - Ayesha Takia</p>
            </div>
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">Venus Movies</p>
            <div className="flex">
              <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">5.7m views</p>
              <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull; 7 years ago</p>
            </div>
        </div>
      </div>
      <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
        <div className="w-full">
            <img className="w-full md:h-56 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMC3qRG2P7jGkC4aAjuEmXFlFgrJx-MUipEA&s" alt="" />
        </div>
        <div className="mt-2 text-left">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" />
              <p className="text-[10px] md:text-[16px] p-1 ml-4">Sunday Hindi Full Movie - Ajay Devgan - Ayesha Takia</p>
            </div>
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">Venus Movies</p>
            <div className="flex">
              <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">5.7m views</p>
              <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull; 7 years ago</p>
            </div>
        </div>
      </div>
      <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
        <div className="w-full">
            <img className="w-full md:h-56 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAVDnP84XHj28a9nbfglkt3M6Uu-ti-JPHw&s" alt="" />
        </div>
        <div className="mt-2 text-left">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" />
              <p className="text-[10px] md:text-[16px] p-1 ml-4">Sunday Hindi Full Movie - Ajay Devgan - Ayesha Takia</p>
            </div>
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">Venus Movies</p>
            <div className="flex">
              <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">5.7m views</p>
              <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull; 7 years ago</p>
            </div>
        </div>
      </div>
      <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
        <div className="w-full">
            <img className="w-full md:h-56 rounded-lg md:rounded-2xl object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIlITFk3MAV1___HnEgtoutYP5qn6CaVj2Qg&s" alt="Nature Landscape" />
        </div>
        <div className="mt-2 text-left">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" />
              <p className="text-[10px] md:text-[16px] p-1 ml-4">Sunday Hindi Full Movie - Ajay Devgan - Ayesha Takia</p>
            </div>
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">Venus Movies</p>
            <div className="flex">
              <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">5.7m views</p>
              <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull; 7 years ago</p>
            </div>
        </div>
      </div>
      <div className="md:rounded-xl rounded-xl flex-col p-4 shadow mt-4">
        <div className="w-full">
            <img className="w-full md:h-56 rounded-lg md:rounded-2xl object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWHxhFKrosaPqRJ1HKS_hSlwctXiKu5maEg&s" alt="Urban Skyline" />
        </div>
        <div className="mt-2 text-left">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" />
              <p className="text-[10px] md:text-[16px] p-1 ml-4">Sunday Hindi Full Movie - Ajay Devgan - Ayesha Takia</p>
            </div>
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">Venus Movies</p>
            <div className="flex">
              <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">5.7m views</p>
              <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull; 7 years ago</p>
            </div>
        </div>
      </div>
      <div className="md:rounded-xl rounded-xl flex-col p-4 shadow mt-4">
        <div className="w-full">
            <img className="w-full md:h-56 rounded-lg md:rounded-2xl object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl614fTDDwPbPhXyhwyO9CbCTdA0gMZlGc_w&s" alt="Delicious Food" />
        </div>
        <div className="mt-2 text-left">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" />
              <p className="text-[10px] md:text-[16px] p-1 ml-4">Sunday Hindi Full Movie - Ajay Devgan - Ayesha Takia</p>
            </div>
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">Venus Movies</p>
            <div className="flex">
              <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">5.7m views</p>
              <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull; 7 years ago</p>
            </div>
        </div>
      </div>
      <div className="md:rounded-xl rounded-xl flex-col p-4 shadow mt-4">
        <div className="w-full">
            <img className="w-full md:h-56 rounded-lg md:rounded-2xl object-cover" src="https://i.ytimg.com/vi/OGXRw6YjH-A/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLACGOsIn0q8wS5WMXKxOLfRLG_2qg" alt="Cozy Living Room" />
        </div>
        <div className="mt-2 text-left">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" />
              <p className="text-[10px] md:text-[16px] p-1 ml-4">Sunday Hindi Full Movie - Ajay Devgan - Ayesha Takia</p>
            </div>
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">Venus Movies</p>
            <div className="flex">
              <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">5.7m views</p>
              <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull; 7 years ago</p>
            </div>
        </div>
      </div>
      <div className="md:rounded-xl rounded-xl flex-col p-4 shadow mt-4">
        <div className="w-full">
            <img className="w-full md:h-56 rounded-lg md:rounded-2xl object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWVBjgj3ymcYg9alnsdOFkqwU7vMJu12VPw&s" alt="Classic Car" />
        </div>
        <div className="mt-2 text-left">
            <div className="flex">
              <img className="rounded-full w-8 h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s" alt="" />
              <p className="text-[10px] md:text-[16px] p-1 ml-4">Sunday Hindi Full Movie - Ajay Devgan - Ayesha Takia</p>
            </div>
            <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">Venus Movies</p>
            <div className="flex">
              <p className="text-[10px] md:text-sm text-gray-300 ml-[50px]">5.7m views</p>
              <p className="text-[10px] md:text-sm text-gray-300 ml-4">&bull; 7 years ago</p>
            </div>
        </div>
      </div>
</div>
      </>
    )
}

export default Feed;    