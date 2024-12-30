import { Navigation } from "@/components/navigation";
import { navItems } from "@/lib/constants";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SiteLayout = ({ children }: Props) => {
  return (
    <>
      <Navigation navItems={navItems} />
      {children}
      <footer className=" py-4 text-center text-sm text-muted-foreground">
        © 2023 Saharat Vithchataya. All rights reserved.
      </footer>
    </>
  );
};

export default SiteLayout;
