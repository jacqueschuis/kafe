import NavBar from "./Nav";

const HomeLayout = ({children}) => {
    return ( 
        <main className="min-h-screen flex flex-col items-center">
            <NavBar />
            {children}
        </main>
     );
}
 
export default HomeLayout;