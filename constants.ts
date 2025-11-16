import { ChartBarIcon, ClipboardCheckIcon, AcademicCapIcon } from './components/Icons';

export const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Events', href: '#gallery' },
  { name: 'Contact Us', href: '#contact' },
];

export const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Instagram', href: '#', icon: 'instagram' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'WhatsApp', href: '#', icon: 'whatsapp' },
];


export const galleryImages = [
  'https://picsum.photos/seed/event1/400/300',
  'https://picsum.photos/seed/event2/400/300',
  'https://picsum.photos/seed/event3/400/300',
  'https://picsum.photos/seed/event4/400/300',
  'https://picsum.photos/seed/event5/400/300',
  'https://picsum.photos/seed/event6/400/300',
  'https://picsum.photos/seed/event7/400/300',
];

export const featuresItems = [
  {
    icon: ChartBarIcon,
    title: 'Results',
    description: 'Track academic performance and view detailed student results.',
    href: '/results',
  },
  {
    icon: ClipboardCheckIcon,
    title: 'Attendance',
    description: 'Monitor student attendance records and stay updated.',
    href: '/attendance',
  },
  {
    icon: AcademicCapIcon,
    title: 'Quality Education',
    description: 'Learn more about our commitment to providing excellent education.',
    href: '/education',
  },
];

export const faqItems = [
  {
    question: 'What are the admission requirements?',
    answer: 'Admission requires completing the application form, providing previous academic records, and a successful interview. Please visit our admissions page for detailed information.',
  },
  {
    question: 'What is the curriculum like?',
    answer: 'We follow a comprehensive curriculum that balances academics, arts, and sports to ensure the holistic development of our students. It is designed to be engaging and challenging.',
  },
  {
    question: 'Do you offer extracurricular activities?',
    answer: 'Yes, we offer a wide range of extracurricular activities including sports, debate club, science club, and art classes to help students explore their interests and talents.',
  },
  {
    question: 'What are the school hours?',
    answer: 'Our regular school hours are from 8:00 AM to 3:00 PM, Monday to Friday. Specific timings for different classes may vary.',
  },
];

// FIX: Added whatWeDoItems to resolve import error in components/WhatWeDo.tsx
export const whatWeDoItems = [
  {
    icon: ChartBarIcon,
    title: 'Comprehensive Curriculum',
    description: 'We offer a curriculum that covers a wide range of subjects to ensure a well-rounded education.',
  },
  {
    icon: ClipboardCheckIcon,
    title: 'Regular Assessments',
    description: 'Students are regularly assessed to track their progress and identify areas for improvement.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Experienced Faculty',
    description: 'Our teachers are highly qualified and dedicated to helping students succeed.',
  },
];

// FIX: Added executives to resolve import error in components/Executives.tsx
export const executives = [
  {
    name: 'John Doe',
    role: 'Principal',
    imageUrl: 'https://picsum.photos/seed/exec1/200/200',
  },
  {
    name: 'Jane Smith',
    role: 'Vice Principal',
    imageUrl: 'https://picsum.photos/seed/exec2/200/200',
  },
  {
    name: 'Peter Jones',
    role: 'Head of Academics',
    imageUrl: 'https://picsum.photos/seed/exec3/200/200',
  },
  {
    name: 'Mary Williams',
    role: 'Head of Administration',
    imageUrl: 'https://picsum.photos/seed/exec4/200/200',
  },
];

// FIX: Added whyChooseUsItems to resolve import error in components/WhyChooseUs.tsx
export const whyChooseUsItems = [
    {
        icon: AcademicCapIcon,
        title: 'Expert Teachers',
        description: 'Our instructors are experienced professionals dedicated to student success.',
    },
    {
        icon: ChartBarIcon,
        title: 'Proven Results',
        description: 'We have a track record of helping students achieve their academic goals.',
    },
    {
        icon: ClipboardCheckIcon,
        title: 'Supportive Environment',
        description: 'We provide a nurturing and encouraging atmosphere for learning.',
    },
    {
        icon: AcademicCapIcon,
        title: 'Holistic Development',
        description: 'We focus on the all-round development of our students, including character and skills.',
    },
];
