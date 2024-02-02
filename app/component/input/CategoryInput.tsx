'use client'

import React from 'react'
import { IconType } from 'react-icons'

interface CategoryInputProps{
    icon:IconType;
    label:string;
    selected:boolean;
    onClick:(value:string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    icon: Icon,
    label,
    selected,
    onClick
}) => {
  return (
    <div>
        onclick
      
    </div>
  )
}

export default CategoryInput
