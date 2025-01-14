import { Logo } from "./logo";
import { ToggleButton } from "./toggle-button";

export const Header = () => {
  return (
    <div className="flex items-center justify-between relative">
      <Logo />
      <ToggleButton />
    </div>
  );
};
