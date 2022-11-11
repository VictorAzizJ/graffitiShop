//var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash-o");
//make listener for thumbs down//
//var thumbDown = document.getElementsByClassName("fa-thumbs-down")
let updateStaff = document.getElementsByClassName('customerService')
/*Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp': true
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
//make thumbs down function//
Array.from(thumbDown).forEach(function(element){
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    
    fetch('messages', {
      method: 'put',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        'name' : name,
        'msg' : msg,
        'thumbUp' : false
      })
      


    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })

  })





})*/
Array.from(updateStaff).forEach(function(element) {
  element.addEventListener('click', function(){
  
    const update = this.parentNode.parentNode.childNodes[1].childNodes[9].value
    console.log(update)
    const msg = this.parentNode.getAttribute('data-id')
    
    fetch('update', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'messy': update,
        'msg': msg,
        
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
      
        const msg = this.parentNode.parentNode.getAttribute('data-id')
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
          //maybe comment out so available to look at object
        })
      });
});
