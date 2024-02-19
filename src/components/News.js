import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  articles = []
  nextFlag = true;

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
      country: PropTypes.string,
      category: PropTypes.string,
      pageSize: PropTypes.number
  }

  constructor(){
    super();
    this.state = {
        articles: this.articles,
        loading: false, 
        page: 1, 
        totalResults:0
    }
  } 
  
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
    this.setState({
      loading: true
    })
    setTimeout(async () => {
      let data = await fetch(url); 
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles, 
        totalResults: parsedData.totalResults,
        loading: false,
      })
    }, 1000)

    document.title = 'News Monk - '+ this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1).toLowerCase() ;
  }


  updateNews = async () => {
    this.props.setProgress(0); // Assuming setProgress is used to manage loading progress
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
  
    try {
      const response = await fetch(url);
      const parsedData = await response.json();
  
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
      });
  
      this.props.setProgress(100); // Assuming setProgress is used to manage loading progress
    } catch (error) {
      console.error('Error updating news:', error);
    }
  }
  

  fetchMoreData = async () => {
    this.setState({page: this.state.page +1});
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`
    this.setState({
      loading: true
    })
      let data = await fetch(url); 
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults, 
        loading: false,
      })
  }

  handlePrevOnClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page -1}&pageSize=${this.props.pageSize}`
    this.setState({
      loading: true
    })
    setTimeout(async () => {
      let data = await fetch(url); 
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles})
      this.setState({
        loading: false
      })
      this.setState({
        page: this.state.page -1
      })
    }, 1000)
  }

  handleNextOnClick = async () => {
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/20))){ 
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page +1}&pageSize=${this.props.pageSize}`
      this.setState({
        loading: true
      })
      setTimeout(async () => {
        let data = await fetch(url); 
        let parsedData = await data.json();
        this.setState({
          articles: parsedData.articles,
          loading: false,
          totalResults:  parsedData.totalResults
        })
        this.setState({
          
        })
        this.setState({
          page: this.state.page +1
        })
      }, 1000)
    }
  }

  render() {
    return (
      <div className="container">
        <h3 className="my-3 text-center" style={{fontFamily: `'Protest Revolution', sans-serif`, fontSize: '50px'}}>{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1).toLowerCase() } - Top Headlines</h3>
        <hr/>
        {/* {!this.state.loading && <div className="container d-flex justify-content-between my-5">
          <button disabled={this.state.page<=1} type="button" className="btn btn-warning" style={{borderRadius: '20px'}} onClick={this.handlePrevOnClick}>&larr; Prev</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} style={{borderRadius: '20px'}} type="button" className="btn btn-success" onClick={this.handleNextOnClick}>Next &rarr;</button>
        </div>} */}

        <div className="container my-5" style={{marginLeft: '25px'}}>
        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
           <div className="container">
           <div className="row mx-10" >
              {!this.state.loading && this.state.articles.map((article) => { 
                  return <div className="col-md-3" key={article.url} style={{marginBottom: "30px"}}>
                      <NewsItem
                    imageUrl={article.urlToImage}
                    title={article.title ? article.title.slice(0, 45) : console.log(article.title)}
                    description={article.description ? article.description.slice(0, 88) : ''}
                    newsUrl={article.url}
                    authorName={article.author ? article.author : 'Unknown'}
                    publishedBy={article.publishedAt}
                    source={article.source}
                  />
                  </div>
              })}
            </div>
           </div>
          </InfiniteScroll>
        </div>
        {/* {!this.state.loading && <div className="container d-flex justify-content-between my-5">
          <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handlePrevOnClick} style={{borderRadius: '20px'}}>&larr; Prev</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-success" style={{borderRadius: '20px'}} onClick={this.handleNextOnClick}>Next &rarr;</button>
        </div>} */}
      </div>
    );
  }
}
