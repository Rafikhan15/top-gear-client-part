import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='my-5 px-5'>
            <Row className='mx-auto'>
                <Col>
                    <h3>Difference between javascript and node js?</h3>
                    <br />
                    <p>
                        <span className='fw-bold'>Javascript</span> is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.Javascript can only be run in the browsers.
                        It is used in frontend development.
                    </p>
                    <p>
                        <span className='fw-bold'>NodeJS</span> is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.Run Javascript outside the browser with the help of NodeJS.
                        It is used in server-side development.


                    </p>
                    <br />
                    <h3>When should we use nodejs and when should you use mongodb?</h3>
                    <p>
                        <span className='fw-bold'> Node  </span>is server side javascript framework.  With node both client and server both uses javascript language. There are many pre-built modules available.
                        Traditionally, this would be handled by a relational database such as MySQL, Postgres, SQLite/SQLite3, MSSQL Server, and so on. Relational <span className='fw-bold'> Mongodb</span> databases are the right choice for many applications depending on the use case, but there are a few issues you may want to consider.It offers a MongoDB Node.js Driver which provides a JavaScript API and implements the network protocol required to read and write from a local or remote MongoDB database.MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.Mongodb has NoSQL database program CRUD operation provide best flexibility with that's why when we use mongodb.
                    </p>
                </Col>
                <Col>
                    <h3>Differences between sql and nosql databases.?</h3>
                    <br />
                    <p>
                        <span className='fw-bold'>Structured Query language</span> (SQL) is the standard language for dealing with Relational Databases. A relational database defines relationships in the form of tables.SQL programming can be effectively used to insert, search, update, delete database records.SQL databases are table based databases.These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.

                    </p>
                    <p>
                        <span className='fw-bold'>NoSQL</span> is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps.NoSQL databases can be document based, key-value pairs, graph databases.They have dynamic schema.These databases are best suited for hierarchical data storage.
                    </p>
                    <br />

                    <h3>What is the purpose of jwt and how does it work?</h3>
                    <br />
                    <p>
                        <span className='fw-bold'>JWT</span> or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties.

                    </p>



                </Col>
            </Row>
        </div>
    );
};

export default Blogs;
