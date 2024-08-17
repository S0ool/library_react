import Book from "./book.jsx";

function MapBooks({books}){
    return books.map((e,key)=>{
        return (
            <>
                <div className={'book'}>
                <Book book={e} key={key}></Book>
                </div>
            </>
        )
    })
}
export default function Books({books}){
    return (
        <div className={'books'}>

            <MapBooks books={books}></MapBooks>
        </div>
    )
}