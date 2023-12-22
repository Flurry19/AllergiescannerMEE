<template>
  <div class="bg-white">
  <div class="mt-20 mb-5">
    <p class="text-center text-3xl font-bold">Zoek naar het product waarvan u de productinformatie wilt weten</p>
  </div>

  <div class="flex flex-col items-center ">
    <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full shadow-xl transform active:scale-75 transition-transform">
      Zoek producten
    </button>
  </div>

<!--    <div-->
<!--      data-te-animation-init-->
<!--      data-te-animation-start="onHover"-->
<!--      data-te-animation-reset="true"-->
<!--      data-te-animation="[fade-in_1s_ease-in-out]"-->
<!--    >Hello</div>-->

  <div class="my-5">
    <p class="text-center text-5xl font-bold">Uw favoriete producten:</p>
  </div>

  <div class="bg-orange-500 mb-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <!--Card 1-->
    <div class="group transition hover:-translate-y-1 hover:scale-110 duration-500 bg-white rounded overflow-hidden shadow-lg ring-1 ring-slate-900/5 hover:bg-orange-700 hover:ring-orange-700">
      <img class="w-full" src="" alt="product01">
      <div class="px-6 py-4">
        <div class="group-hover:text-white font-bold text-xl mb-2">Product01</div>
        <p class="group-hover:text-white text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 ring-1 ring-slate-900/5 group-hover:bg-orange-500 hover:ring-orange-500 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
        <span class="inline-block bg-gray-200 ring-1 ring-slate-900/5 group-hover:bg-orange-500 hover:ring-orange-500 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
        <span class="inline-block bg-gray-200 ring-1 ring-slate-900/5 group-hover:bg-orange-500 hover:ring-orange-500 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
      </div>
    </div>

    <!--Card 2-->
    <div class="group transition hover:-translate-y-1 hover:scale-110 duration-500 bg-white rounded overflow-hidden shadow-lg ring-1 ring-slate-900/5 hover:bg-orange-700 hover:ring-orange-700">
      <img class="w-full" src="/" alt="product02">
      <div class="px-6 py-4">
        <div class="group-hover:text-white font-bold text-xl mb-2">Product02</div>
        <p class="group-hover:text-white text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 ring-1 ring-slate-900/5 group-hover:bg-orange-500 hover:ring-orange-500 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
        <span class="inline-block bg-gray-200 ring-1 ring-slate-900/5 group-hover:bg-orange-500 hover:ring-orange-500 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
        <span class="inline-block bg-gray-200 ring-1 ring-slate-900/5 group-hover:bg-orange-500 hover:ring-orange-500 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
      </div>
    </div>

    <!--Card 3-->
    <div class="group transition hover:-translate-y-1 hover:scale-110 duration-500 bg-white rounded overflow-hidden shadow-lg ring-1 ring-slate-900/5 hover:bg-orange-700 hover:ring-orange-700">
      <img class="w-full" src="/" alt="product03">
      <div class="px-6 py-4">
        <div class="group-hover:text-white font-bold text-xl mb-2">Product03</div>
        <p class="group-hover:text-white text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 ring-1 ring-slate-900/5 group-hover:bg-orange-500 hover:ring-orange-500 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
        <span class="inline-block bg-gray-200 ring-1 ring-slate-900/5 group-hover:bg-orange-500 hover:ring-orange-500 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
        <span class="inline-block bg-gray-200 ring-1 ring-slate-900/5 group-hover:bg-orange-500 hover:ring-orange-500 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
      </div>
    </div>

    <!--Card 4-->
    <div class="group transition hover:-translate-y-1 hover:scale-110 duration-500 bg-white rounded overflow-hidden shadow-lg ring-1 ring-slate-900/5 hover:bg-orange-700 hover:ring-orange-700">
      <img class="w-full" src="/" alt="product04">
      <div class="px-6 py-4">
        <div class="group-hover:text-white font-bold text-xl mb-2">Product04</div>
        <p class="group-hover:text-white text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 ring-1 ring-slate-900/5 group-hover:bg-orange-500 hover:ring-orange-500 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
        <span class="inline-block bg-gray-200 ring-1 ring-slate-900/5 group-hover:bg-orange-500 hover:ring-orange-500 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
        <span class="inline-block bg-gray-200 ring-1 ring-slate-900/5 group-hover:bg-orange-500 hover:ring-orange-500 group-hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#</span>
      </div>
    </div>
  </div>
  </div>
</template>
<!--<script-->
<!--type="text/javascript"-->
<!--src="/node_modules/tw-elements/dist/js/tw-elements.umd.min.js">-->
<!--</script>-->