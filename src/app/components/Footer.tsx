import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center p-4">
        <span className="text-sm italic mb-2">Noted — Jot it down. Make it stick.</span>
        <span className="text-sm mb-2">Built with Next.js & TypeScript</span>
        <div className="flex space-x-7">
          <a href="https://github.com/13ack2basixs" target="_blank">
            <Image src="/github.svg" alt="Github logo" width={25} height={25} />
          </a>
          <a href="https://www.linkedin.com/in/hongwei13" target="_blank">
            <Image src="/linkedin.svg" alt="Linkedin logo" width={25} height={25} />
          </a>
          <a href="https://hongggweiii.vercel.app/" target="_blank">
            <Image src="/globe.svg" alt="Globe logo" width={25} height={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;