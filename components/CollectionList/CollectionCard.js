import Link from "next/link";

export default function CollectionCard({_id, title}){
    return(
        <>
           <Link href={`/${_id}`}>
        <p>{title}</p>
        </Link> 
        </>
    )
}