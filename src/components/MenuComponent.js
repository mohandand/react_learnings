import React, { useState }  from 'react';
import { Card, CardImg,CardImgOverlay,CardText, CardBody,CardTitle } from 'reactstrap';
const Menu = ({dishes}) => {
    const[selectedDish, setSelectedDish] = useState(null);

        function onDishSelected(dish){
            setSelectedDish(dish);
            console.log(selectedDish);
        }
        
        const renderDish = (dish) =>{
            if (dish != null)
                return(
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
            else
                return(
                    <div></div>
                );
        }
        
        const Menu = dishes.map((dish) => { return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                 <Card onClick={()=>{onDishSelected(dish)}}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay body className="ml-5">
                      <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                  </Card>
                </div>
        )
    });
    return(
        <div className="container">
            <div className="row">
                 {Menu}
            </div>
            <div  className="col-12 col-md-5 m-1">
                {renderDish(dishes)}
            </div>
        </div>
    );
}

export default  Menu