console.log('Welcome To Lecture 21');

localStorage.clear();

// MAking the Hello2 editable...
if (document.contains(document.getElementById("head1"))) {
    
    document.getElementById('ah').addEventListener('click',function(){
            console.log('hello');
            document.getElementById('ah').setAttribute('contenteditable','true');

    });

    document.getElementById('ah').addEventListener('blur',function(){
            localStorage.setItem('item',document.getElementById('ah').textContent);
    });


  } else { 

    alert ('no');

  }


