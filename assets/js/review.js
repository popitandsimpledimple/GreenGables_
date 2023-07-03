
const ratings = document.querySelectorAll('.rating');
const comment = document.getElementById("commment").value;

if (ratings.length > 0) {
    initRatings();
}

 
//основная функц
function initRatings() {
    let ratingActive, ratingValue;
    //бегаем по всем рейтингам на стр
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }

    //инициализируем конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating)

        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }

    //инициализация переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating_active');
        ratingValue = rating.querySelector('.rating_value')
    }

    //изменяем ширину активных звёзд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    //возможность указывать оценку
    function setRating(rating) {
        const ratingItems = document.querySelectorAll('.rating_item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener("mouseenter", function(e){
                //обновление перемен
                initRatingVars(rating);
                //обновление активных звёзд
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener("mouseleaver", function(e){
                //обновление перемен
                initRatingVars(rating);
            });

            ratingItem.addEventListener("click", function(e){
                //обновление перемен
                initRatingVars(rating);

                if (rating.dataset.ajax) {
                    setRatingActiveWidth(ratingItem.value, rating);
                } else {
                     //отображение указанной оценки
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWidth();
                    alert("оценка " + ratingValue.innerHTML);
                }

                
            });

        }
       // document.querySelector('.form_btn').addEventListener('click', () => {
       // document.querySelector('.out-1').innerHTML = ratingItems;
       // });
    }
    

    
 

} 


document.querySelector("#submit").onclick = function(){
    const comment = document.getElementById("commment").value;
    alert("\nКомментарий: " + comment);
  }

/* const form = document.getElementById("rating-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const comment = document.getElementById("commment").value;
  alert("\nКомментарий: " + comment);
  form.reset();
});

   


const form = document.getElementById("rating-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const rating = document.querySelector(".rating_set .rating_value").innerHTML;
  const comment = document.getElementById("commment").value;
  alert("Оценка: " + rating + "\nКомментарий: " + comment);
});

const form = document.getElementById("rating-form");

    form.addEventListener("submit", function(e) {
      e.preventDefault();
     
      const comment = document.getElementById("commment").value;
      alert("Оценка: " + rating + "\nКомментарий: " + comment);
    });


*/