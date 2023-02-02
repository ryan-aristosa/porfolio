import About from 'components/landing/About';
import Experience from 'components/landing/Experience';
import Home from 'components/landing/Home';
import Project from 'components/landing/Project';

// Project
const PROJECT_OBJ = [
	[
		'ryan-aristosa.github.io',
		'Portfolio made in React',
		'Solely developed the web page',
		[
			['React', 'color-react', 'c-dcb'],
			['Bootstrap', 'color-bootstrap', 'c-eb'],
			['Sass', 'color-sass', 'c-eb']
		],
		'https://github.com/ryan-aristosa/ryan-aristosa.github.io'
	],
	[
		'books-and-authors',
		'Spring boot CRUD application for books and authors',
		'Spearheaded the development of the application',
		[
			['Java', 'color-java', 'c-eb'],
			['Spring Boot', 'color-spring-boot', 'c-eb'],
			['Hibernate', 'color-hibernate', 'c-eb']
		],
		'https://github.com/ryan-aristosa/books-and-authors'
	],
	[
		'skills-and-employees',
		'Spring boot application for skills and employees with authorization and actuator',
		'Led the development of the application',
		[
			['Java', 'color-java', 'c-eb'],
			['Spring Boot', 'color-spring-boot', 'c-eb'],
			['Hibernate', 'color-hibernate', 'c-eb']
		],
		'https://github.com/ryan-aristosa/skills-and-employees'
	],
	[
		'billing',
		'Final Exam in Bootcamp',
		'Led the development of the application',
		[
			['Java', 'color-java', 'c-eb'],
			['Spring Boot', 'color-spring-boot', 'c-eb'],
			['Hibernate', 'color-hibernate', 'c-eb']
		],
		'https://github.com/ryan-aristosa/billing'
	],
	[
		'6Keeper',
		'Password Security Application using 6KED (6Keeper Encryption/Decryption) System',
		'Spearheaded the development; Helped in UI/UX; Solely developed the back-end',
		[
			['Kotlin', 'color-kotlin', 'c-eb'],
			['Android Studio', 'color-android-studio', 'c-dcb'],
			['Firebase', 'color-firebase', 'c-dcb']
		],
		'https://github.com/rynrsts/6Keeper'
	]
]

function Content(props) {
	return (
		<div className='content' style={{ paddingTop: '64px' }}>
			<Home home={props.home} />
			<About about={props.about} />
			<Experience experience={props.experience} />
			<Project projectObj={PROJECT_OBJ} />
		</div>
	);
}

export default Content;
