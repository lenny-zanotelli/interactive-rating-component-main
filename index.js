
const cardElem = document.querySelector(".card");
const ratingFormElem = document.querySelector(".card__form");
const ratingResultElem = document.querySelector(".thank-you-state-card");
const submitBtnElem = document.querySelector('.card__submit-btn');
const ratingValueNumberElem = document.querySelector(".thank-you-state-card__rating-number");

ratingFormElem.addEventListener('click', (event) => {
    const selectedValue = event.target.value;

    submitBtnElem.addEventListener('click', () => {
        cardElem.style.display = "none";
        ratingResultElem.style.display = "block";
        ratingValueNumberElem.textContent = selectedValue;
    });
});
