type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionTitleProps) {
  const centered = align === "center";
  const isDark = tone === "dark";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`mb-3 text-xs font-extrabold uppercase tracking-[0.2em] ${
          isDark ? "text-[#fb923c]" : "text-[#f97316]"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold tracking-normal text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 ${isDark ? "text-zinc-200" : "text-zinc-300"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
