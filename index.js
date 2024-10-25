document.addEventListener('DOMContentLoaded', function () {   //The API event data wasn't retrieving, and I read that I needed to wrap all of this js code in a 'DOMContentLoaded' event listener to successfully call the API.


  // Fetch the events list from the API and display all party events and descriptions
  async function getEvents() {      //Create an asynchronous function to call the API and fetch the events data                                                                                                                                                                                     
      const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/events');  //Fetch the API url for our class and the events data
      const data = await response.json();   //Convert the events data to json
      if (data.success) {             //If events data is fetched successfully, render the events data in the party-list div                                                                            
        renderEvents(data.data);                                                                     
        document.getElementById('party-list').style.display = 'block';              // Show the party list div
      } 
    } 



    //Render each party event and details in the newly created list                                                                                   
  function renderEvents(parties) {      //Create a function to render the events list and details in the DOM                                                                                                                                                                                 
    const eventsList = document.getElementById('parties');        //Create a variable for party events list, and grab the DOM element ul                                                                                                                                                                                    
    parties.forEach(party => {      //Create a new array for the events data, and go through each array item 
      const li = document.createElement('li');    //Create for each array item a new li list element in the DOM
      li.innerHTML = `    
        <h3>${party.name}</h3>
        <p>${party.description}</p>
        <p><strong>Date:</strong> ${new Date(party.date).toLocaleDateString()}</p>
        <p><strong>Location:</strong> ${party.location}</p>
      `;                                                                                                            
      eventsList.appendChild(li);      //Append the new array and list of events and their details                                                                             
    });
  }


 document.getElementById('fetch-parties-btn').addEventListener('click', getEvents);         // Event listener for the "Show Upcoming Parties" button                                                                                                                                               
});
