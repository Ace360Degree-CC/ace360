import Link from "next/link";


export default function Header(){
    return(
        <>
            <h1>My header</h1>

            <ul>
                <Link href={'/'}><li>Home </li></Link>
                <Link href={'/about'}><li>About </li></Link>
                
            </ul>
        </>
    )
}