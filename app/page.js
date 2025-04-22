
'use client';

import { useRouter } from "next/navigation";
import { useState ,useRef, useEffect } from "react";

export default function HomePage(){
    const router = useRouter();
    const myForm = useRef(null);
    const pranva = useRef(null);
    const roshan = useRef(null);

    const[loading,setLoading] = useState(true);
    // UseState();
    // useEffect();
    // useRef();
    // useRouter();

    const submitForm = (e)=>{
        e.preventDefault();
        const myformdata = new FormData(myForm.current);
        for (let [key, value] of myformdata.entries()) {
            console.log(`${key}: ${value}`);
        }  
    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },3000)
       
    },[])
        
    
    return (
        <>
            {loading?'Please wait....':'Loaded'}

            <p>Lorem Ipsum testing</p>

            <img src={'/images/home/download.png'} />

            <h1 ref={pranva}>Pranav</h1>
            <h1 ref={roshan}>Roshan</h1>

            <form ref={myForm}  onSubmit={submitForm}>
                <label>My form</label>
                <div>
                    <label>Name:</label>
                    <input name="fullname" />
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Email</label>
                    <input name="phone" />
                </div>
                <div>
                    <label>Email</label>
                    <input name="address" />
                </div>
                <div>
                    <label>Email</label>
                    <input name="office" />
                </div>
                <div>
                    <label>Email</label>
                    <input name="state" />
                </div>
                <div>
                    <label>Email</label>
                    <input name="country" />
                </div>
                <div>
                    <label>Email</label>
                    <input name="gender" />
                </div>

                <div>
                    <button>Submit</button>
                </div>
            </form>
        </>
    )
}