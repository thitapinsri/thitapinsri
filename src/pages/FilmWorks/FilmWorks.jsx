import './FilmWorks.css';
import allFilms from './films';

const FilmWorks = () => {
  return (

    <div className="film-works">
      <div className='film-works-container'>
        <h1 className="title">Works when I was filmmaker</h1>
        <div className='films-container'>
          {
            allFilms.map(filmsByYear => {
              return <div className='film-by-year-container'>
                <h1 className='head'>{filmsByYear.year}</h1>
                {
                  filmsByYear.films.map(film => {
                    return <div className='film-container'>
                      <h2>{film.title} - {film.type}</h2>
                      <h3>{film.duty.map(f => <span>{f}</span>)}</h3>
                      <img src={film.img} />
                    </div>
                  })
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FilmWorks