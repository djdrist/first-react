import Container from '../Container/Container';
import styles from './NavBar.module.scss';

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
								<a href='/'>Home</a>
							</li>
							<li>
								<a href='/favorite'>Favorite</a>
							</li>
							<li>
								<a href='/about'>About</a>
							</li>
						</ul>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default NavBar;
