import Movie from '../src/Movie-Compontents/Movie'
import MovieList from './Movie-Compontents/MovieList';
import './App.css';

function App() {
  let reviews = [
    {
      name: "Josh",
      review: "The movie was great",
      id: 1
    },
    {
      name: 'Becky',
      review: 'I hated the movie',
      id: 2
    },
    {
      name: 'henry',
      review: 'the movie was ok',
      id: 3
    }
  ]
  

  let Movies = [
    {
      title: 'Your Name',
      syn: `Two teenagers share a profound, 
            magical connection upon discovering they are swapping bodies. 
            Things manage to become even more complicated when the boy and 
            girl decide to meet in person.`,
      poster: '/MoviePoster.png',
      reviews: [{
        name: "Albert",
        review: "I didn't get a chance to see the movie but it looks good",
        id: 1
      }]
    },

    {
      title: 'Demon Slayer',
      syn: `A boy raised by boars, who wears a boar's head, 
            boards the Infinity Train on a new mission with 
            the Flame Pillar along with another boy who reveals 
            his true power when he sleeps. 
            Their mission is to defeat a demon who has been tormenting 
            people and killing the demon slayers who oppose it.`,
      poster: '/demon-slayer.jpg',
      reviews: [{
        name: "Albert",
        review: "I didn't get a chance to see the movie but it looks good",
        id: 1
      }]
    },
    {
      title: 'Top Gun',
      syn: `Fighter pilots doing fighter pilot things to bad people`,
      poster: '/top-gun.jpg',
      reviews: [{
        name: "Albert",
        review: "I didn't get a chance to see the movie but it looks good",
        id: 1
      }]
    },

    {
      title: 'Uncharted',
      syn: `Treasure hunter Victor "Sully" Sullivan recruits
            street-smart Nathan Drake to help him recover a 
            500-year-old lost fortune amassed by explorer Ferdinand Magellan.`,
      poster: '/uncharted.jpeg',
      reviews: [{
        name: "Albert",
        review: "I didn't get a chance to see the movie but it looks good",
        id: 1
      }]
    },
    {
      title: 'Abominable',
      syn: `After discovering a Yeti on the roof of her apartment building, 
            teenage Yi and her two friends embark on an epic quest to reunite 
            the magical creature with his family. But to do so, they must stay 
            one step ahead of a wealthy financier and a determined zoologist who 
            want to capture the beast for their own gain.`,
      poster: '/abominable.jpg',
      reviews: [{
        name: "Albert",
        review: "I didn't get a chance to see the movie but it looks good",
        id: 1
      }]
    },
    {
      title: 'Pirates of the Caribbean',
      syn: `Will Turner and Elizabeth Swann join forces with Capt. Barbossa to
       free Jack Sparrow from Davy Jones' locker. Meanwhile, the crew of the Flying
        Dutchman ghost ship wreaks havoc on the Seven Seas. The friends must navigate 
        dangerous waters to confront Chinese pirate Sao Feng and, ultimately, they 
        must choose sides in a battle wherein the pirate life hangs in the balance.`,
      poster: '/potc.jpg',
      reviews: [{
        name: "Albert",
        review: "I didn't get a chance to see the movie but it looks good",
        id: 1
      }]
    },

  ]

  return (
    <div className="App">
        <br></br>
      < MovieList movies={Movies}/>
    </div>
  );
}

export default App;
