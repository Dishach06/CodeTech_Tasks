// ============================================
// ADVANCED SAMPLE COURSE DATA WITH QUIZZES
// ============================================

const coursesDatabase = [
    {
        id: 1,
        title: 'Web Development Basics',
        description: 'Learn HTML, CSS, and JavaScript fundamentals from scratch',
        category: 'programming',
        level: 'Beginner',
        duration: 12,
        rating: 4.8,
        students: 5230,
        videoCount: 24,
        videoUrl: 'https://www.youtube.com/embed/kUMe1FH4CHE',
        instructor: {
            name: 'John Smith',
            avatar: 'https://via.placeholder.com/100'
        },
        modules: [
            'HTML Fundamentals',
            'CSS Styling & Layout',
            'JavaScript Basics',
            'Project: Building a Portfolio'
        ],
        reviews: [
            { author: 'Alice Johnson', rating: 5, text: 'Excellent course! Very comprehensive.' },
            { author: 'Bob Smith', rating: 4, text: 'Great content, could use more projects.' }
        ],
        quiz: {
            questions: [
                {
                    id: 1,
                    question: 'Which HTML tag is used for the largest heading?',
                    options: ['<h1>', '<h2>', '<h3>', '<h4>'],
                    correct: 0
                },
                {
                    id: 2,
                    question: 'What does CSS stand for?',
                    options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Coded Style Sheets'],
                    correct: 1
                },
                {
                    id: 3,
                    question: 'Which JavaScript method is used to access an element by id?',
                    options: ['getElementById()', 'getElementByClass()', 'querySelector()', 'getElement()'],
                    correct: 0
                },
                {
                    id: 4,
                    question: 'What is the correct syntax for creating an array in JavaScript?',
                    options: ['var colors = "red", "green"', 'var colors = ["red", "green"]', 'var colors = {1:"red", 2:"green"}', 'var colors = red, green'],
                    correct: 1
                },
                {
                    id: 5,
                    question: 'Which property is used to change the background color in CSS?',
                    options: ['color', 'background', 'background-color', 'bgcolor'],
                    correct: 2
                }
            ]
        }
    },
    {
        id: 2,
        title: 'Advanced JavaScript',
        description: 'Master ES6+, async programming, and modern frameworks',
        category: 'programming',
        level: 'Advanced',
        duration: 20,
        rating: 4.9,
        students: 3820,
        videoCount: 35,
        videoUrl: 'https://www.youtube.com/embed/lkIFF4maKMU',
        instructor: {
            name: 'Sarah Johnson',
            avatar: 'https://via.placeholder.com/100'
        },
        modules: [
            'ES6+ Features',
            'Promises & Async/Await',
            'API Integration',
            'Project: Building a Todo App'
        ],
        reviews: [
            { author: 'Charlie Brown', rating: 5, text: 'Best JavaScript course I\'ve taken!' }
        ]
    },
    {
        id: 3,
        title: 'Responsive Design',
        description: 'Create beautiful responsive layouts for all devices',
        category: 'design',
        level: 'Intermediate',
        duration: 10,
        rating: 4.7,
        students: 4150,
        videoCount: 18,
        videoUrl: 'https://www.youtube.com/embed/6-Wj5kP02Oo',
        instructor: {
            name: 'Mike Davis',
            avatar: 'https://via.placeholder.com/100'
        },
        modules: [
            'Mobile-First Design',
            'Flexbox & Grid',
            'Media Queries',
            'Project: Responsive Website'
        ],
        reviews: []
    },
    {
        id: 4,
        title: 'React Fundamentals',
        description: 'Build interactive UIs with React and modern best practices',
        category: 'programming',
        level: 'Intermediate',
        duration: 16,
        rating: 4.8,
        students: 6120,
        videoCount: 28,
        videoUrl: 'https://www.youtube.com/embed/A71aqufiNtQ',
        instructor: {
            name: 'Emily Watson',
            avatar: 'https://via.placeholder.com/100'
        },
        modules: [
            'React Components',
            'Hooks & State Management',
            'API Integration',
            'Project: E-commerce App'
        ],
        reviews: []
    },
    {
        id: 5,
        title: 'UI/UX Design Principles',
        description: 'Learn professional design principles and user experience',
        category: 'design',
        level: 'Beginner',
        duration: 14,
        rating: 4.6,
        students: 2840,
        videoCount: 22,
        videoUrl: 'https://www.youtube.com/embed/A71aqufiNtQ',
        instructor: {
            name: 'Jessica Lee',
            avatar: 'https://via.placeholder.com/100'
        },
        modules: [
            'Design Fundamentals',
            'User Research',
            'Prototyping',
            'Project: Design a Web App'
        ],
        reviews: []
    },
    {
        id: 6,
        title: 'Digital Marketing Essentials',
        description: 'Master SEO, social media, and content marketing strategies',
        category: 'business',
        level: 'Beginner',
        duration: 12,
        rating: 4.5,
        students: 3450,
        videoCount: 20,
        videoUrl: 'https://www.youtube.com/embed/A71aqufiNtQ',
        instructor: {
            name: 'Robert Taylor',
            avatar: 'https://via.placeholder.com/100'
        },
        modules: [
            'SEO Basics',
            'Social Media Strategy',
            'Content Marketing',
            'Analytics & Measurement'
        ],
        reviews: []
    }
];

// ============================================
// ADVANCED USER DATA
// ============================================

let userData = {
    name: 'John Doe',
    email: 'john.doe@edulearn.com',
    bio: 'Passionate about learning and technology',
    joinDate: new Date('2026-01-15'),
    enrolledCourses: [],
    completedCourses: 0,
    totalHoursSpent: 0,
    points: 0,
    streak: 7,
    internshipEndDate: new Date(2026, 11, 31),
    wishlist: [],
    reviews: [],
    leaderboard: [
        { rank: 1, name: 'Alice Chen', points: 2500, completed: 8 },
        { rank: 2, name: 'Bob Wilson', points: 2300, completed: 7 },
        { rank: 3, name: 'Carol Davis', points: 2100, completed: 6 },
        { rank: 4, name: 'David Smith', points: 1900, completed: 5 },
        { rank: 5, name: 'Eve Johnson', points: 1700, completed: 4 }
    ],
    forum: [
        {
            id: 1,
            author: 'John Doe',
            title: 'Tips for learning JavaScript efficiently',
            category: 'general',
            replies: 12,
            date: new Date()
        },
        {
            id: 2,
            author: 'Alice Chen',
            title: 'Best practices for React hooks',
            category: 'course',
            replies: 8,
            date: new Date()
        }
    ]
};

// ============================================
// THEME & DARK MODE
// ============================================

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

function applyTheme() {
    const theme = document.getElementById('settingTheme').value;
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// ============================================
// DROPDOWN MENU
// ============================================

document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

document.querySelector('.dropdown-toggle').addEventListener('click', function() {
    document.querySelector('.dropdown').classList.toggle('active');
});

// ============================================
// PAGE NAVIGATION - ENHANCED
// ============================================

function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    if (event && event.target && event.target.classList.contains('nav-link')) {
        event.target.classList.add('active');
    }

    // Load page-specific content
    if (pageName === 'courses') {
        loadCoursesPage();
    } else if (pageName === 'progress') {
        loadProgressPage();
    } else if (pageName === 'certificate') {
        loadCertificatePage();
    } else if (pageName === 'profile') {
        loadProfilePage();
    } else if (pageName === 'wishlist') {
        loadWishlistPage();
    } else if (pageName === 'leaderboard') {
        loadLeaderboardPage();
    } else if (pageName === 'forum') {
        loadForumPage();
    }
}

// ============================================
// LEADERBOARD PAGE
// ============================================

function loadLeaderboardPage() {
    const leaderboardList = document.getElementById('leaderboardList');
    leaderboardList.innerHTML = '';

    userData.leaderboard.forEach((user, index) => {
        const item = document.createElement('div');
        item.className = `leaderboard-item ${index === 0 ? 'top-1' : index === 1 ? 'top-2' : index === 2 ? 'top-3' : ''}`;
        item.innerHTML = `
            <div class="rank">${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : user.rank}</div>
            <div class="name">${user.name}</div>
            <div class="points">${user.points} pts</div>
            <div class="courses">${user.completed} courses</div>
        `;
        leaderboardList.appendChild(item);
    });
}

function setLeaderboardFilter(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    showNotification(`Leaderboard filtered by: ${filter}`);
}

// ============================================
// FORUM PAGE
// ============================================

function loadForumPage() {
    const forumList = document.getElementById('forumPostsList');
    forumList.innerHTML = '';

    userData.forum.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'forum-post';
        postElement.innerHTML = `
            <div class="forum-post-header">
                <div>
                    <span class="forum-post-category">${post.category}</span>
                    <h3 class="forum-post-title">${post.title}</h3>
                    <p class="forum-post-meta">Posted by <strong>${post.author}</strong> · ${post.date.toLocaleDateString()}</p>
                </div>
            </div>
            <div class="forum-post-stats">
                <span><i class="fas fa-comments"></i> ${post.replies} replies</span>
            </div>
        `;
        forumList.appendChild(postElement);
    });
}

function filterForum() {
    const search = document.getElementById('forumSearch').value.toLowerCase();
    const category = document.getElementById('forumCategory').value;

    const filtered = userData.forum.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(search);
        const matchesCategory = !category || post.category === category;
        return matchesSearch && matchesCategory;
    });

    const forumList = document.getElementById('forumPostsList');
    forumList.innerHTML = '';

    if (filtered.length === 0) {
        forumList.innerHTML = '<p style="text-align: center; color: #94a3b8; padding: 2rem;">No discussions found.</p>';
        return;
    }

    filtered.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'forum-post';
        postElement.innerHTML = `
            <div class="forum-post-header">
                <div>
                    <span class="forum-post-category">${post.category}</span>
                    <h3 class="forum-post-title">${post.title}</h3>
                    <p class="forum-post-meta">Posted by <strong>${post.author}</strong></p>
                </div>
            </div>
            <div class="forum-post-stats">
                <span><i class="fas fa-comments"></i> ${post.replies} replies</span>
            </div>
        `;
        forumList.appendChild(postElement);
    });
}

// ============================================
// PROFILE PAGE
// ============================================

function loadProfilePage() {
    document.getElementById('profileName').textContent = userData.name;
    document.getElementById('profileEmail').textContent = userData.email;
    document.getElementById('profileJoinDate').textContent = `Joined: ${userData.joinDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;
    document.getElementById('profileCoursesEnrolled').textContent = userData.enrolledCourses.length;
    document.getElementById('profileCoursesCompleted').textContent = userData.completedCourses;
    document.getElementById('profilePoints').textContent = userData.points;
    document.getElementById('profileStreak').textContent = userData.streak;

    const achievementsContainer = document.getElementById('profileAchievements');
    achievementsContainer.innerHTML = '';

    const achievements = [
        { icon: 'fire', label: 'Streak Master', earned: userData.streak >= 7 },
        { icon: 'star', label: 'Course Collector', earned: userData.enrolledCourses.length >= 5 },
        { icon: 'trophy', label: 'Achiever', earned: userData.completedCourses >= 2 }
    ];

    achievements.forEach(achievement => {
        if (achievement.earned) {
            const badge = document.createElement('div');
            badge.className = 'badge';
            badge.innerHTML = `<i class="fas fa-${achievement.icon}"></i><span>${achievement.label}</span>`;
            achievementsContainer.appendChild(badge);
        }
    });
}

// ============================================
// WISHLIST PAGE
// ============================================

function loadWishlistPage() {
    const wishlistContainer = document.getElementById('wishlistCourses');
    wishlistContainer.innerHTML = '';

    if (userData.wishlist.length === 0) {
        wishlistContainer.innerHTML = '<p style="text-align: center; color: #94a3b8; padding: 2rem;">Your wishlist is empty. <a href="#" onclick="showPage(\'courses\')">Browse courses</a> to add some!</p>';
        return;
    }

    userData.wishlist.forEach(courseId => {
        const course = coursesDatabase.find(c => c.id === courseId);
        if (course) {
            const card = createCourseCard(course);
            wishlistContainer.appendChild(card);
        }
    });
}

function toggleWishlist() {
    if (!window.currentCourse) return;

    const index = userData.wishlist.indexOf(window.currentCourse.id);
    if (index > -1) {
        userData.wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    } else {
        userData.wishlist.push(window.currentCourse.id);
        showNotification('Added to wishlist');
    }

    const wishBtn = document.querySelector('.course-actions .btn-icon');
    if (wishBtn) {
        wishBtn.innerHTML = index > -1 ? '<i class="far fa-heart"></i>' : '<i class="fas fa-heart"></i>';
    }
}

// ============================================
// SETTINGS PAGE
// ============================================

function saveSettings() {
    userData.name = document.getElementById('settingName').value || userData.name;
    userData.email = document.getElementById('settingEmail').value || userData.email;
    userData.bio = document.getElementById('settingBio').value || userData.bio;
    
    document.getElementById('navUserName').textContent = userData.name;
    showNotification('✓ Settings saved successfully!');
}

// ============================================
// QUIZ SYSTEM - ENHANCED
// ============================================

let currentQuiz = null;
let currentQuestionIndex = 0;
let quizAnswers = {};

function openQuiz() {
    if (!window.currentCourse || !window.currentCourse.quiz) {
        showNotification('No quiz available for this course');
        return;
    }

    currentQuiz = window.currentCourse.quiz;
    currentQuestionIndex = 0;
    quizAnswers = {};

    document.getElementById('quizTitle').textContent = `${window.currentCourse.title} - Quiz`;
    showQuizQuestion();
    document.getElementById('quizModal').classList.add('active');
}

function showQuizQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const quizContent = document.getElementById('quizContent');
    
    quizContent.innerHTML = `
        <div class="quiz-question">
            <h3>${question.question}</h3>
            <div class="quiz-options">
                ${question.options.map((option, idx) => `
                    <div class="quiz-option ${quizAnswers[currentQuestionIndex] === idx ? 'selected' : ''}" 
                         onclick="selectAnswer(${idx})">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.getElementById('quizProgress').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;
    
    const nextBtn = document.getElementById('quizNextBtn');
    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
        nextBtn.textContent = 'Submit Quiz';
    } else {
        nextBtn.textContent = 'Next';
    }
}

function selectAnswer(index) {
    quizAnswers[currentQuestionIndex] = index;
    showQuizQuestion();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuizQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        showQuizQuestion();
    } else {
        submitQuiz();
    }
}

function submitQuiz() {
    let correct = 0;
    currentQuiz.questions.forEach((q, idx) => {
        if (quizAnswers[idx] === q.correct) {
            correct++;
        }
    });

    const score = Math.round((correct / currentQuiz.questions.length) * 100);
    const points = Math.round(score / 10) * 10;

    userData.points += points;
    
    showNotification(`🎉 Quiz Complete! Score: ${score}% (+${points} points)`);
    closeQuizModal();
}

function closeQuizModal() {
    document.getElementById('quizModal').classList.remove('active');
}

// ============================================
// REVIEWS SYSTEM
// ============================================

function showReviewForm() {
    document.getElementById('reviewModal').classList.add('active');
}

function closeReviewModal() {
    document.getElementById('reviewModal').classList.remove('active');
}

let currentReviewRating = 0;

function setReviewRating(rating) {
    currentReviewRating = rating;
    const stars = document.querySelectorAll('#reviewStars i');
    stars.forEach((star, idx) => {
        if (idx < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function submitReview() {
    const reviewText = document.getElementById('reviewText').value;
    
    if (!reviewText || currentReviewRating === 0) {
        showNotification('Please provide a rating and review text');
        return;
    }

    const newReview = {
        author: userData.name,
        rating: currentReviewRating,
        text: reviewText
    };

    if (!window.currentCourse.reviews) {
        window.currentCourse.reviews = [];
    }

    window.currentCourse.reviews.push(newReview);
    userData.reviews.push({
        courseId: window.currentCourse.id,
        ...newReview
    });

    showNotification('✓ Review submitted successfully!');
    closeReviewModal();
    
    // Reload reviews
    loadCourseReviews();
}

function loadCourseReviews() {
    if (!window.currentCourse) return;

    const reviewsList = document.getElementById('courseReviewsList');
    reviewsList.innerHTML = '';

    if (!window.currentCourse.reviews || window.currentCourse.reviews.length === 0) {
        reviewsList.innerHTML = '<p>No reviews yet. Be the first to review this course!</p>';
        return;
    }

    window.currentCourse.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-item';
        reviewElement.innerHTML = `
            <div class="review-header">
                <div class="review-author">${review.author}</div>
                <div class="review-rating">${'⭐'.repeat(review.rating)}</div>
            </div>
            <div class="review-text">${review.text}</div>
        `;
        reviewsList.appendChild(reviewElement);
    });
}

// ============================================
// COURSES PAGE FUNCTIONALITY - ENHANCED
// ============================================

function loadCoursesPage() {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = '';

    coursesDatabase.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesGrid.appendChild(courseCard);
    });
}

function createCourseCard(course) {
    const isEnrolled = userData.enrolledCourses.some(c => c.id === course.id);
    const isWishlisted = userData.wishlist.includes(course.id);
    
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
        <div class="card-image">
            <i class="fas fa-graduation-cap"></i>
        </div>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-meta">
            <span class="instructor">Level: ${course.level}</span>
            <span class="rating">⭐ ${course.rating}</span>
        </div>
        <button onclick="viewCourseDetail(${course.id})" class="btn-primary">
            ${isEnrolled ? 'Continue Learning' : 'View Details'}
        </button>
    `;
    return card;
}

function viewCourseDetail(courseId) {
    const course = coursesDatabase.find(c => c.id === courseId);
    if (!course) return;

    window.currentCourse = course;

    document.getElementById('courseDetailTitle').textContent = course.title;
    document.getElementById('courseDetailDesc').textContent = course.description;
    document.getElementById('courseDuration').textContent = `${course.duration} hours`;
    document.getElementById('courseLevel').textContent = course.level;
    document.getElementById('courseVideos').textContent = `${course.videoCount} videos`;
    document.getElementById('courseRating').textContent = course.rating;

    // Load modules
    const modulesList = document.getElementById('courseModulesList');
    modulesList.innerHTML = '';
    course.modules.forEach(module => {
        const moduleItem = document.createElement('div');
        moduleItem.className = 'module-item';
        moduleItem.innerHTML = `
            <i class="fas fa-play-circle"></i>
            <span>${module}</span>
        `;
        modulesList.appendChild(moduleItem);
    });

    loadCourseReviews();
    openCourseModal();

    // Update wishlist heart icon
    const wishBtn = document.querySelector('.course-actions .btn-icon');
    if (wishBtn) {
        wishBtn.innerHTML = userData.wishlist.includes(course.id) ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
    }
}

function openCourseModal() {
    document.getElementById('courseModal').classList.add('active');
}

function closeCourseModal() {
    document.getElementById('courseModal').classList.remove('active');
}

function startCourse() {
    if (!window.currentCourse) return;
    
    enrollCourse(window.currentCourse.title);
    
    // Open quiz if available
    if (window.currentCourse.quiz) {
        setTimeout(() => {
            const startQuiz = confirm('This course has a quiz. Would you like to take it?');
            if (startQuiz) {
                openQuiz();
            }
        }, 500);
    } else {
        closeCourseModal();
        openVideoModal();
    }
}

function enrollCourse(courseName) {
    const course = coursesDatabase.find(c => c.title === courseName);
    
    if (!course) return;
    
    if (userData.enrolledCourses.some(c => c.id === course.id)) {
        return;
    }
    
    userData.enrolledCourses.push({
        id: course.id,
        title: course.title,
        progress: 0,
        startDate: new Date(),
        videosWatched: 0
    });

    userData.points += 100;
    showNotification(`✓ Successfully enrolled in ${courseName}! (+100 points)`);
    updateProgressMetrics();
}

// ============================================
// FILTER AND SEARCH COURSES - ENHANCED
// ============================================

function filterCourses() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const coursesGrid = document.getElementById('coursesGrid');
    
    coursesGrid.innerHTML = '';

    const filteredCourses = coursesDatabase.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm) || 
                             course.description.toLowerCase().includes(searchTerm) ||
                             course.instructor.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || course.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    if (filteredCourses.length === 0) {
        coursesGrid.innerHTML = '<p style="text-align: center; padding: 2rem; color: #94a3b8;">No courses found. Try different filters.</p>';
        return;
    }

    filteredCourses.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesGrid.appendChild(courseCard);
    });
}

// ============================================
// VIDEO PLAYER FUNCTIONALITY
// ============================================

function openVideoModal() {
    if (window.currentCourse) {
        document.getElementById('videoTitle').textContent = window.currentCourse.title;
        document.getElementById('videoFrame').src = window.currentCourse.videoUrl;
    }
    document.getElementById('videoModal').classList.add('active');
}

function closeVideoModal() {
    document.getElementById('videoModal').classList.remove('active');
    document.getElementById('videoFrame').src = '';
}

function markAsWatched() {
    if (!window.currentCourse) return;

    const enrolledCourse = userData.enrolledCourses.find(c => c.id === window.currentCourse.id);
    if (enrolledCourse) {
        enrolledCourse.videosWatched++;
        enrolledCourse.progress = Math.min((enrolledCourse.videosWatched / window.currentCourse.videoCount) * 100, 100);

        userData.points += 50;

        if (enrolledCourse.progress >= 100) {
            markCourseComplete(window.currentCourse.id);
        }

        updateProgressMetrics();
        showNotification('✓ Video marked as watched! (+50 points)');
    }
}

function shareCourseModal() {
    if (window.currentCourse) {
        showNotification(`📤 Course "${window.currentCourse.title}" shared!`);
    }
}

// ============================================
// PROGRESS PAGE FUNCTIONALITY - ENHANCED
// ============================================

function loadProgressPage() {
    updateProgressMetrics();
    loadEnrolledCourses();
}

function updateProgressMetrics() {
    const enrolledCount = userData.enrolledCourses.length;
    const completedCount = userData.enrolledCourses.filter(c => c.progress >= 100).length;
    const totalHours = userData.enrolledCourses.reduce((sum, course) => {
        const courseData = coursesDatabase.find(cd => cd.id === course.id);
        return sum + (courseData ? courseData.duration : 0);
    }, 0);
    const overallProgress = enrolledCount > 0 
        ? Math.round(userData.enrolledCourses.reduce((sum, c) => sum + c.progress, 0) / enrolledCount)
        : 0;

    document.getElementById('enrolledCount').textContent = enrolledCount;
    document.getElementById('completedCount').textContent = completedCount;
    document.getElementById('totalHours').textContent = totalHours;
    document.getElementById('overallProgress').textContent = overallProgress + '%';
}

function loadEnrolledCourses() {
    const enrolledList = document.getElementById('enrolledCoursesList');
    enrolledList.innerHTML = '';

    if (userData.enrolledCourses.length === 0) {
        enrolledList.innerHTML = '<p style="text-align: center; color: #94a3b8; padding: 2rem;">No courses enrolled yet. <a href="#" onclick="showPage(\'courses\')">Browse courses</a></p>';
        return;
    }

    userData.enrolledCourses.forEach(enrolledCourse => {
        const courseData = coursesDatabase.find(c => c.id === enrolledCourse.id);
        if (courseData) {
            const progressItem = document.createElement('div');
            progressItem.className = 'progress-item';
            progressItem.innerHTML = `
                <div class="progress-item-info">
                    <h4>${courseData.title}</h4>
                    <p>Started: ${new Date(enrolledCourse.startDate).toLocaleDateString()}</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${enrolledCourse.progress}%"></div>
                    </div>
                </div>
                <div class="progress-item-status">
                    <strong>${Math.round(enrolledCourse.progress)}%</strong>
                </div>
            `;
            enrolledList.appendChild(progressItem);
        }
    });
}

function markCourseComplete(courseId) {
    const enrolledCourse = userData.enrolledCourses.find(c => c.id === courseId);
    if (enrolledCourse) {
        enrolledCourse.progress = 100;
        userData.completedCourses += 1;
        userData.points += 500;
        showNotification('🎉 Congratulations! Course completed! (+500 points)');
    }
}

// ============================================
// CERTIFICATE PAGE - ENHANCED
// ============================================

function loadCertificatePage() {
    const currentDate = new Date();
    const certDate = userData.internshipEndDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('certName').textContent = userData.name;
    document.getElementById('certDate').textContent = certDate;
    document.getElementById('certID').textContent = 'CERT-2026-' + String(Math.floor(Math.random() * 10000)).padStart(5, '0');

    if (userData.completedCourses > 0) {
        document.getElementById('certCourse').textContent = 'E-Learning Comprehensive Program';
    } else {
        document.getElementById('certCourse').textContent = 'E-Learning Internship Program';
    }
}

function downloadCertificate() {
    showNotification('📥 Certificate download feature would be implemented here!');
}

function shareCertificate() {
    showNotification('📤 Certificate share feature would be implemented here!');
}

// ============================================
// UTILITY FUNCTIONS - ENHANCED
// ============================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function logout() {
    showNotification('👋 Logged out successfully!');
    setTimeout(() => {
        location.reload();
    }, 1000);
}

// ============================================
// MODAL MANAGEMENT - ENHANCED
// ============================================

window.onclick = function(event) {
    const videoModal = document.getElementById('videoModal');
    const courseModal = document.getElementById('courseModal');
    const quizModal = document.getElementById('quizModal');
    const reviewModal = document.getElementById('reviewModal');

    if (event.target === videoModal) {
        videoModal.classList.remove('active');
        document.getElementById('videoFrame').src = '';
    }

    if (event.target === courseModal) {
        courseModal.classList.remove('active');
    }

    if (event.target === quizModal) {
        quizModal.classList.remove('active');
    }

    if (event.target === reviewModal) {
        reviewModal.classList.remove('active');
    }
}

// ============================================

// ============================================

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('videoModal').classList.remove('active');
        document.getElementById('courseModal').classList.remove('active');
        document.getElementById('quizModal').classList.remove('active');
        document.getElementById('reviewModal').classList.remove('active');
    }
});

// ============================================
// INITIALIZE PAGE 
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const internshipEndDate = new Date();
    internshipEndDate.setMonth(internshipEndDate.getMonth() + 3);
    setInternshipEndDate(internshipEndDate);

    // Load dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    loadCoursesPage();

    // Add default enrolled courses
    userData.enrolledCourses.push(
        {
            id: 1,
            title: 'Web Development Basics',
            progress: 65,
            startDate: new Date('2026-01-15'),
            videosWatched: 16
        },
        {
            id: 2,
            title: 'Advanced JavaScript',
            progress: 40,
            startDate: new Date('2026-02-01'),
            videosWatched: 14
        }
    );

    userData.points = 450;
    updateProgressMetrics();
    document.getElementById('navUserName').textContent = userData.name;
});

// ============================================
// ADDITIONAL HELPER FUNCTIONS
// ============================================

function setInternshipEndDate(date) {
    userData.internshipEndDate = new Date(date);
}
