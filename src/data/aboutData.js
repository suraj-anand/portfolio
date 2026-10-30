import {
  FaServer,
  FaCloud,
  FaGraduationCap
} from 'react-icons/fa'

export const IMPACT_METRICS = [
  {
    value: '4+',
    label: 'Years Experience',
    sub: 'Cloud-native backend & systems',
  },
  {
    value: '~80%',
    label: 'Incident Reduction',
    sub: 'Root-cause analysis at Amazon',
  },
]

export const CORE_PILLARS = [
  {
    icon: FaServer,
    title: 'Automation Engineering',
    desc: 'Building automation scripts and reporting pipelines to eliminate repetitive tasks, simplify workflows, and improve operational productivity.',
    tags: ['Python', 'Data Processing', 'API Integrations', 'Workflow Automation'],
  },
  {
    icon: FaCloud,
    title: 'Cloud Native & DevOps',
    desc: 'I enjoy building reliable CI/CD pipelines that automate the entire software deployment process, from code integration to production releases',
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Automation'],
  },
]

export const CREDENTIALS = [
  {
    icon: FaGraduationCap,
    title: 'Master of Computer Applications (MCA)',
    institution: 'University of Madras • (2022 - 2024)',
  },
  {
    icon: FaGraduationCap,
    title: 'B.Sc Computer Science',
    institution: 'R.K.M Vivekananda College • (2019 - 2022)',
  },
]
