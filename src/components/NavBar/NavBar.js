import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<Container>
				<div className={styles.nav}>
					<a href='/'>
						<div className={styles.icon}>
							<div className={styles.bar}></div>
							<div className={styles.bar}></div>
							<div className={styles.bar}></div>
						</div>
					</a>
					<div>
						<ul>
							<li>
								<NavLink
									className={({ isActive }) => (isActive ? styles.linkActive : undefined)}
									to='/'>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) => (isActive ? styles.linkActive : undefined)}
									to='/favorite'>
									Favorite
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) => (isActive ? styles.linkActive : undefined)}
									to='/about'>
									About
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default NavBar;
