const ulList = document.querySelector("#ulList");

export function getDate() {
    const date = new Date();
    const dateNow = date.toDateString();
    return dateNow;
}

export function addTache(valeurInputImportance, valeurInputTache, valeurDate) {
    const li = document.createElement("li");
    const paragraphes = document.createElement("span");
    const id = Math.floor(Math.random() * 10000000); // Génération d'un identifiant aléatoire
    paragraphes.textContent = `${valeurInputImportance} | ${valeurInputTache} | ${valeurDate}`;
    const storedParagraphs = localStorage.getItem("paragraphes");

    let paragraphesArray = [];

    if (storedParagraphs) {
        paragraphesArray = JSON.parse(storedParagraphs);
        console.log(JSON.stringify(storedParagraphs));
    }

    paragraphesArray.push({ id: id, content: paragraphes.textContent }); // Stocker l'objet avec l'identifiant unique
    localStorage.setItem("paragraphes", JSON.stringify(paragraphesArray));

    li.setAttribute("data-id", id); // Définir l'identifiant comme attribut data-id
    li.append(paragraphes);
    ulList.appendChild(li);
    addDeleteButton(li);
}

export function deleteTache(event) {
    const id = event.target.parentElement.getAttribute("data-id"); // Récupérer l'identifiant de l'élément
    event.target.parentElement.remove();
    const storedParagraphs = JSON.parse(localStorage.getItem("paragraphes"));
    const updatedParagraphs = storedParagraphs.filter((paragraph) => paragraph.id != id); // Filtrer les paragraphes pour supprimer celui avec l'identifiant correspondant
    localStorage.setItem("paragraphes", JSON.stringify(updatedParagraphs)); // Mettre à jour le local storage

}

export function displayErrorMessage() {
    document.querySelector("#errorname").textContent = "Veuillez remplir tous les champs";
    setTimeout(() => {
        document.querySelector("#errorname").textContent = "";
    }, 5000);
}

export function getTasks() {
    try {
        ulList.innerHTML = ""; // Effacer le contenu actuel de la liste avant d'afficher les tâches
        if (localStorage.getItem("paragraphes")) {
            let tasks = JSON.parse(localStorage.getItem("paragraphes"));
            tasks.forEach((task) => {
                const li = document.createElement("li");
                li.textContent = task.content; // Afficher le contenu de la tâche
                li.setAttribute("data-id", task.id); // Définir l'identifiant comme attribut data-id
                ulList.appendChild(li);
                addDeleteButton(li);
            });
        }
    } catch (err) {
        throw new Error(err);
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
