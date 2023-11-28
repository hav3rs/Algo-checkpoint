// Function to calculate dot product of two vectors using arrays
function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length.");
    }

    let product = 0;
    for (let i = 0; i < v1.length; i++) {
        product += v1[i] * v2[i];
    }
    return product;
}

// Function to determine orthogonality between two vectors
function checkOrthogonality(v1, v2) {
    const result = dotProduct(v1, v2);
    return result === 0;
}

// Example usage with n pairs of vectors
function checkPairsForOrthogonality(vectorPairs) {
    for (let i = 0; i < vectorPairs.length; i++) {
        const [v1, v2] = vectorPairs[i];

        const isOrthogonal = checkOrthogonality(v1, v2);

        console.log(`Pair ${i + 1}: Vector 1 = [${v1}], Vector 2 = [${v2}], Orthogonal: ${isOrthogonal}`);
    }
}

// Example vectors for testing represented as arrays
const vectors = [
    [[3, 4], [4, -3]], // Orthogonal vectors
    [[1, 0], [0, 1]],  // Non-orthogonal vectors
    [[2, -1], [1, 2]]  // Non-orthogonal vectors
];

// Check pairs of vectors for orthogonality
checkPairsForOrthogonality(vectors);
