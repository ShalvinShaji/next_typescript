import Link from "next/link";

const Navbar = () => {
    const navItems = { Home: "/", About: "/about", Contact:"/contact" };

    return (
        <nav className=" mt-5 flex items-center justify-center ">
            <div className="nav-items flex items-center justify-center">
                {Object.entries(navItems).map(([name, path], i) => (
                    <Link key={i} href={path}>
                        <p className="mx-4">{name}</p>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
