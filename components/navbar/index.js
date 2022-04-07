import NavItem from "../NavItem";
import classnames from "classnames";

export default function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6",
  };

  const pickedDir = dirs[dir];

  return (
    <ul className={classnames("flex", pickedDir)}>
      <NavItem scheme={scheme} href="#home">
        Home
      </NavItem>
      <NavItem scheme={scheme} href="#detail">
        Tentang VIP
      </NavItem>
      <NavItem scheme={scheme} href="#survey">
        Pengujian
      </NavItem>
    </ul>
  );
}
