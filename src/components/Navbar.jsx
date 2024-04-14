import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font z-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         
          <span className="ml-3 text-xl text-white">Spark Club</span>
        </div>
        <nav className="ml-auto flex flex-wrap items-end text-base justify-end md:justify-end">

          <Link href="https://chat.whatsapp.com/L1TnMG7ntdw87JRw6vpovO" target="_blank">
            <div className="mr-5 hover:text-gray-100">Official Groupchat</div>
          </Link>
          <Link href="https://forms.gle/4V7AMJU1zVXLikYV6" target="_blank">
            <div className="mr-5 hover:text-gray-100">Membership Form</div>
          </Link>
          <Link href="mailto:sparkclub.giit@gmail.com" target="_blank">
            <div className="mr-5 hover:text-gray-100">Contact Us</div>
          </Link>
          <Link href="https://github.com/farhankhan197/codequest-solutions" target="_blank">
            <div className="mr-5 hover:text-gray-100">Solution Repository</div>
          </Link>
        </nav>
       
      </div>
    </header>
  );
};

export default Navbar;
