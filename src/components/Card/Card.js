import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addFavorite, deleteCard } from '../../redux/cardsRedux';
import { clsx } from 'clsx';

const Card = (props) => {
	const dispatch = useDispatch();
	const { cardId, isFavorite } = props;
	const handleFavClick = (e) => {
		e.preventDefault();
		dispatch(addFavorite(cardId.toString()));
	};
	const handleDeleteClick = (e) => {
		e.preventDefault();
		dispatch(deleteCard(cardId.toString()));
	};
	return (
		<li className={styles.card}>
			{props.title}
			<div>
				<i
					onClick={handleFavClick}
					className={clsx(styles.button, ['fa-regular'], ['fa-star-o'], isFavorite && styles.fav)}></i>
				<i
					onClick={handleDeleteClick}
					className={clsx(styles.button, 'fa-regular fa-trash-can')}></i>
			</div>
		</li>
	);
};

export default Card;
