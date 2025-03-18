
        document.addEventListener('DOMContentLoaded', function() {
            // Fade in animation
            setTimeout(() => {
                document.querySelector('.container').style.opacity = 1;
            }, 500);

            // Typewriter effect for letter
            const letterContent = "To the Sunshine to my cloudy days,\n\nAs I sit here thinking about all our memories together, I can't help but smile. From our late-night talks to our spontaneous adventures, you've filled my life with so much joy and laughter. You've been my shoulder to cry on, my partner in crime, and my biggest supporter.\n\nOn your special day, I want you to know how grateful I am to have you in my life. You make every day brighter just by being you - kind, funny, and incredibly thoughtful.\n\nHappy Birthday to my favorite person in the world! Here's to many more years of friendship, laughter, and creating memories together.\n\nWith all my love,\n your best friend!!";
            
            new Typed('#typed-text', {
                strings: [letterContent],
                typeSpeed: 30,
                showCursor: true,
                cursorChar: '|',
                onComplete: function() {
                    setTimeout(() => {
                        document.querySelector('.surprise-button').classList.add('animate__animated', 'animate__pulse', 'animate__infinite');
                    }, 1000);
                }
            });

            // Create floating elements
            const floatingElements = [
                { type: 'heart', color: '#ff6b8a', size: '20px' },
                { type: 'heart', color: '#f48fb1', size: '30px' },
                { type: 'star', color: '#ffd54f', size: '25px' },
                { type: 'star', color: '#ffecb3', size: '15px' },
                { type: 'teddy', emoji: '🧸', size: '30px' },
                { type: 'sparkle', emoji: '✨', size: '25px' },
                { type: 'sparkle', emoji: '✨', size: '20px' },
                { type: 'heart', color: '#ff6b8a', size: '25px' },
                { type: 'star', color: '#ffd54f', size: '20px' },
                { type: 'teddy', emoji: '🧸', size: '25px' }
            ];

            floatingElements.forEach((element, index) => {
                createFloatingElement(element, index);
            });

            // Cursor effect
            document.addEventListener('mousemove', createCursorEffect);



            // Helper Functions
            function createFloatingElement(element, index) {
                const floatingElement = document.createElement('div');
                floatingElement.classList.add('floating-element');
                
                if (element.emoji) {
                    floatingElement.textContent = element.emoji;
                    floatingElement.style.fontSize = element.size;
                } else if (element.type === 'heart') {
                    floatingElement.innerHTML = '<i class="fas fa-heart"></i>';
                    floatingElement.style.color = element.color;
                    floatingElement.style.fontSize = element.size;
                } else if (element.type === 'star') {
                    floatingElement.innerHTML = '<i class="fas fa-star"></i>';
                    floatingElement.style.color = element.color;
                    floatingElement.style.fontSize = element.size;
                }
                
                // Random positioning
                const randomX = Math.random() * window.innerWidth;
                const randomY = Math.random() * window.innerHeight;
                floatingElement.style.left = `${randomX}px`;
                floatingElement.style.top = `${randomY}px`;
                
                // Animation duration and delay
                const duration = 5 + Math.random() * 10;
                const delay = Math.random() * 5;
                floatingElement.style.animationDuration = `${duration}s`;
                floatingElement.style.animationDelay = `${delay}s`;
                
                document.body.appendChild(floatingElement);
            }

            function createCursorEffect(e) {
                const cursorEffect = document.createElement('div');
                cursorEffect.classList.add('cursor-effect');
                cursorEffect.style.left = `${e.pageX}px`;
                cursorEffect.style.top = `${e.pageY}px`;
                document.body.appendChild(cursorEffect);
                
                setTimeout(() => {
                    cursorEffect.style.opacity = 1;
                    cursorEffect.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.5 + 0.5})`;
                    
                    setTimeout(() => {
                        cursorEffect.style.opacity = 0;
                        setTimeout(() => {
                            cursorEffect.remove();
                        }, 500);
                    }, 300);
                }, 10);
            }
        });
    