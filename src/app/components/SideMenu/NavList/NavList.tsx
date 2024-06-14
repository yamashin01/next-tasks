import { FaRegCheckSquare, FaRegClock, FaTasks } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const NavList: NavItemType[] = [
    { id: 1, label: "All Tasks", link: "/", icon: <FaTasks /> },
    {
      id: 2,
      label: "Completed Tasks",
      link: "/completed",
      icon: <FaRegCheckSquare />,
    },
    { id: 3, label: "Expired Tasks", link: "/expired", icon: <FaRegClock /> },
  ];
  return (
    <div className="mt-24">
      {NavList.map((item) => (
        <NavItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default NavList;
