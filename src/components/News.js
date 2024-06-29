import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'general'
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  constructor(props) {
    super(props); // Correctly pass props to super()
    console.log("Constructor of News component");
    this.state = {
      articles: [],
      loading: true, // Set loading to true initially
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsMagazine`; // Set document title based on category
  }

  async componentDidMount() {
    await this.updateNews(); // Fetch news on component mount
  }

  async updateNews() {
    const { country, category, pagesize } = this.props;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=00a8d0a4a4ac435399610c3f83be3222&page=${this.state.page}&pagesize=${pagesize}`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        loading: false, // Set loading to false when data is fetched
        totalResults: parsedData.totalResults
      });
    } catch (error) {
      console.error('Error fetching news:', error);
      this.setState({ loading: false }); // Set loading to false in case of error
    }
  }

  handlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 }); // Decrement page for previous click
    await this.updateNews(); // Update news after page state is updated
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 }); // Increment page for next click
    await this.updateNews(); // Update news after page state is updated
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center' style={{ margin: '80px 0px' }}>News Headlines - {this.props.category}</h2>
        {this.state.loading && <Spinner />} {/* Show Spinner component when loading is true */}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 30) : " "}
                description={element.description ? element.description : " "}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                Author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1} // Disable previous button when on first page
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &laquo; Previous
          </button>
          <button
            disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))} // Disable next button when on last page
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
