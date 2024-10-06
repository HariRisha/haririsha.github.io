let barista = document.getElementById('barista')
let cook = document.getElementById('cook')
let sus_guy = document.getElementById('sus_guy')
let det_name_input = document.getElementById('name')

det_name_input.addEventListener('keypress', e => {
  if (e.key == 'Enter') {
    let det_name = det_name_input.value;
    window.alert('The name has been saved');
  }
})

// Barista message
let br_msg = document.createElement('img')
br_msg.src = 'barista_message.PNG'
br_msg.style.display = 'none';

// Cook message
let ck_msg = document.createElement('img')
ck_msg.src = 'cook_message.png'
ck_msg.style.display = 'none';

// Sus guy message
let sus_msg = document.createElement('img')
sus_msg.src = 'sus_guy_message.png'
sus_msg.style.display = 'none';

// Putting the images in the container
let messagesContainer = document.querySelector('.messages');
messagesContainer.appendChild(br_msg);
messagesContainer.appendChild(ck_msg);
messagesContainer.appendChild(sus_msg);

let element_click = false
let selected_element = null

// Detecting the click on the barista
barista.addEventListener('click', e => {
  if (!element_click) {
    element_click = true;
    selected_element = 'barista';
    cook.style.animation = 'dissapear 1s forwards';
    sus_guy.style.animation = 'dissapear 1s forwards';
    barista.style.animation = 'moveBaristatoMiddle 2s forwards'

    // Dinamicaly placing the message
    br_msg.style.display = 'block';
    ck_msg.style.display = 'none';
    sus_msg.style.display = 'none';
    br_msg.style.animation = 'reappear 3s forwards';
    br_msg.style.width = '600px';
    br_msg.style.height = 'auto'; 
    br_msg.style.position = 'absolute'; 
    br_msg.style.right = '370px'; 
    br_msg.style.top = '80px';   
  }
})

// Detecting the click on the cook
cook.addEventListener('click', e => {
  if (!element_click) {
    element_click = true;
    selected_element = 'cook';
    barista.style.animation = 'dissapear 1s forwards'
    sus_guy.style.animation = 'dissapear 1s forwards'

    // Dinamicaly placing the message
    br_msg.style.display = 'none';
    ck_msg.style.display = 'block';
    sus_msg.style.display = 'none';
    ck_msg.style.animation = 'reappear 3s forwards';
    ck_msg.style.width = '600px';
    ck_msg.style.height = 'auto'; 
    ck_msg.style.position = 'absolute'; 
    ck_msg.style.right = '330px'; 
    ck_msg.style.top = '250px';  
  }
})

// Detecting the click on the sus_guy
sus_guy.addEventListener('click', e => {
  if (!element_click) {
    element_click = true;
    selected_element = 'sus_guy';
    barista.style.animation = 'dissapear 1s forwards';
    cook.style.animation = 'dissapear 1s forwards';
    sus_guy.style.animation = 'moveSus_GuytoMiddle 2s forwards';

    // Dinamicaly placing the message
    br_msg.style.display = 'none';
    ck_msg.style.display = 'none';
    sus_msg.style.display = 'block';
    sus_msg.style.animation = 'reappear 3s forwards';
    sus_msg.style.width = '600px';
    sus_msg.style.height = 'auto'; 
    sus_msg.style.position = 'absolute'; 
    sus_msg.style.right = '320px'; 
    sus_msg.style.top = '20px';
  }
})

// Detecting the click on the screen around the suspects
document.addEventListener('click', e => {
  if(element_click && !barista.contains(e.target) && !cook.contains(e.target) && !sus_guy.contains(e.target)) {
    if (selected_element === 'barista') {
      barista.style.animation = 'moveBaristaBack 2s forwards';
      selected_element = null
    } else if (selected_element === 'sus_guy') {
      sus_guy.style.animation = 'moveSus_GuyBack 2s forwards'; 
      selected_element = null
    }

    barista.style.animation = 'reappear 1s forwards';
    cook.style.animation = 'reappear 1s forwards';
    sus_guy.style.animation = 'reappear 1s forwards';

      ck_msg.style.display = 'none';
      br_msg.style.display = 'none';
      sus_msg.style.display = 'none';
      element_click = false;
      selected_element = null;
    }
})


// if (det_name_input){
//   window.alert('wok')
//   let nameDisplay = document.createElement('p');
//   let nameContainer = document.querySelector('.nameDisplay');
//   document.body.appendChild(nameDisplay);
// }