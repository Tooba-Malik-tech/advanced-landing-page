import React from 'react';

const Projects = () => {
    return (
        <div className="projects">
            <h2>Projects Showcase</h2>
            <div className="project-list">
                {/* Example Project Item */}
                <div className="project-item">
                    <h3>Project Title</h3>
                    <p>Project description goes here. This project showcases the following features...</p>
                    <a href="#" className="project-link">View Project</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;