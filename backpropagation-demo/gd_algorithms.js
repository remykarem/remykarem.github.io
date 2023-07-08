function momentum(beta = 0.9) {
    // friction = 0 is just gradient descent
    // don't let the new value affect you
    console.log("Start of momentum.");

    for (var i = 0; i < window.b.length; i++) {
        var newVal = beta * velocity[i][global_step] + (1 - beta) * dy * db[i];
        velocity[i].push(newVal);
    }

    // Debug
    console.log('### For w_2:');
    console.log('    Previously, we changed by ' + velocity[2][global_step]);
    // console.log('    Now, we are supposed to change by ' + newVal);
    console.log('    But we will only change by ' + velocity[2][global_step + 1]);
}

function adam(beta1 = 0.9, beta2 = 0.999, epsilon = 1e-8) {
    // beta1 momentum
    // beta2 rmsprop

    console.log("Start of adam.");

    for (var i = 0; i < window.b.length; i++) {
        var numerator = beta1 * velocity[i][global_step] + (1 - beta1) * dy * db[i];
        var denominator = beta2 * selocity[i][global_step] + (1 - beta2) * (dy * db[i]) ** 2;

        // Bias correction
        console.log(window.global_step);
        var numerator_ = numerator / (1 - beta1 ** (window.global_step + 1));
        var denominator_ = denominator / (1 - beta2 ** (window.global_step + 1));

        velocity[i].push(numerator_);
        selocity[i].push(denominator_);
    }

    // Debug
    console.log('### For w_2:');
    console.log('    Previously, we changed by ' + velocity[2][global_step]);
    // console.log('    Now, we are supposed to change by ' + newVal);
    console.log('    But we will only change by ' + velocity[2][global_step + 1]);
}

function rmsprop(beta = 0.9) {
    // friction = 0 is just gradient descent
    // don't let the new value affect you
    console.log("Start of rmsprop.");

    for (var i = 0; i < window.b.length; i++) {
        var newVal = beta * velocity[i][global_step] + (1 - beta) * (dy * db[i]) ** 2;
        velocity[i].push(newVal);
    }

    // Debug
    console.log('### For w_2:');
    console.log('    Previously, we changed by ' + velocity[2][global_step]);
    // console.log('    Now, we are supposed to change by ' + newVal);
    console.log('    But we will only change by ' + velocity[2][global_step + 1]);
}

function nesterov(beta = 0.9) {
    // Use underscore namespace to avoid collision with window. namespaces
    console.log("Start of Nesterov.");

    // Update future weights based on current velocity
    var weights_ = [];
    for (var i = 0; i < window.num_b; i++) {
        weights_[i] = window.b[i][global_step] - window.lr * window.velocity[i][global_step];
    }

    console.log("Current velocity: " + velocity[2][global_step]);
    console.log("Proposed weights: " + weights_);

    // Calculate y_preds
    var y_preds_ = [];
    for (var j = 0; j < window.batchSize; j++) {
        y_preds_[j] = weights_[1] * window.batch_x1[j] + weights_[2] * window.batch_x2[j] + weights_[0];
    }

    console.log("Proposed y_pred: " + y_preds_);

    // Calculate dL/dy
    var dy_ = 2 * (y_preds_.reduce((a, b) => a + b, 0) - window.batch_y.reduce((a, b) => a + b, 0)) / window.batchSize;

    console.log('Proposed dL/dy: ' + dy_);

    // Calculate dy_pred/db
    var db_ = [];
    db_[0] = 1;
    db_[1] = window.batch_x1.reduce((a, b) => a + b, 0) / window.batchSize;
    db_[2] = window.batch_x2.reduce((a, b) => a + b, 0) / window.batchSize;

    console.log('Proposed dy/dw: ' + db_);

    var rateOfChange = [dy_ * db_[0], dy_ * db_[1], dy_ * db_[2]];

    console.log(rateOfChange);

    for (var i = 0; i < window.b.length; i++) {
        var newVal = beta * window.velocity[i][global_step] + (1 - beta) * rateOfChange[i];
        window.velocity[i].push(newVal);
    }
}
