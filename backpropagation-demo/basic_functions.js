// Basic functions
function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function mean(arr) {
    return sum(arr) / arr.length;
}

function stddev(arr) {
    var mu = mean(arr);
    var numerator = sum(arr.map(i => (i - mu) ** 2));
    var denominator = arr.length - 1;

    return Math.sqrt(numerator / denominator);
}

function normalise(arr) {
    if (arr.length === 1) {
        return arr;
    } else {
        return arr.map(i => (i - mean(arr)) / stddev(arr));
    }
}