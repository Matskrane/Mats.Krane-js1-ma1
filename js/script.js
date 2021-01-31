// Question 1

var cat = {
    complain: function() {
    console.log("Meow!") }
};
cat.complain();


// Question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


// Question 3

heading.style.fontSize = "2em";


// Question 4

heading.classList.add("subheading");


// Question 5

var paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
   // console.log(i)  just checking :) 
}


// Question 6

var resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.background = "yellow";


// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function oppgave(list) {
    for(random of list){
        console.log(random.name);
    };
}

oppgave(cats);


// Question 8  // fikk ikke denne til

function createCats(cats) {

}