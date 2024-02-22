import {
	addTache,
	getDate,
	deleteTache,
	displayErrorMessage,
	getTasks,
	clearTasks
} from "./modele/modele.js";

getTasks();

document.querySelector("#formulaire").addEventListener("submit", (event) => {
	document.querySelector("#errorname").textContent = "";
	event.preventDefault();
	if (
		!document.querySelector("#importance").value ||
		!document.querySelector("#tache").value
	) {
		displayErrorMessage();
	} else {
		const valeurInputImportance = document.querySelector("#importance").value;
		const valeurInputTache = document.querySelector("#tache").value;
		const valeurInputDate = getDate();
		addTache(valeurInputImportance, valeurInputTache, valeurInputDate);

		document.querySelector("#tache").value = "";
		document.querySelector("#importance").value = "";	
	}
});

document.addEventListener("click", (event) => {
	if (event.target && event.target.id === "btnDelete") {
		deleteTache(event);
	}
});

document.querySelector("#clear").addEventListener("click", () => {
	clearTasks();
	getTasks();
})
