function Movie(props) {
    const {
        Title,
        Year,
        imdbID: id,
        Type,
        Poster
    } = props;

    return  <div  id={id} className="movie-card">        
            <div className="img-box">
                {
                    Poster === 'N/A' ?
                    <img src={`https://via.placeholder.com/400x267?text=${Title}`} className="card-img-top" alt="..." />
                    : <img src={Poster} className="card-img-top" alt="..." />
                }
                
            </div>
            <div className="card-body" style={{height: "25%"}}>
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">{Year} <span>{Type}</span></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
    </div>
    
  
}

export {Movie};