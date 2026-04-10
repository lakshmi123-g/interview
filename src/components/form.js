import React, { useState } from "react"

export default function Form() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: ""
    })
const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({
        ...form,
        [name]:value
    })
}
    return (
        <div>
            <input type="text" name="first name"
             placeholder="enter first name"
             onChange={handleChange}
             value={form.firstName}
              />
               <input type="text" name="second name"
             placeholder="enter Second name"
              onChange={handleChange}
             value={form.lastName}
              />
        </div>
    )
}