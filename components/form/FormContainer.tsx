"use client";

import { actionFunction } from "@/utils/type";
import { useFormState } from "react-dom";
import { useToast } from "../ui/use-toast";
import { useEffect } from "react";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
