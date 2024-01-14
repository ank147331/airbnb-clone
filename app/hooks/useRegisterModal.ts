import { create } from "zustand";

interface RegiserModalStore{
    isOpen:boolean;
    onOpen:()=> void;
    onClose:()=> void;
}

const useRegisterModal = create<RegiserModalStore>((set)=>({
    isOpen:false,
    onOpen:()=> set({isOpen: true}),
    onClose:()=> set({isOpen: false}),
}))

export default useRegisterModal;