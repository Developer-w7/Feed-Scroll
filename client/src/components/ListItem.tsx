import React from "react";

type CustomColorPickerProps = {
  
  item:any
};
const ListItem: React.FC<CustomColorPickerProps> = ({
 item
}: CustomColorPickerProps): JSX.Element => {

  const node=item.node;
  const options:any = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour:'numeric', minute:'numeric' };
  const date:string=new Date(node.last_update).toLocaleDateString('en-IN',options).toUpperCase()
 
  return (
    
   <div>
   
      <div className="item-card">
      
        <div className="item-image">
          
       <img src={node.ImageStyle_thumbnail} alt="" />
       </div>
      <div className="item-content">
        
         <h4>{node.title.substring(0, 80)+"..."}</h4>
         <span>{date} {"IST"}</span>
      </div>
      </div>
      
    </div>
  );
}

export default ListItem;
