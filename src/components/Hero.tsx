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

            <div className="relative w-full max-w-3xl bg-couleur2 px-8 py-8 text-center">
                <h1 className="text-xl md:text-2xl text-couleur3 mb-6">
                    Imaginer, structurer et développer l'excellence
                </h1>

                <Link
                    to="/"
                    className="mt-6 cursor-pointer rounded-sm bg-couleur1 px-4 py-2 text-sm text-couleur2"
                >
                    Découvrir le groupe
                </Link>
            </div>
        </section>
    );
}