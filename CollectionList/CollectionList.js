import Collection from "@/db/models/Collection";
import CollectionCard from "./CollectionCard";

export default function CollectionList({collections}){
    return(
        <ul>
            {collections.map((collection) => (
                <li key={collection._id}>
                    <CollectionCard 
                        _id={collection._id}
                        title={collection.title}
                    />    
                </li>
            ))}
        </ul>
    )
}