import { useState } from "react";
import { SlidersHorizontal, ArrowUpRight } from "lucide-react";

export interface PressRelease {
    id: number;
    date: string;
    tags: string[];
    title: string;
    fileSize: string;
    href: string;
    image?: string;
}

interface PressReleasesProps {
    releases?: PressRelease[];
    itemsPerPage?: number;
    title?: string;
}

const defaultReleases: PressRelease[] = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    date: "02.02.2026",
    tags: i % 2 === 0 ? ["Expansion", "stratégique"] : ["Finance"],
    title: "Acquisition de nouveaux actifs en Asie du Sud-Est",
    fileSize: "PDF - 758 KO",
    href: "#",
}));

export default function PressReleases({
                                          releases = defaultReleases,
                                          itemsPerPage = 4,
                                          title = "Communiqués de Presse",
                                      }: PressReleasesProps) {
    const [page, setPage] = useState(1);
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const allTags = Array.from(new Set(releases.flatMap((r) => r.tags)));

    const filtered =
        selectedTags.length === 0
            ? releases
            : releases.filter((r) => r.tags.some((t) => selectedTags.includes(t)));

    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
    const start = (page - 1) * itemsPerPage;
    const visible = filtered.slice(start, start + itemsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const goTo = (target: number) => {
        if (target >= 1 && target <= totalPages) setPage(target);
    };

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
        setPage(1);
    };

    const resetFilters = () => {
        setSelectedTags([]);
        setPage(1);
    };

    const squareBase =
        "w-6 h-6 flex items-center justify-center border border-couleur3 text-xs cursor-pointer";

    return (
        <section className="bg-couleur2 text-couleur3 px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="font-sans text-sm">{title}</h2>
                    <button
                        type="button"
                        onClick={() => setFiltersOpen((open) => !open)}
                        aria-expanded={filtersOpen}
                        className="flex items-center gap-3 font-sans text-sm cursor-pointer"
                    >
                        Filtres
                        {selectedTags.length > 0 && (
                            <span className="bg-couleur3 text-couleur2 text-xs px-1.5">
                {selectedTags.length}
              </span>
                        )}
                        <SlidersHorizontal className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                </div>

                {filtersOpen && (
                    <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-couleur3">
                        {allTags.map((tag) => {
                            const active = selectedTags.includes(tag);
                            return (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => toggleTag(tag)}
                                    aria-pressed={active}
                                    className={
                                        active
                                            ? "font-sans text-xs border border-couleur3 bg-couleur3 text-couleur2 px-2 py-0.5 cursor-pointer"
                                            : "font-sans text-xs border border-couleur3 px-2 py-0.5 cursor-pointer"
                                    }
                                >
                                    {tag}
                                </button>
                            );
                        })}
                        {selectedTags.length > 0 && (
                            <button
                                type="button"
                                onClick={resetFilters}
                                className="font-sans text-xs text-couleur1 underline ml-2 cursor-pointer"
                            >
                                Réinitialiser
                            </button>
                        )}
                    </div>
                )}

                {visible.length === 0 ? (
                    <p className="font-sans text-sm text-couleur1">
                        Aucun communiqué ne correspond à ces filtres.
                    </p>
                ) : (
                    <ul className="flex flex-col gap-6">
                        {visible.map((release) => (
                            <li
                                key={release.id}
                                className="flex flex-col sm:flex-row sm:items-center gap-6"
                            >
                                {release.image ? (
                                    <img
                                        src={release.image}
                                        alt={release.title}
                                        className="w-full sm:w-28 h-40 sm:h-20 object-cover shrink-0"
                                    />
                                ) : (
                                    <div
                                        className="w-full sm:w-28 h-40 sm:h-20 bg-couleur4 shrink-0"
                                        aria-hidden="true"
                                    />
                                )}

                                <div className="flex-1 sm:ml-20">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <span className="font-sans text-xs">{release.date}</span>
                                        {release.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="font-sans text-xs border border-couleur3 px-2 py-0.5"
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                    <h3 className="font-sans text-sm max-w-xs mb-2">
                                        {release.title}
                                    </h3>
                                    <p className="font-sans text-xs text-couleur1">
                                        {release.fileSize}
                                    </p>
                                </div>

                                <a
                                    href={release.href}
                                    className="flex items-center justify-between gap-4 self-start sm:self-center font-sans text-sm border-b border-couleur3 pb-0.5"
                                >
                                    Visualiser
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

                {filtered.length > 0 && (
                    <nav
                        className="flex items-center justify-center gap-3 mt-10"
                        aria-label="Pagination"
                    >
                        <button
                            type="button"
                            onClick={() => goTo(page - 1)}
                            disabled={page === 1}
                            className={`${squareBase} disabled:opacity-40 disabled:cursor-default`}
                            aria-label="Page précédente"
                        >
                            &lt;
                        </button>

                        {pages.map((n) => (
                            <button
                                key={n}
                                type="button"
                                onClick={() => goTo(n)}
                                aria-current={n === page ? "page" : undefined}
                                className={
                                    n === page
                                        ? `${squareBase} bg-couleur3 text-couleur2`
                                        : squareBase
                                }
                            >
                                {n}
                            </button>
                        ))}

                        <button
                            type="button"
                            onClick={() => goTo(page + 1)}
                            disabled={page === totalPages}
                            className={`${squareBase} disabled:opacity-40 disabled:cursor-default`}
                            aria-label="Page suivante"
                        >
                            &gt;
                        </button>
                    </nav>
                )}
            </div>
        </section>
    );
}