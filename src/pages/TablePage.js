import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

function TablePage(){
    const data=[
        {
            name:"Orange",
            color:"bg-orange-500",
            score:5
        },
        {
            name:"Apple",
            color:"bg-green-200",
            score:3
        },
        {
            name:"Banana",
            color:"bg-yellow-400",
            score:1
        },
        {
            name:"Lime",
            color:"bg-green-600",
            score:4
        },
        {
            name:"Cherry",
            color:"bg-red-700",
            score:10
        }
    ];

    const config=[
        {
            label:"Name",
            render:(fruit)=>fruit.name,
            sortValue:(fruit)=>fruit.name
        },
        {
            label:"Color",
            render:(fruit)=> <div className={`p-3 m-2 ${fruit.color}`}/>
        },
        {
            label:"Score",
            render:(fruit)=>fruit.score,
            sortValue:(fruit)=>fruit.name
        },
        {
            label:"Score squared",
            render:(fruit)=>fruit.score**2,
            sortValue:(fruit)=>fruit.score**2
        }
    ];

    const keyFn=(fruit)=>{
        return fruit.name;
    };
    return(
        <div>
            <div><SortableTable data={data} config={config} keyFn={keyFn}/></div>
        </div>
        
    );
};

export default TablePage;