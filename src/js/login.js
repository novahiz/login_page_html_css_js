const forms = document.querySelector('.forms'),
      pwShowHide = document.querySelectorAll('.eye__icon'),
      links = document.querySelectorAll('.link');

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener('click', () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password")
        console.log(pwFields)
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent from submittint
        forms.classList.toggle("show__signup")
    })
})