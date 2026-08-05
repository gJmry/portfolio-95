export const experiencesData = [
    {
        year: '2025',
        title: '🏆 Association Treasurer (Student Club)',
        description: 'Currently overseeing the financial management of the student association, including budgeting and expense tracking, ensuring transparency and responsible spending. Managing annual budgets and coordinating with various departments for financial planning.',
        type: 'current',
    },
    {
        year: '2024-2026',
        title: '📗 Elected IUT UFR Representative',
        description: 'Serving as an elected representative for the IUT UFR, advocating for student interests and fostering communication between students and faculty. Participating in academic council meetings and representing student concerns in institutional decisions.',
        type: 'ongoing',
    },
    {
        year: '2024',
        title: '🌟 Co-President of Student Club',
        description: 'Led a team in organizing various student events, promoting engagement, and fostering community spirit within the university. Developed leadership and organizational skills while managing a team of 12 volunteers and coordinating events for 200+ students.',
        type: 'leadership',
    },
    {
        year: '2022-2025',
        title: '🎓 BUT Computer Science Lyon 1',
        description: 'Pursuing a Bachelor in Technology focused on Computer Science, with comprehensive coursework covering software development, algorithms, data structures, network systems, and project management. Maintaining strong academic performance while actively participating in extracurricular activities.',
        type: 'education',
    },
    {
        year: '2022-2023',
        title: '📋 Association Secretary (BDE Info)',
        description: 'Responsible for keeping detailed minutes of meetings, overseeing administrative tasks, and facilitating communication within the student body. Managed documentation systems and coordinated between different association committees.',
        type: 'administrative',
    },
];

const typeColorMap = {
    current: '#2ecc71',
    ongoing: '#3498db',
    leadership: '#e74c3c',
    education: '#9b59b6',
    administrative: '#f39c12',
};

export const getTypeColor = (type) => typeColorMap[type] || '#95a5a6';

