export function render() {
    return `
	    <div>
	        <div class="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
	            <div class="relative">
	                <input type="text" inputmode="search" class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="github_username">
	                <div class="absolute top-4 right-3" id="search-button">
	                    <i title="search" class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
	                </div>
	            </div>
	        </div>
	    </div>
    `;
}