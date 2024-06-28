import "./styles.css";
import React from "react";
import EmailForm from "./components/EmailForm";

// Instructions for Candidate:
// 1. Clone this repo
// 2. Add an input field to accept an email.
// 3. Add a button that passes the input value to the parent component.
// 4. In the parent component, add logic to send the value to a backend with a POST request to
//the following url https://webhook.site/30b1bdd1-b233-4262-b3f0-918cb9d94e71. Along with the email, send your github username in the JSON.
// 5. Add styling to the button (Button) and input (Input) using the ShadCN Component library here: https://ui.shadcn.com/docs/components/input
// 6. Please return your video, along with your cloned github repo link.
const handleFormSubmit = async (email: string) => {
  const data = {
    email: email,
    github_user_name:'tanwar1997'
  }
  try {
    const response = await fetch('https://webhook.site/30b1bdd1-b233-4262-b3f0-918cb9d94e71', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    if(!response.ok) {
      //  new throw Error("network Error");
    }
    // const value = await response.json()
    console.log(email,"submited" )
  }
  catch (error) {
    console.error("error catch block:",error)
  }

}



export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <EmailForm onSubmit ={handleFormSubmit} />
    </div>
  );
}