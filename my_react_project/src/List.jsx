import propTypes from "prop-types"
// function List(){
    // const fruit =[{id:1, name:"apple", calories:95},
    //               {id:2, name:"orange", calories:45},
    //               {id:3, name:"banana", calories:105},
    //               {id:4, name:"coconut", calories:159},
    //               {id:5, name:"pineapple", calories:37},]

    //fruit.sort((a,b)=>a.name.localeCompare(b.name)); //alphabetical
    //fruit.sort((a,b)=>b.name.localeCompare(a.name)); //reverse alphabetical
    //fruit.sort((a,b)=>a.calories - b.calories); //numarical
    //fruit.sort((a,b)=>b.calories - a.calories); // reverse numerical

    // const lowcalfruit = fruit.filter(fruit => fruit.calories < 100); //fruits with less than 100 calaries
    // const highcalfruit = fruit.filter(fruit => fruit.calories >= 100); //fruits with more than 100 calaries

    

                  
    // const listItems = fruit.map(fruit => <li key={fruit.id}>
    //                                              {fruit.name}: &nbsp; 
    //                                              <b>{fruit.calories}</b></li>)
    // return (<ol>{listItems}</ol>);

function List(props){
    const category = props.category
    const itemlist = props.items

    const listItems = itemlist.map(item => <li key={item.id}>
        {item.name}: &nbsp; 
        <b>{item.calories}</b></li>)
    return (<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>);
}
List.PropTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({  id: propTypes.number,
                                                name: propTypes.string,
                                                calories: propTypes.number}))
}
List.defaultProps = {
    category: "category",
    item:[],
}
export default List