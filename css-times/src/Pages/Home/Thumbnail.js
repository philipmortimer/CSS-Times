import './Thumbnail.css'

function prettyDate(date){
    var str = `${date.getDay()}/${date.getMonth()}/${date.getYear()}`
    console.log(date)
    return str;
}

export const Thumbnail = (props) => {
    console.log(props.article)
    const myArticle = props.article
    return(
        <div className="thumbnail">
            <img className="thumbnail-image" src={myArticle.mainPhoto.filePath} alt="really funny image" />
            <div className="thumbnail-text">
                <p className="thumbnail-headline"><strong>{myArticle.headline}</strong></p>
                <p className="thumbnail-descr">{myArticle.summaryForHomePage}</p>
                <p className="thumbnail-date">{prettyDate( myArticle.publishDate)}</p>
            </div>

        </div>

    )
}