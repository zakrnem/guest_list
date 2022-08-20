const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';


// loop starts here

for (i = people.length-1 ; i >= 0; i--) {
    if (people[i] === "Phil" || people[i] === "Lola") {
        refused.textContent += people[i] + ", ";
    }
    else {
        admitted.textContent += people[i] + ", ";
    }
}
// refused.textContent += ;
// admitted.textContent += ;
