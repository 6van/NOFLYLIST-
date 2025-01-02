const links1 = [
    "https://www.youtube.com/watch?v=HcXss0UqjIE",
    "https://open.spotify.com/track/1vYwWfHO3T7hQXsbHb44H4",
    "https://www.youtube.com/watch?v=7XM_dKqNl4A"
];
const links2 = [
    "https://www.youtube.com/watch?v=3h7hQy6HYQU",
    "https://open.spotify.com/track/7slX0OjgsbpzVyb3wfjub3",
    "https://www.youtube.com/watch?v=3zpdsr-MKmE"
];
const links3 = [
    "https://www.youtube.com/watch?v=0l6JcFh5qHE",
    "https://open.spotify.com/track/4mGiGiwW38kdbxaMwdeAUb",
    "https://www.youtube.com/watch?v=xvFbO1QJ_xM"
];

let submittedLink = null;

function openLink(door) {
    let selectedLinks;
    if (door === 1) selectedLinks = links1;
    if (door === 2) selectedLinks = links2;
    if (door === 3) selectedLinks = links3;

    const randomIndex = Math.floor(Math.random() * selectedLinks.length);
    window.location.href = selectedLinks[randomIndex];
}

function submitLink() {
    const linkInput = document.getElementById('mediaLink');
    const link = linkInput.value.trim();

    if (isValidLink(link)) {
        submittedLink = link;
        const randomDoor = Math.floor(Math.random() * 3) + 1;
        addLinkToDoor(randomDoor, link);
        linkInput.value = ''; // Clear input
        alert('Link submitted successfully!');
    } else {
        alert('Please enter a valid YouTube or Spotify link!');
    }
}

function isValidLink(link) {
    const youtubePattern = /^https:\/\/(www\.)?youtube\.com\/.*$/;
    const spotifyPattern = /^https:\/\/(open\.)?spotify\.com\/.*$/;
    return youtubePattern.test(link) || spotifyPattern.test(link);
}

function addLinkToDoor(door, link) {
    if (door === 1) {
        links1.push(link);
    } else if (door === 2) {
        links2.push(link);
    } else if (door === 3) {
        links3.push(link);
    }
}
