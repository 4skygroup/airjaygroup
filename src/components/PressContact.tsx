import { Mail, Phone } from "lucide-react";

interface PressContactProps {
    image?: string;
    name?: string;
    role?: string;
    email?: string;
    phone?: string;
}

export default function PressContact({
                                         image,
                                         name = "Jean-Benoît Lambert",
                                         role = "Directeur de la Communication",
                                         email = "press@airjaygroup.com",
                                         phone = "+33 1 23 45 67 89",
                                     }: PressContactProps) {
    return (
        <section className="bg-couleur2 px-6 py-12">
            <div className="relative max-w-5xl mx-auto flex items-center justify-center px-6 py-24">
                {image ? (
                    <img
                        src={image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ) : (
                    <div
                        className="absolute inset-0 bg-couleur4"
                        aria-hidden="true"
                    />
                )}

                <div className="relative bg-white text-couleur3 rounded-md w-full max-w-md px-10 py-12 sm:px-20">
                    <h2 className="font-display text-2xl mb-6">Contact Presse</h2>
                    <p className="font-sans text-sm font-semibold mb-4">{name}</p>
                    <p className="font-sans text-sm mb-4">{role}</p>

                    <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-4 font-sans text-sm mb-4"
                    >
                        <Mail className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                        {email}
                    </a>

                    <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-4 font-sans text-sm"
                    >
                        <Phone className="w-5 h-5 shrink-0 fill-current" strokeWidth={1.5} />
                        {phone}
                    </a>
                </div>
            </div>
        </section>
    );
}