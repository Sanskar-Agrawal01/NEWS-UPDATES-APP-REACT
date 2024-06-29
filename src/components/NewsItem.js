import React, { Component } from 'react'
import index from 'regexp.prototype.flags';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, Author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "" }}>
          <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/osiris-apex-294727280-16x9_0.jpg?VersionId=gAfngt5ITtbKmH4d3VbOnIBomoYk7S6l" : imageUrl} className="card-img-top" alt=".." />
          <div className="card-body">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zindex:'1'}}>
{source}
              <span class="visually-hidden">unread messages</span>
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small className="text-body-secondary">By {!Author ? "Unknown" : Author} on {new Date(date).toGMTString()}</small></p>

            <a href={newsUrl} target="_blank" className="btn-btn-sm btn btn-dark" rel="noreferrer">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
