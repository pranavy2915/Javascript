btn = document.querySelectorAll('.button')
body = document.querySelector('body')
console.log(btn)

btn.forEach((b)=> {
    console.log(b);
    b.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);

        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
          }

          if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
          }

    })

});




