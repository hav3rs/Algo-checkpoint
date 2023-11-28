function sumOfDistinctElements(set1, set2) {
    let distinctSum = 0;
    
    // Compare elements from set1 with set2 and add if not present in set2
    for (let i = 0; i < set1.length; i++) {
        if (!set2.includes(set1[i])) {
            distinctSum += set1[i];
        }
    }
    
    // Compare elements from set2 with set1 and add if not present in set1
    for (let i = 0; i < set2.length; i++) {
        if (!set1.includes(set2[i])) {
            distinctSum += set2[i];
        }
    }
    
    return distinctSum;
}

// Example sets
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

// Calculate and print the sum of distinct elements using the described approach in JavaScript
const result = sumOfDistinctElements(set1, set2);
console.log("Output:", result);
