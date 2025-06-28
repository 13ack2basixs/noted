import Link from 'next/link';

function Navbar() {
  return (
    <div className="fixed top-0 right-0 p-8 space-x-8">
      <Link 
        className='relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer' 
        href={'/notes'}
      >
        Notes
      </Link>
      <Link
        className='relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer' 
        href={'/my-take'}
      >
        My Take
      </Link>
      <Link 
        className='relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer' 
        href={'/off-script'}
      >
        Off Script
      </Link>
      <Link 
        className='relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer' 
        href={'/this-vs-that'}
      >
        This vs That
      </Link>
      <Link 
        className='relative after:bg-black after:absolute after:h-[1px] after:w-0 after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer' 
        href={'whats-that'}
      >
        What&apos;s That?
      </Link>
    </div>
  );
}

export default Navbar;