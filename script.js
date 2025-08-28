let heartCount = parseInt(document.getElementById('heart-count').innerText);

const hearts = document.getElementsByClassName('heart');

for (const heart of hearts) {
    heart.addEventListener('click', function () {
        heartCount = heartCount + 1;

        document.getElementById('heart-count').innerText = heartCount;
    })
}

