export function BlogSkeleton() {
  return (
    <div class="flex flex-col mt-24 max-sm:mt-[222px] text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full animate-pulse">
      <div class="grid mt-2 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2" 
          stroke="currentColor"
          class="w-full md:h-[530px] h-48 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          ></path>
        </svg>
      </div>
      <div class="py-6 pl-24 mt-11 flex max-md:flex-col max-md:pl-6 max-md:mt-24 justify-between items-center">
        <div className="w-full h-max">
          <div class="block w-[90%] h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
            &nbsp;
          </div>
          <div class="block w-[90%] h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
            &nbsp;
          </div>
          <div class="block w-[90%] h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
            &nbsp;
          </div>

          <div class="block mt-9 w-[90%] h-[440px] rounded-4xl text-inherit bg-gray-300">
            &nbsp;
          </div>
        </div>
        <div class="block w-[380px] h-[340px] text-inherit mr-4 bg-gray-300">
          &nbsp;
        </div>
      </div>
    </div>
  );
}
