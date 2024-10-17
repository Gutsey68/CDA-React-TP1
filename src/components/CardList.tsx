import Card from './ui/Card';

function CardList() {
    return (
        <div className="flex items-center justify-center flex-wrap max-w-[1600px] m-auto gap-4 my-20">
            <Card
                nom="Maxime Faubert"
                texte="Développeur Front-end passionné par les interfaces élégantes et réactives."
                source="https://i.pravatar.cc/300?img=11"
            />
            <Card
                nom="Maxime Faubert"
                texte="Développeur Front-end passionné par les interfaces élégantes et réactives."
                source="https://i.pravatar.cc/300?img=10"
            />
            <Card
                nom="Maxime Faubert"
                texte="Développeur Front-end passionné par les interfaces élégantes et réactives."
                source="https://i.pravatar.cc/300?img=32"
            />
            <Card
                nom="Maxime Faubert"
                texte="Développeur Front-end passionné par les interfaces élégantes et réactives."
                source="https://i.pravatar.cc/300?img=7"
            />
        </div>
    );
}
export default CardList;
