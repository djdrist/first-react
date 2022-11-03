import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {
	const favorites = useSelector((state) => getFavoriteCards(state));
	if (favorites.length === 0) return <PageTitle>No cards..</PageTitle>;
	return (
		<div className={styles.fav}>
			<PageTitle>Favorite</PageTitle>
			<article className={styles.column}>
				<ul className={styles.cards}>
					{favorites.map((card) => (
						<Card
							key={card.id}
							cardId={card.id}
							title={card.title}
							isFavorite={card.isFavorite}
						/>
					))}
				</ul>
			</article>
		</div>
	);
};

export default Favorite;
