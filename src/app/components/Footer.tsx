import Image from "next/image";

function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <span>Built with Next.js & TypeScript</span>
      <a href="https://github.com/13ack2basixs" target="_blank">
        <Image src="/github.svg" alt="Github logo" width={25} height={25} />
      </a>
      <a href="https://www.linkedin.com/in/hongwei13" target="_blank">
        <Image src="/linkedin.svg" alt="Linkedin logo" width={25} height={25} />
      </a>
      <a href="https://hongggweiii.vercel.app/" target="_blank">
        <Image src="/globe.svg" alt="Globe logo" width={25} height={25} />
      </a>
    </footer>
  );
}

export default Footer;