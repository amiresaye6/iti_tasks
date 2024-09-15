function openAutoScrollWindow() {
    const newWindow = window.open('', '', `width=${window.innerWidth / 3},height=${window.innerHeight / 3}`);

    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Auto Scroll</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                #content {
                    margin: 20px;
                }
                .text {
                    font-size: 32px;
                }
            </style>
        </head>
        <body>
            <div id="content" class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis est in ex laoreet, ut posuere justo consequat.
                Sed volutpat quam ac lacus facilisis convallis. Cras nec mi purus. Fusce ornare pretium magna a tempus. Aenean dapibus 
                malesuada leo non luctus. Nullam gravida gravida nibh, ut ultrices orci dictum ac. Integer sed orci mi. Nam ullamcorper 
                nunc eget venenatis posuere. Nulla facilisi. Pellentesque gravida felis ligula, id ullamcorper orci fermentum ut. 
                Praesent fermentum pharetra risus. Integer porttitor dapibus eros, sed dapibus velit facilisis ac. Etiam condimentum, 
                ligula id aliquam viverra, augue justo bibendum orci, sit amet sodales purus metus sit amet nulla. Etiam tincidunt metus 
                nulla, et dictum felis congue at. Ut condimentum orci quis risus lacinia, sed sollicitudin lectus aliquam. Nam sit amet 
                aliquet lectus. Donec tempus odio a ligula ullamcorper, sed vestibulum elit malesuada. Sed sit amet lectus fermentum, 
                efficitur velit a, consectetur dui. Integer feugiat ipsum a arcu pharetra, ac fermentum leo vehicula.
                ... (repeat to add enough content to scroll)
            </div>
            <script>
                function autoScrollToBottom() {
                    const scrollSpeed = 2;
                    const scrollInterval = 10;
                    let scrollPosition = 0;

                    const scroll = setInterval(() => {
                        scrollPosition += scrollSpeed;
                        window.scrollTo(0, scrollPosition);

                        const scrollHeight = document.documentElement.scrollHeight;
                        const viewportHeight = window.innerHeight;

                        if (scrollPosition + viewportHeight >= scrollHeight) {
                            clearInterval(scroll);
                            window.close();
                        }
                    }, scrollInterval);
                }

                window.onload = autoScrollToBottom;
            <\/script>
        </body>
        </html>
    `);

    newWindow.document.close();
}
