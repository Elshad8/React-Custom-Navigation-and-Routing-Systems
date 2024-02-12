import Accordion from '../components/Accordion';

function AccordionPage(){
    const items=[
        {
            id:'abc123',
            label:'Can u use C++ Programming language?',
            content:'C++ is object orianted language. I learned that programming language at the firs year at my university'
        },
        {
            id:'def123',
            label:'Can you use C# programming language ?',
            content:'C# is object orianted language. I learned that programming language at the seond year at my university'
        },
        {
            id:'ghj123',
            label:'Can you use Java prgramming language?',
            content:'Java is object orianted language. I learned that programming language at the seond year at my university'
        }
    ];


    return <Accordion items={items}/>;

}

export default AccordionPage;