export default function Book({book}){
    return (
        <>
            <h1>{book.name}</h1>
            <p>{book.description}</p>
            <img src={book.img} alt=""/>
        </>
    )
}