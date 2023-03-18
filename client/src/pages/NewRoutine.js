import React, { useState } from 'react';
// import Header from '../components/Header'
// import Footer from '../components/Footer';
// import NavBar from '../components/NavBar';
const fetch = require('node-fetch');

const options = {
	method: 'GET',
	headers: {
		'X-Api-Key': process.env.API_KEY, 
		// 'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

const searchAPIExercises = (query) => {
    return fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${query}`, options)
};

const SearchExercises = () => {
  // create state for holding returned google api data
  const [searchedExercises, setSearchedExercises] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchAPIExercises(searchInput);
        console.log("search input =", searchInput)
        console.log("exercise results", response)
      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const items  = await response.json();
      console.log("items", items)
      const exerciseData = items.map((exercise) => ({
        name: exercise.name,
        muscle: exercise.muscle,
        difficulty: exercise.difficulty,
        instructions: exercise.instructions
      }));

      setSearchedExercises(exerciseData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Exercises!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for an exercise'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedExercises.length
            ? `Viewing ${searchedExercises.length} results:`
            : 'Search for an exercise to begin'}
        </h2>
        <CardColumns>
          {searchedExercises.map((exercise) => {
            return (
              <Card key={exercise.name} border='dark'>
                {/* {book.image ? (
                  <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                ) : null} */}
                <Card.Body>
                  <Card.Title>{exercise.muscle}</Card.Title>
                  <p className=''>Exercise Name: {exercise.name}</p>
                  <p className=''>Instructions: {exercise.instructions}</p>
                  {/* {Auth.loggedIn() && (
                    <Button
                      disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveBook(book.bookId)}>
                      {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                        ? 'This book has already been saved!'
                        : 'Save this Book!'}
                    </Button>
                  )} */}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchExercises;

