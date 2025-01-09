import React, { useState } from 'react';

export default function Portfolio() {
    const [projects] = useState([
        {name: 'Willard Marine Database', description: 'Searchable Database to access and manage product data', tech: 'MongoDB, Node.js, React, Express, and Boostrap', link: 'https://github.com/Taylor-Brandon/Willard-Marine-Database'},
        {name: 'Readme Generator', description: 'Generates a README file based on user input', tech: 'Node.js', link: 'https://github.com/Taylor-Brandon/ReadmeFile-Generator'},
        {name: 'E-Commerce', description: 'Online shop that utilizes a RESTful API and also allows products to be purchased', tech: 'React, Node.js, SQL, and Express', link: 'https://github.com/Taylor-Brandon/E-Commerce-Refactor'},
        {name: 'Employee Database', description: 'Database that allows access and management to employee information', tech: 'MySQL and Object Relational Mapping', link: 'https://github.com/Taylor-Brandon/Employee-Database'},
        {name: 'Project Planner', description: 'Agenda that allows users to organize their day and save their information', tech: 'React, Third Party Api, Bulma, and Local Storage', link: 'https://taylor-brandon.github.io/Project-Planner-Refactor/'},
        {name: 'Blog Website', description: 'Blog application that allows user to publish their programming thoughts', tech: 'Model, View, Controler Organization, SQL, Express, Node.js, and Handlebars', link: 'https://mysterious-woodland-92307-fc6df31f4737.herokuapp.com/'},
        {name: 'Text Editor Application', description: 'Progressive Web Application that serves are a text editor that is downloadable and works offline', tech: 'Express, Webpack, HTML Webpack Plugins, CSS Extract Plugins, Inject Manifest, Webpack Manifest, Babel-Loader', link: 'https://text-editor-app-74b27f1d557f.herokuapp.com/'},
        {name: 'Weather App', description: 'This is a React application that allows users to receive current and future weather conditions for a searched city', tech: 'React, Bulma, Local Storage, Dotenv, OpenWeatherMap API, Google Fonts', link: 'https://taylor-brandon.github.io/Weather-App-Refactor/' }
    ]);
    console.log(projects);

    return (
        <div className='projects'>
            <h1 id='projectArea-header'>Projects</h1>
            <ul className='project-list'>
            {projects.map((project, index) => (
                <li className='project-items' key={index}>
                    <a className='project-links' href={project.link}>
                    <div className='card'>
                        <div className='card-header bg-black text-white'>
                        <h3 className='card-text'>{project.name}</h3>
                        </div>
                        <div className='card-body'>
                            <p>{project.description}</p>
                        </div>
                        <div id='card-footer' className='card-footer bg-white'>
                            <p>{project.tech}</p>
                        </div>
                    </div>
                    </a>
                </li>
            )) 
}
</ul>
    </div>
    );
}
