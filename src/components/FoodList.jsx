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
            {foods.map(food => {
                return <p>{food}</p>
            })}
        </section>
    )
}