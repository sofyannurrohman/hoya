export default function SectionTitle({ left, children }) {
  return (
    <h2
      className={`text-2xl text-blue-700  font-semibold font-mono${
        !left ? " text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}
