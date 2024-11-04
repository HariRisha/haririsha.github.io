function showAnimalExperience(animal) {
  const animalModal = document.getElementById('animalModal');
  const animalTitle = document.getElementById('animalTitle');
  const animalContent = document.getElementById('animalContent');
  
  // Animal data with drag-and-drop content and quotes
  const animalData = {
    chicken: {
      title: "Chick's Perspective",
      content: `
        <div class="drop-area">
          <img id="chickImage" src="chick_experience.png" alt="Chick" class="draggable-image" draggable="true" ondragstart="drag(event)">
          <p>Drag the chick image into the box below to see its reaction.</p>
          <div id="dropZoneChicken" class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)">
          </div>
        </div>
      `,
      quote: "Each to count for one, and none for more than one. – Singer"
    },
    pig: {
      title: "Pig's Perspective",
      content: `
        <div class="drop-area">
          <img id="pigImage" src="pig_experience.png" alt="Pig" class="draggable-image" draggable="true" ondragstart="drag(event)">
          <p>Drag the pig image into the box below to see its reaction.</p>
          <div id="dropZonePig" class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)">
          </div>
        </div>
      `,
      quote: "Equal consideration for different beings may lead to different treatment. – Singer"
    },
    cow: {
      title: "Cow's Perspective",
      content: `
        <div class="drop-area">
          <img id="cowImage" src="cow_experience.png" alt="Cow" class="draggable-image" draggable="true" ondragstart="drag(event)">
          <p>Drag the cow image into the box below to see its reaction.</p>
          <div id="dropZoneCow" class="drop-zone" ondrop="drop(event)" ondragover="allowDrop(event)">
          </div>
        </div>
      `,
      quote: "The question is not, Can they reason?, nor Can they talk? but, Can they suffer? – Bentham, as quoted by Singer"
    }
  };

  // Set the title and content based on the selected animal
  animalTitle.innerText = animalData[animal].title;
  animalContent.innerHTML = animalData[animal].content;
  
  // Store quote for later use
  animalModal.setAttribute("data-quote", animalData[animal].quote);

  // Show modal
  animalModal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('animalModal').style.display = 'none';
}

function showReflection() {
  const reflectionContent = document.getElementById('reflectionContent');
  reflectionContent.style.display = reflectionContent.style.display === 'none' ? 'block' : 'none';
}

// Allow elements to be dragged over the drop zone
function allowDrop(event) {
  event.preventDefault();
}

// Store drag data
function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// Handle the drop event, trigger animation, and display quote
function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);

  // Check if dropped in the correct drop zone and trigger animation
  if (event.target.classList.contains("drop-zone")) {
    event.target.appendChild(draggedElement);
    draggedElement.classList.add("animate-image"); // Trigger the animation class

    // Trigger the reflection quiz
    showQuiz();
  }
}

// Display a reflection quiz after interaction
function showQuiz() {
  const quizContent = document.getElementById('quizContent');
  quizContent.innerHTML = `
    <h3>Reflection Quiz</h3>
    <p>1. How did interacting with this animal change your perspective on animal rights?</p>
    <textarea rows="3"></textarea>
    <p>2. Do you believe animals should have the same moral consideration as humans? Why or why not?</p>
    <textarea rows="3"></textarea>
    <p>3. How does the concept of 'speciesism' apply to your daily life?</p>
    <textarea rows="3"></textarea>
  `;
  document.getElementById('reflectionQuiz').style.display = 'block';
}
