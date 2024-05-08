"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../../animi/ui/text-reveal-card";
const page = () => {
  return (
    <div>
 <div className="flex max-sm:w-[500px] items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the Code "
    
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription className=" font-bold text-white">
          I agree im not the  best yet but i do the given task with all efforts...so hover ↓
          
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>

    </div>
  )
}

export default page