const swiperSlide = document.querySelector(".swiper-wrapper");
const popup = document.querySelector(".popup_box")
const guestUser = popup.querySelector(".start_guest");
const existingUser = popup.querySelector(".existing_user");
const popupCloseIcon = popup.querySelector(".popup_close_icon");

swiperSlide.addEventListener("click",function(event){
  if(event.target.tagName.toLowerCase() == "button"){
     const item =event.target.parentElement;
     const h2 = item.querySelector(".name").innerHTML;
     const readMoreCont = item.querySelector(".read_more_content").innerHTML;
     popup.querySelector("h3").innerHTML = h2;
     popup.querySelector(".popup_body").innerHTML = readMoreCont;
     popupBox();
  }

});


popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
   if(event.target == popup){
      popupBox();
   }
});

function popupBox(){
  popup.classList.toggle("open");
}
