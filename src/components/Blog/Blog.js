import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from "react-icons/hi";

import './Blog.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";


function Blog() {

    const { theme } = useContext(ThemeContext);
    const [text, setText] = useState();

    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
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
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
           
                <div className="blog" id="blog" style={{backgroundColor: theme.secondary}}>
                    <div className="blog--header">
                        <h1 style={{color: theme.primary}}>GitHub Analytics</h1>
                    </div>
                    <div className="blog--body">

                    <div id="github">
    
      <div className="githubContainer" style={{color: theme.primary}}>
        
        <a href="https://github.com/Aknathpanchal" target="blank">
          <img
            height="160em"
            src="https://github-readme-stats-eight-theta.vercel.app/api?username=Aknathpanchal&show_icons=true&theme=algolia&include_all_commits=true&count_private=true"
          />
        </a>
        <a href="https://github.com/Aknathpanchal" target="blank">
          <img
            align="center"
            height="170rem"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Aknathpanchal&theme=dark&background=0d1117&date_format=M%20j%5B%2C%20Y%5D"
            alt="adam-pw"
          />
        </a>
      </div>
      <div className="githubCalender" style={{color: theme.primary}}>
          <GitHubCalendar
            username="Aknathpanchal"
            colorScheme="dark"
            style={{ width: "100%" }}
          />
   </div>
    </div>

                        {/* <div className="blog--bodyContainer"> */}
                            {/* {blogData.slice(0, 3).reverse().map(blog => (
                                <SingleBlog 
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))} */}
                        {/* </div>  */}

                        {/* {blogData.length > 3 && (
                            <div className="blog--viewAll">
                                <Link to="/blog">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )} */}
                    </div>
                </div>
       

        </>
    )
}

export default Blog
