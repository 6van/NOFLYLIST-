const links1 = [
    "https://www.youtube.com/watch?v=HcXss0UqjIE", // Random YouTube
    "https://open.spotify.com/track/1vYwWfHO3T7hQXsbHb44H4", // Random Spotify
    "https://www.youtube.com/watch?v=7XM_dKqNl4A"  // Random YouTube
];

const links2 = [
    "https://www.youtube.com/watch?v=3h7hQy6HYQU", // Random YouTube
    "https://open.spotify.com/track/7slX0OjgsbpzVyb3wfjub3", // Random Spotify
    "https://www.youtube.com/watch?v=3zpdsr-MKmE" // Random YouTube
];

const links3 = [
    "https://www.youtube.com/watch?v=0l6JcFh5qHE", // Random YouTube
    "https://open.spotify.com/track/4mGiGiwW38kdbxaMwdeAUb", // Random Spotify
    "https://www.youtube.com/watch?v=xvFbO1QJ_xM" // Random YouTube
];

// Redirect to random link from the corresponding door
function redirectToLink(door) {
    let selectedLinks;
    if (door === 1) selectedLinks = links1;
    if (door === 2) selectedLinks = links2;
    if (door === 3) selectedLinks = links3;

    const randomIndex = Math.floor(Math.random() * selectedLinks.length);
    window.location.href = selectedLinks[randomIndex];
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const linkInput = document.getElementById("submission-link");
    const linkValue = linkInput.value.trim();

    // Validate YouTube and Spotify links
    const youtubePattern = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/;
    const spotifyPattern = /^(https?\:\/\/)?(www\.spotify\.com)\/.+$/;

    if (youtubePattern.test(linkValue) || spotifyPattern.test(linkValue)) {
        const door = Math.floor(Math.random() * 3) + 1; // Randomly choose a door (1, 2, or 3)
        alert(`Your link has been submitted and placed in door ${door}`);
        // Optionally, you could save the link to a server or array for further use
        linkInput.value = ""; // Clear the input field after submission
    } else {
        alert("Please enter a valid YouTube or Spotify link.");
    }
}
