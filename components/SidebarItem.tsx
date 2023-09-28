import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  href: string | "/";
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href }) => {
  return <div>{label}</div>;
};

export default SidebarItem;
