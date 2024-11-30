'use client'
import { useState } from "react"
import { Navbar, NavbarBrand, NavbarMenuToggle,NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from "@nextui-org/react"
import Link from "next/link"

export default function Nav(){
    const [isMenuOpen, setIsMenuOpen ] = useState(false);

    const menuItems = [
        "profile",
        "dashboard",
        "user",
        "logout"
    ];

    return(
       <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
       >

            {/* START MOBILE */}
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen? "Close menu":" Open Menu"}/>
            </NavbarContent>
            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">My app</p>
                </NavbarBrand>
            </NavbarContent>
            {/* END MOBILE */}


            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">My app</p>
                </NavbarBrand>

                <NavbarItem>
                    <Link href="/profile">
                        Profile
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="/dashboard">
                        Dashboard
                    </Link>
                </NavbarItem>
               
                <NavbarItem>
                    <Link href="/user">
                        User
                    </Link>
                </NavbarItem>
            </NavbarContent>
            
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="warning" href="/signup" variant="flat">
                        Sign up
                    </Button>
                </NavbarItem>
            </NavbarContent>


            {/* MOBILE MENU */}
            <NavbarMenu>
                { menuItems.map((item,index)=>(
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link 
                            className="w-full"
                            href={`/${item}`}
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
       </Navbar>
    )
}