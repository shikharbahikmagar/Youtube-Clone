import useMenuState from "@/contexts/navMenu";  

function Suggestion() {

    const {menuState} = useMenuState();

   return (
    <div className={`${menuState? 'ml-[252px]': 'ml-[72px]'} text-[10px] md:text-[15px] bg-neutral-950 p-5 z-50 text-white fixed w-full `}>
    <ul className="flex gap-2 m-2">
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">All</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Related</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Trending</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Subscriptions</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">History</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Watch Later</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Favorites</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Uploads</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Music</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Gaming</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">News</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Sports</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Comedy</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Education</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Live</li>
        <li className="p-1 pl-4 pr-4 border-1 bg-slate-800 rounded-xl">Podcast</li>
</ul>
</div>
   )
}

export default Suggestion