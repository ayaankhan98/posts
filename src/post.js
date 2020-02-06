import React from 'react';
import './App.css';

class Post extends React.Component {
    posts = [

        {
            title: "This is post 4",
            content: {
                text : "Today Microsoft announced an ambitious goal and a detailed plan to become carbon negative by 2030. Not only for our direct emissions but for our supply and value chains as well. We’re also committing that by 2050 we’ll remove from the environment all the carbon Microsoft has emitted either directly or for electricity consumption since the company was founded in 1975. We’re sharing today the new steps we’re taking, including work with our customers and the launch of a new $1 billion Climate Innovation Fund to accelerate the development of new technology to get us to our goals faster. You can read about our goals and plan here:",
                pdf : false,
                image : false,
                video : "https://www.youtube.com/embed/j3mYki1SrKE",
            }
        },
        {
            title: "This is post 1",
            content: {
                text : "The past week marked a flurry of articles from media outlets, as Jeff Bezos stepped into the Indian soil on a 3-day visit to mark a $1 Billion investment into Amazon Indias business in what he remarked of as a century for India. Amidst all these announcements also lay a promise, to take the number of employees in India from 700K to 1 Million over the next 5 years. As we enunciated in our last edition, why is hiring such an important point of discussion? It’s because of the striking contrasts that the industry always shows us - where we observe OYO laying off more than 2000 people in India to scale to profitability, and an e-commerce giant committing to growth in employment, all in the same country. ",
                pdf : "http://www.africau.edu/images/default/sample.pdf",
                image : false,
                video : false,
            }
        },

        {
            title: "This is post 2",
            content: {
                text : "Today Microsoft announced an ambitious goal and a detailed plan to become carbon negative by 2030. Not only for our direct emissions but for our supply and value chains as well. We’re also committing that by 2050 we’ll remove from the environment all the carbon Microsoft has emitted either directly or for electricity consumption since the company was founded in 1975. We’re sharing today the new steps we’re taking, including work with our customers and the launch of a new $1 billion Climate Innovation Fund to accelerate the development of new technology to get us to our goals faster. You can read about our goals and plan here:",
                pdf : false,
                image : ["https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            ],
                video : false,
            }
        },

        {
            title: "This is post 3",
            content: {
                text : "Today Microsoft announced an ambitious goal and a detailed plan to become carbon negative by 2030. Not only for our direct emissions but for our supply and value chains as well. We’re also committing that by 2050 we’ll remove from the environment all the carbon Microsoft has emitted either directly or for electricity consumption since the company was founded in 1975. We’re sharing today the new steps we’re taking, including work with our customers and the launch of a new $1 billion Climate Innovation Fund to accelerate the development of new technology to get us to our goals faster. You can read about our goals and plan here:",
                pdf : false,
                image : false,
                video : "https://www.youtube.com/embed/zpOULjyy-n8?rel=0",
            }
        },
        
        {
            title: "This is post 2",
            content: {
                text : "Today Microsoft announced an ambitious goal and a detailed plan to become carbon negative by 2030. Not only for our direct emissions but for our supply and value chains as well. We’re also committing that by 2050 we’ll remove from the environment all the carbon Microsoft has emitted either directly or for electricity consumption since the company was founded in 1975. We’re sharing today the new steps we’re taking, including work with our customers and the launch of a new $1 billion Climate Innovation Fund to accelerate the development of new technology to get us to our goals faster. You can read about our goals and plan here:",
                pdf : false,
                image : ["https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            ],
                video : false,
            }
        },
        {
            title: "This is post 2",
            content: {
                text : "Today Microsoft announced an ambitious goal and a detailed plan to become carbon negative by 2030. Not only for our direct emissions but for our supply and value chains as well. We’re also committing that by 2050 we’ll remove from the environment all the carbon Microsoft has emitted either directly or for electricity consumption since the company was founded in 1975. We’re sharing today the new steps we’re taking, including work with our customers and the launch of a new $1 billion Climate Innovation Fund to accelerate the development of new technology to get us to our goals faster. You can read about our goals and plan here:",
                pdf : false,
                image : ["https://image.jimcdn.com/app/cms/image/transf/none/path/s0772ba2b4d6ea18a/backgroundarea/i72fe7fd4c6f92da9/version/1521591854/image.jpg",
            ],
                video : false,
            }
        },
        {
            title: "This is post 2",
            content: {
                text : "Today Microsoft announced an ambitious goal and a detailed plan to become carbon negative by 2030. Not only for our direct emissions but for our supply and value chains as well. We’re also committing that by 2050 we’ll remove from the environment all the carbon Microsoft has emitted either directly or for electricity consumption since the company was founded in 1975. We’re sharing today the new steps we’re taking, including work with our customers and the launch of a new $1 billion Climate Innovation Fund to accelerate the development of new technology to get us to our goals faster. You can read about our goals and plan here:",
                pdf : false,
                image : ["https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            ],
                video : false,
            }
        },
    ]

    renderText = (post) => {
        if (post.content.text) {
            return (
                <div>
                    {post.content.text}
                </div>
            )
        }
        return      
    }

    renderPdf = (post) => {
        if (post.content.pdf) {
            return (
                <div>
                    <div class="embed-responsive embed-responsive-1by1">
                        <iframe className="embed-responsive-item" src={post.content.pdf} />
                    </div>
                </div>
            )
        }
        return 

    }

    renderVideo = (post) => {
        if (post.content.video) {
            return (
                <div>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src={post.content.video} allowfullscreen></iframe>
                    </div>
                </div>
            )
        }
        return 
    }

    renderImage = (post) => {
        if (post.content.image) {
            return (
                <div>
                    <img src={post.content.image} width="100%" />
                </div>
            )
        }
    }
    render () {
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-2">
                        </div>
                    <div className="col-md-8">
                        {this.posts.map((post,i) => {
                            if (post) {
                                return (
                                    <div key={i} className="card mt-5">
                                        <div className="card-header">
                                            <strong>{post.title}</strong>   
                                        </div>
                                       
                                        <div className="card-body">
                                            {this.renderPdf(post)}
                                            {this.renderVideo(post)}
                                            {this.renderImage(post)}
                                            <br/>
                                            {this.renderText(post)} 
                                        </div>
                                        <hr/>
                                        <div>
                                            <pre className="ml-4 text-success">
                                            Like Comment Share
                                            </pre>
                                        </div>
                                    </div>                                  
                                )
                            } 
                        })}
                    </div>
                    <div class="col-md-2">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Post