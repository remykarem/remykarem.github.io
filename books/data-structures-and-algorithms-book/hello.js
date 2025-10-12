window.onload = function() {

    // Get all elements
    var svgs = document.getElementsByTagName('svg');
    var backButton = document.getElementById('backButton');
    var nextButton = document.getElementById('nextButton');

    function showImage(index) {
        for (var i = 0; i < svgs.length; i++) {
            svgs[i].classList.add('inactive');
        }
        svgs[index].classList.remove('inactive');
    }

    // If there are no svgs, don't proceed
    if (svgs.length == 0) {
        return;
    }

    // Define current index to be the first svg
    var currentIndex = 0;

    // Show the first image by default
    showImage(currentIndex);

    // Define back button behaviour
    backButton.addEventListener('click', function() {
        currentIndex = currentIndex === 0 ? svgs.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    });

    // Define next button behaviour
    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % svgs.length;
        showImage(currentIndex);
    });
}