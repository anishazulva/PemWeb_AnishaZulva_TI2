import React, {Component} from "react";
import Images from "./images";

class List extends Component {
    render () {
        return(
            <div> 
                <ol>
                    <li>1 <Images srcGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"/></li>
                    <li>1 <Images srcGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/></li>
                    <li>1 <Images srcGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/></li>
                    <li>1 <Images srcGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/></li>
                    
                </ol>
            </div>
        )
    }
}
export default List;