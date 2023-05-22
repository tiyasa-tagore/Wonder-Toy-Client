import { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";

const Blog = () => {
    const ref = useRef();
    const options = {
        orientation: "landscape",
        unit: "in",
        format: [17,11],
    }
    return (
        <div className="mx-auto mb-16">
        <div className="mt-6 text-end mr-6">
                <ReactToPdf targetRef={ref} options={options} filename="blog.pdf">
                    {({ toPdf }) => (
                        <button className="btn bg-warning " onClick={toPdf}>
                          <FaDownload></FaDownload>    Download Pdf
                        </button>
                    )}
                </ReactToPdf>
        </div>

         <div className="ml-10 mr-10
         " ref={ref}>


            <h3 className='text-center  '>Question & Answers</h3>
                <hr />
            <div>
                <div>
                <h4>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>
                    <h5 >Ans:  </h5>
                    <p>
                    Access Tokens are used in the authentication process, allowing a user to access a server. Refresh Tokens are used to get new Access Tokens when they expire.

In terms of storage on the client-side, it is best not to use localStorage or sessionStorage due to potential security issues. Instead, consider using httpOnly cookies, which are more secure, and implement anti-CSRF measures to protect against certain types of attacks.
                    </p>
                    <br />
                    
                </div>

                <div>
                    <h4>2. Compare SQL and NoSQL databases?</h4>
                    <h5>Ans:</h5>
                    <p>
                    SQL databases are relational, use structured query language (SQL), have a predefined schema, and are excellent for complex queries. Examples include MySQL, PostgreSQL, and Oracle.
                    <br />

NoSQL databases are non-relational, can use a variety of query languages, have a dynamic schema, and are excellent for scalability and handling large amounts of data. They come in several types such as document, key-value, columnar, and graph. Examples include MongoDB, Cassandra, and Redis.<br />
                    </p>
                    <br />
                    
                </div>

                <div>
                    <h4>3.What is express js? What is Nest JS ?</h4>
                    <h5>Ans:</h5>
                    <p>Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It provides a simple interface to build websites and web applications. Express.js is often used as the backend part of the MEAN stack (MongoDB, Express.js, Angular.js, Node.js).

NestJS is a progressive Node.js framework for building efficient, reliable and scalable server-side applications. By combining elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming), NestJS provides an out-of-the-box application architecture. It uses TypeScript by default but supports JavaScript too, and it is built around the concept of modules, making code highly maintainable and testable. As of my knowledge cut-off in September 2021, for more up-to-date information you may have to look up online sources.</p>
<br />
                </div>

                {/* 4th Questions */}
                <div>
                    <h4>4.What is MongoDB aggregate and how does it work?</h4>
                    <h5>Ans:</h5>
                    <p>MongoDB in aggregation framework is a data processing tool that transforms documents in your collections and returns computed results. It works using an  aggregation pipeline , which consists of stages (like $match, $group, $sum, etc.) where each stage transforms the data as it passes through. It allows complex operations directly on the database, reducing the need for post-processing in application code.</p>
                </div>
                <hr />
                </div>
               </div>
        </div>  
    );
};

export default Blog;
