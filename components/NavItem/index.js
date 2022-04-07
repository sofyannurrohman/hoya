import classnames from "classnames";

export default function NavItem({ href, scheme, children }) {
  const schemes = {
    light: "text-white text-opacity-100 hover:text-gray-300",
    dark: "text-black",
  };

  const pickedScheme = schemes[scheme];

  return (
    <li>
      <a
        href={href}
        className={classnames("text-lg transition font-semibold", pickedScheme)}
      >
        {children}
      </a>
    </li>
  );
}
