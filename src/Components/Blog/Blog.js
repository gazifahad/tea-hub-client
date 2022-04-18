import React from 'react';

const Blog = () => {
    return (
        <div>
            <h4 className='text-center'>Authentication vs Authorization?</h4>
            <p className='m-4 text-left'>Authentication is the verification process of someone's identity,It is used to verify a person, On the otherhand Authorization is used to verify the access level of a person/user,Does the use have right to access specific files or application or data? </p>
            <h4 className='text-center'> Why are you using `firebase`? What other options do you have to implement authentication?
            </h4 >
            <p className='m-4 text-left'>
                Firebase is the most popular authentication service provider,It is easy to use,And it's ready to use UI libraries make the authentication process effortless,Integration with popular federated identity providers like facebook ,google,twitter made it ahead of all others,It supports github also.

                The other options for authentication are
                <ul>
                    <li>Octa</li>
                    <li>Passport</li>
                    <li>Auth0</li>
                    <li>MongoDB</li>
                    <li>keycloak</li>
                </ul>
            </p>
            <h4 className='text-center'>
                What other services does `firebase` provide other than authentication?
            </h4>
            <p className='m-4 text-left'>Firebase provides many services such as
                <ul>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Cloud Functions</li>
                    <li>Cloud Firestore</li>
                    <li>Predictions</li>
                    <li>Remote Config</li>
                    <li>Dynamic Links</li>
                </ul>
            </p>
        </div>
    );
};

export default Blog;