<script lang="ts">
  import Sidebar from "../components/Sidebar.svelte";
  import Navigation from "../components/Navigation.svelte";
  import Newsletter from "../components/Newsletter.svelte";
  import Footer from "../components/Footer.svelte";
  import devincilogo from "/devinci-logo.svg";

  import { onMount } from 'svelte';

  onMount(() => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const chat = document.getElementById('chat');

    function toggleSidebar(event) {
      event.stopPropagation();
      chat.classList.toggle('-translate-x-full');
    };

    function closeSidebar(event) {
      if (!chat.contains(event.target) && !sidebarToggle.contains(event.target)) {
        chat.classList.add('-translate-x-full');
      };
    };

    function stopPropagation(event) {
      event.stopPropagation();
    };

    sidebarToggle.addEventListener('click', toggleSidebar);
    document.body.addEventListener('click', closeSidebar);
    chat.addEventListener('click', stopPropagation);

    return () => {
      sidebarToggle.removeEventListener('click', toggleSidebar);
      document.body.removeEventListener('click', closeSidebar);
      chat.removeEventListener('click', stopPropagation);
    };
  });

</script>

<div class="flex flex-row h-screen">
  <aside id="chat" class="fixed z-50 bg-gray-200 w-72 min-w-72 h-full md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in">
    <div class="sidebar-content p-4 pt-0 h-full overflow-hidden">
      <Sidebar />
    </div>
  </aside>
  <main class="main flex flex-col flex-grow ml-0 md:ml-72 transition-all duration-150 ease-in">
    <header class="header bg-white shadow py-2 px-4">
      <div class="header-content flex items-center flex-row">
        <!--
        -- triggers sidebar on small devices
        -->
        <button id="sidebarToggle" data-drawer-target="chat" data-drawer-toggle="chat" aria-controls="chat" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span class="sr-only">Open sidebar</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <div class="flex ml-auto">
          <Navigation />
        </div>
      </div>
    </header>

    <main class="pt-8 pb-16 lg:pt-8 lg:pb-24 bg-slate-100 dark:bg-gray-900 antialiased">
      <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
            <!-- Breadcrumb -->
            <nav class="justify-between mb-8 px-4 py-3 text-gray-700 border border-gray-200 rounded-lg sm:flex sm:px-5 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
              <ol class="inline-flex items-center mb-3 space-x-1 md:space-x-2 rtl:space-x-reverse sm:mb-0">
                <li>
                  <div class="flex items-center">
                    <a href="/" class="ms-1 text-sm font-medium text-gray-700 hover:text-gray-400 md:ms-2">Chat</a>
                  </div>
                </li>
                <li aria-current="page">
                  <div class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <a href="#" class="cursor-not-allowed text-gray-400 ms-1 text-sm font-medium">About</a>
                  </div>
                </li>
              </ol>
            </nav>

            <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow mb-12">
              <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-500 dark:text-white">Specifically tailored for the 2024 South Africa Knowledge Foundation Hackathon. </h5>
              <p class="font-semibold text-lg text-gray-700">We're excited that you joined the hackathon and can't wait to see what you'll build!</p>
              <p class="font-normal text-md my-4 text-gray-700">
              This event is part of a new 3-year series of United Nations Office on Drugs and Crime (UNODC) Coding4Integrity hackathons made possible through the partnership of UNODC, the United Nations Global Resource for Anti-Corruption Education and Youth Empowerment (GRACE) Initiative, Knowledge Foundation and DFINITY Foundation.
              </p>
              <img src="https://knowledgefound.org/images/2024/2024-South-Africa-hackathon-539-Participants-and-39-Countries-poster.jpg" alt="hack image" class="w-full">

            </div>

            <address class="flex items-center mb-6 not-italic">
              <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img class="mr-4 w-16 h-16 rounded-full" src={devincilogo} alt="deVinci logo">
                <div>
                  <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">deVinci</a>
                  <p class="text-base text-gray-500 dark:text-gray-400"> Powered by <a href='https://www.onicai.com/' target='_blank' rel="noreferrer" class='underline'>onicai</a> and hosted on <a href='https://internetcomputer.org/' target='_blank' rel="noreferrer" class='underline'>Internet Computer</a>
                  </p>
                </div>
              </div>
            </address>
            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Howdy from deVinci</h1>
          </header>
          <p class="lead">Hi there! I'm deVinci, your truly personal AI assistant. I can help you with whatever you need, and I'm always here to answer your questions. Whether you're looking for advice, support, or just a friendly chat, I'm here to help.</p>
          <h3 class="my-4 text-2xl font-bold dark:text-white">About deVinci<br /> Decentralized, Trusted, Open-source, Truly Yours</h3>
          <p>DeVinci is your personalized AI assistant that redefines the paradigm of digital privacy and trust. It's not just an assistant; it's a mission to revolutionize how AI and data privacy intersect.</p>
          <p class="my-4">DeVinci is powered by an open-source AI model that operates directly within your browser. When you engage with DeVinci, the AI model is loaded and processed on your device. This means your interactions stay completely within the confines of your device. Your data never leaves your hands, ensuring unprecedented control over your data and a level of privacy that is a rarity in today's world of AI assistants.</p>
          <p class="my-4">Unlike traditional AI assistants backed by corporations, DeVinci is fully independent. There is no big company behind it, influencing or manipulating the responses to favor their interests. DeVinci's sole purpose is to serve you and provide you with the most honest, unbiased assistance.</p>
          <p class="my-4">For logged in users, DeVinci offers additional features such as persistent chats. By harnessing the power of the decentralized cloud, the Internet Computer, your chats are stored securely and privately. They can be retrieved and continued at any time, from any device.</p>
          <p class="my-4">In an era where data privacy and trustworthiness are highly valued, DeVinci stands at the forefront. It provides a personalized AI assistant experience that not only safeguards user privacy but also ensures unbiased, honest interactions. With DeVinci, you can have meaningful conversations, ask questions, seek help, and feel confident that your AI assistant truly has your best interests at heart.</p>
          <p class="my-4">We hope you enjoy your interactions with DeVinci and that it'll be highly useful to you as your favorite AI assistant. For any feedback or questions, please get in touch with us. Thank you for using our app and DeVinci!</p>
          <h3 class="font-bold">Credits</h3>
          <p>Vector graphics sponsored by <a href="https://www.freepik.com/">Freepik.</a> Running DeVinci in your browser is enabled by the great open-source project <a href='https://webllm.mlc.ai/' target='_blank' rel="noreferrer" class='underline'>Web LLM.</a> Serving this app and hosting your data securely and in a decentralized way is made possible by the <a href='https://internetcomputer.org/' target='_blank' rel="noreferrer" class='underline'>Internet Computer</a></p>
        </article>
      </div>
    </main>

    <Newsletter />
    <Footer />

  </main>
</div>

<style global>
	.footer {
		background: rgba(255,255,255,1);
		padding-top: 10px;
	}
</style>




