import NavBar from "./Nav";

const HomeLayout = ({children}) => {
    return ( 
        <main className="min-h-screen w-screen flex flex-col items-center text-brown-900 dark:text-brown-100">
            <NavBar />
            {children}
        </main>
     );
}
 
export default HomeLayout;