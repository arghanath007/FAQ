//using selectors inside the element

const questions=document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn=question.querySelector('.question-btn');
    btn.addEventListener('click',function(){
        questions.forEach(function(selected){
            // console.log(selected);
            if(selected !== question)
            {
                selected.classList.remove('show-text');
            }
            else{
             question.classList.toggle('show-text');
            }
        });     
    });
    
})







// traversing the dom

// const questionBtn=document.querySelectorAll('.question-btn');

// questionBtn.forEach(function(btn){
//     btn.addEventListener('click',function(){
//         const parent=btn.parentElement.parentElement;
//         console.log(parent);
//         parent.classList.toggle('show-text');
//     })
// })