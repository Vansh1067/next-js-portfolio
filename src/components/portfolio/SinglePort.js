
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default function SinglePort({ portfolio }) {

    return (
        <div className="port">
            <h2 className="title">{portfolio.fields.title}</h2><br></br>

            <p dangerouslySetInnerHTML={{ __html: documentToHtmlString(portfolio.fields.desc) }}></p>
            <p className="cat"><b>Project Category: {portfolio.fields.category.fields.title}</b></p>
            <img className="img-w100p" src={portfolio.fields.thumbnail.fields.file.url} />
        </div >
    )
}
