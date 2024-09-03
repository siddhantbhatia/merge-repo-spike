import { ThemeToggleSwitch } from "app/components/theme-toggle-switch";

interface HeaderProps {
  title: {
    text?: string;
    logoUrl?: string;
    href?: string;
  };
}

export const Header = (props: HeaderProps) => {
  const {
    title: { text },
  } = props;

  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="text-2xl font-bold">{text}</div>
      <ThemeToggleSwitch />
    </header>
  );
};
