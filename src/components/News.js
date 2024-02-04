import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      "source": { "id": null, "name": "Scroll.in" },
      "author": "Simrin Sirur",
      "title": "Global warming can affect the ability of forests to suck carbon from atmosphere, shows study - Scroll.in",
      "description": "The findings by IIT-Bombay are significant given the emphasis on afforestation, especially in India, and the country’s net-zero ambitions.",
      "url": "https://scroll.in/article/1063017/global-warming-can-affect-the-ability-of-forests-to-suck-carbon-from-atmosphere-shows-study",
      "urlToImage": "https://sc0.blr1.cdn.digitaloceanspaces.com/book/198049-mbabjnjvsy-1706709709.jpg",
      "publishedAt": "2024-02-03T16:30:00Z",
      "content": "Forests are considered the most effective and abundantly available carbon sinks, capable of storing and sequestering millions of tonnes of carbon dioxide from the atmosphere. A new study from India j… [+9130 chars]"
    },
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": null,
      "title": "Mohun Bagan vs East Bengal LIVE ISL: Cleiton Scores As East Bengal Lead vs Mohun Bagan | Score 2-1 - NDTV Sports",
      "description": "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.",
      "url": "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vc3BvcnRzLm5kdHYuY29tL2luZGlhbi1zdXBlci1sZWFndWUvbW9odW4tYmFnYW4tdnMtZWFzdC1iZW5nYWwtbGl2ZS1pbmRpYW4tc3VwZXItbGVhZ3VlLTIwMjMtMjQtbGl2ZS11cGRhdGVzLTQ5ODU3MTjSAYIBaHR0cHM6Ly9zcG9ydHMubmR0di5jb20vaW5kaWFuLXN1cGVyLWxlYWd1ZS9tb2h1bi1iYWdhbi12cy1lYXN0LWJlbmdhbC1saXZlLWluZGlhbi1zdXBlci1sZWFndWUtMjAyMy0yNC1saXZlLXVwZGF0ZXMtNDk4NTcxOC9hbXAvMQ",
      "urlToImage": "https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw",
      "publishedAt": "2024-02-03T15:51:47Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "Rezaul H Laskar",
      "title": "Abhay Thakur set to be new envoy to Russia: Officials - Hindustan Times",
      "description": "Abhay Thakur is the officer on special duty for G20 and played a key role in negotiations during India’s presidency of the grouping of the world’s 20 largest economies | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/abhay-thakur-set-to-be-new-envoy-to-russiaofficials-101706974123270.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/India-s-envoy-to-Russia--Pavan-Kapoor--has-been-ap_1706974109959.jpg",
      "publishedAt": "2024-02-03T15:28:42Z",
      "content": "Senior diplomat Pavan Kapoor, currently Indias envoy to Russia, was on Saturday appointed the new secretary (west) in the external affairs ministry, while Jaideep Mazumdar, currently the ambassador t… [+3033 chars]"
    },
    {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "HT News Desk",
      "title": "On Gyanvapi, Bageshwar Dham chief says, 'Certain that Shankar ji will emerge' - Hindustan Times",
      "description": "Dhirendra Shastri said Nandi ji has emerged at Gyanvapi and it is certain that Lord Shiv will also appear.  | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/on-gyanvapi-bageshwar-dham-chief-says-certain-that-shankar-ji-will-emerge-101706973301996.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/Gyanvapi_mandir_photo_vyas_ji_ka_tahkhana_1706973411464_1706973411714.jpg",
      "publishedAt": "2024-02-03T15:25:47Z",
      "content": "Bageshwar Dham chief or popularly known as 'sarkar', Dhirendra Shastri on Saturday said Nandi God has already emerged in Gyanvapi and it is certain that 'Shankar ji will also emerge'. \"If you are que… [+2467 chars]"
    },
    {
      "source": { "id": "the-hindu", "name": "The Hindu" },
      "author": "The Hindu",
      "title": "India recorded over 14 lakh cancer cases in 2022 - The Hindu",
      "description": null,
      "url": "https://www.thehindu.com/news/national/telangana/india-recorded-over-14-lakh-cancer-cases-in-2022/article67808506.ece",
      "urlToImage": null,
      "publishedAt": "2024-02-03T15:13:00Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "HT Sports Desk",
      "title": "Don't over-hype his achievements and give him tags: Gambhir's razor-sharp warning after Yashasvi Jaiswal's double ton - Hindustan Times",
      "description": "After finishing unbeaten on 179 at the end of Day 1, he converted his overnight score to an epic 209 off 290 balls to power India to 396 | Cricket",
      "url": "https://www.hindustantimes.com/cricket/ind-vs-eng-2nd-test-dont-over-hype-his-achievements-give-him-tags-gautam-gambhir-warning-yashasvi-jaiswal-double-ton-101706969253120.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/gambhir_yas_1706969597955_1706969610041.jpg",
      "publishedAt": "2024-02-03T15:08:49Z",
      "content": "It was a record-breaking outing for two players, who combined to decimate England, albeit playing different roles. If it was Jasprit Bumrah with the ball, as he recorded his best-ever bowling figures… [+2176 chars]"
    },
    {
      "source": { "id": "the-times-of-india", "name": "The Times of India" },
      "author": "TOI Sports Desk",
      "title": "'Don't know what Stokes was thinking': Jasprit Bumrah on England skipper's puzzled reaction after dismiss - Times of India",
      "description": "Cricket News: Read about Jasprit Bumrah's remarkable performance in the second Test against England and how he left the England skipper bewildered with his magical deliveries. Find out more about Bumrah's bowling prowess and the impact he had on the match.",
      "url": "https://timesofindia.indiatimes.com/sports/cricket/england-in-india/dont-know-what-stokes-was-thinking-jasprit-bumrah-on-england-skippers-puzzled-reaction-after-dismissal/articleshow/107388900.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-107388986,width-1070,height-580,imgsize-59238,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2024-02-03T14:32:00Z",
      "content": "2nd Test: Jaiswal 209, Bumrah six-for put India on top"
    },
    {
      "source": { "id": null, "name": "Figo.org" },
      "author": null,
      "title": "Uniting Against Women's Cancer on World Cancer Day 2024 - International Federation of Gynecology and Obstetrics",
      "description": "On World Cancer Day 2024, we come together to raise awareness, inspire action, and foster a sense of unity in the global fight against cancer. Cancer affects millions of lives worldwide and women face distinct challenges. From breast and ovarian cancers to ce…",
      "url": "https://www.figo.org/news/uniting-against-womens-cancer-world-cancer-day-2024",
      "urlToImage": "https://www.figo.org/sites/default/files/styles/news_image/public/2024-02/We%20need%20to%20keep%20our%20eyes%20on%20the%20ball%2C%20once%20we%20lose%20sight%20of%20a%20good%20cause%20we%20could%20end%20up%20rebounding%20on%20abortion.%20The%20Livingstone%20Safe%20Abortion%20Care%20charter%20will%20set%20the%20way%20forward.%20%284%29.jpg?itok=M0Yx_vRL",
      "publishedAt": "2024-02-03T14:26:33Z",
      "content": "On World Cancer Day 2024, we come together to raise awareness, inspire action, and foster a sense of unity in the global fight against cancer.\r\nCancer affects millions of lives worldwide and women fa… [+742 chars]"
    },
    {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "HT News Desk",
      "title": "ED approaches court against Kejriwal for skipping summons 5 times - Hindustan Times",
      "description": "The ED has now approached the Rouse Avenue court against Kejriwal as the Delhi CM skipped all five of its summons.  | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/ed-approaches-court-against-kejriwal-for-skipping-summons-5-times-101706969017892.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/ED_court_kejriwal_1706969104793_1706969105026.jpg",
      "publishedAt": "2024-02-03T14:05:32Z",
      "content": "The Enforcement Directorate on Saturday approached a Delhi Court against Delhis chief minister Arvind Kejriwal for non-compliance with the summons issued to him in the money laundering case related t… [+2052 chars]"
    },
    {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "HT Entertainment Desk",
      "title": "Kangana Ranaut, Mandira Bedi criticise Poonam Pandey's 'pathetic and cheap publicity stunt': She should be boycotted - Hindustan Times",
      "description": "Bipasha Basu, Arti Singh, Gulshan Devaiah and Ashoke Pandit, among others, also slammed Poonam Pandey. Her team had claimed that she died from cervical cancer.",
      "url": "https://www.hindustantimes.com/entertainment/tv/kangana-ranaut-mandira-bedi-criticise-poonam-pandeys-pathetic-and-cheap-publicity-stunt-she-should-be-boycotted-101706962407046.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/Kangana_Ranaut_1706967153870_1706967170965.jpg",
      "publishedAt": "2024-02-03T13:45:03Z",
      "content": "Several celebrities, including Kangana Ranaut, Bipasha Basu, Mandira Bedi, Mini Mathur have criticised actor-model Poonam Pandey's reappearance on social media a day after her team claimed that she d… [+5186 chars]"
    },
    {
      "source": { "id": null, "name": "Livemint" },
      "author": "Devesh Kumar",
      "title": "Jharkhand political crisis: Ranchi court allows Hemant Soren to vote in floor test on 5 Feb | 10 things you need to know | Mint - Mint",
      "description": "Jharkhand Advocate General Rajiv Ranjan said that the Enforcement Directorate vehemently objected to any such permission to Hemant Soren, but the court allowed our plea",
      "url": "https://www.livemint.com/politics/news/jharkhand-political-crisis-ranchi-court-allows-hemant-soren-to-vote-in-floor-test-on-5-feb-10-things-you-need-to-know-11706962855358.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/02/03/1600x900/India-Jharkhand-Chief-Minister-1_1706963911100_1706963938012.jpg",
      "publishedAt": "2024-02-03T12:58:10Z",
      "content": "Amid intense political activity in Jharkhand, a special Ranchi court on Saturday allowed former chief minister Hemant Soren to participate in the floor test on 5 February, which will seal the fate of… [+3159 chars]"
    },
    {
      "source": { "id": null, "name": "NDTV News" },
      "author": null,
      "title": "\"Cops Being Made To Do Drama\": Arvind Kejriwal On 'MLA-Poaching' Notice - NDTV",
      "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
      "url": "https://www.ndtv.com",
      "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
      "publishedAt": "2024-02-03T12:53:08Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "NDTV News" },
      "author": null,
      "title": "US Strikes On Iraq, Syria \"Pour Oil On The Fire\", Says Hamas - NDTV",
      "description": "Palestinian militant group Hamas on Saturday condemned overnight US strikes in Iraq and Syria, saying Washington had poured \"oil on the fire\" in the Middle East.",
      "url": "https://www.ndtv.com/world-news/us-strikes-on-iraq-syria-pour-oil-on-the-fire-says-hamas-4987171",
      "urlToImage": "https://c.ndtvimg.com/2024-02/es1u59uo_us-iraq_625x300_03_February_24.jpeg",
      "publishedAt": "2024-02-03T12:43:08Z",
      "content": "The US military said it attacked a total of 85 targets at seven different sites in Syria and Iraq.\r\nPalestinian Territories: Palestinian group Hamas on Saturday condemned overnight US strikes in Iraq… [+1732 chars]"
    },
    {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "Zarafshan Shiraz",
      "title": "Cervical cancer: Causes, signs, prevention tips and more about HPV infection - Hindustan Times",
      "description": "HPV is behind 95% of the cases of cervical cancer, the 2nd cause of death from cancer in females in India. Here's all about its causes, symptoms, prevention etc | Health",
      "url": "https://www.hindustantimes.com/lifestyle/health/cervical-cancer-causes-symptoms-prevention-tips-and-everything-you-need-to-know-about-hpv-infection-101706962871023.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/_0d9826ba-9c67-11e7-a38e-8ee9fe2ac8e7_1706963158360.jpg",
      "publishedAt": "2024-02-03T12:42:12Z",
      "content": "January is marked as cervical cancer awareness month but Bollywood actor and model Poonam Pandey's death hoax has once again brought the deadly disease into spotlight where beneath the surface lies a… [+4661 chars]"
    },
    {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "HT Entertainment Desk",
      "title": "Vijay Varma says he cried watching Vikrant Massey in 12th Fail - Hindustan Times",
      "description": "Vikrant Massey's performance in 12th Fail has been receiving praise from many celebrities including Alia Bhatt, Vicky Kaushal and Kareena Kapoor. | Bollywood",
      "url": "https://www.hindustantimes.com/entertainment/bollywood/vijay-varma-says-he-cried-watching-12th-fail-101706959315956.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/vijay_1706959839203_1706959839522.jpg",
      "publishedAt": "2024-02-03T11:55:04Z",
      "content": "Vikrant Massey's performance in 12th Fail has been earning acclaim from several stars in the industry. Now, actor Vijay Varma has joined the list, when he revealed that he cried while watching Vikran… [+2004 chars]"
    },
    {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "Reuters",
      "title": "Fourth court conviction for Pakistan's ex-PM Imran Khan, gets 7 years in prison - Hindustan Times",
      "description": "It was the third adverse ruling against the embattled former prime minister this week | World News",
      "url": "https://www.hindustantimes.com/world-news/pakistans-ex-pm-imran-khan-wife-get-7-years-in-prison-for-unlawful-marriage-101706958541917.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/03/1600x900/PAKISTAN-POLITICS-KHAN-CRACKDOWN-0_1689412579051_1706959237161.JPG",
      "publishedAt": "2024-02-03T11:30:52Z",
      "content": "Pakistan former Prime Minister Imran Khan and his wife Bushra Khan were sentenced to seven years in prison and fined on Saturday by a court that ruled their 2018 marriage violated the law, his party … [+1516 chars]"
    },
    {
      "source": { "id": null, "name": "Livemint" },
      "author": "Livemint",
      "title": "Union Minister Rajeev Chandrasekhar reacts to Paytm controversy: 'Being FinTech doesn't absolve anybody from...' | Mint - Mint",
      "description": "While reacting on the PayTM controversy, Union Minister Rajeev Chandrasekhar reportedly said the regulator has an absolute authority to regulate an entity.",
      "url": "https://www.livemint.com/companies/news/union-minister-rajeev-chandrasekhar-reacts-to-paytm-controversy-being-fintech-doesnt-absolve-anybody-11706959099596.html",
      "urlToImage": "https://www.livemint.com/lm-img/img/2024/02/03/1600x900/ANI-20240116311-0_1706959232766_1706959251631.jpg",
      "publishedAt": "2024-02-03T11:26:16Z",
      "content": "Union Minister Rajeev Chandrasekhar reportedly reacted to the latest controversy on PayTm and said on Saturday that being a fintech or a technology company does not exempt any entity from regulatory … [+3427 chars]"
    },
    {
      "source": { "id": null, "name": "India Today" },
      "author": "India Today City Desk",
      "title": "Pune professor, 5 students arrested for 'Ramleela' play showing Sita smoking - India Today",
      "description": "In a viral video showing the play being staged at Pune University a male artist portraying Sita was shown smoking a cigarette and using abusive language",
      "url": "https://www.indiatoday.in/cities/pune/story/savitribai-phule-pune-university-professor-students-arrested-ramleela-sita-smoking-2497162-2024-02-03",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/savitribai-phule-pune-university-035639463-16x9_0.jpeg?VersionId=72a3RSzhhsFd6DZma5XZAPcEVO2TfG1v",
      "publishedAt": "2024-02-03T11:05:57Z",
      "content": "A professor and five students of Savitribai Phule Pune University were arrested for allegedly hurting religious sentiments of the Hindu community, news agency PTI reported.\r\nThe arrest came over a pl… [+1065 chars]"
    },
    {
      "source": { "id": null, "name": "Koimoi" },
      "author": "Shalmesh More",
      "title": "Fighter Box Office (Worldwide): Crosses 250 Crores Milestone, Beats Baaghi 2 & Ae Dil Hai Mushkil - Koimoi",
      "description": "Fighter has crossed another milestone at the worldwide box office and surpassed the lifetime of Bollywood biggies. Read to know more!",
      "url": "https://www.koimoi.com/box-office/fighter-box-office-worldwide-crosses-250-crores-milestone-beats-baaghi-2-ae-dil-hai-mushkil/",
      "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2024/02/fighter-box-office-worldwide-crosses-250-crores-milestone-beats-baaghi-2-ae-dil-hai-mushkil.jpg",
      "publishedAt": "2024-02-03T10:57:32Z",
      "content": "Fighter Beats Baaghi 2 &amp; Ae Dil Hai Mushkil At The Worldwide Box Office (Picture Credit: IMDb)\r\nHrithik Roshan’s Fighter is definitely underperforming in its theatrical run but doing its best to … [+2493 chars]"
    },
    {
      "source": { "id": null, "name": "The Indian Express" },
      "author": "Tech Desk",
      "title": "From iQOO Neo 9 Pro to Nothing Phone (2a): Smartphones expected in February 2024 - The Indian Express",
      "description": "From the much anticipated Nothing Phone (2a) to the Xiaomi 14 Ultra, here are some smartphones that might come to India this month.",
      "url": "https://indianexpress.com/article/technology/mobile-tabs/from-iqoo-neo-9-pro-to-nothing-phone-2a-smartphones-expected-in-february-2024-9142316/",
      "urlToImage": "https://images.indianexpress.com/2024/02/Xiaomi-14-Ultra.jpg",
      "publishedAt": "2024-02-03T10:46:16Z",
      "content": "The first month of 2024 saw a plethora of smartphones from the mid-range Realme 12 series to the flagship Galaxy S24 series. Just like last month, we expect companies like iQOO, Honor and Nothing to … [+2574 chars]"
    }
  ]
  constructor(){
    super();
    this.state = {
        articles: this.articles,
        loading: false
    }
  } 
  
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c104df43be474f969a752555a0452e90"
    let data = await fetch(url); 
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container">
        <h3 className="my-3" style={{textAlign: "center"}}>News Monk - Top Headlines</h3>
        <hr/>
        <div className="container my-5">
          <div className="row mx-10" >
            {this.state.articles.map((article) => { 
                return <div className="col-md-3" key={article.url} style={{marginBottom: "30px"}}>
                    <NewsItem
                  imageUrl={article.urlToImage}
                  title={article.title ? article.title.slice(0, 45) : console.log(article.title)}
                  description={article.description ? article.description.slice(0, 88) : ''}
                  newsUrl={article.url}
                />
                </div>
            })}
          </div>
        </div>
      </div>
    );
  }
}
