// ===============================================================================
// DATA
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [{
    "name": "Ahmed",
    "photo": "https://i.insider.com/5b2cf4cf5e48ec5a008b4577?width=600&format=jpeg&auto=webp",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}, {
    "name": "Savana",
    "photo": "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_weight_other/1800x1200_cat_weight_other.jpg?resize=600px:*",
    "scores": [
        5,
        5,
        4,
        4,
        5,
        1,
        2,
        2,
        3,
        1
    ]
}, {
    "name": "Ed",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "scores": [
        5,
        5,
        5,
        5,
        5,
        5,
        2,
        5,
        2,
        5
    ]
}];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;