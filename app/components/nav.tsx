import Link from "next/link";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";

import { SiSpotify, SiYoutube, SiApplepodcasts } from "react-icons/si"

const navItems = [
    {
        label: 'About',
        route: '/'
    },
    {
        label: 'Episodes',
        route: '/'
    }
]

export function Navbar() {
    return (
        <nav className="fixed inset-x-0 top-0 z-10 h-24 flex items-center justify-between p-2">
            <div className="h-full flex items-center">
                <div className="h-full mx-6">
                    <Link
                        href="/"
                        className="h-full"
                    >
                        <Logo />
                    </Link>
                </div>
                {/* <ul className="flex items-center">
                    {navItems.map((navItem, index) => (
                        <li key={index}>
                            <NavItem
                                label={navItem.label}
                                route={navItem.route}
                            ></NavItem>
                        </li>
                    ))}
                </ul> */}
            </div>
            <ul className="flex gap-4">
                <li key="spotify">
                    <a href="https://open.spotify.com/show/3sWcPlzlLIZQhjTOnwELpo" target="_blank">
                        <div className="flex gap-2 rounded-xl bg-green-500 w-auto px-3 py-1.5">
                            <SiSpotify size={24}/>
                            Listen on Spotify
                        </div>
                    </a>
                </li>
                <li key="youtube">
                    <a href="https://www.youtube.com/@thepostscriptshow" target="_blank">
                        <div className="text-white flex gap-2 rounded-xl bg-red-500 w-auto px-3 py-1.5">
                            <SiYoutube size={24}/>
                            Watch on YouTube
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}