import React, { useState } from "react";
import './Ns.css';
function Ns(){
    const[question, setQuestion] =useState(false);
    const[article, setArticle] = useState(false);

    const handleQuestionClick = () => {
        setQuestion(true);
        setArticle(false); 
      };
    
      const handleArticleClick = () => {
        setArticle(true);
        setQuestion(false); 
      };
    return(
        
        <>
            <div className="new">
                <h2 className="head">New ns</h2>
            </div>
            
            <form className="sheet">
            <h2 className="Head">Select ns option: </h2>
            
                <input  type="radio" id="question" name="language" value="Question"   onClick={handleQuestionClick}/>
                <label  for="question">Question</label><br/>

                 <input type="radio" id="article" name="language" value="Article" onClick={handleArticleClick} />
                <label for="article">Article</label> 
            </form>
            

          


            {  question && 
            <div>
            <div className="border">
            <p className="prescription">What do you want to ask or share</p>
            </div>
            <div className="Title_add">
          <label for="title">Title</label>
            <input className="Title" type="text" placeholder="Start your question" name="title"/>

            </div>
            <div className="Second">
                <h3 className="desc">Describe your Problem</h3>
                <textarea id="area" rows="10" cols="50"></textarea>
            </div>
            <div className="Tags">
            <p>Tags</p>
            <input type="text" id="text" placeholder="Add upto 3 tags"/>
            </div>
            <div className="buttons">
            <button>ns</button>

            </div>
            </div>
            }

            {  article && 
            <div className="Article_Margin">
            <div className="Heading_Border">
            <p className="Text_Adding">What do you want to ask or share</p>
            </div>
            <div className="Title_add">
          <label for="title">Title</label>
            <input className="Title" type="text" placeholder="Start your question" name="title"/>

            </div>
            <div>
            <h3 className="textbox">Abstract</h3>
                <textarea id="area" rows="3" cols="20">Enter a 1 paragraph</textarea>
            </div>
            <div className="Second">
                <h3 className="textbox">Describe your Problem</h3>
                <textarea id="area" rows="10" cols="50"></textarea>
            </div>
            <div className="Tags">
            <p>Tags</p>
            <input type="text" id="text" placeholder="Add upto 3 tags"/>
            </div>
            <div className="button">
            <button>ns</button>

            </div>
            </div>
            }
            
            
        </>
    )
}
export default Ns;