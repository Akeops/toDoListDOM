import Head from "next/head";
import Compteur from "../components/Compteur"; // Assurez-vous que le chemin d'accès est correct

export default function Home() {
	return (
		<div>
			<Head>
				<title>Accueil</title>
			</Head>
			<Compteur />
		</div>
	);
}


