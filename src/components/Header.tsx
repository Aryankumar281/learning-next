'use client'

import Link from "next/link";

function Header() {
    return (
        <nav className="flex gap-4 p-5 border">
            <Link href={'/'}>Home</Link>
            <Link href={'/products'}>Products</Link>
        </nav>
    );
}

export default Header;