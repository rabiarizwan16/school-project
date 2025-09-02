"use client";
import { useForm } from "react-hook-form";

export default function AddSchool() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    formData.append("image", data.image[0]); // image upload

    const res = await fetch("/api/addSchool", {
      method: "POST",
      body: formData,
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
        <input {...register("name")} placeholder="School Name" /><br/>
        <input {...register("address")} placeholder="Address" /><br/>
        <input {...register("city")} placeholder="City" /><br/>
        <input {...register("state")} placeholder="State" /><br/>
        <input {...register("contact")} placeholder="Contact Number" /><br/>
        <input type="email" {...register("email_id")} placeholder="Email" /><br/>

        {/* New image upload input */}
        <input type="file" {...register("image")} /><br/>

        <button type="submit">Add School</button>
      </form>
    </div>
  );
}
