const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const addMovieButton = cancelAddMovieButton.nextElementSibling;
const userInput = addMovieModal.querySelectorAll('input');
const textSection = document.getElementById('entry-text');
const listRoot = document.getElementById('movie-list');
const Movies = [];

const deleteElement = (movieID) => {
    let movieIndex = 0;
    for (const movie of Movies){
        if (movie.id == movieID){
            break;
        }
        movieIndex++;
    }
    Movies.slice(movieIndex, 1);
    listRoot.children[movieIndex].remove();
};

const renderNewMovieElement = (id, title, imageURL, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageURL}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <h2>${rating}/5 stars</h2>
    </div>
    `;
    
    listRoot.append(newMovieElement);
    newMovieElement.addEventListener('click', deleteElement.bind(null, id));

};

const clearTextSection = () => {
    if (Movies.length === 0){
        textSection.style.display = 'block'
    }else {
        textSection.style.display = 'none';
    }
};

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
        id: Math.random().toString(),
        title: userTitle,
        image: userIamgeURL,
        rating: userRating
    }

    Movies.push(newMovies);
    console.log(Movies);
    toggleMovieModal();
    clearTextSection();
    renderNewMovieElement(newMovies.id, newMovies.title, newMovies.image, newMovies.rating);
    clearInputs();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', cancelAddMovie);
cancelAddMovieButton.addEventListener('click', backdropClickHandler);
addMovieButton.addEventListener('click', addButtonHandler);

