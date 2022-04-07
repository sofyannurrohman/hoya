import classnames from "classnames";

export default function Button({ href, className, variant, children, pill }) {
  const variants = {
    "outline-yellow": `border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500`,
    "outline-white": `border border-white text-white hover:text-black hover:bg-white`,
    yellow: "bg-yellow-500 hover:bg-yellow-600 text-black",
    black: "bg-black hover:bg-opacity-90 text-white",
    blue: "bg-blue-700 hover:bg-opacity-90 text-white",
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href={href}
      className={classnames(
        "transition py-3 px-10 font-semibold text-lg inline-block",
        pill && "rounded-full",
        pickedVariant,
        className
      )}
    >
      {children}
    </a>
  );
}
