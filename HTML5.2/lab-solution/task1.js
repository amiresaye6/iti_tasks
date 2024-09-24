const box = document.getElementById('box');
        const cont = document.getElementById('cont');
        const startButton = document.getElementById('startButton');
        const pauseButton = document.getElementById('pauseButton');
        const stopButton = document.getElementById('stopButton');

        let positionX = 0;
        let positionY = 0;
        let directionX = 2;
        let directionY = 0;
        let animationFrameId;
        let isMoving = false;
        let isHovered = false;
        let colorDecider = 0;

        function changeColor() {
            const colors = ['red', 'blue', 'green', 'orange'];
            box.style.backgroundColor = colors[colorDecider > 3 ? colorDecider = 0 : colorDecider++];
        }
        changeColor();

        function moveBox() {
            if (isHovered) return; // Prevent moving when hovering on the container

            positionX += directionX;
            positionY += directionY;

            if (positionX >= 450 && positionY === 0) {
                directionX = 0;
                directionY = 2;
                changeColor();
            } else if (positionX >= 450 && positionY >= 450) {
                directionX = -2;
                directionY = 0;
                changeColor();
            } else if (positionX <= 0 && positionY >= 450) {
                directionX = 0;
                directionY = -2;
                changeColor();
            } else if (positionX <= 0 && positionY <= 0) {
                directionX = 2;
                directionY = 0;
                changeColor();
            }

            box.style.left = positionX + 'px';
            box.style.top = positionY + 'px';

            animationFrameId = requestAnimationFrame(moveBox);
        }

        startButton.addEventListener('click', () => {
            if (!isMoving) {
                isMoving = true;
                moveBox();
                box.classList.remove('paused');
            }
            // Remove scaling class when starting movement again
            cont.classList.remove('scale-enabled');
        });

        pauseButton.addEventListener('click', () => {
            isMoving = false;
            cancelAnimationFrame(animationFrameId);
            // Add scaling class when paused
            cont.classList.add('scale-enabled');
        });

        stopButton.addEventListener('click', () => {
            isMoving = false;
            cancelAnimationFrame(animationFrameId);
            positionX = 0;
            positionY = 0;
            box.style.left = '0px';
            box.style.top = '0px';
            box.style.backgroundColor = 'red';
            box.classList.remove('paused');
            // Remove scaling class when stopping
            cont.classList.remove('scale-enabled');
        });

        // Pause movement and animation when hovering on the outer container
        cont.addEventListener('mouseenter', () => {
            isHovered = true;
        });

        cont.addEventListener('mouseleave', () => {
            isHovered = false;
            if (isMoving) {
                moveBox(); // Resume movement after hover ends
            }
        });