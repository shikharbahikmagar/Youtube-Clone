function Sidebar (){
    return(
        <aside class="w-64 bg-slate-100 text-black min-h-screen flex flex-col">
        <nav class="flex-1 mt-4">
            <ul>
                <li>
                    <a href="#" class="flex items-center p-4 hover:bg-gray-700">
                        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14"></path>
                        </svg>
                        <span class="ml-3">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-4 hover:bg-gray-700">
                        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10h6M15 15h6M15 20h6M15 5h6M4 6h1m-1 5h1m-1 5h1m-1 5h1m-1-5h6"></path>
                        </svg>
                        <span class="ml-3">Explore</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-4 hover:bg-gray-700">
                        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21H5a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v12a2 2 0 01-2 2zM15 3a2 2 0 012 2v12a2 2 0 01-2 2H10V5a2 2 0 012-2h3z"></path>
                        </svg>
                        <span class="ml-3">Subscriptions</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>

    )
} 

export default Sidebar