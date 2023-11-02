import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    Pozos: {
      jobTitle: "DevOps Engineer at @",
      duration: "OCT 2023 - PRESENT",
      desc: [
        "Implementation of containerization of a Python application with Docker, enabling teams to avoid the problems of putting the application into each new version of the application.",
        "Establishment of a private registry in the form of a container to securely store over 100 images and facilitate the distribution of artifacts to the company's various teams.",
        "Creation of a docker-compose file to simplify and facilitate the execution of containers in various contexts.",
        "Configuration of a GitHub Actions CI/CD pipeline to automate the deployment of new versions on the private registry and in production, saving development teams several hours a week."
      ]
    },
    "Reda Marketing": {
      jobTitle: "DevOps Engineer at @",
      duration: "JUL 2022 - OCT 2023",
      desc: [
        "Reduced infrastructure costs by 25% by implementing containerization with Docker, orchestration via Kubernetes and infrastructure deployment on AWS.",
        "Automated configuration of cloud instances using Jenkins, Terraform and Ansible, reducing the team's weekly manual work by 20h. the team's weekly manual workload.",
        "Improved security and system availability through the implementation of DevSecOps practices in Jenkins pipelines pipelines and infrastructure monitoring with Grafana, reducing security vulnerabilities and cutting incident detection time. incidents."
      ]
    },
    Eazytraining: {
      jobTitle: "DevOps Engineer intern @",
      duration: "FEB 2022 - MAY 2022",
      desc: [
        "In response to slow and unreliable application deployments, I worked on the design and implementation of a high-performance CI/CD pipeline, integrating test and integration stages across several environments (review, staging, production) to improve the speed and reliability of updates.",
        "Faced with the tedious management of development, test and production environments, I introduced automation via Docker and Kubernetes, reducing human error and ensuring environmental consistency.",
        "Implementation of DevOps security practices using Ansible to manage secure server configurations. Implemented monitoring tools such as Prometheus and Grafana to monitor service performance and availability."
      ]
    },
    // Centivizer: {
    //   jobTitle: "Research Developer @",
    //   duration: "SEPT 2019 - APR 2020",
    //   desc: [
    //     "Researched and developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
    //     "Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia."
    //   ]
    // },
    // TDSB: {
    //   jobTitle: "Software Engineer @",
    //   duration: "SEPT 2019 - DEC 2020",
    //   desc: [
    //     "Co-developed homework management software integrable with Google Classroom by utilizing the Python’s Flask micro-framework for the back-end API and Vue.js for the front-end UI, in order to translate business requirements into a functional full-stack application."
    //   ]
    // },
    "École du Génie Supérieur": {
      jobTitle: "Systems, Networks & Cloud Computing Master's degree @",
      duration: "MAY 2019 - AUG 2019",
      desc: [
        "Program: Linux/Windows Server administration, Kubernetes, AWS, Azure, OpenStack, PowerShell, Python, CCNP, VMWare, Ansible, Docker, Blockchain, Advanced IS security, Juniper, Palo Alto, IS project management."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
