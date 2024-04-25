import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import Cards from './Card';



function Post() {
  
    const [news, setNews] = useState([]);


    const apiKey = "6a1869c478624a049d54b005af6de812";
                    

    useEffect(() =>{
            axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`)
            .then(response => {
                 setNews(response.data.articles) 
                // console.log(response.data.articles);
            } )
    },[apiKey])


    
    return (
        <Container>
        <Row>
            {news.map((abu, index) =>
            <>
        {/* <h1>{console.log(abu)}</h1>  */}
            <Cards
            index={abu.index}
            author={abu.auther} 
            content={abu.content} 
            description={abu.description} 
            publishedAt={abu.publishedAt} 
            title={abu.title} 
            url={abu.url} 
            urlToImage={abu.urlToImage} 
            />
            </>
        )}
        </Row>
        </Container>
    );
    


};

export default Post
