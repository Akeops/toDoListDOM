function Compteur() {
	// Déclare une nouvelle variable d'état, que nous appellerons "compte"
	// Initialise "compte" à 0
	// "setCompte" est une fonction qui est utilisée pour mettre à jour "compte"
	const [compte, setCompte] = useState(0);

	return (
		<div>
			<p>Vous avez cliqué {compte} fois</p>
			<button onClick={() => setCompte(compte + 1)}>Cliquez moi</button>
		</div>
	);
} 
