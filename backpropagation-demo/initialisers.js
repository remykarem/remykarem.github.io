function uniform(min = -0.05, max = 0.05) {
    return Math.random() * (max - min) + min;
}

// window.x = 5;

function normal(mean = 0, stddev = 0.05) {

    // Marsaglia polar method.
    var y2;
    var use_last = false;

    var y1;
    if (use_last) {
        y1 = y2;
        use_last = false;
    }
    else {
        var x1, x2, w;
        do {
            x1 = 2.0 * Math.random() - 1.0;
            x2 = 2.0 * Math.random() - 1.0;
            w = x1 * x1 + x2 * x2;
        } while (w >= 1.0);
        w = Math.sqrt((-2.0 * Math.log(w)) / w);
        y1 = x1 * w;
        y2 = x2 * w;
        use_last = true;
    }

    var retval = mean + stddev * y1;
    if (retval > 0)
        return retval;
    return -retval;
}

function truncatedNormal(mean = 0, stddev = 0.05) {
    // Values more than 2 stddev from mean are discarded and redrawn
    var redraw = true;
    var x;
    var thresholdLower = mean - 2 * stddev;
    var thresholdUpper = mean + 2 * stddev;

    while (redraw) {
        x = normal(mean, stddev);
        if (x > thresholdUpper || x < thresholdLower) {
            redraw = true;
        } else {
            redraw = false;
        }
    }
    return x;
}

function glorotNormal(mean = 0, stddev = Math.sqrt(2 / (2 + 1))) {
    return truncatedNormal(mean, stddev);
}

function glorotUniform(min = -Math.sqrt(6 / (2 + 1), max = Math.sqrt(6 / (2 + 1)))) {
    return uniform(min = -0.05, max = 0.05);
}
