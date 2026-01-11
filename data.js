// ===========================
// Data for the Application
// ===========================

// Video Cards Data
const videoCardsData = [
    {
        id: 1,
        title: 'Acute Stroke Recognition',
        description: 'Learn the critical FAST protocol and early warning signs of stroke',
        duration: '45 min',
        progress: 65,
        image: 'https://images.unsplash.com/photo-1767378262839-9d615a266ad3?w=400'
    },
    {
        id: 2,
        title: 'Imaging Interpretation',
        description: 'Master CT and MRI interpretation for stroke diagnosis',
        duration: '60 min',
        progress: 40,
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400'
    },
    {
        id: 3,
        title: 'Thrombolytic Therapy',
        description: 'Understanding tPA administration and contraindications',
        duration: '50 min',
        progress: 80,
        image: 'https://images.unsplash.com/photo-1576670160060-c4e874631c5a?w=400'
    },
    {
        id: 4,
        title: 'Hemorrhagic Stroke',
        description: 'Diagnosis and management of brain hemorrhages',
        duration: '55 min',
        progress: 0,
        image: 'https://images.unsplash.com/photo-1674702727317-d29b2788dc4a?w=400'
    },
    {
        id: 5,
        title: 'Post-Stroke Care',
        description: 'Rehabilitation protocols and patient recovery strategies',
        duration: '40 min',
        progress: 25,
        image: 'https://images.unsplash.com/photo-1679001976061-43be2417a90e?w=400'
    }
];

// Categories Data
const categoriesData = [
    {
        icon: '🧠',
        title: 'Neuroanatomy',
        count: '24 courses',
        gradient: 'linear-gradient(135deg, #a855f7, #7e22ce)',
        image: 'https://images.unsplash.com/photo-1725689587796-af783f04c0e1?w=400'
    },
    {
        icon: '🩺',
        title: 'Clinical Skills',
        count: '18 courses',
        gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        image: 'https://images.unsplash.com/photo-1674702727317-d29b2788dc4a?w=400'
    },
    {
        icon: '📊',
        title: 'Emergency Care',
        count: '15 courses',
        gradient: 'linear-gradient(135deg, #6366f1, #4338ca)',
        image: 'https://images.unsplash.com/photo-1679001976061-43be2417a90e?w=400'
    },
    {
        icon: '❤️',
        title: 'Patient Care',
        count: '20 courses',
        gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400'
    },
    {
        icon: '🔬',
        title: 'Research Methods',
        count: '12 courses',
        gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
        image: 'https://images.unsplash.com/photo-1767378262839-9d615a266ad3?w=400'
    },
    {
        icon: '📚',
        title: 'Case Studies',
        count: '30 courses',
        gradient: 'linear-gradient(135deg, #06b6d4, #0e7490)',
        image: 'https://images.unsplash.com/photo-1725689587796-af783f04c0e1?w=400'
    }
];

// Progress Courses Data
const progressCoursesData = [
    {
        title: 'Acute Stroke Recognition',
        progress: 65,
        totalModules: 12,
        completedModules: 8
    },
    {
        title: 'Imaging Interpretation',
        progress: 40,
        totalModules: 10,
        completedModules: 4
    },
    {
        title: 'Thrombolytic Therapy',
        progress: 80,
        totalModules: 8,
        completedModules: 6
    }
];

// Testimonials Data
const testimonialsData = [
    {
        id: 1,
        name: 'Dr. Emily Chen',
        role: 'Medical Student, Year 3',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        rating: 5,
        text: 'StrokeAware transformed my understanding of neurological emergencies. The video content and interactive features make learning engaging and memorable.'
    },
    {
        id: 2,
        name: 'James Rodriguez',
        role: 'Resident Physician',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        rating: 5,
        text: 'The progress tracking and structured curriculum helped me ace my neurology rotation. Highly recommended for all medical students!'
    },
    {
        id: 3,
        name: 'Dr. Sarah Williams',
        role: 'Medical Student, Year 4',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        rating: 5,
        text: 'Exceptional content from world-class neurologists. The case studies and real-world scenarios are invaluable for board exam preparation.'
    },
    {
        id: 4,
        name: 'Michael Park',
        role: 'Medical Student, Year 2',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        rating: 5,
        text: 'The interactive video previews and smooth interface make learning enjoyable. I can track my progress and stay motivated throughout my studies.'
    }
];
