import Link from "next/link";

export interface NavItemDetails {
    label: string;
    route: string;
}

export function NavItem({ label, route }: NavItemDetails) {
    return (
        <Link href={route} className="h-full mx-2 p-2">
            {label}
        </Link>
    )
}