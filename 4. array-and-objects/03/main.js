var fit ={
    hat :"baseball cap",
    shirt :"Hawaiian shirt",
    pants :"cargo shorts",
    shoes :"flip-flops"
}
penguins.outfit=fit;

var penguinHattype =penguins.outfit.hat;

penguins.outfit["accessory"]="pocket-watch";

penguins.outfit.hat="top-hat";

delete penguins.outfit.pants;

for (let key in penguins.outfit){
    console.log(`${key}:${penguins.outfit[key]}`);
}
