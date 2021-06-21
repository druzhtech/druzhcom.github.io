import React, { Component } from 'react';
import '../App.css';
import ProjectCard from './ProjectCard';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <section className="page-section" id="затеи">
                {/* <h1 className="russian">Затеи</h1> */}
                <div className="container-fluid p-5">
                    <h2 className="text-center mt-0 russian">Затеи</h2>
                    <hr className="divider my-4" />
                    <div class="lines">
                        <div className="row">
                            <ProjectCard />
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/2.jpg">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/2.jpg" alt="" />
                                    <div className="portfolio-box-caption">
                                        {/* <div className="project-category text-white-50">Торговля</div> */}
                                        {/* <div className="project-name">Торжок</div> */}
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="img/portfolio/fullsize/3.jpg">
                                    <img className="img-fluid" src="img/portfolio/thumbnails/3.jpg" alt="" />
                                    <div className="portfolio-box-caption">
                                        {/* <div className="project-category text-white-50">Category</div> */}
                                        {/* <div className="project-name">Project Name</div> */}
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="row">

                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="img/portfolio/fullsize/4.jpg">
                                <img className="img-fluid" src="img/portfolio/thumbnails/4.jpg" alt="" />
                                <div className="portfolio-box-caption">
                                    {/* <div className="project-category text-white-50">Category</div> */}
                                    {/* <div className="project-name">Project Name</div> */}
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="img/portfolio/fullsize/5.jpg">
                                <img className="img-fluid" src="img/portfolio/thumbnails/5.jpg" alt="" />
                                <div className="portfolio-box-caption">
                                    {/* <div className="project-category text-white-50">
                                        Category
                              </div>
                                    <div className="project-name">
                                        Project Name
                              </div> */}
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="img/portfolio/fullsize/6.jpg">
                                <img className="img-fluid" src="img/portfolio/thumbnails/6.jpg" alt="" />
                                <div className="portfolio-box-caption p-3">
                                    {/* <div className="project-category text-white-50">
                                        Category
                              </div>
                                    <div className="project-name">
                                        Project Name
                              </div> */}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;
