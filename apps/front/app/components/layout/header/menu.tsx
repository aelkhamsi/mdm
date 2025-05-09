"use client"

import { forwardRef, useEffect, useState } from "react"
import Link from 'next/link'
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

export const Menu = () => {
  const { isMobile, isTablet} = useMediaQuery();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(isMobile || isTablet ? false : true)
  }, [isMobile, isTablet])

  const template = (
    <NavigationMenu>
      <NavigationMenuList className={(isMobile || isTablet) ? 'flex flex-col space-y-4' : ''}>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm mr-6">Compétitions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[270px] p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              <Link href="/math-sprint" onClick={() => {setShowMenu(false)}}>
                <ListItem title="Math Sprint">
                  La compétition de math pour les collégiens et lycéens
                </ListItem>
              </Link>
              
              <Link href="/best-math-video" onClick={() => {setShowMenu(false)}}>
                <ListItem title="Best Math Video">
                  Partagez votre passion au grand public
                </ListItem>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm mr-6">Activités</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              <Link href="/stands" onClick={() => {setShowMenu(false)}}>
                <ListItem title="Stands">
                  Rencontrez des gens passionnés de mathématiques
                </ListItem>
              </Link>
              
              <Link href="/conferences" onClick={() => {setShowMenu(false)}}>
                <ListItem title="Conférences">
                  Découvrez ce que les experts ont à vous offrir
                </ListItem>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link 
            className="text-sm font-medium mr-6 hover:cursor-pointer hover:underline"
            href="/planning"
            onClick={() => {setShowMenu(false)}}
          >
            Planning
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link 
            className="text-sm font-medium mr-6 hover:cursor-pointer hover:underline"
            href="/organizing-team"
            onClick={() => {setShowMenu(false)}}
          >
            Equipe organisatrice
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link 
            className="text-sm font-medium mr-6 hover:cursor-pointer hover:underline" 
            href="/partners"
            onClick={() => {setShowMenu(false)}}
          >
            Partenaires
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link 
            className="text-sm font-medium mr-6 hover:cursor-pointer hover:underline" 
            href="/faq"
            onClick={() => {setShowMenu(false)}}
          >
            FAQ
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )

  return (
    <>
      {(isMobile || isTablet) && <HamburgerMenuIcon className="h-6 w-6 mr-4 mt-[.1rem] hover:cursor-pointer" onClick={() => {setShowMenu(!showMenu)}}/>}

      <div 
        className={(isMobile || isTablet) 
          ? `absolute min-h-screen w-full top-14 left-0 bg-white p-4 ${!showMenu ? 'hidden' : ''} transition-all text-center`
          : ''
        }
      >
        {(isMobile || isTablet) && (
          <div className="flex justify-between hover:cursor-pointer">
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
