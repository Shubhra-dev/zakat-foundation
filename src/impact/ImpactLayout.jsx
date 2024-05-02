import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";

import MenuItem from "../calculate/MenuItem";
import { PiFlowerBold } from "react-icons/pi";
import { GiRecycle } from "react-icons/gi";
import { TbSunLow } from "react-icons/tb";
import { LuHeartHandshake } from "react-icons/lu";

function ImpactLayout({ children, tab }) {
  return (
    <EqualHeightFlexContainer>
      <div className="w-1/6 bg-slate-100 px-10 pt-8 h-full flex-grow">
        <MenuItem text={"Your Impact"} active={tab === 1} link={"your_impact"}>
          <LuHeartHandshake
            className={`text-2xl ${
              tab === 1 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem text={"Impact Stories"} active={tab === 2}>
          <PiFlowerBold
            className={`text-2xl ${
              tab === 2 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem text={"How You Help"} active={tab === 3}>
          <GiRecycle
            className={`text-3xl ${
              tab === 3 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem text={"The Need"} active={tab === 4}>
          <TbSunLow
            className={`text-3xl ${
              tab === 4 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
      </div>
      <div className="w-5/6 flex-grow">{children}</div>
    </EqualHeightFlexContainer>
  );
}

export default ImpactLayout;