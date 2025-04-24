import Link from "next/link";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";

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

const actionItems = [
    {
        label: 'Search',
        route: '/'
    },
    {
        label: 'Watch on YouTube',
        route: '/'
    },
    {
        label: 'Listen on Spotify',
        route: '/'
    },
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
                    {navItems.map((navItem) => (
                        <li>
                            <NavItem
                                label={navItem.label}
                                route={navItem.route}
                            ></NavItem>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center">
                <ul className="flex items-center">
                    {actionItems.map((actionItem, index) => (
                        <li key={index} >
                            <NavItem
                                label={actionItem.label}
                                route={actionItem.route}
                            ></NavItem>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}