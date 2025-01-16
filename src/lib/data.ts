import {
    Briefcase, GraduationCap, Trophy, PawPrint, ShoppingBasket, Dices, BadgeInfo,
    BriefcaseBusiness, Layers3, FolderOpenDot, MailPlus, FileDown
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { NavLinkData, ExperienceData, ProjectData, SocialData } from './types';

export const navLinks: NavLinkData[] = [
    { icon: BadgeInfo, href: '#about', name: 'about' },
    { icon: BriefcaseBusiness, href: '#experience', name: 'experience' },
    { icon: Layers3, href: '#stack', name: 'stack' },
    { icon: FolderOpenDot, href: '#projects', name: 'projects' },
    { icon: MailPlus, href: '#contact', name: 'contact' }
];
export const experiences: ExperienceData[] = [
    {
        "icon": Briefcase,
        "title": "Junior React Developer",
        "location": "Radio IP",
        "date": "2025 - present",
        "description": "As a Junior React Developer, I contribute to the development of NextGen frontend solutions using React and Bootstrap to create responsive, user-friendly interfaces. My role involves building reusable components, optimizing performance, and ensuring accessibility."
    },
    {
        icon: Briefcase,
        title: 'Hostess',
        location: 'Poutine Boss',
        date: '2023 - present',
        description: 'I work as a hostess, serving meals and making drinks for customers, which requires strong multitasking, critical thinking, and excellent customer service skills.',
    },
    {
        icon: GraduationCap,
        title: 'Computer Science',
        location: 'Concordia University',
        date: '2022 - present',
        description: "Currently pursuing a Bachelor's degree in Computer Science."
    }
];
export const currentStack: string[] = [
    'C#', 'Java', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Express.js',
    'Flask', 'PHP', 'Node.js', 'Next.js', 'SQL', 'MongoDB', 'TailwindCSS', 'Framer Motion'
];
export const projects: ProjectData[] = [
    {
        projIcon: Trophy,
        gitUrl: 'https://github.com/barbaraeguche/youth-soccer-club',
        title: 'Youth Soccer Club',
        description: 'Collaborated on a youth soccer club management system to streamline administrative tasks and automate data handling for improved efficiency.',
        tags: ['html', 'css', 'php', 'sql', 'apis']
    },
    {
        projIcon: PawPrint,
        gitUrl: 'https://github.com/barbaraeguche/paw-squad',
        title: 'Paw Squad',
        description: 'Created a full-stack pet adoption web application with secure session management and user-friendly adoption functionalities.',
        tags: ['next.js', 'tailwind', 'zustand', 'next-auth', 'sessions']
    },
    {
        projIcon: ShoppingBasket,
        gitUrl: 'https://github.com/barbaraeguche/cartdash',
        title: 'Cartdash',
        description: 'Developed a grocery shopping management application with CRUD functionalities, allowing users to efficiently manage their grocery lists',
        tags: ['react', 'typescript', 'flask', 'pymongo', 'vite', 'flask-cors']
    },
    {
        projIcon: Dices,
        gitUrl: 'https://github.com/barbaraeguche/snakes-and-ladders',
        title: 'Snakes and Ladders Game',
        description: 'Developed a two-player Snakes and Ladders game featuring interactive, turn-based gameplay with a console interface.',
        tags: ['java', 'intellij']
    }
];
export const socials: SocialData[] = [ //change
    { icon: FaLinkedin, socialUrl: 'https://linkedin.com/in/barbaraeguche/', name: 'linkedln' },
    { icon: FaGithub, socialUrl: 'https://github.com/barbaraeguche', name: 'github' },
    { icon: FileDown, socialUrl: '/cv.pdf', name: 'résumé' }
];
