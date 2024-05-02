user_preferences = {}

def add_user(user_id, preferred_categories):
    user_preferences[user_id] = preferred_categories

def get_recommendations(user_id):
    preferred_categories = user_preferences.get(user_id, [])
    if not preferred_categories:
        return []

    recommendations = []
    for category in preferred_categories:
        recommendations.append(f"Top item in {category}")
        recommendations.append(f"Popular item in {category}")
    return recommendations

add_user("user1", ["cars", "groceries"])
add_user("user2", ["vegetables"])
print(f"Recommendations for user1: {get_recommendations('user1')}")
print(f"Recommendations for user2: {get_recommendations('user2')}")