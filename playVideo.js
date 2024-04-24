
document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll('.sci-video');

    videos.forEach(video => {
        // Listen for click event on each video
        video.addEventListener('click', function() {
            if (video.requestFullscreen) {
                video.requestFullscreen().then(() => {
                    video.play();
                    disableControlsInFullscreen(video);
                });
            } else if (video.mozRequestFullScreen) { /* Firefox */
                video.mozRequestFullScreen().then(() => {
                    video.play();
                    disableControlsInFullscreen(video);
                });
            } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                video.webkitRequestFullscreen().then(() => {
                    video.play();
                    disableControlsInFullscreen(video);
                });
            } else if (video.msRequestFullscreen) { /* IE/Edge */
                video.msRequestFullscreen().then(() => {
                    video.play();
                    disableControlsInFullscreen(video);
                });
            }
        });

        // Listen for ended event on each video
        video.addEventListener('ended', function() {
            // Reaload the video
            video.load();

            video.controls = false;

            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }
        });

        // Listen for fullscreen change event
        document.addEventListener('fullscreenchange', function() {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                video.load(); 
            }
            video.controls = false;
        });
    });

    function disableControlsInFullscreen(video) {
        video.controls = true; // Ensure controls are enabled
        video.controlsList = "nodownload noplaybackrate"; // Disable download and playback speed controls
        video.disablePictureInPicture = true; // Disable picture-in-picture mode
    }
});





