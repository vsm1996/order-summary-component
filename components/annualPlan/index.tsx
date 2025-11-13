import Image from "next/image";

import MusicIcon from "@/public/images/icon-music.svg";
import Button from "../button";

const AnnualPlan = () => {
  return (
    <div className="flex items-center gap-[38] bg-(--blue-50) p-(--space-200) rounded-[11]">
      <div className="flex items-center gap-(--space-200)">
        <div className="w-(--space-600) h-(--space-600)">
          <Image src={MusicIcon} alt="music icon" />
        </div>
        <div className="text-nowrap">
          <p className="text-(--blue-950) text-4-black">Annual Plan</p>
          <p className="text-4-med">$59.99/year</p>
        </div>
      </div>
      <Button
        label="Change"
        textColor="blue"
        variation="transparent"
        preset="text-4-bold"
      />
    </div>
  );
};

export default AnnualPlan;
