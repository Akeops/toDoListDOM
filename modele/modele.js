const ulList = document.querySelector("#ulList");


export function getDate() {
	const date = new Date();
	const dateNow = date.toDateString();
	return dateNow;
}

export function addTache(valeurInputImportance, valeurInputTache, valeurDate) {	
	const li = document.createElement("li");
	const paragraphes = [document.createElement("span")];
	paragraphes[0].textContent = `${valeurInputImportance} | ${valeurInputTache} | ${valeurDate}`;
	const storedParagraphs = localStorage.getItem("paragraphes");

	let paragraphesArray = [];

	if (storedParagraphs) {
		paragraphesArray = JSON.parse(storedParagraphs);
	}

	paragraphesArray.push(paragraphes[0].textContent);
	localStorage.setItem(
		"paragraphes",
		JSON.stringify(paragraphesArray));
	
	paragraphes.forEach((paragraphe) => {
		li.append(paragraphe);
		ulList.appendChild(li);
		addDeleteButton(li);
	});
	
}

export function deleteTache(event) {
	const id = event.target.parentElement.getAttribute("data-id"); // Récupérer l'identifiant de l'élément
	event.target.parentElement.remove();
	localStorage.removeItem(id); // Supprimer l'élément correspondant dans le localStorage
}

export function displayErrorMessage() {
	document.querySelector("#errorname").textContent =
		"Veuillez remplir tous les champs";
	setTimeout(() => {
		document.querySelector("#errorname").textContent = "";
	}, 5000);
}

export function getTasks() {
	try {
		if (localStorage.getItem("paragraphes")) {
			let tasks = JSON.parse(localStorage.getItem("paragraphes"));
			tasks.forEach((task, index) => {
				const li = document.createElement("li");
				li.textContent = `${index} | ${task}`
				ulList.append(li);
				addDeleteButton(li);
			})
	}
	} catch (err) {
		throw new Error(err)
	}
}

function addDeleteButton(li) {
	const btnDelete = document.createElement("button");
	btnDelete.id = "btnDelete";
	btnDelete.textContent = "Supprimer";
	li.append(btnDelete);
}

export function clearTasks() {
	localStorage.removeItem("paragraphes");
	getTasks();
}