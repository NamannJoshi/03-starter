"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

type SubmitBtnType = {
  className?: string;
  name?: string;
};

function SubBtn(props: SubmitBtnType) {
  const { pending } = useFormStatus();
  const { name, className } = props;
  return (
    <section>
      <Button
        type="submit"
        className={`capitalize ${className}`}
        disabled={pending}
        size="lg"
      >
        {pending ? (
          <>
            <ReloadIcon className="mr-4 h-4 w-4 animate-spin" />
            ...Please wait
          </>
        ) : (
          name
        )}
      </Button>
    </section>
  );
}
export default SubBtn;
