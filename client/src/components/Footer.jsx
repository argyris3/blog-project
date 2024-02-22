import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-4">
            <Link to="/" className="self-center whitespace-nowrap text-md sm:text-lg font-semibold dark:text-white">
              <span className=" py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Argyrios
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <Footer.Title title="Home" />
            <Footer.Title title="About" />
            <Footer.LinkGroup col>
              <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                Μουσικη
              </Footer.Link>
              <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                Αθλητικα
              </Footer.Link>
            </Footer.LinkGroup>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
                  Github
                </Footer.Link>
                <Footer.Link href="#">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <Footer.Divider />
            <div className="w-full gap-1 sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="#" by="Argyris blog" year={new Date().getFullYear()} />
              <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="https://github.com" icon={BsGithub} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
