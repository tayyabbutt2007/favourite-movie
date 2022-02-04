const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const addMovieButton = cancelAddMovieButton.nextElementSibling;
const userInput = addMovieModal.querySelectorAll('input');
const Movies = [];

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const cancelAddMovie = () => {
    toggleBackdrop();
};

const backdropClickHandler = () => {
    toggleMovieModal();
    clearInputs();
};

const clearInputs = () => {
    for (const userinput of userInput){
        userinput.value = '';
    }
};

const addButtonHandler = () => {
    const userTitle = userInput[0].value;
    const userIamgeURL = userInput[1].value;
    const userRating = userInput[2].value;

    if (userTitle.trim() === '' &&
    userIamgeURL.trim() === '' &&
    userRating.trim() === ''){
        alert('Invalid Input');
    }

    const newMovies = {
        title: userTitle,
        image: userIamgeURL,
        rating: userRating
    }

    Movies.push(newMovies);
    console.log(Movies);
    toggleMovieModal();
    clearInputs();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', cancelAddMovie);
cancelAddMovieButton.addEventListener('click', backdropClickHandler);
addMovieButton.addEventListener('click', addButtonHandler);

