import './articles.css';
function Articles({image,title,date,desc}){
    return(
        <article className="article">
        {image&&
        <img src={image} alt={title} />}
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className="case">
        <button>Audit</button>
        <h5 className='date'>{date}</h5>
        </div>
        </article>
    )
}
export default Articles;