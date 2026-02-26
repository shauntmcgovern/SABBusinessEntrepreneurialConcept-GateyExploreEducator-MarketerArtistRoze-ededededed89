//the function of the React'App
import logo from './logo.svg';
import './App.css';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";//I do see this library installed in my project
import { Doughnut } from "react-chartjs-2";//I do not see this library installed in my project-- so I did this now it is there and avail'npm i react-chartjs-2 chart.js)):/')):-;
import React, { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);
//what this does is run the ChartJS-'method' the register method that requires the ArcElement and Tooltip and Legend to pass on through this Javascript'React'Method


//<Doughnut data={...} />//this isn't ready yet I am assuming here, you enter the 'information' with the '...' to complete this

function App() {
	// React state to store JSON data
	    const [data, setData] = useState([]);
		let username = 'coalition';
		let password = 'skills-test';
		//set variable for both strings and now this btoa 'method'--The btoa() method encodes a string in base-64.(w3)'what this does is make it essentially identifiable for header->Authorization which is a Basic definition:09')<s,.>:-0')
		let auth = btoa(`${username}:${password}`);
	    // Fetch JSON data
	    useEffect(() => {
	      const fetchData = async () => {
	        // Replace with API URL if fetching from a server
			//const response = await fetch("/data.json");
	        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
				headers: {
					'Authorization': `Basic ${auth}`
				}}); 
	        const jsonData = await response.json();
	        setData(jsonData);
	      };
	  
	      fetchData();
	    }, []);
	return (
	/*<React.Fragment className="scroll-container">
		      {data.map((item) => (
		        <div key={item.id} className="circle-item">
		          <img
		            src={`https://i.pravatar.cc/150?u=${item.username}`} // Placeholder image
		            alt={item.name}
		            className="circle-image"
		          />
		          <p className="name-text">{item.name}</p>
		        </div>
		      ))}
	</React.Fragment>*/
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
	  <h1>Coalitions Table of Patients</h1>
	  		        <table border="1" style={{ width: "100%", textAlign: "left" }}>
	  		          <thead>
	  		            <tr>
	  		              <th>Profile Picture</th>
	  		              <th>Name</th>
	  		              <th>Age</th>
	  		            </tr>
	  		          </thead>
	  		          <tbody>
	  		            {data.map((item) => (
							<tr key={item.id}>
							<td>{item.id}</td>
	  		                <td>{item.name}</td>
	  		                <td>{item.age}</td>
	  		              </tr>
	  		            ))}
	  		          </tbody>
	  		 		</table>
    </div>
  );
}
export default App;


/*
const App = () => {
    // React state to store JSON data
    const [data, setData] = useState([]);
	let username = 'coalition';
	let password = 'skills-test';
	//set variable for both strings and now this btoa 'method'--The btoa() method encodes a string in base-64.(w3)'what this does is make it essentially identifiable for header->Authorization which is a Basic definition:09')<s,.>:-0')
	let auth = btoa(`${username}:${password}`);
    // Fetch JSON data
    useEffect(() => {
      const fetchData = async () => {
        // Replace with API URL if fetching from a server
		//const response = await fetch("/data.json");
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
			headers: {
				'Authorization': `Basic ${auth}`
			}}); 
        const jsonData = await response.json();
        setData(jsonData);
      };
  
      fetchData();
    }, []);

    return(
        <div>
        <h1>React Table Example</h1>
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

const App = () => {
  const [posts, setPosts] = useState([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <span>{post.id}</span> {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

/*
async function fetchAndDisplayData() {
    // Replace with your API endpoint URL
	let username = 'coalition';
	let password = 'skills-test';
	//set variable for both strings and now this btoa 'method'--The btoa() method encodes a string in base-64.(w3)'what this
	//does is make it essentially identifiable for header->Authorization which is a Basic definition:09')<s,.>:-0')
	let auth = btoa(`${username}:${password}`);
    const apiURL = 'https://fedskillstest.coalitiontechnologies.workers.dev';

    try {
        // Fetch the data from the API
        //const response = await fetch(apiURL);
		const response = await fetch(apiURL, {
					headers: {
						'Authorization': `Basic ${auth}`
		}});
        // Parse the response as JSON
        const data = await response.json();

        // Get the HTML element where you want to display the data
        const patientList = document.getElementById('name');

        // Iterate through the data (assuming it's an array of objects)
        data.forEach(patient => {
            // Create HTML elements dynamically
            const listItem = document.createElement('li');
            // Use template literals to insert data properties
            listItem.innerHTML = `
                <strong>Title:</strong> ${patient.title}
                <p><strong>Body:</strong> ${patient.body}</p>
            `;
            // Append the new element to the list
            patientList.appendChild(listItem);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('name').innerHTML = '<li>Failed to load data.</li>';
    }
}
// Call the function when the page loads
fetchAndDisplayData();


async function fetchDataAndDisplay()
{
    const url = 'https://jsonplaceholder.typicode.com'; // Example API endpoint
	    const container = document.getElementById('data-container');

	    try {
	        const response = await fetch(url);
	        if (!response.ok) {
	            throw new Error(`Response status: ${response.status}`);
	        }
	        const data = await response.json(); // Parse the response body as JSON

	        // Loop through the data and create HTML elements
	        data.forEach(post => {
	            const card = document.createElement('div');
	            card.classList.add('card');
	            card.innerHTML = `
	                <h2>${post.title}</h2>
	                <p>${post.body}</p>
	            `;
	            container.appendChild(card);
	        });
	    } catch (error) {
	        console.error('Error fetching data:', error);
	        container.innerHTML = '<p>Failed to load data.</p>';
	    }
}
fetchDataAndDisplay();
*/



/*
const newImage = document.createElement('img')
						newImage.src = 'item.profile_picture';
<img id="newImage" src="" alt="Dynamically loaded image" width="200" height="200"></img>

//
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
