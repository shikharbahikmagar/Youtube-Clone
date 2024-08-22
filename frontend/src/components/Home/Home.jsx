import useMenuState from "@/contexts/navMenu";  

function Home()
{

    const {menuState} = useMenuState();


    return(
        <>
      <div className={` ${menuState? 'ml-[120px] md:ml-[250px]': 'ml-[50px] md:ml-[70px]'} text-white bg-neutral-950 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 overflow-hidden gap-4 text-center mt-24`}>
        <div className="md:rounded-xl rounded:sm flex-col p-4 shadow">
           <div className="w-full">
            <img className="w-full md:h-64 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYJmWQ51HduTdVJqtwWxGUEY1NOWotNViPg&s" alt="" />
           </div>
          <div className="mt-2 text-left">
             <p className="text-[10px] md:text-xl">Title</p>
         
            <p className="text-[10px] md:text-sm text-slate-300">Descripton</p>
          </div>
        </div>
        <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
           <div className="w-full">
            <img className="w-full md:h-64 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReU7XOuG5Lq2ceiahBEIybtlucTopgcZGSg&s" alt="" />
           </div>
          <div className="mt-2 text-left">
             <p className="text-[10px] md:text-xl">Title</p>
         
            <p className="text-[10px] md:text-sm text-slate-300">Descripton</p>
          </div>
        </div>
        <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
           <div className="w-full">
            <img className="w-full md:h-64 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRItw4AGQlUYTx5PpiYkaXsw-YksNEJfqf0Lw&s" alt="" />
           </div>
          <div className="mt-2 text-left">
             <p className="text-[10px] md:text-xl">Title</p>
         
            <p className="text-[10px] md:text-sm text-slate-300">Descripton</p>
          </div>
        </div>
        <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
           <div className="w-full">
            <img className="w-full md:h-64 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwoCoOVfqIUDsSIN9DyS1bHyZSDWwpxQMVQ&s" alt="" />
           </div>
          <div className="mt-2 text-left">
             <p className="text-[10px] md:text-xl">Title</p>
         
            <p className="text-[10px] md:text-sm text-slate-300">Descripton</p>
          </div>
        </div>
        <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
           <div className="w-full">
            <img className="w-full md:h-64 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6MxDfcAoeDFWKal-ywgxsS8vlKAoQjnQ1w&s" alt="" />
           </div>
          <div className="mt-2 text-left">
             <p className="text-[10px] md:text-xl">Title</p>
         
            <p className="text-[10px] md:text-sm text-slate-300">Descripton</p>
          </div>
        </div>
        <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
           <div className="w-full">
            <img className="w-full md:h-64 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMC3qRG2P7jGkC4aAjuEmXFlFgrJx-MUipEA&s" alt="" />
           </div>
          <div className="mt-2 text-left">
             <p className="text-[10px] md:text-xl">Title</p>
         
            <p className="text-[10px] md:text-sm text-slate-300">Descripton</p>
          </div>
        </div>
        <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
           <div className="w-full">
            <img className="w-full md:h-64 rounded-lg md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAVDnP84XHj28a9nbfglkt3M6Uu-ti-JPHw&s" alt="" />
           </div>
          <div className="mt-2 text-left">
             <p className="text-[10px] md:text-xl">Title</p>
         
            <p className="text-[10px] md:text-sm text-slate-300">Descripton</p>
          </div>
        </div>
        <div className="md:rounded-xl rounded-xl flex-col p-4 shadow">
  <div className="w-full">
    <img className="w-full md:h-64 rounded-lg md:rounded-2xl object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIlITFk3MAV1___HnEgtoutYP5qn6CaVj2Qg&s" alt="Nature Landscape" />
  </div>
  <div className="mt-2 text-left">
    <p className="text-[10px] md:text-xl font-semibold">Nature Landscape</p>
    <p className="text-[10px] md:text-sm text-slate-300">A breathtaking view of nature with mountains and a serene lake.</p>
  </div>
</div>

<div className="md:rounded-xl rounded-xl flex-col p-4 shadow mt-4">
  <div className="w-full">
    <img className="w-full md:h-64 rounded-lg md:rounded-2xl object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWHxhFKrosaPqRJ1HKS_hSlwctXiKu5maEg&s" alt="Urban Skyline" />
  </div>
  <div className="mt-2 text-left">
    <p className="text-[10px] md:text-xl font-semibold">Urban Skyline</p>
    <p className="text-[10px] md:text-sm text-slate-300">A vibrant city skyline at sunset with towering skyscrapers.</p>
  </div>
</div>

<div className="md:rounded-xl rounded-xl flex-col p-4 shadow mt-4">
  <div className="w-full">
    <img className="w-full md:h-64 rounded-lg md:rounded-2xl object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl614fTDDwPbPhXyhwyO9CbCTdA0gMZlGc_w&s" alt="Delicious Food" />
  </div>
  <div className="mt-2 text-left">
    <p className="text-[10px] md:text-xl font-semibold">Delicious Food</p>
    <p className="text-[10px] md:text-sm text-slate-300">An array of mouthwatering dishes served on a table, ready to eat.</p>
  </div>
</div>

<div className="md:rounded-xl rounded-xl flex-col p-4 shadow mt-4">
  <div className="w-full">
    <img className="w-full md:h-64 rounded-lg md:rounded-2xl object-cover" src="https://i.ytimg.com/vi/OGXRw6YjH-A/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLACGOsIn0q8wS5WMXKxOLfRLG_2qg" alt="Cozy Living Room" />
  </div>
  <div className="mt-2 text-left">
    <p className="text-[10px] md:text-xl font-semibold">Cozy Living Room</p>
    <p className="text-[10px] md:text-sm text-slate-300">A beautifully decorated living room with a comfortable sofa and stylish decor.</p>
  </div>
</div>

<div className="md:rounded-xl rounded-xl flex-col p-4 shadow mt-4">
  <div className="w-full">
    <img className="w-full md:h-64 rounded-lg md:rounded-2xl object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWVBjgj3ymcYg9alnsdOFkqwU7vMJu12VPw&s" alt="Classic Car" />
  </div>
  <div className="mt-2 text-left">
    <p className="text-[10px] md:text-xl font-semibold">Classic Car</p>
    <p className="text-[10px] md:text-sm text-slate-300">A vintage classic car parked on a picturesque street.</p>
  </div>
</div>

       
      </div>
      </>
    )
}

export default Home;    