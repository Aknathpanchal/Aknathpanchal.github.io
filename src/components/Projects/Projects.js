import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from "react-icons/hi";
// import { GrDeploy } from "react-icons/gr";
import { BsRocketTakeoff } from "react-icons/bs";
import pr1 from "./Pr1.jpg";
import pr2 from "./pr2.jpg";
import pr3 from "./pr3.jpg";
import pr4 from "./pr4.jpg";
import pr5 from "./pr5.jpg";
import pr6 from "./pr6.jpg";
import rocket from "./rocket-takeoff.svg";
import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

function Projects() {

    const { theme } = useContext(ThemeContext);

    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Projects</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                        <div className="inner-project">
        <div className="project-video" style={{color: theme.primary}}>
          <img src={pr1} alt="Gradigi" />
          <img src={pr2} alt="Gradigi" />
         
        </div>
        <div className="project-description" style={{ color: theme.tertiary80,fontFamily:"sans-serif"}}>
          <h2 style={{ fontSize: "31px" }}>
          GRADIGI-For Grading Presentation
          </h2>
          <p style={{ color: theme.tertiary80 }}>
          In this website, we specialize in creating and managing presentations for individuals and businesses alike. Our platform allows you to assign different sections of your presentation to specific administrators, who can then create and set attributes for each section.
          </p>
          <p>
            <br />
            <h2>Features:-</h2>
            <ul>
              <li>Sign in with email and password for all roles</li>
              <li>Admin can add Presentation Assign other admin for review Presentation</li>
              <li>
                Create multipal section and attributes.
              </li>
              <li>
                Grading each attribute
              </li>
              <li>Admin and all participants can see result</li>
              <li>build Google like calendar</li>
            </ul>
          </p>
          <br />
          <h2>Tech Stack:-</h2>
          <h3>Frontend Tech Stack-</h3>
          <p>HTML | CSS | Javascript | React | Redux | MUI</p>
          {/* <h3>Backend Tech Stack-</h3>
          <p>
            JAVA | Spring Boot | Mysql | Apache | JWT | AWS | Postman |
            Nginx
          </p> */}
          <div className="live-links">
            <a target="_blank" href="http://35.178.251.86:8080/">
              <p src={rocket}></p> Live Site
            </a>
            {/* <a
              target="_blank"
              // href=""
            >
              <p >GitRepo</p>
            </a> */}
          </div>
        </div>
      </div>

                   <div className="inner-project">
        <div className="project-video" style={{color: theme.primary}}>
          <img src={pr3} alt="Masai Placement Poartal" />
          <img src={pr4} alt="Masai Placement Poartal" />
         
        </div>
        <div className="project-description" style={{ color: theme.tertiary80,fontFamily:"sans-serif"}}>
          <h2 style={{ fontSize: "31px" }}>
          Masai Placement Portal
          </h2>
          <p style={{ color: theme.tertiary80}}>
         This is the Masai Build and Earn Project. We built this website where the Placement team can bring companies from different sources and update them on the portal so that students can apply according to their skill sets. While working on this project, we learned a lot about teamwork, coordination, and thinking along with all the team members. 😊
          </p>
          <p>
            <br />
            <h2>Features:-</h2>
            <ul>
              <li>Simple and consistent UI.
</li>
              <li>Admin and student panels are available as per requirements.</li>
              <li>
              Secure app with email verification and JWT Token.
              </li>
              <li>
              Pagination For Managing Long List.
              </li>
              <li>Multiple Details about the company and position to clear students' required questions.</li>
              <li>The optimization technique makes fast response loading.</li>
            </ul>
          </p>
          <br />
          <h2>Tech Stack:-</h2>
          <h3>Frontend Tech Stack-</h3>
          <p>HTML | CSS | Javascript | React | Redux | Ant-design | Santry</p>
          {/* <h3>Backend Tech Stack-</h3>
          <p>
            Node | Express | Redis | JWT | Postman
          </p> */}
          <div className="live-links">
            <a target="_blank" href="https://masai-placement-portal.netlify.app/">
              <p src={rocket}></p> Live Site
            </a>
            {/* <a
              target="_blank"
              href="https://github.com/Aknathpanchal/Masai-Placement-Portal"
            >
              <p >GitRepo</p>
            </a> */}
          </div>
        </div>
      </div>

      <div className="inner-project">
        <div className="project-video" style={{color: theme.primary}}>
          <img src={pr5} alt="Frontend Master" />
          {/* <img src={pr4} alt="Masai Placement Poartal" /> */}
         
        </div>
        <div className="project-description" style={{ color: theme.tertiary80,fontFamily:"sans-serif"}}>
          <h2 style={{ fontSize: "31px" }}>
          Frontend Master
          </h2>
          <p style={{ color: theme.tertiary80}}>
          Frontend Master is a web application to provide courses to master front-end skills.
          </p>
          <p>
            <br />
            <h2>Features:-</h2>
            <ul>
              <li>Simple and consistent UI.
</li>
             <li>Sign-in/Sign-up
</li>
<li>Update user details
</li>
<li>Learning Paths</li>
            </ul>
          </p>
          <br />
          <h2>Tech Stack:-</h2>
          <h3>Frontend Tech Stack-</h3>
          <p>HTML | CSS | Javascript </p>
          <div className="live-links">
            <a target="_blank" href="https://zingy-cactus-84c80d.netlify.app/">
              <p src={rocket}></p> Live Site
            </a>
            <a
              target="_blank"
              href="https://github.com/Aknathpanchal/Frontend-Master"
            >
              <p >GitRepo</p>
            </a>
          </div>
        </div>
      </div>

      <div className="inner-project">
        <div className="project-video" style={{color: theme.primary}}>
          <img src={pr6} alt="Apple-TV" />
          {/* <img src={pr4} alt="Masai Placement Poartal" /> */}
         
        </div>
        <div className="project-description" style={{ color: theme.tertiary80,fontFamily:"sans-serif"}}>
          <h2 style={{ fontSize: "31px" }}>
          Apple-TV+ Website Clone
          </h2>
          <p style={{ color: theme.tertiary80}}>
          Apple TV+ is an American subscription streaming service owned and operated by Apple Inc. It offers a selection of original production films and television series called Apple Originals. It's the portal for Apple's Apple TV+ service, featuring original content created for Apple.
          </p>
          <p>
            <br />
            <h2>Features:-</h2>
            <ul>
              <li>Simple and consistent UI.
</li>
             <li>User Authentication

</li>
<li>User Details Management

</li>
<li>Series & Shows Gallery
</li>
<li>Show Carousels
</li>
<li>Show Details.</li>
            </ul>
          </p>
          <br />
          <h2>Tech Stack:-</h2>
          <h3>Frontend Tech Stack-</h3>
          <p>HTML | CSS | Javascript </p>
          <div className="live-links">
            <a target="_blank" href="https://nameh-dhiman.github.io/Apple-TV-Clone-Project.github.io/">
              <p src={rocket}></p> Live Site
            </a>
            <a
              target="_blank"
              href="https://github.com/Aknathpanchal/Apple-TV"
            >
              <p >GitRepo</p>
            </a>
          </div>
        </div>
      </div>
                            {/* {projectsData.slice(0, 3).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    image={project.image}
                                />
                            ))} */}
                        </div> 

                        {/* {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )} */}
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
