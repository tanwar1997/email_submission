import React,{useState} from "react"
export default function EmailForm({ onSubmit }: { onSubmit: (email: string) => void }) {
    const [email , setEmail] = useState('')


    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(email);
        setEmail('');
        console.log("value submited")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button>submit</button>
            </form>
        </>
    )
}