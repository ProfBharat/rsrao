// Sample comments data (in a real scenario, this data would come from a database)
const comments = [
    { name: 'User 1', comment: 'Great post! Thanks for sharing.' },
    { name: 'User 2', comment: 'I found this very insightful.' },
    // Add more comments here
];

// Function to display comments
function displayComments() {
    const commentsList = document.querySelector('.comments-list');
    commentsList.innerHTML = '';

    comments.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.className = 'comment-item';
        commentItem.innerHTML = `
            <h4>${comment.name}</h4>
            <p>${comment.comment}</p>
        `;
        commentsList.appendChild(commentItem);
    });
}

// Event listener for comment form submission
document.querySelector('#comment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = document.querySelector('#name');
    const commentInput = document.querySelector('#comment');

    const newComment = {
        name: nameInput.value,
        comment: commentInput.value
    };

    comments.push(newComment);

    // Clear form inputs
    nameInput.value = '';
    commentInput.value = '';

    // Update comments display
    displayComments();
});

// Display initial comments
displayComments();
