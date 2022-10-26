import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchCards } from '../../redux/store';

const SearchForm = () => {
	const [search, setSearch] = useState('');
	const dispatch = useDispatch();
	const handleSearch = (e) => {
		e.preventDefault();
		dispatch(searchCards({ search }));
		setSearch('');
	};
	return (
		<form className={styles.searchForm} onSubmit={handleSearch}>
			<TextInput placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
			<Button>
				<span className='fa fa-search' />
			</Button>
		</form>
	);
};

export default SearchForm;
