"use client";

import Form from "@/app/(pages)/research/Form";
import Modal from "@/components/Modal";
import { databases } from "@/lib/appwrite";
import { getImgBBUrl } from "@/lib/imgbb";
import { FormEvent } from "react";
import { toast } from "react-toastify";

const AddButton = () => {
  const handleAdd = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    let thumbnail: string | null | undefined = null;
    const thumbnailInput = formData.get("thumbnail") as File | null;
    const modal = document.getElementById("Add-Research");
    if (modal) {
      (modal as HTMLDialogElement).close(); // Close the modal after update
    }
    if (thumbnailInput && thumbnailInput.size > 0) {
      thumbnail = await getImgBBUrl([thumbnailInput]);
    }
    const newData: {
      title: FormDataEntryValue;
      content: FormDataEntryValue;
      ref: FormDataEntryValue | null;
      code: FormDataEntryValue | null;
      time: FormDataEntryValue;
      thumbnail?: string | null | undefined;
    } = {
      title: formData.get("title") ?? "",
      content: formData.get("content") ?? "",
      ref: formData.get("ref") || null,
      code: formData.get("code") || null,
      time: formData.get("time") || new Date().toISOString(),
    };

    // Only update thumbnail if a new one was uploaded
    if (thumbnail) {
      newData.thumbnail = thumbnail;
    }
    try {
      await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_RESEARCH!,
        "unique()",
        newData
      );
      toast.info("Successfully added information");
    } catch (error) {
      toast.error("Failed to add information");
      console.error(error);
    }

    // Reload the page
    location.reload();
  };

  return (
    <Modal id="Add-Research" title="Edit">
      <form onSubmit={handleAdd} className="flex flex-col w-full gap-3">
        <Form />
        <button className="btn btn-info" type="submit">
          Update
        </button>
      </form>
    </Modal>
  );
};

export default AddButton;
