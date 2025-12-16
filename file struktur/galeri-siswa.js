// ========================================
// GALERI SISWA XII TJKT B - FIXED VERSION
// Dark Mode sekarang 100% berfungsi!
// ========================================

// Data 35 Siswa 
const students = [
    { name: "Hermansyah Ryan", role: "Ketua Kelas", image: "Ryan.PNG", quote: "Leader bukan bos, tapi partner kerja" },
    { name: "Luluun Lintang Ayu", role: "Wakil Ketua Kelas", image: "luluun.jpg", quote: "Backup yang siap jadi frontline kapan aja" },
    { name: "Meylany Dwi Putri", role: "Sekretaris", image: "melani.jpg", quote: "Catat semuanya, lupa bukan opsi" },
    { name: "Jesica", role: "Bendahara", image: "jesika.jpg", quote: "Kas kelas aman, transparan, tanpa drama" },
    { name: "Fadhil Aria wicaksana", role: "Seksi Kebersihan", image: "fadel.jpeg", quote: "Aku wonge e rapopo paling nak mumet ngaji" },
    { name: "Keysa Rahmadila Azahra", role: "Anggota", image: "keysa.jpg", quote: "Ngonfigurasi router sambil ngopi" },
    { name: "Nico dava Linggar", role: "Anggota", image: "nicho.PNG", quote: "Ngoding sampe pagi, debugging sampe siang" },
    { name: "Sani Ica purniawati", role: "Anggota", image: "sani.jpg", quote: "Inovasi gak perlu mahal, butuh kreativitas" },
    { name: "Imam Taufik", role: "Anggota", image: "imam.jpg", quote: "Belajar konsisten, hasilnya pasti dateng" },
    { name: "Safika Izawati Alira", role: "Anggota", image: "safika.jpg", quote: "Hardware rusak? Gue yang benerin" },
    { name: "Zahra Diah Kamala", role: "Anggota", image: "zahra.jpg", quote: "Desain gue speak louder than words" },
    { name: "Desvita Alviani", role: "Anggota", image: "desvita.jpg", quote: "Challenge accepted, solution delivered" },
    { name: "Anggita Novelia", role: "Anggota", image: "Anggita.jpg", quote: "Focus mode: ON, distraction: OFF" },
    { name: "Aurel Novalia Putri", role: "Anggota", image: "aurel.jpg", quote: "Jaringan down? Tenang, gue handle" },
    { name: "indrian Fatma Dewi", role: "Anggota", image: "indrianii.jpg", quote: "Problem solver, bukan problem maker" },
    { name: "Linaisa Naftalimahakam ", role: "Anggota", image: "linnna.jpg", quote: "UI cantik, UX nyaman, user happy" },
    { name: "Hanifah Hayu virdanur Febriana", role: "Anggota", image: "hanifah.jpg", quote: "Security first, aksesnya belakangan" },
    { name: "Falisha Widiya Nur", role: "Anggota", image: "falis asolole.jpg", quote: "Frontend backend, gue handle semua" },
    { name: "Dimas Yahya", role: "Anggota", image: "dimas asoyyy.jpg", quote: "Data terstruktur, query jadi lebih cepet" },
    { name: "Farhana Meta Mahardika", role: "Anggota", image: "dika .jpg", quote: "Teamwork makes the dream work" },
    { name: "Yurika Nessa Pratiwi", role: "Anggota", image: "yurikaa.jpg", quote: "Fast learner, quick adapter" },
    { name: "Kanya Wihikanesteri", role: "Anggota", image: "kanaya.jpg", quote: "Detail kecil, impact besar" },
    { name: "Tasya Ayu Nadita", role: "Anggota", image: "tasya animek.jpg", quote: "Hardware maintenance adalah seni" },
    { name: "Amelia Apriyani", role: "Anggota", image: "amel12.jpeg", quote: "Cloud computing, masa depan IT" },
    { name: "Agata Kinanti Raras astuti", role: "Anggota", image: "Agata.jpeg", quote: "IoT bukan cuma mimpi, tapi kenyataan" },
    { name: "Zulfikri Amar Okdiansyah", role: "Anggota", image: "amar.jpg", quote: "Sorry bro,the qoutes is under construction" },
    { name: "Rahmat Ardziyanto", role: "Anggota", image: "rahmat.jpg", quote: "IP address kamu berapa sih? Kok susah banget disconnect dari pikiran aku." },
    { name: "Neneng Ariningsih", role: "Anggota", image: "neneng.jpg", quote: "Emang sengaja aku set persistent connection. Biar gak bisa logout dari sistem aku." },
    { name: "Marcellya Anggita", role: "Anggota", image: "marcel.jpeg", quote: "Data gak bohong, analisis gak ngasal" },
    { name: "Shinta Amelia Utami", role: "Anggota", image: "Shinta.jpeg", quote: "Aku tau value aku. Makanya aku pilih-pilih. Dan sepertinya kamu worth it buat waktuku" },
    { name: "Arifin Nur Jannah", role: "Anggota", image: "nur.jpeg", quote: "System admin yang selalu standby" },
    { name: "Nova Perli Putri", role: "Anggota", image: "putri.jpeg", quote: "Content creator dengan sentuhan teknis" },
    { name: "Anung Ariska", role: "Anggota", image: "anung.JPG", quote: "Digital marketing yang paham coding" },
    { name: "Doni Setiawan", role: "Anggota", image: "PP kosong.jpg", quote: "Tech enthusiast sejak kecil" },
    { name: "Elsa Rahmadani", role: "Anggota", image: "PP kosong.jpg", quote: "AI is the future, I'm learning today" }
];

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const searchInput = document.getElementById('searchInput');
const visibleCount = document.getElementById('visibleCount');
const noResults = document.getElementById('noResults');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalQuote = document.getElementById('modalQuote');
const closeModalBtn = document.getElementById('closeModal');
const darkModeToggle = document.getElementById('darkModeToggle');

// Generate Student Cards with staggered animation
function generateStudentCards() {
    students.forEach((student, index) => {
        const card = document.createElement('div');
        card.className = 'student-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <img src="${student.image}" alt="${student.name}" class="student-image" loading="lazy" onerror="this.src='PP kosong.jpg'">
            <div class="student-info">
                <div class="student-name">${student.name}</div>
                <div class="student-role">${student.role}</div>
                <div class="student-quote">"${student.quote}"</div>
            </div>
        `;
        
        // Add click event to open modal
        card.addEventListener('click', () => openModal(student));
        
        galleryGrid.appendChild(card);
    });
}

// Search Functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.student-card');
    let visibleCards = 0;

    cards.forEach(card => {
        const name = card.querySelector('.student-name').textContent.toLowerCase();
        const isMatch = name.includes(searchTerm);
        
        if (isMatch) {
            card.classList.remove('hidden');
            visibleCards++;
        } else {
            card.classList.add('hidden');
        }
    });

    // Update count
    visibleCount.textContent = visibleCards;
    
    // Show/hide no results message
    if (visibleCards === 0) {
        noResults.classList.add('active');
    } else {
        noResults.classList.remove('active');
    }
}

// Modal Functions
function openModal(student) {
    modal.classList.add('active');
    modalImage.src = student.image;
    modalImage.alt = student.name;
    modalName.textContent = student.name;
    modalRole.textContent = student.role;
    modalQuote.textContent = `"${student.quote}"`;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ========================================
// FIXED: Dark Mode Toggle Function
// ========================================
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        // Switch to LIGHT mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        darkModeToggle.innerHTML = '🌙 Dark Mode';
        localStorage.setItem('themeMode', 'light');
        
        // Apply light mode colors
        body.style.backgroundColor = '#f5f7fa';
        body.style.color = '#1a1a1a';
    } else {
        // Switch to DARK mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '☀️ Light Mode';
        localStorage.setItem('themeMode', 'dark');
        
        // Apply dark mode colors
        body.style.backgroundColor = '#1a1d29';
        body.style.color = '#ffffff';
    }
    
    // Smooth transition effect
    body.style.transition = 'background-color 0.4s ease, color 0.4s ease';
}

// ========================================
// Check saved theme preference on load
// ========================================
function checkDarkModePreference() {
    const savedTheme = localStorage.getItem('themeMode');
    const body = document.body;
    
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        darkModeToggle.innerHTML = '🌙 Dark Mode';
        body.style.backgroundColor = '#f5f7fa';
        body.style.color = '#1a1a1a';
    } else {
        // Default to dark mode
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        darkModeToggle.innerHTML = '☀️ Light Mode';
        body.style.backgroundColor = '#1a1d29';
        body.style.color = '#ffffff';
    }
}

// Scroll Animation for Cards
function handleScrollAnimation() {
    const cards = document.querySelectorAll('.student-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => {
        observer.observe(card);
    });
}

// ========================================
// Event Listeners
// ========================================
searchInput.addEventListener('input', handleSearch);
closeModalBtn.addEventListener('click', closeModal);
darkModeToggle.addEventListener('click', toggleDarkMode);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Prevent modal image from closing modal when clicked
if (modalImage) {
    modalImage.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// ========================================
// Initialize on page load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    checkDarkModePreference();
    generateStudentCards();
    handleScrollAnimation();
    
    // Add smooth entrance animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    // Observe all lazy images after they're created
    setTimeout(() => {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }, 500);
}

// ========================================
// Console Easter Egg
// ========================================
console.log('%c🎓 XII TJKT B - Galeri Siswa', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped with ❤️ by XII TJKT B', 'color: #8b5cf6; font-size: 14px;');
console.log('%cSMK Negeri 1 Saptosari', 'color: #10b981; font-size: 12px;');