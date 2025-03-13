import Link from "next/link";

interface TopMenuItemProps {
  label: string;
  href: string;
}

const TopMenuItem: React.FC<TopMenuItemProps> = ({ label, href }) => {
  return (
    <Link href={href} className="px-4 py-2 text-white hover:bg-gray-700">
      {label}
    </Link>
  );
};

export default TopMenuItem;