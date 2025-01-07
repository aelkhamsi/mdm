"use client"

import { forwardRef, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation";
import {
  Cross1Icon,
  HamburgerMenuIcon,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@mdm/ui"
import { cn } from '@mdm/utils'
import { useMediaQuery } from "@mdm/hooks"

export const Menu = ({

}:{

}) => {
  const { isMobile, isTablet} = useMediaQuery();
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  
  const onMenuClick = (href: string) => {
    setShowMenu(false);
    router.push(href);
  }

  useEffect(() => {
    setShowMenu(isMobile || isTablet ? false : true)
  }, [isMobile, isTablet])

  const template = (
    <NavigationMenu>
      <NavigationMenuList className={(isMobile || isTablet) ? 'flex flex-col space-y-4' : ''}>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xs mr-6">Compétitions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[270px] p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              <ListItem href="/math-sprint" title="Math Sprint" onClick={() => {onMenuClick("/math-sprint")}}>
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/best-math-video" title="Best Math Video" onClick={() => {onMenuClick("/best-math-video")}}>
                How to install dependencies and structure your app.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xs mr-6">Activités</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              <ListItem href="/stand" title="Stands" onClick={() => {onMenuClick("/stand")}}>
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/conferences" title="Conférences" onClick={() => {onMenuClick("/conferences")}}>
                How to install dependencies and structure your app.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink 
            className={"text-xs font-medium mr-6 hover:cursor-pointer hover:underline"} 
            onClick={() => {onMenuClick("/organizing-team")}}
          >
            Equipe organisatrice
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className="text-xs font-medium mr-6 hover:cursor-pointer hover:underline" onClick={() => {onMenuClick("/partners")}}>
            Partenaires
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className="text-xs font-medium mr-6 hover:cursor-pointer hover:underline" onClick={() => {onMenuClick("/faq")}}>
            FAQ
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )

  return (
    <>
      {(isMobile || isTablet) && <HamburgerMenuIcon className="h-6 w-6 mr-4 mt-[.1rem]" onClick={() => {setShowMenu(!showMenu)}}/>}

      <div 
        className={(isMobile || isTablet) 
          ? `absolute min-h-screen w-full top-14 left-0 bg-white p-4 ${!showMenu ? 'hidden' : ''} transition-all text-center`
          : ''
        }
      >
        {(isMobile || isTablet) && (
          <div className="flex justify-between">
            <div>{" "}</div>
            <Cross1Icon className="h-6 w-6 mr-4" onClick={() => {setShowMenu(false)}}/>
          </div>
        )}
        
        <div className="flex justify-center">
          {template}
        </div>
      </div>
    </>
  )
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Menu
