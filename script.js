const madForm = `<form class="madlibForm">
          <input type="text" class="adjective" placeholder="Adjective" required>
          <input type="text" class="foods" placeholder="Foods (Plural)" required>
          <input type="text" class="verb" placeholder="Verb" required>
          <input type="text" class="saying" placeholder="Saying" required>
          <input type="text" class="noun" placeholder="Noun" required>
          <input type="text" class="foods2" placeholder="Foods (Plural)" required>
          <input type="text" class="color" placeholder="Color" required>
          <input type="text" class="vehicle" placeholder="Vehicle" required>
          <input type="text" class="animal" placeholder="Animal" required>
          <input type="text" class="person" placeholder="Person" required>
          <button type="submit">Read That Madlib!</button>
        </form>`;

document.querySelector('.madlibContent').innerHTML = madForm;

function handleSubmit(e) {
  e.preventDefault();
  
  let adjective = document.querySelector('.adjective').value;
  let foods = document.querySelector('.foods').value;
  let verb = document.querySelector('.verb').value;
  let saying = document.querySelector('.saying').value;
  let noun = document.querySelector('.noun').value;
  let foods2 = document.querySelector('.foods2').value;
  let color = document.querySelector('.color').value;
  let vehicle = document.querySelector('.vehicle').value;
  let animal = document.querySelector('.animal').value;
  let person = document.querySelector('.person').value;
  
  const madStory = `
    Today I went to my favorite Taco Stand called the ${adjective} ${animal}. Unlike most food stands, they cook and prepare the food in a ${vehicle} while you ${verb}. The best thing on the menu is the ${color} ${noun}. Instead of ground beef they fill the taco with ${foods2}, cheese, and top it off with a salsa made from ${foods}. If that doesn't make your mouth water, then it's just like ${person} always says: ${saying}!
  `
  
  document.querySelector('.madlibContent').innerHTML = madStory;
}

document.querySelector('.madlibContent').addEventListener('submit', handleSubmit);
