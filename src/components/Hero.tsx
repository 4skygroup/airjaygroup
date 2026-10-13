import {Link} from "react-router-dom";

const image = "/hero.png";

export default function Hero() {
    return (
        <section className="relative flex min-h-[calc(100vh-4rem)] items-end justify-center overflow-hidden px-4 pb-0">
            {image && (
                <img
                    src={image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}

            <div className="relative w-full max-w-2xl bg-couleur2 px-8 py-4 text-center">
                <h1 className="mb-6 font-sans text-sm font-normal uppercase text-couleur3">
                    Imaginer, structurer et développer{" "}
                    <span className="font-cormorant text-sm font-normal italic">
                        l'excellence
                    </span>
                </h1>

                <Link
                    to="/"
                    className="cursor-pointer font-sans text-xs font-normal uppercase tracking-wider text-couleur3"
                >
                    Découvrir le groupe
                </Link>
            </div>




        </section>
    );
}