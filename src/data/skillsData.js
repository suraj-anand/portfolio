// Logos
import htmlLogo from 'assets/images/logo/html-logo.png'
import cssLogo from 'assets/images/logo/css-logo.png'
import jsLogo from 'assets/images/logo/js-logo.png'
import bootstrapLogo from 'assets/images/logo/Bootstrap_logo.png'
import reactLogo from 'assets/images/logo/react-logo.png'
import pythonLogo from 'assets/images/logo/python-logo.png'
import djangoLogo from 'assets/images/logo/django-logo.png'
import fastapiLogo from 'assets/images/logo/fastapi-logo.svg'
import linuxLogo from 'assets/images/logo/linux-logo.png'
import mongoLogo from 'assets/images/logo/mongodb-logo.png'
import postgresLogo from 'assets/images/logo/postgres-logo.png'
import gcloudLogo from 'assets/images/logo/google-cloud-logo.png'
import gitLogo from 'assets/images/logo/git-logo.png'
import awsLogo from 'assets/images/logo/aws-logo.png'
import dockerLogo from 'assets/images/logo/docker-logo.svg'

export const ALL_SKILLS = [
  { name: 'Python', logo: pythonLogo, category: 'Backend', group: 'Backend', highlight: true },
  { name: 'FastAPI', logo: fastapiLogo, category: 'Backend', group: 'Backend', highlight: true },
  { name: 'Django', logo: djangoLogo, category: 'Backend', group: 'Backend', highlight: true },
  { name: 'AWS', logo: awsLogo, category: 'Cloud', group: 'Cloud & DevOps', highlight: true },
  { name: 'Google Cloud', logo: gcloudLogo, category: 'Cloud', group: 'Cloud & DevOps', highlight: true },
  { name: 'Docker', logo: dockerLogo, category: 'DevOps', group: 'Cloud & DevOps', highlight: true },
  { name: 'Linux', logo: linuxLogo, category: 'DevOps', group: 'Cloud & DevOps', highlight: false },
  { name: 'Git', logo: gitLogo, category: 'DevOps', group: 'Cloud & DevOps', highlight: false },
  { name: 'PostgreSQL', logo: postgresLogo, category: 'Database', group: 'Databases', highlight: true },
  { name: 'MongoDB', logo: mongoLogo, category: 'Database', group: 'Databases', highlight: false },
  { name: 'React', logo: reactLogo, category: 'Frontend', group: 'Frontend', highlight: true },
  { name: 'JavaScript', logo: jsLogo, category: 'Frontend', group: 'Frontend', highlight: false },
  { name: 'Bootstrap', logo: bootstrapLogo, category: 'Frontend', group: 'Frontend', highlight: false },
  { name: 'HTML5', logo: htmlLogo, category: 'Frontend', group: 'Frontend', highlight: false },
  { name: 'CSS3', logo: cssLogo, category: 'Frontend', group: 'Frontend', highlight: false },
]

export const CATEGORY_TABS = [
  { id: 'all', label: 'All Stack' },
  { id: 'Backend', label: 'Backend & APIs' },
  { id: 'Cloud & DevOps', label: 'Cloud & DevOps' },
  { id: 'Databases', label: 'Databases' },
  { id: 'Frontend', label: 'Frontend & UI' },
]
