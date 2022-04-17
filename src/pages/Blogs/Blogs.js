import React from 'react';

const Blogs = () => {
    return (

        <section className='py-5 p-md-5'>
            <div className="container mb-5">
                <div className="sectionHeading text-center mb-3">
                    <h2>My Blogs</h2>
                    <hr className="w-25 mx-auto" style={{ color: "#F98080", height: "2px" }} />
                </div>
                <div className='my-5'>
                    <article className='mb-4'>
                        <h3 className='text-md-center mb-3'>
                            Q : Difference between authorization and authentication?
                        </h3>
                        <p className="text-muted w-75 mx-auto">
                            <strong>Authorization</strong> is the process of determining what a user has access to. Authorization occurs after the system properly authenticates the user's identity, granting user complete access to resources such as information, files, and databases.
                        </p>
                        <p className="text-muted w-75 mx-auto">
                            <strong>Authentication</strong>  is the process of verifying user's identity. It is the process of verifying a user's identification by confirming the user's name/user ID and password.
                        </p>
                    </article>
                    <article className='mb-5'>
                        <h3 className='text-md-center mb-3'>
                            Q : Why are you using firebase? What other options do you have to implement authentication?
                        </h3>
                        <p className="text-muted w-75 mx-auto">
                            For any website there is specific features have just for their registered users. <strong>Firebase</strong> being a authentication provider it helps us to implement authentication easily and quickly.
                        </p>
                        <p className="text-muted w-75 mx-auto">
                            There are also many more authentication providers like Firebase,
                        </p>
                        <ol className="ps-5 w-75 mx-auto">
                            <li>MongoDB</li>
                            <li>Okta</li>
                            <li>Passport</li>
                            <li>Amazon Cognito</li>
                            <li>JSON Web Token</li>
                            <li>Auth0</li>
                            <li>Keycloak etc ...</li>
                        </ol>
                    </article>
                    <article className='mb-5'>
                        <h3 className='text-md-center mb-3'>
                            Q : What other services does firebase provide other than authentication?
                        </h3>
                        <p className="text-muted w-75 mx-auto">
                            <strong>Firebase</strong> many more services but among the <strong>Authentication</strong> and <strong>Hosting</strong> services are most popular. Some of the rests are,
                        </p>
                        <ol className="ps-5 w-75 mx-auto">
                            <li>Cloud Functions</li>
                            <li>Cloud Storage</li>
                            <li>Remote Config</li>
                            <li>Cloud Messaging</li>
                            <li>Hosting</li>
                            <li>Dynamic Links</li>
                            <li>Cloud Firestore</li>
                            <li>Predictions</li>
                            <li>Google Analytics</li>
                            <li>and also Authentication etc ...</li>
                        </ol>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Blogs;