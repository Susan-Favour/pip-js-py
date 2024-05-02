
const userPreferences = {};

function addUser(userId, preferredCategories) {
    userPreferences[userId] = preferredCategories;
}

function getRecommendations(userId) {
    const preferredCategories = userPreferences[userId];
    if (!preferredCategories) return [];

    const recommendations = [];
    preferredCategories.forEach(category => {
        recommendations.push(`Top item in ${category}`);
        recommendations.push(`Popular item in ${category}`);
    });
    return recommendations;
}

addUser("user1", ["cars", "vegetables"]);
addUser("user2", ["fruits"]);
console.log(`Recommendations for user1: ${getRecommendations("user1")}`);
console.log(`Recommendations for user2: ${getRecommendations("user2")}`);