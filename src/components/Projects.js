import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "NetDevOps": {
        title: "netdevops",
        desc:
          "Set up a Jenkinsfile to automate configuration deployment on cisco network devices via an Ansible role I created.",
        techStack: "Ansible, Jenkins, Python",
        link: "https://github.com/MozkaGit/NetDevOps",
        open: "https://github.com/MozkaGit/ansible-role-netdevops",
        image: "./assets/nomansland.png"
      },
      TorrentOps: {
        title: "torrentops",
        desc:
          "Containerized nodejs application to interact with APIs. Setting up environment variables to customize deployment. A GitHub pipeline was set up for deployment on the Docker registry.",
        techStack: "Docker, GitHub Actions, NodeJS",
        link: "https://github.com/MozkaGit/docker-torrent-downloader",
        open: "https://github.com/MozkaGit/docker-torrent-downloader/actions/workflows/registry.yml",
        image: "./assets/truth.png"
      },
      2048: {
        title: "2048",
        desc:
          "This project aims to deploy the game 2048 contained in a Dockerfile on Elastic Beanstalk using Terraform.",
        techStack: "Terraform, Docker, AWS, GitHub Actions",
        link: "https://github.com/gazijarin/TallTales",
        open: "https://github.com/MozkaGit/terraform-elasticbeanstalk-docker/actions/workflows/deploy.yml",
        image: "./assets/talltales.png"
      },
      Portfolio: {
        title: "portfolio",
        desc:
          "This project aims to deploy a static website (portfolio) on an Amazon S3 bucket using Terraform.",
        techStack: "Terraform, AWS, GitHub Actions",
        link: "https://github.com/MozkaGit/terraform-s3-static-website",
        open: "https://github.com/MozkaGit/terraform-s3-static-website/actions/workflows/build.yaml",
        image: "./assets/portfolio.png"
      }
    };
    const projects = {
      "On hold.": {
        desc:
          "On hold.",
        techStack: "On hold.",
        link: "",
        open: ""
      },
      "On hold.": {
        desc:
          "On hold.",
        techStack: "On hold.",
        link: "",
        open: ""
      },
      "On hold.": {
        desc:
          "On hold.",
        techStack: "On hold.",
        link:
          ""
      },
      "On hold.": {
        desc:
          "On hold.",
        techStack: "Javascript, Node.js, Natural NLP, Telegram API",
        link: "",
        open: ""
      },
      "On hold.": {
        desc:
          "On hold.",
        techStack: "On hold.",
        link: "",
        open: ""
      },
      "On hold.": {
        desc:
          "On hold.",
        techStack: "On hold.",
        link: "",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ devops-creations</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
