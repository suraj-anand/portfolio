import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub,
} from 'react-icons/fa'

export const CONTACT_CHANNELS = [
    {
        id: 'email',
        icon: FaEnvelope,
        label: 'Direct Email',
        value: 'suraj02anand@gmail.com',
        actionType: 'copy-and-link',
        link: 'mailto:suraj02anand@gmail.com',
        color: '#60a5fa',
    },
    {
        id: 'phone',
        icon: FaPhoneAlt,
        label: 'Phone / WhatsApp',
        value: '+91 90808 19249',
        actionType: 'link',
        link: 'tel:+919080819249',
        color: '#34d399',
    },
    {
        id: 'location',
        icon: FaMapMarkerAlt,
        label: 'Current Location',
        value: 'Chennai, Tamil Nadu, India',
        actionType: 'link',
        link: 'https://maps.app.goo.gl/7JL35dnza8Pna2ZR6',
        color: '#f43f5e',
    },
]

export const SOCIAL_LINKS = [
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/suraj-anand-/',
        icon: FaLinkedin,
        color: '#0a66c2',
    },
    {
        label: 'GitHub',
        url: 'https://github.com/suraj-anand/',
        icon: FaGithub,
        color: '#f1f5f9',
    },
]
