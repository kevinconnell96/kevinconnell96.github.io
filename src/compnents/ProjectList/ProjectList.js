import React from 'react';
import { Container } from 'reactstrap';
import ProjectTile from '../ProjectTile';
import "./ProjectList.css"
import projects from '../UserInput'

const ProjectList = () => {

    return (
        <Container id="projectContainer">
            <h2 style={{color: "#808080", position: "absolute", top: "15px"}}>PORTFOLIO</h2>
            {projects.map((item, index) => <ProjectTile key={index} title={item.title} description={item.description} color={item.color} link={item.link} image={item.image} dark={item.dark}/>)}
        </Container>
    );
}

export default ProjectList;