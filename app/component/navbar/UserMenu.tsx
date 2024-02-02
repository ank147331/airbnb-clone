"use client";

import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import useRentModal from "@/app/hooks/useRentModal";

interface UserMenuProps{
  currentUser?: User| null
}

const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {
  const loginModal = useLoginModal();
  const registerModal=useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(()=>{
    if(!currentUser){
      return loginModal.onOpen();
    }
    //open rent modal
    rentModal.onOpen();
  
  },[currentUser, loginModal])


  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className=" hidden 
            md:block 
            text-sm 
            font-semibold 
            py-3 px-4 
            rounded-full
          hover:bg-neutral-100 
            transition 
            cursor-pointer "
        >
          Airbnb Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 
            md:py-1 
            md:px-2 
            border-[1px] 
            border-neutral-200 
            flex 
            flex-row 
            items-center
            gap-3 
            rounded-full 
            cursor-pointer 
            hover:shadow-md 
            transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md 
            w-[40vw] 
            md:w-3/4 
          bg-white 
            overflow-hidden
            right-0 
            top-12 
            text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            
            {currentUser ? (
              <>
              <MenuItem onclick={()=>{}} label="My Trips" />

              <MenuItem onclick={()=>{}} label="My Favourite" />

              <MenuItem onclick={()=>{}} label="My Reservation" />

            <MenuItem onclick={()=>{}} label="My Properties" />

            <MenuItem onclick={rentModal.onOpen} label="Airbnb Your Home" />

            <hr/>
            
            <MenuItem onclick={()=>signOut()} label="Sign Out" />

              </>
            ):(
              <>
              <MenuItem onclick={loginModal.onOpen} label="LogIn" />

              <MenuItem onclick={registerModal.onOpen} label="Sign Up" />
              </>
            )}


            
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
