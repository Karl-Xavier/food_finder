import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const RecipeResults = ({ data }) => {
    if(!data || !data.results || data.results.length === 0){
        return (<p style={{textAlign: "center", margin: "10px 0 10px 0", fontWeight: "bold"}}>Nothing Here</p>);
    }

  return (
    <div className="container">
        <p style={{textAlign: "center", margin: "10px 0 10px 0", fontWeight: "bold", color: "blue", fontStyle: "italic"}}>Showing {data.results.length} results</p>
        <div className="row">
            {data.results.map((recipe) => {
                return( 
                        <div key={recipe.id} className="col-lg-4 col-md-6 col-sm-6 text-center">
                            <img className="img-fluid rounded" src={recipe.image} alt={recipe.title}/>
                            <h2>{recipe.title}</h2>
                        </div>
                );
            })}
        </div>
    </div>
  )
}

export default RecipeResults