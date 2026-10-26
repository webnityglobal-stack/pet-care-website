
import { ArrowUpRight } from 'lucide-react'

export default function ServiceCard({
  title,
  description,
  image,
  href = '/services',
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#EAE5DB] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden bg-[#F1E9DC]">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-[#292D28]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#77776F]">
          {description}
        </p>

        <a
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#536B55] hover:text-[#405642]"
        >
          Explore service
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  )
}
