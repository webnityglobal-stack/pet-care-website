
export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8A755B]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#292D28] sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-sm leading-7 text-[#77776F] sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
