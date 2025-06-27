import Link from 'next/link';

function Navbar() {
  return (
    <div className="fixed top-0 right-0 p-8 space-x-8">
      <Link href={'/notes'}>Noted</Link>
      <Link href={'/my-take'}>My Take</Link>
      <Link href={'/off-script'}>Off Script</Link>
      <Link href={'/this-vs-that'}>This vs That</Link>
      <Link href={'/whats-that'}>What&apos;s That?</Link>
    </div>
  );
}

export default Navbar;