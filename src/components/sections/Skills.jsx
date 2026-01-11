// Logos
import htmlLogo from 'assets/images/logo/html-logo.png'
import cssLogo from 'assets/images/logo/css-logo.png'
import jsLogo from 'assets/images/logo/js-logo.png'
import bootstrapLogo from 'assets/images/logo/Bootstrap_logo.png'
import reactLogo from 'assets/images/logo/react-logo.png'
import pythonLogo from 'assets/images/logo/python-logo.png'
import djangoLogo from 'assets/images/logo/django-logo.png'
import linuxLogo from 'assets/images/logo/linux-logo.png'
import mongoLogo from 'assets/images/logo/mongodb-logo.png'
import postgresLogo from 'assets/images/logo/postgres-logo.png'
import gcloudLogo from 'assets/images/logo/google-cloud-logo.png'
import gitLogo from 'assets/images/logo/git-logo.png'
import awsLogo from 'assets/images/logo/aws-logo.png'

const skillsData = [
  { name: 'HTML', logo: htmlLogo, category: 'Frontend' },
  { name: 'CSS', logo: cssLogo, category: 'Frontend' },
  { name: 'JavaScript', logo: jsLogo, category: 'Frontend' },
  { name: 'Bootstrap', logo: bootstrapLogo, category: 'Frontend' },
  { name: 'React', logo: reactLogo, category: 'Frontend' },
  { name: 'Python', logo: pythonLogo, category: 'Backend' },
  { name: 'Django', logo: djangoLogo, category: 'Backend' },
  { name: 'PostgreSQL', logo: postgresLogo, category: 'Database' },
  { name: 'MongoDB', logo: mongoLogo, category: 'Database' },
  { name: 'AWS', logo: awsLogo, category: 'Cloud' },
  { name: 'Google Cloud', logo: gcloudLogo, category: 'Cloud' },
  { name: 'Linux', logo: linuxLogo, category: 'DevOps' },
  { name: 'Git', logo: gitLogo, category: 'DevOps' },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <i className="fa fa-code"></i> Skills & Technologies
          </h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div 
              className="skill-card" 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="skill-icon">
                <img src={skill.logo} alt={skill.name} />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-category">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
