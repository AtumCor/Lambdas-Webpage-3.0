import Image from "next/image";

type ContactCardProps = {
  role: string;
  name: string;
  email: string;
  image: string;
};

export default function ContactCard({ role, name, email, image }: ContactCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-full object-cover"
      />
      <div>
        <p className="font-medium">{role}</p>
        <p className="text-gray-700 dark:text-gray-300">{name}</p>
        <a
          href={`mailto:${email}`}
          className="text-blue-600 hover:underline"
        >
          {email}
        </a>
      </div>
    </div>
  );
}
