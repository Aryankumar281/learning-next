import { Metadata } from "next";
import Link from "next/link";

export const metadata : Metadata = {
    title:"Metadata example",
    description:"this is the example to wrte the meta data for more go to official website"
}

function MetadataExample() {
    const examples = [
        {
            id:"1",title:"ONE"
        },
        {
            id:"2",title:"TWO"
        },{
            id:"3",title:"THREE"
        }
    ]
    return (
        <div>
            <h1>Metadata Example</h1>
            <ul>
                {examples.map(example=>(
                    <li key={example.id}>
                        <Link href={`/metadata-example/${example.id}`}>{example.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MetadataExample;