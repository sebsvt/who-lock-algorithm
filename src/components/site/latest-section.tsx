import Link from "next/link";

interface Item {
  title: string;
  date: string;
}

interface LatestSectionProps {
  title: string;
  items: Item[];
}

export default function LatestSection({ title, items }: LatestSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="border-b pb-4 last:border-b-0">
            <Link href="#" className="group">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.date}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          href="#"
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          View all {title.toLowerCase()} →
        </Link>
      </div>
    </section>
  );
}
