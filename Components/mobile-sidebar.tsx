"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Sidebar from "@/Components/Sidebar";
import { Menu } from "lucide-react";
import {
   Sheet, 
  SheetTrigger,
   SheetContent 
  } 
  from "./ui/sheet";

const Mobilesidebar = () => {
  const [ismounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!ismounted) {
    return null;
  }
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  )
};

export default Mobilesidebar;
