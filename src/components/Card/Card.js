import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../redux/store';
import { clsx } from 'clsx';

const Card = (props) => {
	const dispatch = useDispatch();
	const { cardId, isFavorite } = props;
	console.log(isFavorite);
	const handleClick = (e) => {
		e.preventDefault();
		dispatch(addFavorite(cardId.toString()));
	};
	return (
		<li className={styles.card}>
			{props.title}
			<i
				onClick={handleClick}
				className={clsx(styles.button, ['fa-regular'], ['fa-star-o'], isFavorite && styles.fav)}></i>
		</li>
	);
};

export default Card;

// 	return (
// 		<form
// 			className={styles.columnForm}
// 			onSubmit={handleSubmit}>
// 			<label className={styles.label}>Title:</label>
// 			<TextInput
// 				value={title}
// 				onChange={(e) => setTitle(e.target.value)}
// 			/>
// 			<label className={styles.label}>Icon:</label>
// 			<TextInput
// 				value={icon}
// 				onChange={(e) => setIcon(e.target.value)}
// 			/>
// 			<Button>Add column</Button>
// 		</form>
// 	);
// };
