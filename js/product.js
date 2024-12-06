document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll(".product");

    products.forEach((product) => {
        const stars = product.querySelectorAll(".star");
        const ratingDisplay = product.querySelector(".rating-value span");
        let currentRating = 0;

        stars.forEach((star, index) => {
            star.addEventListener("mouseover", () => {
                highlightStars(index, stars);
            });

            star.addEventListener("mouseout", () => {
                resetStars(stars, currentRating);
            });

            star.addEventListener("click", () => {
                setRating(index + 1, stars, ratingDisplay);
            });
        });

        function highlightStars(index, stars) {
            stars.forEach((star, i) => {
                star.classList.toggle("hovered", i <= index);
            });
        }

        function resetStars(stars, rating) {
            stars.forEach((star, i) => {
                star.classList.toggle("hovered", false);
                star.classList.toggle("selected", i < rating);
            });
        }

        function setRating(rating, stars, ratingDisplay) {
            currentRating = rating;
            ratingDisplay.textContent = currentRating;
            stars.forEach((star, i) => {
                star.classList.toggle("selected", i < currentRating);
            });
        }
    });
});

document.querySelectorAll('.add-to-wishlist').forEach((button) => {
    button.addEventListener('click', () => {
        button.textContent = "Added to Wishlist";
        button.style.backgroundColor = "#ccc";
        button.style.cursor = "not-allowed";
        button.disabled = true;
    });
});