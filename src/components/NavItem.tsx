type NavItemProps = {
  id: string;
  label: string;
  activeSection: string;
};

export default function NavItem({ id, label, activeSection }: NavItemProps) {
  const isActive = activeSection === id;

  return (
    <li>
      <a
        href={`#${id}`}
        className="flex items-center justify-end gap-2 text-sm py-3 group"
      >
        <p
          className={`font-bold uppercase ${
            isActive
              ? "text-white"
              : "text-white/50 group-hover:text-white"
          }`}
        >
          {label}
        </p>

        <span
          className={`mr-4 h-px transition-all ${
            isActive
              ? "w-16 bg-white"
              : "w-8 bg-white/50 group-hover:w-16 group-hover:bg-white"
          }`}
        />
      </a>
    </li>
  );
}