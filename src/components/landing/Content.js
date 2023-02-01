import About from 'components/landing/About';
import Experience from 'components/landing/Experience';
import Home from 'components/landing/Home';
import Project from 'components/landing/Project';
import 'styles/landing/Content.scss';

// Experience
const TIMELINE_OBJ = [
	[
		'October 2022 - Present',
		['Jr. Software Engineer', 'Cognizant Softvision'],
		[
			['Java', 'color-java', 'c-eb'],
			['Spring Boot', 'color-spring-boot', 'c-eb'],
			['Hibernate', 'color-hibernate', 'c-eb'],
			['Docker', 'color-docker', 'c-eb'],
			['PostgreSQL', 'color-postgresql', 'c-eb'],
			['React', 'color-react', 'c-dcb'],
			['Bootstrap', 'color-bootstrap', 'c-eb']
		]
	],
	[
		'2018 - August 2022 (College)',
		[
			'Bachelor of Science in Information Technology',
			'STI College Pasay-EDSA',
			'Magna Cum Laude'
		],
		[
			['Java', 'color-java', 'c-eb'],
			['Javascript', 'color-javascript', 'c-dcb'],
			['HTML', 'color-html', 'c-eb'],
			['CSS', 'color-css', 'c-eb'],
			['C#', 'color-c-sharp', 'c-eb'],
			['Kotlin', 'color-kotlin', 'c-eb'],
			['Bootstrap', 'color-bootstrap', 'c-eb'],
			['PHP', 'color-php', 'c-eb'],
			['Python', 'color-python', 'c-dcb']
		]
	]
];

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
		<div className='content'>
			<Home home={props.home} />
			<About about={props.about} />
			<Experience experience={props.experience} />
			<Project projectObj={PROJECT_OBJ} />
		</div>
	);
}

export default Content;
