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
        <nav className="h-24 flex items-center justify-between p-2">
            <div className="h-full flex items-center">
                <div className="h-full mx-6">
                    <Link
                        href="/"
                        className="h-full"
                    >
                        <Logo />
                    </Link>
                </div>
                <ul className="flex items-center">
                    {navItems.map((navItem, index) => (
                        <li key={index}>
                            <NavItem
                                label={navItem.label}
                                route={navItem.route}
                            ></NavItem>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center mr-6">
                <ul className="flex items-center gap-4">
                    <li key="spotify">
                        <a href="https://open.spotify.com/show/3sWcPlzlLIZQhjTOnwELpo" target="_blank">
                            <SiSpotify size={24} className="text-green-500"/>
                        </a>
                    </li>
                    <li key="youtube">
                        <a href="https://www.youtube.com/@thepostscriptshow" target="_blank">
                            <SiYoutube size={24} className="text-red-500" />
                        </a>
                    </li>
                    <li key="apple-podcasts">
                        <a href="https://podcasts.apple.com/us/podcast/the-postscript-show/id1478792983" target="_blank">
                            <SiApplepodcasts size={24} className="text-purple-500" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}