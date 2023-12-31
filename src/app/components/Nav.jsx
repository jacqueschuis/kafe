import Link from "next/link";

const NavBar = () => {
    return ( 
        <nav className="py-5 text-center">
            <Link href="/home" className="text-brown-900 dark:text-brown-100 hover:text-orange-600 dark:hover:text-orange-500 transition-all">
                <h2 className="font-bold text-2xl ">kafe</h2>
            </Link>
        </nav>
     );
}
 
export default NavBar;