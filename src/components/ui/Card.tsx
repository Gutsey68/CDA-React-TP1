import Button from './Button';

type cardProps = {
    nom: string;
    texte: string;
    source: string;
};

function Card({ nom, texte, source }: cardProps) {
    return (
        <section className="bg-white max-w-md shadow-xl rounded-2xl pb-4 hover:translate-x-0 hover:-translate-y-4 transition transition-colors">
            <img className="object-cover w-full h-72 rounded-t-2xl" src={source} alt={nom} />
            <div className="flex items-center flex-col text-center gap-4 mt-4 px-4">
                <h3 className="text-2xl font-bold">{nom}</h3>
                <p>{texte}</p>
                <Button text="En savoir plus" />
            </div>
        </section>
    );
}
export default Card;
