import React from "react";

export const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>, setStatus: React.Dispatch<React.SetStateAction<"idle" | "sending" | "success" | "error">>) => {
    // prevent default form submission behavior
     event.preventDefault();
    setStatus("sending");

    // grab the data directly from the form
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ciliandimarian@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (response.ok) {
        setStatus("success");
        form.reset(); // clear the form
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.log("Error submitting form:", error);
    }
  };

