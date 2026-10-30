import az_900 from 'assets/images/certifications/az-900.png'
import dp_900 from 'assets/images/certifications/dp-900.png'
import gcp_ace from 'assets/images/certifications/gcp-ace.png'
import gcp_cdl from 'assets/images/certifications/gcp-cdl.png'
import cs50 from 'assets/images/certifications/cs50.png'
import { SiGooglecloud, SiMicrosoftazure } from 'react-icons/si'
import { FaGraduationCap } from 'react-icons/fa'

// Order: AZ-900, DP-900, GCP ACE, GCP Digital Leader, CS50
export const CERTIFICATIONS = [
  {
    id: 'az-900',
    provider: 'Microsoft Azure',
    icon: SiMicrosoftazure,
    accentColor: '#0078d4',
    certImg: az_900,
    alt: 'Microsoft Certified: Azure Fundamentals (AZ-900) Certificate',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/suraja-0011/credentials/e576d6016b516e85',
  },
  {
    id: 'dp-900',
    provider: 'Microsoft Azure',
    icon: SiMicrosoftazure,
    accentColor: '#0089d6',
    certImg: dp_900,
    alt: 'Microsoft Certified: Azure Data Fundamentals (DP-900) Certificate',
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/SurajA-0011/1233B464C80D6131?sharingId=38BF5500CA6303E7',
  },
  {
    id: 'gcp-ace',
    provider: 'Google Cloud Platform',
    icon: SiGooglecloud,
    accentColor: '#38bdf8',
    certImg: gcp_ace,
    alt: 'Google Cloud Certified Associate Cloud Engineer Certificate',
  },
  {
    id: 'gcp-cdl',
    provider: 'Google Cloud Platform',
    icon: SiGooglecloud,
    accentColor: '#34d399',
    certImg: gcp_cdl,
    alt: 'Google Cloud Certified Cloud Digital Leader Certificate',
  },
  {
    id: 'cs50',
    provider: 'Harvard University',
    icon: FaGraduationCap,
    accentColor: '#ef4444',
    certImg: cs50,
    alt: 'Harvard University CS50 Computer Science Certificate',
  },
]
