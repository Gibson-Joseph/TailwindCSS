import MenuIcon from "@mui/icons-material/Menu";
import logo from "/home/gibson/TailwindCSS/my-app/src/Assests/scrimba-logo.svg";
import TailwindLogo from "/home/gibson/TailwindCSS/my-app/src/Assests/tailwind-css-icon.svg";
import CSS3 from "/home/gibson/TailwindCSS/my-app/src/Assests/css3.svg";

const TailwindCSS = () => {
  return (
    <div className="bg-gray-200 font-sans flex flex-col items-center">
      <header className="bg-indigo-700 w-full px-4 py-3 flex justify-center border-b-4 border-pink-500">
        <div className="max-w-4xl w-full">
          <div className="flex flex-center justify-between">
            <img src={logo} alt="" className="h-7" />
            <button className="sm:hidden ">
              <MenuIcon className="w-6 h-6 hover:text-gray-400 text-gray-500 " />
            </button>
          </div>
          <div className="my-4">
            <h1 className="text-2xl text-indigo-100">
              Want to learn Tailwind CSS?
            </h1>
            <p className="text-sm text-indigo-200">
              Tailwind is the fastest-growing utility first CSS framworks let's
              learn it step by step.
            </p>
            <div className="relative mt-4 flex">
              <div>
                <a
                  href="#"
                  className="bg-pink-500 text-indigo-100 font-bold mt-2 px-4 py-2 rounded-full text-sm uppercase"
                >
                  Enroll now
                </a>
              </div>

              <div className="absolute right-0 bg-white rounded-full flex justify-center item-center p-5 border-4 border-pink-500">
                <img
                  className="w-16 h-16"
                  src={TailwindLogo}
                  alt="Tailwind css logo"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="mt-16 w-full flex flex-col items-center">
        <div className="max-w-4xl mx-4">
          <h2 className="pb-1 font-bold text-xl text-indigo-700 border-b border-indigo-400">
            How it works
          </h2>
          <p className="text-sm mt-4 text-gray-600">
            Tailwind is designed for development of modern applications. At its
            core, it is a roubust mobile first design system built with
            developer experience in mind. After using tailwind CSS you wil find
            it difficult to go back to use anything else learn all about it in
            this all-inclusive course.
          </p>
          <h2 className="pb-1 font-bold text-xl text-indigo-700 border-b border-indigo-400 mt-8">
            Advantages
          </h2>

          <div className="flex flex-col sm:flex-row sm:-mx-2">
            <div className="mt-4 sm:w-1/3">
              <div className="bg-white h-full p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:m-2 sm:p-3 md:p-8">
                <div className="bg-gray-200 text-indigo-100 w-16 rounded-full p-2">
                  <img src={CSS3} alt="CSS icon" />
                </div>
                <div className="mt-4 font-bold">No Custom CSS</div>
                <div className="text-center mt-2 text-gray-600 text-sm">
                  Tailwind's advantages class extensions will leave your project
                  free of custome CSS
                </div>
              </div>
            </div>

            <div className="mt-4 sm:w-1/3">
              <div className="bg-white h-full p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:m-2 sm:p-3 md:p-8">
                <div className="bg-gray-200 text-indigo-100 w-16 rounded-full p-2 ">
                  <img src={CSS3} alt="CSS icon" />
                </div>
                <div className="mt-4 font-bold">No Custom CSS</div>
                <div className="text-center mt-2 text-gray-600 text-sm">
                  Tailwind's advantages class extensions will leave your project
                  free of custome CSS
                </div>
              </div>
            </div>

            <div className="mt-4 sm:w-1/3">
              <div className="bg-white h-full p-8 border-b-4 border-pink-500 rounded-lg flex flex-col items-center sm:m-2 sm:p-3 md:p-8">
                <div className="bg-gray-200 text-indigo-100 w-16 rounded-full p-2 ">
                  <img src={CSS3} alt="CSS icon" />
                </div>
                <div className="mt-4 font-bold">No Custom CSS</div>
                <div className="text-center mt-2 text-gray-600 text-sm">
                  Tailwind's advantages class extensions will leave your project
                  free of custome CSS
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 py-12 mt-12 w-full flex flex-col items-center border-t-2 border-black">
          <h2 className="font-bold text-xl text-gray-400">
            Sign up to download the free PDF
          </h2>
          <form
            className="max-w-xl w-full text-gray-200 mt-4 p-8 md:px-0"
            action=""
          >
            <div className="flex flex-col md:flex-row md:-mx-2">
              <label htmlFor="first_name" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 w-full md:mx-2"
                placeholder="First Name"
                id="first_name"
              />

              <label htmlFor="last_name" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 w-full md:mx-2"
                placeholder="Last Name"
                id="last_name"
              />
            </div>

            <div className="flex flex-col md:flex-row md:-mx-2">
              <label htmlFor="email" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 w-full md:mx-2"
                placeholder="gibbs@gmail.com"
                id="email"
              />

              <label htmlFor="site" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                className="bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 w-full md:mx-2"
                placeholder="Your site"
                id="site"
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <button className="bg-blue-600 text-small mt-4 rounded-lg px-4 py-2 w-full">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </main>
      <footer className="bg-gray-800 w-full text-center pb-8">
        <p className="text-xs text-gray-400 font-light">
          Copyright &#169; 2022 gibsonjoseph
        </p>
      </footer>
    </div>
  );
};

export default TailwindCSS;
