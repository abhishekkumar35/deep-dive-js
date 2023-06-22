"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CourseForm from "@components/CourseForm";
import LexicalTextEditor from "@components/LexicalTextEditor/LexicalTextEditor";

const CreateCourse = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [course, setCourse] = useState({
    courseName: "",
    courseDescription: "",
    courseOverview: "",
    price: 0,
    discountInPercentage: 0,
    metaData: {
      title: "",
      description: "",
      keywords: "",
    },
  });

  const createCourse = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/course", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          ...course,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <CourseForm
        type="Create"
        course={course}
        setCourse={setCourse}
        isSubmitting={isSubmitting}
        handleSubmit={createCourse}
      />

      <LexicalTextEditor />
    </>
  );
};

export default CreateCourse;
