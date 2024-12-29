import { Link, Navbar, NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";

function Navigation() {
    const menuItems = [
        "My Groups",
        "Logout"
    ];

    return (
        <div className="Navbar__Container">
            <Navbar>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label="Open menu"
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <p className="font-bold text-inherit">ACME</p>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                            index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
                </NavbarMenu>
            </Navbar>
        </div>
    )
}

export default Navigation;