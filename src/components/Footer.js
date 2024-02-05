import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto bottom-0 h-[20vh] w-full flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center">
        <p className="flex items-center justify-center gap-3">
          <span>Developed by </span>
          <span>
            <NavLink
              className="fw-bolder text-white text-xl hover:text-green-600"
              to={"https://github.com/usmanrangrez"}
              target="_blank"
            >
              Usman Rangrez.
            </NavLink>
          </span>
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link className="hover:text-gray-400">Privacy Policy</Link>
          <span>|</span>
          <Link className="hover:text-gray-400">Terms of Use</Link>
          <span>|</span>
          <Link className="hover:text-gray-400">Contact Us</Link>
        </div>
      </div>
      <div className="flex mt-4 space-x-6">
        <Link className="hover:text-gray-400">Facebook</Link>
        <Link className="hover:text-gray-400">Twitter</Link>
        <Link className="hover:text-gray-400">LinkedIn</Link>
      </div>
    </footer>
  );
};

export default Footer;
