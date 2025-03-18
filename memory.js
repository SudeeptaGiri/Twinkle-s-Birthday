
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Memory data - replace placeholder images with your actual images and add your captions
        const memories = [
            {
                image: "photo-1.jpg",
                caption: "Funny how life works, right? We always take good photos together before we even knew we’d be best friends. Now, I can't imagine life without you. Even aunty had to ask who this guy was—guess she didn't know I'd stick around! 😂 Happy Birthday, my best friend! 💙",
                isGif: false,
                rotationAngle: -2,
                emoji: "🌊"
            },
            {
                image: "photo-2.jpg",
                caption: "The library cubicles weren’t just for studying—they were our little escape. Every free moment, every evening, we’d find our way there… sometimes to study, but mostly for our endless talks. Those moments are some of my favorites. Happy Birthday to my favorite library partner! 📚💙",
                isGif: false,
                rotationAngle: 3,
                emoji: "🌅"
            },
            {
                image: "photo-3.jpg",
                caption: "This photo isn’t just about winning—it’s about the journey. The first time I traveled so far, the excitement, the nerves, and then the pure bliss of that moment when we won. Sharing that experience with you made it even more special. Happy Birthday to my best friend and favorite adventure buddy! 💙🎉",
                isGif: true,
                rotationAngle: -1,
                emoji: "🚗"
            },
            {
                image: "photo-4.jpg",
                caption: "This photo holds more than just a memory—it’s a reminder of how you stayed by my side when things felt the hardest. You lifted me up, brought light into my darkest days, and made everything feel a little easier just by being there. I couldn’t have made it through without you. Happy Birthday! 💙",
                isGif: false,
                rotationAngle: 2,
                emoji: "🍕"
            },
            {
                image: "photo-5.jpg",
                caption: "Our first Dussehra—hostel rules were as annoying as ever, but that never stopped us. You coming out in sliders, us swapping shoes, those endless EV rides… just doing our thing, making memories. Can’t imagine those days without you. Happy Birthday, my partner in all the fun! 💙🎉",
                isGif: false,
                rotationAngle: -3,
                emoji: "🏕️"
            },
            {
                image: "photo-6.jpg",
                caption: "New Year’s Eve—dancing, laughing, living in the moment. I know for sure I wouldn’t have been there if it weren’t for you. Probably would’ve just stayed in my room, doing the usual. But you? You make life more fun, more memorable. Grateful for every moment with you. Happy Birthday! 💙🎉",
                isGif: true,
                rotationAngle: 1,
                emoji: "🎵"
            },
            {
                image: "photo-7.jpg",
                caption: "Back then, we didn’t even know what ‘cafe hopping’ was—we just loved exploring places with didi, enjoying the vibes, and making memories. Never imagined I’d get into all this, but with you, every little thing turns into an adventure. Happy Birthday to my favorite cafe buddy! ☕💙",
                isGif: false,
                rotationAngle: -2,
                emoji: "🏰"
            },
            {
                image: "photo-8.jpg",
                caption: "My birthday treat, our usual cafe hangout—just another day that felt special because you were there. Back then, we didn’t even think about it much, but looking back, these moments mean so much. With you, even the simplest things turn into memories I’ll always hold on to. Happy Birthday, my favorite person! 💙🎉",
                isGif: false,
                rotationAngle: 2,
                emoji: "🏖️"
            },
            {
                image: "photo-9.jpg",
                caption: "From late-night prep sessions to the nervous excitement of interviews, we went through it all together. And then, within a month, we both landed our jobs—it still feels unreal. Preparing with you made the whole journey so much more fun. Happy Birthday to my best friend and the best placement buddy ever! 💙🎉",
                isGif: false,
                rotationAngle: -1,
                emoji: "💕"
            },
            {
                image: "photo-10.jpg",
                caption: "A so-called Pinterest click—well, for you at least.you are effortlessly aesthetic, while I’m just there trying my best. But standing next to you? Maybe that adds a little style to me too. Happy Birthday to my effortlessly cool best friend! 💙✨",
                isGif: true,
                rotationAngle: 3,
                emoji: "🎂"
            },
                        {
                image: "photo-11.jpg",
                caption: "Just a random click from a random day—post-placement, just living in the moment, thinking we were counting down our last days together. Little did we know, we’d end up in the same city. Happy Birthday to my always-there-for-me person! 💙✨",
                isGif: true,
                rotationAngle: 3,
                emoji: "🎂"
            },
                        {
                image: "photo-12.jpg",
                caption: "31st night—just a random plan to catch the last sunset of the year at the beach. We had no idea it would turn into such a perfect day. The waves, the fun—what a way to end the year. So glad I got to spend it with you. Happy Birthday! 💙🌅",
                isGif: true,
                rotationAngle: 3,
                emoji: "🎂"
            },
                        {
                image: "photo-13.jpg",
                caption: "Finally made it to your home—never thought I’d have this kind of bond with aunty, but here we are! From just friends to ‘ghar wali dosti,’ it’s been a journey. Some things in life just happen naturally, and this friendship is one of them. Happy Birthday! 💙🏡",
                isGif: true,
                rotationAngle: 3,
                emoji: "🎂"
            }
        ];

        // Create confetti elements
        function createConfetti() {
            const confettiContainer = document.getElementById('confetti-container');
            const colors = ['#ff6ec4', '#a485ff', '#ff4e91', '#c175ff', '#75c6ff'];
            
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-piece';
                
                // Random styles
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.width = Math.random() * 15 + 5 + 'px';
                confetti.style.height = Math.random() * 15 + 5 + 'px';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                
                // Animation
                const duration = Math.random() * 3 + 3;
                const delay = Math.random() * 5;
                
                confetti.style.animation = `floatDown ${duration}s ease-in ${delay}s infinite`;
                confetti.style.opacity = Math.random();
                
                confettiContainer.appendChild(confetti);
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            createConfetti();
            
            const galleryElement = document.getElementById('memoryGallery');
            const startSlideshowBtn = document.getElementById('startSlideshow');
            const pauseSlideshowBtn = document.getElementById('pauseSlideshow');
            const backButton = document.getElementById('backButton');
            const nextButton = document.getElementById('nextButton');
            
            let slideshowInterval;
            let currentSlide = 0;

            // Generate memory cards
            memories.forEach((memory, index) => {
                const memoryCard = document.createElement('div');
                memoryCard.className = 'memory-card';
                memoryCard.style.setProperty('--rotate', `${memory.rotationAngle}deg`);
                
                const tapeElement = document.createElement('div');
                tapeElement.className = 'card-tape';
                tapeElement.style.setProperty('--rotate', `${memory.rotationAngle * 2}deg`);
                
                const imgElement = document.createElement('img');
                imgElement.className = 'memory-img';
                imgElement.src = memory.image;
                imgElement.alt = `Memory ${index + 1}`;
                
                const captionElement = document.createElement('div');
                captionElement.className = 'memory-caption';
                captionElement.textContent = memory.caption;
                
                const stickerElement = document.createElement('div');
                stickerElement.className = 'card-sticker';
                stickerElement.innerHTML = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#ff6ec4" />
                    <text x="50" y="65" font-family="Arial" font-size="40" text-anchor="middle" fill="white">${memory.emoji}</text>
                </svg>`;
                
                memoryCard.appendChild(tapeElement);
                memoryCard.appendChild(imgElement);
                memoryCard.appendChild(captionElement);
                memoryCard.appendChild(stickerElement);
                galleryElement.appendChild(memoryCard);
            });
            // After all cards are created, add click event listeners
            document.querySelectorAll('.memory-card').forEach(card => {
    card.addEventListener('click', function() {
        console.log('Card clicked!'); 
        const caption = this.querySelector('.memory-caption');
        if (caption) {
            caption.classList.toggle('active'); // Toggle the class on click
        }
    });
});


            // Make slideshow controls visible
            document.querySelector('.slideshow-controls').style.opacity = '1';

            // Intersection Observer to animate cards as they enter viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });

            // Observe all memory cards
            document.querySelectorAll('.memory-card').forEach(card => {
                observer.observe(card);
                
                // Add animation delay for staggered effect
                const index = Array.from(galleryElement.children).indexOf(card);
                card.style.animationDelay = `${0.1 * index}s`;
                
                // Make all cards visible initially
                setTimeout(() => {
                    card.classList.add('visible');
                }, 500 + (index * 150));
            });

            // Fixed slideshow functionality
            function startSlideshow() {
                startSlideshowBtn.style.display = 'none';
                pauseSlideshowBtn.style.display = 'flex';
                
                // Clear any existing interval to avoid multiple slideshows
                if (slideshowInterval) {
                    clearInterval(slideshowInterval);
                }
                
                slideshowInterval = setInterval(() => {
                    // Move to next slide
                    currentSlide = (currentSlide + 1) % memories.length;
                    
                    // Calculate the scroll position of the current slide
                    const cards = galleryElement.querySelectorAll('.memory-card');
                    if (cards && cards.length > 0 && cards[currentSlide]) {
                        const cardRect = cards[currentSlide].getBoundingClientRect();
                        const galleryRect = galleryElement.getBoundingClientRect();
                        
                        // Scroll to center the current card
                        galleryElement.scrollTo({
                            left: cards[currentSlide].offsetLeft - (galleryRect.width / 2) + (cardRect.width / 2),
                            behavior: 'smooth'
                        });
                    }
                }, 2000); // Change slide every 3 seconds
            }

            function pauseSlideshow() {
                pauseSlideshowBtn.style.display = 'none';
                startSlideshowBtn.style.display = 'flex';
                
                // Clear interval to stop slideshow
                if (slideshowInterval) {
                    clearInterval(slideshowInterval);
                    slideshowInterval = null;
                }
            }

            // Event listeners for slideshow controls
            startSlideshowBtn.addEventListener('click', startSlideshow);
            pauseSlideshowBtn.addEventListener('click', pauseSlideshow);

            // Event listeners for navigation buttons
            backButton.addEventListener('click', function() {
                window.location.href = 'index.html'; // Adjust this to your welcome page URL
            });

            nextButton.addEventListener('click', function() {
                window.location.href = 'cake.html'; // Adjust this to your next surprise page URL
            });

            // Scroll animations with GSAP
            gsap.from('.header', {
                duration: 1,
                y: -50,
                opacity: 0,
                ease: 'back.out(1.7)'
            });

            gsap.from('.navigation-buttons', {
                duration: 1,
                y: 50,
                opacity: 0,
                delay: 0.5,
                ease: 'power3.out'
            });

            // Add animation to stickers
            gsap.utils.toArray('.sticker').forEach(sticker => {
                gsap.to(sticker, {
                    rotation: 'random(-20, 20)',
                    duration: 'random(2, 4)',
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            });

            // Create hover effect for memory cards
            document.querySelectorAll('.memory-card').forEach(card => {
                card.addEventListener('mouseenter', function() {
                    gsap.to(this, {
                        scale: 1.05,
                        boxShadow: '0 15px 35px rgba(255, 105, 180, 0.5)',
                        duration: 0.3
                    });
                });
                
                card.addEventListener('mouseleave', function() {
                    gsap.to(this, {
                        scale: 1,
                        boxShadow: '0 10px 25px rgba(255, 105, 180, 0.3)',
                        duration: 0.3
                    });
                });
            });

            // Auto scroll to show the gallery
            setTimeout(() => {
                const galleryContainer = document.querySelector('.gallery-container');
                galleryContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 2000);
        });