"use client";
import { useForm } from "react-hook-form";

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/addSchool", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("School added successfully!");
    } else {
      alert("Error adding school");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h1>Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} placeholder="School Name" /><br/>
        {errors.name && <p>Name is required</p>}

        <input {...register("address", { required: true })} placeholder="Address" /><br/>
        <input {...register("city", { required: true })} placeholder="City" /><br/>
        <input {...register("state", { required: true })} placeholder="State" /><br/>

        <input {...register("contact", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="Contact Number" /><br/>
        {errors.contact && <p>Invalid contact</p>}

        <input type="email" {...register("email_id", { required: true })} placeholder="Email" /><br/>
        {errors.email_id && <p>Email required</p>}

        <button type="submit">Add School</button>
      </form>
    </div>
  );
}
