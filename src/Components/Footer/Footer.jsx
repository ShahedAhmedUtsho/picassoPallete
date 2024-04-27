import { Link } from "react-router-dom";
import logo  from "../../assist/images/light.svg";

const Footer = () => {
    return (
        <div className="footer mt-auto">
            <footer className={`bg-[#1b2843] bg-cover bg-center   `}>
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <Link to='/' className="flex items-center">
          <img
            src={logo}
            className="md:h-8 me-3 h-4 contrast-50  "
            alt="FlowBite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
           
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
          Update
          </h2>
          <ul className=" text-gray-400 font-medium">
            <li className="mb-4">
            <Link href="https://tailwindcss.com/" className="hover:underline">
              Profile
              </Link>
            </li>
            <li>
              <Link to="/updateprofile" className="hover:underline">
              Update profile
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">
            Account
          </h2>
          <ul className="text-gray-400 font-medium">
            <li className="mb-4">
            <Link to="/login" className="hover:underline">
              Login
              </Link>
            </li>
            <li>
            <Link  to="/register" className="hover:underline">
              Register
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">
            Extra
          </h2>
          <ul className="text-gray-400 font-medium">
            <li className="mb-4">
            <Link to="/allartandcraftitems" className="hover:underline">
            All Art & craft Items
              </Link>
            </li>
            <li>
            <Link to="/addcraftitem" className="hover:underline">
            Add Craft Item
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm sm:text-center text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
        ShahedAhmedUtsho
        </a>
        . All Rights Reserved.
      </span>
      <div className="flex mt-4 sm:justify-center sm:mt-0">
        <a target="_blank"
          href="https://www.facebook.com/iAmShahedAhmed"
          className="text-gray-500 hover:text-white"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fillRule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Facebook page</span>
        </a>
        
        <a
        target="_blank"
          href="https://twitter.com/iam_ShahedAhmed"
          className="text-gray-500 hover:text-white ms-5"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 17"
          >
            <path
              fillRule="evenodd"
              d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Twitter page</span>
        </a>
        <a
        target="_blank"
          href="https://github.com/shahedahmedutsho"
          className="text-gray-500 hover:text-white ms-5"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">GitHub account</span>
        </a>
       
      </div>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;