import FoodCard from "./FoodCard";

let foods = [
    "Gnochi",
    "Toasted Sandwich",
    "Tinned Spaguetti",
    "Takoyaki",
    "KFC",
    "Sushi",
    "Bananas"
];


export default function FoodList() {
    return(
        <section>
            {foods.map((food, index) => {
                return <FoodCard key={index} foodName={food}/>
            })}
        </section>
    )
}