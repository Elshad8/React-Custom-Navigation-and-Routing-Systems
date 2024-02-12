import {useState} from 'react';
import {GoChevronDown,GoChevronLeft} from 'react-icons/go';

function Accordion({items}){
    const[expendedIndex,setExpendedIndex]=useState(-1);
    
    const handleClick=(nextIndex)=>{
        if(nextIndex===expendedIndex){
            setExpendedIndex(-1);
        }
        else{
            setExpendedIndex(nextIndex);
        }
    };

    const renderedItems=items.map((item,index)=>{
        const isExpended=index===expendedIndex;

        const icon=<span className="text-2xl"> 
            {isExpended ? <GoChevronDown/>:<GoChevronLeft/>}
        </span>

        return(
            <div key={item.id}>
                <div className="justify-between flex p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=>handleClick(index)}>{item.label}{icon}</div>
                {isExpended && <div className="border-b p-5"> {item.content}</div>}
            </div>
            
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;