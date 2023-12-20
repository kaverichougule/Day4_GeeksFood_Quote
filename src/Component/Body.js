import "./Body.css";
import data from "./data.json";
import Card from "./Card";
function Body(){
    return(
        <div className="container">
            {
                data.map((CurrEle)=>{
                    return <Card quote={CurrEle.quote} author={CurrEle.author} />
                })
            }
        </div>
    );
}

export default Body;