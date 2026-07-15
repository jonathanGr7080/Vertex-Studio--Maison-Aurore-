type ImagePlaceholderProps = {
  /** Description de la photo attendue — sert aussi de texte accessible. */
  label: string;
  aspect?: string;
  className?: string;
};

/**
 * Emplacement d'image explicite, à remplacer au Sprint 2 par <Image> de next/image.
 * Volontairement sombre et texturé pour tenir visuellement sans la photo finale.
 */
export function ImagePlaceholder({
  label,
  aspect = "aspect-[4/5]",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <figure className={`relative ${aspect} w-full overflow-hidden bg-nuit-2 ${className}`}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(110% 85% at 20% 100%, rgba(185,146,91,0.28) 0%, rgba(185,146,91,0.07) 45%, transparent 70%), radial-gradient(90% 70% at 85% 0%, rgba(90,106,88,0.18), transparent 60%)",
        }}
      />
      {/* Repères de cadrage : signalent sans ambiguïté qu'il s'agit d'un gabarit. */}
      <div aria-hidden className="absolute inset-3 border border-ivoire/15" />
      <figcaption className="absolute inset-x-3 bottom-3 border-t border-ivoire/15 bg-nuit/60 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-pierre">
        Photo à venir — {label}
      </figcaption>
    </figure>
  );
}
