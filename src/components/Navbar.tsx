import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { i18n } = useTranslation();

  const menuItems = [
    { name: "Features", path: "/" }, // directing to home for demo
    { name: "Developers", path: "#" },
    { name: "Company", path: "#" },
    { name: "Blog", path: "#" },
    { name: "Changelog", path: "#" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Navbar
      className="bg-background/70 backdrop-blur-md border-b border-white/10"
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="flex items-center" to="/">
            <img
              alt="MacSoft Logo"
              className="h-8 w-auto object-contain" 
              src="/logo.svg"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={isActive(item.path)}>
            <Link
              className={`text-sm ${isActive(item.path) ? "text-primary font-semibold" : "text-gray-400 hover:text-white transition-colors"}`}
              to={item.path}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-blue-900/30 text-blue-200 border border-blue-500/30 font-medium"
            color="primary"
            to="/book-demo"
            variant="flat"
          >
            Join waitlist
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="bg-transparent text-blue-200 border border-blue-500/30 font-medium hover:bg-blue-900/20"
            variant="flat"
            onClick={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
          >
            {i18n.language === 'ar' ? 'ع' : 'EN'}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="dark bg-background pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-xl text-white py-2 block"
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
