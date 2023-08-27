// Array of invitation card image URLs
const invitationCards = [
    "Big Day Postcard 4.jpg",
    "Big Day Postcard 5.jpg",
    "Big Day Postcard 6.jpg",
    "Big Day Postcard 7.jpg",
    "Big Day Postcard 8.png",
    "Big Day Postcard 9.jpg",
    "Big Day Postcard 10.png",
    "Big Day Postcard 11.png",
    "Big Day Postcard 12.jpg",
    "Big Day Postcard 13.jpg",
    "Big Day Postcard 14.jpg",
    "Big Day Postcard 15.jpg",
    "Post card back 1.png"

    // Add the URLs of your other invitation card images here
  ];
  
  // Function to generate a random index
  function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
  }
  
// Function to update the invitation card image
function updateInvitationCard() {
    const invitationImage = document.getElementById("invitationImage");
    const randomIndex = getRandomIndex(invitationCards.length);
    const randomImageURL = invitationCards[randomIndex];
    invitationImage.src = randomImageURL;
  }
  
  // Call the function to update the invitation card image initially
  updateInvitationCard();