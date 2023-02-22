import { useMealsListContext } from "../provider/MealsProvider";

const Mealslist = () =>{
    const { meals } = useMealsListContext();
    
    return (
        <div>
            <h1>Meals List using context Api</h1>
                {meals.map((meal, index) => ( 
                <h2 key={index}> 
                    {meal} 
                </h2>
                ))}
        </div>
    )
}


export default Mealslist