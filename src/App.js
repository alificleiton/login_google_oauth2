import React from "react";
import { GoogleLogin }  from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode';

function App() {

  const handleSuccess = (credentialResponse) => {
    // Decodificar o ID Token retornado pelo Google
    const decodedToken = jwtDecode(credentialResponse.credential);

    // Capturar nome e email
    const { name, email } = decodedToken;

    // Exibir no console
    console.log('Nome:', name);
    console.log('Email:', email);
  };

	return (
		<div className="container">
			<GoogleLogin 
        
        
        onSuccess={handleSuccess}
        onError={()=>{
          console.log("login Failed");
        }}
                
      />
		</div>
	);
}

export default App;