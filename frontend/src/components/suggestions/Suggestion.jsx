import useMenuState from "@/contexts/navMenu";  

function Suggestion() {

    const {menuState} = useMenuState();

   return (
    <div className={`${menuState? 'ml-[230px]': 'ml-[65px]'} text-[10px] md:text-[13px] bg-[#0F0F0F] p-5 z-50 text-white fixed w-full `}>
    <ul className="flex gap-2 m-2">
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">All</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Related</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Trending</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Subscriptions</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">History</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Watch Later</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Favorites</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Uploads</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Music</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Gaming</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">News</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Sports</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Comedy</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Education</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Live</li>
        <li className="p-1 pl-3 pr-3 border-1 bg-slate-800 rounded-lg">Podcast</li>
</ul>
</div>
   )
}

export default Suggestion